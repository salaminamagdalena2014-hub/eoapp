import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../styles/login.css'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ usuario: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
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
          <div className="login-card">
            <h1 className="login-title">Inicio de sesión</h1>
            <p className="login-subtitle">Ingresa tus credenciales para continuar</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="usuario">Contraseña o Usuario</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Ingresa tu usuario"
                  value={form.usuario}
                  onChange={(e) => setForm({ ...form, usuario: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn-submit">Iniciar sesión</button>
            </form>

            <p className="login-footer">
              ¿No tienes cuenta?{' '}
              <button className="link-btn" onClick={() => navigate('/registro')}>
                Registrarse
              </button>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
