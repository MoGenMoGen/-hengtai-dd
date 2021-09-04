<template>
  <div id="container">
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      {{ Title }}
    </div>
    <!-- 门店和销售开始 -->
    <div class="top">
      <div class="row shopbox">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">门店</div>
        </div>
        <el-select
          v-model="hssWxCustomerRo.store"
          filterable
          placeholder="请选择门店"
          class="row_between"
        >
          <el-option
            v-for="item in shopList"
            :key="item.id"
            :label="item.content"
            :value="item.content"
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
          filterable
          v-model="hssWxCustomerRo.saler"
          placeholder="请选择销售顾问"
          class="row_between"
        >
          <el-option
            v-for="item in salers"
            :key="item.id"
            :label="item.arg7"
            :value="item.arg7"
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
            v-model="hssWxCustomerRo.phone"
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
          v-model="hssWxCustomerRo.wxId"
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
          v-model="hssWxCustomerRo.name"
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
          <div class="radiobox" @click="hssWxCustomerRo.sex = '男'">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.sex == '男'"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>先生</span>
          </div>
          <div class="radiobox" @click="hssWxCustomerRo.sex = '女'">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.sex == '女'"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>女士</span>
          </div>
          <div class="radiobox" @click="hssWxCustomerRo.sex = '未知'">
            <img
              src="~@/assets/img/radio.png"
              alt=""
              v-if="hssWxCustomerRo.sex == '男' || hssWxCustomerRo.sex == '女'"
            />
            <img src="~@/assets/img/radioselect.png" alt="" v-else />

            <span>未知</span>
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
          <div class="radiobox" @click="hssWxCustomerRo.important = '否'">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.important == '否'"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>否</span>
          </div>
          <div class="radiobox" @click="hssWxCustomerRo.important = '是'">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.important == '是'"
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
            @click="radioCheckArea(item, index)"
          >
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.region == item.content"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
      <div class="row" style="padding-right: 0.24rem" v-if="showAreaOutside">
        <!-- 占位符 -->
        <div style="display: flex; align-items: center">
          <div class="placeholder"></div>
          <div class="rowtitle" style="width: 2.8rem">
            宁波以外城市 (某省某市)
          </div>
        </div>

        <van-field
          style="
            align-item: center;
            padding: 0;
            height: 19px;
            line-height: 19px;
          "
          class="row_between"
          v-model="hssWxCustomerRo.regionOutside"
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
          filterable
          v-model="hssWxCustomerRo.nature"
          placeholder="请选择客流性质"
          class="row_between"
        >
          <el-option
            v-for="item in custypeList"
            :key="item.id"
            :label="item.content"
            :value="item.content"
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
          filterable
          v-model="hssWxCustomerRo.source"
          placeholder="请选择客户来源"
          class="row_between"
        >
          <el-option
            v-for="item in customerofList"
            :key="item.id"
            :label="item.content"
            :value="item.content"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <!-- 基本信息结束-->

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
      <div class="row" @click="showmorebuybrand = true">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle" v-if="!hssWxBusinessBuyRo.brand">品牌</div>
          <div class="rowtitle" style="width: 200px" v-else>
            品牌：{{ hssWxBusinessBuyRo.brand }}
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
          :style="{
            background: item.id == hssWxBusinessBuyRo.brandId ? '#09c076' : '',
          }"
        >
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
          filterable
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
        </el-select>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">车型</div>
        </div>
        <el-select
          filterable
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
        </el-select>
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
              select_price_region: item.content == hssWxBusinessBuyRo.priceId,
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
                v-model="hssWxBusinessBuyRo.minPrice"
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
                v-model="hssWxBusinessBuyRo.maxPrice"
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
          <el-input
            style="width: 3rem"
            v-model="hssWxBusinessBuyRo.mileage"
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
          <div class="radiobox" @click="hssWxBusinessBuyRo.isMortgage = 1">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxBusinessBuyRo.isMortgage == 1"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>否</span>
          </div>
          <div class="radiobox" @click="hssWxBusinessBuyRo.isMortgage = 2">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxBusinessBuyRo.isMortgage == 2"
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
          v-model="hssWxBusinessBuyRo.describes"
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
            @click="hssWxCustomerRo.intentionLevel = item.id"
            v-for="item in intentLevelList"
            :key="item.id"
            :class="{
              select_price_region: hssWxCustomerRo.intentionLevel == item.id,
            }"
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
          <div
            class="radiobox radiobuytype"
            @click="hssWxCustomerRo.business = item.content"
            v-for="item in purchasetypeListt"
            :key="item.id"
          >
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.business == item.content"
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
          style="padding: 0; height: 19px; line-height: 19px"
          readonly
          clickable
          label=""
          :value="hssWxCustomerRo.nextFollowUpTime"
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
        <div class="radiobox" @click="hssWxCustomerRo.isSell = 0">
          <img
            src="~@/assets/img/radioselect.png"
            alt=""
            v-if="!hssWxCustomerRo.isSell"
          />
          <img src="~@/assets/img/radio.png" alt="" v-else />
          <span>否</span>
        </div>
        <div class="radiobox" @click="hssWxCustomerRo.isSell = 1">
          <img
            src="~@/assets/img/radioselect.png"
            alt=""
            v-if="hssWxCustomerRo.isSell"
          />
          <img src="~@/assets/img/radio.png" alt="" v-else />
          <span>是</span>
        </div>
      </div>
    </div>
    <div class="ifsellbox" v-if="hssWxCustomerRo.isSell">
      <div class="sellcarbox">
        <div class="row" @click="showmoresellbrand = true">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle" v-if="!hssWxBusinessSellRo.brandId">品牌</div>
            <div class="rowtitle" style="width: 200px" v-else>
              品牌：{{ hssWxBusinessSellRo.brand }}
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
            v-for="item in SbrandList"
            :key="item.id"
            @click="handlecheckScarlogo(item)"
            :style="{
              background:
                item.id == hssWxBusinessSellRo.brandId ? '#09c076' : '',
            }"
          >
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
            filterable
            v-model="sseriseobj"
            placeholder="请选择车系"
            class="row_between"
            @change="handlecheckSseries"
            value-key="id"
          >
            <el-option
              v-for="item in Scarseries"
              :key="item.id"
              :label="item.name"
              :value="item"
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
            filterable
            v-model="stypeobj"
            placeholder="请选择车型"
            class="row_between"
            value-key="id"
          >
            <el-option
              v-for="item in Scartypes"
              :key="item.id"
              :label="item.name"
              :value="item"
              @change="handlecheckStypes"
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
              v-model="hssWxBusinessSellRo.mileage"
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
            v-model="hssWxBusinessSellRo.licensingTime"
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
            v-model="hssWxBusinessSellRo.remarks"
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
            filterable
            v-model="hssWxCustomerRo.introducer"
            placeholder="请选择"
            class="row_between"
          >
            <el-option
              v-for="item in introducers"
              :key="item.id"
              :label="item.name"
              :value="item.name"
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
              v-model="hssWxCustomerRo.sparePhone"
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
            v-model="hssWxCustomerRo.idcard"
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
          <el-date-picker
            v-model="hssWxCustomerRo.birthday"
            type="date"
            placeholder="请选择"
          >
          </el-date-picker>
        </div>
        <div class="row" style="padding-right: 0.24rem">
          <!-- 占位符 -->
          <div style="display: flex; align-items: center">
            <div class="placeholder"></div>
            <div class="rowtitle">所在地</div>
          </div>

          <van-field
            style="
              align-item: center;
              padding: 0;
              height: 19px;
              line-height: 19px;
            "
            class="row_between"
            v-model="hssWxCustomerRo.location"
            readonly
            label=""
            placeholder="请选择所在地区"
            @click="showlocation = true"
          />
          <van-popup v-model="showlocation" round position="bottom">
            <van-cascader
              v-model="cascaderValue1"
              title="请选择所在地区"
              :options="locations"
              :field-names="{ text: 'nm', value: 'id' }"
              active-color="#09C076"
              @close="showlocation = false"
              @change="changelocations"
              @finish="onFinishlocation"
            />
          </van-popup>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">联系地址</div>
          </div>

          <el-input
            v-model="hssWxCustomerRo.contactAddress"
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
            v-model="hssWxCustomerRo.hobby"
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
            v-model="hssWxCustomerRo.occupation"
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
            :before-delete="beforeDel"
            v-model="albums"
            multiple="true"
          />
          <van-loading v-if="isvanloading" type="spinner" class="van_loading" />
        </div>
      </div>
      <!-- 更多信息结束-->
    </div>
    <div class="btn_save" @click="save">保存</div>
  </div>
</template>

<script>
import moment from "moment";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // 用户id
      id: "",
      // 接待id
      cusid: "",
      Title: "新增客户",
      albums: [],
      isvanloading: false,
      datepicker: "",
      showfollowtime: false,
      minDate: new Date(),
      // 买车车系绑定对象，用于给后台传递多个值
      bseriseobj: {},
      btypeobj: {},
      sseriseobj: {},
      stypeobj: {},
      // 更多品牌弹窗
      searchvalue: "",
      // 选中ID
      currentID: "",
      brandlist: [],
      // 更多买车
      showmorebuybrand: false,
      showmoresellbrand: false,
      // 显示宁波以外某省某市
      showAreaOutside: 0,
      // 自定义价格
      showdiyprice: 0,
      // 确定自定义价格
      confirmprice: false,
      hssWxCustomerRo: {
        chcekinId: "", //接待表id，用于是否留档
        name: "", //用户姓名
        wxId: "", //微信号
        phone: "", //电话
        sex: "", //性别(1女2男3未知)
        important: "", //重点客户（0否，1是）
        region: "", //客户区域
        regionOutside: "", //客户区域(外，补充信息)
        nature: "", //性质（1首次自行，2邀约首次，3转介绍首次，4重构首次，5再次邀约，6售后服务，7证牌服务，8其他服务）
        store: "", //门店
        saler: "", //销售顾问
        source: "", //客户来源（1新媒体（快手、抖音等），2老客户，3客户推荐，4亲朋推荐，5同行介绍，6网格邀约（汽车之家，华夏）7自然到店，8访客，9牌证中心，10车保姆中心）
        introducer: "", //老客户介绍人
        sparePhone: "", //备用手机号
        idcard: "", //身份证
        birthday: "", //生日
        location: "", //所在地
        contactAddress: "", //联系地址
        hobby: "", //兴趣
        occupation: "", //职业
        business: "", //(购买类型)1增购，2置换，3求购
        nextFollowUpTime: "", //下次跟进时间
        intentionLevel: "", //意向等级（保存意向等级id）
        isSell: true, //是否卖车
        pic: "",
      }, //用户信息
      hssWxBusinessBuyRo: {
        brand: "", //品牌
        series: "", //车系
        model: "", //车型
        brandId: "", //品牌Id
        seriesId: "", //车系Id
        modelId: "", //车型Id
        brandPic: "",
        priceId: "",
        minPrice: 0, //最低价格，单位（万）
        maxPrice: 0, //最高价格，单位（万）(无限就写0)
        color: "", //颜色
        mileage: 0, //里程数
        isMortgage: 0, //按揭，1否，2是
        describes: "", //意向描述
      }, //买车表
      hssWxBusinessSellRo: {
        brand: "", //品牌
        series: "", //车系
        model: "", //车型
        brandId: "", //品牌Id
        seriesId: "", //车系Id
        modelId: "", //车型Id
        brandPic: "",
        mileage: 0, //里程数
        licensingTime: "", //上牌日期
        remarks: "", //备注
      }, //卖车表（如果是否卖车为true则需要传）
      query_params: {
        w: [["pid", 100000, "EQ"]],
        o: ["id", "esc"],
        p: [1, 10000],
      },
      // 所在地的查询条件
      query_locations: {
        w: [["pid", 100000, "EQ"]],
        o: ["id", "esc"],
        p: [1, 10000],
      },
      shop: "",
      // 门店列表
      shopList: [{}, {}],
      saler: "",
      // 销售顾问列表
      salers: [],
      // 客户区域
      cusArea: [],
      cascaderValue: "",
      cascaderValue1: "",
      showcity: false,
      showlocation: false,
      // 宁波以外城市
      citys: [],
      locations: [],

      // 客户性质列表
      custypeList: [],
      // 购买类型
      purchasetypeListt: [],
      // 客户来源
      customerofList: [],
      // 汽车品牌列表
      BbrandList: [],
      // 车系列表
      Bcarseries: [],
      bcarserie: "",
      // 车型列表
      bcartype: "",
      Bcartypes: [],
      // 价格区间列表
      priceList: [],
      intentLevelList: [],
      SbrandList: [],
      // 车系列表
      Scarseries: [],
      // 车型列表
      Scartypes: [],
      introducers: [],
      // 所在地
      locations: [],
    };
  },
  computed: {
    showmorebrand() {
      return this.showmorebuybrand == true || this.showmoresellbrand == true;
    },
  },
  watch: {
    // 清空搜索框就重新请求列表
    searchvalue() {
      if (this.searchvalue == "") {
        this.api.searchbrandlist("").then((res) => {
          this.brandlist = res;
        });
      }
    },
  },
  methods: {
    async save() {
      let data = await this.api.commitNewCustomer({
        hssWxCustomerRo: this.hssWxCustomerRo,
        hssWxBusinessBuyRo: this.hssWxBusinessBuyRo,
        hssWxBusinessSellRo: this.hssWxBusinessSellRo,
      });
      if (data.code == 0) {
        Toast("保存成功");
        this.until.href('/views/customermagt/index.html')
      }
    },
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
    // 单选客户区域
    radioCheckArea(item, index) {
      this.hssWxCustomerRo.region = item.content;
      this.showAreaOutside = item.outside;
    },
    // 选中价格
    hanglecheckprice(item, index) {
      this.showdiyprice = item.outside;
      this.hssWxBusinessBuyRo.priceId = item.content;
    },
    //确定自定义价格
    handleconfirmPrice() {
      this.confirmprice = true;
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
    // 更换省市区
    changelocations({ value }) {
      // 选中了某省(选某市就结束了)
      // 修改请求条件
      this.query_locations.w[0][1] = value;

      // 循环locations,在对应项中插入children
      this.locations.forEach((item, index) => {
        if (item.id == value) {
          this.api
            .getmapList(this.query.toEncode(this.newqry(this.query_locations)))
            .then((res) => {
              item.children = res;
            });
          return false;
        }
      });
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinishlocation({ selectedOptions }) {
      // 关闭弹出层
      this.showlocation = false;
      // 设置显示内容
      this.hssWxCustomerRo.location = selectedOptions
        .map((option) => option.nm)
        .join("/");
      // 设置请求条件，下次请求还是先请求省
    },
    // 文件删除前的回调
    beforeDel(file, detail) {
      // detail.index为图片下标
      let fileList = this.hssWxCustomerRo.pic.split(",");
      fileList.splice(detail.index, 1);
      this.hssWxCustomerRo.pic = fileList.join(",");
      // albums里面内容为文件格式，不能直接传给后台
      this.albums.splice(detail.index, 1);
    },
    // 文件读取完成后的回调
    async afterRead(e) {
      console.log(e);
      // this.$loading.show("正在上传");
      this.isvanloading = true;
      const formData = new FormData();
      if (e.file.size > 1048576) {
        // console.log("压缩图片");
        const img = await readImg(e.file);
        let blob = await compressImg(img);
        formData.append("file", blob, "file.jpg");
      } else {
        formData.append("file", e.file, "file.jpg");
      }
      this.api.upnewimg(formData).then((imgurl) => {
        console.log("上传后地址", imgurl.data);
        if (!this.hssWxCustomerRo.pic) {
          this.hssWxCustomerRo.pic = imgurl.data;
        } else {
          this.hssWxCustomerRo.pic += `,${imgurl.data}`;
        }
        this.isvanloading = false;
      });
    },
    // 处理确定跟进时间
    handlefollowConfirm(e) {
      this.hssWxCustomerRo.nextFollowUpTime = moment(e).format(
        "YYYY-MM-DD dddd HH:mm"
      );
      this.showfollowtime = false;
    },
    // 跳到品牌列表页
    toMore() {
      this.until.href("/views/customermagt/brandlist.html");
    },
    // 打开更多品牌弹出层
    async handleshowmore() {
      // 每次打开重新请求所有品牌列表，搜索会改变列表
      this.searchvalue = "";

      // 将买车/卖车id赋值给currentID
      if (this.showmorebuybrand)
        this.currentID = this.hssWxBusinessBuyRo.brandId;
      else this.currentID = this.currentSbrandID;
    },
    // 更多品牌中选择
    handlecheckbrand(brand) {
      this.currentID = brand.id;
      // 判断是卖车还是买车
      if (this.showmorebuybrand) {
        this.hssWxBusinessBuyRo.brandId = brand.id;
        this.hssWxBusinessBuyRo.brand = brand.brand_name;
        // 清空车型、车系
        this.hssWxBusinessBuyRo.series = "";
        this.hssWxBusinessBuyRo.model = "";
        this.hssWxBusinessBuyRo.seriesId = "";
        this.hssWxBusinessBuyRo.modelId = "";
        this.bseriseobj = {};
        this.btypeobj = {};
        // 获取买车车系列表
        this.api
          .getCarSeries({ brandid: this.hssWxBusinessBuyRo.brandId })
          .then((res) => {
            this.Bcarseries = res;
          });
        setTimeout(() => {
          this.showmorebuybrand = false;
        }, 200);
      } else {
        this.currentSbrandID = brand.id;
        this.hssWxBusinessSellRo.brand = brand.brand_name;

        // 清空车型、车系
        this.hssWxBusinessSellRo.series = "";
        this.hssWxBusinessSellRo.model = "";
        this.hssWxBusinessSellRo.seriesId = "";
        this.hssWxBusinessSellRo.modelId = "";
        this.bseriseobj = {};
        this.btypeobj = {};
        // 获取买车车系列表
        this.api
          .getCarSeries({ brandid: this.hssWxBusinessSellRo.brandId })
          .then((res) => {
            this.Bcarseries = res;
          });

        setTimeout(() => {
          this.showmoresellbrand = false;
        }, 200);
      }
    },
    async onSearch(val) {
      this.brandlist = await this.api.searchbrandlist(val);
    },
    // 选择买车车标
    handlecheckBcarlogo(brand) {
      this.hssWxBusinessBuyRo.brandId = brand.id;
      this.hssWxBusinessBuyRo.brand = brand.brand_name;
      // 清空车型、车系
      this.hssWxBusinessBuyRo.series = "";
      this.hssWxBusinessBuyRo.model = "";
      this.hssWxBusinessBuyRo.seriesId = "";
      this.hssWxBusinessBuyRo.modelId = "";
      this.bseriseobj = {};
      this.btypeobj = {};
      // 获取买车车系列表
      this.api
        .getCarSeries({ brandid: this.hssWxBusinessBuyRo.brandId })
        .then((res) => {
          this.Bcarseries = res;
        });
    },
    handlecheckScarlogo(brand) {
      this.hssWxBusinessSellRo.brandId = brand.id;
      this.hssWxBusinessSellRo.brand = brand.brand_name;
      // 清空车型、车系
      this.hssWxBusinessSellRo.series = "";
      this.hssWxBusinessSellRo.model = "";
      this.hssWxBusinessSellRo.seriesId = "";
      this.hssWxBusinessSellRo.modelId = "";
      this.bseriseobj = {};
      this.btypeobj = {};
      // 获取卖车车系列表
      this.api
        .getCarSeries({ brandid: this.hssWxBusinessSellRo.brandId })
        .then((res) => {
          this.Scarseries = res;
        });
    },
    // 处理买车车系选中值变化
    handlecheckBseries(brand) {
      this.hssWxBusinessBuyRo.seriesId = brand.id;
      this.hssWxBusinessBuyRo.series = brand.name;
      // 车型清空
      this.hssWxBusinessBuyRo.model = "";
      this.hssWxBusinessBuyRo.modelId = "";
      this.btypeobj = {};

      // 获取买车车型列表
      this.api
        .getCarModels({ seriesId: this.hssWxBusinessBuyRo.seriesId })
        .then((res) => {
          this.Bcartypes = res.result;
        });
    },
    handlecheckBtypes(brand) {
      this.hssWxBusinessBuyRo.modelId = brand.id;
      this.hssWxBusinessBuyRo.model = brand.name;
    },
    handlecheckSseries(brand) {
      this.hssWxBusinessSellRo.seriesId = brand.id;
      this.hssWxBusinessSellRo.series = brand.name;
      // 车型清空
      this.hssWxBusinessSellRo.model = "";
      this.hssWxBusinessSellRo.modelId = "";
      this.stypeobj = {};

      // 获取卖车车型列表
      this.api
        .getCarModels({ seriesId: this.hssWxBusinessSellRo.seriesId })
        .then((res) => {
          this.Scartypes = res.result;
        });
    },
    handlecheckStypes(brand) {
      this.hssWxBusinessSellRo.modelId = brand.id;
      this.hssWxBusinessSellRo.model = brand.name;
    },
  },
  async created() {
    moment.locale("zh-cn");
    // 用户id
    this.id = this.until.getQueryString("id");
    // 接待id
    this.cusid = this.until.getQueryString("cusid");

    if (this.id) {
      this.Title = "修改需求";
    }
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
        // 宁波以外某省某市
        this.citys = res.map((item) => {
          item.children = [];
          return item;
        });
        this.locations = JSON.parse(JSON.stringify(this.citys));
        // console.log("citys", this.citys, "locations", this.locations);
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
    // 获取购买类型
    this.purchasetypeListt = await this.api.getBuysTypeList(
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
    this.SbrandList = JSON.parse(JSON.stringify(this.BbrandList));

    // 获取更多品牌
    this.brandlist = await this.api.searchbrandlist("");
    // 获取交个区间
    this.priceList = await this.api.getpriceList(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 7, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 20 },
        })
      )
    );

    // 修改需求
    // 详情数据复写
    if (this.id) {
      let detailData = await this.api.getcustomerDetail(this.id);
      this.hssWxBusinessBuyRo = detailData.buy.data;
      this.hssWxBusinessSellRo = detailData.sell.data;
      this.hssWxCustomerRo = detailData.customer.data;
      // 是否显示宁波以外区域
      let cusAreaindex = this.cusArea.findIndex(
        (item) => item.content == this.hssWxCustomerRo.region
      );
      this.showAreaOutside = this.cusArea[cusAreaindex].outside;
      // 自定义价格是否显示
      let priceindex = this.priceList.findIndex(
        (item) => item.content == this.hssWxBusinessBuyRo.priceId
      );
      this.showdiyprice = this.priceList[priceindex].outside;
      // 买车车系列表
      this.Bcarseries = await this.api.getCarSeries({
        brandid: this.hssWxBusinessBuyRo.brandId,
      });
      // 买车车型列表
      let bshortTypes = await this.api.getCarModels({
        seriesId: this.hssWxBusinessBuyRo.seriesId,
      });
      this.Bcartypes = bshortTypes.result;
      // 卖车车系列表
      this.Scarseries = await this.api.getCarSeries({
        brandid: this.hssWxBusinessSellRo.brandId,
      });
      // 卖车车型列表
      let sshortTypes = await this.api.getCarModels({
        seriesId: this.hssWxBusinessSellRo.seriesId,
      });
      this.Scartypes = sshortTypes.result;

      // 买车车系、车型复写
      this.$set(this.bseriseobj, "id", this.hssWxBusinessBuyRo.seriesId);
      this.$set(this.bseriseobj, "name", this.hssWxBusinessBuyRo.series);
      this.$set(this.btypeobj, "id", this.hssWxBusinessBuyRo.modelId);
      this.$set(this.btypeobj, "name", this.hssWxBusinessBuyRo.model);
      // 卖车车系、车型复写
      this.$set(this.sseriseobj, "id", this.hssWxBusinessSellRo.seriesId);
      this.$set(this.sseriseobj, "name", this.hssWxBusinessSellRo.series);
      this.$set(this.stypeobj, "id", this.hssWxBusinessSellRo.modelId);
      this.$set(this.stypeobj, "name", this.hssWxBusinessSellRo.model);

      // 相册图片处理
      this.albums = this.hssWxCustomerRo.pic.split(",").map((item) => {
        url: item;
      });
    }
    // 接待信息完善
    else if (this.cusid) {
      let data = await this.api.getWxCheckinDetail(this.cusid);
      console.log(data);
      this.hssWxCustomerRo = { ...this.hssWxCustomerRo, ...data };
      console.log(this.hssWxCustomerRo);
    }
  },
  async mounted() {
    //  获取老客户介绍人
    this.introducers = await this.api.getOldCustomer("");
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
  .el-timeline-item {
    margin-bottom: -0.24rem;
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
    width: 1.5rem;
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
      margin-top: 10px;
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
          padding: 0.06rem 0.2rem;
          border: 1px solid #d8d8d8;
        }

        .connector {
          font-size: 0.24rem;
          font-weight: bold;
          color: #bfbfbf;
        }

        .highprice {
          display: flex;
          padding: 0.06rem 0.2rem;
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