import type { Command } from 'commander'
import { consola } from 'consola'

export function serve(program: Command) {
  program
    .command('serve')
    .argument('<script>')
    .option('-p, --port <number>', 'port number', v => Number.parseInt(v), 80)
    .action((argument, options) => {
      consola.info('Run script %s on port %s', argument, options.port)
    })
}
