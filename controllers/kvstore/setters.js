const { KVStrore } = require('../../services');

const setByKey = async (req, res) => {
    try {
        const key = req.params.key;
        let value;
        if(typeof req.body === 'string') {
            value = req.body;
        } else if(typeof req.body === 'object') {
            value = req.body.value;
        }
        console.log(`key is:${key} value is:${value}`);
        await KVStrore.KVStore.SetByKey(key, value);
        return res.status(200).send("OK");
    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports = {
    setByKey
}