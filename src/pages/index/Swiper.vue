<template>
  <el-carousel arrow="always" height="520px" :interval=1000000>
    <el-carousel-item v-for="(item, index) in items" :key="index">
      <div  class="s-item">
        <img :src="item.url" alt="" class="s-img">
        <div class="caption" :class="{cleft : item.captionLeft}">
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
            {url:'./static/img/smt-banner.jpg', title:'山木通·云平台',
              des:'山木通是国内第一款专门为木业加工及家具制造企业量身定制的全流程管控软件，让您轻松管理生产、库存、销售、订单、资金等各个环节。',
              btn:'了解更多',link:'http://www.shanmt.com',captionLeft:true},
            {url:'./static/img/kingdeeDev.jpg',title:'金蝶系产品实施开发',des:'莫亚科技是金蝶集团金牌合作伙伴，在金蝶系产品的实施与开发方面有着丰富的经验',btn:'了解详情', link:'products.html#/product/3.6265617745824973E17',captionLeft:true},
            {url:'./static/img/dev-banner.jpg',title:'软件定制开发',des:'莫亚科技专业从事企业软件定制开发和技术服务，经过多年的发展，积累了众多不同行业的管理方式和经验',btn:'了解详情',link:'products.html#/product/3.6265628902673613E17', captionLeft:true},
            {url:'./static/img/sinqx.jpg',title:'新企学IT培训',des:'所学课程都是按市场及企业需求量身定制，志在提升学员的实践能力，培养高端的IT人才', link: 'http://www.sinqx.com',btn:'了解详情', captionLeft:true}

          ]
      }
    },
    methods: {
      openLink: function (url) {
          if(url.indexOf('www')>0)
          {
            window.open(url)
          }else
          {
              window.open(url,'_self')
          }
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

  .s-img
  {
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translate(-50%,0);
    -moz-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    -o-transform: translate(-50%,0);
    transform: translate(-50%,0);
  }
  .caption
  {
    /*background: rgba(0,0,0,.6);*/
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
      font-size: 36px;
      font-weight: bold;
    }
    p
    {
      color: #fff;
      text-align: center;
      width: 500px;
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
      /*background: green;*/
      position: absolute;
      width: 70%;
      min-width: 1200px;
      top: 50%;
      left: 50%;
      transform:translate(-50%,-50%);
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

  .cleft
  {
    text-align:left;
    h1
    {
      text-align: left;
    }
    p
    {
      text-align: left;
    }
    .btn-wrap
    {
      text-align: left;
    }
  }


</style>
