const express = require('express')
const verificarToken = require('../middleware/verificarToken')
const { categorias } = require('../data/mockData')

const router = express.Router()

// GET /api/categorias
router.get('/', verificarToken, (req, res) => {
  // Con MySQL: SELECT * FROM categorias WHERE usuario_id = ?
  const datos = categorias.filter((c) => c.usuario_id === req.usuario.id)
  res.json(datos)
})

// POST /api/categorias
router.post('/', verificarToken, (req, res) => {
  const { nombre, tipo } = req.body

  if (!nombre || !tipo) {
    return res.status(400).json({ mensaje: 'Nombre y tipo son requeridos' })
  }
  if (!['ingreso', 'gasto'].includes(tipo)) {
    return res.status(400).json({ mensaje: 'El tipo debe ser "ingreso" o "gasto"' })
  }

  // Con MySQL: INSERT INTO categorias (nombre, tipo, usuario_id) VALUES (...)
  const nueva = { id: categorias.length + 1, nombre, tipo, usuario_id: req.usuario.id }
  categorias.push(nueva)
  res.status(201).json(nueva)
})

// PUT /api/categorias/:id
router.put('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = categorias.findIndex((c) => c.id === id && c.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Categoría no encontrada' })
  }

  // Con MySQL: UPDATE categorias SET nombre=?, tipo=? WHERE id=? AND usuario_id=?
  categorias[idx] = { ...categorias[idx], ...req.body, id, usuario_id: req.usuario.id }
  res.json(categorias[idx])
})

// DELETE /api/categorias/:id
router.delete('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = categorias.findIndex((c) => c.id === id && c.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Categoría no encontrada' })
  }

  // Con MySQL: DELETE FROM categorias WHERE id=? AND usuario_id=?
  categorias.splice(idx, 1)
  res.json({ mensaje: 'Categoría eliminada correctamente' })
})

module.exports = router
