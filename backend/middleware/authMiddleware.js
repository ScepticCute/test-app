const jwt = require('jsonwebtoken')

 module.exports = (req, res, next) => {
	if(req.method === "OPTIONS") {
		next()
	}

	try {
		const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : ""

		if(!token) {
			console.log('trigger')
			throw new Error()
		}

		const decodedData = jwt.verify(token, process.env.SECRET_KEY)

		req.user = decodedData

		next()
	} catch(e) {
		console.log(e)
		return res.status(403).json({success: false, message: "Пользователь не авторизован."})
	}
}