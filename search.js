var request = require('request-promise');
var dataURLS = JSON.parse(process.env.DATA_URLS);

module.exports = function(req, res, next) {
	var params = req.query;
	var dataURL = dataURLS[Math.floor(Math.random() * dataURLS.length)];
	return request({
			uri: dataURL,
			method: 'GET',
			json: true,
			qs: params
		})
		.then(function validResponse(result) {
			res.json(result);
			return result;
		})
		.catch(function errorResponse(err) {
			res.status(err.statusCode).json({
				error: err.message
			});
			return err;
		});

};
