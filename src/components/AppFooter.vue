<template>
  <v-footer height="auto" class="d-block footer">
    <v-img :src="require('@/assets/ihlas-in-footer.png')" class="v-img mx-auto mt-5 mb-4"></v-img>
    <v-card
      class="primary primary--text text--lighten-5 font-weight-bold pl-3 py-1 footer-card rounded-borders rounded-borders_top"
    >Осталось сауабов на
      <v-chip color="accent" text-color="white">
        <v-icon left small>mdi-gift</v-icon>
        <strong class="subheading pt-serif font-weight-bold">777 777</strong>
        <v-icon right small>mdi-gift</v-icon>
      </v-chip>тенге
    </v-card>
  </v-footer>
</template>

<style lang="scss" scoped>
@import '../styles/vars';

.footer {
  background: rgba($color: $primary, $alpha: .2);
}
.v-img {
  width: 40%;
}
.footer-card {
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>
