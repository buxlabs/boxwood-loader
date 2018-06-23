const { compile } = require('@buxlabs/html-engine')
const { getOptions } = require('loader-utils')

module.exports = function (source) {
  if (this.cacheable) this.cacheable()
  const options = Object.assign({ statistics: true }, getOptions(this))
  const transform = options.compile || compile
  const { code, statistics } = transform(source, options)
  if (typeof this.addDependency === 'function') {
    statistics.assets.forEach(path => this.addDependency(path))
  }

  return `export default ${code.toString()}`
}

