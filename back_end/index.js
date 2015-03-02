var express = require('express');
var app = express();

//simple route
app.get('/', function (request, response) {
    'use strict';
    response.send("I'm running :)");
});

var server = app.listen(process.env.PORT || 8008, function () {
    'use strict';
    
    var host = server.address().address, port = server.address().port;
    
    console.log('Listening at http://%s:%s', host, port);    
});