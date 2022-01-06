const { validationResult } = require("express-validator");

handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => `${error.msg}`);

    const err = Error("Bad request.");
    err.errors = errors;
    err.title = "Bad Request";
    err.status = 400;
    next(err);
  }
  next();
};

module.exports = { handleValidationErrors };
