<template>
    <v-navigation-drawer app right v-model="states.sideBar" class="deep-purple lighten-5">
        <v-toolbar flat color="orange lighten-4">
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="primary--text text--darken-1 font-weight-medium">Перевести на карту</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
            <v-list-tile v-for="item in items" :key="item.card">
                <v-list-tile-action>
                    <v-img
                        height="30"
                        contain
                        :src="require('@/assets/' + item.icon + '-logo.png')"
                    />
                </v-list-tile-action>
                <v-list-tile-content class="deep-purple--text">
                    <v-list-tile-title>{{ item.card }}</v-list-tile-title>
                    <v-list-tile-title>{{ item.name }}</v-list-tile-title>
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
        { card: '5169 4931 7104 3345', name: 'GULNUR SABDINA', icon: 'kaspi' },
      ],
    }
  },
}
</script>
