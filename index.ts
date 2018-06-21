import { curry2 } from 'ts-curry'

class DAction<T> implements Action<T> {
  constructor(readonly type: string, readonly value: T) {}
}

export const action: {
  <T> (type: string, value: T): Action<T>
  <T> (type: string): {(value: T): Action<T>}
} = curry2(function(type: string, value: any) {
  return new DAction(type, value)
})

export const isAction = (obj: any): obj is Action<any> => obj instanceof DAction
