<template>
  <v-app>
    <v-toolbar color="primary" app></v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter'

export default {
  data() {
    return {
      //
    }
  },
  components: {
    AppFooter,
  },
}
</script>
