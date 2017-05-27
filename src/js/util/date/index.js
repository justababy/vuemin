export default {
  getDateString(dateObj, separator) {
    let year, month, day
    separator = separator ? separator : '-'
    year = dateObj.getFullYear()
    month = dateObj.getMonth() + 1
    day = dateObj.getDate()
    let addZero = (i) => {
      if (i < 10) i = '0' + i
      return i
    }
    return year + separator + addZero(month) + separator + addZero(day)
  },
}