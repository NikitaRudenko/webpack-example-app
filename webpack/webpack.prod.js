const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
	srcDir
} = require('./webpack.utils');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// Подключим сорсмапы
	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.styl$/,
				include: srcDir,
				use: ExtractTextPlugin.extract({
					use: [
						'css-loader',
						'stylus-loader'
					],
					allChunks: true
				})
			}
		]
	},

	// Подключаем плагины
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new ExtractTextPlugin('styles.css')
	]
});
