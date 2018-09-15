const manhattan = require('./manhattan')

module.exports = algo = (n_size, cells) => {
  let start = new Array(n_size)
  for (let i = 0; i < n_size; i++) {
    start[i] = new Array(n_size)
  }
  let col = 0
  let index = 0
  for (let i = 0; i < cells.length; i++) {
    if (i % n_size === 0 && i > 0) {
      col++
      index = 0
    }
    start[col][index] = cells[i]
    index++
  }
  let goal = new Array(n_size)
  for (let i = 0; i < n_size; i++) {
    goal[i] = new Array(n_size)
  }
  col = 0
  index = 0
  for (let i = 0; i < n_size * n_size; i++) {
    if (i % n_size === 0 && i > 0) {
      col++
      index = 0
    }
    if (i < n_size * n_size && i + 1 < n_size * n_size)
      goal[col][index] = i + 1
    else
      goal[col][index] = 0
    index++
  }
  return manhattan.manhattan(n_size, start, goal)
}