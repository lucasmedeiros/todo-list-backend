function errorHandler(err, _req, res, _next) {
  if (typeof(err) === 'string') {
    // application error
    return res.status(400).json({ message: err });
  }

  if (err.name === 'UnauthorizedError') {
    // JWT validation error
    return res.status(401).json({ message: 'Invalid token.' });
  }

  return res.status(500).json({ message: err.message });
}

export default errorHandler;
