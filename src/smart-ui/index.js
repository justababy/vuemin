import Header from './packages/header'
import Tabbar from './packages/tabbar'
import List from './packages/list'

const install = (Vue, config = {}) => {
  Vue.component(Header.name, Header)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(List.name, List)
}

module.exports = {
  install
}