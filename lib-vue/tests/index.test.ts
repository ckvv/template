import { assert, it } from 'vitest';

import { addition, subtraction } from '../src';

it('addition', () => {
  assert.equal(addition(1, 2), 3);
});

it('subtraction', () => {
  assert.equal(subtraction(1, 2), -1);
});
