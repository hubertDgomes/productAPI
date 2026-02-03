const redirectMiddleware = (req, res, next) => {
  if (!req.session.isVerified) {
    return res.json({ Error: "Please Login to continue!" });
  }
  next()
};

export default redirectMiddleware
