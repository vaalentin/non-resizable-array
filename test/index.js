import test from 'tape';
import NonResizableArray from '../src';

test('should be instanciable', t => {
  t.plan(1);

  const array = new NonResizableArray();

  t.ok(array instanceof NonResizableArray);
});

test('should expose a length attribute', t => {
  t.plan(1);

  const array = new NonResizableArray();

  t.ok(typeof array.length !== 'undefined');
});

test('should be able to push and pop values', t => {
  t.plan(3);

  const array = new NonResizableArray();

  array.push(0);
  array.push(1);
  array.push(10);

  t.equal(array.length, 3);

  array.pop();

  t.equal(array.pop(), 1);
  t.equal(array.length, 1);
});

test('should be able to peek a value', t => {
  t.plan(2);

  const array = new NonResizableArray();

  array.push(1);
  array.push(2);
  array.push(3);

  t.equal(array.peek(1), 2);
  t.equal(array.length, 3);
});

test('should be able to clear underlying array excess', t => {
  t.plan(4);

  const array = new NonResizableArray();

  for(let i = 0; i < 100; i++) {
    array.push(i);
  }

  for(let i = 0; i < 50; i++) {
    array.pop();
  }
  
  t.equal(array._array.length, 100);
  t.equal(array.length, 50);
  
  array.clear();

  t.equal(array._array.length, 50);
  t.equal(array.length, 50);
});
