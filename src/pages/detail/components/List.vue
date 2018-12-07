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
        <div v-if="index>0" class="item-ticket border-bottom">
            <div class="ticket-info">
              外省优惠票
              <span class="more-info">仅限外省乘交通工具抵深客人</span>
            </div>
            <div class="ticket-price">
              <span>￥180</span>
              <span class="iconfont">起</span>
            </div>
        </div>
        <div v-if="index>0" class="item-ticket border-bottom">
            <div class="ticket-info">
              儿童票
              <span class="more-info">限身高1.2m~1.5m儿童</span>
            </div>
            <div class="ticket-price">
              <span>￥180</span>
              <span class="iconfont">起</span>
            </div>
        </div>

        <div v-if="index>0" class="item-ticket border-bottom">
            <div class="ticket-info">
             长者票
              <span class="more-info">仅限55周岁~59周岁老人</span>
            </div>
            <div class="ticket-price">
              <span>￥180</span>
              <span class="iconfont">起</span>
            </div>
        </div>
        <div v-if="index>0" class="item-ticket border-bottom">
            <div class="ticket-info">
              大学生票
              <span class="more-info">仅限外省乘交通工具抵深客人</span>
            </div>
            <div class="ticket-price">
              <span>￥180</span>
              <span class="iconfont">起</span>
            </div>
        </div>
        <div v-if="index>0" class="item-ticket border-bottom">
            <div class="ticket-info">
              生日优惠票
              <span class="more-info">仅限外省乘交通工具抵深客人</span>
            </div>
            <div class="ticket-price">
              <span>￥180</span>
              <span class="iconfont">起</span>
            </div>
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
  .item-ticket
    position: relative
    z-index: 2
    margin-bottom: -.02rem
    padding: .24rem .2rem
    background: #fff
    display flex
    .ticket-info
      flex 5
      font-size: .32rem
      .more-info
        font-size: .24rem
        color: #888
        line-height: .32rem
        margin: .1rem 0 .14rem .1rem
        margin-right: 1.84rem
    .ticket-price
      flex 3
      font: .38rem Tahoma,Helvetica,sans-serif
      color: #ff9800;
      line-height 0.3rem
      padding-left .4rem
</style>
