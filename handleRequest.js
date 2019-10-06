const axios = require('axios');


/*
Structure of post request required:
{
	'type': 'get / post / put',
	'url': 'some link',
	'payload': 'json payload'
}
*/

// Get request return message.
const message = `Usage: send a post request with json obj: { type: 'get/post', url: 'the api address', payload: 'any payload content to attach' }`;

const handleRequest = (req, res) => {
	const { type, url, payload } = req.body;
	if (type === 'get' && url) {
		return (
			axios.get(url)
			.then(response => res.json(response.data))
			.catch(err => res.status(422).json(err))
		);
	} else if (type === 'post' && url) {
		return (
			axios.post(url, payload)
			.then(response => res.json(response.data))
			.catch(err => res.status(422).json(err))
		);
	} else if (type === 'put' && url) {
		return (
			axios.put(url, payload)
			.then(response => res.json(response.data))
			.catch(err => res.status(422).json(err))
		);
	}
	return (
		res.status(422).json(message)
	);
};

module.exports = { message, handleRequest };