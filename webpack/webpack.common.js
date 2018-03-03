const webpack = require('webpack');

const {
	distDir,
	srcDir
} = require('./webpack.utils');

module.exports = {
	// "Закрепим" каталог в котором находятся исходники
	context: srcDir,

	// Входная точка
	entry: {
		app: './index.js'
	},

	// Конечные бандлы
	output: {
		path: distDir,
		filename: '[name].js?v=[hash]'
	},

	// Игнорируем react -> используем CDN
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
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
				test: /\.svg$/,
				use: 'url-loader'
			}
		]
	},

	// Подключаем плагины
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks: 2
		})
	]
};
