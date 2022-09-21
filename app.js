const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const errorHandler = require('./middlewares/error');
const routes = require('./routes/index');
const corsOptions = require('./utils/cors');

const { PORT = 3000 } = process.env;

const app = express();

app.use('*', cors(corsOptions));

mongoose.connect('mongodb://localhost:27017/beatfilmsdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
});
