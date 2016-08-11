var express = require('express');

// Import main-router.js for routing
var mainRouter = require('./main-router.js');

var app = express();

var port = process.env.PORT || 8080;

// Application Routing
app.use('/', mainRouter);

app.listen(port);