<template>
<div>
   <div class="recommend-title">热销推荐</div>
    <ul>
        <router-link class="item"
                     v-for="part of recommendList"
                     :key = "part.id"
                     tag="li"
                      :to="'/detail/' + part.id"
        >
          <div class="item-img-wrapper">
            <img :src="part.imgUrl"  class="item-img"/>
          </div>
          <div class="item-info">
            <p class="item-title">{{ part.title}} </p>
            <p class="item-desc"> {{part.desc}}  </p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"HomeRecommend",
    props:{
        recommendList : Array
    }
  }

</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    line-height .8rem
    background #eee
    padding-left .3rem
  .item
    overflow hidden
    display flex
    height 1.7rem
    .item-img
      width 1.5rem
      height 1.5rem
      padding 0.1rem
    .item-info
      flex 1
      padding 0.1rem
      min-width 0;
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        background #ff9300
        padding 0 .2rem
        margin-top 0.1rem
        color #fff
        line-height .44rem
        border-radius .05rem
</style>
