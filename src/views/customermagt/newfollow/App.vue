<template>
  <div id="container">
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      新增跟进
    </div>

    <!-- 本次沟通记录 开始 -->
    <div class="textbox">
      <div class="texttitle">本次沟通记录</div>
    </div>
    <div class="connect_record_box">
      <div class="follow_content">
        <div class="row" style="padding: 0px; border: none; margin-bottom: .16rem">
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">跟进内容</div>
          </div>
        </div>
        <el-input
          style="margin-left: .18rem"
          type="textarea"
          autosize
          placeholder="请输入"
          v-model="followContent"
        >
        </el-input>
      </div>
      <div class="albums">
        <div class="album_title">添加图片</div>
        <div class="albums_box_list">
          <img class="albums_item" src="~@/assets/img/photograph.png" alt="" />
          <img
            class="albums_item"
            :src="item.src"
            alt=""
            v-for="(item, index) in albums"
            :key="index"
          />
        </div>
      </div>
      <!--意向等级开始  -->
      <div class="intent_level">
        <div class="row" style="border: none">
          <div class="placeholder"></div>
          <div class="rowtitle">意向等级</div>
        </div>

        <div class="intent_level_list">
          <div
            class="intent_level_item"
            @click="checkedLevelIndex1 = index"
            v-for="(item, index) in intentLevelList1"
            :key="item.id"
            :class="{ select_price_region: index == checkedLevelIndex1 }"
          >
            {{ item.level }}
          </div>
        </div>
      </div>
      <!-- 意向等级结束 -->
      <!-- 沟通方式开始 -->
      <div class="intent_level">
        <div class="row" style="border: none">
          <div class="placeholder">*</div>
          <div class="rowtitle">沟通方式</div>
        </div>

        <div class="intent_level_list">
          <div
            class="intent_level_item"
            style="margin-right: .24rem; width: 1.44rem"
            @click="contacttype = index"
            v-for="(item, index) in contacttypeList"
            :key="item.id"
            :class="{ select_price_region: index == contacttype }"
          >
            {{ item.value }}
          </div>
        </div>
      </div>
      <!-- 沟通方式开始 -->
      <div class="tostore_box" v-if="contacttype == 0">
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">来访时间</div>
          </div>
          <el-date-picker
            class="followdatepicker"
            style="width: 2.8rem"
            v-model="visitTime"
            type="datetime"
            placeholder="请选择来访时间"
          >
          </el-date-picker>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">离店时间</div>
          </div>
          <el-date-picker
            class="followdatepicker"
            style="width: 2.8rem"
            v-model="leaveTime"
            type="datetime"
            placeholder="请选择离店时间"
          >
          </el-date-picker>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">客户人数</div>
          </div>

          <el-input
            v-model="cusnums"
            type="number"
            oninput="if(value.length>6)value=value.slice(0,6)"
            placeholder="请输入人数"
            style="flex: 1"
          ></el-input>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">来访时间段</div>
          </div>

          <div style="display: flex; align-items: center">
            <div>{{ visitSt }}</div>
            <span style="padding: 0px .1rem"> ~ </span>
            <div>{{ visitEt }}</div>
          </div>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">接待时长</div>
          </div>

          <div>{{ receptionDuration }}h</div>
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">下次跟进时间</div>
        </div>
        <el-date-picker
          class="followdatepicker"
          style="width: 2.8rem"
          v-model="followdate1"
          type="datetime"
          @change="handlefollowdate1"
          placeholder="选择日期时间"
        >
        </el-date-picker>
        <span style="color: #606266">{{ followdateofweek1 }}</span>
      </div>
    </div>
    <!-- 本次沟通记录 结束-->
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
          <div style="wdith: .64rem; font-weight: 500; color: #909090">更多></div>
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
      <!-- 价格区间开始 -->
      <div class="pricebox">
        <div class="prititle">价格区间 / 万元</div>
        <div class="pricelist">
          <div
            class="priceitem"
            @click="checkedPriceIndex = index"
            v-for="(item, index) in priceList"
            :key="item.id"
            :class="{ select_price_region: index == checkedPriceIndex }"
          >
            {{ item.region }}
          </div>
        </div>
        <div class="custom_price_box">
          <span class="prititle">自定义价格</span>
          <div class="lowprice">
            <input
              style="width: .46rem; text-align: right"
              class="prititle"
              v-model="lowprice"
              type="number"
              oninput="if(value.length>3)value=value.slice(0,3)"
              placeholder=""
            />
            <span class="prititle">万</span>
          </div>
          <span class="connector">~</span>
          <div class="highprice">
            <input
              style="width: .46rem; text-align: right"
              class="prititle"
              v-model="highprice"
              type="number"
              oninput="if(value.length>3)value=value.slice(0,3)"
              placeholder=""
            />
            <span class="prititle">万</span>
          </div>
          <div class="confirm">确定</div>
        </div>
      </div>
      <!-- 价格区间结束 -->
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">车身颜色</div>
        </div>
        <el-select
          v-model="carcolor"
          placeholder="请选择车身颜色"
          class="row_between"
        >
          <el-option
            v-for="item in carcolors"
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
          <div class="placeholder"></div>
          <div class="rowtitle">里程数</div>
        </div>
        <div class="row_between">
          <el-input
            style="width: 3rem"
            v-model="buymileage"
            type="number"
            oninput="if(value.length>3)value=value.slice(0,3)"
            placeholder="请输入"
          ></el-input>
          <span style="font-weight: bold;color: #303030">万公里</span>
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">是否按揭</div>
        </div>
        <div class="row_radio">
          <div class="radiobox" @click="ismortgage = 0">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="ismortgage == 0"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>否</span>
          </div>
          <div class="radiobox" @click="ismortgage = 1">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="ismortgage == 1"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>是</span>
          </div>
        </div>
      </div>
      <div class="intent_desc">
        <div
          style="
            font-size: .24rem;
            font-weight: bold;
            color: #303030;
            margin-bottom: .16rem;
          "
        >
          意向描述
        </div>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="intentDesc"
        >
        </el-input>
      </div>
      <!--意向等级开始  -->
      <div class="intent_level">
        <div class="row" style="border: none">
          <div class="placeholder">*</div>
          <div class="rowtitle">意向等级</div>
        </div>

        <div class="intent_level_list">
          <div
            class="intent_level_item"
            @click="checkedLevelIndex2 = index"
            v-for="(item, index) in intentLevelList2"
            :key="item.id"
            :class="{ select_price_region: index == checkedLevelIndex2 }"
          >
            {{ item.level }}
          </div>
        </div>
      </div>
      <!-- 意向等级结束 -->
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">购买类型</div>
        </div>
        <div class="row_radio">
          <div class="radiobox" @click="butype = 1">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="butype == 1"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>求购</span>
          </div>
          <div class="radiobox" @click="butype = 2">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="butype == 2"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>增购</span>
          </div>
          <div class="radiobox" @click="butype = 3">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="butype == 3"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>置换</span>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">下次跟进时间</div>
        </div>
        <el-date-picker
          class="followdatepicker"
          style="width: 2.8rem"
          v-model="followdate2"
          type="datetime"
          @change="handlefollowdate2"
          placeholder="选择日期时间"
        >
        </el-date-picker>
        <span style="color: #606266">{{ followdateofweek2 }}</span>
      </div>
    </div>
    <div class="btn_save">保存</div>
  </div>
</template>

<script>
import brand from "@/assets/img/brand.png";
import moment from "moment";
export default {
  data() {
    return {
      // 跟进内容
      followContent: "",
      // 添加图片
      albums: [
        {
          id: 8,
          src: brand,
        },
        {
          id: 9,
          src: brand,
        },
        {
          id: 10,
          src: brand,
        },
        {
          id: 3,
          src: brand,
        },
        {
          id: 2,
          src: brand,
        },
      ],
      // 沟通意向等级
      checkedLevelIndex1: 0,
      intentLevelList1: [
        {
          id: 1,
          level: "O",
        },
        {
          id: 2,
          level: "K",
        },
        {
          id: 3,
          level: "A",
        },
        {
          id: 4,
          level: "B",
        },
        {
          id: 5,
          level: "C",
        },
        {
          id: 6,
          level: "J",
        },
        {
          id: 7,
          level: "S",
        },
        {
          id: 8,
          level: "P",
        },
      ],
      // 沟通方式,
      contacttype: 1,
      contacttypeList: [
        {
          id: 5,
          value: "到店",
        },
        {
          id: 6,
          value: "电话",
        },
        {
          id: 7,
          value: "短信",
        },
        {
          id: 8,
          value: "微信",
        },
      ],
      // 来访时间
      visitTime: "",
      // 离店时间
      leaveTime: "",
      // 客户人数
      cusnums: "",
      // 沟通下次跟进时间
      followdate1: "",
      followdateofweek1: "",
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
      cartype: "",
      cartypes: [
        {
          id: 1,
          value: "A4L 新款",
        },
        {
          id: 2,
          value: "A8 黑色 商务款",
        },
      ],
      // 选中的价格下标
      checkedPriceIndex: 0,
      // 价格区间列表
      priceList: [
        {
          region: "不限",
          id: 1,
        },
        {
          region: "0 ~ 3万",
          id: 2,
        },
        {
          region: "3 ~ 5万",
          id: 3,
        },
        {
          region: "5 ~ 10万",
          id: 4,
        },
        {
          region: "10 ~ 15万",
          id: 5,
        },
        {
          region: "15 ~ 20万",
          id: 6,
        },
        {
          region: "20 ~ 30万",
          id: 7,
        },
        {
          region: "30 ~ 50",
          id: 8,
        },
        {
          region: "50万以上",
          id: 9,
        },
      ],
      // 自定义高低价
      lowprice: '',
      highprice: '',
      // 车身颜色
      carcolor: "",
      carcolors: [
        {
          id: 1,
          value: "红色",
        },
        {
          id: 2,
          value: "宝石蓝",
        },
      ],
      // 买车里程数
      buymileage: 0,
      // 是否按揭
      ismortgage: 0,
      // 意向描述
      intentDesc: "",
      // 意向等级
      checkedLevelIndex2: 0,
      intentLevelList2: [
        {
          id: 1,
          level: "O",
        },
        {
          id: 2,
          level: "K",
        },
        {
          id: 3,
          level: "A",
        },
        {
          id: 4,
          level: "B",
        },
        {
          id: 5,
          level: "C",
        },
        {
          id: 6,
          level: "J",
        },
        {
          id: 7,
          level: "S",
        },
        {
          id: 8,
          level: "P",
        },
        {
          id: 9,
          level: "战败",
        },
        {
          id: 10,
          level: "无效",
        },
      ],
      // 购买类型
      butype: 1,
      // 买车下次跟进时间
      followdate2: "",
      followdateofweek2: "",
      //
    };
  },
  computed: {
    visitSt() {
      if (this.visitTime)
        return moment(this.visitTime).format("YYYY-MM-DD HH:mm:ss");
      return "";
    },
    visitEt() {
      if (this.leaveTime) return moment(this.leaveTime).format(" HH:mm:ss");
      return "";
    },
    receptionDuration() {
      if (this.visitTime && this.leaveTime) {
        let s = moment(this.leaveTime).diff(
          moment(this.visitTime),
          "hours",
          true
        );
        return s.toFixed(2);
      }

      return "";
    },
  },
  watch: {
    visitTime: function () {
      this.visitSt = moment(this.visitTime).format("YYYY-MM-DD hh:MM:ss");
      if (this.leaveTime) {
        this.receptionDuration = moment(this.leaveTime)
          .diff(moment(this.visitTime), "hours", true)
          .toFixed(2);
      }
    },
    leaveTime: function () {
      this.visitEt = moment(this.leaveTime).format("YYYY-MM-DD hh:MM:ss");
      if (this.visitTime) {
        this.receptionDuration = moment(this.leaveTime)
          .diff(moment(this.visitTime), "hours", true)
          .toFixed(2);
      }
    },
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
    // 处理跟进时间
    handlefollowdate1(e) {
      this.followdateofweek1 = moment(e).format("dddd");
    },
    handlefollowdate2(e) {
      this.followdateofweek2 = moment(e).format("dddd");
    },
  },
  created() {
    moment.locale("zh-cn");
  },
};
</script>
<style lang="less">
.el-input__inner {
  border: none;
  height: .28rem !important;
  padding-left: 0px;
}
.el-input__icon {
  display: flex;
  align-items: center;
}
.el-cascader {
  line-height: .38rem;
  height: .38rem;
}
.followdatepicker {
  .el-input__inner {
    padding: 0;
  }
  .el-input__prefix {
    display: none;
  }
  .el-input__suffix {
    display: none;
  }
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
    padding: .3rem;
    padding-right: .48rem;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e7e7e7;

    .placeholder {
      width: .18rem;
      font-size: .24rem;
      font-weight: bold;
      color: #ff3000;
    }
  }
  .row:last-child {
    border: none;
  }
  .rowtitle {
    width: 1.44rem;
    font-size: .24rem;
    font-weight: bold;
    color: #303030;
    margin-right: .34rem;
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
        width: .4rem;
        height: .4rem;
        margin-right: .1rem;
      }
    }
  }

  .textbox {
    padding: .3rem .48rem;
    display: flex;
    .texttitle {
      font-size: .24rem;
      font-weight: bold;
      color: #303030;
      margin-right: .1rem;
    }
    .tip {
      font-size: .24rem;
      font-weight: bold;
      color: #09c076;
    }
  }

  .connect_record_box {
    .follow_content {
      padding: .3rem;
      padding-right: .48rem;
      background: #fff;
      border-bottom: 1px solid #e7e7e7;
    }
  }
  .intent_level {
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
    // padding: .3rem .48rem;
    .intent_level_list {
      padding: 0px .48rem 0px .48rem;
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      .intent_level_item {
        margin-bottom: .3rem;
        margin-right: .32rem;
        width: 1.04rem;
        height: .54rem;
        text-align: center;
        line-height: .54rem;
        color: #909090;
        background: #ededed;
        border-radius: .06rem;
      }
      .intent_level_item:nth-child(5n + 5) {
        margin-right: 0px;
      }
      .intent_level_item:last-child {
        margin-right: 0px !important;
      }
      .select_price_region {
        background: #09c076;
        color: #ffffff;
      }
    }
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
        padding: .14rem .32rem;
        border-bottom: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        background: #fff;
        img {
          width: 1.24rem;
          height: 1.24rem;
        }
      }
    }
    .pricebox {
      border-bottom: 1px solid #e7e7e7;
      background: #fff;
      padding: .3rem .48rem;
      .prititle {
        font-size: .24rem;
        font-weight: bold;
        color: #303030;
      }

      .pricelist {
        padding: .2rem 1px;
        padding-bottom: 0px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .priceitem {
          // margin-right: .2rem;
          margin-bottom: .2rem;
          width: 2.04rem;
          height: .54rem;
          text-align: center;
          line-height: .54rem;
          color: #909090;
          background: #ededed;
          border-radius: .06rem;
        }
        .select_price_region {
          background: #09c076;
          color: #ffffff;
        }
      }

      .custom_price_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .lowprice {
          display: flex;
          padding: .06rem .4rem;
          border: 1px solid #d8d8d8;
        }

        .connector {
          font-size: .24rem;
          font-weight: bold;
          color: #bfbfbf;
        }

        .highprice {
          display: flex;
          padding: .06rem .4rem;
          border: 1px solid #d8d8d8;
        }

        .confirm {
          background: #09c076;
          border-radius: .06rem;
          font-size: .24rem;
          font-weight: 500;
          color: #ffffff;
          padding: .06rem .44rem;
        }
      }
    }
    .intent_desc {
      padding: .3rem .48rem;
      background: #fff;
      border-bottom: 1px solid #e7e7e7;
    }
  }

  .albums {
    padding: .3rem .48rem;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e7e7e7;

    .album_title {
      font-size: .24rem;
      font-weight: bold;
      color: #303030;
      width: 2.7rem;
    }
    .albums_box_list {
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      .albums_item {
        margin-right: .1rem;
        margin-bottom: .1rem;
        width: 1.62rem;
        height: 1.56rem;
      }
    }
  }
  .btn_save {
    margin: .96rem auto 0px;
    width: 5.7rem;
    height: .7rem;
    background: #09c076;
    border-radius: .34rem;
    font-size: .3rem;
    font-weight: 500;
    color: #ffffff;
    line-height: .7rem;
    text-align: center;
  }
}
</style>