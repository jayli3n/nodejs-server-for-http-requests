const axios = require('axios');


/*
Structure of post request required:
{
	'type': 'get / post',
	'url': 'some link',
	'body': 'json body'
}
*/

// Get request return message.
const message = `Usage: send a post request with json obj: { type: 'get/post', url: 'the api address', body: 'any body content to attach' }`;

const handleRequest = (req, res) => {
	const { type, url, body } = req.body;
	if (type === 'get' && url) {
		return (
			axios.get(url)
			.then(response => res.json(response))
			.catch(err => res.status(422).json(err))
		);
	} else if (type === 'post' && url) {
		return (
			axios.post(url, body)
			.then(response => res.json(response))
			.catch(err => res.status(422).json(err))
		);
	}
	return (
		res.status(422).json(message)
	);
};

module.exports = { message, handleRequest };