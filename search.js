var request = require('request-promise');
var dataURL = process.env.DATA_URL;

module.exports = function(req, res, next) {
	var params = req.query;
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
