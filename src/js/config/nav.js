const nav = [{
  'text': 'level-1',
  'auth': 'AUTH_LEVEL_1',
  'children': [{
    'text': 'level-2',
    'path': '/',
    'auth': 'AUTH_HOME',
    'end': true,
    'children': [{
      'text': 'headerbar-1',
      'path': '/',
      'auth': 'AUTH_HOME'
    },{
      'text': 'headerbar-2',
      'path': '/noauth' 
    }]
  }]
}]

export default nav