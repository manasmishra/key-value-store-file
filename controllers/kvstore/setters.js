const { KVStrore } = require('../../services');

const setByKey = async (req, res) => {
    await KVStrore.KVStore.SetByKey(req.params.key, req.body.value);
    res.send();
};

module.exports = {
    setByKey
}