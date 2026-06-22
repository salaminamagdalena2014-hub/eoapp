import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../styles/home.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar variant="public" />

      <div style={{ marginLeft: '250px', flex: 1 }}>
        <header className="header"></header>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M8 12h8M12 8v8" strokeLinecap="round"/>
                </svg>
                Gestión Financiera Personal
              </div>

              <h1 className="hero-title">
                Controla tus finanzas con<br />
                <span className="hero-title-highlight">EO App</span>
              </h1>

              <p className="hero-description">
                Registra ingresos, gastos y metas de ahorro de manera organizada. Toma<br />
                el control de tu economía personal con una herramienta simple y efectiva.
              </p>

              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => navigate('/registro')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="17" y1="11" x2="23" y2="11"/>
                  </svg>
                  Comenzar Gratis
                </button>
                <button className="btn-secondary" onClick={() => navigate('/dashboard')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                  Ver Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="modules">
          <div className="container">
            <h2 className="modules-title">Módulos del Sistema</h2>

            <div className="modules-grid">
              {[
                { label: 'Dashboard', colorClass: 'module-icon-blue', icon: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></> },
                { label: 'Ingresos', colorClass: 'module-icon-green', icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> },
                { label: 'Gastos', colorClass: 'module-icon-red', icon: <polyline points="22 12 18 12 15 3 9 21 6 12 2 12"/> },
                { label: 'Categorías', colorClass: 'module-icon-purple', icon: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></> },
                { label: 'Presupuestos', colorClass: 'module-icon-orange', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></> },
                { label: 'Reportes', colorClass: 'module-icon-teal', icon: <><circle cx="12" cy="12" r="1"/><path d="M12 1v6m0 6v6"/><path d="M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24"/><path d="M1 12h6m6 0h6"/><path d="M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24"/></> },
                { label: 'Metas de Ahorro', colorClass: 'module-icon-pink', icon: <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 2.2"/> },
                { label: 'Historial', colorClass: 'module-icon-indigo', icon: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></> },
              ].map(({ label, colorClass, icon }) => (
                <div className="module-card" key={label}>
                  <div className={`module-icon ${colorClass}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {icon}
                    </svg>
                  </div>
                  <h3 className="module-title">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
