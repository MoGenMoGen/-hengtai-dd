<template>
  <div id="container">
    <div class="title">互生升个人中心</div>
    <div class="wrapper">
      <div class="bg"></div>
      <div class="list">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <tabbar :currentIndex="1"> </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar";

import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  components: {
    tabbar,
  },
  async mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");

#container {
  width: 100%;
  height: 100%;
  background: @backgroundColor;
  overflow: hidden;
  /*display: flex;*/
  /*display: -webkit-flex;*/
  /*flex-direction: column;*/
}
</style>