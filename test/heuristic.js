const assert = require('assert')
  , manhattan = require('../search_algo/manhattan')

describe('Testing manhattan heuristic calculation', () => {
  it('should return the good heuristic value', () => {
    const puzzle = {
      start: ['1', '2', '3', '0', '4', '6', '7', '5', '8'],
      goal: ['1', '2', '3', '4', '5', '6', '7', '8', '0'],
      n_size: 3
    }
    assert.equal(3, manhattan.heuristic(puzzle.start, puzzle.goal, puzzle.n_size))
  })
  it('should return the good heuristic value', () => {
    const puzzle = {
      start: ['1', '8', '3', '0', '4', '6', '7', '5', '2'],
      goal: ['1', '2', '3', '4', '5', '6', '7', '8', '0'],
      n_size: 3
    }
    assert.equal(7, manhattan.heuristic(puzzle.start, puzzle.goal, puzzle.n_size))
  })
  it('should return the good heuristic value', () => {
    const puzzle = {
      start: ['7', '8', '3', '0', '4', '6', '1', '5', '2'],
      goal: ['1', '2', '3', '4', '5', '6', '7', '8', '0'],
      n_size: 3
    }
    assert.equal(11, manhattan.heuristic(puzzle.start, puzzle.goal, puzzle.n_size))
  })
  it('should return the good heuristic value', () => {
    const puzzle = {
      start: ['5', '3', '2', '4', '1', '6', '7', '8', '9', '10', '11', '12', '13', '14', '0', '15'],
      goal: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '0'],
      n_size: 4
    }
    assert.equal(5, manhattan.heuristic(puzzle.start, puzzle.goal, puzzle.n_size))
  })
})