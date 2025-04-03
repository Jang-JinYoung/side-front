const path = require('path');

module.exports = {
  mode: 'development', // 개발 모드
  entry: './src/index.tsx', // React 진입점 파일 경로
  output: {
    path: path.resolve(__dirname, 'dist'), // 출력 디렉토리
    filename: 'bundle.js', // 번들 파일 이름
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // 정적 파일 제공 디렉토리
    },
    port: 3000,
    open: true, // 브라우저 자동 열기
    hot: true, // HMR 활성화
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // CSS 처리 로더 설정
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // JavaScript 및 TypeScript 처리
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 확장자 생략 허용
  },
};
