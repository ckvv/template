#!/usr/bin/env node

import { initCommand } from '#command'
import { Command } from 'commander'
import config from '../package.json' with { type: 'json' }

const program = new Command()

program
  .name(config.name)
  .description(config.description)
  .version(config.version)

initCommand(program)
program.parse()
