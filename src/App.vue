<template>
  <v-app>
    <v-toolbar color="primary" app></v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer height="auto">
      <v-card width="100%" justify-center>
        <v-img :src="require('@/assets/ihlas-in-footer.png')" justify-center class="v-img"></v-img>
          <v-card-text>
            <span>Осталось сауабов:</span>
            <span class="accent--text pr-1 pl-1 amount-left">777 777</span>
            <span>тг.</span>
          </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss" scoped>
.v-img {
  width: 50%;
}
.amount-left {
  font-family: $pt-serif;
  font-weight: bold;
  font-size: 16px;
}
</style>
