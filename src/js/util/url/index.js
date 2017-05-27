export default {
  getUrlParam(name) {
    let result = window.location.href.match(new RegExp('[\?\&]' + name + '=([^\&]+)', 'i'))
    if (result == null || result.length < 1) {
      return ''
    }
    return result[1]
  },
  beautyUrl() {
    let url = window.location.href
    url = url.split('?')[0]
    return url
  },
}