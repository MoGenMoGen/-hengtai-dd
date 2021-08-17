<template>
  <div id="tabbar">
    <div
      class="item"
      v-for="(item, index) in tabList"
      :key="index"
      @click="switchTab(item.path)"
    >
      <img :src="currentIndex == index ? item.icon[0] : item.icon[1]" alt="" />
      <div
        class="title"
        :style="{ color: currentIndex == index ? '#09C471' : '#999999' }"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import home from '@/components/img/tabCar.png'
import homeselected from '@/components/img/tabHomeActive.png'
import person from '@/components/img/tabRescue.png'
import personselected from '@/components/img/tabService.png'
export default {
  props: {
    currentIndex: {
      type: Number,
      default: function () {
        return 0;
      },
    },
  },
  data() {
    return {
        home,
      tabList: [
        {
          path: "/views/home/index.html",
          title: "首页",
          icon: [home, homeselected],
        },
        {
          path: "/views/profile/index.html",
          title: "个人中心",
          icon: [person, personselected],
        },
      ],
    };
  },
  methods: {
    switchTab(url) {
      this.until.href(url);
    },
  },
  mounted() {
    console.table(this.tabList[0].icon);
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/css/mobile.less");
@import url("../assets/css/common.css");
#tabbar {
  background-color: #fff;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  width: 100%;
  height: 0.99rem;
  justify-content: space-around;
  align-items: center;
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 0.54rem;
    }
    .title {
      height: 0.22rem;
      font-size: 0.22rem;
      font-weight: 400;
      color: #999999;
      padding-top: 0.06rem;
    }
  }
}
</style>