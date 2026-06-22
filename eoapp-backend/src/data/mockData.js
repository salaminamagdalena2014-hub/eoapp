const bcrypt = require('bcrypt')

// Usuario de prueba precargado
// Correo: eduardo@eoapp.com | Contraseña: password123
const usuarios = [
  {
    id: 1,
    nombres: 'Eduardo',
    apellidos: 'Machado',
    correo: 'eduardo@eoapp.com',
    cedula: '1234567890',
    password: bcrypt.hashSync('password123', 10),
  },
]

const ingresos = [
  { id: 1, usuario_id: 1, fecha: '2025-10-01', descripcion: 'Salario mensual', categoria: 'Sueldo', monto: 3500 },
  { id: 2, usuario_id: 1, fecha: '2025-10-05', descripcion: 'Proyecto freelance web', categoria: 'Freelance', monto: 800 },
  { id: 3, usuario_id: 1, fecha: '2025-10-07', descripcion: 'Salario mensual', categoria: 'Sueldo', monto: 3600 },
  { id: 4, usuario_id: 1, fecha: '2025-10-12', descripcion: 'Inversión dividendos', categoria: 'Inversiones', monto: 350 },
]

const gastos = [
  { id: 1, usuario_id: 1, fecha: '2025-10-02', descripcion: 'Supermercado', categoria: 'Alimentación', monto: 150 },
  { id: 2, usuario_id: 1, fecha: '2025-10-04', descripcion: 'Netflix suscripción', categoria: 'Entretenimiento', monto: 15 },
  { id: 3, usuario_id: 1, fecha: '2025-10-05', descripcion: 'Transporte público', categoria: 'Transporte', monto: 45 },
  { id: 4, usuario_id: 1, fecha: '2025-10-06', descripcion: 'Farmacia', categoria: 'Salud', monto: 60 },
]

const categorias = [
  { id: 1, nombre: 'Sueldo', tipo: 'ingreso', usuario_id: 1 },
  { id: 2, nombre: 'Freelance', tipo: 'ingreso', usuario_id: 1 },
  { id: 3, nombre: 'Inversiones', tipo: 'ingreso', usuario_id: 1 },
  { id: 4, nombre: 'Alimentación', tipo: 'gasto', usuario_id: 1 },
  { id: 5, nombre: 'Transporte', tipo: 'gasto', usuario_id: 1 },
  { id: 6, nombre: 'Entretenimiento', tipo: 'gasto', usuario_id: 1 },
  { id: 7, nombre: 'Salud', tipo: 'gasto', usuario_id: 1 },
]

const metas = [
  { id: 1, usuario_id: 1, nombre: 'Fondo de emergencia', descripcion: 'Ahorro para imprevistos', actual: 2500, total: 5000, fecha: '2025-12-31' },
  { id: 2, usuario_id: 1, nombre: 'Vacaciones', descripcion: 'Viaje de vacaciones familiares', actual: 800, total: 2000, fecha: '2026-06-01' },
  { id: 3, usuario_id: 1, nombre: 'Nuevo laptop', descripcion: 'Equipo para trabajo y estudios', actual: 450, total: 1500, fecha: '2025-11-15' },
]

module.exports = { usuarios, ingresos, gastos, categorias, metas }
