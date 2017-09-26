<template>
  <div>
    <div v-for="(item, index) in newslist" class="news-item" :key="index">

      <div class="content-wrap">

        <div class="title-img-wrap">
          <img :src="'http://www.shanmt.com/muye/images_test'+item.picurl" alt=""/>
        </div>
        <div class="news-content">

          <h2 class="news-title">{{item.title}}</h2>
          <div class="author"><span>作者：{{item.author}}</span><span>发布日期：{{item.pdate}}</span></div>
          <p class="des"> {{item.description}}</p>
          <router-link :to="'/archives/'+item.id" class="a-btn">了解详情</router-link>

        </div>

      </div>


    </div>
  </div>
</template>


<!--methods:{-->
<!--getData:function () {-->
<!--console.log('getting data...')-->
<!--this.$http.get("http://moyasz.com/mysite/ots/getNews?limit=5")-->
<!--// this.$http.jsonp('http://112.124.2.247:88/mysite/news/publish/getNews?limit=5',{credentials:true})-->
<!--// this.$http.get("http://localhost:8080/api/newslist")-->
<!--.then((res)=>{-->
<!--console.log(res.body)-->
<!--this.newsList=res.body.data-->
<!--})-->
<!--.catch(function (res) {-->
<!--console.log(res)-->
<!--})-->
<!--}-->
<!--}-->

<script>
  import VueResource from 'vue-resource'
  import Vue from 'vue'

  Vue.use(VueResource)
  export default {
    name: 'news',
    data (){
      return {
        newslist: ''
      }
    },
    created: function () {
      this.getdata()
    },
    methods: {
      getdata: function () {
        this.$http.get("http://112.124.2.247:88/mysite/ots/getNews?limit=20&type=1")
          .then((res) => {
            this.newslist = res.body.data
          })
          .catch(function (res) {
            console.log(res)
          })

      }
    }
    ,
    mounted: function () {
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/article.css";
  @import "../../../static/base";

  .content-wrap {
    position: relative;
    padding-left: 220px;
    height: 140px;
  }
  .title-img-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 120px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .thumb-wrap {
    position: absolute;
    width: 200px;
    height: 120px;
    left: 0;
    top: 0;
    overflow: hidden;
    img {
      height: 100%;
    }
  }

  .thumb-img {
  }

  .a-btn {
    font-size: 12px;
    color: $yellow;
    padding: 2px;
  }

  .a-btn:hover {
    color: #ffffff;
    background: $yellow;
  }

  .news-item {
    padding: 40px 0 20px 0;
    border-bottom: 1px dashed #cccccc;
  }

  h2.news-title {
    font-size: 24px;
    font-weight: normal;
    padding: 10px 0 5px 0;
    margin: 0;
  }

  .author {
    color: #aaaaaa;
    font-size: 12px;
    span {
      margin-right: 10px;
    }
  }

  .news-content {
    font-size: 14px;
    line-height: 20px;
    color: #666666;
    text-align: justify;
    .des{
      margin: 5px 0 5px 0;
      padding: 0;
      line-height: 1.3em;
      height: 3.9em;
      overflow: hidden;
      color: #777;
    }
  }

  .a-more {
    color: $yellow;
    font-size: 12px;
    padding: 3px 10px;
    border: 1px solid $yellow;
  }

  .a-more:hover {
    color: #ffffff;
    background: $yellow;
  }
</style>
