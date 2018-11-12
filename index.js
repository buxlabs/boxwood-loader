const { compile } = require('@buxlabs/html-engine')
const { getOptions } = require('loader-utils')

module.exports = async function (source) {
  this.async()
  this.cacheable()
  const options = Object.assign({ statistics: true }, getOptions(this))
  const transform = options.compile || compile
  const { code, statistics, errors } = await transform(source, options)
  statistics.assets.forEach(path => this.addDependency(path))
  this.callback(errors[0], `export default ${code.toString()}`)
}

