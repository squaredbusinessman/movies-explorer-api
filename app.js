const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('bodyparser');
const { errors } = require('celebrate');
const cors = require('cors');
const errorHandler = require('./middlewares/error');
const routes = require('./routes/index');
const corsOptions = require('./utils/cors');

const { PORT = 3000 } = process.env;

const app = express();

app.use('*', cors(corsOptions));

mongoose.connect('mongodb://localhost:27017/beatfilmsdb');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(routes);

app.use(errors());

app.listen(PORT, () => {
});
