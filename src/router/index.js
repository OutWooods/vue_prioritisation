import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Matrix from '@/components/Matrix';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Matrix',
      component: Matrix,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
