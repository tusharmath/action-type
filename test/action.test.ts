import {describe, it} from 'mocha'
import * as assert from 'assert'
import {action, isAction} from '../'

describe('action', () => {
  it('should return an action', () => {
    const actual = action('WONDER', {count: 10})
    const expected = {type: 'WONDER', value: {count: 10}}
    assert.deepEqual(actual, expected)
  })

  it('should be curried', () => {
    const actual = action('WONDER')({count: 10})
    const expected = {type: 'WONDER', value: {count: 10}}
    assert.deepEqual(actual, expected)
  })

  it('should accept type as number', () => {
    const actual = action(120)({count: 10})
    const expected = {type: 120, value: {count: 10}}
    assert.deepEqual(actual, expected)
  })
})

describe('isAction', () => {
  it('should return true if obj is an action', () => {
    const actual = isAction(action('WONDER', {count: 10}))
    assert.ok(actual)
  })

  it('should return true if obj contains type/value', () => {
    const actual = isAction({type: 'WONDER', value: {count: 10}})
    assert.ok(actual)
  })

  it('should return false for primitive values', () => {
    assert.ok(!isAction(null))
    assert.ok(!isAction(undefined))
    assert.ok(!isAction(false))
    assert.ok(!isAction(0))
    assert.ok(!isAction(true))
  })
})
