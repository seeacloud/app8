<template>
  <div class="container">

    <div class="topband">
      <div class="band-inner">
        <div class="band-content">
          <span class="band-item"><i class="iconfont">&#xe620;</i>咨询电话：0755-8657 5595</span>
          <a href="https://exmail.qq.com/login" target="_blank" class="email-link"><i class="iconfont">&#xe73f;</i>公司邮箱</a>

        </div>
      </div>
    </div>

    <div class="inner">
      <img :src="logo" alt="" class="logo-img" @click="toIndex">
      <!--<a href="https://exmail.qq.com/login" target="_blank" class="email-link"><i class="iconfont">&#xe73f;</i></a>-->
      <!--<a href="http://www.shanmt.com" target="_blank" class="smt-link" @mouseover="onSmt">山木通&middot;云平台</a>-->
      <div class="nav-items">
        <ul content="nav-items">
          <li v-for="(item, index) in items" :key="index">
            <a v-bind:href="item.url" v-bind:class="{active: activeitem==item.name}"
               v-bind:target="item.target" @mouseover="showSubMenu(item.name)" :id="item.name">{{item.title}}</a>
          </li>
          <div class="sub-menu" id="sub-products" v-show="activeSubID=='products'" @mouseleave="mouseleaveSub"
               @click="clickSub" ref="subMenuCon">

            <div class="sub-menu-head" style="background:#3c84fb;">
              <table class="head-table" ref="ptable">
                <tr>
                  <td style="background:#3c84fb;">
                    <i class="iconfont">&#xe634;</i>
                    <h4>产品与服务</h4></td>
                </tr>
              </table>
            </div>
            <div class="sub-menu-content" id="">
              <div class="content-inner" style="border-right:1px solid #eeeeee;">
                <a class="sub-item" v-for="(pitem, index) in plist" :key="index"
                   :href="'products.html#/product/'+pitem.id"
                   @click="gotopage('products.html#/product/'+pitem.id, $event)">
                  {{pitem.title}}
                </a>
              </div>
            </div>
            <div class="sub-menu-content">
              <div class="content-inner">
                <a class="sub-item" v-for="(sitem, index) in slist" :key="index"
                   :href="'products.html#/product/'+sitem.id"
                   @click="gotopage('products.html#/product/'+sitem.id, $event)">
                  {{sitem.title}}
                </a>
              </div>
            </div>
          </div>


          <!--submenu-solution-->

          <div class="sub-menu" v-show="activeSubID=='solution'" id="sub-solution" @mouseleave="mouseleaveSub">
            <div class="sub-menu-head" style="background:#85c34a;">
              <table class="head-table" ref="solutiontable">
                <tr>
                  <td>
                    <i class="iconfont">&#xe64c;</i>
                    <h4>解决方案</h4></td>
                </tr>
              </table>
            </div>
            <div class="sub-menu-content">
              <div class="content-inner">
                <a class="sub-item" v-for="(item, index) in solutionlist" :key="index"
                   :href="'solution.html#/solutions/'+item.id"
                   @click="gotopage('solution.html#/solutions/'+item.id, $event)">
                  {{item.title}}
                </a>
              </div>


            </div>
          </div>

          <!--客户案例子菜单-->

          <div class="sub-menu" v-show="activeSubID=='case'" id="sub-case" @mouseleave="mouseleaveSub">
            <div class="sub-menu-head" style="background:#b34dba;">
              <table class="head-table" ref="casetable">
                <tr>
                  <td>
                    <i class="iconfont">&#xe668;</i>
                    <h4>客户案例</h4></td>
                </tr>
              </table>

            </div>
            <div class="sub-menu-content">
              <div class="content-inner">
                <a class="sub-item" v-for="(item,index) in caselist" :key="index" :href="'case.html#/case/'+item.id"
                   @click="gotopage('case.html#/case/'+item.id, $event)">
                  {{item.title}}
                </a>
              </div>
            </div>
          </div>

          <!--关于莫亚子菜单-->

          <div class="sub-menu" v-show="activeSubID=='about'" id="sub-about" @mouseleave="mouseleaveSub">
            <div class="sub-menu-head" style="background:#ec6600;">
              <table class="head-table" ref="abouttable">
                <tr>
                  <td>
                    <i class="iconfont">&#xe606;</i>
                    <h4>关于莫亚</h4></td>
                </tr>
              </table>

            </div>
            <div class="sub-menu-content">
              <div class="content-inner">
                <a class="sub-item" v-for="(item,index) in aboutlist" :key="index" :href="item.link"
                   @click.native="flushCom">
                  {{item.title}}
                </a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

  export default{
    name: 'header',
    props: ["activeitem"],
    data (){
      return {
        plist: '',
        slist: '',
        caselist: '',
        solutionlist: '',
        isActive: false,
        activeSubID: '',
        aboutlist: [
          {title: '莫亚概况', link: 'about.html'},
          {title: '公司荣誉', link: 'about.html#/glory'},
          {title: '文化活动', link: 'about.html#/culture'},
          {title: '联系我们', link: 'about.html#/contact'},
          {title: '公司动态', link: 'news.html'}
        ],
        logo: './static/img/moya-logo.jpg',
        activeItem: 0,
        items: [
          {title: '首页', url: 'index.html', isActive: false, name: 'index', target: '_self', hasSub: false},
          {
            title: '产品与服务',
            url: 'products.html#/product/46694cfee788457f8c73bab1ef39120a',
            isActive: false,
            name: 'products',
            target: '_self',
            hasSub: true
          },
          {title: '解决方案', url: 'solution.html', isActive: false, name: 'solution', target: '_self', hasSub: true},
          {title: '客户案例', url: 'case.html', isActive: false, name: 'case', target: '_self', hasSub: true},
          {title: '关于莫亚', url: 'about.html', isActive: false, name: 'about', target: '_self', hasSub: true},
          {title: '山木通·云平台', url: 'http://www.shanmt.com', isActive: false, name: '', target: '_blank', hasSub: true}
        ]
      }
    },
    mounted: function () {
      this.getProduct()
      this.getService()
      this.getSolution()
      this.getCase()
    },
    methods: {
      gotopage: function (url, evt) {
        console.log('evt target:', evt.target.href)
        evt.target.href = url
        window.location.assign(url)
        window.location.reload()

      },
      getProduct: function () {
        this.$http.get("http://112.124.2.247:88/mysite/ots/getNews?limit=20&type=6")
          .then((res) => {
            this.plist = res.body.data
            //因为子菜单的单条高度为34px
            this.$refs.ptable.style.height = this.plist.length * 35 + 20 + 'px'

          })
          .catch(function (res) {

          })
      },
      getService: function () {
        this.$http.get('http://112.124.2.247:88/mysite/ots/getNews?limit=20&type=7')
          .then((res) => {
            this.slist = res.body.data
//            this.$refs.ptable.style.height = this.plist.length * 35 + 20 + 'px'

          })
          .catch(function (res) {

          })
      },
      getCase: function () {
        this.$http.get('http://112.124.2.247:88/mysite/ots/getNews?limit=20&type=5')
          .then((res) => {
            this.caselist = res.body.data
            this.$refs.casetable.style.height = this.caselist.length * 35 + 20 + 'px'
            this.$refs.abouttable.style.height = this.aboutlist.length * 35 + 20 + 'px'
          })
          .catch(function (res) {

          })
      },
      getSolution: function () {
        this.$http.get('http://112.124.2.247:88/mysite/ots/getNews?limit=20&type=4')
          .then((res) => {
            this.solutionlist = res.body.data
            this.$refs.solutiontable.style.height = this.solutionlist.length * 35 + 20 + 'px'

          })
          .catch(function (res) {

          })
      },
      flushCom: function () {
        window.history.go(0)
        console.log('flush...')

      },
      showSubMenu: function (name) {
        this.activeSubID = name
      },
      mouseleaveSub: function () {
        this.activeSubID = ''
      },
      clickSub: function () {
        this.activeSubID = ''
      },
      onSmt: function () {
        this.activeSubID = ''
      },
      toIndex: function () {
        window.open('index.html', '_self')
      }
    }
  }


</script>

<style scoped="true" lang="scss">
  @import '../../static/base';

  $yellow: #ec6600;

  .topband {
    height: 29px;
    font-size: 12px;
    border-bottom: 1px solid #eeeeee;
    color: #999999;
  }

  .sub-head {
    line-height: 1.2em;
    border-bottom: 2px solid $yellow;
  }

  .band-inner {
    width: 75%;
    margin: 0 auto;
    min-width: 1200px;
    height: 100%;
    line-height: 30px;
  }

  .band-content {
    width: 100%;
    text-align: right;
    .iconfont {
      font-size: 18px;
      line-height: 30px;
      vertical-align: bottom;
    }
  }

  .email-link {
    font-size: 12px;
    color: inherit;
  }

  .email-link:hover {
    color: red;
    .iconfont {
      color: red;
    }
  }

  .band-item {
    font-size: 12px;
    margin-right: 20px;
  }

  .container {
    height: 120px;
    background: #ffffff;
    position: relative;
    min-width: 1200px;
  }

  .inner {
    position: relative;
    display: block;
    width: 75%;
    margin: 0 auto;
    height: 90px;
    min-width: 1200px;
  }

  .nav-items {
    float: right;
    list-style: none;
    display: inline-block;
    ul {
      position: relative;
      margin: 0;
      padding: 0;
    }
    li {
      display: inline-block;
      position: relative;
    }
    a {
      position: relative;
      display: inline-block;
      line-height: 90px;
      margin: 0 0 0 20px;
      font-size: 24px;
    }
    a:hover {
      color: $yellow;
    }

    i.iconfont {
      font-size: 24px;
    }
  }

  .active {
    color: $yellow;
  }

  .nav-items:after {
    content: '';
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
    overflow: hidden;
  }

  .active:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    background: $yellow;
    left: 0;
    top: 60px;
  }

  .logo-img {
    height: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0 auto 0;
    cursor: pointer;
  }

  .smt-link {
    display: inline-block;
    float: right;
    color: #a9263f;
  }

  .smt-link:after {
    content: '';
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
    overflow: hidden;
  }

  .smt-link:hover {
    color: red;
    border-color: red;
  }

  .sub-menu {
    position: absolute;
    top: 90px;
    z-index: 10;
    background: #ffffff;
    left: -20px;

    td {
      padding: 5px 40px;
      text-align: left;
      background: #ffffff;
    }
    th {
      text-align: left;
      background: #dddddd;
    }
    a {
      font-size: 14px;
      line-height: 24px;
      margin: 0;
    }
  }

  td.sub-menu-head {
    background: $yellow;
    text-align: center;
    vertical-align: middle;
    width: 150px;
    padding: 0;
    i.iconfont {
      font-size: 48px;
      color: #ffffff;
    }
    h4 {
      color: #ffffff;
      margin: 5px;
    }
  }

  .td-bdr {
    border-right: 1px solid #dddddd;
  }

  #sub-solution {
    left: 50px;
    td.sub-menu-head {
      background: #3c84fb;
    }
  }

  #sub-case {
    left: 220px;
    td.sub-menu-head {
      background: #7bcd65;
    }
  }

  #sub-about {
    left: auto;
    right: 100px;
    td.sub-menu-head {
      background: #4bd4e4;
    }
  }

  @media screen and (max-width: 1440px) {
    .nav-items ul li a {
      font-size: 20px;
    }
    .smt-link {
      font-size: 20px;
      height: 32px;
      line-height: 32px;
      border-radius: 16px;
      margin-top: 42px;
    }
  }

  .sub-menu-head {
    display: inline-block;
    width: 150px;
    text-align: center;
    color: #ffffff;
    float: left;
    i.iconfont {
      font-size: 48px;
    }
  }

  .head-table {
    width: 100%;
    height: 100%;
    min-width: 120px;
    i.iconfont {
      display: inline-block;
    }
    h4 {
      text-align: center;
      margin-top: 5px;
      margin-bottom: 10px;
    }
    tr {
      width: 100%;
    }
    td {
      background: none;
      padding: 0;
      text-align: center;
      vertical-align: middle;
    }
  }

  .sub-menu-content {
    display: inline-block;
    float: left;
    padding: 10px;
  }

  .content-inner {
    padding: 0 20px 0 20px;
  }

  .sub-item {
    display: block !important;
    height: 35px;
    line-height: 35px;
    color: #666666;
  }
</style>
