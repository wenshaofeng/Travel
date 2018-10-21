<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>

</template>


<script>
    import CityHeader from "./components/CityHeader.vue"
    import CitySearch from "./components/Search.vue"
    export default{
      name: 'City',
      components:{
        CityHeader,
        CitySearch
      }
    }


</script>

<style lang='stylus' scoped>

</style>
