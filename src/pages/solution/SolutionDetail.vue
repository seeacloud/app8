<template>
  <div class="article-con">
    <h1 class="article-title">{{solution.title}}</h1>
    <div class="author"><span>作者：{{solution.author}}</span> <span>发布日期： {{solution.pdate}}</span></div>
    <div v-html="solution.htmlcontent" class="html-content"></div>
    <router-link to="/" class="link-back">返回</router-link>

  </div>
</template>

<script>

  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

  export default {
    data () {
      return {
        solution: ''
      }
    },
    methods: {
      getSolution: function (sId) {
        this.$http.get('http://112.124.2.247:88/mysite/ots/getNewById?id=' + sId)
          .then((res) => {
            this.solution = res.body.data
            console.log('solution is:,' ,this.solution)
          })
          .catch(function (res) {
          })
      }
    },
    created: function () {
      this.getSolution(this.$route.params.id)

    }
  }
</script>

<!--getnews: function (newsId) {-->
<!--this.$http.get('http://112.124.2.247:88/mysite/ots/getNewById?id=' + newsId)-->
<!--.then((res)=>{-->
<!--//            console.log(res.body)-->
<!--this.news=res.body.data-->
<!--})-->
<!--.catch(function (res) {-->
<!--//            console.log(res)-->
<!--})-->
<!--}-->

<style lang='scss' scoped>
  @import "../../../static/article.css";
  @import "../../../static/base.scss";

  .article-title {
    margin-bottom: 5px;
  }

  .author {
    font-size: 12px;
    color: #999999;
    text-align: center;
  }

  .html-content {
  }

  p {
    font-size: 14px;
    color: #666666;
    text-align: justify;
    line-height: 1.8em;
    text-indent: 24px;
    margin: 30px 0;
    img {
      width: 60%;
      margin-left: 20%;
    }
  }

  img {
    display: block;
    width: 70%;
    margin-left: 15%;
    margin-bottom: 5px;
  }

  .img-title {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #666666;
  }

  .link-back {
    color: $yellow;
    font-size: 14px;
  }

  .link-back:hover {
    background: $yellow;
    color: #ffffff;
  }
</style>
