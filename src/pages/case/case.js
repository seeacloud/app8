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

import Clients from './Clients.vue'
import CaseGroup from './CaseGroup.vue'
import Evaluation from './Evaluation'
import CaseDetail from './CaseDetail.vue'


Vue.use(ElementUI)
Vue.use(Router)

const routes=[
  {path:'/',name:'Clients', component:Clients},
  {path:'/case',name:'CaseGroup',component:CaseGroup},
  {path:'/evaluation',name:'Evaluation', component:Evaluation},
  {path:'/casedetail',component:CaseDetail}
]


const router=new Router({
  routes
})

new Vue({
  el:'#app',
  router,
  components:{HeaderItem, FooterItem, Banner,SideMenu, ControlBar, Clients, CaseGroup, Evaluation,CaseDetail},
  data:{
    linkary:[
      {title:'合作客户',url:'/'},
      {title:'成功案例',url:'/case'}
    ]
  }
})
