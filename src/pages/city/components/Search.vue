<template>
		<div>
			<div class="search">
				<input v-model="keyword"
               class="search-input"
               type="text"
               placeholder="请输入城市名或拼音">
			</div >
			<div class='search-content' ref="search" v-show="keyword">
					<ul>
								<li v-for="item of list"
                    class="search-item border-bottom"
                    :key="item.id"
                    @click = 'handleClick(item.name)'
                >
                  {{item.name}}
                </li>
                <li  class="search-item border-bottom" v-show="success"> 未找到您所搜索的城市!!
                </li>
					</ul>
			</div>
		</div>
</template>


<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      success: false
    };
  },
  /* computed :{
        isSearch () {
          return !this.keyword ? false : true
        }
      },*/
  methods: {
    handleClick: function(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  props: {
    city: Object
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        this.success = false;
        return;
      } else this.success = false;
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.city) {
          //遍历每个对象，拿到"A"对应的数组
          //this.city[i] 每一个 字母 value :字母数组里每一个对象
          this.city[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
        if (this.list.length === 0) {
          this.success = true;
        }
      }, 100);
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '~styles/varliable.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    padding: 0 0.2rem;
    width: 100%;
    height: 0.62rem;
    text-align: center;
    border-radius: 0.1rem;
  }
}

.search-content {
  top: 1.58rem;
  right: 0;
  left: 0;
  bottom: 0;
  background: #eee;
  z-index: 1;
  position: absolute;
  overflow: hidden;

  .search-item {
    line-height: 0.72rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>
