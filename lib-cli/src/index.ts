/* eslint-disable no-console */
import type { SpawnSyncOptions } from 'node:child_process'
import { spawnSync } from 'node:child_process'
import { EOL } from 'node:os'
import process from 'node:process'

interface SpawnResult {
  stdout: string
  stderr: string
  status: number | null
  error?: Error
}

function runCommand(command: string, args: string[], options: SpawnSyncOptions = {}): SpawnResult {
  const result = spawnSync(command, args, {
    encoding: 'utf-8',
    ...options,
  })

  return {
    stdout: result.stdout as string || '',
    stderr: result.stderr as string || '',
    status: result.status,
    error: result.error,
  }
}

function ensureNonEmptyDiff(options?: { ignores?: string[] }): string {
  const ignores = (options?.ignores ?? ['**/*.log', '**/pnpm-lock.yaml', '**/package-lock.json', '**/yarn.lock'])
    .map(v => `:(top,glob,exclude)${v}`)

  const baseArgs = ['diff', '--no-color', '-U3', '--']

  // staged first
  const staged = runCommand('git', [...baseArgs, '--staged', ...ignores])
  const stagedDiff = staged.stdout.trim()
  if (stagedDiff)
    return stagedDiff

  // working tree next
  const working = runCommand('git', [...baseArgs, ...ignores])
  const workingDiff = working.stdout.trim()
  if (workingDiff)
    return workingDiff

  throw new Error('No changes detected. Stage changes or modify files before generating a commit message.')
}

function buildPrompt(diff: string): string {
  return [
    'You are an assistant that writes git commit messages.',
    'Return a single-line conventional commit: <type>[optional scope]: <description>.',
    'Use English and keep the description under 50 characters.',
    'Only include the commit message text, no explanations.',
    'Diff:',
    diff,
  ].join(EOL)
}

function sanitizeMessage(raw: string): string {
  const message = raw.split(/\r?\n/).map(line => line.trim()).find(Boolean) ?? ''
  return message.replace(/\s+/g, ' ').trim()
}

function isConventional(msg: string): boolean {
  const types = ['feat', 'fix', 'docs', 'dx', 'style', 'refactor', 'perf', 'test', 'workflow', 'build', 'ci', 'chore', 'types', 'wip', 'release']
  // eslint-disable-next-line regexp/no-unused-capturing-group
  const commitRE = new RegExp(`^(revert: )?(${types.join('|')})(\\(.+\\))?: .{1,50}$`)
  return commitRE.test(msg)
}

function tryCodex(prompt: string): string | null {
  const bin = process.env.CODEX_BIN || 'codex'
  const args = process.env.CODEX_ARGS?.split(/\s+/).filter(Boolean) ?? ['exec']
  const useStdin = args.includes('-')
  const result = useStdin
    ? runCommand(bin, args, { input: prompt })
    : runCommand(bin, [...args, prompt])
  if (result.status !== 0) {
    if (result.error)
      console.warn(`[commit-msg] codex execution failed: ${result.error.message}`)
    else if (result.stderr.trim())
      console.warn(`[commit-msg] codex stderr: ${result.stderr.trim()}`)
    return null
  }

  const msg = sanitizeMessage(result.stdout)
  return msg || null
}

function fallbackMessage(): string {
  const status = runCommand('git', ['status', '--short'])
  const files = status.stdout.split(/\r?\n/).map(line => line.trim()).filter(Boolean)
  if (files.length === 0)
    return 'chore: update changes'

  const names = files.slice(0, 3).map(line => line.replace(/^\S+\s+/, ''))
  const summary = names.join(', ')
  const more = files.length > 3 ? ` and ${files.length - 3} more` : ''
  return `chore: update ${summary}${more}`
}

function main(): void {
  try {
    const diff = ensureNonEmptyDiff()
    const prompt = buildPrompt(diff)

    const fromCodex = tryCodex(prompt)
    const candidate = sanitizeMessage(fromCodex ?? '')
    const message = isConventional(candidate) ? candidate : fallbackMessage()

    console.log(message)
  }
  catch (error) {
    const fallback = fallbackMessage()
    console.warn(`[commit-msg] ${error instanceof Error ? error.message : String(error)}. Using fallback message.`)
    console.log(fallback)
  }
}

main()
