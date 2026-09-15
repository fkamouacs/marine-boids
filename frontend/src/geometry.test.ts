import { describe, expect, test } from 'vitest'
import { Vector2 } from './geometry'

describe('Vector2.magnitude', () => {
  test('calculates magnitude of <3,4> to equal 5', () => {
    let v = new Vector2(3, 4)
    expect(v.magnitude()).toBe(5)
  })

  test('calculates magnitude of <0,0> to equal 0', () => {
    let v = new Vector2(0, 0)
    expect(v.magnitude()).toBe(0)
  })
})

describe('Vector2.magnitude_squared', () => {
  test('calculates mangnitude squared of <3,4> to equal 25', () => {
    let v = new Vector2(3, 4)
    expect(v.magnitude_squared()).toBe(25)
  })
})

describe('Vector2.plus', () => {
  test('adds <6,-2> and <-4,4> to equal <2,2>', () => {
    let a = new Vector2(6, -2);
    let b = new Vector2(-4, 4);
    expect(a.plus(b)).toEqual(new Vector2(2, 2))
  })

  test('adds <1,1> and <0,0> to equal <1,1>', () => {
    let a = new Vector2(1, 1);
    let b = new Vector2(0, 0);
    expect(a.plus(b)).toEqual(a);
  })
})
