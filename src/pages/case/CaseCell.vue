<template>
  <div>
    <div class="c-cell">
      <h2 class="c-title">{{caseinfo.title}}</h2>
      <p class="p-des">{{caseinfo.description}}</p>
      <router-link :to="'/case/'+caseinfo.id" class="a-more">了解详情</router-link>
      <!--<router-link :to="'/archives/'+item.id" class="a-btn">了解详情</router-link>-->

      <!--<a class="a-more" v-bind:href="caseinfo.url" target="_blank">了解详情</a>-->

      <div class="img-wrap">
        <!--<img :src="" alt=""/>-->
        <img :src="'http://www.shanmt.com/muye/images_test'+caseinfo.picurl" alt="" ref="titleimg"
             :class="{verticalImg:vImg}">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['caseinfo'],
    data (){
      return {
        basepath: './static/img/',
        vImg: false
      }
    },
    mounted: function () {
      let img = this.$refs.titleimg
      console.log('img width:', this.$refs.titleimg.width)
      if (img.width > img.height) {
        this.vImg = true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/base";

  .c-cell {
    position: relative;
    height: 120px;
    border-bottom: 1px dashed #dddddd;
    padding: 20px 0 20px 140px;

    .img-wrap {
      text-align: center;
      height: 120px;
      width: 120px;
      position: absolute;
      left: 0;
      top: 20px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }

  .verticalImg {
    position: absolute;
    height: 100%;
    width: auto !important;
    left:-50%;
    right: 0;
  }

  .c-title {
    margin: 0;
  }

  .p-des {
    color: #666666;
    font-size: .9em;
    line-height: 1.4em;
    height: 4.2em;
    overflow: hidden;
    margin: 5px 0;
  }

  .a-more {
    position: absolute;
    bottom: 20px;
    left: 140px;
    font-size: .8em;
    padding: 2px;
    font-size: .8em;
    color: $yellow;
  }

  .a-more:hover {
    color: #ffffff;
    background: $yellow;
  }

</style>
