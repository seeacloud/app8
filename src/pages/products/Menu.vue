<template>
  <div class="container">
    <div class="menu-head">产品与服务 </div>

    <router-link class="menu-item" to="/">
      <div>
        山木通 <i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
    <router-link class="menu-item " to="/chanq">
      <div>
        产权管理系统<i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
    <router-link class="menu-item " to="/chanq">
      <div>
        人力资源管理系统<i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
    <router-link class="menu-item " to="/chanq">
      <div>
        物流行业管理系统<i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
    <router-link class="menu-item " to="/chanq">
      <div>
        金蝶EAS开发<i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
    <router-link class="menu-item " to="/chanq">
      <div>
        软件定制开发<i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
    <router-link class="menu-item no-bdr" to="/chanq">
      <div>
        IT人力资源服务<i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data (){
      return {}
    }
  }
</script>

<style lang="scss" scoped="true">
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
    border: 1px solid $yellow;
  }

  .menu-item {
    position: relative;
    display: block;
    border-bottom: 1px solid #ddd;
    padding: 15px 15px;

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
    color: #fff;
    i
    {
      color: #fff;
    }
  }

  .no-bdr {
    border: none;
  }
</style>
