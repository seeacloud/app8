<template>
  <div class="article-con">


    <div class="inner">

     <h1 class="sec-title">联系我们</h1>
      <p class="des">您有任何需求，请随时联系我们，我们期待您的垂询</p>
      <div class="addr-card">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <h2 class="addr-title">深圳总部</h2>
              <p>联系人：徐先生</p>
              <p>咨询电话：0755-8657 5595</p>
              <p>Email：OS@moyasz.com</p>
              <p>QQ: 712381238</p>
              <p>邮编： 518040</p>
              <p>地址：深圳市南山区亿利达创世纪商务中心9A11-9A15</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <img src="../../../static/img/add-sz.jpg" alt="" style="width: 100%;">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="addr-card">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <h2 class="addr-title">长沙基地</h2>
              <p>联系人：戴先生</p>
              <p>咨询电话：0731-8556 3963</p>
              <p>Email：daigz@moyasz.com</p>
              <p>QQ: 527021944</p>
              <p>邮编： 410327</p>
              <p>地址：湖南省长沙市开福区芙蓉中路518号芙蓉城6楼</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <img src="../../../static/img/add-cs.jpg" alt="" style="width: 100%;">
            </div>
          </el-col>
        </el-row>
      </div>


      <div class="addr-card">
        <h2 class="addr-title">欢迎留言</h2>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content">
              <el-input placeholder="请输入姓名" v-model="input1">
                <template slot="prepend">您的姓名</template>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-input placeholder="请输入电话" v-model="input2">
                <template slot="prepend">您的电话</template>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-input placeholder="请输入Email" v-model="input3">
                <template slot="prepend">您的Email</template>
              </el-input>
            </div>
          </el-col>
        </el-row>

        <el-input  type="textarea"
          :rows="10"
          placeholder="请输入内容"
          v-model="textarea" style="margin-top:20px;">
        </el-input>

        <el-button type="primary" style="margin-top:20px;">提交</el-button>

      </div>
    </div>

    <!--<img src="../../../static/img/address.jpg" alt="" class="addr-banner">-->


  </div>
</template>

<script>
  export default {
    data (){
      return {
          input1:'',
        input2:'',
        input3:'',
        textarea:''
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/base";
  @import "../../../static/article.css";

  .article-con {
    background: #eeeeee;
    padding: 0;
    background: url(../../../static/img/address.jpg) no-repeat;
    background-size: 100% auto;
  }

  .inner {
    width: 90%;
    margin-left: 5%;
    padding-top: 150px;
    padding-bottom: 60px;
  }

  .addr-card {
    background: #ffffff;
    padding: 20px;
    margin-bottom: 40px;
    /*-webkit-box-shadow:  2px 2px 10px #ddd;*/
    /*-moz-box-shadow:  2px 2px 10px #ddd;*/
    /*box-shadow:  2px 2px 10px #ddd;*/
    p
    {
      font-size: 14px;
    }
  }

  .addr-title
  {
    display: inline-block;
    border-bottom: 3px solid $yellow;
    padding-bottom: 5px;
  }
  .sec-title
  {
    text-align: center;
    color: #fff;
    margin-bottom: 5px;
  }
  .des
  {
    text-align: center;
    color: #fff;
    margin-bottom: 40px;
  }
</style>
