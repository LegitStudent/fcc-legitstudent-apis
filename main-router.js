var express = require('express');

// FCC API projects (in order)
var timestamp = require('./controllers/timestamp.js');
//var requestHeader = require('./controllers/request-header.js');

var mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.send('Hullo, world!');
});
mainRouter.get('/timestamp', timestamp);
//mainRouter.get('/request', requestHeader);

module.exports = mainRouter;