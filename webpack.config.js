
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    // entry: ['@babel/polyfill', './src/index.js'],
    entry: [
        './src/index.js',
        './src/scss/index.scss'
    ],
    output: {
        filename: 'bundle.js',
        
        // path: __dirname + '/dist'
        path: path.resolve(__dirname, 'dist/js')
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin()
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLPlugin( {
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new CopyPlugin([
            { 
                from: './src/images', 
                to: 'images' 
            },
            
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        outputPath: 'images'
                    }  
                }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                //include: path.resolve(__dirname, 'src/scss/fonts/'),
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    }

}