/**
 * Created by tushar on 25/06/18
 */

import * as assert from 'assert'
import {describe, it} from 'mocha'
import {List, action, isList} from '..'

describe('List', () => {
  it('should return true if the obj is a List', () => {
    const actual = List(action('A', 100), action('B', 100))
    assert.ok(isList(actual))
  })
})
