import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FooterItem from '../../components/Footer.vue'
import '../../../static/normalize.css'
import '../../../static/common.css'
import '../../assets/iconfont.css'
import Router from 'vue-router'
import Banner from '../../components/Banner.vue'
import Smt from './Smt.vue'
import Chanq from './Chanq.vue'
import SideMenu from '../../components/SideMenu.vue'
import ControlBar from '../../components/ControlBar.vue'


Vue.use(ElementUI)
Vue.use(Router)

const routes=[
  {path:'/',name:'Smt', component:Smt},
  {path:'/chanq',name:'Chanq',component:Chanq}
]


const router=new Router({
  routes
})

new Vue({
  el:'#app',
  router,
  components:{HeaderItem, FooterItem, Banner,SideMenu, ControlBar},
  data:{
    linkary:[
      {title:'山木通 · 云管理平台',url:'/'},
      {title:'产权管理系统',url:'/chanq'},
      {title:'人力资源管理系统',url:'/hr'},
      {title:'物流行业管理系统',url:'/logistic'},
      {title:'金蝶EAS开发',url:'/eas'},
      {title:'软件定制开发',url:'/software'},
      {title:'IT人力资源服务',url:'/it'}
    ]
  }
})
