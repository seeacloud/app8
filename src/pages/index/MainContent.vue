<template>
  <div class="con">
    <div class="inner">
      <el-row>
        <h1 class="sec-title">我们的产品</h1>
      </el-row>


      <div class="tab-wrap">
        <div class="tab-group">

          <div v-for="(item,index) in tabItems" :key="index" class="tab-item" @click="showProduct(item.name)"
               :class="{tabactive:activeItem===item.name}">{{item.title}}
          </div>
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
            <p>山木通团队结合多年丰富的行业管理经验，充分考虑企业的特点，为家具、家居、建材、木业加工生产企业量身定制，解决企业核心管理问题，提供最符合家具、家居、建材、木业加工生产企业的全流程解决方案。</p>
            <a href="products.html#/product/3.6219736616337408E17" class="round-btn" target="_self">了解更多</a>
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
            <p>通过山木通门店版一键即可完成销售开单,厂家订货,即时生成应收款、应付款、毛利润等经营报表,库存智能管理,云端存储数据;电脑手机全支持，指尖上办公，让各环节工作从此化繁为简是店铺可靠的智能伙伴。</p>
            <a href="products.html#/product/3.6220280804212736E17" class="round-btn" target="_self">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/maciphonefront.png" alt=""/>
        </div>
      </div>
      <div v-show="activeItem=='smt-order'" class="p-item" id="smt-order">
        <div class="con-left">
          <div class="des-wrap">
            <h1>山木通·云订货平台</h1>
            <p>智能、高效的订货管理系统，全面提升订货效率，可一键完成销售开单,厂家订货,即时生成应收款、应付款、毛利润等经营报表,库存智能管理,云端存储数据，十八般武艺，样样精通</p>
            <a href="products.html#/product/46694cfee788457f8c73bab1ef39120a" class="round-btn" target="_self">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/macair-o.jpg" alt=""/>
        </div>
      </div>
      <div v-show="activeItem=='smt-jxc'" class="p-item" id="smt-jxc">
        <div class="con-left">
          <div class="des-wrap">
            <h1>山木通·云进销存</h1>
            <p>支持多种行业，满足各行各业的需求，服装鞋帽，建材家具多属性支持，全面提升管理水平；智能补货，自动报表生成，生意轻松搞定</p>
            <a href="products.html#/product/bdbc20e570234d09b31be26f93b3c2da" class="round-btn" target="_self">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/smt-all.jpg" alt=""/>
        </div>
      </div>


      <div v-show="activeItem=='chanq'" class="p-item" id="p-chanq">
        <div class="con-left">
          <div class="des-wrap">
            <h1>产权管理系统</h1>
            <p>从出资人角度，以资本为纽带，以信息技术为依托，对各级产权进行全系统流程化的分级管控；明晰产权隶属关系，直观反映网状产权关系，记录历史产权隶属关系；提供投资收益信息的记录功能，全面统计企业的投资收益情况。</p>
            <a href="products.html#/product/421221205d3947979f0630134d31e2f5" class="round-btn" target="_self">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/chanq-mac.jpg" alt=""/>
        </div>
      </div>


      <div v-show="activeItem=='kaoq'" class="p-item" id="p-kaoq">
        <div class="con-left">
          <div class="des-wrap">
            <h1>山木通·云考勤 </h1>
            <p>山木通云考勤是建立在云计算基础之上的全新考勤服务平台，能够平滑跨越互联网，覆盖PC互联网和移动互联网，整合企业信息化应用的核心要素： 计算、存储、网络、终端，面向各类企业用户，提供整体个性化考勤服务。</p>
            <a href="products.html#/product/3.6295694413201408E17" class="round-btn" target="_self">了解更多</a>
          </div>

        </div>
        <div class="con-right">
          <img src="../../../static/img/kaoq.jpg" alt=""/>
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
            <div class="news-item" v-for="(moyanews, index) in moyalist" :key="index">
              <a href="news.html" class="news">
                <h3 class="news-title">{{moyanews.title}}</h3>
                <h6 class="author"><span>作者： {{moyanews.author}}</span> <span>发布日期：{{moyanews.pdate}}</span></h6>
                <p class="news-content">
                  {{moyanews.description}}
                </p>
                <div class="news-img">
                  <!--<img src="../../../static/img/t-1.jpg" alt="">-->
                  <img :src="'http://www.shanmt.com/muye/images_test'+moyanews.picurl" alt=""/>

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
                <img src="../../../static/img/mac-charts.jpg" alt=""/>

              </div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="news-item" v-for="(moyanews, index) in fieldlist" :key="index">
              <a href="news.html" class="news">
                <h3 class="news-title">{{moyanews.title}}</h3>
                <h6 class="author"><span>作者： {{moyanews.author}}</span> <span>发布日期：{{moyanews.pdate}}</span></h6>
                <p class="news-content">
                  {{moyanews.description}}
                </p>
                <div class="news-img">
                  <!--<img src="../../../static/img/t-1.jpg" alt="">-->
                  <img :src="'http://www.shanmt.com/muye/images_test'+moyanews.picurl" alt=""/>

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
                <img src="../../../static/img/mac.jpg" alt=""/>

              </div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="news-item" v-for="(moyanews, index) in technologylist" :key="index">
              <a href="news.html" class="news">
                <h3 class="news-title">{{moyanews.title}}</h3>
                <h6 class="author"><span>作者： {{moyanews.author}}</span> <span>发布日期：{{moyanews.pdate}}</span></h6>
                <p class="news-content">
                  {{moyanews.description}}
                </p>
                <div class="news-img">
                  <!--<img src="../../../static/img/t-1.jpg" alt="">-->
                  <img :src="'http://www.shanmt.com/muye/images_test'+moyanews.picurl" alt=""/>

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
  import Vue from 'vue'
  import VueResource from 'vue-resource'

  Vue.use(VueResource)

  export default {
    data() {
      return {
        activeName: 'first',
        activeItem: 'smt-m',
        activeNews: 'news-moya',
        moyalist: '',
        fieldlist: '',
        technologylist: '',
        tabItems: [
          {title: '山木通·建材家具厂家版', name: 'smt-m'},
          {title: '山木通·建材家具门店版', name: 'smt-agent'},
          {title: '山木通·云订货平台', name: 'smt-order'},
          {title: '山木通·云进销存', name: 'smt-jxc'},
          {title: '产权管理系统', name: 'chanq'},
          {title: '山木通·云考勤 ', name: 'kaoq'}
        ],
        bandrows: [
          [{url: 'huaw.jpg'}, {url: 'kingdee.jpg'}, {url: 'wank.jpg'}, {url: 'baijc.jpg'}, {url: 'guanz.jpg'}, {url: 'henglwl.jpg'},],
          [{url: 'szair.jpg'}, {url: 'antong.jpg'}, {url: 'ytg.jpg'}, {url: 'boshi.jpg'}, {url: 'zhoudf.jpg'}, {url: 'taix.jpg'}]
//            [{url:''},{url:''},{url:''},{url:''},{url:''},{url:''}],

        ]
      }
    },
    created: function () {
      this.getmoyalist()
      this.getfieldlist()
      this.gettechnologylist()
    },
    methods: {
      getmoyalist: function () {
        this.$http.get("http://112.124.2.247:88/mysite/ots/getNews?limit=4&type=1")
          .then((res) => {
            this.moyalist = res.body.data
          })
          .catch(function (res) {
            console.log(res)
          })
      },
      getfieldlist: function () {
        this.$http.get("http://112.124.2.247:88/mysite/ots/getNews?limit=4&type=2")
          .then((res) => {
            this.fieldlist = res.body.data
          })
          .catch(function (res) {
            console.log(res)
          })
      },
      gettechnologylist: function () {
        this.$http.get("http://112.124.2.247:88/mysite/ots/getNews?limit=4&type=3")
          .then((res) => {
            this.technologylist = res.body.data
          })
          .catch(function (res) {
            console.log(res)
          })
      },
      handleClick: function (tab, event) {
        console.log(tab, event);
      },
      showProduct: function (name) {
        this.activeItem = name
      },
      showNews1: function () {
        this.activeNews = 'news-moya'
      },
      showNews2: function () {
        this.activeNews = 'news-field'
      },
      showNews3: function () {
        this.activeNews = 'news-tech'
      },
    }
  }

</script>

<!--<style lang="scss" scoped="true" type="text/css">-->
<style lang='scss' scoped>


  @import "../../../static/base";

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
    height: 100%;

    img {
      position: absolute;
      width: 70%;
      top: 50%;
      left: 50%;
      display: inline-block;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
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
    height: 100px;
    padding-left: 110px;

    .news-img {
      position: absolute;
      width: 100px;
      height: 100px;
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
      margin-bottom: 10px;
      span{
        margin-right: 20px;
      }
    }

    p {
      line-height: 1.3em;
      margin:0;
      height: 3.9em;
      overflow: hidden;
      color: #666;
      font-size: 14px;
    }

  }

  a.news:hover {
    color: $yellow;

    .author {
      color: $yellow;
    }

  }

  .thumb-img {
    height: 460px;
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



















