const { compile } = require('boxwood')
const { getOptions } = require('loader-utils')
const { print } = require('./log')

module.exports = async function (source) {
  this.async()
  this.cacheable()
  const options = Object.assign({ statistics: true }, getOptions(this))
  let input, metadata
  if (typeof options.preprocess === 'function') {
    const preprocessOutput = options.preprocess(source)
    input = preprocessOutput.input
    metadata = preprocessOutput.metadata
  } else {
    input = source
  }
  const transform = options.compile || compile
  const { template, statistics, warnings, errors } = await transform(input, options)
  statistics.assets.forEach(path => this.addDependency(path))
  if (options.log) { print({ path: this.resourcePath, warnings, errors }) }
  const output = template.toString()
  if (typeof options.postprocess === 'function') {
    this.callback(errors[0], options.postprocess(output, metadata))
  } else {
    this.callback(errors[0], `export default ${output}`)
  }
}
