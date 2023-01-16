const {readFileSync, writeFileSync, readFile, writeFile, write} = require('fs');
const util = require('util');

// the three functions below are synchronous functions 
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result-sync.txt', `Result: ${first}, ${second}`);

// the function below is an asynchronous function 
readFile('./content/first.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        const first = data;
        readFile('./content/second.txt', 'utf-8', (err, result) => {
            if(err) {
                console.log(err);
            } else {
                const second = result;
                writeFile('./content/result-async.txt', `Result: ${first}, ${second}`, (err, final_result) => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(final_result);
                    }
                })
            }
        })
    }
});


// the code below performs the same functionality as the readFile function above but it is much cleaner because we are using the async await pattern build into Nodejs
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const readWriteFiles = async(readPath1, readPath2, writePath) => {
    try {
        const first = await readFilePromise(readPath1, 'utf8');
        const second = await readFilePromise(readPath2, 'utf8');

        await writeFilePromise(writePath, `Result: ${first}, ${second}`);
    } catch (error) {
        console.log(error);
    }
}

readWriteFiles('./content/first.txt', './content/second.txt', './content/result-async.txt');