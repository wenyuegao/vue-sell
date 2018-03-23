<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_cart" v-show="food.count>0"   @click.stop.prevent="decreaseCart">
    </div>
    <div class="cart-count" v-show="food.count>0" > {{food.count}} </div>
    <div class="cart-add icon-add_cart" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      if (!event._constructed) { // 阻止非vue事件
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
        this.food.count = 1
      } else {
        this.food.count++
      }
      this.$emit('add', event.target) // 监听事件
    },
    decreaseCart (event) {
      if (!event._constructed) { // 阻止非vue事件
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size : 0
    .cart-decrease,.cart-add
      display : inline-block
      padding : 12px
    .cart-count
      display : inline-block
      vertical-align :top
      width : 12px
      line-height : 24px
      text-align : center
      font-size : 10px
      color : rgb(147,153,159)
    .cart-add
      display : inline-block
    .icon-remove_cart
      background-image : url("remove_circle_outlin.png")
      background-repeat : no-repeat
      background-size : 20px
    .icon-add_cart
      background-image : url("add_circle.png")
      background-repeat : no-repeat
      background-size : 20px
</style>
