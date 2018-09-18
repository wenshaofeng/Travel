<template>
  <div>
    <div>
       <home-header></home-header>
    </div>
  </div>
</template>

<script>
  //export default 指的是导出，意思是定一个一个组件，然后把组件导出出去
import HomeHeader from "./components/HomeHeader.vue"
export default{
    name:'Home',
    components:{
        HomeHeader
    }
  }

</script>


