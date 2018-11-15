<template>
    <div class="card" :style="`background-image: url(/storage/images/${action.image}`">
        <div class="amounts">
            <div class="amount">Нужно:
                <v-chip color="blue">{{action.totalAmount | formatNumber}}</v-chip>
            </div>
            <div class="amount">Собрано:
                <v-chip color="primary">{{action.paidAmount | formatNumber}}</v-chip>
            </div>
            <div class="amount">Осталось:
                <v-chip color="accent">{{action.totalAmount - action.paidAmount | formatNumber}}</v-chip>
            </div>
            <div class="progress-bar">
                <div class="progress" :style="`width: ${progress}%`"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['action'],
  data() {
      return {
          progress: this.action.paidAmount / this.action.totalAmount * 100
      }
  }
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
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 13px 20px 10px;
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
.progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 3px;
    background-color: $accent;
}
.progress {
    height: 100%;
    background-color: $primary;
}
</style>
