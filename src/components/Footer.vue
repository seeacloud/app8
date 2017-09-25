<template>
  <div class="con">
    <div class="inner inner-main">
      <el-row>
        <el-col :span="8">
          <h2>深圳总部</h2>
          <p>联系人：徐先生</p>
          <p>咨询电话：0755-8657 5595

</p>
          <p>Email：OS@moyasz.com</p>
          <p>
            QQ: 712381238
            </p>
          <p>邮编： 518040
            </p>
          <p>深圳市南山区亿利达大厦创世纪商务中心9A11-9A15</p>
        </el-col>
        <el-col :span="8">
          <h2>长沙基地</h2>
          <p>联系人：戴先生

</p>
          <p>咨询电话：0731-85563963
</p>
          <p>Email：daigz@moyasz.com </p>
          <p>
            QQ: 527021944
            </p>
          <p>邮编： 410327
            </p>
          <p>湖南省长沙市开福区芙蓉中路518号芙蓉城6楼</p>
        </el-col>
        <el-col :span="4">
          <h2>产品与服务</h2>
          <a href="products.html#/api/article/0">山木通系列产品</a>
          <a href="products.html#/api/article/6">物流行业产品</a>
          <a href="products.html#/api/article/7">金蝶系产品实施开发</a>
          <a href="products.html#/api/article/8">互联网产品研发</a>
          <a href="products.html#/api/article/9">软件定制开发</a>
          <a href="products.html#/api/article/10">IT人力资源服务</a>
        </el-col>
        <el-col :span="4">
          <h2>公司</h2>
          <a href="news.html">公司新闻</a>
          <a href="about.html">莫亚概况</a>
          <a href="http://www.kingdee.com" target="_blank">金蝶资讯</a>
          <a href="about.html#/glory">公司荣誉</a>
          <a href="about.html#/culture">企业文化</a>
          <a href="about.html#/contact">联系我们</a>
        </el-col>
      </el-row>


    </div>

    <div class="cpyrt">
      <div class="inner">
        <el-row >
          <el-col :span="24">
            © 2011-2017 深圳市莫亚科技有限公司 <a class="cpy-link" href="http://www.miitbeian.gov.cn/" target="_blank">备案号:粤ICP备12008703号-1</a>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>


</template>

<script>
  export default
  {
    name: 'footer',
    data (){
      return {}
    }
  }
</script>

<style lang="scss" scoped="true">
  $yellow: #ec6600;
  .con {
    background: #333333;
    color: #ffffff;
    margin: 0 auto;
    margin-top: 80px;
    min-width: 1200px;
  }

  .inner {
    width: 75%;
    min-width: 1200px;
    margin: 0 auto;

    h2 {
      display: inline-block;
      font-size: 20px;
      font-weight: normal;
      border-bottom: 2px solid $yellow;
      padding-bottom: 5px;
    }
  }

  .cpyrt {
    border-top: 1px solid #444;
    padding: 10px 0;
    font-size: 12px;
    color: #999;
  }

  p
  {
    font-size: 14px;
    line-height: 1.5em;
    font-weight: normal;
    margin: 6px 0;
    color: #ccc;
  }
  a
  {
    font-size: 14px;
    display: block;
    line-height: 1.5em;
    margin: 6px 0;
    color: #ccc;
  }
  a:hover
  {
    color: #fff;
  }
  .cpy-link
  {
    display: inline-block;
    color: #999;
    font-size: 12px;
  }
  .inner-main
  {
    padding: 20px 0;
  }
</style>
