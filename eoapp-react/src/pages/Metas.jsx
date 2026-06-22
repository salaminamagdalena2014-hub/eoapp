import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/metas.css'

const initialMetas = [
  { id: 1, nombre: 'Fondo de emergencia', descripcion: 'Ahorro para imprevistos y emergencias', actual: 2500, total: 5000, fecha: '2025-12-31' },
  { id: 2, nombre: 'Vacaciones', descripcion: 'Viaje de vacaciones familiares', actual: 800, total: 2000, fecha: '2026-06-01' },
  { id: 3, nombre: 'Nuevo laptop', descripcion: 'Equipo para trabajo y estudios', actual: 450, total: 1500, fecha: '2025-11-15' },
]

const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
  </svg>
)

const DeleteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
)

export default function Metas() {
  const [metas, setMetas] = useState(initialMetas)

  const totalAhorrado = metas.reduce((sum, m) => sum + m.actual, 0)

  const handleDelete = (id) => {
    setMetas(metas.filter((m) => m.id !== id))
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar variant="auth" />

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Metas de Ahorro</h1>
        </header>

        <div className="content-wrapper">
          <section className="page-intro">
            <div>
              <h2 className="intro-title">Metas de Ahorro</h2>
              <p className="intro-subtitle">Define y alcanza tus objetivos financieros</p>
            </div>
            <button className="btn-new-goal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Nueva Meta
            </button>
          </section>

          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-icon icon-active">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div className="summary-content">
                <div className="summary-label">Metas Activas</div>
                <div className="summary-value">{metas.length}</div>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon icon-completed">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className="summary-content">
                <div className="summary-label">Metas Completadas</div>
                <div className="summary-value">1</div>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon icon-total">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="summary-content">
                <div className="summary-label">Total Ahorrado</div>
                <div className="summary-value">${totalAhorrado.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <section className="goals-section">
            <div className="section-header">
              <div className="section-title-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="section-title">En Progreso</h3>
            </div>

            <div className="goals-grid">
              {metas.map((meta) => {
                const pct = Math.round((meta.actual / meta.total) * 100)
                return (
                  <div className="goal-card" key={meta.id}>
                    <div className="goal-header">
                      <div className="goal-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                      <div className="goal-title-section">
                        <h4 className="goal-name">{meta.nombre}</h4>
                        <p className="goal-description">{meta.descripcion}</p>
                      </div>
                      <div className="goal-actions">
                        <button className="btn-icon" title="Editar"><EditIcon /></button>
                        <button className="btn-icon btn-delete" title="Eliminar" onClick={() => handleDelete(meta.id)}>
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>

                    <div className="goal-progress-section">
                      <div className="progress-header">
                        <span className="progress-label">Progreso</span>
                        <span className="progress-amount">
                          ${meta.actual.toLocaleString()} / ${meta.total.toLocaleString()}
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${pct}%` }}></div>
                      </div>
                      <div className="progress-info">
                        <span className="progress-text">{pct}% completado</span>
                        <span className="goal-date">{meta.fecha}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
