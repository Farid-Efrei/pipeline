// sum.test.js
import { expect, test } from 'vitest'
import { add } from './sum'

test('adds 1 + 4 to equal 5', () => {
  expect(add(1, 4)).toBe(4)
})