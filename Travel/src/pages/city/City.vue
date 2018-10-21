<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <alphabet></alphabet>
  </div>

</template>


<script>
    import CityHeader from "./components/CityHeader.vue"
    import CitySearch from "./components/Search.vue"
    import CityList from "./components/CityList.vue"
    import Alphabet from "./components/Alphabet.vue"

    export default{
      name: 'City',
      components:{
        CityHeader,
        CitySearch,
        CityList,
        Alphabet
      }
    }


</script>

<style lang='stylus' scoped>

</style>
