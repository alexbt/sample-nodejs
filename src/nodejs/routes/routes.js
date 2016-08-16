var contextRoot = process.env.CONTEXT_ROOT_EXPRESS;
var express = require('express');
var path = require('path');

module.exports = function(app){
    var controller = require('../controllers/controllers');

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:8085");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.get("/", function(req, res){
          res.sendFile(path.resolve(__dirname + '/../react-server/index.html'));
        });

    app.get("/bundle.js", function(req, res){
                    res.sendFile(path.resolve(__dirname + '/../react-server/bundle.js'));
                });

    app.get(contextRoot+'/mongo', controller.findAll);
    app.get(contextRoot +'/mongo/:field', controller.save);
    app.get(contextRoot+ '/underscore', controller.tryUnderscore);


}