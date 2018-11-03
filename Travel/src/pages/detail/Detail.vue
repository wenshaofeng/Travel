<template>
    <div>
      <detail-banner> </detail-banner>
      <detail-header> </detail-header>
      <div class="bo"></div>
    </div>
</template>


<script>
  import DetailBanner from "./components/Banner.vue"
  import DetailHeader from "./components/Header.vue"
  export default{
    name: 'Detail'     ,
    props: [],
    components:{
      DetailBanner,
      DetailHeader
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .bo
    height 50rem
</style>
