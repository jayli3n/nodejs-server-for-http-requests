const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { message, handleRequest } = require('./handleRequest');


// Initialize express.
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log('Server is running on port: ', PORT);
});
app.use(bodyParser.json());
app.use(cors());

// Routes.
app.get('/', (req, res) => res.status(422).json(err));
app.post('/', (req, res) => handleRequest(req, res));



