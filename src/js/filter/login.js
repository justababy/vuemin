import Router from '../config/router'

export default (context, from, to, next) => {
  Router.forEach(i => {
    if (i.path == to.path) {
      if (i.login === false) {
        context.execute()
      } else {
        // 这里写具体登录逻辑
        context.execute()
      }
    }
  })
}