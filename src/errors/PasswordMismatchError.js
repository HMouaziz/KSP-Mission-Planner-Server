const AuthError = require('./AuthError');

class PasswordMismatchError extends AuthError {
  constructor(message= "Invalid Password") {
    super(message);
    this.name = "PasswordMismatchError";
    this.status = 401;
  }
}

module.exports = PasswordMismatchError;