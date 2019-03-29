<template>
  <footer>
  <ul>
      <router-link to="/Home" tag="li"   activeClass="active">
      <i class="iconfont icon-all"></i><div>首页</div></router-link>
      <router-link to="/Classify" tag="li" activeClass="active">
      <i class="iconfont icon-viewgallery"></i><div>分类</div></router-link>
      <router-link to="/Shopcar" tag="li" activeClass="active">
      <i class="iconfont icon-cart"></i><div>购物车</div></router-link>
      <router-link to="/News" tag="li" activeClass="active">
      <i class="iconfont icon-email"></i><div>消息</div></router-link>
      <router-link to="/Me" tag="li" activeClass="active">
      <i class="iconfont icon-account"></i><div>我</div></router-link>
  </ul>
  </footer>
</template>
<script type="text/javascript">
  export default {

  }
</script>

<style lang="scss" scoped>
  footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    font-size: 14px;
    line-height: 25px;
    color:#303030;
    background: white;
    ul{
      display: flex;
      list-style: none;
      li{
        flex:1;
        text-align: center;
        cursor: pointer;
      }
    }
  }  
</style>