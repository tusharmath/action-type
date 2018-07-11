import {curry2} from 'ts-curry'

/**
 * Interface for Action
 * @interface
 */
export interface Action<T> {
  type: string | number
  value: T
}

/**
 * Action type for Nil
 * @constant
 */
export const LIST_ACTION_TYPE = '@@LIST'

/**
 * Action type for {Nil}
 * @constant
 * @type {Action}
 */
export const NIL_TYPE = '@@NIL'

/**
 * Creates a new Action type object
 * @function
 * @param {string|number} type
 * @param {any} value
 * @returns {Action}
 */
export const action: {
  <T>(type: string | number, value: T): Action<T>
  <T>(type: string | number): {(value: T): Action<T>}
} = curry2(function<T>(type: string | number, value: T) {
  return {type, value}
})

/**
 * Checks if the object is of Action type
 * @function
 * @param {any} obj
 * @returns {boolean}
 */
export const isAction = (obj: any): obj is Action<any> => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    obj.hasOwnProperty('type') &&
    obj.hasOwnProperty('value') &&
    typeof obj.type === 'string'
  )
}

/**
 * Creates a new Action from a list of actions
 * @function
 * @param  {... Action} actions
 * @returns {Action}
 */
export const List = <T>(...actions: Array<Action<T>>) => {
  return action(LIST_ACTION_TYPE, actions)
}

/**
 * Checks if the object is of type List
 * @function
 * @param {any} obj
 * @returns {boolean}
 */
export const isList = (obj: any): obj is Action<Array<any>> => {
  return isAction(obj) && obj.type === LIST_ACTION_TYPE
}

/**
 * Returns a Nil object
 * @constant
 * @type {Action}
 */
export const Nil = action<any>(NIL_TYPE, {})

/**
 * Checks if the object is {Nil} or not
 * @function
 * @param {any} obj
 * @returns {boolean}
 */
export const isNil = (obj: any): obj is Action<any> =>
  isAction(obj) && obj.type === NIL_TYPE
