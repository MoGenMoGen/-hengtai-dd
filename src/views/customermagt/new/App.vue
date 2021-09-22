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
        <van-field
          @click="openshop"
          class="van_field"
          readonly
          clickable
          label=""
          v-model="hssWxCustomerRo.store"
          placeholder="请选择门店"
        />
        <van-popup v-model="showPicker1" round position="bottom">
          <van-search
            v-model="search1"
            shape="round"
            background="#09c076"
            @input="onSearch1"
            placeholder="请输入搜索关键词"
          />
          <van-picker
            value-key="content"
            show-toolbar
            :columns="searchshoplist"
            @cancel="showPicker1 = false"
            @confirm="handleshoplist"
          />
        </van-popup>
      </div>
      <div class="row shopbox">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">销售</div>
        </div>

        <van-field
          @click="openSale"
          class="van_field"
          readonly
          label=""
          v-model="hssWxCustomerRo.saler"
          placeholder="请选择销售顾问"
        />
        <van-popup v-model="showPicker2" round position="bottom">
          <van-search
            v-model="search2"
            shape="round"
            background="#09c076"
            @input="onSearch2"
            placeholder="请输入搜索关键词"
          />
          <van-picker
            value-key="arg7"
            show-toolbar
            :columns="searchsalers"
            @cancel="showPicker2 = false"
            @confirm="handleSaler"
          />
        </van-popup>

        <!-- <el-select
          filterable
          clearable
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
        </el-select> -->
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
          <van-field
            class="van_field"
            label=""
            v-model="hssWxCustomerRo.phone"
            placeholder="请输入手机号"
            type="digit"
            oninput="if(value.length>11)value=value.slice(0,11)"
          />
          <!-- <span style="color: #09c076">通讯录匹配</span> -->
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">微信号</div>
        </div>
        <div class="row_between">
          <van-field
            class="van_field"
            label=""
            v-model="hssWxCustomerRo.wxId"
            placeholder="请输入微信号"
            maxlength="11"
          />
        </div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">姓名</div>
        </div>
        <van-field
          class="van_field"
          label=""
          v-model="hssWxCustomerRo.name"
          placeholder="请输入姓名"
          maxlength="8"
        />
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">性别</div>
        </div>
        <div class="row_radio">
          <div class="radiobox" @click="hssWxCustomerRo.sex = '先生'">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.sex == '先生'"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>先生</span>
          </div>
          <div class="radiobox" @click="hssWxCustomerRo.sex = '女士'">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.sex == '女士'"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />
            <span>女士</span>
          </div>
          <div class="radiobox" @click="hssWxCustomerRo.sex = '未知'">
            <img
              src="~@/assets/img/radioselect.png"
              alt=""
              v-if="hssWxCustomerRo.sex == '未知'"
            />
            <img src="~@/assets/img/radio.png" alt="" v-else />

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
          class="row_between van_field"
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
        <van-field
          @click="openNature"
          class="van_field"
          readonly
          clickable
          label=""
          v-model="hssWxCustomerRo.nature"
          placeholder="请选择客户性质"
        />
        <van-popup v-model="showPicker4" round position="bottom">
          <van-search
            v-model="search4"
            shape="round"
            background="#09c076"
            @input="onSearch4"
            placeholder="请输入搜索关键词"
          />
          <van-picker
            value-key="content"
            show-toolbar
            :columns="searchcustypeList"
            @cancel="showPicker4 = false"
            @confirm="handlecustypeList"
          />
        </van-popup>
        <!-- <el-select
          filterable
          clearable
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
        </el-select> -->
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">客户来源</div>
        </div>
        <van-field
          @click="showPicker5 = true"
          class="van_field"
          readonly
          clickable
          label=""
          v-model="hssWxCustomerRo.source"
          placeholder="请选择客户来源"
        />
        <van-popup v-model="showPicker5" round position="bottom">
          <van-search
            v-model="search5"
            shape="round"
            background="#09c076"
            @input="onSearch5"
            placeholder="请输入搜索关键词"
          />
          <van-picker
            value-key="content"
            show-toolbar
            :columns="searchcustomerofList"
            @cancel="showPicker5 = false"
            @confirm="handlecustomerofList"
          />
        </van-popup>
        <!-- <el-select
          filterable
          clearable
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
        </el-select> -->
      </div>
    </div>
    <!-- 基本信息结束-->

    <!-- 更多品牌弹窗 开始 -->
    <van-popup v-model="showmorebrand" position="bottom" @open="handleshowmore">
      <div class="morebrand">
        <div style="display: flex; align-items: center; background: #fff">
          <van-search
            style="flex: 1"
            v-model="searchvalue"
            shape="round"
            background="#fff"
            placeholder="请输入搜索关键词"
            @search="onSearch"
          />
          <span
            style="background: #fff; padding-right: 0.16rem"
            @click="handleclose"
            >关闭</span
          >
        </div>

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
      <div class="texttitle">求购</div>
    </div>
    <div class="buyneeds">
      <!-- 无效/J/S/P则隐藏 -->
      <div class="Invalidhide" v-if="!showInvalid && showBuyInfo">
        <div class="row" @click="showmorebuybrand = true">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder">*</div>
            <div class="rowtitle" v-if="!hssWxBusinessBuyRo.brand">品牌</div>
            <div class="rowtitle" style="width: 4rem" v-else>
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
          >
            <img
              src="~@/assets/img/selectbrand.png"
              class="selectbrand"
              v-if="item.id == hssWxBusinessBuyRo.brandId"
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
            v-model="hssWxBusinessBuyRo.series"
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
            v-model="hssWxBusinessBuyRo.model"
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
                <!-- <van-field
                clickable
                label=""
                v-model="hssWxBusinessBuyRo.minPrice"
                style="width: 0.6rem; text-align: right"
                class="prititle"
                type="digit"
                maxlength="4"
              /> -->
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
                <!-- <van-field
                clickable
                label=""
                v-model="hssWxBusinessBuyRo.maxPrice"
                style="width: 0.6rem; text-align: right"
                class="prititle"
                type="digit"
                maxlength="4"
              /> -->
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
            <div>
              <van-field
                clickable
                label=""
                v-model="hssWxBusinessBuyRo.mileage"
                style="width: 3rem"
                class="prititle van_field"
                type="number"
                oninput="if(value.length>4)value=value.slice(0,4)"
                placeholder="请输入里程数"
              />
            </div>

            <!-- <el-input
            style="width: 3rem"
            v-model="hssWxBusinessBuyRo.mileage"
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
      <!-- 无效原因开始 -->
      <div class="row" v-if="showInvalid">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">无效原因</div>
        </div>

        <van-field
          @click="showPicker3 = true"
          class="van_field"
          readonly
          label=""
          v-model="hssWxCustomerRo.supplement"
          placeholder="请选择无效原因"
        />

        <van-popup v-model="showPicker3" round position="bottom">
          <van-picker
            value-key="content"
            show-toolbar
            :columns="InvalidReasons"
            @cancel="showPicker3 = false"
            @confirm="handleInvalidRea"
          />
        </van-popup>
      </div>
      <div class="row" v-if="showInvalidDetail">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">其他原因</div>
        </div>

        <van-field
          class="van_field"
          label=""
          v-model="hssWxCustomerRo.supplementInfo"
          placeholder="请输入无效原因"
        />
      </div>

      <!-- 无效原因结束 -->
      <div class="row" v-if="!showInvalid && showBuyInfo">
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

      <div
        class="row"
        style="align-items: center"
        v-if="showfollow && showBuyInfo"
      >
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">下次跟进时间</div>
        </div>
        <van-field
          class="van_field"
          readonly
          clickable
          label=""
          v-model="momentNextFollowUpTime"
          placeholder="选择下次跟进时间"
          @click="showfollowtime = true"
        />
        <van-popup v-model="showfollowtime" round position="bottom">
          <van-datetime-picker
            class="followdatepicker"
            type="datetime"
            title="选择完整时间"
            :min-date="minDate"
            :max-date="maxfollowdate"
            @cancel="showfollowtime = false"
            @confirm="handlefollowConfirm"
          />
        </van-popup>
      </div>
    </div>
    <!-- 买车需求结束 -->
    <!-- 卖车需求开始 -->
    <div class="sellwrapper" v-if="!showInvalid">
      <div class="textbox">
        <div class="texttitle">寄卖</div>
      </div>
      <div class="row">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">寄卖</div>
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
              <div class="rowtitle" v-if="!hssWxBusinessSellRo.brandId">
                品牌
              </div>
              <div class="rowtitle" style="width: 4rem" v-else>
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
            >
              <img
                src="~@/assets/img/selectbrand.png"
                class="selectbrand"
                v-if="item.id == hssWxBusinessSellRo.brandId"
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
              @click="showPicker9 = true"
              class="van_field"
              readonly
              clickable
              label=""
              v-model="hssWxBusinessSellRo.series"
              placeholder="请选择车系"
            />
            <van-popup v-model="showPicker9" round position="bottom">
              <van-search
                v-model="search9"
                shape="round"
                background="#09c076"
                @input="onSearch9"
                placeholder="请输入搜索关键词"
              />
              <van-picker
                value-key="name"
                show-toolbar
                :columns="searchScarseries"
                @cancel="showPicker9 = false"
                @confirm="handlecheckSseries"
              />
            </van-popup>
            <!-- <el-select
            filterable
            clearable
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
          </el-select> -->
          </div>
          <div class="row">
            <!-- 占位符 -->
            <div style="display: flex">
              <div class="placeholder"></div>
              <div class="rowtitle">车型</div>
            </div>
            <van-field
              @click="showPicker10 = true"
              class="van_field"
              readonly
              clickable
              label=""
              v-model="hssWxBusinessSellRo.model"
              placeholder="请选择车型"
            />
            <van-popup v-model="showPicker10" round position="bottom">
              <van-search
                v-model="search10"
                shape="round"
                background="#09c076"
                @input="onSearch10"
                placeholder="请输入搜索关键词"
              />
              <van-picker
                value-key="name"
                show-toolbar
                :columns="searchScartypes"
                @cancel="showPicker10 = false"
                @confirm="handlecheckStypes"
              />
            </van-popup>
            <!-- <el-select
            filterable
            clearable
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
          </el-select> -->
          </div>
          <div class="row">
            <!-- 占位符 -->
            <div style="display: flex">
              <div class="placeholder"></div>
              <div class="rowtitle">里程数</div>
            </div>
            <div class="row_between">
              <div>
                <van-field
                  clickable
                  label=""
                  v-model="hssWxBusinessSellRo.mileage"
                  style="width: 3rem"
                  class="prititle van_field"
                  type="number"
                  oninput="if(value.length>4)value=value.slice(0,4)"
                  placeholder="请输入里程数"
                />
              </div>

              <!-- <el-input
              style="width: 3rem"
              v-model="hssWxBusinessSellRo.mileage"
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
              <div class="rowtitle">上牌时间</div>
            </div>
            <van-field
              class="van_field"
              readonly
              clickable
              label=""
              v-model="hssWxBusinessSellRo.licensingTime"
              placeholder="选择上牌日期"
              @click="showPicker11 = true"
            />
            <van-popup v-model="showPicker11" round position="bottom">
              <van-datetime-picker
                v-model="currentlicenseDate"
                :min-date="minDate1"
                class="followdatepicker"
                type="date"
                title="选择完整时间"
                @cancel="showPicker11 = false"
                @confirm="handlelicensedate"
              />
            </van-popup>
            <!-- <el-date-picker
            v-model="hssWxBusinessSellRo.licensingTime"
            type="date"
            placeholder="选择上牌日期"
          >
          </el-date-picker> -->
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
      </div>
    </div>
    <!-- 更多信息开始 -->
    <div class="moreinfowrapper" v-if="!showInvalid">
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
          <van-field
            @click="showPicker12 = true"
            class="van_field"
            readonly
            clickable
            label=""
            v-model="hssWxCustomerRo.introducer"
            placeholder="请选择介绍人"
          />
          <van-popup v-model="showPicker12" round position="bottom">
            <van-search
              v-model="search12"
              shape="round"
              background="#09c076"
              @input="onSearch12"
              placeholder="请输入搜索关键词"
            />
            <van-picker
              value-key="name"
              show-toolbar
              :columns="searchintroducers"
              @cancel="showPicker12 = false"
              @confirm="handleintroducers"
            />
          </van-popup>
          <!-- <el-select
            filterable
            clearable
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
          </el-select> -->
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">备用号</div>
          </div>
          <div class="row_between">
            <van-field
              type="digit"
              class="van_field"
              label=""
              v-model="hssWxCustomerRo.sparePhone"
              placeholder="请输入备用号"
              maxlength="11"
            />
            <!-- <el-input
              style="width: 3rem"
              v-model="hssWxCustomerRo.sparePhone"
              type="number"
              oninput="if(value.length>11)value=value.slice(0,11)"
              placeholder="请输入"
            ></el-input> -->
            <!-- <span style="color: #09c076">通讯录匹配</span> -->
          </div>
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">身份证号</div>
          </div>
          <van-field
            class="van_field"
            label=""
            v-model="hssWxCustomerRo.idcard"
            placeholder="请输入身份证号"
            maxlength="18"
          />
          <!-- <el-input
            v-model="hssWxCustomerRo.idcard"
            type="text"
            maxlength="18"
            placeholder="请输入"
            style="flex: 1"
          ></el-input> -->
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">生日</div>
          </div>
          <van-field
            class="van_field"
            readonly
            clickable
            label=""
            v-model="hssWxCustomerRo.birthday"
            placeholder="请选择生日"
            @click="showPicker13 = true"
          />
          <van-popup v-model="showPicker13" round position="bottom">
            <van-datetime-picker
              class="followdatepicker"
              type="date"
              title="选择完整时间"
              :min-date="minDate2"
              v-model="currentbirthdayDate"
              @cancel="showPicker13 = false"
              @confirm="handlebirthday"
            />
          </van-popup>
          <!-- <el-date-picker
            v-model="hssWxCustomerRo.birthday"
            type="date"
            placeholder="请选择"
          >
          </el-date-picker> -->
        </div>
        <div class="row" style="padding-right: 0.24rem">
          <!-- 占位符 -->
          <div style="display: flex; align-items: center">
            <div class="placeholder"></div>
            <div class="rowtitle">所在地</div>
          </div>

          <van-field
            class="row_between van_field"
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
          <van-field
            class="van_field"
            label=""
            v-model="hssWxCustomerRo.contactAddress"
            placeholder="请输入联系地址"
            maxlength="18"
          />
          <!-- <el-input
            v-model="hssWxCustomerRo.contactAddress"
            type="text"
            maxlength="18"
            placeholder="请输入"
            style="flex: 1"
          ></el-input> -->
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">兴趣</div>
          </div>
          <van-field
            class="van_field"
            label=""
            v-model="hssWxCustomerRo.hobby"
            placeholder="请输入兴趣"
            maxlength="18"
          />
          <!-- <el-input
            v-model="hssWxCustomerRo.hobby"
            type="text"
            maxlength="18"
            placeholder="请输入"
            style="flex: 1"
          ></el-input> -->
        </div>
        <div class="row">
          <!-- 占位符 -->
          <div style="display: flex">
            <div class="placeholder"></div>
            <div class="rowtitle">职业</div>
          </div>
          <van-field
            class="van_field"
            label=""
            v-model="hssWxCustomerRo.occupation"
            placeholder="请输入职业"
            maxlength="18"
          />
          <!-- <el-input
            v-model="hssWxCustomerRo.occupation"
            type="text"
            maxlength="18"
            placeholder="请输入"
            style="flex: 1"
          ></el-input> -->
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
    </div>

    <!-- 更多信息结束-->
    <div class="btn_save" @click="save" v-show="hideshow">保存</div>
  </div>
</template>

<script>
import moment from "moment";
import { Toast } from "mint-ui";
import { compressImg, readImg } from "@/assets/js/imageUtil";

export default {
  data() {
    return {
      // 默认销售角色
      departRole: 0,
      defaultHeight: "0", // 默认屏幕高度
      showHeight: 0, // 实时屏幕高度
      hideshow: true, // 显示或者隐藏保存按钮,
      // 门店搜索列表、搜索值、是否显示picker
      searchshoplist: [],
      search1: "",
      showPicker1: false,
      // 销售搜索列表、搜索值、是否显示picker
      searchsalers: [],
      search2: "",
      showPicker2: false,
      // 无效原因列表
      showPicker3: false,
      InvalidReasons: [],
      // 客户性质搜索列表、搜索值、是否显示picker
      searchcustypeList: [],
      search4: "",
      showPicker4: false,
      // 客户来源搜索列表、搜索值、是否显示picker
      searchcustomerofList: [],
      search5: "",
      showPicker5: false,
      // 买车车系搜索列表、搜索值、是否显示picker
      searchBcarseries: [],
      search6: "",
      showPicker6: false,
      // 买车车型搜索列表、搜索值、是否显示picker
      searchBcartypes: [],
      search7: "",
      showPicker7: false,

      // 卖车车系搜索列表、搜索值、是否显示picker
      searchScarseries: [],
      search9: "",
      showPicker9: false,
      // 卖车车型搜索列表、搜索值、是否显示picker
      searchScartypes: [],
      search10: "",
      showPicker10: false,
      // 上牌时间是否显示picker
      showPicker11: false,
      // 老客户介绍人搜索列表、搜索值、是否显示picker
      searchintroducers: [],
      search12: "",
      showPicker12: false,
      // 生日是否显示picker
      showPicker13: false,

      // 修改用户id
      id: "",
      // 接待id
      cusid: "",
      Title: "新增客户",
      albums: [],
      isvanloading: false,
      datepicker: "",
      showfollowtime: false,
      minDate: new Date(),
      minDate1: new Date(1970, 0, 1),
      minDate2: new Date(1930, 0, 1),
      currentlicenseDate: new Date(2015, 0, 1),
      currentbirthdayDate: new Date(1991, 0, 1),
      // 买车车系绑定对象，用于给后台传递多个值
      // bseriseobj: {},
      // btypeobj: {},
      // sseriseobj: {},
      // stypeobj: {},
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
      // 显示的带星期的下次跟进时间(不传给后台)
      momentNextFollowUpTime: "",
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
        supplement: "", //无效原因
        supplementInfo: "", //其他无效原因
        isSell: 0, //是否卖车
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
        minPrice: "", //最低价格，单位（万）
        maxPrice: "", //最高价格，单位（万）(无限就写0)
        color: "", //颜色
        mileage: "", //里程数
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
        mileage: "", //里程数
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
      // 意向等级列表
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
    // 是否显示求购信息(意向等级j、s、p不显示求购信息)
    showBuyInfo() {
      let index = this.intentLevelList.findIndex(
        (item) => item.id == this.hssWxCustomerRo.intentionLevel
      );

      if (
        index >= 0 &&
        this.intentLevelList[index].outside >= 6 &&
        this.intentLevelList[index].outside <= 8
      )
        return false;
      return true;
    },
    // 是否显示跟进时间(O成交、战败、无效，不显示)
    showfollow() {
      let index = this.intentLevelList.findIndex(
        (item) => item.id == this.hssWxCustomerRo.intentionLevel
      );

      if (
        index >= 0 &&
        (this.intentLevelList[index].outside >= 9 ||
          this.intentLevelList[index].outside == 1)
      )
        return false;
      return true;
    },
    // 显示无效原因
    showInvalid() {
      let index = this.intentLevelList.findIndex(
        (item) => item.id == this.hssWxCustomerRo.intentionLevel
      );
      if (index >= 0 && this.intentLevelList[index].outside == 10) return true;
      return false;
    },
    // 其他无效原因
    showInvalidDetail() {
      if (this.hssWxCustomerRo.supplement != "其他") return false;
      return true;
    },
    // 最大跟进时间
    maxfollowdate() {
      if (!this.hssWxCustomerRo.nextFollowUpTime)
        return new Date(moment().add(60, "d"));
      return new Date(this.hssWxCustomerRo.nextFollowUpTime);
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
    // 监听意向等级变化设置默认下次跟进时间
    "hssWxCustomerRo.intentionLevel"() {
      let index = this.intentLevelList.findIndex(
        (item) => item.id == this.hssWxCustomerRo.intentionLevel
      );
      let outside = this.intentLevelList[index].outside;
      // 意向等级outside,按顺序值1-10，对应O、K、A···
      // 1：意向及跟进时间不用选择，2：24小时内跟进，3：每3天内跟进，4：每7天内跟进，5：每30天内跟进，6、7、8：购买类型固定，9战败，10无效
      if (index >= 0) {
        if (outside == 2) {
          this.momentNextFollowUpTime = moment()
            .add(1, "d")
            .format("YYYY-MM-DD dddd HH:mm");
          this.hssWxCustomerRo.nextFollowUpTime = moment()
            .add(1, "d")
            .format("YYYY-MM-DD HH:mm:ss");
        } else if (outside == 3) {
          this.momentNextFollowUpTime = moment()
            .add(3, "d")
            .format("YYYY-MM-DD dddd HH:mm");
          this.hssWxCustomerRo.nextFollowUpTime = moment()
            .add(3, "d")
            .format("YYYY-MM-DD HH:mm:ss");
        } else if (outside == 4) {
          this.momentNextFollowUpTime = moment()
            .add(7, "d")
            .format("YYYY-MM-DD dddd HH:mm");
          this.hssWxCustomerRo.nextFollowUpTime = moment()
            .add(7, "d")
            .format("YYYY-MM-DD HH:mm:ss");
        } else if (outside == 5) {
          this.momentNextFollowUpTime = moment()
            .add(30, "d")
            .format("YYYY-MM-DD dddd HH:mm");
          this.hssWxCustomerRo.nextFollowUpTime = moment()
            .add(30, "d")
            .format("YYYY-MM-DD HH:mm:ss");
        } else {
          this.momentNextFollowUpTime = "";
          this.hssWxCustomerRo.nextFollowUpTime = "";
        }
      }
    },
  },
  methods: {
    // 门店
    onSearch1(a) {
      if (a != "")
        this.searchshoplist = this.shopList.filter((item) =>
          item.content.includes(a)
        );
      else this.searchshoplist = this.shopList;
    },
    handleshoplist(e) {
      this.hssWxCustomerRo.store = e.content;
      this.showPicker1 = false;
    },
    // 弹出门店列表
    openshop() {
      // 销售修改需求和完善信息时，门店不能修改
      if ((this.id || this.cusid) && this.departRole == 0) {
      } else {
        this.showPicker1 = true;
      }
    },
    // 销售
    onSearch2(a) {
      if (a != "")
        this.searchsalers = this.salers.filter((item) => item.arg7.includes(a));
      else this.searchsalers = this.salers;
    },
    handleSaler(e) {
      this.hssWxCustomerRo.saler = e.arg7;
      this.showPicker2 = false;
    },
    // 弹出销售列表
    openSale() {
      // 销售修改需求和完善信息时，销售不能修改
      if ((this.id || this.cusid) && this.departRole == 0) {
      } else {
        this.showPicker2 = true;
      }
    },
    // 无效原因
    handleInvalidRea(e) {
      this.hssWxCustomerRo.supplement = e.content;
      console.log(this.hssWxCustomerRo.supplement);
      this.showPicker3 = false;
    },
    // 客户性质
    onSearch4(a) {
      if (a != "")
        this.searchcustypeList = this.custypeList.filter((item) =>
          item.content.includes(a)
        );
      else this.searchcustypeList = this.custypeList;
    },
    handlecustypeList(e) {
      this.hssWxCustomerRo.nature = e.content;
      this.showPicker4 = false;
    },
    // 弹出客户性质列表
    openNature() {
      // 销售修改需求和完善信息时，客户性质不能修改
      if ((this.id || this.cusid) && this.departRole == 0) {
      } else {
        this.showPicker4 = true;
      }
    },
    // 客户来源
    onSearch5(a) {
      if (a != "")
        this.searchcustomerofList = this.customerofList.filter((item) =>
          item.content.includes(a)
        );
      else this.searchcustomerofList = this.customerofList;
    },
    handlecustomerofList(e) {
      this.hssWxCustomerRo.source = e.content;
      this.showPicker5 = false;
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
    // 卖车车系
    onSearch9(a) {
      if (a != "")
        this.searchScarseries = this.Scarseries.filter((item) =>
          item.name.includes(a)
        );
      else this.searchScarseries = this.Scarseries;
    },
    //  卖车车型
    onSearch10(a) {
      if (a != "")
        this.searchScartypes = this.Scartypes.filter((item) =>
          item.name.includes(a)
        );
      else this.searchScartypes = this.Scartypes;
    },
    // 上牌日期
    handlelicensedate(e) {
      this.hssWxBusinessSellRo.licensingTime = moment(e).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      this.showPicker11 = false;
    },
    // 老客户介绍人
    onSearch12(a) {
      if (a != "")
        this.searchintroducers = this.introducers.filter((item) =>
          item.name.includes(a)
        );
      else this.searchintroducers = this.introducers;
    },
    handleintroducers(e) {
      this.hssWxCustomerRo.introducer = e.name;
      this.showPicker12 = false;
    },
    // 生日
    handlebirthday(e) {
      this.hssWxCustomerRo.birthday = moment(e).format("YYYY-MM-DD HH:mm:ss");
      this.showPicker13 = false;
    },
    async save() {
      // 数据校验
      // 必填
      console.log(11);
      if (this.hssWxCustomerRo.store == "") {
        console.log(22);

        Toast("门店不能为空");
        return false;
      } else if (this.hssWxCustomerRo.saler == "") {
        console.log(212);

        Toast("销售不能为空");
        return false;
      } else if (this.hssWxCustomerRo.sex == "") {
        console.log(33);

        Toast("性别不能为空");
        return false;
      } else if (this.hssWxCustomerRo.important == "") {
        console.log(44);
        Toast("重点客户不能为空");
        return false;
      } else if (this.hssWxCustomerRo.region == "") {
        console.log(55);

        Toast("客户区域不能为空");
        return false;
      } else if (this.hssWxCustomerRo.nature == "") {
        console.log(66);

        Toast("客户性质不能为空");
        return false;
      } else if (this.hssWxCustomerRo.source == "") {
        console.log(77);

        Toast("客户来源不能为空");
        return false;
      } else if (this.hssWxBusinessBuyRo.brand == "" && !this.showInvalid) {
        console.log(77);

        Toast("买车品牌不能为空");
        return false;
      } else if (this.hssWxCustomerRo.intentionLevel == "") {
        console.log(88);

        Toast("意向等级不能为空");
        return false;
      } else if (
        this.hssWxCustomerRo.nextFollowUpTime == "" &&
        this.showfollow
      ) {
        console.log(99);

        Toast("下次跟进时间不能为空");
        return false;
      } else if (
        this.hssWxBusinessSellRo.brand == "" &&
        this.hssWxCustomerRo.isSell &&
        !this.showInvalid
      ) {
        console.log(1010);

        Toast("卖车品牌不能为空");
        return false;
      }
      // 非必填，填了就需校验
      else if (
        this.showdiyprice &&
        Number(this.hssWxBusinessBuyRo.minPrice) >
          Number(this.hssWxBusinessBuyRo.maxPrice)
      ) {
        console.log(1111);

        Toast("最低价格应小于最高价格");
        return false;
      }
      if (this.hssWxCustomerRo.phone != "") {
        console.log(1212);

        let msg = this.reg.checkPhone(this.hssWxCustomerRo.phone);
        if (msg != "ok") {
          console.log(1313);
          Toast(msg);
          return false;
        }
      }

      if (this.hssWxCustomerRo.sparePhone != "") {
        console.log(1414);

        let msg = this.reg.checkPhone(this.hssWxCustomerRo.sparePhone);
        if (msg != "ok") {
          console.log(1515);

          Toast(msg);
          return false;
        }
      }
      if (this.hssWxCustomerRo.idcard != "") {
        console.log(1616);

        let msg = this.reg.checkCard(this.hssWxCustomerRo.idcard);
        if (msg != "ok") {
          console.log(1717);

          Toast(msg);
          return false;
        }
      }
      // 校验结束
      console.log(1818);
      // 修改客户需求
      if (this.id) {
        let data = await this.api.modifyCustomer({
          hssWxCustomerRo: this.hssWxCustomerRo,
          hssWxBusinessBuyRo: this.hssWxBusinessBuyRo,
          hssWxBusinessSellRo: this.hssWxBusinessSellRo,
        });
        if (data.code == 0) {
          console.log(2020);
          // 保存成功需要返回刷新
          this.until.seSave("needRefresh", true);

          Toast("保存成功");
          this.until.back();
        } else {
          console.log(2121);
          Toast("保存失败");
        }
      }
      // 新增客户
      else {
        let data = await this.api.commitNewCustomer({
          hssWxCustomerRo: this.hssWxCustomerRo,
          hssWxBusinessBuyRo: this.hssWxBusinessBuyRo,
          hssWxBusinessSellRo: this.hssWxBusinessSellRo,
        });
        if (data.code == 0) {
          console.log(2020);
          this.until.seSave("needRefresh", true);

          Toast("保存成功");
          this.until.back();
        } else {
          console.log(2121);
          Toast("保存失败");
        }
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
      this.hssWxCustomerRo.regionOutside = selectedOptions
        .map((option) => option.nm)
        .join("/");
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
        this.isvanloading = false;
        console.log("上传后地址", imgurl.data);
        if (!this.hssWxCustomerRo.pic) {
          this.hssWxCustomerRo.pic = imgurl.data;
        } else {
          this.hssWxCustomerRo.pic += `,${imgurl.data}`;
        }
      });
    },
    // 处理确定跟进时间
    handlefollowConfirm(e) {
      this.momentNextFollowUpTime = moment(e).format("YYYY-MM-DD dddd HH:mm");
      this.hssWxCustomerRo.nextFollowUpTime = moment(e).format(
        "YYYY-MM-DD HH:mm:ss"
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
      else this.currentID = this.hssWxBusinessSellRo.brandId;
    },
    // 关闭品牌弹窗
    handleclose() {
      setTimeout(() => {
        this.showmorebuybrand = false;
        this.showmoresellbrand = false;
      }, 200);
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
        // this.bseriseobj = {};
        // this.btypeobj = {};
        // 获取买车车系列表
        this.api
          .getCarSeries({ brandid: this.hssWxBusinessBuyRo.brandId })
          .then((res) => {
            this.Bcarseries = res;
            this.searchBcarseries = res;
          });
        setTimeout(() => {
          this.showmorebuybrand = false;
        }, 200);
      } else {
        this.hssWxBusinessSellRo.brandId = brand.id;
        this.hssWxBusinessSellRo.brand = brand.brand_name;

        // 清空车型、车系
        this.hssWxBusinessSellRo.series = "";
        this.hssWxBusinessSellRo.model = "";
        this.hssWxBusinessSellRo.seriesId = "";
        this.hssWxBusinessSellRo.modelId = "";
        // this.bseriseobj = {};
        // this.btypeobj = {};
        // 获取卖车车系列表
        this.api
          .getCarSeries({ brandid: this.hssWxBusinessSellRo.brandId })
          .then((res) => {
            this.Scarseries = res;
            this.searchScarseries = res;
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
      this.searchBcarseries = [];
      this.Bcarseries = [];
      this.searchBcartypes = [];
      this.Bcartypes = [];
      // this.bseriseobj = {};
      // this.btypeobj = {};
      // 获取买车车系列表
      this.api
        .getCarSeries({ brandid: this.hssWxBusinessBuyRo.brandId })
        .then((res) => {
          this.Bcarseries = res;
          this.searchBcarseries = res;
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
      this.searchScarseries = [];
      this.Scarseries = [];
      this.searchScartypes = [];
      this.Scartypes = [];
      // this.bseriseobj = {};
      // this.btypeobj = {};
      // 获取卖车车系列表
      this.api
        .getCarSeries({ brandid: this.hssWxBusinessSellRo.brandId })
        .then((res) => {
          this.Scarseries = res;
          this.searchScarseries = res;
        });
    },
    // 买车车系
    onSearch6(a) {
      if (a != "")
        this.searchBcarseries = this.Bcarseries.filter((item) =>
          item.name.includes(a)
        );
      else this.searchBcarseries = this.Bcarseries;
    },
    // 处理买车车系选中值变化
    handlecheckBseries(brand) {
      this.hssWxBusinessBuyRo.seriesId = brand.id;
      this.hssWxBusinessBuyRo.series = brand.name;
      // 车型清空
      this.hssWxBusinessBuyRo.model = "";
      this.hssWxBusinessBuyRo.modelId = "";
      this.searchBcartypes = [];
      this.Bcartypes = [];
      this.showPicker6 = false;

      // this.btypeobj = {};

      // 获取买车车型列表
      this.api
        .getCarModels({ seriesId: this.hssWxBusinessBuyRo.seriesId })
        .then((res) => {
          this.Bcartypes = res.result;
          this.searchBcartypes = res.result;
        });
    },
    handlecheckBtypes(brand) {
      this.hssWxBusinessBuyRo.modelId = brand.id;
      this.hssWxBusinessBuyRo.model = brand.name;
      this.showPicker7 = false;
    },
    handlecheckSseries(brand) {
      this.hssWxBusinessSellRo.seriesId = brand.id;
      this.hssWxBusinessSellRo.series = brand.name;
      // 车型清空
      this.hssWxBusinessSellRo.model = "";
      this.hssWxBusinessSellRo.modelId = "";
      this.searchScartypes = [];
      this.Scartypes = [];
      this.showPicker9 = false;

      // this.stypeobj = {};

      // 获取卖车车型列表
      this.api
        .getCarModels({ seriesId: this.hssWxBusinessSellRo.seriesId })
        .then((res) => {
          this.Scartypes = res.result;
          this.searchScartypes = res.result;
        });
    },
    handlecheckStypes(brand) {
      this.hssWxBusinessSellRo.modelId = brand.id;
      this.hssWxBusinessSellRo.model = brand.name;
      this.showPicker10 = false;
    },
  },
  async created() {
    moment.locale("zh-cn");
    // 用户id
    this.id = this.until.getQueryString("id");
    // 接待id
    this.cusid = this.until.getQueryString("cusid");
    this.departRole = JSON.parse(this.until.loGet("userInfo"));
    this.departRole = this.departRole.departRole;
    if (this.id) {
      this.Title = "修改需求";
    } else if (this.cusid) {
      this.Title = "完善信息";
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
    this.searchshoplist = this.shopList;
    // 门店默认选中
    this.hssWxCustomerRo.store = this.searchshoplist[0].content;
    // 获取销售顾问列表
    this.salers = await this.api.getsalersList();
    this.searchsalers = this.salers;
    // 销售默认选中当前账号销售
    let arg7 = JSON.parse(this.until.loGet("userInfo")).arg7;
    //  从销售列表中能找到缓存中的名字，则默认选中
    let argIndex = this.searchsalers.findIndex((item) => item.arg7 == arg7);
    if (argIndex >= -1) {
      this.hssWxCustomerRo.saler = arg7;
    }

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
    if (this.id || this.cusid) {
      this.custypeList = await this.api.getFlowtypeList(
        this.query.toEncode(this.newqry(query_flow_type))
      );
      this.searchcustypeList = this.custypeList;
    }
    // 不经过接待或修改需求，直接新增则只能选未到店
    else {
      let custype = await this.api.getFlowtypeList(
        this.query.toEncode(this.newqry(query_flow_type))
      );
      this.custypeList = custype.filter((item) => item.content == "未到店");
      this.searchcustypeList = this.custypeList;
      this.hssWxCustomerRo.nature = this.searchcustypeList[0].content;
    }

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
    this.searchcustomerofList = this.customerofList;

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
    // 新增中去掉无效
    this.intentLevelList = this.intentLevelList.filter(
      (item) => item.content != "战败"
    );
    // 无效原因
    this.InvalidReasons = await this.api.getReasonForinvalid(
      encodeURIComponent(
        JSON.stringify({
          w: [{ k: "category", v: 12, m: "EQ" }],
          o: [{ k: "id", t: "esc" }],
          p: { n: 1, s: 10 },
        })
      )
    );

    // 获取八个常用车标
    let BbrandList = await this.api.getCommonCarIcon();
    this.BbrandList = JSON.parse(BbrandList);
    this.SbrandList = JSON.parse(JSON.stringify(this.BbrandList));

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
      this.searchBcarseries = this.Bcarseries;
      // 买车车型列表
      let bshortTypes = await this.api.getCarModels({
        seriesId: this.hssWxBusinessBuyRo.seriesId,
      });
      this.Bcartypes = bshortTypes.result;
      this.searchBcartypes = this.Bcarseries;

      // 卖车车系列表
      this.Scarseries = await this.api.getCarSeries({
        brandid: this.hssWxBusinessSellRo.brandId,
      });
      this.searchScarseries = this.Scarseries;

      // 卖车车型列表
      let sshortTypes = await this.api.getCarModels({
        seriesId: this.hssWxBusinessSellRo.seriesId,
      });
      this.Scartypes = sshortTypes.result;
      this.searchScartypes = this.Scartypes;

      // 买车车系、车型复写
      // this.$set(this.bseriseobj, "id", this.hssWxBusinessBuyRo.seriesId);
      // this.$set(this.bseriseobj, "name", this.hssWxBusinessBuyRo.series);
      // this.$set(this.btypeobj, "id", this.hssWxBusinessBuyRo.modelId);
      // this.$set(this.btypeobj, "name", this.hssWxBusinessBuyRo.model);
      // 卖车车系、车型复写
      // this.$set(this.sseriseobj, "id", this.hssWxBusinessSellRo.seriesId);
      // this.$set(this.sseriseobj, "name", this.hssWxBusinessSellRo.series);
      // this.$set(this.stypeobj, "id", this.hssWxBusinessSellRo.modelId);
      // this.$set(this.stypeobj, "name", this.hssWxBusinessSellRo.model);

      // 相册图片处理
      this.albums = this.hssWxCustomerRo.pic.split(",").map((item) => {
        url: item;
      });
    }
    // 接待信息完善
    else if (this.cusid) {
      let data = await this.api.getWxCheckinDetail(this.cusid);
      this.hssWxCustomerRo = { ...this.hssWxCustomerRo, ...data };
      this.hssWxCustomerRo.chcekinId = this.cusid;
    }
  },
  async mounted() {
    this.defaultHeight = $(window).height();
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight;
      })();
    };
    //  获取老客户介绍人
    this.introducers = await this.api.getOldCustomer("");
    this.searchintroducers = this.introducers;
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
    align-items: center;
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
    width: 1.7rem;
    font-size: 0.28rem;
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
      font-size: 0.28rem;
      font-weight: bold;
      color: #303030;
      margin-right: 0.1rem;
    }
    .tip {
      font-size: 0.28rem;
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
        font-size: 0.28rem;
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