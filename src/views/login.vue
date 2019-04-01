<template>
  <div id="login">
     <header>
         <div id="topa">
             <router-link to="/Home" tag="li"   activeClass="active">
                <i class="iconfont icon-all" id="tupian"></i>
		  </router-link>
		  <router-link to="" tag="li" activeClass="active">
		  	<span id="aaa">登录</span>
		  </router-link>
		  <router-link to="/register" tag="li" activeClass="active">
		  	<span>注册</span>
		  </router-link>
         </div>
      
          
                <ul>
                    <li><a href="">密码登录</a></li>
                    <li><a href="">短信登录</a></li>
                </ul>
            <div id="dd">
                <input type="text" placeholder="    请输入手机号">
                <input type="text" placeholder="    请输入验证码">
            </div>
                
            <button id="yes">确认</button>
            <input name="Fruit" type="checkbox" value=""  id="jizu"/>一个月内记住登录
            <router-link to="/register" tag="li" activeClass="active" id="kuaisuzhuce">
		  	<span>快速注册</span>
		  </router-link>
    </header>
    
  </div>
</template>

<script>

      
</script>
<style lang="scss" scoped>
    header {
		position: fixed;
		left:0px;
		top:0px;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: white;
	}
    ul{
        display: flex;
        width: 100%
    }
    li{
        list-style: none;
        flex:1;
        text-align: center;
        float: left;
        width:33%;
    }
    #aaa{
        text-align: center;
        color: #000;
        font-weight: 700;
        font-size: 20px;
    }
    #tupian{
        width: 30px;
        display: block;
        margin-top: 7px;
        margin-left: 7px;
    }
        ul{
            width: 98%;
            text-align: center;
            background: #fff;
            height: 50px;
        }
    .qq,.ww{
        width: 100%;
        height: 30px;
       
        overflow: hidden;
    }
    .qq input,.ww input{
        display: block;
        width: 90%;
        
        line-height: 30px;
        margin-left: 5%;
    }
        #yes{
        width: 90%;
        height:50px;
        line-height: 30px;
        box-shadow:none;
        outline: none;   
        border:none;
        text-align: center;
        background: yellow;
        padding: 0;
        margin: 30px 5% 0 5%;       
    }
    #dd{
        
       
        width: 100%;
    }
    #dd input{
        border-width: 0; 
        height: 50px;
        width: 90%;
        margin-left: 5%;
    }
    #topa{
        margin-bottom:5px;
        height: 50px;
        
    }
    #kuaisuzhuce{
        float: right;
    }
    #jizu{
        margin-left: 21px;
    }
</style>

