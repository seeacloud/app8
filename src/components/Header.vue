<template>
  <div class="container">
    <div class="inner">
      <img :src="logo" alt="" class="logo-img" @click="toIndex">
      <a href="https://exmail.qq.com/login" target="_blank" class="email-link"><i class="iconfont">&#xe73f;</i></a>
      <a href="http://www.shanmt.com" target="_blank" class="smt-link" @mouseover="onSmt">山木通</a>
      <div class="nav-items">
        <ul content="nav-items">
          <li v-for="(item, index) in items" :key="index">
            <a v-bind:href="item.url" v-bind:class="{active: activeitem==item.name}"
               v-bind:target="item.target" @mouseover="showSubMenu(item.name)" :id="item.name">{{item.title}}</a>
          </li>
          <div class="sub-menu" id="sub-products" v-show="activeSubID=='products'" @mouseleave="mouseleaveSub">
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

                  <td class="td-bdr">产品</td>
                  <td>服务</td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html" target="_self">山木通·建材家具厂家版</a></td>
                  <td><a href="">金蝶系产品实施开发</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="products.html#/chanq" target="_self">山木通·建材家具门店版</a></td>
                  <td><a href="">软件定制开发</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="">山木通·云订货平台</a></td>
                  <td><a href="">IT人力资源服务</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="">山木通·云进销存</a></td>
                  <td><a href="">互联网产品研发</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="">产权管理平台</a></td>
                  <td><a href="price.html" target="_self">服务价格</a></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="">人力资源管理平台</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="td-bdr"><a href="">物流行业管理平台</a></td>
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
              <td>解决方案</td>
            </tr>
            <tr>
              <td><a href="">EAS HR人事事务单据WEB化解决方案 </a></td>
            </tr>
            <tr>
              <td><a href="">第三方OA系统与EAS系统集成解决方案</a></td>
            </tr>
            <tr>
              <td><a href="">物流在线订舱解决方案</a></td>
            </tr>
            <tr>
              <td><a href="">产权管理系统解决方案</a></td>
            </tr>
            <tr>
              <td class="td-bdr"><a href="">人力资源管理系统解决方案</a></td>
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
                <td >客户案例</td>
              </tr>


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

                <td >关于莫亚</td>
              </tr>
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
          {title: '关于莫亚', url: 'about.html', isActive: false, name: 'about', target: '_self', hasSub: true}
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
    height: 100%;
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
      line-height: 120px;
      margin: 0 20px;
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
    top: 80px;
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
    border: 1px solid #a9263f;
    color: #a9263f;
    padding: 0 20px;
    font-size: 24px;
    height: 36px;
    line-height: 36px;
    border-radius: 18px;
    margin-top: 40px;
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

  .email-link .iconfont {
    display: inline-block;
    float: right;
    font-size: 32px;
    padding: 44px 0 0 20px;
    vertical-align: bottom;
  }

  .email-link .iconfont:hover {
    color: red;
  }

  .sub-menu
  {
    position: absolute;
    top: 120px;
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
    right: 0;
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
