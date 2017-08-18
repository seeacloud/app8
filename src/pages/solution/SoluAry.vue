<template>
  <div class="con">
    <el-row v-for="(itemrow, index) in itemrows" :gutter="20" :key="index">
      <el-col :span="6" v-for="(item, index) in itemrow" :key="index">
        <router-link to="/solutionDetail" class="s-card">
          <div class="s-img-wrap">
            <img :src="'./static/img/'+item.url" alt=""/>
          </div>
          <h3 class="card-title">{{item.title}}</h3>
        </router-link>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
      name:'SoluAry',
    data (){
         return {
             itemrows:[
               [{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'},{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'},
                 {url:'oa.jpg',title:'EAS HR人事事务单据WEB化解决方案'},{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'}],
               [{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'},{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'},
                 {url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'},{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'}],
               [{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'},{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'},
                 {url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'},{url:'eas.jpg',title:'EAS HR人事事务单据WEB化解决方案'}]
             ]
         }
    },
    mounted:function () {
        window.scrollTo(0,0)
      let wraps=document.querySelectorAll('.s-img-wrap')
      console.log('wraps are:',wraps.length)
      wraps.forEach(function (item) {
        item.style.height=item.offsetWidth*.65+'px'
      })
    }
  }


</script>

<style lang="scss" scoped="true">
  @import "../../../static/base";
  .s-img-wrap
  {
    overflow: hidden;
    img
    {
      width: 100%;
    }
  }

  .s-card
  {
    background: #fff;
    display: block;
    -webkit-box-shadow:  2px 2px 5px #ccc; -moz-box-shadow:  2px 2px 5px #ccc; box-shadow:  2px 2px 5px #ccc;
    img
    {
      -webkit-transition: all .2s;
      -moz-transition: all .2s;
      -ms-transition: all .2s;
      -o-transition: all .2s;
      transition: all .2s;
    }
  }

  .s-card:hover
  {
    img
    {
      -webkit-transform: scale(1.1); -moz-transform: scale(1.1); -ms-transform: scale(1.1); -o-transform: scale(1.1); transform: scale(1.1);
    }
    .card-title
    {
      color: $yellow;
    }
  }

  .card-title
  {
    padding: 5px 20px 20px 20px;
    font-size: 16px;
    font-weight: normal;
  }
</style>
