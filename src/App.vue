<template>
    <v-app>
        <v-toolbar
            color="primary"
            dark
            app
            scroll-off-screen
            class="rounded-borders rounded-borders_bottom"
        >
            <v-toolbar-side-icon @click.stop="sideBarsStates.menu = !sideBarsStates.menu"></v-toolbar-side-icon>
            <v-btn icon>
                <v-img :src="require('./assets/logo.png')"/>
            </v-btn>
            <v-toolbar-title @click.stop="$router.push('/')">ИХЛЯС life</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-facebook-box</v-icon>
            </v-btn>
            <v-btn icon @click.stop="sideBarsStates.sideBar = !sideBarsStates.sideBar">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
        <app-menu :states="sideBarsStates"/>
        <app-side-bar :states="sideBarsStates"/>
        <v-content>
            <router-view></router-view>
        </v-content>
        <app-footer/>
    </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppMenu from './components/AppMenu.vue'
import AppSideBar from './components/AppSideBar.vue'

export default {
  data() {
    return {
      sideBarsStates: {
        menu: false,
        sideBar: false,
      },
    }
  },
  components: {
    AppFooter,
    AppMenu,
    AppSideBar,
  },
}
</script>
