const ApplicationError = require('./ApplicationError');
const { ExistingEmailErrorCode } = require('./errorCodes');

class ExistingDataError extends ApplicationError {
  constructor(message) {
    super(ExistingEmailErrorCode, message);
  }
}

module.exports = ExistingDataError;
