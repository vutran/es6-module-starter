import test from 'ava';
import myModule from '../src';

test('returns a string', t => {
  t.is(myModule, 'ES6 Module Starter');
});
