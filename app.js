var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
    if (req.query.time) {
        res.set({
            "Content-Type": "application/json"
        });
        // see if input is number or not
        if (!isNaN(Number(req.query.time))) {
            req.query.time = Number(req.query.time) * 1000; // unix counts in seconds.
        }

        var parsedTime = new Date(req.query.time),
            unixTime = null,
            naturalTime = null;
        
        if (!isNaN(parsedTime.getTime())) {
            // valid dates go here.
            unixTime = parsedTime.getTime();
            naturalTime = parsedTime.toDateString().slice(4);
        }
        
        res.json({
            "unix": unixTime,
            "natural": naturalTime
        });
        res.end();
    }
    else {
    // send instructions
        res.sendFile(path.join(__dirname, 'views/index.html'));
    }
});

app.listen(8080, function(err) {
    if (err) throw err;
    console.log("server is running");
});