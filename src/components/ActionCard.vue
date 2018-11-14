<template>
    <div class="card" :style="`background-image: url(/storage/images/${action.image}`">
        <div class="amounts">
            <div class="amount">Нужно:
                <v-chip color="blue">9 000</v-chip>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['action'],
}
</script>

<style lang="scss" scoped>
@import '../styles/vars';

.card {
  position: relative;
  height: 100%;
  background: no-repeat center;
  background-size: cover;
}
.amounts {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 10px;
  color: #fff;
  font-weight: 300;
  font-size: 12px;
}
.v-chip {
  font-family: $pt-serif;
  color: #fff;
  margin: 0;
  margin-left: 5px;
  /deep/ &__content {
    height: auto;
    padding: 3px 10px;
    font-weight: bold;
  }
}
</style>
