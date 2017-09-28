<template>
  <div class="article-con">
    <h1 class="article-title">深圳市莫亚科技有限公司</h1>
    <p class="des">
      深圳市莫亚科技有限公司（以下简称"莫亚科技"）于2010年在深圳正式成立，注册资金500万人民币，目前拥有深圳、长沙两大技术研发中心。莫亚科技是国内一流的金蝶EAS平台软件定制及服务提供商，金蝶钻石级的交付合作伙伴，国内领先的物流行业产品及服务提供商。莫亚科技以高质量服务客户为核心理念，致力于为客户带来长期、高效的价值。</p>
    <img src="../../../static/img/moya-org.jpg" alt=""/>


    <div class="sec-title">
      <h2>管理层</h2>
    </div>
    <el-row :gutter="30">
      <el-col v-for="(p,index) in persons " :key="index" :span="8">
        <div class="grid-content">
          <person-card :person="p"></person-card>
        </div>

      </el-col>
    </el-row>

    <div class="sec-title">
      <h2>技术服务团队</h2>
    </div>

    <el-row v-for="(prow,index) in prows" :key="index" :gutter="30">
      <el-col v-for="(p, index) in prow" :key="index" :span="6">
        <div class="grid-content">
          <person-card :person="p"></person-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import PersonCard from  './PersonCard.vue'
  export default {
    data (){
      return {
        persons: [
          {
            img: 'xu.jpg',
            pname: '徐炳',
            info: '莫亚科技副总经理 负责全国业务运营主持公司经营管理工作, 协助CEO对公司各业务的管理与协调。十二年的职业生涯中，积累了丰富的软件研发与项目管理、 ERP实施、IT规划咨询等领域经验，曾先后在沿海集团、百思特咨询集团、金蝶集团担任重要职务，熟悉多种软件开发和项目质量管理方法， 在建筑房地产信息化领域有所研究，曾多次在《中国建筑信息》杂志中发表文章。'
          },
          {
            img: 'ji.jpg',
            pname: '暨青',
            info: '莫亚科技创始人、CEO，2010年创立了莫亚科技。作为公司的掌门人，负责公司的发展战略。凭借敏锐的洞察能力，成为国内较早的ERP软件外包交付的企业之一， 并通过6年时间的发展将莫亚科技打造成为一家初具规模的ERP软件交付企业，并在行业内享受一定声誉。'
          },
          {
            img: 'gan.jpg',
            pname: '甘建辉',
            info: '技术总监 负责公司技术研究、莫亚科技在全国的软件交付质量把控，软件技术方向把握，提供高质量的软件技术解决方案；十几年的软件研发与项目管理经验，曾先后在中国远洋、SUN中国担任主要技术人员；擅长JAVA技术框架研究，金蝶BOS平台高级培训讲师、航运与现代物流领域资深顾问。'
          }
        ],
        prows: [
          [{img: 'qu.jpg', pname: '屈鹏', info: '项目经理'},
            {img: 'liujh.jpg', pname: '刘建华', info: '项目经理'},
            {img: 'wangsl.jpg', pname: '王素兰', info: '项目经理'},
            {img: 'huanghx.jpg', pname: '黄汉雄', info: '项目经理'}],
          [{img: 'hux.jpg', pname: '胡晓', info: '项目经理'},
            {img: 'daigz.jpg', pname: '戴甘忠', info: '项目经理'},
            {img: 'wangp.jpg', pname: '王鹏', info: '项目经理'},
            {img: 'huch.jpg', pname: '胡承华', info: '项目经理'}]
        ]
      }
    },
    components: {PersonCard}
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/base";
  @import "../../../static/common.css";
  @import "../../../static/article.css";

  .des {
    font-size: 1em;
    line-height: 1.5em;
    color: #666666;
  }

  img {
    width: 100%;
  }

  .sec-title {
    text-align: center;
    margin-bottom: 40px;
    h2 {
      display: inline-block;
      text-align: center;
      padding-bottom: 5px;
      border-bottom: 3px solid $yellow;
    }

  }
</style>
