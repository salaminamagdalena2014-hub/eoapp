// Conexion a MySQL - lista para activar cuando se configure la base de datos
//
// Pasos para activar:
//   1. Copiar .env.example a .env y completar los datos de conexion
//   2. Ejecutar el script database/eoapp.sql en MySQL
//   3. Descomentar el bloque de abajo y comentar el "module.exports = null"
//   4. En cada ruta, reemplazar los arrays de mockData por consultas con: db.query(...)

/*
const mysql = require('mysql2/promise')

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
})

module.exports = db
*/

// MODO MOCK: el backend usa datos en memoria mientras no haya MySQL disponible
module.exports = null
