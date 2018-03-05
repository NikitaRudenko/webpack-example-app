const merge = require('webpack-merge');

const {
	publicDir,
	distDir,
	srcDir
} = require('./webpack.utils');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// Подключим сорсмапы
	devtool: 'inline-source-map',

	// Дев сервер для раздачи статики и live reload + hmr
	devServer: {
		publicPath: '/',
		host: '127.0.0.1',
		port: 8080
	},

	// Описываем лоадеры
	module: {
		rules: [
			{
				test: /\.js$/,
				include: srcDir,
				use: 'babel-loader'
			},
			{
				test: /\.styl$/,
				include: srcDir,
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.svg$/,
				use: 'url-loader'
			}
		]
	}
});
