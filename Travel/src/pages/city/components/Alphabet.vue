<template>
    <div class="list" >
      <div class="item" v-for="(item,key) of cities" :key="key"> {{key}}  </div>
    </div>
</template>


<script>
    export default{
        name : 'Alphabet'  ,
        props: {
          cities : Object
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import "~styles/varliable.styl"
  .list
    position absolute
    top 1.5rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
      text-align center
      line-height .5rem
      color $bgColor

</style>
