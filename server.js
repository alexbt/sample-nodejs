require('dotenv').config();

//EXPRESS
var express = require('express');
var app = express();
require('./js/routes/routes')(app);
app.listen(8082);
console.log('Express listening on port 8080');


//HAPI
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8083 
});

require('./js/routes/routes_hapi')(server);

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('hapi listening at:', server.info.uri);
});
