const {resolve} = require('path');
const webpack = require('webpack');

const SRC_DIR = resolve(__dirname, './src');
const PUBLIC_DIR = resolve(__dirname, './public');
const DIST_DIR = resolve(__dirname, './public/dist');

module.exports = {
	// "Закрепим" каталог в котором находятся исходники
	context: SRC_DIR,

	// Входная точка
	entry: {
		app: './index.js'
	},

	// Конечные бандлы
	output: {
		path: DIST_DIR,
		filename: '[name].js?v=[hash]'
	},

	// Игнорируем react -> используем CDN
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},

	// Подключим сорсмапы
	devtool: 'source-map',

	// Дев сервер для раздачи статики и live reload + hmr
	devServer: {
		contentBase: PUBLIC_DIR,
		host: '127.0.0.1',
		port: 8080
	},

	// Описываем лоадеры
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC_DIR,
				use: 'babel-loader'
			},
			{
				test: /\.styl$/,
				include: SRC_DIR,
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
