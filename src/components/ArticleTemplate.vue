<template>
    <div class="article-con">

      <h1>文章标题文章标题</h1>
      <div class="author"><span>作者：莫亚科技</span> <span>日期：2017-01-22</span></div>
      <p>正文内容正文内容正文内容正文内容正文内容正文内容。正文内容正文，内容正文内容正文内容正文内容正文内容，正文正文内容。正文内容正文，内容正文内容正文内容正文内容正文内容，正文正文内容。正文内容正文，内容正文内容正文内容正文内容正文内容，正文内容正文内容正文内容 ；正文内容正文内容正文内容，正文内容正文内容正文内容。正文内容正文，内容正文内容正文内容正文内容正文内容，正文正文内容。正文内容正文，内容正文内容正文内容正文内容正文内容，正文正文内容。正文内容正文，内容正文内容正文内容正文内容正文内容，正文内容正文内容正文内容 ；正文内容</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
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
    margin: 0 15%;
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




</style>
