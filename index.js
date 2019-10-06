const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { handleRequest } = require('./server');


// Initialize express.
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Server is running on port: ', PORT);
});
app.use(bodyParser.json());
app.use(cors());

// Get request return message.
const message = `Usage: send post request with json obj: { type: 'get/post', url: 'the api address', body: 'any body content to attach' }`;

// Routes.
app.get('/', (req, res) => res.json(message));
app.post('/', (req, res) => handleRequest(req, res));



