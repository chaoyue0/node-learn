const fs = require('fs');

const myCopy = (src, dest, callback) => {
    const data = getData(src);
    doWrite(dest, data, callback);
}

const getData = src => {
   return fs.readFileSync(src);
}

const doWrite = (dest, data, callback) => {
    fs.writeFile(dest, data, err => {
        if (!err) {
            callback();
        }
    })
}