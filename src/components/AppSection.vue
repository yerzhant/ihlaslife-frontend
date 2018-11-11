<template>
    <v-card class="rounded-borders">
        <header
            class="px-3 py-2 primary lighten-2 primary--text text--lighten-5 text-uppercase font-weight-medium"
        >{{section.title}}</header>
        <section class="ma-3 pa-3 secondary lighten-3 rounded-borders">
            <div class="mb-3 grey--text text--lighten-3">{{section.quote}}</div>
            <div class="font-italic text-xs-right secondary--text text--darken-4 font-weight-light">{{section.quoteSourse}}</div>
        </section>
    </v-card>
</template>

<script>
export default {
  props: ['section'],
}
</script>
