const { KVStrore } = require('../../services');

const getByKey = async (req, res) => {
    let key = req.params.key;
    let value = await KVStrore.KVStore.GetByKey(key);
    res.send( value ? value: `No key found with ${key}`);
};

module.exports = {
    getByKey
}