import axios from 'axios'
import ajaxConfig from '../../config/ajax'

export default {
  ajax(param) {
    axios({
      url: param.url,
      params: (param.data != undefined && param.method != 'post') ? param.data : {}, //get方法传参用params
      data: (param.data != undefined && param.method == 'post') ? param.data : {}, //post方法传参用data
      method: (param.method != undefined) ? param.method : ajaxConfig.method,
      timeout: (param.timeout != undefined) ? param.timeout : ajaxConfig.timeout,
      responseType: (param.responseType != undefined) ? param.responseType : ajaxConfig.responseType,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    }).then((res) => {
      const data = res.data
      if (!param.beforeSuccess || param.beforeSuccess(data) !== false) {
        if (ajaxConfig.beforeSuccess(data) !== false) {
          if (param.success) {
            param.success(data)
          }
        }
      }
    }).catch((err) => {
      if (param.error) {
        param.error(err)
      } else {
        alert(err)
      }
    })
  },
}