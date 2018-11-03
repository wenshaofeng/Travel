<template>
    <div>
      <detail-banner> </detail-banner>
      <detail-header> </detail-header>
      <detail-list :list="list"></detail-list>
      <div class="box"></div>
    </div>
</template>


<script>
  import DetailBanner from "./components/Banner.vue"
  import DetailHeader from "./components/Header.vue"
  import DetailList from "./components/List.vue"
  export default{
    name: 'Detail'     ,
    props: {},
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data (){
      return{
        list : [
          {
            title : '成人票',
            children:[
              { title :'成人三馆联票',
                children:[
                  {
                    title:'成人三馆联票——特惠一'
                  },   {
                    title:'成人三馆联票——特惠二'
                  }

                ]
              },
              { title :'成人五馆联票'}
              ]

          },{
            title : '优惠人群票',
            children:[
              { title :'成人三馆联票',
                children:[
                  {
                    title:'成人三馆联票——特惠一'
                  },   {
                    title:'成人三馆联票——特惠二'
                  }

                ]
              },
              { title :'成人五馆联票'}
            ]
          },{
            title : '团队票'
          },{
            title : '一日游'
          }
        ]
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .box
    height 50rem
  .bo
    height 50rem
</style>
