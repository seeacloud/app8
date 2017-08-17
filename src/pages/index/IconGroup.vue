<template>
  <div class="con">
    <div class="inner">
      <el-row class="title-row">
        <h1>提供各行业企业管理软件开发服务</h1>
        <h4>莫亚科技在企业管理软件开发方面有着非常丰富的经验</h4>
      </el-row>

      <div class="icon-row">
        <div class="icon-item">
          <a href="">
          <i class="iconfont icon-earth">&#xe6d3;</i>
          <h4 class="title">互联网产品研发</h4>
          </a>
        </div>
        <div class="icon-item">
          <a href="">
          <div class="img-wrap">
            <img src="../../../static/img/kingdee.png" alt=""/>
          </div>
          <h4 class="title">金蝶系产品实施开发</h4>
          </a>
        </div>
        <div class="icon-item">
          <a href="">
          <i class="iconfont" style="background:#f16557;">&#xe61b;</i>
          <h4 class="title">软件定制开发</h4>
          </a>
        </div>
        <div class="icon-item">
          <a href="">
          <i class="iconfont" style="background:#2cca71;">&#xe614;</i>
          <h4 class="title">IT人力资源服务</h4>
          </a>
        </div>
        <div class="icon-item no-bdr">
          <a href="http://www.sinqx.com" target="_blank">
          <div class="img-wrap">
            <img src="../../../static/img/xinqx-logo.jpg" alt=""/>
          </div>
          <h4 class="title">新企学</h4>
          </a>
        </div>
      </div>
      <!--<el-row class="content-row">-->

        <!--<el-col :span="6" class="icon-item">-->
          <!--<div class="img-wrap">-->
            <!--<img src="../../../static/img/kingdee.png" alt=""/>-->
          <!--</div>-->
          <!--<h4 class="title">金蝶EAS平台开发</h4>-->
        <!--</el-col>-->
        <!--<el-col :span="6" class="icon-item">-->
          <!--<i class="iconfont" style="background:#f16557;">&#xe61b;</i>-->
          <!--<h4 class="title">软件定制开发</h4>-->
        <!--</el-col>-->
        <!--<el-col :span="6" class="icon-item">-->
          <!--<i class="iconfont icon-earth">&#xe6d3;</i>-->
          <!--<h4 class="title">互联网产品研发</h4>-->
        <!--</el-col>-->
        <!--<el-col :span="6" class="icon-item no-bdr">-->
          <!--<i class="iconfont" style="background:#2cca71;">&#xe614;</i>-->
          <!--<h4 class="title">IT人力资源服务</h4>-->
        <!--</el-col>-->
      <!--</el-row>-->
    </div>
  </div>
</template>

<script>
  export default{
    name: 'icongroup',
    data (){
      return {}
    }
  }
</script>

<style lang="scss" scoped="true">
  @import "../../../static/base.scss";
  .con {
  }

  .inner {
    width: 75%;
    min-width: 1200px;
    margin: 0 auto;
  }

  .title-row {
    padding: 20px 0 0 0;

  h1 {
    text-align: center;
    font-weight: normal;
    margin: 40px 0 0 0;
  }

  h4 {
    text-align: center;
    font-size: 18px;
    font-weight: normal;
    margin-top: 10px;
  }

  }

  .content-row {
    padding: 20px 0;
  }

  .icon-item {
    text-align: center;
    padding-top: 20px;
    border-right: 1px solid #dddddd;
    display:inline-block;
  width:19%;
  float:left;
  a:hover
  {
    color: $yellow;
  }

  .iconfont {
    display: inline-block;
    width: 120px;
    height: 130px;
    background: #dddddd;
    text-align: center;
    line-height: 140px;
    font-size: 80px;
    border-radius: 50%;
    color: #ffffff;
  }

  title {
    font-size: 18px;
    font-weight: normal;
    color: #333333;
  }

  .img-wrap {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    img
    {
      width: 100%;
    }
  }

  i.icon-earth {
    background: none;
    font-size: 120px;
    line-height: 120px;
    color: deepskyblue;
  }

  }

  .no-bdr {
    border: none;
  }

  .icon-row:after
  {
    content:'';
    display: block;
    visibility: hidden;
    width: 0;
    height: 0;
    clear: both;
  }

</style>















