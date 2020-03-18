var express = require('express');

var router = express.Router();

const { KVStoreController } = require('../../controllers');

const { KVStoreValidator } = require('../../validators/kvstore');

router.get('/get/:key', KVStoreValidator.ValidateKey, KVStoreController.Getters.getByKey);

router.post('/set/:key', KVStoreValidator.ValidateKVStoreSet, KVStoreController.Setters.setByKey);

module.exports = router;