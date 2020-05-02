import Home from './pages/Home.vue';
import Login from './pages/Login.vue';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    redirect: '/',
  },
];
