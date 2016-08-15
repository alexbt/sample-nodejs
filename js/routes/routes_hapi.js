module.exports = function(server){
	var mydocs = require('../controllers/controllers_hapi');
	
	server.route({
	    method: 'GET',
	    path: process.env.CONTEXT_ROOT_HAPI, 
	    handler: mydocs.findAll
	});
	
	server.route({
	    method: 'GET',
	    path: process.env.CONTEXT_ROOT_HAPI + '/{field}', 
	    handler: mydocs.save
	});
}