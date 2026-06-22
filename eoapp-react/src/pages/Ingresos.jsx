import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/ingresos.css'

const initialIngresos = [
  { id: 1, fecha: '2025-10-01', descripcion: 'Salario mensual', categoria: 'Sueldo', monto: 3500 },
  { id: 2, fecha: '2025-10-05', descripcion: 'Proyecto freelance web', categoria: 'Freelance', monto: 800 },
  { id: 3, fecha: '2025-10-07', descripcion: 'Salario mensual', categoria: 'Sueldo', monto: 3600 },
  { id: 4, fecha: '2025-10-12', descripcion: 'Inversión dividendos', categoria: 'Inversiones', monto: 350 },
]

const badgeClass = { Sueldo: 'badge-sueldo', Freelance: 'badge-freelance', Inversiones: 'badge-inversiones' }

export default function Ingresos() {
  const [ingresos, setIngresos] = useState(initialIngresos)
  const [search, setSearch] = useState('')

  const filtered = ingresos.filter(
    (i) =>
      i.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      i.categoria.toLowerCase().includes(search.toLowerCase())
  )

  const total = ingresos.reduce((sum, i) => sum + i.monto, 0)

  const handleDelete = (id) => {
    setIngresos(ingresos.filter((i) => i.id !== id))
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar variant="auth" />

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Ingresos</h1>
        </header>

        <div className="content-wrapper">
          <section className="page-intro">
            <div>
              <h2 className="intro-title">Ingresos</h2>
              <p className="intro-subtitle">Gestiona tus fuentes de ingreso</p>
            </div>
            <button className="btn-new-income">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Nuevo Ingreso
            </button>
          </section>

          <div className="income-summary">
            <div className="summary-card">
              <div className="summary-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="summary-content">
                <div className="summary-label">Total de ingresos</div>
                <div className="summary-value">${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
            </div>
          </div>

          <div className="search-section">
            <div className="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Buscar ingresos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <section className="ingresos-section">
            <div className="table-container">
              <table className="ingresos-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Categoría</th>
                    <th>Monto</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((ing) => (
                    <tr key={ing.id}>
                      <td className="date">{ing.fecha}</td>
                      <td className="description">{ing.descripcion}</td>
                      <td className="category">
                        <span className={`badge ${badgeClass[ing.categoria] || ''}`}>{ing.categoria}</span>
                      </td>
                      <td className="amount positive">+${ing.monto.toFixed(2)}</td>
                      <td className="actions">
                        <button className="btn-edit" title="Editar">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                          </svg>
                        </button>
                        <button className="btn-delete" title="Eliminar" onClick={() => handleDelete(ing.id)}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            <line x1="10" y1="11" x2="10" y2="17"/>
                            <line x1="14" y1="11" x2="14" y2="17"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
