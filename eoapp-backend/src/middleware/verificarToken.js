const jwt = require('jsonwebtoken')

module.exports = function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado: token requerido' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = decoded
    next()
  } catch {
    return res.status(403).json({ mensaje: 'Token inválido o expirado' })
  }
}
