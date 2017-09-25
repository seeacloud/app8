<template>
  <div>
    <div class="bnr-con">

      <img :src="url" alt="" class="bnr-img">
      <div class="bnr-inner">
        <h1 class="title">{{title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default({
    name:'banner',
    props:['url','title']
  })
</script>

<style lang="scss" scoped="true">
  @import "../../static/base";
  .bnr-con
  {
    position: relative;
    height: 260px;
    overflow: hidden;
  min-width:1200px;
    img
    {
      width: 100%;
    }
  }
  .bnr-inner
  {
    position: absolute;
    width: 75%;
    left: 50%;
    top: 50%;
    min-width: 1200px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    h1.title
    {
      margin: 0;
      display: inline-block;
      padding: 10px 0;
      border-bottom: 3px solid $yellow;
    }

  }
</style>
