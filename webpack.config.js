const path = require('path');
module.exports = {
    entry: ['./src/js/index.js', './src/styles/style.sass'],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'styles/[name].css'
                        }
                    },
                    'extract-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
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