import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Homepage from '@/pages/Homepage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
