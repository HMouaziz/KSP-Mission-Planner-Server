const {ValidationError} = require("joi");
const UserNotFoundError = require("../errors/UserNotFoundError");
const PasswordMismatchError = require("../errors/PasswordMismatchError");
const AuthError = require("../errors/AuthError");
const UserAlreadyExistsError = require("../errors/UserAlreadyExistsError");
const DEFAULT_ERROR_STATUS = 500;
const DEFAULT_ERROR_MESSAGE = 'Internal Server Error';

module.exports = (error, req, res, next) => {
  console.error(error.stack);

  switch (error.constructor) {
    case ValidationError:
      const validationErrors = error.details.map(detail => detail.message);
      res.status(400).json({ error: validationErrors });
      break;

    case UserNotFoundError:
      res.status(404).json({ error: error.message });
      break;

    case PasswordMismatchError:
      res.status(401).json({ error: error.message });
      break;

    case UserAlreadyExistsError:
      res.status(409).json({ error: error.message });
      break;

    case AuthError:
      res.status(403).json({ error: error.message });
      break;

    default:
      respondWithError(res, error.status || DEFAULT_ERROR_STATUS, error.message || DEFAULT_ERROR_MESSAGE);
      break;
  }
};

function respondWithError(res, status, message) {
  res.status(status).json({error: message});
}