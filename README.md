# pure-engine-loader

## Installation

```
npm install pure-engine-loader
```

## Usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'pure-engine-loader',
          options: {
            paths: [
              path.join(__dirname, 'public')
            ]
          }
        }
      }
    ]
  }
}
