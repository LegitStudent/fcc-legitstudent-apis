var express = require('express');
var path = require('path');

// FCC API projects (in order)
var timestamp = require('./controllers/timestamp.js');
var requestHeader = require('./controllers/request.js');

var mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

mainRouter.get('/timestamp', timestamp);
mainRouter.get('/request', requestHeader);

module.exports = mainRouter;