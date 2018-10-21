<template>
    <div>
      <div class="search">
        <input class="search-input" type="text" placeholder=" 请输入城市名或拼音">
      </div>

    </div>
</template>


<script>
    export default{
        name :'CitySearch'
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import "~styles/varliable.styl"
    .search
      height .72rem
      padding 0 .1rem
      background $bgColor
      .search-input
        box-sizing border-box
        padding 0 0.2rem
        width 100%
        height .62rem
        text-align center
        border-radius .1rem




</style>
