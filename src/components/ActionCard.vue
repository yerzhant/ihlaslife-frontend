<template>
  <div class="card" :style="`background-image: url(/storage/images/${action.image}`">
    <div class="desc-button" @click="toggle" :class="{ opened: opened }">
      <v-icon size="35" color="primary">mdi-menu-up</v-icon>
    </div>
    <div class="description" :class="{ opened: opened }">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sint vero, quae saepe ad exercitationem vitae. Quisquam doloremque modi atque consectetur, tenetur odio officiis. Reprehenderit nulla enim impedit suscipit iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deserunt, corrupti ut inventore quas veniam cupiditate ab illum amet perferendis sed nam animi fugiat impedit id quae ipsam sapiente. Animi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque facilis exercitationem dicta laudantium reiciendis fugiat, at sit a alias dolorem vel eos totam debitis? Pariatur ab tempora unde quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere minima necessitatibus vero sapiente dolorum repellendus impedit! Molestiae ea delectus aspernatur, fuga, hic minima distinctio voluptas exercitationem, et animi soluta molestias.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, magnam eos! Repellendus, aliquam libero illum sint explicabo corporis eum quam minus ut molestias reiciendis magnam consectetur beatae, minima expedita dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur ad hic voluptatibus neque nobis, ab cumque doloribus quam sit repellendus praesentium sequi quibusdam quis recusandae ea omnis quas obcaecati?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, necessitatibus. Veritatis soluta voluptatibus labore aut, quo voluptatum repellat eaque nemo aliquam nam? Nesciunt animi voluptas exercitationem impedit incidunt maiores quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus a recusandae. Tempore sequi sunt illum quaerat accusantium cupiditate minus! Esse beatae amet suscipit doloremque delectus, dolor tempore reprehenderit nisi!
      </div>
      <div class="form">
        <input
          class="rounded-borders rounded-borders_top"
          placeholder="Введите сумму"
          type="number"
          min="0"
          v-model="amount"
        >
        <button class="rounded-borders rounded-borders_bottom" @click="help">ПОМОЧЬ</button>
      </div>
    </div>
    <div class="amounts">
      <div class="amount">Нужно:
        <v-chip color="deep-purple">{{action.totalAmount | formatNumber}}</v-chip>
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
      opened: false,
      amount: null,
    }
  },
  computed: {
    progress() {
      return (this.action.paidAmount / this.action.totalAmount) * 100
    },
  },
  methods: {
    help() {
      if (this.amount > 0) {
        var widget = new window.cp.CloudPayments()
        widget.charge(
          {
            publicId: 'test_api_00000000000000000000001',
            description: this.action.paymentDesc,
            amount: Number(this.amount),
            currency: 'KZT',
            invoiceId: this.action.id,
          },
          () => {
            this.action.paidAmount += Number(this.amount)
          }
          // function(reason, options) {
          //   console.log('FAIL: ' + reason)
          //   console.log('----: ' + options)
          // }
        )
      }
    },
    toggle() {
      this.opened = !this.opened
      this.$emit('toggled')
    },
  },
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
.description {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 74px;
  top: 335px;
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 15px 20px;
  overflow: hidden;
  transition-property: top, padding;
  transition-duration: 1s;
  &.opened {
    top: 0;
    padding-top: 40px;

    /deep/ .text {
      overflow-y: auto;
    }
  }
}
.form {
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba($color: #ffffff, $alpha: 0.2);
  margin-top: 15px;
  padding-top: 15px;

  $controlWidth: 120px;
  input {
    border: 1px solid $primary;
    padding: 10px;
    width: $controlWidth;
    color: #fff;
    margin-right: 5px;
    outline: none;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus,
    &:hover {
      background-color: rgba($color: $primary, $alpha: 0.2);
    }
  }
  button {
    border: 1px solid $accent;
    padding: 10px;
    width: $controlWidth;
    color: #fff;
    font-weight: bold;
    outline: none;
    &:hover {
      background-color: rgba($color: $accent, $alpha: 0.2);
    }
  }
}
$descButtonSize: 20px;
.desc-button {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 315px;
  right: calc(50% - #{$descButtonSize});
  width: $descButtonSize * 2;
  height: $descButtonSize;
  border: 1px solid rgba($color: $accent, $alpha: 0.5);
  border-bottom: none;
  border-top-right-radius: $descButtonSize * 2;
  border-top-left-radius: $descButtonSize * 2;
  background-color: rgba($color: #673AB7, $alpha: 0.3);
  z-index: 1;
  cursor: pointer;
  padding-top: 2px;
  transition-property: top, transform;
  transition-duration: 1s;
  &.opened {
    transform: rotate(180deg);
    top: 0;
  }
}
.text {
  color: #fff;
  height: 296px;
  overflow: hidden;
}
.amounts {
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 15px 20px;
  color: #fff;
  font-weight: 300;
  font-size: 12px;
  line-height: 1;
  text-align: center;
}
.v-chip {
  display: block;
  font-family: $pt-serif;
  color: #fff;
  margin: 7px 0 0;
  /deep/ &__content {
    height: auto;
    padding: 5px 10px;
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
