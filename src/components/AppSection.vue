<template>
    <v-card class="rounded-borders pb-1 elevation-5">
        <header
            class="px-3 py-3 primary lighten-2 primary--text text--lighten-5 text-uppercase font-weight-medium"
        >{{section.name}}</header>
        <section class="ma-3 pa-3 secondary lighten-3 rounded-borders rounded-borders_top">
            <div class="mb-3 grey--text text--lighten-3">{{section.quote}}</div>
            <div
                class="font-italic text-xs-right secondary--text text--darken-4 font-weight-light"
            >{{section.quoteSource}}</div>
        </section>
        <v-carousel hide-delimiters :cycle="false" class="ma-3 elevation-5">
            <v-carousel-item v-for="action in actions" :key="action.id">
                <action-card :action="action"/>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>

<script>
import ActionCard from '@/components/ActionCard.vue'

export default {
  props: ['section'],
  data() {
    return {
      actions: [],
    }
  },
  created() {
    this.actions.push({
      id: 1,
      description: 'dsf asdfd asfsa',
      image: 'img-1.jpg',
      totalAmount: 12300,
      paidAmount: 3300,
    })
    this.actions.push({
      id: 2,
      description: 'dsfsdfsdfsd sdf asdfa',
      image: 'img-2.jpg',
      totalAmount: 1230,
      paidAmount: 932,
    })
    this.actions.push({
      id: 3,
      description: 'dsfsdfsdfsdf dsf dasf das',
      image: 'img-3.jpg',
      totalAmount: 1243,
      paidAmount: 303,
    })
  },
  components: {
    ActionCard,
  },
}
</script>

<style lang="scss" scoped>
.v-carousel {
  width: auto;
}
</style>
