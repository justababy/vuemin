export default {
  fordight(dight, how) {  
    dight = Math.round(dight * Math.pow(10, how)) / Math.pow(10, how)
    return dight
  },
  formatNum(s) {
    let str = String(s), firstVal = str.substring(0, 1), reg = /^\+?[1-9][0-9]*$/
    let l, r, val, t = ''
    s = Math.abs(s) + ''
    if (reg.test(s)) {
      l = s.split('').reverse()
    } else {
      l = s.split('.')[0].split('').reverse()
      r = s.split('.')[1]
    }
    for (let i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '')
    }
    if (r) {
      val = t.split('').reverse().join('') + '.' + r
    } else {
      val = t.split('').reverse().join('')
    }
    if (firstVal == '-' ) {
      return firstVal + val
    } else {
      return val
    }
  },
}