<template>
    <div class="article-con">
      <h1 class="article-title">公司荣誉</h1>

      <el-row :gutter="30">
        <el-col v-for="(item,index) in certs" :key="index" :span="8">
          <div class="grid-content">
            <div class="glory-item">
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
                  {title:'深圳市高新技术企业',url:'./static/img/certification/szht.jpg'},
                  {title:'山木通木业行业管理平台V1.0',url:'./static/img/certification/smt.jpg'},
                  {title:'产权管理平台V1.0',url:'./static/img/certification/chanqgl.jpg'},
                  {title:'山木通木业管理平台V1.0',url:'./static/img/certification/shanmt.jpg'},
                  {title:'飞行员休假管理系统V1.0',url:'./static/img/certification/feixy.jpg'},
                  {title:'管理驾驶舱V1.0',url:'./static/img/certification/guanljsc.jpg'},
                  {title:'山木通云管理平台V2.0',url:'./static/img/certification/shanmt2.0.jpg'},
                  {title:'航运订舱电商平台V2.0',url:'./static/img/certification/hangydc.jpg'},
                  {title:'山木通手机APP软件V1.0',url:'./static/img/certification/shanmtApp.jpg'},
                  {title:'2013金蝶优秀服务伙伴',url:'./static/img/certification/2013.jpg'},
                  {title:'2014金蝶优秀服务伙伴',url:'./static/img/certification/2014.jpg'},
                  {title:'2015金蝶优秀服务伙伴',url:'./static/img/certification/2015.jpg'},
                  {title:'2016金蝶优秀服务伙伴',url:'./static/img/certification/2016.jpg'},
                  {title:'2017金蝶优秀服务伙伴',url:'./static/img/certification/2017-1.jpg'}

                ]
            }
        }
    }
</script>

<style lang='scss' scoped>
  @import "../../../static/article.css";
  @import "../../../static/base.scss";

  .glory-item
  {
    margin-bottom: 30px;
  }

.img-wrap
{
  height:200px;
  text-align:center;
  border:1px solid #ddd;
  img
  {
    display: inline-block;
    height: 80%;
    width: auto;
    text-align: center;
    margin-top: 10%;
  }

}
  .title
  {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }

</style>
