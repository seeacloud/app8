<template>
    <div class="article-con">


      <h1>{{article.title}}</h1>
      <div class="author">作者： <span>{{article.author}}</span> 日期： <span>{{article.date}}</span></div>

      <div v-for="(item, index) in article.content" :key="index">
        <img :src="item" alt="" v-if="item.indexOf('.jpg')>=0">
        <p v-if="item.indexOf('.jpg')<0">{{item}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                articleId:'xxx',
              article:''
            }
        },
      mounted:function () {
        console.log('route is:',this.$route.params.id)
        this.articleId=this.$route.params.id
        this.$http.get('/api/article/'+this.articleId)
          .then((res)=>{
            this.article=res.body
          })
        window.scrollTo(0,0)
      },
      watch:{
        '$route' (to, from)
        {
          this.articleId=this.$route.params.id
          this.$http.get('/api/article/'+this.articleId)
            .then((res)=>{
              this.article=res.body
            })
          window.scrollTo(0,0)
        }
      }
    }
</script>

<style lang='scss' scoped>
  @import "../../static/article.css";
@import "../../static/base.scss";
  @import "../../static/normalize.css";

  img
  {
    width: 70%;
    margin: 20px 15% 5px 15%;
  }

  h1
  {
    text-align: center;
    margin-bottom: 5px;
  }
  .author
  {
    text-align: center;
    color: #999;
    font-size: 12px;
  margin-bottom:20px;
    span
    {
      margin-right: 10px;
    }
  }

p
{
  font-size: 14px;
  line-height: 1.5em;
  text-indent: 24px;
  color: #333;
  font-weight: normal;
}

  .img-title
  {
    text-align: center;
    font-size: 12px;
    margin-bottom: 20px;
  }



</style>
