<template>
    <div>
      <div v-for="(item, index) in items" class="news-item" :key="index">
        <h2 class="news-title">{{item.title}}</h2>
        <span class="author">发布者： {{item.author}} 发布时间： {{item.time}}</span>

        <div class="content-wrap">
          <div class="thumb-wrap">
            <img :src="'./static/img/'+item.img" alt="" class="thumb-img">

          </div>
          <p class="news-content">{{item.content}}</p>
          <router-link :to="'/archives/'+item.id" class="a-btn">了解详情</router-link>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name:'news',
        data (){
            return {
                items:[
                  {id:0,title:'莫亚科技-拓展新版图（长沙办事处成立）',author:'莫亚科技',time:'2017-07-11',img:'shake.jpg',url:'xxx', content:'深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供便捷的服务；秉承快速反应、激情工作、质量第一的宗旨，为客户的信息化建设提供优质的服务。倡导“高质量产品、高效率服务”的企业工作文化。'},
                  {id:1,title:'莫亚科技-拓展新版图（长沙办事处成立）',author:'莫亚科技',time:'2017-07-11',img:'shake.jpg',url:'xxx', content:'深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供便捷的服务；秉承快速反应、激情工作、质量第一的宗旨，为客户的信息化建设提供优质的服务。倡导“高质量产品、高效率服务”的企业工作文化。'},
                  {id:2,title:'莫亚科技-拓展新版图（长沙办事处成立）',author:'莫亚科技',time:'2017-07-11',img:'shake.jpg',url:'xxx', content:'深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供便捷的服务；秉承快速反应、激情工作、质量第一的宗旨，为客户的信息化建设提供优质的服务。倡导“高质量产品、高效率服务”的企业工作文化。'}
                ]
            }
        },
      mounted:function () {
        window.scrollTo(0,0)
      }
    }
</script>

<style lang='scss' scoped>
  @import "../../../static/article.css";
@import "../../../static/base";

  .content-wrap
  {
    position: relative;
    padding-left: 220px;
    height: 120px;
  }

  .thumb-wrap
  {
    position: absolute;
    width: 200px;
    height: 120px;
    left:0;
    top:0;
    overflow: hidden;
    img
    {
      height: 100%;
    }
  }
  .thumb-img
  {

  }

  .a-btn
  {
    font-size: 12px;
    color: $yellow;
    padding: 2px;
  }
  .a-btn:hover
  {
    color: #fff;
    background: $yellow;
  }

  .news-item
  {
    padding: 40px 0 20px 0;
    border-bottom: 1px dashed #ccc;
  }

  .news-title
  {
    font-size: 24px;
    font-weight: normal;
    margin: 0;
  }

  .author
  {
    color: #aaa;
    font-size: 12px;
  }

  .news-content
  {
    font-size: 14px;
    line-height: 20px;
    color: #666;
    text-align: justify;
  }

  .a-more
  {
    color: $yellow;
    font-size: 12px;
    padding: 3px 10px;
    border: 1px solid $yellow;
  }

  .a-more:hover
  {
    color: #fff;
    background: $yellow;
  }
</style>
