const webpack = require('webpack');
const {resolve} = require('path');

const SRC_DIR = resolve(__dirname, './src');
const DIST_DIR = resolve(__dirname, './public/dist');

module.exports = {
	// "Закрепим каталог в котором находятся исходники"
	context: SRC_DIR,

	// Входная точка
	entry: {
		app: './index.js'
	},

	// Конечные бандлы
	output: {
		path: DIST_DIR,
		filename: '[name].js'
	},

	// Игнорируем react -> используем CDN
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},

	// Настройки режима пересборки при изменениях
	watch: true,
	watchOptions: {
		aggregateTimeout: 500
	},

	// Подключим сорсмапы
	devtool: 'source-map',

	// Описываем лоадеры
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC_DIR,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react']
						}
					}
				]
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
