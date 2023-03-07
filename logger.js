const logger = (req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  console.log(new Date());
  req.role = "Admin";
  next();
};

module.exports = { logger };
