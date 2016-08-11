var express = require('express');
// var path = require('path');

var app = express();
var port = process.env.PORT || 8080;

// Middlewares
app.use('/public', express.static('public'));

// Routing Import
var mainRouter = require('./main-router.js');

// Application Routing
app.use('/', mainRouter);

app.listen(port, function(err) {
    if (err) throw err;
    
    console.log("Server is running!");
});