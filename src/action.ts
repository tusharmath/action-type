import {curry2} from 'ts-curry'

/**
 * Interface for Action
 * @interface
 */
export interface Action<T> {
  type: string | number
  value: T
}

function createAction<T>(type: string | number, value: T) {
  return {type, value}
}

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
} = curry2(createAction)
