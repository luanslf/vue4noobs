<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="deep-purple"
                dark
                flat
              >
                <v-toolbar-title>Formulário de Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Conta"
                    type="text"
                    color="deep-purple"
                    v-model="login"
                  />
                  <v-text-field
                    label="Senha"
                    type="password"
                    color="deep-purple"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-card-text >Não possui uma conta? Clique
                  <span>
                    <router-link
                      to="/register"
                      style="text-decoration: none; color: purple">
                      aqui
                    </router-link>
                  </span>
                </v-card-text>
                <v-spacer />
                <v-btn
                  color="deep-purple"
                  dark
                  @click.prevent="sendForm"
                >Entrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    sendForm() {
      localStorage.setItem('loginForm', JSON.stringify({
        login: this.login,
        password: this.password,
      }));
      console.log('Tudo certo!');
      console.log(JSON.parse(localStorage.getItem('loginForm')));
      this.$router.push('/dashboard');
    },
  },
};
</script>
