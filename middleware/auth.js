const jwt = require('jsonwebtoken');

// Middleware to check for JWT
function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from headers
    if (!token) return res.sendStatus(403); // No token, access denied

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = user; // Save user info in request
        next(); // Proceed to next middleware
    });
}

module.exports = verifyToken;