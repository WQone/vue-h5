import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const asyncRouterMap = [
  {
    path: '/Home',
    name: '首页',
    meta: { menu: true, icon: 'home-o' },
    component: () => import('../views/Home'),
  },
  {
    path: '/classify',
    name: '分类',
    meta: { menu: true, icon: 'gift-o' },
    component: () => import('../views/Classify'),
  },
  {
    path: '/classify',
    name: '购物车',
    meta: { menu: true, icon: 'shopping-cart-o', info: 5 },
    component: () => import('../views/Classify'),
  },
  {
    path: '/classify',
    name: '个人',
    meta: { menu: true, icon: 'friends-o', dot: true },
    component: () => import('../views/Classify'),
  },
];

export default new Router({
  mode: 'history',
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
