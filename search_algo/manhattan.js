// g = cost -> 1
//f score = g cost + heuristic value of node
// heuristic = nb de deplacement pour case mal placé
// 4, 5, 8 -> cases
// 1, 1, 1 -> heuristic

Log = (size) => {
  console.log(size)
}

heuristic = (current, goal, n_size) => {
  let h = 0
  for (let i = 0; i < n_size; i++) {
    for (let j = 0; j < n_size; j++) {
      if (current[i][j] != goal[i][j] && current[i][j] != 0) {
        let good_column = Math.ceil(current[i][j] / n_size - 1)
        let good_index = current[i][j] % n_size - 1
        if (good_index == -1)
          good_index = n_size - 1
        h += Math.abs(good_column - i) + Math.abs(good_index - j)
      }
    }
  }
  return h
}

manhattan = (n_size, start, goal) => {
  let h = heuristic(start, goal, n_size)
  let g = 0
  let f = g + h
  Log({n_size, start, goal, h})
  return start
}

module.exports = {
  heuristic: heuristic,
  manhattan: manhattan
}