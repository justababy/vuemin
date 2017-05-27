import ajax from './ajax'
import cookie from './cookie'
import date from './date'
import number from './number'
import url from './url'
import nav from './nav'

const util = {
  ajax: ajax.ajax,
  cookie: cookie.cookie,
  getUrlParam: url.getUrlParam,
  beautyUrl: url.beautyUrl,
  fordight: number.fordight,
  formatNum: number.formatNum,
  getDateString: date.getDateString,
  navAuthFilter: nav.navAuthFilter,
}

export default util