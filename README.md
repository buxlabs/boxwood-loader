# html-engine-loader

## Installation

```
npm install @buxlabs/html-engine-loader
```

## Usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: '@buxlabs/html-engine-loader',
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
