/**
 * Created by tushar on 25/06/18
 */

import {Action, action} from './action'
import {isAction} from './isAction'

const LIST_ACTION_TYPE = '@@LIST'
export const List = <T>(...actions: Array<Action<T>>) => {
  return action(LIST_ACTION_TYPE, actions)
}

export const isList = (obj: any): obj is Action<Array<any>> => {
  return isAction(obj) && obj.type === LIST_ACTION_TYPE
}
