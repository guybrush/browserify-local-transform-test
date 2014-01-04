// we dont need to do anything here for the test
module.exports = transform
var through = require('through')
function transform(file) {
  return through(write,end)
  function write() {}
  function end() {
    this.queue('var foo = "this got transformed"')
    this.queue(null)
  }
}
