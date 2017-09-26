import Vue from "vue";
import HeaderItem from "../../components/Header.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";
import FooterItem from "../../components/Footer.vue";
import "../../../static/normalize.css";
import "../../../static/common.css";
import "../../assets/iconfont.css";
import Router from "vue-router";
import Banner from "../../components/Banner.vue";
import SideMenu from "../../components/SideMenu.vue";
import ControlBar from "../../components/ControlBar.vue";
import ArticleTemplate from "../../components/ArticleTemplate.vue";
import VueResource from "vue-resource";
import ProductDetail from "./ProductDetail.vue";
import '../../../static/article.css'


Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueResource)

const routes = [
  // {path:'/',name:'Smt', component:Smt},
  // {path:'/chanq',name:'Chanq',component:Chanq},
  // {path:'/api/article/:id',name:'kingdee', component:ArticleTemplate},
  {path: '/product/:id', component: ProductDetail}

]

const router = new Router({
  routes
})

new Vue({
  el: '#app',
  router,
  components: {HeaderItem, FooterItem, Banner, SideMenu, ControlBar, ArticleTemplate, ProductDetail},
  data: {
    productList:'',
    serviceList:'',
    linkary: [
      {title: '山木通·建材家具厂家版', url: '/product/3.6219736616337408E17'},
      {title: '山木通·建材家具门店版', url: '/product/3.6220280804212736E17'},
      {title: '山木通·云订货平台', url: '/product/2'},
      {title: '山木通·云进销存', url: '/product/3'},
      {title: '产权管理系统', url: '/product/4'},
      {title: '人力资源管理系统', url: '/product/5'},
      {title: '物流行业管理系统', url: '/product/6'}
    ],
    linkary2: [
      {title: '金蝶系产品实施开发', url: '/product/7'},
      {title: '互联网产品研发', url: '/product/8'},
      {title: '软件定制开发', url: '/product/9'},
      {title: 'IT人力资源服务', url: '/product/10'}
    ]
  },
  mounted:function () {
    this.getProduct()
    this.getService()
  },
  methods:{
    getProduct:function () {
      this.$http.get("http://112.124.2.247:88/mysite/ots/getNews?limit=20&type=6")
        .then((res)=>{
        this.productList=res.body.data
        })
        .catch(function (res) {

        })
    },
    getService:function () {
      this.$http.get('http://112.124.2.247:88/mysite/ots/getNews?limit=20&type=7')
        .then((res)=>{
        this.serviceList=res.body.data
        })
        .catch(function (res) {

        })
    }
  }
})
let sMenu = document.querySelector('#side-menu')
let mWid = document.querySelector('#side-menu').offsetWidth

console.log('mWid is:', mWid)

window.onscroll = function () {
  var sTop = document.documentElement.scrollTop || document.body.scrollTop
  // console.log('sTop is:',sTop)

  function hasClass(cla, el) {
    if (el.className.trim().length === 0) return false
    let allClass = el.className.trim().split(' ')
    return allClass.indexOf(cla) > -1

  }

  function addClass(cla, el) {
    if (!hasClass(cla, el)) {
      if (el.setAttribute) {
        el.setAttribute('class', el.getAttribute('class') + ' ' + cla)
      }
      else {
        el.className = el.className + ' ' + cla
      }
    }
  }

  function delClass(cla, el) {
    if (hasClass(cla, el)) {
      if (el.setAttribute) {
        el.setAttribute('class', el.getAttribute('class').replace(cla, ''))
      } else {
        el.className = el.className.replace(cla, '')
      }
    }

  }

  if (sTop < 400) {
    // delClass('con-fixed',sMenu)
  }

  if (sTop >= 400) {

    // console.log('class name is:', sMenu.className)
    // if(!hasClass('con-fixed',sMenu))
    // {
    //   addClass('con-fixed',sMenu)
    //   sMenu.style.width=mWid+'px'
    // }
  }

}

// sTop = document.documentElement.scrollTop || document.body.scrollTop;
