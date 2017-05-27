import Api from '../../config/api'
import Util from '../../util'

const state = {
  tableData: [],
}

const getters = {
  tableData: state => state.tableData,
}

const actions = {
  table(context) {
    Util.ajax({
      url: Api.table,
      success(res) {
        context.commit('TABLE_DATA', {value: res.data})
      }
    })
  },
}

const mutations = {
  TABLE_DATA(state, data) {
    state.tableData = data.value
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
