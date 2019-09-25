function errorHandler(err, _req, res, _next) {
  if (err.name === 'UnauthorizedError') {
    // JWT validation error
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (err.name === 'Error') {
    // application error
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });
}

export default errorHandler;
