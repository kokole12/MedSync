// middleware.js
const blacklist = new Set(); // Store revoked tokens

// Middleware to check token against the blacklist
function checkTokenMiddleware(req, res, next) {
  const token = req.headers.authorization.split(' ')[2];
  if (blacklist.has(token)) {
    return res.status(401).json({ message: 'Token revoked' });
  }
  next();
}

module.exports = { checkTokenMiddleware };
