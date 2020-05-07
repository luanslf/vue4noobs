import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      login: '',
      password: '',
    },
    authenticated: localStorage.getItem('authenticated') || '',
  },
  mutations: {
    authenticatedUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    authenticatedUser(context, user) {
      context.commit('authenticatedUser', user);
    },
  },
  getters: {
    welcomeUser(state) {
      return `Olá, ${state.user.login}!`;
    },
  },
  modules: {
  },
});
