const {sum, sub,mul, div} = require("./other_file");

console.log(sum(3,2));
console.log(sub(3,2));
console.log(mul(3,2));
console.log(div(10,2));

const os = require('os')

console.log(os.version());