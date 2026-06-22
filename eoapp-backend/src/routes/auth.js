const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { usuarios } = require('../data/mockData')

const router = express.Router()

// POST /api/auth/registro
router.post('/registro', async (req, res) => {
  const { nombres, apellidos, correo, cedula, fechaNacimiento, password } = req.body

  if (!correo || !password) {
    return res.status(400).json({ mensaje: 'Correo y contraseña son requeridos' })
  }

  // Con MySQL: SELECT * FROM usuarios WHERE correo = ?
  const existe = usuarios.find((u) => u.correo === correo)
  if (existe) {
    return res.status(409).json({ mensaje: 'El correo ya está registrado' })
  }

  // Con MySQL: INSERT INTO usuarios (nombres, apellidos, correo, cedula, fecha_nacimiento, password) VALUES (...)
  const hashed = await bcrypt.hash(password, 10)
  const nuevo = { id: usuarios.length + 1, nombres, apellidos, correo, cedula, fechaNacimiento, password: hashed }
  usuarios.push(nuevo)

  res.status(201).json({ mensaje: 'Usuario registrado correctamente' })
})

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { correo, password } = req.body

  if (!correo || !password) {
    return res.status(400).json({ mensaje: 'Correo y contraseña son requeridos' })
  }

  // Con MySQL: SELECT * FROM usuarios WHERE correo = ?
  const usuario = usuarios.find((u) => u.correo === correo)
  if (!usuario) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' })
  }

  const valido = await bcrypt.compare(password, usuario.password)
  if (!valido) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' })
  }

  const token = jwt.sign(
    { id: usuario.id, correo: usuario.correo, nombres: usuario.nombres },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  )

  res.json({ token, usuario: { id: usuario.id, nombres: usuario.nombres, correo: usuario.correo } })
})

module.exports = router
