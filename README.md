# react-base
reactの基礎を学ぶプロジェクト

## プロジェクト作成
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

- babelでbind()を省略する際の記法で必要となったため、@babel/plugin-proposal-class-propertiesをインストール(.bind(this)関数の省略について)
```
$  npm install --save-dev @babel/plugin-proposal-class-properties
```



## 補足
### .bind(this)関数について
Layout内で`<Header changeTitle={this.changeName} ....>`とした場合、Layoutスコープで作成した関数はHeader Componentへ渡ります。
その際に、その関数をHeader Componentから呼び出した時、その関数はLayoutスコープで呼ばれた関数とは別の関数になってしまいます。
そのため、Header ComponentにchangeName関数を渡して呼び出すと、changeName関数のthisがLayoutインスタンスで無くなってしまいます。
setState関数もLayoutクラス内の関数では無くなるため、想定しない動作をする可能性が生まれます。
確実にLayoutインスタンスのsetState関数を呼び出すためには`<Header changeTitle={this.changeName.bind(this)} ....>`と
bind関数の引数this(Layoutインスタンス)に対して、紐づけをしてあげることが必要となります。
この関数が他の場所で呼び出されたとしても、LayoutインスタンスのchangeName関数を呼び出すようになります。

余談として、`<Header changeName={this.changeName.bind(someInstance)} ...>` とすれば、someInstance スコープで呼ばれるchangeTitle 関数を渡すこともできます。

### .bind(this)関数の省略について
bind(this)を省略記法があったのでメモ。アロー関数を使う方法でも良さそう。
ただ、@babel/plugin-proposal-class-propertiesが必要だったため注意。
- インストール後に以下をwebpack.config.jsに`plugins`をoptionsに追記(.babelrcに記載でもいけるみたい)
```
options: {
  presets: ["@babel/preset-react", "@babel/preset-env"],
+ plugins: [
+   ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ]
},
```
> 参考：https://qiita.com/ksyunnnn/items/40f0948f70085a140f56
> 、https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048
- 省略前の関数:`<Header changeTitle={this.changeName.bind(this)} ....>`
```
  changeName(name) {
    this.setState({name});
  }
```
- 省略後の関数:`<Header changeTitle={this.changeName} ....>`
```
  changeName = (name) => {
    this.setState({name});
  }
```

### よく間違えること
JSX のコンポーネントをそのまま2 つ並べることはできず、上位のコンポーネントでwrap するようにしなければならない
簡単に言うと、エラーと正常の例の通り。
- エラー
```
<h1>aa</h1>
<h2>bb</h2>
```
- 正常
```
<div>
  <h1>aa</h1>
  <h2>bb</h2>
</div>
```

### webpack-dev-serverについて
- 起動前にindex.htmlをdist配下に配置(app.jsを読み込むパスもいじる。)
- 開発用のweb サーバの起動
```
$ npm run webpack-server
```
- ブラウザで起動
> http://localhost:8080/


### polyfillについて
エントリーポイントに「@babel/polyfill"」を加えていたが、babelのバージョンアップに伴い非推奨となったみたい
