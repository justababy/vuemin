import Api from '../config/api'
import Router from '../config/router'
import Util from '../util'

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

export default (context, from, to, next) => {
  getAuth().then(() => {
    let auth = true
    Router.forEach(i => {
      if (i.path == to.path) {
        if (i.auth && authArr.indexOf(i.auth) == -1) {
          auth = false
        }
      }
    })
    if (auth) {
      context.execute()
    } else {
      next('noauth')
    }
  })
}