const validate = require('./validate')

module.exports = parse = (content) => {
  content = content.split('\n')
  let puzzle = []
  for (let i = 0; i < content.length; i++) {
    content[i] = content[i].trim()
    if (content[i][0] !== "#" && (parseInt(content[i][0]) || content[i][0] === "0")) {
      for (let j = 0; j < content[i].length; j++) {
        if (parseInt(content[i][j]) || content[i][j] === "0")
          puzzle.push(content[i][j])
        else if (content[i][j] !== " " && content[i][j] !== "#" && !parseInt(content[i][j]))
          return ("Invalid character : \"" + content[i][j] + "\" at line:" + (i + 1) + " col:" + j)
        else if (content[i][j] === "#")
          break
      }
    } else if (content[i][0] === undefined) {
      return ("Empty file")
    } else if (content[i][0] !== "#") {
      return ("Invalid character : \"" + content[i][0] + "\" at line:" + (i + 1) + " col:0")
    }
  }
  return validate(puzzle)
}