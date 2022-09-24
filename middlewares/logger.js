const winston = require('winston'); // logger module
const expressWinston = require('express-winston'); // logger & express friendship module

// requests logger
const requestLogDealer = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'requests.log' }),
  ],
  format: winston.format.json(),
});

// errors logger
const errorLogDealer = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: 'errors.log' }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogDealer,
  errorLogDealer,
};
