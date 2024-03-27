const fs = require('fs');

fs.appendFile('base.txt', 'other data', err => {
    if (!err) {
        console.log('我是异步追加');
    }
});

fs.appendFileSync('base.txt', 'new data');