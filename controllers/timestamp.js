// Timestamp API

var path = require('path');

module.exports = function(req, res) {
    if (req.query.time) {
        res.set({
            "Content-Type": "application/json"
        });
        // see if input is number or not
        if (!isNaN(Number(req.query.time))) {
            req.query.time = Number(req.query.time) * 1000; // unix counts in seconds
        }

        var parsedTime = new Date(req.query.time),
            unixTime = null,
            naturalTime = null;
        
        if (!isNaN(parsedTime.getTime())) {
            // valid dates go here.
            unixTime = parsedTime.getTime() / 1000;
            naturalTime = parsedTime.toDateString().slice(4);
        }
        
        res.json({
            "unix": unixTime,
            "natural": naturalTime
        });
    }
    else {
    // send instructions
        res.end('go back, and read the manual');
    //    res.sendFile(path.join(__dirname, 'views/index.html'));
    }
};