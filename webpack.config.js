const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

const env = process.env.NODE_ENV === "development" ? require('./env/local.env.js') : require('./env/prod.env.js')
console.log('DEVTOOL >>> ', env.DEVTOOL);

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'source-map',
    entry: './src/index.tsx', // 소스맵 생성
    output: {
        publicPath: '/',

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
            '@component': path.resolve(__dirname, 'src/component/'),
            '@page': path.resolve(__dirname, 'src/page/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@service': path.resolve(__dirname, 'src/service/'),
            '@lib': path.resolve(__dirname, 'src/lib/'),
            '@type': path.resolve(__dirname, 'src/type/'),
            '@util': path.resolve(__dirname, 'src/util/'),
            '@api': path.resolve(__dirname, 'src/service/api/'),
            '@image': path.resolve(__dirname, 'src/asset/image')
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
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
              }
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
