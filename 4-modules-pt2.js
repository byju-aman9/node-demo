const names = require('./3-modules-pt1');
const sayHi = require('./5-modules-pt3')

sayHi(names.john);
sayHi(names.peter);

console.log(names);
console.log(module);