<template>
  <div>
   <!-- <img src="./assets/logo.png">-->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">

      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <div class="tab-item"><router-link to="/goods" class="link">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings" class="link">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller" class="link">商家</router-link></div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '@/components/header/header.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import {urlParse} from '@/common/js/util'
Vue.use(VueResource) // 注册

const ERR_OK = 0

export default {
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data)
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
@import "./common/stylus/index.styl"
.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  border-1px(rgba(7,17,27,0.1))
  .tab-item
    flex: 1
    text-align: center
    font-size: 14px
    color :rgb(77,85,93)
    & .active
      color :rgb(240,20,20)
</style>
