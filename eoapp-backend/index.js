require('dotenv').config()
const express = require('express')
const cors = require('cors')

const authRoutes = require('./src/routes/auth')
const ingresosRoutes = require('./src/routes/ingresos')
const gastosRoutes = require('./src/routes/gastos')
const categoriasRoutes = require('./src/routes/categorias')
const metasRoutes = require('./src/routes/metas')

const app = express()

app.use(cors())
app.use(express.json())

// Rutas
app.use('/api/auth', authRoutes)
app.use('/api/ingresos', ingresosRoutes)
app.use('/api/gastos', gastosRoutes)
app.use('/api/categorias', categoriasRoutes)
app.use('/api/metas', metasRoutes)

// Ruta de verificacion
app.get('/api/health', (req, res) => {
  res.json({ estado: 'ok', mensaje: 'EO App API corriendo correctamente' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`EO App backend corriendo en http://localhost:${PORT}`)
})
