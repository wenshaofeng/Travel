<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont back">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        请输入城市/景点/游玩主题</div>
       <div class="header-right">{{this.city}}
       <span class="iconfont city"> &#xe62d;</span>
        </div>
   </div>

</template>

<script>
  //export default 指的是导出，意思是定一个一个组件，然后把组件导出出去

  export default{
    name:'HomeHeader',
      props:{
        city: String
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
          font-size .4rem
          margin-left .2rem
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
        width 1.24rem
        float right
        text-align center
        .city
          font-size .1rem


</style>
