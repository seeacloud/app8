<template>
    <div>
      <h2 class="news-title">{{archiveData.title}}</h2>
      <p class="author">发布时间： <span>{{archiveData.date}}</span> 发布者： <span>{{archiveData.author}}</span></p>
      <p class="news-content">{{archiveData.des}}</p>

      <div v-for="(item, index) in archiveData.contents" :key="index">
        <img :src="item.des" alt="" v-if="item.isimg=='yes'">
        <p class="news-content" v-if="item.isimg=='no'">{{item.des}}</p>
      </div>
      <router-link to="/" class="back-btn"><< 返回</router-link>
    </div>
</template>

<script>
    export default {

      created:function () {
          this.archiveID=this.$route.params.id
        this.getData()

      },
      data (){
        return {
          archiveData:{},
          archiveID:''
        }
      },
      methods:{
            getData:function () {
                this.archiveData=this.$route.params.id
              this.$http.get("http://localhost:8080/api/newslist")
                .then((res)=>{
                  var newsID=parseInt(this.$route.params.id)
                  this.archiveData=res.body.data[newsID]
                })
                .catch(function (res) {
                })
            }
      }
    }
</script>

<style lang='scss' scoped>
  @import "../../../static/base";
.news-title
{
  color: #333;
}
.author
{
  font-size: 12px;
  color: #aaa;
}
  .news-content
  {
    font-size: 14px;
    line-height: 1.8em;
    color: #666;
  }

  img
  {
    width: 100%;
    margin: 10px 0;
  }

  .back-btn
  {
    font-size: 12px;
    border: 1px solid $yellow;
    padding: 5px 10px;
    color: $yellow;
    margin-top: 20px;
    display: inline-block;

  }
  .back-btn:hover
  {
    background: $yellow;
    color: #fff;

  }

</style>


