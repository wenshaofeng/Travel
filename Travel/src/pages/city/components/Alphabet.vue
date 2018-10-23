<template>
    <div class="list" >
      <div class="item" v-for="item of letters"
           :key="item"
           :ref="item"
           @touchstart="handleTouchStart"
           @touchmove="handleTouchMove"
           @touchend="handleTouchEnd"
           @click="handleLetterClick">
        {{item}}
      </div>
    </div>
</template>


<script>
    export default{
        name : 'Alphabet'  ,
        props: {
          cities : Object
        },
        data () {
            return{
                touchStatus : false
            }
        },
        computed :{
            letters(){
              const letters = []
              for (let i in this.cities) {
                  letters.push(i)
              }
              return letters
            }
        },
      methods:{
        handleLetterClick: function (e) {
          this.$emit("change",e.target.innerText);
        },
        handleTouchStart:function () {
          this.touchStatus =true
        },
        handleTouchMove:function (e) {
          if(this.touchStatus === true){
              const startY = this.$refs['A'][0].offsetTop
              const touchY = e.touches[0].clientY - 79
              const index = Math.floor((touchY - startY)/20)
            if(index >= 0 && index < this.letters.length)
            {
              this.$emit('change',this.letters[index])
            }
          }
        },
        handleTouchEnd: function () {
          this.touchStatus = false
        }
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
      line-height .4rem
      color $bgColor

</style>
