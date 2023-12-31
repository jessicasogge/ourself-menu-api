const express = require('express');
const app = express();
const port = 3002;
const morgan = require('morgan');
const db = require('./src/services/dbWrapper.js');

db.getClient();

app.use(morgan(':method :url :status :res[content-length] :response-time ms'));

app.get('/health-check', (req, res) => res.send('ok'));

app.use('/menu', require('./src/routes/menu'));

app.listen(port, () => console.log(`Express app running on port ${port}!`));

module.exports = app;
