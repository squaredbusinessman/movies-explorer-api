const ApplicationError = require('./ApplicationError');
const { NotFoundErrorCode } = require('./errorCodes');

class NotFoundError extends ApplicationError {
  constructor(message) {
    super(NotFoundErrorCode, message);
  }
}

module.exports = NotFoundError;
