/**
 * Created by tushar on 25/06/18
 */

import {Action, action} from './action'
import {isAction} from './isAction'

const NIL_TYPE = '@@NIL'

export const Nil = action<any>(NIL_TYPE, {})

export const isNil = (obj: any): obj is Action<any> =>
  isAction(obj) && obj.type === NIL_TYPE
