const fs = require('fs')
const parse = require('./parser/parse')

module.exports = argv_send = (argv, ret) => {
  if (!argv) {
    ret('No arguments provided.\nTry :\nnode main.js file.txt (A / B / C)')
  }
  else if (argv.split('.txt').length !== 2) {
    ret('Your puzzle should be a .txt')
  } else {
    fs.readFile(argv, 'utf-8', (err, data) => {
      if (err) ret('Something went wrong')
      else ret(parse(data))
    })
  }
}

if (process.env.npm_lifecycle_event !== 'test') {
  argv_send(process.argv[2], (ret) => {
    console.log(ret)
  })
}