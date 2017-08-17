<template>
  <div>

    <h1 style="text-align: center;margin-bottom:5px;">莫亚科技服务价格体系</h1>
    <p style="text-align: center;margin-bottom:40px;">服务热线: 0755-86575595(深圳) 0731-85563963(长沙)</p>

    <el-row :gutter="30">
      <el-col v-for="(row, index) in rows" :key="index" :span="6">
        <div class="grid-content">
          <div class="price-card">
            <div class="card-title">
              {{row.title}}

            </div>
            <div class="prc" :class="{exc:row.except}">
              <div class="unit" >¥</div>

              {{row.prc}}

              <div class="unit">人/天</div>

            </div>
            <div v-for="(item, index) in row.items" :key="index" class="des">
              {{item}}

            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        rows: [
          {
            except: false,
            title: '金蝶EAS产品系服务',
            prc: '1500-2000',
            items: ['金蝶EAS产品系二次开发', '异构系统与金蝶EAS系统接口开发', '金蝶EAS BOS定制开发', '金蝶EAS产品性能优化', '金蝶EAS产品实施']
          },
          {
            except: false,
            title: '咨询服务',
            prc: '3000-5000',
            items: ['IT规划设计', '异构系统与金蝶EAS接口开发', 'IT应用及应用优化需求梳理', 'T项目管理', 'IT硬件适配']
          },
          {
            except: false,
            title: 'IT人才服务外包',
            prc: '1000-2000',
            items: ['8 小时工作制', '根据客户安排工作完成相应技术服务', '结算:月结/季度结', '能力:具备java主流技术开发能力，具备金蝶技术开发能力', '外地差旅另计', '签约需半年以上']
          },
          {except: true, title: '产品服务', prc: '根据产品实际情况约定', items: ['产品费用', '实施费用', '差旅费用','硬件费用']}
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/base';

  .price-card {
    background: #ffffff;
    text-align: center;
    padding: 0 20px 40px 20px;
    background: $lightblue;
    color: #ffffff;
    border-radius: 5px;
    -webkit-box-shadow:  2px 2px 15px $lightblue;
    -moz-box-shadow:  2px 2px 15px $lightblue;
    box-shadow:  2px 2px 15px $lightblue;
  }

  .card-title {
    font-size: 24px;
    line-height: 4em;
    border-bottom: 1px dashed rgba(255, 255, 255, .15);
    color: inherit;
  }

  .prc {
    font-size: 36px;
    padding: 30px 0;
    border-bottom: 1px dashed rgba(255, 255, 255, .15);
    color: inherit;
    .unit {
      font-size: 14px;
      color: inherit;
    }
  }

  .des {
    font-size: 14px;
    padding: 20px 0;
    border-bottom: 1px dashed rgba(255, 255, 255, .15);
    color: inherit;
  }

  .exc
  {
    font-size: 20px;
    .unit
    {
      display: none;
    }
  }
  /*@media screen and (max-width:1240px) {*/
    /*.exc*/
    /*{*/
      /*font-size: 20px;*/
    /*}*/
  /*}*/
</style>
