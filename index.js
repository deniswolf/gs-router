var express = require('express');
var app     = express();

var search  = require('./search');

app
	.get('/search/users.json', search)
	.get('/search/users',      search);

var server = app.listen(process.env.PORT, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});
