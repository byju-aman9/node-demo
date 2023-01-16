// MODULES - allow us to have different functionality in separate files and they can be accessed anywhere in the application
// this makes the application easier to debug or maintain in the future because file size remains limited
// in CommonJS (node uses CommonJS library under the hood), every file is module by default
// one thing to keep in mind while using modules is that share only the minimum that is required with other files 

// module is a global variable with exports as an object that can be used to share data/functionalities from one file to another

// local 
const secret = "secret key"

// global 
const john = 'john';
const peter = 'peter';

module.exports = {john, peter};