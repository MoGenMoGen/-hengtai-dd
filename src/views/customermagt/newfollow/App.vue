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
        <div class="row" style="padding: 0px; border: none; margin-bottom: 8px">
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">跟进内容</div>
          </div>
        </div>
        <el-input
          style="margin-left: 9px"
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
            style="margin-right: 12px; width: 72px"
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
      <div class="tostore_box" v-if="contacttype!=1">
         v
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
              style="width: 23px; text-align: right"
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
              style="width: 23px; text-align: right"
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
            style="width: 150px"
            v-model="buymileage"
            type="number"
            oninput="if(value.length>3)value=value.slice(0,3)"
            placeholder="请输入"
          ></el-input>
          <span style="color: #303030">万公里</span>
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
            font-size: 12px;
            font-weight: bold;
            color: #303030;
            margin-bottom: 8px;
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
          style="width: 140px"
          v-model="followdate"
          type="datetime"
          @change="handlefollowdate"
          placeholder="选择日期时间"
        >
        </el-date-picker>
        <span style="color: #606266">{{ followdateofweek }}</span>
      </div>
    </div>
    <!-- 买车需求结束 -->
    <!-- 卖车需求开始 -->
    <div class="textbox">
      <div class="texttitle">卖车需求</div>
    </div>
    <div class="row">
      <!-- 占位符 -->
      <div style="display: flex">
        <div class="placeholder"></div>
        <div class="rowtitle">卖车需求</div>
      </div>
      <div class="row_radio">
        <div class="radiobox" @click="issellcar = 0">
          <img
            src="~@/assets/img/radioselect.png"
            alt=""
            v-if="issellcar == 0"
          />
          <img src="~@/assets/img/radio.png" alt="" v-else />
          <span>否</span>
        </div>
        <div class="radiobox" @click="issellcar = 1">
          <img
            src="~@/assets/img/radioselect.png"
            alt=""
            v-if="issellcar == 1"
          />
          <img src="~@/assets/img/radio.png" alt="" v-else />
          <span>是</span>
        </div>
      </div>
    </div>
    <div class="ifsellbox" v-if="issellcar">
      <div class="sellcarbox">
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">品牌车系</div>
          </div>
          <el-select
            v-model="carparm"
            placeholder="请选择品牌车系"
            class="row_between"
          >
            <el-option
              v-for="item in carparms"
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
              style="width: 150px"
              v-model="sellmileage"
              type="number"
              oninput="if(value.length>3)value=value.slice(0,3)"
              placeholder="请输入"
            ></el-input>
            <span style="color: #303030">万公里</span>
          </div>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">上牌时间</div>
          </div>
          <el-date-picker
            v-model="licensedate"
            type="date"
            placeholder="选择上牌日期"
          >
          </el-date-picker>
        </div>
        <div class="intent_desc">
          <div
            style="
              font-size: 12px;
              font-weight: bold;
              color: #303030;
              margin-bottom: 8px;
            "
          >
            备注
          </div>
          <el-input
            type="textarea"
            autosize
            placeholder="请输入"
            v-model="remark"
          >
          </el-input>
        </div>
      </div>
      <!-- 卖车需求结束 -->
      <!-- 更多信息开始 -->
      <div class="textbox">
        <div class="texttitle">更多信息</div>
      </div>
      <div class="moreinfobox">
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">老客户介绍人</div>
          </div>
          <el-select
            v-model="introducer"
            placeholder="请选择"
            class="row_between"
          >
            <el-option
              v-for="item in introducers"
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
            <div class="rowtitle">备用号</div>
          </div>
          <div class="row_between">
            <el-input
              style="width: 150px"
              v-model="sparephone"
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
            <div class="rowtitle">身份证号</div>
          </div>

          <el-input
            v-model="idcard"
            type="text"
            maxlength="18"
            placeholder="请输入"
            style="flex: 1"
          ></el-input>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">生日</div>
          </div>
          <el-date-picker v-model="birthday" type="date" placeholder="请选择">
          </el-date-picker>
        </div>
        <div class="row" style="padding-right: 12px">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle" style="width: 140px">所在地</div>
          </div>

          <el-cascader
            class="row_between"
            placeholder="搜索或选择"
            :options="locations"
            v-model="location"
            filterable
          ></el-cascader>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">联系地址</div>
          </div>

          <el-input
            v-model="contactAddress"
            type="text"
            maxlength="18"
            placeholder="请输入"
            style="flex: 1"
          ></el-input>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">兴趣</div>
          </div>

          <el-input
            v-model="hobbies"
            type="text"
            maxlength="18"
            placeholder="请输入"
            style="flex: 1"
          ></el-input>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">职业</div>
          </div>

          <el-input
            v-model="occupation"
            type="text"
            maxlength="18"
            placeholder="请输入"
            style="flex: 1"
          ></el-input>
        </div>
        <div class="albums">
          <div class="album_title">相册</div>
          <div class="albums_box_list">
            <img
              class="albums_item"
              src="~@/assets/img/photograph.png"
              alt=""
            />
            <img
              class="albums_item"
              :src="item.src"
              alt=""
              v-for="(item, index) in albums"
              :key="index"
            />
          </div>
        </div>
      </div>
      <!-- 更多信息结束-->
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
    // 处理跟进时间
    handlefollowdate(e) {
      this.followdateofweek = moment(e).format("dddd");
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

  .connect_record_box {
    .follow_content {
      padding: 15px;
      padding-right: 24px;
      background: #fff;
      border-bottom: 1px solid #e7e7e7;
    }
  }
  .intent_level {
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
    // padding: 15px 24px;
    .intent_level_list {
      padding: 0px 24px 0px 24px;
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      .intent_level_item {
        margin-bottom: 15px;
        margin-right: 16px;
        width: 52px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        color: #909090;
        background: #ededed;
        border-radius: 3px;
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
    .pricebox {
      border-bottom: 1px solid #e7e7e7;
      background: #fff;
      padding: 15px 24px;
      .prititle {
        font-size: 12px;
        font-weight: bold;
        color: #303030;
      }

      .pricelist {
        padding: 10px 1px;
        padding-bottom: 0px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .priceitem {
          // margin-right: 10px;
          margin-bottom: 10px;
          width: 102px;
          height: 27px;
          text-align: center;
          line-height: 27px;
          color: #909090;
          background: #ededed;
          border-radius: 3px;
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
          padding: 3px 20px;
          border: 1px solid #d8d8d8;
        }

        .connector {
          font-size: 12px;
          font-weight: bold;
          color: #bfbfbf;
        }

        .highprice {
          display: flex;
          padding: 3px 20px;
          border: 1px solid #d8d8d8;
        }

        .confirm {
          background: #09c076;
          border-radius: 3px;
          font-size: 12px;
          font-weight: 500;
          color: #ffffff;
          padding: 3px 22px;
        }
      }
    }
    .intent_desc {
      padding: 15px 24px;
      background: #fff;
      border-bottom: 1px solid #e7e7e7;
    }
  }

  .albums {
    padding: 15px 24px;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e7e7e7;

    .album_title {
      font-size: 12px;
      font-weight: bold;
      color: #303030;
      width: 135px;
    }
    .albums_box_list {
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      .albums_item {
        margin-right: 5px;
        margin-bottom: 5px;
        width: 81px;
        height: 78px;
      }
    }
  }
  .btn_save {
    margin: 48px auto 0px;
    width: 285px;
    height: 35px;
    background: #09c076;
    border-radius: 17px;
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    line-height: 35px;
    text-align: center;
  }
}
</style>