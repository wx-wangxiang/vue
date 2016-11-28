var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'template');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.js')
	},
	output: {
		path: BUILD_PATH,
		filename: '[name].js'
	},
	module: {
		loaders: [
		{
			test: /\.css$/,
			loaders: ['style', 'css'],
			include: APP_PATH
		},{
			test: /\.(png|jpg|gif|woff|woff2)/,
			loader: 'url?limit=8192'
		},{
			test: /\.js$/,
			loader:'babel', //?{"presets":["es2015"],"plugins":["transform-runtime", "transform-object-rest-spread"]}
			query: {
				presets: ["es2015"],
				plugins: ["transform-runtime", "transform-object-rest-spread"]
			},
			exclude: /node_modules/
		},{
			test: /\.vue$/,
			loader: 'vue',
			include: APP_PATH
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'vue is great',
			template: path.resolve(TEM_PATH, 'index.html'),
			filename: 'index.html',
			chunks: ['app'],
			inject: 'body'
		})
	],
	vue: {
		loaders: {
			js: 'babel?{"presets":["es2015"],"plugins":["transform-runtime", "transform-object-rest-spread"]}'
		}
	},
	resolve: {
		// require时省略的扩展名，如：require('app') 不需要app.js
		extensions: ['', '.js', '.vue'],
		// 别名，可以直接使用别名来代表设定的路径以及其他
		alias: {
			components: path.join(__dirname, './app/components'),
			vuexs: path.join(__dirname, './app/vuex')
		}
	}
}