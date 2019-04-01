<template>
  <div>
    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
	import Tabbar from './components/Tabbar'
	import './assets/iconfont/iconfont.css'
	export default {
		components:{
			tabbar:Tabbar
		}
	}
</script>
<style lang="scss">
	*{
		margin:0;
		padding: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
</style>
