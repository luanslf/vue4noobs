import types from './mutations_types';

export default {
  actions: {
    authenticatedUser(context, user) {
      context.commit(types.AUTHENTICATED_USER, user);
    },
  },
};
