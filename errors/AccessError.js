const ApplicationError = require('./ApplicationError');
const { AccessErrorCode } = require('./errorCodes');

class AccessError extends ApplicationError {
  constructor(message) {
    super(AccessErrorCode, message);
  }
}

module.exports = AccessError;
