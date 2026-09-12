import { expect, test } from 'vitest'
import { Vector2 } from './geometry'

test('calculates magnitude of <3,4> to equal 5', () => {
  let v = new Vector2(3, 4)
  expect(v.magnitude()).toBe(5)
})

test('calculates mangnitude squared of <3,4> to equal 25', () => {
  let v = new Vector2(3, 4)
  expect(v.magnitude_squared()).toBe(25)
})
