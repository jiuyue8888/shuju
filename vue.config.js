module.exports = {
	productionSourceMap: false,
	runtimeCompiler: true,
	devServer: {
		//host: '0.0.0.0',
		//port: 8080,
		proxy: {
			"/api": {
				target: "",
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	module: {
		rules: [{
			test: /\.less$/,
			use: ['style-loader', 'css-loader', 'less-loader', {
				loader: 'style-resources-loader',
				options: {
					patterns: path.resolve(__dirname, 'path/to/less/variables/*.less'),
					injector: 'append'
				}
			}]
		}]
	}
}
