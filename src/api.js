const express = require('express');
const routes = require('./routes');

const PORT = process.env.API_PORT;

const app = express();

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => console.log('Listening at', PORT));
