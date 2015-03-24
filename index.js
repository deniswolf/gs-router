var express = require('express');
var app = express();

app.get('/search/users.json', function(req, res) {
	console.log(req);
	res.json([{
		id: '123',
		name: 'First User',
		role: 'admin',
		created_at: '2015/03/24'
	}]);
});

var server = app.listen(process.env.PORT, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});
