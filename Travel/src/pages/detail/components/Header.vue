<template>
    <div>
      <router-link class="header-abs"
                    tag="div"
                    to="/"
                   v-show="showAbs"
      >
        <span class="iconfont back">&#xe624;</span>
      </router-link>
      <div v-show="!showAbs"
           class="header-fixed"
            :style="opacityStyle"
      >
          <div class="header-left">
            <router-link to="/">
              <span class="iconfont back">&#xe624;</span>
            </router-link>
          </div>
         目标景点
      </div>

    </div>
</template>


<script>
  export default{
    name:'DetailHeader',
    props: [],
    data () {
      return{
        showAbs: true,
        opacityStyle:{
          opacity :0
        }
      }
    },
    methods : {
      handleScroll : function () {
        const top = document.documentElement.scrollTop
        if (top > 35 ){
          const opacity = top/170
          this.opacityStyle = { opacity }
          this.showAbs = false
        }else {
          this.showAbs = true
        }

      }
    },
    activated () {
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated () {
      removeEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import "~styles/varliable.styl"
  .header-abs
    position: absolute
    left: .1rem
    top: .1rem
    width: .72rem
    line-height: .72rem
    text-align center
    background-color rgba(0,0,0,0.6)
    border-radius .36rem
    .back
      color #fff
  .header-fixed
    z-index 4
    top 0
    left 0
    right 0
    overflow hidden
    height .8rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    position fixed
    .header-left
      width .64rem
      position absolute
      left 0.1rem
      .iconfont
        color #fff
</style>
