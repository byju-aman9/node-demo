const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');

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