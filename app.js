var express = require('express');
var bodyParser = require('body-parser');
var { KVStore } = require('./routes');

var app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', KVStore.KVStore);

module.exports = app;
