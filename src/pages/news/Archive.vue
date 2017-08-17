<template>
    <div class="con">
      <h2 class="news-title">莫亚科技-拓展新版图（长沙办事处成立）</h2>
      <p class="author">发布时间： <span>017-01-01</span> 发布者： <span>莫亚科技</span></p>
      <p class="news-content">深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供便捷的服务；秉承快速反应、激情工作、质量第一的宗旨，为客户的信息化建设提供优质的服务。倡导“高质量产品、高效率服务”的企业工作文化。</p>
      <img src="../../../static/img/moya-cs.jpg" alt="" >
      <span class="img-title">与嘉宾合影留恋</span>
      <img src="../../../static/img/moya-cs-2.jpg" alt="" >
      <span class="img-title">莫亚公司办事处主要成员合影留念</span>
      <img src="../../../static/img/moya-cs-3.jpg" alt="" >
      <span class="img-title">与嘉宾共餐愉快，交流甚欢</span>


      <p class="news-content">深圳市莫亚科技有限公司长沙办事处的成立，是为适应公司发展需要，旨在湖南长沙地区市场业务拓展和为客户提供便捷的服务；秉承快速反应、激情工作、质量第一的宗旨，为客户的信息化建设提供优质的服务。倡导“高质量产品、高效率服务”的企业工作文化。</p>

      <router-link to="/" class="back-btn"><< 返回</router-link>
    </div>
</template>

<script>
    export default {

      created:function () {
      },
      data (){
        return {
          archiveData:{},
          archiveID:''
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
    width: 60%;
    margin: 20px 20% 5px 20%;
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
  .img-title
  {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    font-size: 12px;
    color: #666;
  }

</style>


