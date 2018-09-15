// g = cost -> 1
//f score = g cost + heuristic value of node
// heuristic = nb de deplacement pour case mal placé
// 4, 5, 8 -> cases
// 1, 1, 1 -> heuristic

Log = (size) => {
  console.log(size)
}

heuristic = (current, goal, n_size) => {
  return h
}

manhattan = (n_size, start, goal) => {
  let h = heuristic(start, goal, n_size)
  let g = 0
  let f = g + h
  Log({n_size, start, goal})
  return start
}

module.exports = {
  heuristic: heuristic,
  manhattan: manhattan
}