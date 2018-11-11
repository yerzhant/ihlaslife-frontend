<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="section in sections" :key="section.id" xs12 md6>
                <app-section :section="section"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AppSection from '@/components/AppSection.vue'

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
      quoteSourse: 'sdfsdfsdfsd',
    })
    this.sections.push({
      id: 2,
      title: 'Title 2',
      quote: 'l;kjsd f;aljsf asdl;jfasdkl;fjdasdsaf asdffasd fasdfasdfasdfasd',
      quoteSourse: 'sdfsdfsdfsd',
    })
  },
  components: {
    AppSection,
  },
}
</script>

<style>
</style>
