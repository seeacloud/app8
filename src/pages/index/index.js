/**
 * Created by alex on 7/19/17.
 */

import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Swiper from './Swiper.vue'
import FooterItem from '../../components/Footer.vue'
import '../../../static/normalize.css'
import '../../../static/common.css'
import '../../assets/iconfont.css'
import IconGroup from './IconGroup.vue'
import MainContent from './MainContent.vue'
import ControlBar from '../../components/ControlBar.vue'


Vue.use(ElementUI)

new Vue({
  el: '#app',
  components: {HeaderItem, Swiper, FooterItem, IconGroup, MainContent, ControlBar}
})

