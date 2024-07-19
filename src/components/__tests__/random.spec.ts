import  { describe, expect, test, vi } from 'vitest'
import  { sum } from '../random'

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
