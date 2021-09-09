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
        <div
          class="row"
          style="padding: 0px; border: none; margin-bottom: 0.16rem"
        >
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">跟进内容</div>
          </div>
        </div>
        <el-input
          style="margin-left: 0.18rem"
          type="textarea"
          autosize
          placeholder="请输入"
          v-model="info.hssWxFollowupRo.content"
        >
        </el-input>
      </div>
      <div class="albums">
        <div class="album_title">添加图片</div>
        <van-uploader
          style="flex: 1"
          preview-size="1.5rem"
          :after-read="afterRead"
          v-model="albums"
          multiple="true"
        />
        <van-loading v-if="isvanloading" type="spinner" class="van_loading" />
        <!-- <div class="albums_box_list">
          <img class="albums_item" src="~@/assets/img/photograph.png" alt="" />
          <img
            class="albums_item"
            :src="item.src"
            alt=""
            v-for="(item, index) in albums"
            :key="index"
          />
        </div> -->
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
            @click="info.hssWxFollowupRo.intentionLevel = item.id"
            v-for="item in intentLevelList"
            :key="item.id"
            :class="{
              select_price_region:
                info.hssWxFollowupRo.intentionLevel == item.id,
            }"
          >
            {{ item.content }}
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
            style="margin-right: 0.24rem; width: 1.44rem"
            @click="handlecheckcontact(item)"
            v-for="item in commtypeList"
            :key="item.id"
            :class="{
              select_price_region: item.content == info.hssWxFollowupRo.mode,
            }"
          >
            {{ item.content }}
          </div>
        </div>
      </div>
      <!-- 沟通方式结束 -->
      <div class="tostore_box" v-if="showToStoreContent">
        <div class="row" style="align-items: center">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">来访时间</div>
          </div>
          <van-field
            style="padding: 0; height: 0.38rem; line-height: 0.38rem"
            readonly
            clickable
            label=""
            :value="info.hssWxFollowupRo.visitingTime"
            placeholder="请选择来访时间"
            @click="showvisitTime = true"
          />
          <van-popup v-model="showvisitTime" round position="bottom">
            <van-datetime-picker
              class="followdatepicker"
              v-model="datepicker3"
              type="datetime"
              :min-date="mindatevisit"
              :max-date="maxdatevisit"
              title="请选择来访时间"
              @cancel="showvisitTime = false"
              @confirm="handlevisitTimeconfirm"
            />
          </van-popup>
        </div>

        <div class="row" style="align-items: center">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">离店时间</div>
          </div>
          <van-field
            style="padding: 0; height: 0.38rem; line-height: 0.38rem"
            readonly
            clickable
            label=""
            :value="info.hssWxFollowupRo.departureTime"
            placeholder="请选择离店时间"
            @click="showleftTime = true"
          />
          <van-popup v-model="showleftTime" round position="bottom">
            <van-datetime-picker
              class="followdatepicker"
              v-model="datepicker4"
              :min-date="mindateleft"
              :max-date="maxdateleft"
              type="datetime"
              title="请选择离店时间"
              @cancel="showleftTime = false"
              @confirm="handleleftTimeconfirm"
            />
          </van-popup>
        </div>

        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">客户人数</div>
          </div>
          <van-field
            clickable
            label=""
            v-model="info.hssWxFollowupRo.customerNumber"
            style="width: 3rem"
            class="van_field"
            type="number"
            oninput="if(value.length>2)value=value.slice(0,2)"
            placeholder="请输入客户人数"
          />

          <!-- <el-input
            v-model="info.hssWxFollowupRo.customerNumber"
            type="number"
            oninput="if(value.length>6)value=value.slice(0,6)"
            placeholder="请输入人数"
            style="flex: 1"
          ></el-input> -->
        </div>
        <!-- <div class="row">
          占位符
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">来访时间段</div>
          </div>

          <div style="display: flex; align-items: center">
            <div>{{ visitSt }}</div>
            <span style="padding: 0px 0.1rem"> ~ </span>
            <div>{{ visitEt }}</div>
          </div>
        </div> -->
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle">接待时长</div>
          </div>

          <div>{{ info.hssWxFollowupRo.receptionDuration }}h</div>
        </div>
      </div>
      <!-- <div class="row" style="align-items: center">
        占位符
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">下次跟进时间</div>
        </div>
        <van-field
          style="padding: 0; height: .38rem; line-height: .38rem"
          readonly
          clickable
          label=""
          :value="followdate1"
          placeholder="选择完整时间"
          @click="showfollowtime1 = true"
        />
        <van-popup v-model="showfollowtime1" round position="bottom">
          <van-datetime-picker
            class="followdatepicker"
            v-model="datepicker1"
            type="datetime"
            title="选择完整时间"
            :min-date="minDate"
            @cancel="showfollowtime1 = false"
            @confirm="handlefollowConfirm1"
          />
        </van-popup>
      </div> -->
    </div>
    <!-- 本次沟通记录 结束-->

    <!-- 更多品牌弹窗 开始 -->
    <van-popup v-model="showmorebrand" position="bottom" @open="handleshowmore">
      <div class="morebrand">
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
            <div class="letter_title" v-if="item1.first_letter">
              {{ item1.first_letter }}
            </div>
            <div class="son_brand_list">
              <div
                class="son_item"
                v-for="(item2, index2) in item1.result"
                :key="index2"
                :style="{
                  'background-color': currentID == item2.id ? '#09c076' : '',
                }"
                @click="handlecheckbrand(item2)"
              >
                <img class="brand_icon" :src="item2.brand_logo" alt="" />
                <div class="item_name">{{ item2.brand_name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 更多品牌弹窗 结束 -->
    <!-- 买车需求开始 -->
    <div class="textbox">
      <div class="texttitle">买车需求</div>
    </div>
    <div class="buyneeds">
      <div class="row" @click="showmorebrand = true">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle" v-if="!info.hssWxBusinessBuyRo.brand">品牌</div>
          <div class="rowtitle" style="width: 4rem" v-else>
            品牌：{{ info.hssWxBusinessBuyRo.brand }}
          </div>
        </div>
        <div class="row_between">
          <div style="flex: 1"></div>
          <div style="wdith: 0.64rem; font-weight: 500; color: #909090">
            更多>
          </div>
        </div>
      </div>
      <div class="brand_list">
        <div
          class="brand_item"
          v-for="item in BbrandList"
          :key="item.id"
          @click="handlecheckBcarlogo(item)"
        >
          <img
            src="~@/assets/img/selectbrand.png"
            class="selectbrand"
            v-if="item.id == info.hssWxBusinessBuyRo.brandId"
            alt=""
          />
          <img :src="item.brand_logo" alt="" />
        </div>
      </div>

      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">车系</div>
        </div>
        <van-field
          @click="showPicker6 = true"
          class="van_field"
          readonly
          clickable
          label=""
          v-model="info.hssWxBusinessBuyRo.series"
          placeholder="请选择车系"
        />
        <van-popup v-model="showPicker6" round position="bottom">
          <van-search
            v-model="search6"
            shape="round"
            background="#09c076"
            @input="onSearch6"
            placeholder="请输入搜索关键词"
          />
          <van-picker
            value-key="name"
            show-toolbar
            :columns="searchBcarseries"
            @cancel="showPicker6 = false"
            @confirm="handlecheckBseries"
          />
        </van-popup>
        <!-- <el-select
          filterable
          clearable 
          v-model="bseriseobj"
          placeholder="请选择车系"
          class="row_between"
          @change="handlecheckBseries"
          value-key="id"
        >
          <el-option
            v-for="item in Bcarseries"
            :key="item.id"
            :label="item.name"
            :value="item"
          >
          </el-option>
        </el-select> -->
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">车型</div>
        </div>
        <van-field
          @click="showPicker7 = true"
          class="van_field"
          readonly
          clickable
          label=""
          v-model="info.hssWxBusinessBuyRo.model"
          placeholder="请选择车型"
        />
        <van-popup v-model="showPicker7" round position="bottom">
          <van-search
            v-model="search7"
            shape="round"
            background="#09c076"
            @input="onSearch7"
            placeholder="请输入搜索关键词"
          />
          <van-picker
            value-key="name"
            show-toolbar
            :columns="searchBcartypes"
            @cancel="showPicker7 = false"
            @confirm="handlecheckBtypes"
          />
        </van-popup>
        <!-- <el-select
          filterable
          clearable
          v-model="btypeobj"
          placeholder="请选择车型"
          class="row_between"
          @change="handlecheckBtypes"
          value-key="id"
        >
          <el-option
            v-for="item in Bcartypes"
            :key="item.id"
            :label="item.name"
            :value="item"
          >
          </el-option>
        </el-select> -->
      </div>
      <!-- 价格区间开始 -->
      <div class="pricebox">
        <div class="prititle">价格区间 / 万元</div>
        <div class="pricelist">
          <div
            class="priceitem"
            @click="hanglecheckprice(item, index)"
            v-for="(item, index) in priceList"
            :key="item.id"
            :class="{
              select_price_region:
                item.content == info.hssWxBusinessBuyRo.priceId,
            }"
          >
            {{ item.content }}
          </div>
        </div>
        <div class="custom_price_box" v-if="showdiyprice">
          <span class="prititle">自定义价格</span>
          <div style="display: flex; align-items: center">
            <div class="lowprice">
              <input
                style="width: 0.6rem; text-align: right"
                class="prititle"
                v-model="info.hssWxBusinessBuyRo.minPrice"
                type="number"
                oninput="if(value.length>4)value=value.slice(0,4)"
                placeholder=""
              />
              <span class="prititle">万</span>
            </div>
            <span class="connector">~</span>
            <div class="highprice">
              <input
                style="width: 0.6rem; text-align: right"
                class="prititle"
                v-model="info.hssWxBusinessBuyRo.maxPrice"
                type="number"
                oninput="if(value.length>4)value=value.slice(0,4)"
                placeholder=""
              />
              <span class="prititle">万</span>
            </div>
          </div>
          <div style="width: 1rem"></div>
          <!-- <div class="confirm" @click="!confirmprice" v-if="!confirmprice">确定</div>
          <div class="confirm" style='background:"#EE5A24"' @click="!confirmprice" v-else>编辑</div>  -->
        </div>
      </div>
      <!-- 价格区间结束 -->
      <!-- <div class="row">
        占位符
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
      </div> -->
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">里程数</div>
        </div>
        <div class="row_between">
          <van-field
            clickable
            label=""
            v-model="info.hssWxBusinessBuyRo.mileage"
            style="width: 3rem"
            class="prititle van_field"
            type="number"
            oninput="if(value.length>4)value=value.slice(0,4)"
            placeholder="请输入里程数"
          />
          <!-- <el-input
            style="width: 3rem"
            v-model="info.hssWxBusinessBuyRo.mileage"
            type="number"
            oninput="if(value.length>3)value=value.slice(0,3)"
            placeholder="请输入"
          ></el-input> -->
          <span style="font-weight: bold; color: #303030">万公里</span>
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">是否按揭</div>
        </div>
        <div class="row_radio">
          <div class="radiobox" @click="info.hssWxBusinessBuyRo.isMortgage = 1">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="info.hssWxBusinessBuyRo.isMortgage == 1"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>否</span>
          </div>
          <div class="radiobox" @click="info.hssWxBusinessBuyRo.isMortgage = 2">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="info.hssWxBusinessBuyRo.isMortgage == 2"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>是</span>
          </div>
        </div>
      </div>
      <div class="intent_desc">
        <div
          style="
            font-size: 0.24rem;
            font-weight: bold;
            color: #303030;
            margin-bottom: 0.16rem;
          "
        >
          意向描述
        </div>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="info.hssWxBusinessBuyRo.describes"
        >
        </el-input>
      </div>
      <!--意向等级开始  -->
      <!-- <div class="intent_level">
        <div class="row" style="border: none">
          <div class="placeholder">*</div>
          <div class="rowtitle">意向等级</div>
        </div>

        <div class="intent_level_list">
          <div
            class="intent_level_item"
            @click="info.hssWxFollowupRo.intentionLevel = item.id"
            v-for="item in intentLevelList"
            :key="item.id"
            :class="{
              select_price_region:
                info.hssWxFollowupRo.intentionLevel == item.id,
            }"
          >
            {{ item.content }}
          </div>
        </div>
      </div> -->
      <!-- 意向等级结束 -->
      <!-- 购买类型 -->
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">购买类型</div>
        </div>
        <div class="row_radio">
          <div
            class="radiobox radiobuytype"
            @click="info.hssWxFollowupRo.business = item.content"
            v-for="item in purchasetypeList"
            :key="item.id"
          >
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="info.hssWxFollowupRo.business == item.content"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
      <div class="row" style="align-items: center">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">下次跟进时间</div>
        </div>
        <van-field
          style="padding: 0; height: 0.38rem; line-height: 0.38rem"
          readonly
          clickable
          label=""
          :value="momentNextFollowUpTime"
          placeholder="选择完整时间"
          @click="showfollowtime2 = true"
        />
        <van-popup v-model="showfollowtime2" round position="bottom">
          <van-datetime-picker
            class="followdatepicker"
            v-model="datepicker3"
            type="datetime"
            title="选择完整时间"
            :min-date="minDate"
            @cancel="showfollowtime2 = false"
            @confirm="handlefollowConfirm2"
          />
        </van-popup>
      </div>
    </div>
    <div class="btn_save" @click="save" v-show="hideshow">保存</div>
  </div>
</template>

<script>
import brand from "@/assets/img/brand.png";
import moment from "moment";
import { compressImg, readImg } from "@/assets/js/imageUtil";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      defaultHeight: "0", // 默认屏幕高度
      showHeight: 0, // 实时屏幕高度
      hideshow: true, // 显示或者隐藏保存按钮,
      id: "",
      albums: [],
      // 买车车系搜索列表、搜索值、是否显示picker
      searchBcarseries: [],
      search6: "",
      showPicker6: false,
      // 买车车型搜索列表、搜索值、是否显示picker
      searchBcartypes: [],
      search7: "",
      showPicker7: false,
      // 显示更多品牌弹窗
      showmorebrand: false,
      showdiyprice: false,
      // 到店显示的内容
      showToStoreContent: false,
      showvisitTime: false,
      showleftTime: false,
      searchvalue: "",
      currentID: "",
      // bseriseobj: {},
      // btypeobj: {},
      // 显示的带星期的下次跟进时间(不传给后台)
      momentNextFollowUpTime: "",
      info: {
        hssWxFollowupRo: {
          customerId: "", //用户id
          content: "", //跟进内容
          pic: "", //图片
          mode: "", //沟通方式
          visitingTime: "", //来访时间
          departureTime: "", //离店时间
          customerNumber: "", //客户人数
          visitingPeriod: "", //来访时间段
          receptionDuration: "", //接待时长
          nextFollowUpTime: "", //下次跟进时间
          intentionLevel: "", //意向等级
          business: "",
        }, //跟进信息
        hssWxBusinessBuyRo: {
          id: "", //买车表id
          brand: "", //品牌
          series: "",

          model: "", //车型
          brandId: "",

          seriesId: "",

          modelId: "",

          brandPic: "",

          priceId: "",

          minPrice: "", //最低价格
          maxPrice: "", //最高价格
          // color: "", 颜色
          mileage: "", //里程数
          isMortgage: 0, //是否按揭
          describes: "", //意向描述
        }, //买车需求
      },
      datepicker1: "",
      datepicker2: "",
      datepicker3: "",
      datepicker4: "",
      showfollowtime1: false,
      showfollowtime2: false,
      minDate: new Date(),
      // 购买类型
      purchasetypeList: [],
      // 沟通方式
      commtypeList: [],
      isvanloading: false,
      // 添加图片
      albums: [],
      // 沟通意向等级
      intentLevelList: [],
      // 沟通下次跟进时间
      followdate1: "",
      // 汽车品牌弹窗列表
      brandlist: [],
      // 买车品牌列表
      BbrandList: [],
      // 车系列表
      Bcarseries: [],
      // 车型列表
      Bcartypes: [],
      // 价格区间列表
      priceList: [],
    };
  },
  computed: {
    // 接待时长
    receptionDuration() {
      if (
        this.info.hssWxFollowupRo.visitingTime &&
        this.info.hssWxFollowupRo.departureTime
      ) {
        let s = moment(this.info.hssWxFollowupRo.departureTime).diff(
          moment(this.info.hssWxFollowupRo.visitingTime),
          "hours",
          true
        );
        return s.toFixed(2);
      }

      return "";
    },
    // 来访最小时间限制
    mindatevisit() {
      // 当天0点的时间格式
      return new Date(moment().startOf("day").format());
    },
    maxdatevisit() {
      if (this.info.hssWxFollowupRo.departureTime)
        return new Date(this.info.hssWxFollowupRo.departureTime);
      // 当天23点59分59秒的时间格式
      return new Date(moment().endOf("day").format());
    },
    // 离店最小时间限制
    mindateleft() {
      if (this.info.hssWxFollowupRo.visitingTime)
        return new Date(this.info.hssWxFollowupRo.visitingTime);
      return new Date(moment().startOf("day").format());
    },
    maxdateleft() {
      return new Date(moment().endOf("day").format());
    },
  },
  watch: {
    // visitTime: function () {
    //   this.visitSt = moment(this.visitTime).format("YYYY-MM-DD hh:MM:ss");
    //   if (this.leaveTime) {
    //     this.receptionDuration = moment(this.leaveTime)
    //       .diff(moment(this.visitTime), "hours", true)
    //       .toFixed(2);
    //   }
    // },
    // leaveTime: function () {
    //   this.visitEt = moment(this.leaveTime).format("YYYY-MM-DD hh:MM:ss");
    //   if (this.visitTime) {
    //     this.receptionDuration = moment(this.leaveTime)
    //       .diff(moment(this.visitTime), "hours", true)
    //       .toFixed(2);
    //   }
    // },
    // 时间间隔
    receptionDuration() {
      this.info.hssWxFollowupRo.receptionDuration = this.receptionDuration;
    },
    searchvalue() {
      if (this.searchvalue == "") {
        this.api.searchbrandlist("").then((res) => {
          this.brandlist = res;
        });
      }
    },
    // 监听键盘弹出后屏幕高度变化
    showHeight: function () {
      if (this.defaultHeight !== this.showHeight) {
        // 键盘弹出操作
        this.hideshow = false;
      } else {
        // 键盘不弹出操作
        this.hideshow = true;
      }
    },
  },
  methods: {
    back() {
      this.until.back();
    },
    // 处理公共字段参数生成qry(使用query.js)
    newqry(obj) {
      let qry = this.query.new();
      // 条件
      obj.w.forEach((item) => {
        this.query.toW(qry, item[0], item[1], item[2]);
      });
      // 排序
      this.query.toO(qry, obj.o[0], obj.o[1]);
      // 分页
      this.query.toP(qry, obj.p[0], obj.p[1]);
      return qry;
    },
    async afterRead(e) {
      console.log(e);
      // this.$loading.show("正在上传");
      this.isvanloading = true;
      const formData = new FormData();
      if (e.file.size > 1048576) {
        console.log("压缩图片");
        const img = await readImg(e.file);
        let blob = await compressImg(img);
        formData.append("file", blob, "file.jpg");
      } else {
        formData.append("file", e.file, "file.jpg");
      }
      this.api.upnewimg(formData).then((imgurl) => {
        this.isvanloading = false;

        console.log("上传后地址", imgurl.data);
        if (!this.info.hssWxFollowupRo.pic) {
          this.info.hssWxFollowupRo.pic = imgurl.data;
        } else {
          this.info.hssWxFollowupRo.pic += `,${imgurl.data}`;
        }
      });
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
    handlefollowConfirm1(e) {
      this.followdate1 = moment(e).format("YYYY-MM-DD dddd HH:mm");
      this.showfollowtime1 = false;
    },
    handlefollowConfirm2(e) {
      this.info.hssWxFollowupRo.nextFollowUpTime = e;
      this.momentNextFollowUpTime = moment(e).format("YYYY-MM-DD dddd HH:mm");
      this.showfollowtime2 = false;
    },
    handlevisitTimeconfirm(e) {
      this.info.hssWxFollowupRo.visitingTime =
        moment(e).format("YYYY-MM-DD HH:mm");
      this.showvisitTime = false;
    },
    handleleftTimeconfirm(e) {
      this.info.hssWxFollowupRo.departureTime =
        moment(e).format("YYYY-MM-DD HH:mm");
      this.showleftTime = false;
    },
    // 更多品牌中选择
    handlecheckbrand(brand) {
      this.currentID = brand.id;
      this.info.hssWxBusinessBuyRo.brandId = brand.id;
      this.info.hssWxBusinessBuyRo.brand = brand.brand_name;
      // 清空车型、车系
      this.info.hssWxBusinessBuyRo.series = "";
      this.info.hssWxBusinessBuyRo.model = "";
      this.info.hssWxBusinessBuyRo.seriesId = "";
      this.info.hssWxBusinessBuyRo.modelId = "";
      // this.bseriseobj = {};
      // this.btypeobj = {};
      // 获取买车车系列表
      this.api
        .getCarSeries({ brandid: this.info.hssWxBusinessBuyRo.brandId })
        .then((res) => {
          this.Bcarseries = res;
          this.searchBcarseries = res;
        });
      setTimeout(() => {
        this.showmorebrand = false;
      }, 200);
    },
    async onSearch(val) {
      this.brandlist = await this.api.searchbrandlist(val);
    },
    // 选择买车车标
    handlecheckBcarlogo(brand) {
      this.info.hssWxBusinessBuyRo.brandId = brand.id;
      this.info.hssWxBusinessBuyRo.brand = brand.brand_name;
      // 清空车型、车系
      this.info.hssWxBusinessBuyRo.series = "";
      this.info.hssWxBusinessBuyRo.model = "";
      this.info.hssWxBusinessBuyRo.seriesId = "";
      this.info.hssWxBusinessBuyRo.modelId = "";
      // this.bseriseobj = {};
      // this.btypeobj = {};
      // 获取买车车系列表
      this.api
        .getCarSeries({ brandid: this.info.hssWxBusinessBuyRo.brandId })
        .then((res) => {
          this.Bcarseries = res;
          this.searchBcarseries = res;
        });
    },
    // 处理买车车系选中值变化
    handlecheckBseries(brand) {
      this.info.hssWxBusinessBuyRo.seriesId = brand.id;
      this.info.hssWxBusinessBuyRo.series = brand.name;
      // 车型清空
      this.info.hssWxBusinessBuyRo.model = "";
      this.info.hssWxBusinessBuyRo.modelId = "";
      this.showPicker6 = false;

      // this.btypeobj = {};

      // 获取买车车型列表
      this.api
        .getCarModels({ seriesId: this.info.hssWxBusinessBuyRo.seriesId })
        .then((res) => {
          this.Bcartypes = res.result;
          this.searchBcartypes = res.result;
        });
    },
    handlecheckBtypes(brand) {
      this.info.hssWxBusinessBuyRo.modelId = brand.id;
      this.info.hssWxBusinessBuyRo.model = brand.name;
      this.showPicker7 = false;
    },
    // 选中沟通方式
    handlecheckcontact(item) {
      this.info.hssWxFollowupRo.mode = item.content;
      this.showToStoreContent = item.outside;
    },
    // 打开更多品牌弹出层
    async handleshowmore() {
      // 每次打开重新请求所有品牌列表，搜索会改变列表
      this.searchvalue = "";
      // 将买车id赋值给currentID
      this.currentID = this.info.hssWxBusinessBuyRo.brandId;
    },
    // 选中价格
    hanglecheckprice(item, index) {
      this.showdiyprice = item.outside;
      this.info.hssWxBusinessBuyRo.priceId = item.content;
    },
    //确定自定义价格
    handleconfirmPrice() {
      this.confirmprice = true;
    },
    // 买车车系
    onSearch6(a) {
      if (a != "")
        this.searchBcarseries = this.Bcarseries.filter((item) =>
          item.name.includes(a)
        );
      else this.searchBcarseries = this.Bcarseries;
    },
    //  买车车型
    onSearch7(a) {
      if (a != "")
        this.searchBcartypes = this.Bcartypes.filter((item) =>
          item.name.includes(a)
        );
      else this.searchBcartypes = this.Bcartypes;
    },
    async save() {
      // 数据校验开始
      // 必填项
      if (this.info.hssWxFollowupRo.content == "") {
        Toast("请输入跟进内容");
        return false;
      } else if (this.info.hssWxFollowupRo.mode == "") {
        Toast("请选择沟通方式");
        return false;
      } else if (this.showToStoreContent) {
        if (this.info.hssWxFollowupRo.visitingTime == "") {
          Toast("请选择来访时间");
          return false;
        } else if (this.info.hssWxFollowupRo.departureTime == "") {
          Toast("请选择离店时间");
          return false;
        } else if (this.info.hssWxFollowupRo.customerNumber == "") {
          Toast("请选择客户人数");
          return false;
        }
      }

      if (this.info.hssWxBusinessBuyRo.brand == "") {
        Toast("请选择买车品牌");
        return false;
      }

      if (this.info.hssWxFollowupRo.intentionLevel == "") {
        Toast("请选择意向等级");
        return false;
      }

      if (
        this.showdiyprice &&
        Number(this.info.hssWxBusinessBuyRo.minPrice) >
          Number(this.info.hssWxBusinessBuyRo.maxPrice)
      ) {
        Toast("最低价格应小于最高价格");
        return false;
      }
      // 数据校验结束
      let data = await this.api.commitNewfollow(this.info);
      if (data.code == 0) {
        Toast("保存成功");
        this.until.back();
      } else Toast("保存失败");
    },
  },
  async created() {
    // 设置moment.js(时间库)中文环境
    moment.locale("zh-cn");

    // 沟通方式
    this.commtypeList = await this.api.getcommtypeList(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 8, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 10 },
        })
      )
    );
    // 客流性质
    let query_flow_type = {
      w: [["category", 2, "EQ"]],
      o: ["id", "esc"],
      p: [1, 10],
    };
    this.custypeList = await this.api.getFlowtypeList(
      this.query.toEncode(this.newqry(query_flow_type))
    );
    // 获取客户来源
    this.customerofList = await this.api.getCustomerSource(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 3, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 10 },
        })
      )
    );
    // 获取购买类型
    this.purchasetypeList = await this.api.getBuysTypeList(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 4, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 20 },
        })
      )
    );
    // 意向等级
    this.intentLevelList = await this.api.getWxIntentionLevel({
      p: { n: 1, s: 20 },
    });
    // 获取八个常用车标
    let BbrandList = await this.api.getCommonCarIcon();
    this.BbrandList = JSON.parse(BbrandList);

    // 获取更多品牌
    this.brandlist = await this.api.searchbrandlist("");
    // 获取价格区间
    this.priceList = await this.api.getpriceList(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 7, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 20 },
        })
      )
    );

    // 用户id
    this.id = this.until.getQueryString("id");
    // 详情数据复写
    let detailData = await this.api.getcustomerDetail(this.id);
    this.info.hssWxBusinessBuyRo = detailData.buy.data;
    // this.info.hssWxBusinessBuyRo = {
    //   ...detailData.buy.data,
    //   ...this.info.hssWxBusinessBuyRo,
    // };
    // 购买类型
    this.info.hssWxFollowupRo.business = detailData.customer.data.business;
    // 意向等级
    this.info.hssWxFollowupRo.intentionLevel =
      detailData.customer.data.intentionLevel;
    // 用户id
    this.info.hssWxFollowupRo.customerId = detailData.customer.data.id;
    // 自定义价格是否显示
    if (this.info.hssWxBusinessBuyRo.priceId) {
      let priceindex = this.priceList.findIndex(
        (item) => item.content == this.info.hssWxBusinessBuyRo.priceId
      );
      this.showdiyprice = this.priceList[priceindex].outside;
    }

    // 车系列表
    this.Bcarseries = await this.api.getCarSeries({
      brandid: this.info.hssWxBusinessBuyRo.brandId,
    });
    this.searchBcarseries = this.Bcarseries;
    // 车型列表
    let bshortTypes = await this.api.getCarModels({
      seriesId: this.info.hssWxBusinessBuyRo.seriesId,
    });
    this.Bcartypes = bshortTypes.result;
    this.searchBcartypes = this.Bcartypes;

    // 车系、车型复写
    // this.$set(this.bseriseobj, "id", this.info.hssWxBusinessBuyRo.seriesId);
    // this.$set(this.bseriseobj, "name", this.info.hssWxBusinessBuyRo.series);
    // this.$set(this.btypeobj, "id", this.info.hssWxBusinessBuyRo.modelId);
    // this.$set(this.btypeobj, "name", this.info.hssWxBusinessBuyRo.model);
  },
  mounted() {
    this.defaultHeight = $(window).height();
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight;
      })();
    };
  },
};
</script>
<style lang="less">
.van-cell::after {
  border-bottom: none;
}
.el-input__inner {
  border: none;
  height: 0.28rem !important;
  padding-left: 0px;
}
.el-input__icon {
  display: flex;
  align-items: center;
}
.el-cascader {
  line-height: 0.38rem;
  height: 0.38rem;
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
  padding-bottom: 2rem;
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
  .van_field {
    padding: 0;
    height: 0.38rem;
    line-height: 0.38rem;
  }
  .row {
    padding: 0.3rem;
    padding-right: 0.48rem;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e7e7e7;
    align-items: center;

    .placeholder {
      width: 0.18rem;
      font-size: 0.24rem;
      font-weight: bold;
      color: #ff3000;
    }
  }
  .row:last-child {
    border: none;
  }
  .rowtitle {
    width: 1.44rem;
    font-size: 0.24rem;
    font-weight: bold;
    color: #303030;
    margin-right: 0.34rem;
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
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.1rem;
      }
    }
    .radiobuytype:last-child {
      margin-top: 0.2rem;
    }
  }
  .morebrand {
    padding-bottom: 4rem;
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
          padding: 0.1rem 0.2rem;
        }

        .son_brand_list {
          background: #ffffff;
          .son_item {
            padding: 0.2rem;
            display: flex;
            align-items: center;
            .brand_icon {
              width: 1rem;
              height: 1rem;
              margin-right: 0.2rem;
            }
            .item_name {
              font-size: 0.32rem;
              height: 0.6rem;
              line-height: 0.6rem;
            }
          }
        }
      }
    }
  }
  .textbox {
    padding: 0.3rem 0.48rem;
    display: flex;
    .texttitle {
      font-size: 0.24rem;
      font-weight: bold;
      color: #303030;
      margin-right: 0.1rem;
    }
    .tip {
      font-size: 0.24rem;
      font-weight: bold;
      color: #09c076;
    }
  }

  .connect_record_box {
    .follow_content {
      padding: 0.3rem;
      padding-right: 0.48rem;
      background: #fff;
      border-bottom: 1px solid #e7e7e7;
    }
  }
  .intent_level {
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
    // padding: .3rem .48rem;
    .intent_level_list {
      padding: 0px 0.48rem 0px 0.48rem;
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      .intent_level_item {
        margin-bottom: 0.3rem;
        margin-right: 0.32rem;
        width: 1.04rem;
        height: 0.54rem;
        text-align: center;
        line-height: 0.54rem;
        color: #909090;
        background: #ededed;
        border-radius: 0.06rem;
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
        padding: 0.14rem 0.32rem;
        border-bottom: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        background: #fff;
        position: relative;
        .selectbrand {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
        }
        img {
          width: 1.24rem;
          height: 1.24rem;
        }
      }
    }
    .pricebox {
      border-bottom: 1px solid #e7e7e7;
      background: #fff;
      padding: 0.3rem 0.48rem;
      .prititle {
        font-size: 0.24rem;
        font-weight: bold;
        color: #303030;
      }

      .pricelist {
        padding: 0.2rem 1px;
        padding-bottom: 0px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .priceitem {
          // margin-right: .2rem;
          margin-bottom: 0.2rem;
          width: 2.04rem;
          height: 0.54rem;
          text-align: center;
          line-height: 0.54rem;
          color: #909090;
          background: #ededed;
          border-radius: 0.06rem;
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
          padding: 0.06rem 0.4rem;
          border: 1px solid #d8d8d8;
        }

        .connector {
          font-size: 0.24rem;
          font-weight: bold;
          color: #bfbfbf;
        }

        .highprice {
          display: flex;
          padding: 0.06rem 0.4rem;
          border: 1px solid #d8d8d8;
        }

        .confirm {
          background: #09c076;
          border-radius: 0.06rem;
          font-size: 0.24rem;
          font-weight: 500;
          color: #ffffff;
          padding: 0.06rem 0.44rem;
        }
      }
    }
    .intent_desc {
      padding: 0.3rem 0.48rem;
      background: #fff;
      border-bottom: 1px solid #e7e7e7;
    }
  }

  .albums {
    position: relative;
    padding: 0.3rem 0.48rem;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e7e7e7;

    .album_title {
      font-size: 0.24rem;
      font-weight: bold;
      color: #303030;
      width: 1.2rem;
    }
    .van_loading {
      position: absolute;
      top: 50%;
      right: 30%;
      transform: translateX(-50%) translateY(-50%);
      color: #09c076;
    }
    .albums_box_list {
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      .albums_item {
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
        width: 1.62rem;
        height: 1.56rem;
      }
    }
  }
  .btn_save {
    // margin: 0.96rem auto 0px;
    width: 5.7rem;
    height: 0.7rem;
    background: #09c076;
    border-radius: 0.34rem;
    font-size: 0.3rem;
    font-weight: 500;
    color: #ffffff;
    line-height: 0.7rem;
    text-align: center;
    position: fixed;
    bottom: 0.7rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }
}
</style>