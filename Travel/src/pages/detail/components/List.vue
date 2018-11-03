<template>
    <div>
      <div class="item"
           v-for="(item,index) of list"
           :key="index"
      >
        <div class="item-title border-bottom">
          <span class="item-ico"></span>
          {{item.title}}
        </div>
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children">
          </detail-list>
        </div>
      </div>

    </div>
</template>


<script>
  export default{
    name:'DetailList',
    props: {
      list : Array
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .item-title
    position relative
    padding: 0 .2rem
    height: .88rem
    background: #fff
    color: #333
    font-size: .32rem
    line-height: .88rem
    text-indent: .4rem
    .item-ico
      display: inline-block
      position: absolute
      width: .36rem
      height: .36rem
      top: .26rem
      left: .2rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .2rem
      background-size: .4rem 3rem
  .item-children
    padding 0 0.3rem
</style>
