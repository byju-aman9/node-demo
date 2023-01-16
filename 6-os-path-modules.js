// os module (built-in) - provides a lot of properties and functions to interact with the os
const os = require('os');
// path module allows us to intract with file paths easily
const path = require('path');

// info about current userInfo 
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`);

// get the specific separator for my platform 
console.log(path.sep);

// join method os path module joins the arguments of the path and then normalizes the path 
const filePath = path.join('/content', 'subcontent', 'text.txt');
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

// resolve function in path module accepts a sequence of paths/path-segments and resolves them into an absolute path 
const absolute = path.resolve('content', 'subcontent', 'text.txt')
console.log(absolute);