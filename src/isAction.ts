import {Action} from './action'

/**
 * Created by tushar on 01/07/18
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
