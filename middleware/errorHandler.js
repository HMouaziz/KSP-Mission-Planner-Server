const {ValidationError} = require("joi");
const DEFAULT_ERROR_STATUS = 500;
const DEFAULT_ERROR_MESSAGE = 'Internal Server Error';

module.exports = (error, req, res, next) => {
  console.error(error.stack);

  if (error instanceof ValidationError) {
    const validationErrors = error.details.map(detail => detail.message);
    res.status(400).json({ error: validationErrors });
  } else {
    respondWithError(res, error.status || DEFAULT_ERROR_STATUS, error.message || DEFAULT_ERROR_MESSAGE);
  }
};

function respondWithError(res, status, message) {
  res.status(status).json({error: message});
}