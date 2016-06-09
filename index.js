var DAYS_IN_WEEK = 7
var SUNDAY = 0
var MONDAY = 1

function getDaysInMonth (year, month) {
  var date = new Date(year, month + 1)
  date.setDate(0)
  return date.getDate()
}

module.exports = function (options) {
  var offset = new Date(options.year, options.month).getDay() - (options.startOfWeek === MONDAY ? 1 : 0)
  var daysInMonth = getDaysInMonth(options.year, options.month)
  var weeks = Math.ceil((offset + daysInMonth) / DAYS_IN_WEEK)
  var cells = weeks * DAYS_IN_WEEK
  var result = []
  var week
  for (var i = 0; i < cells; i++) {
    if (i % DAYS_IN_WEEK === 0) {
      week = []
      result.push(week)
    }
    var day = i + 1 - offset
    week.push((day < 1) || (day > daysInMonth) ? -1 : day)
  }
  return result
}

module.exports.SUNDAY = SUNDAY
module.exports.MONDAY = MONDAY
