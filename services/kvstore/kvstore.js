var fs = require('fs');
var obj;

const getByKey = async (key) => {
    return new Promise((resolve, reject) => {
        /*
        * Loading the whole content of file into node process is not a good idea for simplicity I have done it in this way.
        * We can optimize it by using some stream processing
        * Also we can use some event based mechanism to capture the chunk of data and do other stuffs
        * 
        */
        fs.readFile('kvstore.json', 'utf8', function (err, data) {
            let value;
            if (err) return reject(err);
            obj = JSON.parse(data);
            if(!!key) {
                value = obj[key];
            }
            return resolve(value);
        });
    });
}

const setByKey = async (key, value) => {
    return new Promise((resolve, reject) => {
        fs.readFile('kvstore.json', 'utf8', function (err, data) {
            if (err) return reject(err);
            obj = JSON.parse(data);
            if(!!key) {
                obj[key] = value;
            }
            fs.writeFile('kvstore.json', JSON.stringify(obj), (err, res) => {
                if (err) {
                    console.log('Error writing file:', err);
                    return reject(err);
                }
                return resolve(value);
            });
        });
    });
}

module.exports = {
    GetByKey : getByKey,
    SetByKey : setByKey
}