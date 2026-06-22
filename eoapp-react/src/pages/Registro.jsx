import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../styles/registro.css'

export default function Registro() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    cedula: '',
    fechaNacimiento: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar variant="public" />

      <div style={{ marginLeft: '250px', flex: 1 }}>
        <header className="header">
          <div className="logo">
            <div className="logo-icon">S</div>
            <span className="logo-text">Sistema</span>
          </div>
        </header>

        <main className="main-content">
          <div className="register-card">
            <h1 className="register-title">Registro de usuario</h1>
            <p className="register-subtitle">Completa los campos para crear tu cuenta</p>

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombres">Nombres</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  placeholder="Ingresa tus nombres"
                  value={form.nombres}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Ingresa tus apellidos"
                  value={form.apellidos}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="correo">Correo Electrónico</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="ejemplo@correo.com"
                  value={form.correo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cedula">Cédula</label>
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  placeholder="Ingresa tu número de cédula"
                  value={form.cedula}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                <div className="date-input-wrapper">
                  <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={form.fechaNacimiento}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-submit">Guardar datos</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
