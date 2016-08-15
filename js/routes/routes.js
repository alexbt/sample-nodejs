var contextRoot = process.env.CONTEXT_ROOT_EXPRESS;

module.exports = function(app){
    var controller = require('../controllers/controllers');

    app.get(contextRoot+'/mongo', controller.findAll);
    app.get(contextRoot +'/mongo/:field', controller.save);
    app.get(contextRoot+ '/underscore', controller.tryUnderscore);
}