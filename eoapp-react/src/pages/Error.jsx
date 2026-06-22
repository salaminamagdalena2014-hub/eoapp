import { useNavigate } from 'react-router-dom'
import '../styles/error.css'

export default function Error() {
  const navigate = useNavigate()

  return (
    <>
      <header className="header">
        <div className="logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">Sistema</span>
        </div>
      </header>

      <main className="main-content">
        <div className="error-card">
          <div className="error-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>

          <h1 className="error-title">Página no encontrada</h1>

          <p className="error-message">
            La página que buscas no existe o no se pudo completar la operación solicitada.
            Por favor, intenta nuevamente.
          </p>

          <div className="error-actions">
            <button className="btn-retry" onClick={() => window.location.reload()}>
              Reintentar
            </button>
            <button className="btn-home" onClick={() => navigate('/')}>
              Volver al inicio
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Si el problema persiste, contacta al soporte técnico</p>
      </footer>
    </>
  )
}
