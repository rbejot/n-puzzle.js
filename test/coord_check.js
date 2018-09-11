const assert = require('assert')
  , validate = require('../parser/validate')

describe('Testing cells coord.', () => {
  it('should return an error because N_size does\'nt feet the number of cells', () => {
    assert.equal("For a N_size of 3 you should give 9 cells, but instead you gave 2.", validate(['3', '1', '2']))
  })
  it('should return an error when no empty cell is given', () => {
    assert.equal("You should add an empty cell (0) in your puzzle", validate(['2','1', '2', '3', '4']))
  })
  it('should return an error when an under 2 by 2 puzzle is given', () => {
    assert.equal("Your puzzle should at least make a 2 by 2 square", validate(['1','1']))
  })
  it('should return an error when an under 2 by 2 puzzle is given with 0 as N_size', () => {
    assert.equal("Your puzzle should at least make a 2 by 2 square", validate(['0']))
  })
  it('check duplicate', () => {
    assert.equal("Check your cells value, you should have all numbers from 0 to 3 for this puzzle.", validate(['2','0', '0', '3', '4']))
  })
})