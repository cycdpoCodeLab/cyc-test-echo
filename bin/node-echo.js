#!/usr/bin/env node

var
  argv = require('argv')
  , echo = require('../lib/echo')
;

console.log(echo(argv.join(' ')));
