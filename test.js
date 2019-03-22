'use strict'

const {strictEqual} = require('assert')
const br2nl = require('.')

strictEqual(br2nl('foo<br>bar'), 'foo\nbar')
strictEqual(br2nl('foo<br> bar'), 'foo\n bar')
strictEqual(br2nl('foo<br/>bar'), 'foo\nbar')
strictEqual(br2nl('foo<br />bar'), 'foo\nbar')
strictEqual(br2nl('foo<br a="b" />bar'), 'foo\nbar')
strictEqual(br2nl('foo<br/>bar<br>baz'), 'foo\nbar\nbaz')
