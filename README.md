# boxwood-loader

![npm](https://img.shields.io/npm/v/boxwood-loader.svg) [![Codeship](https://img.shields.io/codeship/d449ed60-1d63-0137-4301-5aea4b3287ff.svg)](https://app.codeship.com/projects/329031)

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
