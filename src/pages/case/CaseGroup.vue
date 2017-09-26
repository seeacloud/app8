<template>
  <div class="article-con">

    <div class="header-page">
      <h1 class="title-page">成功案例</h1>
    </div>
    <div v-for="(item, index) in caselist" :key="index">
      <case-cell :caseinfo="item"></case-cell>

    </div>


  </div>
</template>

<script>
  import CaseCell from './CaseCell.vue'
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

  export default {
    data (){
      return {
        scrollWatch: true,
        caselist: ''
      }
    },
    components: {CaseCell},
    mounted: function () {
      window.scrollTo(0, 0)
      this.getCase()

    },
    methods: {
      getCase: function () {
        this.$http.get("http://112.124.2.247:88/mysite/ots/getNews?limit=20&type=5")
          .then((res) => {
            this.caselist = res.body.data
            console.log('caselist:',this.caselist)
          })
          .catch(function (res) {

          })
      }
    },
    destroyed: function () {
      this.scrollWatch = false
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/article.css';
  @import "../../../static/base";

  .article-con {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
  }


</style>
