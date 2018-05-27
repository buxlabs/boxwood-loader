const { compile } = require('@buxlabs/html-engine')
const { getOptions } = require('loader-utils')

module.exports = function (source) {
  if (this.cacheable) this.cacheable()
  const options = getOptions(this)
  const output = compile(source, options)
  return `export default ${output.toString()}`
}

