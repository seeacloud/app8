<template>
    <div class="article-con">
      <h1 class="article-title">公司文化活动</h1>

      <el-row class="el-row" :gutter="20">
        <el-col v-for="(item,index) in imgs" :key="index" class="el-col" :span="6" >
          <div class="grid-content">
            <div class="img-wrap">
              <img :src="item.url" alt=""/>

            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                imgs:[
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'},
                  {url:'../../../static/img/culture/moya1.jpg'}
                ]
            }
        }
    }
</script>

<style lang='scss' scoped>
  @import "../../../static/article.css";
  @import "../../../static/base.scss";

  .el-row
  {
    font-size: 0;
  }
  .el-col
  {
    margin-bottom: 20px;
  }

.grid-content
{
  .img-wrap
  {
    height: 150px;
    overflow: hidden;
  }
  img
  {
    width: 100%;
  }
}


</style>
