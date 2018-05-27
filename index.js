const { compile } = require('@buxlabs/html-engine')

module.exports = function (source, options) {
  if (this.cacheable) this.cacheable()
  const output = compile(source, options)
  return `export default ${output.toString()}`
}

