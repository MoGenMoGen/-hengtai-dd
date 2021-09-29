<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");
i {
  color: #fe3001;
  margin-right: 0.1rem;
}
.toptitle {
  width: 100%;
  height: 1.28rem;
  position: relative;
  line-height: 1.28rem;
  text-align: center;
  font-size: 0.36rem;
  font-weight: 500;
  color: #ffffff;
  background: url("~@/assets/img/header.png") no-repeat;

  img {
    height: 0.31rem;
    width: 0.17rem;
    position: absolute;
    top: 50%;
    left: 0.36rem;
    transform: translateY(-50%);
  }
}
.dispatch {
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  .main {
    width: 80%;
    margin: 2rem auto;
    background: #ffffff;
    border-radius: 5px;
    .top {
      text-align: center;
      padding: 0.2rem 0;
    }
    .content {
      padding: 0.4rem 0.2rem;
      border-bottom: 1px solid @borderColor;
      > div {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        margin-bottom: 0.2rem;
        p {
          width: 2.3rem;
        }
        textarea {
          flex: 1;
          height: 1.8rem;
          border: 1px solid @borderColor;
          border-radius: 3px;
          padding: 0 0.1rem;
        }
        select {
          flex: 1;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: left;
          border: 1px solid @borderColor;
          border-radius: 3px;
          padding: 0 0.1rem;
          span {
            display: inline-block;
            float: right;
          }
        }
      }
    }
    .footer {
      display: flex;
      display: -webkit-flex;
      text-align: center;
      p {
        flex: 1;
        height: 0.8rem;
        line-height: 0.8rem;
        &:last-of-type {
          color: @color;
          border-left: 1px solid @borderColor;
        }
      }
    }
  }
}
#container {
  width: 100%;
  height: 100%;
  background: @backgroundColor;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  .bigImg {
    background: rgba(0, 0, 0, 0.35);
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
    border-top: 1px solid @borderColor;
    display: flex;
    display: -webkit-flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    span {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
    }
    img {
      width: auto;
      height: auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
  .main {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .btn {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    border-top: 1px solid @color;
    > button {
      flex: 1;
      background: #ffffff;
      color: @color;
      font-size: 1.1em;
      height: 0.8rem;
      line-height: 0.8rem;
      border-right: 1px solid @color;
      &:last-of-type {
        background: @color;
        color: #ffffff;
      }
    }
  }

  .info {
    background: #ffffff;
    margin-bottom: 0.2rem;
    border-top: 1px solid @borderColor;
    border-bottom: 1px solid @borderColor;
    padding: 0.25rem 0.3rem;
    p {
      line-height: 0.6rem;
      span {
        display: inline-block;
        width: 2.3rem;
      }
    }
  }
  .title {
    padding: 0.25rem 0.3rem;
    padding-bottom: 0;
    span {
      display: inline-block;
      background: @color;
      height: 0.25rem;
      width: 0.1rem;
      margin-right: 0.2rem;
    }
  }
  .situation {
    background: #ffffff;
    border-top: 1px solid @borderColor;
    margin-bottom: 0.2rem;
    > p {
      border-bottom: 1px solid #f4f4f4;
      padding: 0.3rem 0.3rem;
    }
    p.red {
      padding-left: 1.7rem;
      padding-top: 0.1rem;
      color: #fe3001;
    }
  }

  .content {
    background: #ffffff;
    border-bottom: 1px solid @borderColor;
    line-height: 0.6rem;
    padding: 0.25rem 0.3rem;
    > p {
      display: flex;
      display: -webkit-flex;
      span {
        width: 1.7rem;
        display: inline-block;
      }
      button {
        text-align: left;
        text-indent: 10px;
        flex: 1;
        height: 0.6rem;
        border: 1px solid @borderColor;
      }
      input {
        text-indent: 10px;
        flex: 1;
        border-bottom: 1px solid @borderColor;
      }
      textarea {
        flex: 1;
        border: 1px solid @borderColor;
        height: 2rem;
        padding: 0.2rem;
      }
      select {
        text-indent: 10px;
        flex: 1;
        border: 1px solid @borderColor;
        height: 0.6rem;
        line-height: 0.6rem;
      }
    }
    .upImg {
      display: flex;
      display: -webkit-flex;
      > span {
        width: 1.7rem;
        display: inline-block;
      }
      .imgList {
        flex: 1;
        overflow: hidden;
        p {
          float: left;
          width: 32%;
          margin-right: 1%;
          border: 1px solid @borderColor;
          box-sizing: border-box;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          height: 2rem;
          justify-content: center;
          margin-top: 0.2rem;
          font-size: 2em;
          color: #999999;
          position: relative;
          input {
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0;
          }
        }
        .img {
          position: relative;
          img {
            height: auto;
            max-height: 100%;
          }
          span {
            position: absolute;
            top: -0.06rem;
            right: 0.08rem;
            font-size: 0.2em;
          }
        }
      }
    }
  }
  .situation2 {
    position: relative;
    > span {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      font-size: 0.8em;
      color: #fe3001;
    }
    .content p {
      position: relative;
      align-items: center;
      height: 0.8rem;
      span {
        width: 2.3rem;
      }
      input {
        height: 0.6rem;
        line-height: 0.6rem;
      }
      .iconfont {
        width: auto;
        right: 0.1rem;
        position: absolute;
      }
    }
  }
  .add {
    width: 70%;
    display: block;
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    background: @color;
    color: #ffffff;
    border-radius: 5px;
    margin: 0.4rem auto;
  }
}
</style>

<template>
  <div id="container">
    <div class="toptitle">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      车辆维保单
    </div>
    <div class="dispatch" v-if="dispatchShow">
      <div class="main">
        <div class="top">派单</div>
        <div class="content">
          <div>
            <p>指派工作人员：</p>
            <select v-model="staffId">
              <option v-for="item in staffList" :key="item.id" :value="item.id">
                {{ item.arg7 }}
              </option>
              <span class="iconfont">&#xe638;</span>
            </select>
          </div>

          <div>
            <p>备注：</p>
            <textarea v-model="rmks"></textarea>
          </div>
          <!--<button @click="dispatchChooseSHow=true">请选择工作人员<span class="iconfont">&#xe638;</span></button>-->
        </div>
        <div class="footer">
          <p @click="dispatchShow = false">取消</p>
          <p @click="dispatchConfirm">确定</p>
        </div>
      </div>
    </div>
    <div class="bigImg" v-show="bigImgShow">
      <span class="iconfont" @click="bigImgShow = false">&#xe673;</span>
      <img :src="currentImg" />
    </div>
    <classify-index
      @choose="typeConfirm"
      @close="cancel"
      v-if="typeSHow"
    ></classify-index>
    <div class="main">
      <div class="info">
        <p><span>行驶证名：</span>{{ info.drivingLicenseName }}</p>
        <p><span>联系电话：</span>{{ info.linkManPhone }}</p>
        <p><span>联系人：</span>{{ info.linkMan }}</p>
        <p><span>品牌型号：</span>{{ info.brandModel }}</p>
        <p><span>车架号：</span>{{ info.vin }}</p>
        <p><span>公里数（万）：</span>{{ info.mileage }}</p>
        <p><span>车牌号：</span>{{ info.vehicleNum }}</p>
        <p><span>对接人：</span>{{ info.caller }}</p>
        <p><span>对接人电话：</span>{{ info.callerPhone }}</p>
        <p><span>所属销售：</span>{{ info.salerName }}</p>
        <p><span>ERP：</span>{{ info.erp }}</p>
        <p><span>派单时间：</span>{{ info.assignTime }}</p>
      </div>
      <div class="situation">
        <p><span>维保项目：</span>{{ info.project }}</p>
      </div>
      <div class="situation">
        <p>
          <i>*</i><span>当前公里数（万）：</span
          ><input v-model="form.curMileage" type="number" />
        </p>
      </div>
      <div class="situation">
        <div class="title"><span></span>车辆情况</div>
        <div class="content">
          <p>
            <span>车辆外观：</span
            ><input
              type="text"
              placeholder="请输入车辆外观描述"
              v-model="form.vehicleOutRemark"
            />
          </p>
          <div class="upImg">
            <span>上传图片：</span>
            <div class="imgList">
              <p
                class="img"
                v-for="(item, index) in outImg"
                :key="index"
                v-if="outImg.length > 0"
              >
                <span class="iconfont" @click="toDele(index, 'out')"
                  >&#xe673;</span
                >
                <img :src="item" @click="bigImg(item)" />
              </p>
              <p>
                <input
                  ref="upload"
                  type="file"
                  name="file"
                  multiple="multiple"
                  @change="upImg($event, 'out')"
                />
                +
              </p>
            </div>
          </div>
        </div>
        <div class="content">
          <p>
            <span>车辆内部：</span
            ><input
              type="text"
              placeholder="请输入车辆内部描述"
              v-model="form.vehicleInRemark"
            />
          </p>
          <div class="upImg">
            <span>上传图片：</span>
            <div class="imgList">
              <p
                class="img"
                v-for="(item, index) in inImg"
                v-if="inImg.length > 0"
              >
                <span class="iconfont" @click="toDele(index, 'in')"
                  >&#xe673;</span
                >
                <img :src="item" @click="bigImg(item)" />
              </p>
              <p>
                <input
                  ref="upload"
                  type="file"
                  name="file"
                  multiple="multiple"
                  @change="upImg($event, 'in')"
                />+
              </p>
            </div>
          </div>
        </div>
        <div class="content">
          <p>
            <span>备注信息：</span><textarea v-model="form.rmks"></textarea>
          </p>
          <p class="red">*贵重物品已提醒客户带走</p>
        </div>
      </div>
      <div class="situation situation2" v-for="(item, index) in prepareList">
        <span class="iconfont" @click="delePrepare(index)" v-if="index > 0"
          >&#xe673;</span
        >
        <div class="title"><span></span>整备项</div>
        <div class="content">
          <p>
            <i>*</i><span>整备分类：</span>
            <button @click="toChoose(index)">
              {{ item.prepareName ? item.prepareName : "请选择整备分类" }}
            </button>
            <span class="iconfont">&#xe638;</span>
          </p>
          <p>
            <span>整备明细：</span><input type="text" v-model="item.rmks" />
          </p>
          <p>
            <span>修理厂：</span><input type="text" v-model="item.garage" />
          </p>
          <p>
            <i>*</i><span>金额（成本）：</span
            ><input type="number" v-model="item.cost" />
          </p>
          <p>
            <i>*</i><span>金额（销售）：</span
            ><input type="number" v-model="item.price" />
          </p>
        </div>
      </div>

      <button class="add" @click="addPrepare">添加整备项</button>
    </div>
    <div class="btn">
      <button @click="dispatch" v-if="role == 1">派单</button>
      <button @click="toSave" v-if="info.status != 3">保存</button>
      <button @click="toSave('submit')">完成</button>
    </div>
  </div>
</template>

<script>
import classifyIndex from "@/components/classifyIndex";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      imgMax: 10, //最多上传几张图片
      staffList: [],
      role: 0,
      staffId: "",
      dispatchShow: false,
      bigImgShow: false,
      typeSHow: false,
      currentImg: "",
      typeList: [{ values: [] }],
      currentIndex: -1, //当前编辑的整备项明细索引
      prepareCurrent: {},
      prepareList: [
        {
          cost: "",
          price: "",
          garage: "",
          rmks: "",
          prepareId: "",
          prepareName: "",
        },
      ],
      id: "",
      info: {},
      outImg: [],
      inImg: [],
      form: {
        curMileage: "",
        vehicleOutRemark: "", //车辆外观描述
        vehicleOutAttach: "", //外面图片
        vehicleInRemark: "", //内部描述
        vehicleInAttach: "", //内部图片
        rmks: "", //备注
        worksheetItemDtos: [],
      },
    };
  },
  components: {
    classifyIndex,
  },
  created() {},
  mounted() {
    this.id = this.until.getQueryString("id");
    this.userInfo = JSON.parse(this.until.loGet("userInfo"));
    for (let v of Object.values(this.userInfo.userDepartRole)) {
      this.role = v;
    }
    this.getInfo();

    this.getClassify();
    this.getStaffList();
  },

  methods: {
    async getStaffList() {
      this.staffList = await this.api.staffList();
    },
    dispatchConfirm() {
      let param = {
        worksheetId: this.id,
        serverId: this.staffId,
        rmks: this.rmks,
      };
      this.api.serviceUpd(param).then(() => {
        Toast("指派成功！");
        setTimeout(() => {
          this.until.back();
        }, 1500);
      });
    },
    dispatch() {
      this.dispatchShow = true;
    },
    bigImg(item) {
      this.currentImg = item;
      this.bigImgShow = true;
    },
    typeConfirm(data) {
      this.prepareCurrent = JSON.parse(data);
      console.log(this.prepareCurrent);
      this.prepareList[this.currentIndex].prepareId = this.prepareCurrent.id;
      this.prepareList[this.currentIndex].prepareName =
        this.prepareCurrent.name;
      console.log(this.currentIndex);
      console.log(this.prepareList);
      this.typeSHow = false;
    },
    cancel() {
      this.typeSHow = false;
    },
    toChoose(index) {
      this.currentIndex = index;
      this.typeSHow = true;
      // this.until.seSave('currentClassify',index)
      // this.until.href('classifyList.html')
    },
    //选择
    typeChange(e, values) {
      this.prepareCurrent = values[0];
    },
    async getClassify() {
      // let data = await this.api.classify()
      // this.typeList[0].values = data
    },
    async getInfo() {
      let myData = await this.api.serviceDetail(this.id);
      this.info = myData.worksheetVo;
      this.info.assignTime = this.info.assignTime
        ? this.info.assignTime.split(" ")[0]
        : "";
      console.log(this.info);
      this.form.rmks = this.info.rmks;
      this.form.vehicleOutRemark = this.info.vehicleOutRemark;
      this.form.vehicleInRemark = this.info.vehicleInRemark;
      this.form.curMileage = this.info.curMileage;
      this.inImg = this.info.vehicleInAttach
        ? this.info.vehicleInAttach.split(",")
        : [];
      this.outImg = this.info.vehicleOutAttach
        ? this.info.vehicleOutAttach.split(",")
        : [];
      if (myData.worksheetItemDtos.length > 0) {
        this.prepareList = [];
        myData.worksheetItemDtos.forEach((item) => {
          this.prepareList.push(item.worksheetItemVo);
        });
      }
    },
    // async getSaveInfo(){
    //     let myData = await this.api.serviceDetail(this.id)
    //     let info = myData.worksheetVo
    //
    //
    // },
    async upImg(e, type) {
      console.log(e);
      let blob = e.target.files;
      Object.keys(blob).forEach((o) => {
        if (!/^image/.test(blob[o].type)) {
          delete blob[o];
        }
      });
      if (blob.length < 1) {
        Toast("请选择图片文件");
        return;
      }
      if (
        blob.length > 10 ||
        (type == "out" && blob.length + this.outImg.length > 10) ||
        (type == "in" && blob.length + this.inImg.length > 10)
      ) {
        Toast("最多只能上传10张图片");
        return;
      }
      for (let i = 0; i < blob.length; i++) {
        if (blob[i].size > 1024 * 1024) {
          console.log("图片太大了");
          console.log(blob[i]);
          let that = this;
          that
            .lrz(blob[i])
            .then(function (rst) {
              //成功时执行

              return that.api.upImg3(rst.formData);
            })
            .then((upload) => {
              console.log("上传成功");
              console.log(upload);
              let img = upload;

              if (type == "out") {
                that.outImg.push(img);
              }
              if (type == "in") {
                that.inImg.push(img);
              }
            });
        } else {
          console.log(12324);
          let img = await this.api.upImg2(blob[i]);

          if (type == "out") {
            this.outImg.push(img);
          }
          if (type == "in") {
            this.inImg.push(img);
          }
        }
      }
    },
    toDele(index, type) {
      if (type == "out") {
        this.outImg.splice(index, 1);
      }
      if (type == "in") {
        this.inImg.splice(index, 1);
      }
    },
    addPrepare() {
      let param = {
        cost: "",
        price: "",
        rmks: "",
        prepareName: "",
        prepareId: "",
      };
      this.prepareList.push(param);
    },
    delePrepare(index) {
      this.prepareList.splice(index);
    },
    toSave(type) {
      this.form.id = this.id;

      this.form.vehicleOutAttach = this.outImg.join(",");
      this.form.vehicleInAttach = this.inImg.join(",");
      this.form.worksheetItemList = JSON.stringify(this.prepareList);
      if (type === "submit") {
        this.form.status = 3;
        // if(this.form.vehicleOutAttach==''){
        //     Toast('车辆外部图片不能为空！')
        //     return
        // }
        // if(this.form.vehicleOutRemark==''){
        //     Toast('车辆外部描述不能为空！')
        //     return
        // }
        // if(this.form.vehicleInAttach==''){
        //     Toast('车辆内部图片不能为空！')
        //     return
        // }
        if (this.form.curMileage == "") {
          Toast("当前公里数不能为空！");
          return;
        }
        if (this.prepareList.length == 0) {
          Toast("整备项至少填一项！");
          return;
        }
        let index = this.prepareList.findIndex((item) => {
          return (
            item.cost === "" ||
            item.price === "" ||
            item.prepareId === "" ||
            item.prepareName === ""
          );
        });
        if (index > -1) {
          Toast("整备项除备注外其他项不能为空！");
          return;
        }
      }
      // console.log(this.prepareList)

      this.api.serviceFinish(this.form);
      console.log("提交");
    },
    back() {
      this.until.back();
    },
  },
};
</script>

