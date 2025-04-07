const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

const env = require('./env/local.env.js');
console.log('DEVTOOL >>> ', env.DEVTOOL);

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: false,
    entry: './src/index.tsx',
    output: {
        publicPath: '/',

        // 23.8.24 이게 뭘까요
        // path: path.join(__dirname, '/dist'),
        // filename: '[name].js',
    },
    devServer: {
        port: 3000,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@public': path.resolve(__dirname, 'public'),
            '@atom': path.resolve(__dirname, 'src/atom/'),
            '@components': path.resolve(__dirname, 'src/elements/components/'),
            '@pages': path.resolve(__dirname, 'src/elements/pages/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@service': path.resolve(__dirname, 'src/service/'),
            '@lib': path.resolve(__dirname, 'src/lib/'),
            '@type': path.resolve(__dirname, 'src/type/'),
            '@util': path.resolve(__dirname, 'src/util/'),
            '@api': path.resolve(__dirname, 'src/service/api/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: '/images/',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        hot: true,
        // 새로운 창 실행 여부
        // open: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        // new Dotenv(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify:
                process.env.NODE_ENV === 'production'
                    ? {
                          collapseWhitespace: true, // 빈칸 제거
                          removeComments: true, // 주석 제거
                      }
                    : false,
        }),
        new CleanWebpackPlugin(),
        new VanillaExtractPlugin(),
    ],
};
