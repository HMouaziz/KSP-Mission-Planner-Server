const AuthError = require('./AuthError');

class UserNotFoundError extends AuthError {
  constructor(message= "User Not Found") {
    super(message);
    this.name = "UserNotFoundError";
    this.status = 404;
  }
}

module.exports = UserNotFoundError;