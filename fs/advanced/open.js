const fs = require('fs');

const buf = Buffer.alloc(20);
const messageBuf = Buffer.from('goodbye node');
fs.open('demo.txt', 'r+', (err, fd) => {
    if (err) {
        console.log('文件不存在', err);
    } else {
        fs.read(fd, buf, 0, 20, 0, (err, bytesRead, buffer) => {
            console.log('bytesRead', bytesRead);
            console.log('buffer', buffer);
            console.log('string', buffer.toString('utf-8'));
        });
       fs.write(fd, messageBuf, (err, bytesWritten, buffer) => {
           if (err) {
               console.log('write', err);
           } else {
               console.log('bytesWritten', bytesWritten);
               console.log('buffer', buffer);
               console.log('string', buffer.toString('utf-8'));
           }
       });
        fs.close(fd, (err, fd) => {
            console.log('关闭成功');
        });
    }
});