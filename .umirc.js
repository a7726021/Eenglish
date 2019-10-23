// const route = require('./src/pages/router/index.js')
// const PageRoutes = route.routes
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react',
    {
      antd: true,
      dva: true,
      dynamicImport: {
        loadingComponent: './component/loading.js',//异步加载loading效果
        webpackChunkName: true,
        level: 3,
      },
      locale: {
     
        default: 'zh-CN', //默认语言 zh-CN，如果 baseSeparator 设置为 _，则默认为 zh_CN
        baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
        antd: true, // 是否启用antd的<LocaleProvider />
        baseSeparator: '-', // 语言默认分割符 -
      },
      title: 'mapp',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    },
  ],
  ],
  // routes:PageRoutes
}
