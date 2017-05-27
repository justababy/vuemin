import LayoutPure from '../layout/pure/index.vue'

// 非按需加载
import Noauth from '../pages/noauth.vue'
import Home from '../pages/home.vue'

// 按需加载
// const Noauth = () => import( /* webpackChunkName: "Noauth" */ '../pages/noauth.vue')
// const Home = () => import( /* webpackChunkName: "Home" */ '../pages/Home.vue')

const router = [
  { path: '/noauth', component: Noauth, login: false, layout: LayoutPure },
  { path: '/', component: Home, auth: 'AUTH_HOME' },
]

export default router