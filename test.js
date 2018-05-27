const assert = require('assert')
const loader = require('.')
let source, output

source = '<div>{foo}</div>'
output = loader.call({ cacheable () {} }, source)
assert.deepEqual(output, `export default function anonymous(__o,__e
/*\`\`*/) {
var __t = "";
__t += "<div";
__t += ">";
__t += __e(__o.foo);
__t += "</div>";
return __t;

}`)

