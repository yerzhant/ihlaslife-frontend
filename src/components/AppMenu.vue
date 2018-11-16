<template>
  <v-navigation-drawer app v-model="states.menu" class="deep-purple lighten-5">
    <v-toolbar flat color="orange lighten-3">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-img :src="require('../assets/logo.png')" height="35" contain/>
          </v-list-tile-action>
          <v-list-tile-title class="title primary--text text--darken-2">ИХЛЯС life</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <template v-for="(item, i) in items">
        <v-list-tile v-if="item.title" :key="i" :to="item.link">
          <v-list-tile-action>
            <v-icon color="deep-purple">mdi-{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="deep-purple--text">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-else :key="i"></v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['states'],
  data() {
    return {
      items: [
        { title: 'Главная', icon: 'home', link: '/' },
        { title: 'Банковские реквизиты', icon: 'bank', link: '/' },
        { title: 'Контанты', icon: 'contacts', link: '/' },
        { title: 'О сообществе', icon: 'information', link: '/' },
        { divider: true },
        { title: 'Главнаяd', icon: 'whatsapp', link: '/' },
        { title: 'Главная', icon: 'facebook', link: '/' },
      ],
    }
  },
}
</script>
