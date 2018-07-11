import {action} from './action'

/**
 * Action type for {Nil}
 * @constant
 * @type {Action}
 */
export const NIL_TYPE = '@@NIL'

/**
 * Returns a Nil object
 * @constant
 * @type {Action}
 */
export const Nil = action<any>(NIL_TYPE, {})
