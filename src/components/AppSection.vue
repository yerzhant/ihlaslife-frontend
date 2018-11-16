<template>
    <v-card class="rounded-borders pb-1 elevation-5">
        <header
            class="px-3 py-3 orange lighten-3 primary--text text--darken-2 text-uppercase font-weight-medium"
        >{{section.name}}</header>
        <section class="mx-3 mt-3 pa-3 deep-purple lighten-5 rounded-borders rounded-borders_top">
            <div class="mb-3 grey--text text--darken-3">{{section.quote}}</div>
            <div
                class="font-italic text-xs-right grey--text text--darken-1 font-weight-light"
            >{{section.quoteSource}}</div>
        </section>
        <v-carousel
            hide-delimiters
            :cycle="false"
            class="mx-3 mt-2 mb-3 elevation-5"
            :class="{ 'hide-controls': hideControls }"
            style="width: auto"
        >
            <v-carousel-item v-for="action in actions" :key="action.id">
                <action-card :action="action" @toggled="hideControls = !hideControls"/>
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
      hideControls: false,
    }
  },
  created() {
    this.actions.push({
      id: 1,
      description: 'dsf asdfd asfsa',
      image: 'img-1.jpg',
      totalAmount: 12300,
      paidAmount: 3300,
      paymentDesc: 'Payment for по акции',
    })
    this.actions.push({
      id: 2,
      description: 'dsfsdfsdfsd sdf asdfa',
      image: 'img-2.jpg',
      totalAmount: 1230,
      paidAmount: 932,
      paymentDesc: 'Payment for an action',
    })
    this.actions.push({
      id: 3,
      description: 'dsfsdfsdfsdf dsf dasf das',
      image: 'img-3.jpg',
      totalAmount: 1243,
      paidAmount: 303,
      paymentDesc: 'Payment for an action',
    })
  },
  components: {
    ActionCard,
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
    .v-card {
        box-shadow: none !important;
        border-radius: 0;
    }
}
section.rounded-borders {
  border: 1px solid #d1c4e9 !important;
}
.v-carousel.hide-controls {
  /deep/ .v-carousel__prev,
  /deep/ .v-carousel__next {
    display: none;
  }
}
</style>
