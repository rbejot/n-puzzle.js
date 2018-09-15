const algo = require('../search_algo/algo')

module.exports = validate = (coord) => {
  const n_size = coord[0]
  if (!n_size)
    return "No coordinates in this file"
  if (n_size < 2)
    return "Your puzzle should at least make a 2 by 2 square"
  if (coord.length - 1 !== n_size * n_size)
    return ("For a N_size of " 
    + n_size + " you should give "
    + (n_size * n_size) 
    + " cells, but instead you gave " 
    + (coord.length - 1) + ".")
  let cells = coord.slice(1, coord.length)
  let sorted = cells.slice().sort((a, b) => a - b)
  if (sorted[0] !== "0")
    return "You should add an empty cell (0) in your puzzle"
  for (let i = 0; i < sorted.length; i++) {
    if (parseInt(sorted[i]) !== i)
      return "Check your cells value, you should have all numbers from 0 to " + (n_size * n_size - 1) + " for this puzzle."
  }
  return algo(n_size, cells)
}