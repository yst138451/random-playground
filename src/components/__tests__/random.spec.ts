import  { describe, expect, test } from 'vitest'
import  { sum } from '../random'

describe('sum module', () => {
  test('adds 1 + 2 + 1 to equal 4', () => {
    expect(sum(1, 2)).toBe(4)
  })
})
