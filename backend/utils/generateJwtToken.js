const jwt = require('jsonwebtoken')

module.exports = generateAccessToken = (id, roles) => {
	const payload = {
		id,
		roles
	}
	return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24h'})
} 