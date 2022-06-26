const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.SERVER_PORT;

const app = express();

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => console.log('Listening at', PORT));
