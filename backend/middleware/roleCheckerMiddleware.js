const jwt = require('jsonwebtoken')


// Roles can only be an array
module.exports = (roles) => {
	return (req, res, next) => {
		if(req.method === "OPTIONS") {
			next()
		}

		try {
			const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : ""

			if(!token) {
				console.log('trigger')
				throw new Error()
			}

			const {roles: userRoles} = jwt.verify(token, process.env.SECRET_KEY)

			let hasRole = false

			userRoles.forEach(role => {
				if(roles.includes(role)) hasRole = true
			})

			if(!hasRole) throw Error({success: false, message: 'У вас нет доступа.'})

			next()
		} catch(e) {
			console.log(e)
			return res.status(403).json({success: false, message: "Пользователь не авторизован."})
		}
	}
}





