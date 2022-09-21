const ApplicationError = require('./ApplicationError');
const { UnAuthorizedErrorCode } = require('./errorCodes');

class UnAuthorizedError extends ApplicationError {
  constructor(message) {
    super(UnAuthorizedErrorCode, message);
  }
}

module.exports = UnAuthorizedError;
