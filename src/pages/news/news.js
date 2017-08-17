import Vue from 'vue'
import HeaderItem from '@/components/Header.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FooterItem from '@/components/Footer.vue'
import '../../../static/normalize.css'
import '../../../static/common.css'
import '../../assets/iconfont.css'
import Router from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
import ControlBar from '@/components/ControlBar.vue'

import News from './News.vue'
import RightMenu from './RightMenu.vue'
import Banner from '@/components/Banner'
import Archive from './Archive.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)


Vue.use(ElementUI)
Vue.use(Router)

const routes=[
  {path:'/',name:'News', component:News},
  {path:'/archives/:id',name:'archives', component:Archive}

]


const router=new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      setTimeout(() => {
        window.scrollTo(savedPosition.x, savedPosition.y)
      }, 200)
    }
    else {
      setTimeout(()=>{
        window.scrollTo(0,-200)

      },200)
    }
  }
})

new Vue({
  el:'#app',
  router,
  components:{HeaderItem, FooterItem, Banner,SideMenu, ControlBar,News, RightMenu,Archive},
  data:{

  }
})


