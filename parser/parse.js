const validate = require('./validate')

cleanPuzzle = (content) => {
  let puzzle = []
  for (let i = 0; i < content.length; i++) {
    if (content[i] !== undefined)
      puzzle.push(...content[i].split(" "))
  }
  return puzzle.filter((item) => item != '' && item != '\t');
}

module.exports = parse = (content) => {
  content = content.split('\n')
  for (let i = 0; i < content.length; i++) {
    content[i] = content[i].trim()
    if (content[i][0] !== "#" && (parseInt(content[i][0]) || content[i][0] === "0")) {
      for (let j = 0; j < content[i].length; j++) {
        if (content[i][j] !== " " && content[i][j] !== "#" && (!parseInt(content[i][j]) && content[i][j] !== "0"))
          return ("Invalid character : \"" + content[i][j] + "\" at line:" + (i + 1) + " col:" + j)
        else if (content[i][j] === "#") {
          content[i] = content[i].slice(0, j)
          break
        }
      }
    } else if (content[i][0] === "#" || content[i][0] === undefined) {
      delete content[i]
    } else if (content[i][0] !== "#") {
      return ("Invalid character : \"" + content[i][0] + "\" at line:" + (i + 1) + " col:0")
    } 
  }
  return validate(cleanPuzzle(content))
}