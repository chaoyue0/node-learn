const fs = require('fs');
fs.readFile('base.txt', err => {
    if (!err) {
        console.log('我是异步读取');
    }
});

const buf = fs.readFileSync('base.txt');
const data = fs.readFileSync('base.txt', 'utf-8');


console.log('buf', buf);
console.log('data', data);