<template>
  <div id="container">
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      新增客户
    </div>
    <!-- 门店和销售开始 -->
    <div class="top">
      <div class="row shopbox">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">门店</div>
        </div>
        <el-select v-model="shop" placeholder="请选择门店" class="row_between">
          <el-option
            v-for="item in shopList"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="row shopbox">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">销售</div>
        </div>
        <el-select
          v-model="saler"
          placeholder="请选择销售顾问"
          class="row_between"
        >
          <el-option
            v-for="item in salers"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <!-- 门店和销售结束 -->
    <!-- 基本信息开始 -->
    <div class="textbox">
      <div class="texttitle">基本信息</div>
      <span class="tip">(手机号和微信号至少填一项)</span>
    </div>
    <div class="infobox">
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">手机号</div>
        </div>
        <div class="row_between">
          <el-input
            style="width: 150px"
            v-model="phone"
            type="number"
            oninput="if(value.length>11)value=value.slice(0,11)"
            placeholder="请输入"
          ></el-input>
          <span style="color: #09c076">通讯录匹配</span>
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">微信号</div>
        </div>

        <el-input
          v-model="wxnum"
          type="text"
          maxlength="11"
          placeholder="请输入"
          style="flex: 1"
        ></el-input>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">姓名</div>
        </div>

        <el-input
          v-model="name"
          type="text"
          maxlength="8"
          placeholder="请输入"
          style="flex: 1"
        ></el-input>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">性别</div>
        </div>
        <div class="row_radio">
          <div class="radiobox" @click="switchradiosex(0)">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="sexnum == 0"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>未知</span>
          </div>
          <div class="radiobox" @click="switchradiosex(1)">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="sexnum == 1"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>先生</span>
          </div>
          <div class="radiobox" @click="switchradiosex(2)">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="sexnum == 2"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>女士</span>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">重点客户</div>
        </div>
        <div class="row_radio">
          <div class="radiobox" @click="switchradiokeycus(0)">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="iskeycus == 0"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>否</span>
          </div>
          <div class="radiobox" @click="switchradiokeycus(1)">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="iskeycus == 1"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>是</span>
          </div>
        </div>
      </div>
      <div class="row" style="padding-bottom: 5px">
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">客户区域</div>
        </div>
        <div class="row_radio" style="padding: 0px">
          <div
            style="margin-bottom: 10px"
            v-for="(item, index) in cusArea"
            :key="item.id"
            class="radiobox"
            @click="cusAreaindex = index"
          >
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="index == cusAreaindex"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
      <div class="row" style="padding-right: 12px">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle" style="width: 140px">
            宁波以外城市 (某省某市)
          </div>
        </div>

        <el-cascader
          class="row_between"
          placeholder="搜索或选择"
          :options="citys"
          filterable
        ></el-cascader>
      </div>

      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">客户性质</div>
        </div>
        <el-select
          v-model="custype"
          placeholder="请选择客流性质"
          class="row_between"
        >
          <el-option
            v-for="item in custypeList"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">客户来源</div>
        </div>
        <el-select
          v-model="customerof"
          placeholder="请选择客户来源"
          class="row_between"
        >
          <el-option
            v-for="item in customerofList"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <!-- 基本信息结束-->
    <!-- 买车需求开始 -->
    <div class="textbox">
      <div class="texttitle">买车需求</div>
    </div>

    <div class="buyneeds">
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">品牌</div>
        </div>
        <div class="row_between">
          <div style="flex: 1"></div>
          <div style="wdith: 32px">更多></div>
        </div>
      </div>
      <div class="brand_list">
        <div class="brand_item" v-for="item in brandList" :key="item.id">
          <img :src="item.src" alt="" />
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">车型</div>
        </div>
        <el-select
          v-model="cartype"
          placeholder="请选择车型"
          class="row_between"
        >
          <el-option
            v-for="item in cartypes"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <!-- 买车需求结束 -->
  </div>
</template>

<script>
import brand from '@/assets/img/brand.png'
export default {
  data() {
    return {
      shop: "",
      // 门店列表
      shopList: [
        {
          id: 1,
          value: "互生升汽车空间",
        },
        {
          id: 2,
          value: "摩根汽车空间",
        },
      ],
      saler: "",
      // 销售顾问列表
      salers: [
        {
          id: 1,
          value: "摩根",
        },
        {
          id: 2,
          value: "吴林超",
        },
        {
          id: 3,
          value: "姚峰",
        },
      ],
      phone: "",
      wxnum: "",
      name: "",
      // 选中性别编号
      sexnum: 2,
      //重要客户编号
      iskeycus: 0,
      // 当前客户区域下标
      cusAreaindex: 0,
      // 客户区域
      cusArea: [
        {
          content: "老三区",
          id: 1,
        },
        {
          content: "北仑区",
          id: 2,
        },
        {
          content: "奉化区",
          id: 3,
        },
        {
          content: "余姚",
          id: 4,
        },
        {
          content: "宁海",
          id: 5,
        },
        {
          content: "慈溪",
          id: 6,
        },
        {
          content: "象山",
          id: 7,
        },
      ],
      // 级联选择城市
      citys: [
        {
          value: "zj",
          label: "浙江",
          children: [
            {
              value: "hz",
              label: "杭州",
            },
            {
              value: "nb",
              label: "宁波",
            },
          ],
        },
      ],
      // 客户性质列表
      custype: "",
      custypeList: [
        {
          id: 1,
          value: "首次自行",
        },
        {
          id: 2,
          value: "邀约自行",
        },
      ],
      // 客户来源
      customerof: "",
      customerofList: [
        {
          id: 1,
          value: "新媒体(抖音、快手等...)",
        },
        {
          id: 2,
          value: "老客户",
        },
      ],
      // 汽车品牌列表
      brandList: [
        {
          src: brand,
          id: 1,
        },
        {
          src: brand,
          id: 2,
        },
        {
          src: brand,
          id: 3,
        },
        {
          src: brand,
          id: 4,
        },
        {
          src: brand,
          id: 5,
        },
        {
          src: brand,
          id: 6,
        },
        {
          src: brand,
          id: 7,
        },
        {
          src: brand,
          id: 8,
        },
      ],
      // 车型列表
      cartype:'',
      cartypes:[ {
          id: 1,
          value: "A4L 新款",
        },
        {
          id: 2,
          value: "A8 黑色 商务款",
        },]
    };
  },
  methods: {
    back() {
      this.until.back();
    },
    // 单选性别
    switchradiosex(num) {
      this.sexnum = num;
    },
    // 单选重点客户
    switchradiokeycus(num) {
      this.iskeycus = num;
    },
  },
};
</script>
<style lang="less">
.el-input__inner {
  border: none;
  height: 14px !important;
  padding-left: 0px;
}
.el-input__icon {
  display: flex;
  align-items: center;
}
.el-cascader {
  line-height: 19px;
  height: 19px;
}
</style>
<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");

#container {
  width: 100%;
  background: url("~@/assets/img/header.png") no-repeat;
  background-color: #f1f3f2;
  background-size: 100% 1.28rem;
  min-height: 100vh;
  padding-bottom: 1.04rem;
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
  .row {
    padding: 15px;
    padding-right: 24px;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e7e7e7;

    .placeholder {
      width: 9px;
      font-size: 12px;
      font-weight: bold;
      color: #ff3000;
    }
  }
  .row:last-child {
    border: none;
  }
  .rowtitle {
    width: 72px;
    font-size: 12px;
    font-weight: bold;
    color: #303030;
    margin-right: 17px;
  }
  .row_between {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .row_radio {
    padding-right: 0.48rem;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .radiobox {
      width: 33.3%;
      display: flex;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
  .top {
    border-radius: 6px;
    padding: 7px 0px 0px;
    .shopbox {
      // border-bottom: 1px solid #e7e7e7
      // justify-content: space-between;
      // align-items: center;
    }
    .row {
      el-select {
        flex: 1;
      }
    }
  }
  .textbox {
    padding: 15px 24px;
    display: flex;
    .texttitle {
      font-size: 12px;
      font-weight: bold;
      color: #303030;
      margin-right: 5px;
    }
    .tip {
      font-size: 12px;
      font-weight: bold;
      color: #09c076;
    }
  }
  .infobox {
  }
  .buyneeds {
    .brand_list {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      border-left: 1px solid #e7e7e7;

      .brand_item {
        width: 25%;
        box-sizing: border-box;
        padding: 7px 16px;
        border-bottom: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        background: #fff;
        img {
          width: 62px;
          height: 62px;
        }
      }
    }
  }
}
</style>