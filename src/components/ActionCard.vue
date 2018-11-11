<template>
    <div class="card" :style="`background-image: url(/storage/images/${action.image}`">12</div>
</template>

<script>
export default {
  props: ['action'],
}
</script>

<style lang="scss" scoped>
.card {
    height: 100%;
    background: no-repeat center;
    background-size: cover;
}
</style>
