<template>
  <div class="container">
    <div class="menu-head">
      {{headtitle}}
    </div>
    <router-link v-for="(item, index) in links" :to="item.url" class="menu-item" :key="index">
      <div>
        {{item.title}}<i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default{
      name:'SideMenu',
    props:['headtitle','links'],
    data (){
          return {

          }
    }
  }
</script>


<style lang="scss" scoped="true">
  @import "../../static/base.scss";
  $yellow: #ec6600;

  .menu-head
  {
    background: $yellow;
    color: #fff;
    padding: 20px 15px;
    border-bottom: 1px solid #fff;
    font-size: 18px;

  }
  .container {
    background: #fff;
    -webkit-box-shadow:  1px 1px 10px #ccc;
    -moz-box-shadow:  1px 1px 10px #ccc;
    box-shadow:  1px 1px 10px #ccc;
  }

  .con-fixed
  {
    position: fixed;
    top: 20px;
    z-index: 100;
  }

  .menu-item {
    position: relative;
    display: block;
    border-bottom: 1px solid #eee;
    padding: 12px 15px;
    font-size:14px;
  color:#666;

    i
    {
      position: absolute;
      right: 10px;
      display: inline-block;
      top: 50%;
      -webkit-transform: translate(0 ,-50%);
      -moz-transform: translate(0 ,-50%);
      -ms-transform: translate(0 ,-50%);
      -o-transform: translate(0 ,-50%);
      transform: translate(0 ,-50%);
      font-size: 12px;
      color: #999;
    }
  }
  .menu-item:hover
  {
    background: $yellow;
    border-bottom:1px solid #fff;
    color: #fff;
    i
    {
      color: #fff;
    }
  }
  .menu-item:last-child
  {
    border-bottom:1px solid #fff;

  }

  .menu-item:last-child:hover
  {
    border-bottom:1px solid #fff;
  }

  .no-bdr {
    border: none;
  }
</style>
