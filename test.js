const assert = require('assert')
const loader = require('.')
const { spy } = require('sinon')
let output, paths = []

function normalize (string) {
  return string.replace(/\s+/g, '')
}

const callback = spy()
const source = '<div>{foo}</div>'

loader.call({
  async () {},
  callback,
  cacheable () {},
  addDependency () {},
  query: {
    preprocess (source) {
      return { input: source + 'bar' }
    },
    postprocess (source) {
      return 'export default ' + source.replace('bar', 'baz')
    }
  }
}, source).then(() => {
  const output = callback.lastCall.args[1]
  assert.deepEqual(normalize(output), normalize(
    `
    export default function render(__o, __e) {
      var __t = "<div>";
      __t += __e(__o.foo);
      __t += "</div>baz";
      return __t;
    }
    `
  ))
})
