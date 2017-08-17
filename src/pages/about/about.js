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
import SideMenu from '../../components/SideMenu.vue'
import ControlBar from '../../components/ControlBar.vue'


import AboutMoya from './AboutMoya'
import Contact from './Contact'
import Glory from './Glory.vue'
import Culture from './Culture.vue'


Vue.use(ElementUI)
Vue.use(Router)

const routes=[
  {path:'/',name:'AboutMoya', component:AboutMoya},
  {path:'/contact',name:'Contact',component:Contact},
  {path:'/glory',name:'Glory',component:Glory},
  {path:'/culture', name:'Culture',component:Culture}


]


const router=new Router({
  routes
})

new Vue({
  el:'#app',
  router,
  components:{HeaderItem, FooterItem, Banner,SideMenu, ControlBar, Glory, Culture},
  data:{
    linkary:[
      {title:'莫亚简介',url:'/'},
      {title:'联系我们',url:'/contact'}

    ]
  }
})
