function mountError(error) {
  if (error.errors) {
    return error.errors.map((err) => err.msg);
  }

  if (error.message) {
    return [error.message];
  }

  return ["Algum erro aconteceu."];
}

const handleError = function (error, req, res, next) {
  const errors = mountError(error);
  res.status(error.status ?? 500);
  res.json(errors);
};

module.exports = handleError;
