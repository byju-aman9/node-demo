// const {writeFileSync} = require('fs');

// for(let i=0; i<3000; i++) {
    //     writeFileSync('./content/bigFile.txt', 'hello world \n', {flag: 'a'});
    // }
    
// Streams are a type of data-handling methods and are used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way.
    
const { createReadStream } = require("fs");
    
const stream = createReadStream('./content/bigFile.txt');

stream.on('data', (result) => {
    console.log(result);
});