<template>
  <div class="con">
    <div class="item move-left">
      <i class="iconfont">&#xe60e;</i>OS@moyasz.com
    </div>
    <div class="item move-left">
      <i class="iconfont">&#xe6b9;</i>0755-8657 5595
    </div>
    <div class="item" @click="totop" style="border:none;">
      <i class="iconfont">&#xe63c;</i>
    </div>
  </div>
</template>

<script>
  export default{
      name:'ControlBar',
      data (){
          return {}
      },
    methods:{
          totop:function () {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }
    }
  }
</script>

<style lang="scss" scoped="true">
  @import "../assets/iconfont.css";
  @import "../../static/base";
  .con
  {
    background: #fff;
    position: fixed;
    right: -160px;
    width: 200px;
    top: 60%;
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    transform: translate(0, -50%);
    z-index: 100;
    -webkit-box-shadow:  0 0 15px #aaa;
    -moz-box-shadow:  0 0 15px #aaa;
    box-shadow:  0 0 15px #aaa;
  }
  .item
  {
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
    font-size: 16px;
  }
  .item:hover
  {
    background: $yellow;
    color: #fff;
    i.iconfont
    {
      color: #fff;
    }
    border-bottom: 1px solid $yellow;
  }
  .move-left
  {
    -webkit-transition: margin-left .3s;
    -moz-transition: margin-left .3s;
    -ms-transition: margin-left .3s;
    -o-transition: margin-left .3s;
    transition: margin-left .3s;
  }

  .move-left:hover
  {
    margin-left: -160px;

  }
  .iconfont
  {
    font-size: 24px;
    color: $yellow;
    margin-right: 10px;
  }
</style>
