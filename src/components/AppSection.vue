<template>
  <v-card class="rounded-borders pb-1 elevation-5">
    <header
      class="px-3 py-3 orange lighten-4 primary--text text--darken-1 text-uppercase font-weight-bold"
    >{{title}}</header>
    <div class="pa-3">
      <slot></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .v-card {
    box-shadow: none !important;
    border-radius: 0;
  }
}
</style>
