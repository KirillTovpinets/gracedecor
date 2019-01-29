const path = require('path');
module.exports = {
    entry: ['./src/js/index.js', './src/styles/style.sass'],
    mode: "development",
    module: {
        rules: [
					{
						test: /\.(jpg|png)/,
						use: [
							'url-loader'
						]
					},
					{
							test: /\.((sa|sc|c)ss|img)/,
							use: [
									{
											loader: 'file-loader',
											options: {
													name: '[name].css'
											}
									},
									'extract-loader',
									'css-loader',
									'sass-loader'
							]
					},
					{
						test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
						use: [
							{
								loader: 'file-loader',
								options: {
									name: '[hash].[ext]',
									outputPath: 'styles'
								},
							}
						]
					},
        ]
    },
    watch: true,
    devServer: {
        contentBase: './',
        publicPath: '/'
    },
    plugins: [],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname)
    },
}