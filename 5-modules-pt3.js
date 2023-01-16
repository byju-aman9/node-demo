const sayHi = (name) => {
    console.log(`hi there ${name}`);
}

// this is the alternate syntax to export objects, both the below two statements export the object in exactly the same way 
// module.exports.items = ['item1', 'items2'];

module.exports = sayHi;