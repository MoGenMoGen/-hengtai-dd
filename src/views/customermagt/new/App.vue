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
            :label="item.content"
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
            :label="item.arg7"
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
            style="width: 3rem"
            v-model="phone"
            type="number"
            oninput="if(value.length>11)value=value.slice(0,11)"
            placeholder="请输入"
          ></el-input>
          <!-- <span style="color: #09c076">通讯录匹配</span> -->
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
      <div class="row" style="padding-bottom: 0.1rem">
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">客户区域</div>
        </div>
        <div class="row_radio" style="padding: 0px">
          <div
            style="margin-bottom: 0.2rem"
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
      <div class="row" style="padding-right: 0.24rem">
        <!-- 占位符 -->
        <div style="display: flex; align-items: center">
          <div class="placeholder"></div>
          <div class="rowtitle" style="width: 2.8rem">
            宁波以外城市 (某省某市)
          </div>
        </div>

        <van-field
          style="align-item: center; padding: 0"
          class="row_between"
          v-model="city"
          readonly
          label=""
          placeholder="请选择所在地区"
          @click="showcity = true"
        />
        <van-popup v-model="showcity" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="citys"
            :field-names="{ text: 'nm', value: 'id' }"
            active-color="#09C076"
            @close="showcity = false"
            @change="changecitys"
            @finish="onFinishcity"
          />
        </van-popup>
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
            :label="item.content"
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
            :label="item.content"
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
          <div style="wdith: 0.64rem; font-weight: 500; color: #909090">
            更多>
          </div>
        </div>
      </div>
      <div class="brand_list">
        <div class="brand_item" v-for="item in BbrandList" :key="item.id">
          <img :src="item.brand_logo" alt="" />
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">车系</div>
        </div>
        <el-select
          v-model="bcarserie"
          placeholder="请选择车系"
          class="row_between"
        >
          <el-option
            v-for="item in Bcarseries"
            :key="item.id"
            :label="item.content"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">车型</div>
        </div>
        <el-select
          v-model="bcartype"
          placeholder="请选择车型"
          class="row_between"
        >
          <el-option
            v-for="item in Bcartypes"
            :key="item.id"
            :label="item.content"
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
              style="width: 0.46rem; text-align: right"
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
              style="width: 0.46rem; text-align: right"
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
          <el-input
            style="width: 3rem"
            v-model="buymileage"
            type="number"
            oninput="if(value.length>3)value=value.slice(0,3)"
            placeholder="请输入"
          ></el-input>
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
            @click="checkedLevelIndex = index"
            v-for="(item, index) in intentLevelList"
            :key="item.id"
            :class="{ select_price_region: index == checkedLevelIndex }"
          >
            {{ item.content }}
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
      <div class="row" style="align-items: center">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">下次跟进时间</div>
        </div>
        <van-field
          style="padding: 0; height: 19px; line-height: 19px"
          readonly
          clickable
          label=""
          :value="followdate"
          placeholder="选择完整时间"
          @click="showfollowtime = true"
        />
        <van-popup v-model="showfollowtime" round position="bottom">
          <van-datetime-picker
            class="followdatepicker"
            v-model="datepicker"
            type="datetime"
            title="选择完整时间"
            :min-date="minDate"
            @cancel="showfollowtime = false"
            @confirm="handlefollowConfirm"
          />
        </van-popup>
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
            <div class="placeholder">*</div>
            <div class="rowtitle">品牌</div>
          </div>
          <div class="row_between">
            <div style="flex: 1"></div>
            <div style="wdith: 0.64rem; font-weight: 500; color: #909090">
              更多>
            </div>
          </div>
        </div>
        <div class="brand_list">
          <div class="brand_item" v-for="item in SbrandList" :key="item.id">
            <img :src="item.brand_logo" alt="" />
          </div>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">车系</div>
          </div>
          <el-select
            v-model="scartype"
            placeholder="请选择车系"
            class="row_between"
          >
            <el-option
              v-for="item in Scarseries"
              :key="item.id"
              :label="item.content"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">车型</div>
          </div>
          <el-select
            v-model="scartype"
            placeholder="请选择车型"
            class="row_between"
          >
            <el-option
              v-for="item in Scartypes"
              :key="item.id"
              :label="item.content"
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
              v-model="sellmileage"
              type="number"
              oninput="if(value.length>3)value=value.slice(0,3)"
              placeholder="请输入"
            ></el-input>
            <span style="font-weight: bold; color: #303030">万公里</span>
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
              font-size: 0.24rem;
              font-weight: bold;
              color: #303030;
              margin-bottom: 0.16rem;
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
              style="width: 3rem"
              v-model="sparephone"
              type="number"
              oninput="if(value.length>11)value=value.slice(0,11)"
              placeholder="请输入"
            ></el-input>
            <!-- <span style="color: #09c076">通讯录匹配</span> -->
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
        <div class="row" style="padding-right: 0.24rem">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle" style="">所在地</div>
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
          <van-uploader
            style="flex: 1"
            preview-size="1.5rem"
            :after-read="afterRead"
            v-model="albums"
            multiple="true"
          />
          <van-loading v-if="isvanloading" type="spinner" class="van_loading" />
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
      isvanloading: false,
      datepicker: "",
      showfollowtime: false,
      minDate: new Date(),
      // 用户信息
      hssWxCustomerRo: {},
      // 买车
      hssWxBusinessBuyRo: {},
      // 卖车
      hssWxBusinessSellRo: {},
      query_params: {
        w: [["pid", 100000, "EQ"]],
        o: ["id", "esc"],
        p: [1, 10000],
      },
      shop: "",
      // 门店列表
      shopList: [],
      saler: "",
      // 销售顾问列表
      salers: [],
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
      cascaderValue: "",
      showcity: false,
      // 宁波以外城市
      city: "",
      citys: [
        {
          nm: "浙江省",
          id: "330000",
          children: [
            { nm: "杭州市", id: "330100" },
            { nm: "宁波市", id: "330200" },
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
      customerofList: [],
      // 汽车品牌列表
      BbrandList: [
        {
          brand_logo: brand,
          id: 1,
        },
        {
          brand_logo: brand,
          id: 2,
        },
        {
          brand_logo: brand,
          id: 3,
        },
        {
          brand_logo: brand,
          id: 4,
        },
        {
          brand_logo: brand,
          id: 5,
        },
        {
          brand_logo: brand,
          id: 6,
        },
        {
          brand_logo: brand,
          id: 7,
        },
        {
          brand_logo: brand,
          id: 8,
        },
      ],
      // 车系列表
      Bcarseries: [],
      bcarserie: "",
      // 车型列表
      bcartype: "",
      Bcartypes: [
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
      lowprice: "",
      highprice: "",
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
      checkedLevelIndex: 0,
      intentLevelList: [
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
      // 跟进日期
      followdate: "",
      // 跟进日期周几
      followdateofweek: "",
      // 是否卖车
      issellcar: 1,
      SbrandList: [
        {
          brand_logo: brand,
          id: 1,
        },
        {
          brand_logo: brand,
          id: 2,
        },
        {
          brand_logo: brand,
          id: 3,
        },
        {
          brand_logo: brand,
          id: 4,
        },
        {
          brand_logo: brand,
          id: 5,
        },
        {
          brand_logo: brand,
          id: 6,
        },
        {
          brand_logo: brand,
          id: 7,
        },
        {
          brand_logo: brand,
          id: 8,
        },
      ],
      // 车系列表
      Scarseries: [],
      scarserie: "",
      // 车型列表
      scartype: "",
      Scartypes: [
        {
          id: 1,
          value: "A4L 新款",
        },
        {
          id: 2,
          value: "A8 黑色 商务款",
        },
      ],
      // 卖车里程数
      sellmileage: 0,
      // 上牌时间
      licensedate: "",
      // 备注
      remark: "",
      // 老客户介绍人
      introducer: "",
      introducers: [
        {
          id: 8,
          value: "摩根",
        },
        {
          id: 9,
          value: "姚峰",
        },
        {
          id: 10,
          value: "吴林超",
        },
      ],
      // 备用号
      sparephone: "",
      // 身份证号
      idcard: "",
      // 生日
      birthday: "",
      // 所在地
      location: "",
      locations: [
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
      // 联系地址
      contactAddress: "",
      //  兴趣
      hobbies: "",
      // 职业
      occupation: "",
      // 相册
      albums: [],
    };
  },
  // watch: {
  //   query_params() {
  //     this.api
  //       .getmapList(this.query.toEncode(this.newqry(this.query_params)))
  //       .then((res) => {
  //         this.citys = res;
  //       });
  //   },
  // },
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
    // 更换省市区
    changecitys({ value }) {
      // 选中了某省(选某市就结束了)
      // 修改请求条件
      this.query_params.w[0][1] = value;

      // 循环citys,在对应项中插入children
      this.citys.forEach((item, index) => {
        if (item.id == value) {
          this.api
            .getmapList(this.query.toEncode(this.newqry(this.query_params)))
            .then((res) => {
              item.children = res;
            });
          return false;
        }
      });
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinishcity({ selectedOptions }) {
      // 关闭弹出层
      this.showcity = false;
      // 设置显示内容
      this.city = selectedOptions.map((option) => option.nm).join("/");
      // 设置请求条件，下次请求还是先请求省
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
        console.log("上传后地址", imgurl);
        this.isvanloading = false;
      });
    },
    // 处理确定跟进时间
    handlefollowConfirm(e) {
      this.followdate = moment(e).format("YYYY-MM-DD dddd HH:mm");
      this.showfollowtime = false;
    },
  },
  async created() {
    moment.locale("zh-cn");
    // 获取门店列表
    this.shopList = await this.api.getstoreList(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 1, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 10 },
        })
      )
    );
    // 获取销售顾问列表
    this.salers = await this.api.getsalersList(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 6, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 20 },
        })
      )
    );
    // 获取客户区域
    this.cusArea = await this.api.getCustomerArea(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 6, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 20 },
        })
      )
    );
    // 获取省市区
    this.api
      .getmapList(this.query.toEncode(this.newqry(this.query_params)))
      .then((res) => {
        this.citys = res.map((item) => {
          item.children = [];
          return item;
        });
      });
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
    // 意向等级
    this.intentLevelList = await this.api.getWxIntentionLevel({
      p: { n: 1, s: 20 },
    });
    // 获取八个常用车标
    let BbrandList = await this.api.getCommonCarIcon();
    //  this.BbrandList=BbrandList.split(',')
  },
};
</script>
<style lang="less">
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
    padding: 0.3rem;
    padding-right: 0.48rem;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e7e7e7;

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
  }
  .top {
    border-radius: 0.12rem;
    padding: 0.14rem 0px 0px;
    // .shopbox {
    // border-bottom: 1px solid #e7e7e7
    // justify-content: space-between;
    // align-items: center;
    // }
    .row {
      el-select {
        flex: 1;
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
  // .infobox {
  // }
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
    .intent_level {
      border-bottom: 1px solid #e7e7e7;
      background: #fff;
      // padding: .3rem .48rem;
      .intent_level_list {
        padding: 0px 0.48rem 0px 0.48rem;
        display: flex;
        justify-content: space-between;
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
        .select_price_region {
          background: #09c076;
          color: #ffffff;
        }
      }
    }
  }
  .sellcarbox {
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
        img {
          width: 1.24rem;
          height: 1.24rem;
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
    margin: 0.96rem auto 0px;
    width: 5.7rem;
    height: 0.7rem;
    background: #09c076;
    border-radius: 0.34rem;
    font-size: 0.3rem;
    font-weight: 500;
    color: #ffffff;
    line-height: 0.7rem;
    text-align: center;
  }
}
</style>