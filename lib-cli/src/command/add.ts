import type { Command } from 'commander'
import { consola } from 'consola'

export function add(program: Command) {
  program
    .command('add')
    .argument('<first>', 'integer argument', v => Number.parseInt(v))
    .argument('[second]', 'integer argument', v => Number.parseInt(v), 0)
    .action((first, second) => {
      consola.info(`${first} + ${second} = ${first + second}`)
    })
}
