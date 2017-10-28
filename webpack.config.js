//引入webpack
var webpack=require('webpack');
//文本抽离也就是把css文件抽离出来在dev里面生成一个css文件夹放进去
var ExtractTextPlugin=require('extract-text-webpack-plugin');
//引入html生成插件
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
	//配置入口
	entry:{
		'scripts/app':'./src/scripts/app.js'
	},
	//配置出口
	output:{
		filename:'[name]@[chunkhash].js',
		path:__dirname+'/dev'//必须是绝对路径
	},
	  devServer: {
			host:"172.27.98.1",
			port:4000,
			contentBase:__dirname+'/dev',
			noInfo:true,//屏蔽信息
	    proxy: {
	 			'/api':{
		        target:'https://m.mbaobao.com/',
		        changeOrigin: true,
		        pathRewrite: {
		          '^/api': ''
		        }
		     },
			  '/vip':{
			    target: 'http://localhost:9000/',
			    changeOrigin: true,
			    pathRewrite: {
			      '^/vip': ''
			    }
			  }
	   		 }
	  },
	devtool:'source-map',
    resolve: {
	      alias: {
	      'vue$': 'vue/dist/vue.esm.js',
	      'styles': __dirname + '/src/styles'
	    }
  	},

	//配置模块
	module:{
		rules:[
		//解析ES6+
		{
			test:/\.js$/,
			exclude:/node_modules/,
			use:[
				{
					loader:'babel-loader'//应用babel-loader解析ES6
				}
			]
		},
		{
			test:/\.string$/,
			exclude:/node_modules/,
			use:[
				{
					loader:'string-loader'//应用babel-loader解析ES6
				}
			]
		},
		{
			test:/\.css$/,
			use:[
			{
				loader:'style-loader'
			}//顺序不能弄错了
			,
			{
				loader:'css-loader'
			}
			]
		},
		{
			test:/\.scss$/,
			use:
		ExtractTextPlugin.extract(
			{
				fallback:'style-loader',
				use:['css-loader','sass-loader']
			}
		)
		},
		// 加载Vue 单文件组件
       {
         test: /\.vue$/,
         exclude: /node_modules/, // 排除node_modules下.js的解析
         use: [{
           loader: 'vue-loader'
         }]
       },
		// 加载图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'media/images/[name].[ext]'
        }
      },
      // 加载媒体文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/mp4/[name].[ext]'
        }
      },
      // 加载iconfont
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'media/iconfont/[name].[ext]'
        }
      }
	  ]
	},
  //配置插件
  plugins:[
  //生成css抽离文本文件插件的实例
  	new ExtractTextPlugin({
  		filename:(getPath)=>{
  			return getPath('[name]@[contenthash].css').replace('scripts','styles')    //name是chunks的名字
  		},
  		allChunks:true//把所以chunks做一次抽离
  		//在出口位置生成一个app.css的文件
  	}),
  	//编译html这个插件牛逼在于你不用管html里面的任何东西只要html存在就可以，会自动linkcss 和 js版本号也很简单做
  	new HtmlWebpackPlugin({
  		template:'./src/index.html',//找到的原
  		filename:'index.html',//目标
  		chunks:['scripts/app'] //多chunks
  	}),
  	  	//代码亚索
  	new webpack.optimize.UglifyJsPlugin({
  		compress:{
  			warnings:false
  		},
  		output:{
  			comments:false
  		}
  	})
  ]
// ,
//////externals
//	externals:{
//		'vue':'window.Vue',
//		'axios':'window.axios'
//	}
}
//var devserver = { // 配置webserver
//devServer: {
//		host:'localhost',
//		port:4000,
//		contentBase:__dirname+'/dev',
//		noInfo:true,//屏蔽信息
//  proxy: {
// 			'/api':{
//	        target:'https://m.mbaobao.com/',
//	        changeOrigin: true,
//	        pathRewrite: {
//	          '^/api': ''
//	        }
//	     },
//		  '/vip': {
//		    target: 'http://localhost:9000/',
//		    changeOrigin: true,
//		    pathRewrite: {
//		      '^/vip': ''
//		    }
//		  }
//  }
//}
//}