<template>
  <v-layout row wrap="">
    <v-flex v-for="section in sections" :key="section.id" xs12 md6>
      <actions :section="section"/>
    </v-flex>
  </v-layout>
</template>

<script>
import Actions from '@/components/Actions.vue'

export default {
  data() {
    return {
      sections: [],
    }
  },
  created() {
    this.sections.push({
      id: 1,
      title: 'Title',
      quote: 'l;kjsd f;aljsf asdl;jfasdkl;fjdasdsaf asdffasd fasdfasdfasdfasd',
      quoteSource: 'sdfsdfsdfsd',
    })
    this.sections.push({
      id: 2,
      title: 'Title 2',
      quote: 'l;kjsd f;aljsf asdl;jfasdkl;fjdasdsaf asdffasd fasdfasdfasdfasd',
      quoteSource: 'sdfsdfsdfsd',
    })
  },
  components: {
    Actions,
  },
}
</script>
