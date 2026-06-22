const express = require('express')
const verificarToken = require('../middleware/verificarToken')
const { metas } = require('../data/mockData')

const router = express.Router()

// GET /api/metas
router.get('/', verificarToken, (req, res) => {
  // Con MySQL: SELECT * FROM metas WHERE usuario_id = ?
  const datos = metas.filter((m) => m.usuario_id === req.usuario.id)
  res.json(datos)
})

// POST /api/metas
router.post('/', verificarToken, (req, res) => {
  const { nombre, descripcion, actual, total, fecha } = req.body

  if (!nombre || !total) {
    return res.status(400).json({ mensaje: 'Nombre y total son requeridos' })
  }

  // Con MySQL: INSERT INTO metas (usuario_id, nombre, descripcion, actual, total, fecha) VALUES (...)
  const nueva = {
    id: metas.length + 1,
    usuario_id: req.usuario.id,
    nombre,
    descripcion: descripcion || '',
    actual: Number(actual) || 0,
    total: Number(total),
    fecha: fecha || null,
  }
  metas.push(nueva)
  res.status(201).json(nueva)
})

// PUT /api/metas/:id
router.put('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = metas.findIndex((m) => m.id === id && m.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Meta no encontrada' })
  }

  // Con MySQL: UPDATE metas SET nombre=?, descripcion=?, actual=?, total=?, fecha=? WHERE id=? AND usuario_id=?
  metas[idx] = { ...metas[idx], ...req.body, id, usuario_id: req.usuario.id }
  res.json(metas[idx])
})

// DELETE /api/metas/:id
router.delete('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = metas.findIndex((m) => m.id === id && m.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Meta no encontrada' })
  }

  // Con MySQL: DELETE FROM metas WHERE id=? AND usuario_id=?
  metas.splice(idx, 1)
  res.json({ mensaje: 'Meta eliminada correctamente' })
})

module.exports = router
