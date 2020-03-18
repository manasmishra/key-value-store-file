const Joi = require('@hapi/joi');

const validateKey = (req, res, next) => {
    const params = req.params;
    const schema = Joi.object().keys({
        // key is required
        key: Joi.string().required()
    });
    const { error, value } = schema.validate(params);
    if(error) {
        return res.status(422).json({
            status: 'error',
            message: 'Invalid request data',
            data: params
        });
    } else {
        next();
    }
};

const validateKVStoreSet = (req, res, next) => {
    
    const params = req.params;
    const data = req.body;
    const schema = Joi.object().keys({
        // key is required
        key: Joi.string().required()
    });
    const { error, value } = schema.validate(params);
    if(!error && data) {
        return next();
    }
    return res.status(422).json({
        status: 'error',
        message: 'Invalid request data',
        data: {
            params,
            data
        }
    });
};

module.exports = {
    ValidateKey: validateKey,
    ValidateKVStoreSet: validateKVStoreSet
}