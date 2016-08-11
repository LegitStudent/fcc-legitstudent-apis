var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var parsedHeaders = {
        ipaddress: "",
        language: "",
        os: ""
    }
    
    parsedHeaders['ipaddress'] = req.headers['x-forwarded-for'];
    parsedHeaders['language'] = req.headers['accept-language'];
    
    var userAgentRegex = new RegExp(/\(([^\)]+)\)/);
    parsedHeaders['os'] = userAgentRegex.exec(req.headers['user-agent'])[1];

    res.set('Content-Type', 'application/json');
    res.status(200).json(parsedHeaders);
});

app.listen(8080);