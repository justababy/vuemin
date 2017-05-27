## 1. 开发环境部署
    $ npm install vuemin -g             # 安装vuemin
    $ vuemin xxx                        # 创建项目xxx目录
    $ cd xxx                            # 进入xxx目录
    $ npm install                       # 安装开发依赖包
    $ npm run dev                       # 启动webpack-dev-server

## 2. 目录结构
    src  
    ├── js           # javascript文件
        ├── config   # 框架所需的配置文件
        ├── filter   # 渲染页面之前经过的过滤器，可以进行判断登录态、用户权限等操作 
        ├── layout   # 页面布局结构
        ├── pages    # 主体显示区域页面片，对应了不同的路由，视图逻辑主要定义在这里
        ├── store    # 数据存储，使用Vuex进行状态管理
        ├── util     # 工具函数，按照类别归入不同的文件夹中 
        ├── main.js  # webpack打包入口文件
    ├── assets       # 资源文件，包括图片、字体文件等
    ├── smart-ui     # 移动端组件库
    ├── t-ui         # PC端组件库 
    ├── mock         # 假接口文件 
    ├── sass         # 公共样式与样式变量文件
    └── index.html   # 入口html文件

## 3. 路由配置
在src/js/config/router.js中配置，具体参数如下：

| 参数名        | 值（举例）    | 功能                |是否必填 |
|:-------------:|:-------------:|:-------------------:|:-------:|
| path          | /home         | 路由路径            |是       |
| component     | HOME          | 引入具体页面vue文件 |是       |
| auth          | 'AUTH_HOME'   | 路由权限            |否       |
| login         | true          | 是否进行登录校验    |否       |
| layout        | LayoutPure    | 选用哪一套layout    |否       |

## 4. 菜单配置
菜单包括左侧主菜单和头部次级菜单，统一在src/js/config/nav.js中配置，具体参数如下：

| 参数名        | 值（举例）             | 功能                                                 |是否必填     |
|:-------------:|:----------------------:|:----------------------------------------------------:|:-----------:|
| icon          | fa fa-cubes            | 图标，使用font awesome                               |否           |
| text          | 页面一                 | 菜单文本                                             |是           |
| path          | /home                  | 点击跳转路由路径                                     |最后一层必填 |
| auth          | 'AUTH_HOME'            | 菜单权限                                             |否           |
| children      | 与父节点结构相同的对象 | 子菜单                                               |否           |
| end           | true                   | 该参数之后的children由<br>左侧主菜单转到头部次级菜单 |否           |

## 5. 接口配置
项目中所有的接口地址统一在src/js/config/api.js中管理。<br>
开头为'/mock/'的接口会直接读取mock文件夹下的假接口文件。<br>
其他的接口会走webpack-dev-server代理，更改代理的配置在根目录下webpack.config.development.js文件中修改。

## 6. filter配置
filter是在每次路由跳转页面渲染之前进行的一系列的校验。<br>
所有的filter会按照src/js/config/filter.js中所定义的顺序顺序执行。

## 7. ajax请求
### 7.1 ajax默认参数配置

ajax请求的默认参数在src/js/config/ajax.js中配置，具体参数如下：

| 参数名        | 值（举例）| 功能                                      |是否必填 |
|:-------------:|:---------:|:-----------------------------------------:|:-------:|
| method        | get       | 请求方法                                  |是       |
| timeout       | 1000      | 超时时间                                  |是       |
| responseType  | json      | 返回数据格式                              |是       |
| beforeSuccess | 函数      | 请求成功之前的处理<br>通常用作错误码处理  |是       |

### 7.2 错误码字典配置
在src/js/config/ajaxcode.js中配置

### 7.3 ajax方法的使用
业务逻辑中调用ajax方法时使用Util.ajax方法，具体参数如下：

| 参数名        | 值（举例）| 功能                                     |是否必填 |
|:-------------:|:---------:|:----------------------------------------:|:-------:|
| url           | Api.xxx   | 请求地址                                 |是       |
| data          | 对象      | 请求参数                                 |否       |
| method        | get       | 请求方法                                 |否       |
| timeout       | 1000      | 超时时间                                 |否       |
| responseType  | json      | 返回数据格式                             |否       |
| beforeSuccess | 函数      | 请求成功之前的处理<br>通常用作错误码处理 |否       |
| success       | 函数      | 请求成功之后的处理                       |否       |
| error         | 函数      | 请求失败之后的处理                       |否       |