<template>
  <div class="con">
    <div class="inner">
      <el-row>
        <h1 class="sec-title">我们的产品</h1>
      </el-row>


      <div class="tab-wrap">
        <div class="tab-group">

          <div v-for="(item,index) in tabItems" :key="index" class="tab-item" @click="showProduct(item.name)" :class="{tabactive:activeItem===item.name}">{{item.title}}</div>
          <!--<div class="tab-item" @click="showItem('smt-m')" v-bind:class="{tabactive:activeItem=='p-smt'}">山木通·建材家具厂家版</div>-->
          <!--<div class="tab-item" @click="showItem('smt-agent')" v-bind:class="{tabactive:activeItem=='p-smt'}">山木通·建材家具门店版</div>-->
          <!--<div class="tab-item" @click="showItem('smt-order')" v-bind:class="{tabactive:activeItem=='p-smt'}">山木通·云订货平台</div>-->
          <!--<div class="tab-item" @click="showItem('smt-jxc')" v-bind:class="{tabactive:activeItem=='p-smt'}">山木通·云进销存</div>-->
          <!--<div class="tab-item" @click="showItem2" v-bind:class="{tabactive:activeItem=='p-chanq'}">产权管理系统</div>-->
          <!--<div class="tab-item" @click="showItem3" v-bind:class="{tabactive:activeItem=='p-hr'}">人力资源管理系统</div>-->
        </div>
      </div>


      <div v-show="activeItem=='smt-m'" class="p-item" id="smt-m">
        <div class="con-left">
          <div class="des-wrap">
            <h1>山木通·建材家具厂家版</h1>
            <p>山木通平台与目前国内最领先的云计算服务提供商(阿里 云)战略合作 ，提供高可靠的数据安全保障服务，SaaS平台是目前主流的技 术服务提供方 式，是软件科技发展的最新趋势。</p>
            <a href="http://www.shanmt.com" class="round-btn" target="_blank">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/iphonemac.jpg" alt=""/>
        </div>
      </div>
      <div v-show="activeItem=='smt-agent'" class="p-item" id="smt-agent">
        <div class="con-left">
          <div class="des-wrap">
            <h1>山木通·建材家具门店版</h1>
            <p>山木通平台与目前国内最领先的云计算服务提供商(阿里 云)战略合作 ，提供高可靠的数据安全保障服务，SaaS平台是目前主流的技 术服务提供方 式，是软件科技发展的最新趋势。</p>
            <a href="http://www.shanmt.com" class="round-btn" target="_blank">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/iphonemac.jpg" alt=""/>
        </div>
      </div>
      <div v-show="activeItem=='smt-order'" class="p-item" id="smt-order">
        <div class="con-left">
          <div class="des-wrap">
            <h1>山木通·云订货平台</h1>
            <p>山木通平台与目前国内最领先的云计算服务提供商(阿里 云)战略合作 ，提供高可靠的数据安全保障服务，SaaS平台是目前主流的技 术服务提供方 式，是软件科技发展的最新趋势。</p>
            <a href="http://www.shanmt.com" class="round-btn" target="_blank">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/iphonemac.jpg" alt=""/>
        </div>
      </div>
      <div v-show="activeItem=='smt-jxc'" class="p-item" id="smt-jxc">
        <div class="con-left">
          <div class="des-wrap">
            <h1>山木通·云进销存</h1>
            <p>山木通平台与目前国内最领先的云计算服务提供商(阿里 云)战略合作 ，提供高可靠的数据安全保障服务，SaaS平台是目前主流的技 术服务提供方 式，是软件科技发展的最新趋势。</p>
            <a href="http://www.shanmt.com" class="round-btn" target="_blank">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/iphonemac.jpg" alt=""/>
        </div>
      </div>


      <div v-show="activeItem=='chanq'" class="p-item" id="p-chanq">
        <div class="con-left">
          <div class="des-wrap">
            <h1>产权管理系统</h1>
            <p>山木通平台与目前国内最领先的云计算服务提供商(阿里 云)战略合作 ，提供高可靠的数据安全保障服务，SaaS平台是目前主流的技 术服务提供方 式，是软件科技发展的最新趋势。</p>
            <a href="http://www.shanmt.com" class="round-btn" target="_blank">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/iphonemac.jpg" alt=""/>
        </div>
      </div>


      <div v-show="activeItem=='hr'" class="p-item" id="p-hr">
        <div class="con-left">
          <div class="des-wrap">
            <h1>人力资源管理系统</h1>
            <p>山木通平台与目前国内最领先的云计算服务提供商(阿里 云)战略合作 ，提供高可靠的数据安全保障服务，SaaS平台是目前主流的技 术服务提供方 式，是软件科技发展的最新趋势。</p>
            <a href="http://www.shanmt.com" class="round-btn" target="_blank">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/iphonemac.jpg" alt=""/>
        </div>
      </div>

      <el-row>
        <h1 class="sec-title">我们的客户</h1>
      </el-row>

      <el-row v-for="(bandrow, index) in bandrows" :gutter="20" class="band-row" :key="index">
        <el-col :span="4" v-for="(band, index) in bandrow" class="band-con" :key="index">
          <div class="band-wrap">
            <img :src="'./static/img/logo/'+band.url">
          </div>
        </el-col>
      </el-row>

      <el-row>
        <h1 class="sec-title">新闻中心</h1>
      </el-row>

      <el-row>
        <div class="tab-wrap">
          <div class="tab-group">
            <div class="tab-item" @click="showNews1" v-bind:class="{tabactive:activeNews=='news-moya'}">莫亚动态</div>
            <div class="tab-item" @click="showNews2" v-bind:class="{tabactive:activeNews=='news-field'}">行业资讯</div>
            <div class="tab-item" @click="showNews3" v-bind:class="{tabactive:activeNews=='news-tech'}">技术交流</div>
          </div>
        </div>
      </el-row>

      <div class="news-smt" v-show="activeNews=='news-moya'">
        <el-row :gutter="20" style="margin-bottom:60px;">
          <el-col :span="10">
            <div class="grid-content">
              <div class="thumb-img">
                <img src="../../../static/img/kingdee1.jpg" alt=""/>

              </div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="news-item">
              <a href="news.html" class="news">
                <h3 class="news-title">莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
            <div class="news-item">
              <a class="news">
                <h3 class="news-title">莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
            <div class="news-item">
              <a class="news">
                <h3 class="news-title">莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="news-smt" v-show="activeNews=='news-field'">
        <el-row :gutter="20" style="margin-bottom:60px;">
          <el-col :span="10">
            <div class="grid-content">
              <div class="thumb-img">
                <img src="../../../static/img/kingdee1.jpg" alt=""/>

              </div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="news-item">
              <a href="" class="news">
                <h3 class="news-title">field莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
            <div class="news-item">
              <a class="news">
                <h3 class="news-title">莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
            <div class="news-item">
              <a class="news">
                <h3 class="news-title">莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="news-smt" v-show="activeNews=='news-tech'">
        <el-row :gutter="20" style="margin-bottom:60px;">
          <el-col :span="10">
            <div class="grid-content">
              <div class="thumb-img">
                <img src="../../../static/img/kingdee1.jpg" alt=""/>

              </div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="news-item">
              <a href="" class="news">
                <h3 class="news-title">tech莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
            <div class="news-item">
              <a class="news">
                <h3 class="news-title">莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
            <div class="news-item">
              <a class="news">
                <h3 class="news-title">莫亚科技拓展新版图（长沙办事处成立）</h3>
                <h6 class="author">莫亚科技 2016-03-07</h6>
                <p class="news-content">
                  深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供更加优质的服务
                </p>
                <div class="news-img">
                  <img src="../../../static/img/t-1.jpg" alt="">
                </div>
              </a>
            </div>
          </el-col>
        </el-row>
      </div>


    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        activeName: 'first',
        activeItem: 'smt-m',
        activeNews: 'news-moya',
        tabItems:[
          {title:'山木通·建材家具厂家版',name:'smt-m'},
          {title:'山木通·建材家具门店版',name:'smt-agent'},
          {title:'山木通·云订货平台',name:'smt-order'},
          {title:'山木通·云进销存',name:'smt-jxc'},
          {title:'产权管理系统',name:'chanq'},
          {title:'人力资源管理系统',name:'hr'}
        ],
        bandrows: [
          [{url: 'huaw.jpg'}, {url: 'kingdee.jpg'},{url: 'wank.jpg'},{url: 'baijc.jpg'}, {url: 'guanz.jpg'}, {url: 'henglwl.jpg'}, ],
          [{url: 'szair.jpg'},{url: 'antong.jpg'}, {url: 'ytg.jpg'},{url: 'boshi.jpg'}, {url: 'zhoudf.jpg'},  {url: 'taix.jpg'}]
//            [{url:''},{url:''},{url:''},{url:''},{url:''},{url:''}],

        ]
      }
    },
    methods: {
      handleClick:function(tab, event) {
        console.log(tab, event);
      },
      showProduct:function(name) {
        this.activeItem=name
      },
      showNews1:function () {
        this.activeNews='news-moya'
      },
      showNews2:function () {
        this.activeNews='news-field'
      },
      showNews3:function () {
        this.activeNews='news-tech'
      },
    }
  }

</script>

<style lang="scss" scoped="true" type="text/css">

  @import "../../../static/base.scss";
  .con {
  .inner {
    width: 75%;
    min-width: 1200px;
    margin: 0 auto;
  }

  .sec-title {
    text-align: center;
    font-weight: normal;
    margin-bottom: 40px;
    margin-top: 60px;
  }
  }

  .round-btn {
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    border: 1px solid $yellow;
    color: $yellow;
  }

  .round-btn:hover {
    background: $yellow;
    color: #ffffff;
  }

  .tab-wrap {
    display: block;
    text-align: center;
  }

  .tab-group {
    display: inline-block;

  .tab-item {
    display: inline-block;
    background: #dddddd;
    font-size: 14px;
    padding: 10px 20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    float: left;
    margin: 0 1px;
    cursor: pointer;
  }

  .tabactive {
    background: deepskyblue;
    color: #ffffff;
  }

  }

  .p-item {
    height: 400px;
    overflow: hidden;
  }

  .con-left {
    width: 50%;
    display: inline-block;
    float: left;
    position: relative;
    height: 100%;

  h1 {
    text-align: left;
  }

  p {
    text-align: left;
    font-size: 20px;
    line-height: 1.8em;
  }

  .des-wrap {
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

  }

  .con-right {
    position: relative;
    width: 50%;
    display: inline-block;
    float: left;
    text-align: center;
    overflow: hidden;
  height:100%;

  img {
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    display: inline-block;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }

  }

  .band-con {
    overflow: hidden;
    padding: 0 10px;

  .band-wrap {
    border: 1px solid #dddddd;
    position: relative;
    height: 100px;
    display: block;

  img {
    width: 90%;
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  }

  }

  .band-row {
    margin: 20px 0;
  }

  .news-item {
    position: relative;
    height: 150px;
    padding-left: 160px;

  .news-img {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 0;
    left: 0;
    overflow: hidden;

  img {
    width: 100%;
  }

  }
  }

  .news-item {
    margin: 20px 0;

  .news-title {
    margin: 0;
  }

  .author {
    margin: 0;
    font-weight: normal;
    color: #999999;
    margin-top: 5px;
  }

  p {
    line-height: 1.8em;
  }

  }

  a.news:hover {
    color: $yellow;

  .author {
    color: $yellow;
  }

  }

  .thumb-img {
    height: 490px;
    overflow: hidden;
    margin-top: 20px;

  img {
    width: 100%;
  }

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>



















