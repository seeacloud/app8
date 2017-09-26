<template>
  <div class="article-con">
    <h1 class="article-title">{{casecontent.title}}</h1>
    <div class="author"><span>作者： {{casecontent.author}}</span><span>发布日期： {{casecontent.pdate}}</span></div>
    <div v-html="casecontent.htmlcontent"></div>


    <router-link to="/case" class="link-back">返回</router-link>

  </div>
</template>

<!--getCase: function () {-->
<!--this.$http.get("http://112.124.2.247:88/mysite/ots/getNews?limit=5&type=5")-->
<!--.then((res) => {-->
<!--this.caselist = res.body.data-->
<!--console.log('caselist:',this.caselist)-->
<!--})-->
<!--.catch(function (res) {-->

<!--})-->
<!--}-->
<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

  export default {
    data () {
      return {
        casecontent: '',
        caseId: ''
      }
    },
    mounted: function () {
      this.caseId = this.$route.params.id
      this.getCaseContent(this.caseId)
    },
    methods: {
      getCaseContent: function (caseId) {
        this.$http.get('http://112.124.2.247:88/mysite/ots/getNewById?id=' + caseId)
          .then((res) => {
            this.casecontent = res.body.data
          })
          .catch(function (res) {

          })
      }
    }
  }
</script>

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
    span {
      margin-right: 20px;
    }
  }

  p {
    font-size: 14px;
    color: #666666;
    text-align: justify;
    line-height: 1.8em;
    text-indent: 24px;
    margin: 30px 0;
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
    padding: 2px;
    font-size: 14px;
  }

  .link-back:hover {
    background: $yellow;
    color: #ffffff;
  }
</style>
