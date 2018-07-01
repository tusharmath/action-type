/**
 * Created by tushar on 25/06/18
 */

import {curry2} from 'ts-curry'

export const action: {
  <T>(type: string | number, value: T): Action<T>
  <T>(type: string | number): {(value: T): Action<T>}
} = curry2(function<T>(type: string | number, value: T) {
  return {type, value}
})

export interface Action<T> {
  type: string | number
  value: T
}

export const isAction = (obj: any): obj is Action<any> => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    obj.hasOwnProperty('type') &&
    obj.hasOwnProperty('value') &&
    typeof obj.type === 'string'
  )
}
