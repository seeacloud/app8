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
import ArticleTemplate from '../../components/ArticleTemplate.vue'


Vue.use(ElementUI)
Vue.use(Router)

const routes=[
  {path:'/',name:'Smt', component:Smt},
  {path:'/chanq',name:'Chanq',component:Chanq},
  {path:'/kingdee',component:ArticleTemplate}

]


const router=new Router({
  routes
})

new Vue({
  el:'#app',
  router,
  components:{HeaderItem, FooterItem, Banner,SideMenu, ControlBar, ArticleTemplate},
  data:{
    linkary:[
      {title:'山木通·建材家具厂家版',url:'/'},
      {title:'山木通·建材家具门店版',url:'/'},
      {title:'山木通·云订货平台',url:'/'},
      {title:'山木通·云进销存',url:'/'},
      {title:'产权管理系统',url:'/chanq'},
      {title:'人力资源管理系统',url:'/hr'},
      {title:'物流行业管理系统',url:'/logistic'}

    ],
    linkary2:[
      {title:'金蝶系产品实施开发',url:'/kingdee'},
      {title:'互联网产品研发',url:'/software'},
      {title:'软件定制开发',url:'/software'},
      {title:'IT人力资源服务',url:'/it'}
    ],
  }
})
let sMenu=document.querySelector('#side-menu')
let mWid=document.querySelector('#side-menu').offsetWidth

console.log('mWid is:',mWid)

window.onscroll=function () {
  var sTop=document.documentElement.scrollTop || document.body.scrollTop
  // console.log('sTop is:',sTop)

  function hasClass(cla, el) {
    if(el.className.trim().length===0) return false
    let allClass=el.className.trim().split(' ')
    return allClass.indexOf(cla)>-1

  }

  function addClass(cla,el) {
    if(!hasClass(cla,el))
    {
      if(el.setAttribute)
      {
        el.setAttribute('class',el.getAttribute('class')+' '+cla)
      }
      else {
        el.className=el.className+' ' +cla
      }
    }
  }

  function delClass(cla,el) {
    if(hasClass(cla,el))
    {
      if(el.setAttribute)
      {
        el.setAttribute('class',el.getAttribute('class').replace(cla,''))
      }else{
        el.className=el.className.replace(cla,'')
      }
    }

  }

  if(sTop<400)
  {
    // delClass('con-fixed',sMenu)
  }

  if(sTop>=400)
  {

    // console.log('class name is:', sMenu.className)
    // if(!hasClass('con-fixed',sMenu))
    // {
    //   addClass('con-fixed',sMenu)
    //   sMenu.style.width=mWid+'px'
    // }
  }

}

// sTop = document.documentElement.scrollTop || document.body.scrollTop;
