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
      computed :{
        letters(){
          const letters = []
          for (let i in this.cities) {
            letters.push(i)
          }
          return letters
        }
      },
        data () {
            return{
                touchStatus : false,
                startY:0,
                timer:null
            }
        },
        updated () {
            this.startY = this.$refs['A'][0].offsetTop
        },

      methods:{
        handleLetterClick: function (e) {
          this.$emit("change",e.target.innerText);
        },
        handleTouchStart:function () {
          this.touchStatus =true
        },
        handleTouchMove:function (e) {
          if(this.touchStatus){
              if(this.timer){
                  clearTimeout(this.timer)
              }
              this.timer = setTimeout(()=>{
                const touchY = e.touches[0].clientY - 79
                const index = Math.floor((touchY - this.startY)/20)
                if(index >= 0 && index < this.letters.length)
                {
                  this.$emit('change',this.letters[index])
                }
              },16)
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
