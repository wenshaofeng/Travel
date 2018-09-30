<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Weekend",
    data (){
      return{
        recommendList :[
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg",
            title:"东部华侨城大侠谷",
            desc:"浪漫深圳，浪漫的华侨城大峡谷"
          },{
            id:'0002',
            imgUrl:"http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg",
            title:"东部华侨城大侠谷",
            desc:"浪漫深圳，浪漫的华侨城大峡谷"
          },{
            id:'0003',
            imgUrl:"http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg",
            title:"东部华侨城大侠谷",
            desc:"浪漫深圳，浪漫的华侨城大峡谷"
          },{
            id:'0004',
            imgUrl:"http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg",
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
  .item-img-wrapper
      height 0
      overflow hidden
      padding-bottom 33.9%
     .item-img
        width 100%
    .item-info
      flex 1
      padding 0.2rem 0.2rem
      .item-title
        line-height .48rem
        font-size .28rem
        ellipsis()
      .item-desc
        line-height .4rem
        font-size .20rem
        ellipsis()

</style>
