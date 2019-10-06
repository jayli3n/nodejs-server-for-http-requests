const axios = require('axios');


/*
Structure of post request required:
{
	'type': 'get / post',
	'url': 'some link',
	'body': 'json body'
}
*/

const handleRequest = (req, res) => {
	const { type, url, body } = req.body;
	switch (type) {
		case 'get':
			return (
				axios.get(url)
				.then((response) => res.json(response))
				.catch((err) => res.status(422).json(err))
			);
		case 'post':
			return (
				axios.post(url, body)
				.then((response) => res.json(response))
				.catch((err) => res.status(422).json(err))
			);
		default:
			return (
				res.status(422).json('Need to specify type of request to perform. Use "type" key.')
			);
	}
};

module.exports = {
	handleRequest: handleRequest
};