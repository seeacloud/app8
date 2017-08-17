import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FooterItem from '../../components/Footer.vue'
import '../../../static/normalize.css'
import '../../../static/common.css'
import '../../assets/iconfont.css'
import Banner from '../../components/Banner.vue'

import ControlBar from '../../components/ControlBar.vue'
import PriceCard from './PriceCard.vue'


Vue.use(ElementUI)


new Vue({
  el:'#app',
  components:{HeaderItem, FooterItem, Banner, ControlBar, PriceCard},
  data:{

  }
})
