import multiguard from 'vue-router-multiguard';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';

import DashboardHome from './components/dashboard/DashboardHome.vue';

const authenticated = (to, from, next) => {
  if (localStorage.getItem('authenticated')) {
    next();
  } else {
    next({
      path: '/',
    });
  }
};

const unauthenticated = (to, from, next) => {
  if (!localStorage.getItem('authenticated')) {
    next();
  } else {
    next({
      path: '/',
    });
  }
};

export default [
  {
    path: '/login',
    component: Login,
    beforeEnter: multiguard([unauthenticated]),
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: multiguard([authenticated]),
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
