/**
 * Created by tushar on 25/06/18
 */

import * as assert from 'assert'
import {describe, it} from 'mocha'
import {List, action} from '../'
import {isList} from '../src/list'

describe('list', () => {
  it('should return true if the obj is a List', () => {
    const actual = List(
      action('A', 100),
      action('B', 100)
    )
    assert.ok(isList(actual))
  })
  it('should return false if the obj not a List', () => {
    assert.ok(!isList(action('A', [10])))
  })
})