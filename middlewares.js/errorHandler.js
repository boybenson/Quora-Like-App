const errorHandler = (err, req, res, next) => {
  res.json({
    status: err.status,
    message: err.message,
  });
  console.log(err);
};

export default errorHandler;
