<template>
  <div id="container">
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      品牌列表
    </div>
    <van-search
      v-model="searchvalue"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
    <div class="brand_list">
      <div
        class="brand_item"
        v-for="(item1, index1) in brandlist"
        :key="index1"
      >
        <div class="letter_title">{{ item1.first_letter }}</div>
        <div class="son_brand_list">
          <div
            class="son_item"
            v-for="(item2, index2) in item1.sonlist"
            :key="index2"
            :style="{
              'background-color': currentID == item2.id ? '#09c076' : '',
            }"
            @click="handleClick(item2)"
          >
            <img class="brand_icon" :src="item2.brand_logo" alt="" />
            <div class="item_name">{{ item2.brand_name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchvalue: "",
      // 选中ID
      currentID: "fds",
      brandlist: [],
    };
  },
  computed: {},
  async mounted() {},
  async created() {
    // 利用ASCII码转为字符
    // let code = 65;
    // while (code <= 67) {
    //   let obj = {};
    //   obj.first_letter = String.fromCharCode(code);
    //   obj.sonlist = await this.api.getWxCommonfield(String.fromCharCode(code));
    //   this.brandlist.push(obj);
    //   code++;
    // }
    // console.log(this.brandlist);
  },
  methods: {
    back() {
      this.until.back();
    },
    onSearch(val) {
      console.log(val);
    },
    handleClick(obj) {
      //将选中项携带出去
      // this.until.loSave('')
      this.until.back();
    },
  },
};
</script>
<style type="less">
.el-timeline-item {
  margin-bottom: -0.24rem;
}
</style>
<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");

#container {
  // width: 100%;
  // height: 100%;
  padding-bottom: 4rem;
  background: url("~@/assets/img/header.png") no-repeat;
  background-color: #f1f3f2;
  min-height: 100vh;
  background-size: 100% 1.28rem;
  // overflow: hidden;

  /*display: flex;*/
  /*display: -webkit-flex;*/

  .title {
    width: 100%;
    height: 1.28rem;
    position: relative;
    line-height: 1.28rem;
    text-align: center;
    font-size: 0.36rem;
    font-weight: 500;
    color: #ffffff;

    img {
      height: 0.31rem;
      width: 0.17rem;
      position: absolute;
      top: 50%;
      left: 0.36rem;
      transform: translateY(-50%);
    }
  }
  .brand_list {
    .brand_item {
      .letter_title {
        padding: 5px 10px;
      }

      .son_brand_list {
        background: #ffffff;
        .son_item {
          padding: 10px;
          display: flex;
          align-items: center;
          .brand_icon {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          .item_name {
            font-size: 16px;
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
