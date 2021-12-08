const path = require('path');

const development = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: {
		'phoenix.js': './src/phoenix.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	mode: development ? 'development' : 'production',
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
