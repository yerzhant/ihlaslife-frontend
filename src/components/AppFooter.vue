<template>
  <v-footer
    height="auto"
    class="d-block"
    :class="{ 'menu-open': sideBarStates.menu, 'side-bar-open': sideBarStates.sideBar }"
  >
    <v-img :src="require('@/assets/ihlas-in-footer.png')" class="mx-auto my-4"/>
    <v-card
      class="primary primary--text text--lighten-5 font-weight-bold pl-3 py-1 rounded-borders rounded-borders_top"
    >Осталось сауабов на
      <v-chip color="accent" text-color="white">
        <v-icon left small>mdi-gift</v-icon>
        <strong class="subheading pt-serif font-weight-bold">{{777777 | formatNumber}}</strong>
        <v-icon right small>mdi-gift</v-icon>
      </v-chip>тенге
    </v-card>
  </v-footer>
</template>

<script>
export default {
  props: ['sideBarStates'],
}
</script>


<style lang="scss" scoped>
@import '../styles/vars';

.v-footer {
  background-color: #f3f3f3;
}
.v-image {
  width: 30%;
}
.v-card {
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
}
.menu-open {
  @media (min-width: 500px) {
    margin-left: 300px;
  }
}
.side-bar-open {
  @media (min-width: 500px) {
    margin-right: 300px;
  }
}
</style>
