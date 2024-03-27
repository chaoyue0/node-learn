const fs = require('fs');

fs.copyFile('base.txt', 'other.txt', () => {
    console.log('我是异步拷贝写入');
})

fs.copyFileSync('base.txt', 'copy.txt');