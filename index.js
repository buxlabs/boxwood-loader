const { compile } = require('pure-engine')
const { getOptions } = require('loader-utils')
const { print } = require('./log')

module.exports = async function (source) {
  this.async()
  this.cacheable()
  const options = Object.assign({ statistics: true }, getOptions(this))
  const transform = options.compile || compile
  const { template, statistics, warnings, errors } = await transform(source, options)
  statistics.assets.forEach(path => this.addDependency(path))
  if (options.log) { print({ path: this.resourcePath, warnings, errors }) }
  this.callback(errors[0], `export default ${template.toString()}`)
}

