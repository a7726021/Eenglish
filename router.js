import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'C:/Users/lenovo/Desktop/mapp/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index.js'),
          LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
            .default,
        })
      : require('../../layouts/index.js').default,
    routes: [
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__index" */ '../index.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../index.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/locales/en-US',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__locales__en-US" */ '../locales/en-US.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../locales/en-US.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/locales/zh-CN',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__locales__zh-CN" */ '../locales/zh-CN.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../locales/zh-CN.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/rout/detail',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__rout__detail" */ '../rout/detail.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../rout/detail.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/views/firstCount',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__views__firstCount" */ '../views/firstCount.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../views/firstCount.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/views/my/my',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__views__my__my" */ '../views/my/my.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../views/my/my.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/views/search/search',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__views__search__search" */ '../views/search/search.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../views/search/search.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/views/shopping/detail/typedetail',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__views__shopping__detail__typedetail" */ '../views/shopping/detail/typedetail.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../views/shopping/detail/typedetail.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/views/shopping/shopping',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__views__shopping__shopping" */ '../views/shopping/shopping.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../views/shopping/shopping.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/views/shopping/type',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__views__shopping__type" */ '../views/shopping/type.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../views/shopping/type.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        path: '/views/user/userLogin',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__views__user__userLogin" */ '../views/user/userLogin.js'),
              LoadingComponent: require('C:/Users/lenovo/Desktop/mapp/src/component/loading.js')
                .default,
            })
          : require('../views/user/userLogin.js').default,
        _title: 'mapp',
        _title_default: 'mapp',
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/lenovo/Desktop/mapp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'mapp',
        _title_default: 'mapp',
      },
    ],
    _title: 'mapp',
    _title_default: 'mapp',
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/lenovo/Desktop/mapp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'mapp',
    _title_default: 'mapp',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
