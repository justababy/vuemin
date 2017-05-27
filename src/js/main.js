import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import Filter from './config/filter'
import Router from './config/router'
import Clone from 'clone'
import LayoutDefault from './layout/default/index.vue'
import VueHighcharts from 'vue-highcharts'
import SmartUI from '../smart-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../sass/common/base.scss'
Vue.use(VueRouter)
Vue.use(VueHighcharts)
Vue.use(SmartUI)
Vue.use(ElementUI)

let routes = []
Router.forEach(i => {
  let route = { path: i.path }
  route.component = i.layout ? i.layout : LayoutDefault
  route.children = [{ path: '/', component: i.component }]
  routes.push(route)
})

const router = new VueRouter({routes})
router.beforeEach((to, from, next) => {
  const chain = {
    filters: Clone(Filter),
    execute() {
      if (this.filters.length <= 0) {
        next()
      } else {
        let filter = this.filters.shift()
        filter(this, from, to, next)
      }
    }
  }
  chain.execute()
})

const vm = new Vue({
  router,
  store
}).$mount('#app')