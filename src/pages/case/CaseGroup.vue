<template>
    <div class="article-con">

      <div class="header-page">
        <h2 class="title-page">成功案例</h2>
      </div>
      <div v-for="(item, index) in cases" :key="index">
        <case-cell :caseinfo="item"></case-cell>

      </div>


    </div>
</template>

<script>
  import CaseCell from './CaseCell.vue'
    export default {
        data (){
          return {
              cases:[
                {imgurl:'t-1.jpg',title:'招商局产权管理系统',
                  des:'招商局集团(简称招商局)是国家驻港大型企业集团，经营总部设于香港，业务主要分布于香港、内地、东南亚等极具活力和潜力的新兴市场。截至2012年底，招商局集团拥有总资产3920.83亿元(以下单位，未经注明均为人民币)，管理总资产3.59万亿元。2012年，招商局集团保持平稳增长，盈利水平创历史新高，利润总额263.15 亿元，母公司净利润146.22亿元，集团利润总额在各央企中排名列第10位。招商局是中央直接管理的国有重要骨干企业，亦被列为香港四大中资企业之一。2004-2011年招商局连续八年获国务院国资委评为A级中央企业。在2004-2006年和2007-2009年任期考核中，招商局连续两次获国务院国资委授予“业绩优秀企业”称号。',url:'http://www.shanmt.com'},
                {imgurl:'t-1.jpg',title:'万科集团资金与预算系统',
                  des:'万科企业股份有限公司成立于1984年，1988年进入房地产行业，1991年成为证券交易所第二家上市公司。经过二十多年的发展，成为国内最大的住宅开发企业，业务覆盖珠三角、长三角、环渤海三大城市经济圈以及中西部地区，共计53个大中城市。年均住宅销售规模在6万套以上，2011年公司实现销售面积1075万平米，销售金额1215亿元，2012年销售额超过1400亿。销售规模持续居全球同行业首位。驻港大型企业集团，经营总部设于香港，业务主要分布于香港、内地、东南亚等极具活驻港大型企业集团，经营总部设于香港，业务主要分布于香港、内地、东南亚等极具活',url:'http://www.shanmt.com'},
                {imgurl:'t-1.jpg',title:'仁建集团综合物流管理平台',
                  des:'仁建综合物流信息管理平台，是为支持仁建综合物流业务理而设计开发的。系统将借鉴先进物流管理思想，集成先进物流技术，并充分体现仁建综合物流的个性化特色。驻港大型企业集团，经营总部设于香港，业务主要分布于香港、内地、东南亚等极具活驻港大型企业集团，经营总部设于香港，业务主要分布于香港、内地、东南亚等极具活',url:'http://www.shanmt.com'}
              ]
          }
        },
      components:{CaseCell}
        }
</script>

<style lang='scss' scoped>
@import '../../../static/article.css';
  @import "../../../static/base";

  .article-con
  {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
  }


</style>
