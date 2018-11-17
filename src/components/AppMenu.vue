<template>
  <v-navigation-drawer app v-model="states.menu" class="deep-purple lighten-5">
    <v-toolbar flat color="orange lighten-4">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-img :src="require('../assets/logo.png')" height="35" contain/>
          </v-list-tile-action>
          <v-list-tile-title class="primary--text text--darken-1 font-weight-medium">ИХЛЯС life</v-list-tile-title>
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
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon color="accent">mdi-whatsapp</v-icon>
        </v-list-tile-action>
        <v-list-tile-content class="deep-purple--text">
          <v-list-tile-title>Стать волонтёром</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="https://www.facebook.com/groups/ihlasfund/">
        <v-list-tile-action>
          <v-icon color="#4267B2">mdi-facebook</v-icon>
        </v-list-tile-action>
        <v-list-tile-content class="deep-purple--text">
          <v-list-tile-title>Отчеты</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
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
        { title: 'Банковские реквизиты', icon: 'bank', link: '/accounts' },
        { title: 'Контанты', icon: 'map-marker', link: '/contacts' },
        { title: 'О сообществе', icon: 'information', link: '/about' },
      ],
    }
  },
}
</script>
