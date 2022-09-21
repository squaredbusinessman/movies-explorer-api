const ApplicationError = require('./ApplicationError');
const { ValidationErrorCode } = require('./errorCodes');

class ValidationError extends ApplicationError {
  constructor(message) {
    super(ValidationErrorCode, message);
  }
}

module.exports = ValidationError;
