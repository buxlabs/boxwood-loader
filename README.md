# boxwood-loader

>  boxwood loader for webpack

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

This package holds a webpack loader for the [boxwood](https://github.com/buxlabs/boxwood) package.

## Install

```
npm install boxwood-loader
```

## Usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'boxwood-loader',
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

```

## Maintainers

[@emilos](https://github.com/emilos).

## Contributing

All contributions are highly appreciated! [Open an issue](https://github.com/buxlabs/tris-loader/issues/new) or a submit PR.

## License

MIT © buxlabs
