import types from './mutations_types';

export default {
  mutations: {
    [types.AUTHENTICATED_USER](state, payload) {
      state.user = payload;
    },
  },
};
