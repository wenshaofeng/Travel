<template>

    <div class="header">
      <div class="header-left">
        <router-link to="/">
          <span class="iconfont back">&#xe624;</span>
        </router-link>

      </div>
      城市选择
    </div>
</template>


<script>
export default {
  name: "CityHeader"
};
</script>

<style lang='stylus' scoped>
@import '~styles/varliable.styl';

.header {
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  position: relative;

  .header-left {
    width: 0.64rem;
    position: absolute;
    left: 0;

    .iconfont {
      color: #fff;
    }
  }
}
</style>
