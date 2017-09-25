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
          <div class="sub-menu" id="sub-products" v-show="activeSubID=='products'" @mouseleave="mouseleaveSub" @click="clickSub">
              <table cellspacing="0" >
                <tr>
                  <td rowspan="17" class="sub-menu-head">
                    <i class="iconfont">&#xe634;</i>
                    <h4>产品与服务</h4>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>

                  <td class="td-bdr"><span class="sub-head">产品</span></td>
                  <td><span class="sub-head">服务</span></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html#/api/article/0" target="_self">山木通·建材家具厂家版</a></td>
                  <td><a href="products.html#/api/article/7">金蝶系产品实施开发</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html#/api/article/1" target="_self">山木通·建材家具门店版</a></td>
                  <td><a href="products.html#/api/article/8">互联网产品研发</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html#/api/article/2" target="_self">山木通·云订货平台</a></td>
                  <td><a href="products.html#/api/article/9">软件定制开发</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html#/api/article/3" target="_self">山木通·云进销存</a></td>
                  <td><a href="products.html#/api/article/10">IT人力资源服务</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html#/api/article/4">产权管理平台</a></td>
                  <td><a href="price.html" target="_self">服务价格</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html#/api/article/5">人力资源管理平台</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html#/api/article/6">物流行业管理平台</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </table>
          </div>

          <!--submenu-solution-->

          <div class="sub-menu" v-show="activeSubID=='solution'" id="sub-solution" @mouseleave="mouseleaveSub">
          <table cellspacing="0" >
            <tr>
              <td rowspan="20" class="sub-menu-head">
                <i class="iconfont">&#xe64c;</i>
                <h4>解决方案</h4>
              </td>
              <td></td>
            </tr>

            <tr>
              <td><a href="solution.html">EAS HR人事事务单据WEB化解决方案 </a></td>
            </tr>
            <tr>
              <td><a href="solution.html">第三方OA系统与EAS系统集成解决方案</a></td>
            </tr>
            <tr>
              <td><a href="solution.html">物流在线订舱解决方案</a></td>
            </tr>
            <tr>
              <td><a href="solution.html">产权管理系统解决方案</a></td>
            </tr>
            <tr>
              <td class="td-bdr"><a href="solution.html">人力资源管理系统解决方案</a></td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>

          <!--客户案例子菜单-->

          <div class="sub-menu" v-show="activeSubID=='case'" id="sub-case" @mouseleave="mouseleaveSub">
            <table cellspacing="0" >
              <tr>
                <td rowspan="8" class="sub-menu-head">
                  <i class="iconfont">&#xe668;</i>
                  <h4>客户案例</h4>
                </td>
              </tr>
              <tr><td></td></tr>
              <tr>
                <td ><a href="case.html#/">合作客户</a></td>
              </tr>
              <tr>
                <td ><a href="case.html#/case">成功案例</a></td>
              </tr>

              <tr>
                <td></td>
              </tr>
            </table>
          </div>

          <!--关于莫亚子菜单-->

          <div class="sub-menu" v-show="activeSubID=='about'" id="sub-about" @mouseleave="mouseleaveSub">
            <table cellspacing="0" >
              <tr>
                <td rowspan="20" class="sub-menu-head">
                  <i class="iconfont">&#xe606;</i>
                  <h4>关于莫亚</h4>
                </td>
              </tr>
              <tr><td></td></tr>
              <tr>
                <td ><a href="about.html">莫亚概况</a></td>
              </tr>

              <tr>
                <td ><a href="about.html#/glory">公司荣誉</a></td>
              </tr>
              <tr>
                <td ><a href="about.html#/culture">公司文化活动</a></td>
              </tr>
              <tr>
                <td ><a href="about.html#/contact">联系我们</a></td>
              </tr>
              <tr>
              <tr>
                <td ><a href="news.html">公司动态</a></td>
              </tr>
              <tr>
              <td></td>
              </tr>
            </table>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'header',
    props: ["activeitem"],
    data (){
      return {
        isActive: false,
        activeSubID: '',
        logo: './static/img/moya-logo.jpg',
        activeItem: 0,
        items: [
          {title: '首页', url: 'index.html', isActive: false, name: 'index', target: '_self', hasSub: false},
          {title: '产品与服务', url: 'products.html', isActive: false, name: 'products', target: '_self', hasSub: true},
          {title: '解决方案', url: 'solution.html', isActive: false, name: 'solution', target: '_self', hasSub: true},
          {title: '客户案例', url: 'case.html', isActive: false, name: 'case', target: '_self', hasSub: true},
          {title: '关于莫亚', url: 'about.html', isActive: false, name: 'about', target: '_self', hasSub: true},
          {title: '山木通·云平台', url: 'http://www.shanmt.com', isActive: false, name: '', target: '_blank', hasSub: true}
        ]
      }
    },
    methods: {
      showSubMenu: function (name) {
        this.activeSubID = name
      },
      mouseleaveSub: function () {
        this.activeSubID=''
      },
      clickSub:function () {
          this.activeSubID=''
      },
      onSmt:function () {
        this.activeSubID=''
      },
      toIndex:function () {
        window.open('index.html','_self')
      }
    }
  }


</script>

<style scoped="true" lang="scss">
  $yellow: #ec6600;

  .topband
  {
    height: 29px;
    font-size: 12px;
    border-bottom: 1px solid #eee;
    color:#999;
  }
  .sub-head
  {
    line-height: 1.2em;
    border-bottom: 2px solid $yellow;
  }
  .band-inner
  {
    width: 75%;
    margin: 0 auto;
    min-width: 1200px;
    height: 100%;
    line-height: 30px;
  }
  .band-content
  {
    width: 100%;
    text-align: right;
    .iconfont
    {
      font-size: 18px;
      line-height: 30px;
      vertical-align: bottom;
    }
  }
  .email-link
  {
    font-size: 12px;
    color:inherit;

  }
  .email-link:hover
  {
    color:red;
    .iconfont
    {
      color: red;
    }
  }


  .band-item
  {
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


  .sub-menu
  {
    position: absolute;
    top: 90px;
    z-index: 10;
    background: #fff;
    left: -20px;

    td
    {
      padding: 5px 40px;
      text-align: left;
      background: #fff;
    }
    th
    {
      text-align: left;
      background: #dddddd;
    }
    a
    {
      font-size: 14px;
      line-height: 24px;
      margin: 0;
    }
  }

  td.sub-menu-head
  {
    background: $yellow ;
    text-align: center ;
    vertical-align: middle;
    width: 150px ;
    padding: 0;
    i.iconfont
    {
      font-size: 48px;
      color: #fff;
    }
    h4
    {
      color: #fff;
      margin: 5px;
    }
  }
  .td-bdr
  {
    border-right: 1px solid #ddd;
  }

  #sub-solution
  {
    left: 50px;
    td.sub-menu-head
    {
      background: #3c84fb;
    }
  }

  #sub-case
  {
    left: 220px;
    td.sub-menu-head
    {
      background: #7bcd65;
    }
  }

  #sub-about
  {
    left: auto;
    right: 100px;
    td.sub-menu-head
    {
      background: #4bd4e4;
    }
  }
  @media screen and (max-width:1440px) {
    .nav-items ul li a
    {
      font-size: 20px;
    }
    .smt-link
    {
      font-size: 20px;
      height: 32px;
      line-height: 32px;
      border-radius: 16px;
      margin-top: 42px;
    }
  }
</style>
