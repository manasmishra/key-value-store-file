const { KVStore } = require('../../services/kvstore');

const getByKey = async (req, res) => {
    let key = req.params.key;
    try {
        let value = await KVStore.GetByKey(key);
        if(!!value) {
            return res.status(200).send(value);
        }
        return res.status(404).json({
            status: 'FAILURE',
            message: `No value found for the key: ${key}`
        });
    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: error.message
        });
    }
    
};

module.exports = {
    getByKey
}