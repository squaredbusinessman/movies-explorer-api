require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');
const errorHandler = require('./middlewares/error');
const routes = require('./routes/index');
const { requestLogDealer, errorLogDealer } = require('./middlewares/logger');
const corsOptions = require('./utils/cors');
const { MONGO_DB_DEV } = require('./utils/config');
const limiter = require('./utils/limiter');

const {
  PORT = 3000,
  NODE_ENV = 'develop',
  MONGO_DB_PROD,
} = process.env;

const app = express();

app.use(helmet());

app.use('*', cors(corsOptions));

mongoose.connect(NODE_ENV === 'production' ? MONGO_DB_PROD : MONGO_DB_DEV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogDealer);

app.use(limiter);

app.use(routes);

app.use(errorLogDealer);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
});
