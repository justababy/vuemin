const state = {
  headerMenus: [],
}

const getters = {
  headerMenus: state => state.headerMenus,
}

const actions = {
}

const mutations = {
  HEADER_MENUS(state, headerMenus) {
    state.headerMenus = headerMenus || []
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
