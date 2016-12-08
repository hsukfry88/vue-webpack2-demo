##文件目录说明

		config
			|_config.js 全局基础配置文件
			|_webpack.base.js webpack基本配置项
			|_webpack.dev.js  webpack开发环境下模块打包扩展配置项
			|_ webpack.prod.js webpack生产环境扩展配置(如压缩静态资源)
			
		webapp
			|_commponent 
				|_counter（组件html,js,css分离）
					|_counter.css
					|_counter.html
					|_counter.js
					|_counter.vue（引入组件模块）
				|_...xxx组件
			|_ App.vue 包裹所有组件的容器
			|_ app.js webpack 模块入口
			|_ index.html html静态资源模版	
##			
		

##项目安装说明

###### npm install 安装所需依赖模块包
###### webpack 打包模块生成静态资源
###### 浏览器访问build/view/index.html目录即可看到效果

 
