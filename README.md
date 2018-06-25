# Action-Type

Type class specification for actions.

# Index

- [Specification](#specification)
- [Usage](#usage)
- [API](#api)
  - [action](#action)
  - [isAction](<#isaction(-)>)
  - [Nil](#nil)
- [Related Libraries](#related-libraries)

# Specification

1.  An `Action` consists of two properties viz. `type` and `value`.
2.  `action.type` is of type `string` or `number`.
3.  `action.value` is of type `any`. It could also be of type `Action`
4.  The object is an immutable and should never be updated.

# Usage

An action is an object which contains two properties — `type` and `value`.

```ts
interface Action<T> {
  type: string
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

## Nil

A default action that represents nothingness.

```ts
import {Nil} from 'action-type'

function logic(a: number) {
  if (a > 10) return action('greater', a - 10)
  if (a < 10) return action('lesser', 10 - a)
  return Nil
}
```

# Related Libraries

- [Hoe](https://github.com/tusharmath/hoe) An action emitter library for the DOM.
- [Update Function Types](https://github.com/tusharmath/update-function-types) Utilities for doing more complex operations based on `Action` and some `State`
