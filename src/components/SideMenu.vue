<template>
  <div class="container">
    <div class="menu-head">
      {{headtitle}}
    </div>
    <router-link v-for="(item, index) in links" :to="'/product/'+item.id" class="menu-item" :key="index">
      <div>
        {{item.title}}<i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default{
    name: 'SideMenu',
    props: ['headtitle', 'links'],
    data (){
      return {}
    }
  }
</script>


<style lang="scss" scoped="true">
  @import "../../static/base.scss";

  $yellow: #ec6600;

  .menu-head {
    background: $yellow;
    color: #ffffff;
    padding: 20px 15px;
    border-bottom: 1px solid #ffffff;
    font-size: 18px;
  }

  .container {
    background: #ffffff;
    -webkit-box-shadow: 1px 1px 10px #cccccc;
    -moz-box-shadow: 1px 1px 10px #cccccc;
    box-shadow: 1px 1px 10px #cccccc;
    margin-bottom: 20px;
  }

  .con-fixed {
    position: fixed;
    top: 20px;
    z-index: 100;
  }

  .menu-item {
    position: relative;
    display: block;
    border-bottom: 1px solid #eeeeee;
    padding: 12px 15px;
    font-size: 14px;
    color: #666666;

    i {
      position: absolute;
      right: 10px;
      display: inline-block;
      top: 50%;
      -webkit-transform: translate(0, -50%);
      -moz-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      -o-transform: translate(0, -50%);
      transform: translate(0, -50%);
      font-size: 12px;
      color: #999999;
    }
  }

  .menu-item:hover {
    background: $yellow;
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    i {
      color: #ffffff;
    }
  }

  .menu-item:last-child {
    border-bottom: 1px solid #ffffff;
  }

  .menu-item:last-child:hover {
    border-bottom: 1px solid #ffffff;
  }

  .no-bdr {
    border: none;
  }
</style>
