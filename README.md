# react-base
reactの基礎を学ぶプロジェクト

### プロジェクト作成
- ディレクトリ作成
```
$ mkdir react-basic
$ cd react-basic
```
- 初期化
```
$ npm init -y
```
- webpackに関するインストール(今回はbabelもインストール)
```
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install --save webpack webpack-cli
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
$ npm install --save-dev react react-dom
```
- @types/react-domが必要と言われたので、、、
```
$ npm install @types/react-dom
```



### 補足
##### webpack-dev-serverについて
- 起動前にindex.htmlをdist配下に配置(app.jsを読み込むパスもいじる。)
- 開発用のweb サーバの起動
```
$ npm run webpack-server
```
- ブラウザで起動
> http://localhost:8080/


##### polyfillについて
エントリーポイントに「@babel/polyfill"」を加えていたが、babelのバージョンアップに伴い非推奨となったみたい
