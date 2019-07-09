const path = require('path');

module.exports = (env, argv) => {
	return {
		target: 'node',
		mode: argv.mode,
		entry: './index.js',
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'app.js',
		},
		node: {
			__dirname: false,
			__filename: false,
		},
		resolve: {
			extensions: ['.js'],
		},
	};
};
