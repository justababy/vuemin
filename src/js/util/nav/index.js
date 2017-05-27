import Api from '../../config/api'
import Util from '../../util'

let authArr = []
let getAuth = () => {
  return new Promise((resolve) => {
    if (authArr.length) {
      resolve(authArr)
    } else {
      Util.ajax({
        url: Api.vcheck,
        success(res) {
          authArr = res.data
          resolve(authArr)
        }
      })
    }
  })
}
let navAuth = (nav) => {
  return nav.filter(i => {
    if (i.auth && authArr.indexOf(i.auth) == -1) {
      return false
    }
    if (i.children && i.children.length) {
      i.children = navAuth(i.children)
    }
    return true
  })
}

export default {
  navAuthFilter(nav) {
    return new Promise((resolve) => {
      getAuth().then(() => {
        resolve(navAuth(nav))
      })
    })
  }
}