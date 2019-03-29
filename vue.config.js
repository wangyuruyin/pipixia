module.exports={
	devServer:{
		// port:8000,
		proxy:{
			'/v2':{
				target:'https://m.wowdsgn.com',
				host:'m.wowdsgn.com',
				changeOrigin:true,
			},

		}
	}	
}
