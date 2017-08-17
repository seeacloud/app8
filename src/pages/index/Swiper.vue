<template>
  <el-carousel arrow="always" height="520px" :interval=1000000>
    <el-carousel-item v-for="(item, index) in items" :key="index">
      <div  class="s-item">
        <img :src="item.url" alt=""/>

        <div class="caption">
          <div class="content">
            <img :src="item.iconurl" alt="" class="caption-icon">
            <h1>{{item.title}}</h1>
            <p>{{item.des}}</p>
            <div class="btn-wrap">
              <a class="round-btn round-btn-white" @click="openLink(item.link)">{{item.btn}}</a>
            </div>
          </div>

        </div>

      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default{
    data (){
      return {
          items:[
            {url:'./static/img/carpenter.jpg',iconurl:'./static/img/smticon.png', title:'山木通 云平台',
              des:'山木通是国内第一款专门为木业加工及家具制造企业量身定制的全流程管控软件，让您轻松管理生产、库存、销售、订单、资金等各个环节。',
              btn:'了解更多',link:'http://www.shanmt.com'},
            {url:'./static/img/t-1.jpg',title:'金蝶开发实施',des:'dddd',btn:'bbbbbb'},
            {url:'./static/img/t-1.jpg',title:'软件定制开发',des:'dddd',btn:'bbbbbb'},
            {url:'./static/img/t-2.jpg',title:'新企学培训',des:'dddd',btn:'bbbbbb'}

          ]
      }
    },
    methods: {
      openLink: function (url) {
          window.open(url)
      }
    }
  }

</script>

<style lang="scss" scoped="true">
  $yellow:#EC6600;


  .s-item
  {
    position: relative;
    height: 100%;
  }
  .caption
  {
    background: rgba(0,0,0,.6);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    h1
    {
      color: #fff;
      text-align: center;
      font-weight: normal;
    }
    p
    {
      color: #fff;
      text-align: center;
      width: 650px;
      display: inline-block;
      font-size: 20px;
      line-height: 1.8em;
    }
    .btn-wrap
    {
      text-align: center;
    }
    .content
    {
      position: absolute;
      width: 100%;
      top: 50%;
      transform:translate(0,-50%);
    }
  }
  .caption-icon
  {
    width: 120px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .round-btn
  {
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    border: 1px solid $yellow;
    color: $yellow;
  }
  .round-btn:hover
  {
    background: $yellow;
    color: #fff;
  }

  .round-btn-white
  {
    color: #fff;
    border: 1px solid #fff;
  }
  .round-btn-white:hover
  {
    border: 1px solid $yellow;
  }
</style>
