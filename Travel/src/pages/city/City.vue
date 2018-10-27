<template>
  <div>
    <city-header></city-header>
    <city-search :city = 'cities'></city-search>
    <city-list :hotCities=" hotCities" :cities="cities" :letter="letter"></city-list>
    <alphabet @change="handleLetterChange" :cities="cities" ></alphabet>
  </div>
</template>


<script>
    import CityHeader from "./components/CityHeader.vue"
    import CitySearch from "./components/Search.vue"
    import CityList from "./components/CityList.vue"
    import Alphabet from "./components/Alphabet.vue"
    import axios from "axios"
    export default{
      name: 'City',
      data (){
          return{
            hotCities: [],
            cities:{},
            letter:''
          }
      },
      components:{
        CityHeader,
        CitySearch,
        CityList,
        Alphabet
      },
      methods:{
          getCityInfo(){
              axios.get('/api/city.json').
              then(this.getCityInfoSucc)
          },
        getCityInfoSucc(res){
              res = res.data
              if(res.ret && res.data){
                  const  data = res.data
                  this.hotCities = data.hotCities
                  this.cities = data.cities
              }
        },
        handleLetterChange(mes){
            this.letter = mes
        }
      },
      mounted(){
          this.getCityInfo() //页面挂载好了以后执行
      }
    }


</script>

<style lang='stylus' scoped>

</style>
