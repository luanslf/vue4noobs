import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';

import DashboardHome from './components/dashboard/DashboardHome.vue';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('authenticated')) {
        next();
      } else {
        next({ path: '/' });
      }
    },
    children: [
      {
        path: '/',
        component: DashboardHome,
      },
    ],
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
