const AuthError = require('./AuthError');

class UserAlreadyExistsError extends AuthError {
  constructor(message= 'User Already Exists') {
    super(message);
    this.name = "UserAlreadyExistsError";
    this.status = 409;
  }
}

module.exports = UserAlreadyExistsError;