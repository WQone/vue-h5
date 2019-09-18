import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const asyncRouterMap = [
  {
    path: '/Home',
    name: '首页',
    meta: { menu: true, icon: 'home-o' },
    component: () => import('../views/Test'),
  },
  {
    path: '/Home/Item',
    name: '详情',
    component: () => import('../views/Test/Item'),
  },
];

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../views/Layout'),
      redirect: 'Home',
      children: asyncRouterMap,
    },
  ],
});
