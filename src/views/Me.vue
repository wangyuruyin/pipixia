<template>
  <div class="category">
  </div>
</template>
<script>
  function isLogin(){
    return false;
  }
  export default {
    beforeRouteEnter(to, from, next) {
      if(isLogin()){
        next()
      }else{
        next({
          path:'/login'
        })
      }
      
    },
  }
</script>