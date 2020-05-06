<template>
    <v-app-bar color="deep purple accent-4" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu left bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                 <v-list-item
                   v-for="({ title, href }, index) in itemsList"
                   :key="index"
                   @click="redirect(href)"
                 >
                   <v-list-item-title>{{ title }}</v-list-item-title>
                 </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      itemsList: [
        { title: 'Registrar', href: '/register' },
        { title: 'Entrar', href: '/login' },
      ],
    };
  },
  props: {
    title: String,
  },
  methods: {
    redirect(href) {
      this.$router.push(href);
    },
  },
};
</script>
