const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3002;
const morgan = require('morgan');
const db = require('./src/services/dbWrapper.js');

db.getClient();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan(':method :url :status :res[content-length] :response-time ms'));

app.get('/health-check', (req, res) => res.send('ok'));

app.listen(port, () => console.log(`Express app running on port ${port}!`));