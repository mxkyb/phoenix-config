const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		'phoenix.js': './src/phoenix.ts',
	},
	output: {
		path: path.resolve(__dirname, 'out'),
		filename: '[name]',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				include: path.resolve(__dirname, 'src'),
				options: {
					transpileOnly: true,
				},
			},
		],
	},
	plugins: [],
};
