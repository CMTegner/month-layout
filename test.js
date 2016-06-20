var test = require('tape')
var layout = require('.')

test('return matrix of weeks and days', function (t) {
  var options = {
    year: 2016,
    month: 5,
  }
  var expected = [
    [-1, -1, -1,  1,  2,  3,  4],
    [ 5,  6,  7,  8,  9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, -1, -1],
  ]
  var result = layout(options)
  t.deepEquals(result, expected)
  t.end()
})

test('configurable start of week', function (t) {
  var options = {
    year: 2016,
    month: 5,
    startOfWeek: layout.MONDAY,
  }
  var expected = [
    [-1, -1,  1,  2,  3,  4,  5],
    [ 6,  7,  8,  9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, -1, -1, -1],
  ]
  var result = layout(options)
  t.deepEquals(result, expected)
  t.end()
})

