import {Action, action} from './action'
import {isAction} from './isAction'
import {isList} from './isList'
import {isNil} from './isNil'

/**
 * Flattens a nested action
 * @param {Action<T>} _action
 * @return {Array<Action<T>>}
 */

export const flattenActions = <T>(_action: Action<T>): Array<Action<T>> => {
  const _ = _action as any
  if (isNil(_)) return []
  if (isList(_)) {
    return _.value.reduce(
      (acc: Array<Action<T>>, curr: Action<T>) =>
        acc.concat(flattenActions(curr)),
      []
    )
  }
  if (!isAction(_.value)) return [_]
  const flattenedValues = (flattenActions(_.value) as Array<Action<T>>) as any
  return flattenedValues.map((value: Action<T>) => action(_.type, value))
}
