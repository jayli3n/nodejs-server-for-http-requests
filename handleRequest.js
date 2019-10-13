const axios = require('axios');


/*
Structure of post request required:
{
	'method': 'get/post/put',
	'url': 'some link',
	'data': 'json payload' (optional)
}
*/

// For requests other than 'POST'.
const message = `Usage: send a post request with json obj: { method: 'get/post/put', url: 'the api address', data: 'any data content to attach' }`;

const handleRequest = (req, res) => {
	const { method } = req;
	if (method !== 'POST') {
		return (res.status(422).json(message));
	}
	const { method, url, data } = req.body;
	axios({ method, url, data })
	.then(response => res.json(response.data))
	.catch(err => res.status(422).json(err))
};

module.exports = { handleRequest };
