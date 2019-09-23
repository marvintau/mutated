const path = require('path');

module.exports = {
	entry: './src/Mutated.js',
	output: {
		path: path.resolve(__dirname),
		filename: './dist/index.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},

	mode: 'production',
};