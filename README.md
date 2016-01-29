# Non resizable array

[![Build Status](https://travis-ci.org/vaalentin/non-resizable-array.svg?branch=master)](https://travis-ci.org/vaalentin/non-resizable-array)

Array that don't resize itself when `push` and `pop` are called.
A separate index is used.
This is usefull in scenarios where the array is under a lot of changes, and can make the garbage collector go crazy (in a game loop for instance).

## Installation

```sh
$ npm install --save non-resizable-array
```

## Usage

```js
const array = new NonResizableArray();

array.push(0);
const value = array.pop(0);

for(let i = 0; i < array.length; i++) {
  const value = array.peek(i);
}
```

## API

#### `array = new NonResizableArray()`

Create a new instance.

#### `value = array.peek(index)`

Get the value at `index`, without modifying the array.

#### `array.push(value)`

Push a new `value` at the tail of the array.

#### `value = array.pop()`

Get the tail `value` of the array. Modify the array.

#### `array.clear()`

Clear internal array excess.
For instance, if you push a 100 items, then remove 50, the excess is 100 - 50 = 50.

#### `array.dispose()`

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/non-resizable-array/blob/master/LICENSE.md) for more details.
