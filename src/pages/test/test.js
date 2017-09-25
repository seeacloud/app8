/**
 * Created by alex on 7/28/17.
 */


import VueResource from 'vue-resource'
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
  el:'#app',
  components:{},
  data:{
    msg:'msg from test',
    newsList:[]
    // apiUrl:'api/getNewsList'
  },
created: function () {
  this.getData()
},
  methods:{
    getData:function () {
      console.log('getting data...')
      this.$http.get("http://moyasz.com/mysite/ots/getNews?limit=5")
        // this.$http.jsonp('http://112.124.2.247:88/mysite/news/publish/getNews?limit=5',{credentials:true})
      // this.$http.get("http://localhost:8080/api/newslist")
        .then((res)=>{
        console.log(res.body)
          this.newsList=res.body.data
        })
        .catch(function (res) {
          console.log(res)
        })
    }
  }
})


