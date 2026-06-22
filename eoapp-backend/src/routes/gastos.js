const express = require('express')
const verificarToken = require('../middleware/verificarToken')
const { gastos } = require('../data/mockData')

const router = express.Router()

// GET /api/gastos
router.get('/', verificarToken, (req, res) => {
  // Con MySQL: SELECT * FROM gastos WHERE usuario_id = ? ORDER BY fecha DESC
  const datos = gastos.filter((g) => g.usuario_id === req.usuario.id)
  res.json(datos)
})

// POST /api/gastos
router.post('/', verificarToken, (req, res) => {
  const { fecha, descripcion, categoria, monto } = req.body

  if (!descripcion || !monto) {
    return res.status(400).json({ mensaje: 'Descripción y monto son requeridos' })
  }

  // Con MySQL: INSERT INTO gastos (usuario_id, fecha, descripcion, categoria, monto) VALUES (...)
  const nuevo = {
    id: gastos.length + 1,
    usuario_id: req.usuario.id,
    fecha: fecha || new Date().toISOString().split('T')[0],
    descripcion,
    categoria: categoria || 'Sin categoría',
    monto: Number(monto),
  }
  gastos.push(nuevo)
  res.status(201).json(nuevo)
})

// PUT /api/gastos/:id
router.put('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = gastos.findIndex((g) => g.id === id && g.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Gasto no encontrado' })
  }

  // Con MySQL: UPDATE gastos SET fecha=?, descripcion=?, categoria=?, monto=? WHERE id=? AND usuario_id=?
  gastos[idx] = { ...gastos[idx], ...req.body, id, usuario_id: req.usuario.id }
  res.json(gastos[idx])
})

// DELETE /api/gastos/:id
router.delete('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = gastos.findIndex((g) => g.id === id && g.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Gasto no encontrado' })
  }

  // Con MySQL: DELETE FROM gastos WHERE id=? AND usuario_id=?
  gastos.splice(idx, 1)
  res.json({ mensaje: 'Gasto eliminado correctamente' })
})

module.exports = router
