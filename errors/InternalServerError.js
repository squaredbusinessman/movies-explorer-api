const ApplicationError = require('./ApplicationError');
const { InternalErrorCode } = require('./errorCodes');

class InternalServerError extends ApplicationError {
  constructor(message) {
    super(InternalErrorCode, message);
  }
}

module.exports = InternalServerError;
