var Path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './source/js/index.js',
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=img/',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        stats: "errors-only"
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            hash: true,
            minify: {
                collapseWhitespace: true
            },
            template: "./source/index.html"
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}
