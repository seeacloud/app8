<template>
  <div class="article-con">
      <h1 class="article-title">合作客户</h1>

    <el-row v-for="(clientsrow, index) in clients" :key="index" :gutter="20" class="band-row">
      <el-col :span="6" v-for="(item, index) in clientsrow" :key="index" >
        <div class="grid-content">
          <div class="band-card">
            <img :src="'./static/img/logo/'+item.url" alt="" >
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default{
      data (){
          return {
              clients:[
                  [{url:'zhoudf.jpg'},{url:'ytg.jpg'},{url:'wank.jpg'},{url:'boshi.jpg'}],
                [{url:'antong.jpg'},{url:'szair.jpg'},{url:'guanz.jpg'},{url:'ruantdl.jpg'}],
                [{url:'kingdee.jpg'},{url:'haohxh.jpg'},{url:'hongjdl.jpg'},{url:'huaw.jpg'}],


              ]
          }
      }
  }
</script>

<style lang="scss" scoped="true">
  @import "../../../static/base";
  @import "../../../static/article.css";

  .grid-content
  {
    margin: 10px 0;
  }

  .brand-row
  {
    margin-bottom: 20px;
  }

.band-card
{
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100px;
  border: 1px solid #ddd;
  vertical-align: middle;
  text-align: center;
  img
  {
    position: absolute;
    width: 80%;
    display: inline-block;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
}


</style>
