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
                console.log('obj is:', obj, ' value is:', obj[key]);
                value = obj[key];
            }
            console.log('value is:', value)
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
            console.log('updated obj is:', obj);
            fs.writeFile('kvstore.json', JSON.stringify(obj), (err) => {
                if (err) console.log('Error writing file:', err);
                return resolve(value);
            });
        });
    });
}

module.exports = {
    GetByKey : getByKey,
    SetByKey : setByKey
}