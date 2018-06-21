# Action-Type
Type class for actions.

# Usage
An action is an object which contains two properties — `type` and `value`.

```ts
interface Action<T> {
  type:  string
  value: T
}
```

# API


## action
A utility that helps in creating a new object of action type. The function is curried by default and provides type guarantee.

```ts
import {action} from 'action-type'

action('click', {x: 10, y: 20})

action('click')({x: 10, y: 20}) // curried version
```

## isAction( )
A utility function that detects if the object is of `Action` type.

```ts
import {isAction} from 'action-type'

isAction({}) // returns false
isAction(action('WWW', null)) // returns true
```
