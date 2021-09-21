#!/usr/bin/env node
const program = require('commander')
//策略模式
program.version(require('../package.json').version)
program.command('init <name>')
  .description('init project')
  .action(name => {
    console.log("init" + name);
  })

