<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area1">
          <nav class="title border-topbottom">我的位置</nav>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
            </div>
          </div>
        </div>
        <div class="area2">
          <nav class="title border-topbottom">热门城市</nav>
          <div class="button-list" >

            <div class="button-wrapper" v-for="part of hotCities"
                 :key = "part.id"
                 @click = 'handleClick(part.name)'
            >
              <div class="button">{{part.name}}</div>
            </div>
          </div>
        </div>
        <div class="area3" v-for="(item , key) of cities"
             :key="key"
             :ref="key">
          <nav class="title border-topbottom">{{key}}</nav>
          <div class="item-list"  v-for="(smallItem , key) of item "
               :key="smallItem.id"
               @click = 'handleClick(smallItem.name)'
          >
            <div class="item border-bottom">
              {{smallItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  methods: {
    handleClick: function(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    letter: function() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.59rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        text-align: center;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    .item {
      padding-left: 0.2rem;
      line-height: 0.76rem;
      color: #666;
    }
  }
}
</style>
