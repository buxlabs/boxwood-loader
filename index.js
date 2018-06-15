const { compile } = require('@buxlabs/html-engine')
const { getOptions } = require('loader-utils')

module.exports = function (source) {
  if (this.cacheable) this.cacheable()
  const options = getOptions(this) || {}
  const transform = options.compile || compile
  const output = transform(source, options)
  return `export default ${output.toString()}`
}

