<template>
    <div class="con">
      <div class="m-sec">
        <div class="search-item">
          <div class="input-wrap">
            <input type="text" placeholder="请输入搜索关键词">
          </div>
          <span class="s-btn">搜索</span>
        </div>
      </div>
      <div class="m-sec">

        <a href="about.html#/culture" target="_self">公司文化活动</a>
        <a href="">行业新闻</a>
        <a href="http://www.kingdee.com" target="_blank">金蝶资讯</a>
        <a href="about.html#/glory" target="_self">公司荣誉</a>
      </div>
      <div class="m-sec">
        <h3>友情链接</h3>
        <a href="http://www.shanmt.com" target="_blank">山木通云管理平台</a>
        <a href="http://www.kingdee.com" target="_blank">金蝶集团</a>
        <a href="http://www.sinqx.com" target="_blank">新企学IT培训</a>
      </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {}
        }
    }
</script>

<style lang='scss' scoped>

  @import "../../../static/base";
  .con
  {
    padding-top: 60px;
  }
  .m-sec
  {
    border-top: 3px solid $yellow;
    padding: 20px 0;
    a
    {
      display: block;
      font-size: 14px;
      color: #666;
      padding: 10px 0;

    }

    a:hover
    {
      color: $yellow;
    }
  }
  .search-item
  {
    border: 1px solid #ddd;
    height: 36px;
    border-radius: 5px;
    overflow: hidden;
    .input-wrap
    {
      width: calc(100% - 80px);
      height: 100%;
      display: inline-block;
    }
    input[type="text"]
    {
      border: none;
      font-size: 12px;
      padding-left: 10px;
      line-height: 34px;
      display: block;
      outline: none;
      width: 100%;
    }
    .s-btn
    {
      display: inline-block;
      float: right;
      font-size: 14px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      height: 100%;
      line-height: 36px;
    }
    .s-btn:hover
    {
      background: $yellow;
      color: #fff;
    }
  }
</style>
