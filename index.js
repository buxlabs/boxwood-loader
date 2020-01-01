const { compile } = require('pure-engine')
const { getOptions } = require('loader-utils')
const { print } = require('./log')

module.exports = async function (input) {
  this.async()
  this.cacheable()
  const options = Object.assign({ statistics: true }, getOptions(this))
  if (typeof options.preprocess === 'function') {
    input = options.preprocess(input)
  }
  const transform = options.compile || compile
  const { template, statistics, warnings, errors } = await transform(input, options)
  statistics.assets.forEach(path => this.addDependency(path))
  if (options.log) { print({ path: this.resourcePath, warnings, errors }) }
  const output = template.toString()
  if (typeof options.postprocess === 'function') {
    output = options.postprocess(output)
  }
  this.callback(errors[0], `export default ${output}`)
}

