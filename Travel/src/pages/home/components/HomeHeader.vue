<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont back">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        请输入城市/景点/游玩主题</div>
    <router-link to="/city">
        <div class="header-right">{{this.city}}
         <span class="iconfont city"> &#xe62d;</span>
        </div>
    </router-link>

   </div>

</template>

<script>
  //export default 指的是导出，意思是定一个一个组件，然后把组件导出出去
import {mapState} from 'vuex'
  export default{
    name:'HomeHeader',
    computed :{
      ...mapState(['city']),
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varliable.styl'

    .header
      line-height .86rem
      background $bgColor
      color white
      display flex
      .header-left
        width .64rem
        float left
        .back
          text-align  center
          font-size .3rem
          margin-left .3rem
      .header-input
          flex 1
          background :#fff
          margin-top .12rem
          height .64rem
          line-height .64rem
          margin-left .2rem
          color #ccc
          padding-left .2rem
      .header-right
        min-width  1.04rem
        padding 0 0.15rem
        float right
        text-align center
        color :#fff
        .city
          font-size .18rem


</style>
