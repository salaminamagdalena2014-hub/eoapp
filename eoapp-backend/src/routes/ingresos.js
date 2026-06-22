const express = require('express')
const verificarToken = require('../middleware/verificarToken')
const { ingresos } = require('../data/mockData')

const router = express.Router()

// GET /api/ingresos
router.get('/', verificarToken, (req, res) => {
  // Con MySQL: SELECT * FROM ingresos WHERE usuario_id = ? ORDER BY fecha DESC
  const datos = ingresos.filter((i) => i.usuario_id === req.usuario.id)
  res.json(datos)
})

// POST /api/ingresos
router.post('/', verificarToken, (req, res) => {
  const { fecha, descripcion, categoria, monto } = req.body

  if (!descripcion || !monto) {
    return res.status(400).json({ mensaje: 'Descripción y monto son requeridos' })
  }

  // Con MySQL: INSERT INTO ingresos (usuario_id, fecha, descripcion, categoria, monto) VALUES (...)
  const nuevo = {
    id: ingresos.length + 1,
    usuario_id: req.usuario.id,
    fecha: fecha || new Date().toISOString().split('T')[0],
    descripcion,
    categoria: categoria || 'Sin categoría',
    monto: Number(monto),
  }
  ingresos.push(nuevo)
  res.status(201).json(nuevo)
})

// PUT /api/ingresos/:id
router.put('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = ingresos.findIndex((i) => i.id === id && i.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Ingreso no encontrado' })
  }

  // Con MySQL: UPDATE ingresos SET fecha=?, descripcion=?, categoria=?, monto=? WHERE id=? AND usuario_id=?
  ingresos[idx] = { ...ingresos[idx], ...req.body, id, usuario_id: req.usuario.id }
  res.json(ingresos[idx])
})

// DELETE /api/ingresos/:id
router.delete('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = ingresos.findIndex((i) => i.id === id && i.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Ingreso no encontrado' })
  }

  // Con MySQL: DELETE FROM ingresos WHERE id=? AND usuario_id=?
  ingresos.splice(idx, 1)
  res.json({ mensaje: 'Ingreso eliminado correctamente' })
})

module.exports = router
