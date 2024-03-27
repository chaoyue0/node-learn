const fs = require('fs');

fs.writeFile('base.txt', 'new', err => {
    if (!err) {
        console.log('data');
    }
});

fs.writeFileSync('base.txt', 'Hello world');