var obj = (function () {
  var count = 0
  return {
    increse() {
      return ++count
    },
    decrese() {
      return --count
    }
  }
})()