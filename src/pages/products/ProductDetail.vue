<template>
  <div class="article-con" v-cloak>
    <h2 class="news-title">{{news.title}}</h2>
    <div class="author" v-cloak>发布时间： <span>{{news.pdate}}</span> 发布者： <span>{{news.author}}</span></div>
    <div v-html="news.htmlcontent"></div>
    <!--<router-link to="/" class="back-btn">返回</router-link>-->
  </div>
</template>

<script>
  export default {

    created: function () {
    },
    data (){
      return {
        articleid: '',
        archiveData: {},
        archiveID: '',
        news: ''
      }
    },
    watch: {
      '$route'(to, from){
        this.articleId = this.$route.params.id
        this.getnews(this.$route.params.id)
        window.scrollTo(0, 0)
      }
    },
    mounted: function () {
      window.scrollTo(0, 0)
      this.articleid = this.$route.params.id
      console.log('articleid is:', this.articleid)
      this.getnews(this.$route.params.id)
//      http://localhost/ots/getNewById?id=8c8b792335f842a9aa30ddcec93cbd59
    },
    methods: {
      getnews: function (newsId) {
        this.$http.get('http://112.124.2.247:88/mysite/ots/getNewById?id=' + newsId)
          .then((res) => {
//            console.log(res.body)
            this.news = res.body.data
          })
          .catch(function (res) {
//            console.log(res)
          })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/base";

  [v-cloak] {
    display: none !important;
  }

  .news-title {
    color: #333333;
    text-align: center;
  }

  .author {
    font-size: 12px;
    color: #aaaaaa;
    text-align: center;
  }

  p {
    text-indent: 24px;
  }

  .news-content {
    font-size: 14px;
    line-height: 1.8em;
    color: #666666;
  }

  img {
    width: 60%;
    margin: 20px 20% 5px 20%;
  }

  .back-btn {
    font-size: 12px;
    color: $yellow;
    margin-top: 20px;
    display: inline-block;
    padding: 2px;
  }

  .back-btn:hover {
    background: $yellow;
    color: #ffffff;
  }

  .img-title {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    font-size: 12px;
    color: #666666;
  }

</style>


