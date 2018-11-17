<template>
    <v-card class="rounded-borders pb-1 elevation-5">
        <header
            class="px-3 py-3 orange lighten-3 primary--text text--darken-2 text-uppercase font-weight-medium"
        >{{title}}</header>
        <slot></slot>
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
    border-top-left-radius: 0;
  }
}
</style>
