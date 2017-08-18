<template>
    <div>
      <div class="c-cell" >
        <h4 class="c-title">{{caseinfo.title}}</h4>
        <p class="p-des">{{caseinfo.des}}</p>
        <router-link to="/casedetail" class="a-more">了解详情</router-link>
        <!--<a class="a-more" v-bind:href="caseinfo.url" target="_blank">了解详情</a>-->

        <div class="img-wrap">
          <img :src="basepath+caseinfo.imgurl" alt=""/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props:['caseinfo'],
        data (){
            return {
                basepath:'./static/img/'
            }
        }
    }
</script>

<style lang='scss' scoped>
  @import "../../../static/base";
  .c-cell
  {
    position: relative;
    height: 120px;
    border-bottom: 1px dashed #ddd;
    padding: 20px 0 20px 140px;

    .img-wrap
    {
      height: 120px;
      width: 120px;
      position: absolute;
      left: 0;
      top: 20px;
      overflow: hidden;
      img
      {
        width: 100%;
      }
    }
  }
  .c-title
  {
    margin: 0;

  }
.p-des
{
  color: #666;
  font-size: .9em;
  line-height: 1.4em;
  height: 2.7em;
  overflow: hidden;
  margin: 5px 0;
}

  .a-more
  {
    position: absolute;
    bottom: 20px;
    left: 140px;
    font-size: .8em;
    padding: 2px;
    font-size: .8em;
    color: $yellow;

  }
  .a-more:hover
  {
    color: #fff;
    background: $yellow;
  }

</style>
