const assert = require('assert')
  , argv_send = require('../main')

describe('Testing argv', () => {
  it('should display an error when it tries to open a wrong file', (done) => {
    argv_send("file_for_testing", (res) => {
      assert.equal("Your puzzle should be a .txt", res)
      done()
    })
  })
  it('should display an error when it tries to open a wrong .txt file', (done) => {
    argv_send("testing.txt", (res) => {
      assert.equal("Something went wrong", res)
      done()
    })
  })
  it('should display an error when no arguments is given', (done) => {
    argv_send(undefined, (res) => {
      assert.equal("No arguments provided.\nTry :\nnode main.js file.txt (A / B / C)", res)
      done()
    })
  })
})

describe('Testing file\'s content', () => {
  it('should display an error when comments are bad formatted', (done) => {
    argv_send("./puzzles/error/bad_comment.txt", (res) => {
      assert.equal("Invalid character : \"c\" at line:1 col:0", res)
      done()
    })
  })
  it('should display an error when an unknown character is find', (done) => {
    argv_send("./puzzles/error/unknown_char.txt", (res) => {
      assert.equal("Invalid character : \"$\" at line:2 col:6", res)
      done()
    })
  })
  it('should display an error when the file is empty', (done) => {
    argv_send("./puzzles/error/nothing.txt", (res) => {
      assert.equal("Empty file", res)
      done()
    })
  })
  it('should display an error when the file contain only \\n', (done) => {
    argv_send("./puzzles/error/backslash.txt", (res) => {
      assert.equal("Empty file", res)
      done()
    })
  })
})