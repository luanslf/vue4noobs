export default {
  getters: {
    welcomeUser(state) {
      return `Olá, ${state.user.login}!`;
    },
  },
};
