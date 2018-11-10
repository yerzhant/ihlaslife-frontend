<template>
  <v-navigation-drawer app v-model="states.menu">
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>mdi-{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
      items: [{ title: 'Главная', icon: 'home' }],
    }
  },
}
</script>
