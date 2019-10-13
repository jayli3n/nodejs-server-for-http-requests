const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { handleRequest } = require('./handleRequest');


// Initialize express.
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is running on port: ', PORT));
app.use(bodyParser.json());
app.use(cors());

// Routes.
app.all('/', (req, res) => res.json('hello'));
