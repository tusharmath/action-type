import {Action, action} from '../src/action'
import {flattenActions} from '../src/flatten-actions'
import {List} from '../src/List'
import * as assert from 'assert'
import {Nil} from '../src/Nil'

describe('flattenActions()', () => {
  it('should flatten combine type', () => {
    const a = action('A', 1)
    const b = action('B', 2)
    const c = action('C', 3)

    const actual = flattenActions(List(a, b, c))
    const expected = [a, b, c]
    assert.deepEqual(actual, expected)
  })

  it('should flatten combine type inside another', () => {
    const a = action('A', 1)
    const b = action('B', 2)
    const c = action('C', 3)

    const actual = flattenActions(action('X', List(a, b, c)))
    const expected = [action('X', a), action('X', b), action('X', c)]
    assert.deepEqual(actual, expected)
  })

  it('should flatten multiple levels of nesting', () => {
    const a = List(action('A1', 1), action('A2', 1))
    const b = List(action('B1', 2), action('B2', 2))
    const c = List(action('C1', 3), action('C2', 3))

    const actual = flattenActions(action('X', List(a, b, c)))
    const expected = [
      action('X', action('A1', 1)),
      action('X', action('A2', 1)),
      action('X', action('B1', 2)),
      action('X', action('B2', 2)),
      action('X', action('C1', 3)),
      action('X', action('C2', 3))
    ]
    assert.deepEqual(actual, expected)
  })

  it('should ignore simple actions', () => {
    const actual = flattenActions(action('A', 1))
    const expected = [action('A', 1)]
    assert.deepEqual(actual, expected)
  })

  it('should return an empty array for NoEffect', () => {
    const actual = flattenActions(Nil())
    const expected: Array<Action<any>> = []
    assert.deepEqual(actual, expected)
  })

  it('should return an empty array for nested NoEffect', () => {
    const actual = flattenActions(action('BBB', action('AAA', Nil())))
    const expected: Array<Action<any>> = []
    assert.deepEqual(actual, expected)
  })
})
