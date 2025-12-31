import type { Command } from 'commander'
import { add } from './add.js'
import { serve } from './serve.js'

export function initCommand(program: Command) {
  serve(program)
  add(program)
}
