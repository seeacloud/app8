<template>
    <div class="con">
      <div class="avatar">
        <img :src="'./static/img/person/'+person.img" alt=""/>
      </div>
      <h3 class="p-name">
        {{person.pname}}
      </h3>
      <p class="p-info">{{person.info}}</p>
    </div>
</template>

<script>
    export default {
        props:['person'],
        data (){
            return {}
        }
    }
</script>

<style lang='scss' scoped>
@import "../../../static/base";
  @import "../../../static/common.css";

.con
{
  text-align: center;
}

  .avatar
  {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid $yellow;
    overflow: hidden;
    img
    {
      width: 100%;
    }
  }
  .p-name
  {
    text-align: center;
    font-weight: normal;
    margin: 15px 0 5px 0;
  }

  .p-info
  {
    font-size: 14px;
    line-height: 1.5em;
    color: #666;
    text-align: justify;
    text-align: center;
    margin: 0 0 40px 0;
  }

</style>
