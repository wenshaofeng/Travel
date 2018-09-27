<template>
<div>
   <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="part of recommendList"
      :key = "part.id"
      >
        <div class="item-img-wrapper">
          <img :src="part.imgUrl"  class="item-img"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{ part.title}} </p>
          <p class="item-desc"> {{part.desc}}  </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"HomeRecommend",
    data (){
       return{
         recommendList :[
           {
             id:'0001',
             imgUrl:"http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg",
             title:"东部华侨城大侠谷",
             desc:"浪漫深圳，浪漫的华侨城大峡谷"
           },{
             id:'0002',
             imgUrl:"http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg",
             title:"东部华侨城大侠谷",
             desc:"浪漫深圳，浪漫的华侨城大峡谷"
           },{
             id:'0003',
             imgUrl:"http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg",
             title:"东部华侨城大侠谷",
             desc:"浪漫深圳，浪漫的华侨城大峡谷"
           },{
             id:'0004',
             imgUrl:"http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg",
             title:"东部华侨城大侠谷",
             desc:"浪漫深圳，浪漫的华侨城大峡谷"
           }

         ]
       }
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
