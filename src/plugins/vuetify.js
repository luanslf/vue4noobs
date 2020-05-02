import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  themes: {
    light: {
      primary: '#a142f5',
      secondary: '#f5f5f5',
      accent: '#c463e6',
      error: '#e66365',
    },
  },
  theme: {
    /* dark: true, */
    light: true,
  },
});
