<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="part of list"
          :key = "part.id"
      >
        <div class="item-img-wrapper">
          <img :src="part.imgUrl"  class="item-img"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{ part.title}} </p>
          <p class="item-desc"> {{part.desc}}  </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Weekend",
    props:{
        list :Array
    }



  }

</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    line-height .8rem
    background #eee
    padding-left .3rem
  .item-img-wrapper
      height 0
      overflow hidden
      padding-bottom 37.9%
     .item-img
        width 100%
    .item-info
      flex 1
      padding 0.2rem 0.2rem
      .item-title
        line-height .48rem
        font-size .34rem
        ellipsis()
      .item-desc
        line-height .4rem
        font-size .24rem
        ellipsis()

</style>
