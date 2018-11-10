<template>
  <v-app>
    <v-toolbar
      color="primary"
      dark
      app
      scroll-off-screen
      class="rounded-borders rounded-borders_bottom"
    >
      <v-toolbar-side-icon @click.stop="menu = !menu"></v-toolbar-side-icon>
      <v-toolbar-title>ИХЛЯС Лайф</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-facebook-box</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <app-menu :opened="menu"/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppMenu from './components/AppMenu.vue'

export default {
  data() {
    return {
      menu: false,
    }
  },
  components: {
    AppFooter,
    AppMenu,
  },
}
</script>
