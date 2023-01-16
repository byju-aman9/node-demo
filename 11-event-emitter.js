const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// we can have as many functions like below for the same event with different logics
// the order matters because we first want to listen to an event which we are doing with the function below and then we want to emit the event
customEmitter.on('response', () => {
    console.log('data received');
});

customEmitter.on('response', (name, id) => {
    console.log(`data received from ${name} with id: ${id}`);
})

customEmitter.emit('response', 'john', '11381');

// using Event Emitter API to listen to request on a server 
const server = http.createServer();
server.on('request', (req, res) => {
    res.end('Welcome');
});
server.listen(3000);