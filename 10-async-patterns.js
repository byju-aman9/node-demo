const {readFile} = require('fs');

// A Node. js Promise is a placeholder for a value that will be available in the future, allowing us to handle the result of an asynchronous task once it has completed or encountered an error. Promises make writing asynchronous code easier. They're an improvement on the callback pattern and very popular in Node. js.

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })    
    });
}

getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));


// the async/await pattern is a syntactic feature of many programming languages that allows an asynchronous, non-blocking function to be structured in a way similar to an ordinary synchronous function.

const start = async(path) => {
    try {
        const text = await getText(path);
        console.log(text);
    } catch (error) {
        console.log(error);
    }
}

start('./content/first.txt');