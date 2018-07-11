import {Action, action} from './action'

/**
 * Action type for Nil
 * @constant
 */
export const LIST_ACTION_TYPE = '@@LIST'

/**
 * Creates a new Action from a list of actions
 * @function
 * @param  {... Action} actions
 * @returns {Action}
 */
export function List<T>(
  ...actions: Array<Action<T>>
): Action<Array<Action<T>>> {
  return action(LIST_ACTION_TYPE, actions)
}
