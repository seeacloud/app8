<template>
    <div class="article-con">
      <h1 class="article-title">公司荣誉</h1>

      <el-row :gutter="30">
        <el-col v-for="(item,index) in certs" :key="index" :span="8">
          <div class="grid-content">
            <div>
              <div class="img-wrap">
                <img :src="item.url" alt=""/>
              </div>
              <div class="title">{{item.title}}</div>
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
                certs:[
                  {title:'深圳市高新技术企业',url:'../../../static/img/certification/szht.jpg'},
                  {title:'软件产品证书',url:'../../../static/img/certification/smt.jpg'},
                  {title:'深圳市高新技术企业',url:'../../../static/img/certification/szht.jpg'},
                  {title:'深圳市高新技术企业',url:'../../../static/img/certification/szht.jpg'},
                  {title:'深圳市高新技术企业',url:'../../../static/img/certification/szht.jpg'},
                  {title:'深圳市高新技术企业',url:'../../../static/img/certification/szht.jpg'},
                  {title:'深圳市高新技术企业',url:'../../../static/img/certification/szht.jpg'}

                ]
            }
        }
    }
</script>

<style lang='scss' scoped>
  @import "../../../static/article.css";
  @import "../../../static/base.scss";

.img-wrap
{
  img
  {
    width: 100%;
  }

}
  .title
  {
    text-align: center;
    font-size: 14px;
  }

</style>
