import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/gastos.css'

const initialGastos = [
  { id: 1, fecha: '2025-10-10', descripcion: 'Supermercado', categoria: 'Alimentación', monto: 150 },
  { id: 2, fecha: '2025-10-08', descripcion: 'Transporte', categoria: 'Transporte', monto: 45 },
  { id: 3, fecha: '2025-10-06', descripcion: 'Netflix', categoria: 'Entretenimiento', monto: 15 },
  { id: 4, fecha: '2025-10-04', descripcion: 'Farmacia', categoria: 'Salud', monto: 60 },
  { id: 5, fecha: '2025-10-02', descripcion: 'Electricidad', categoria: 'Servicios', monto: 85 },
]

const badgeClass = {
  'Alimentación': 'badge-alimentacion',
  'Transporte': 'badge-transporte',
  'Entretenimiento': 'badge-entretenimiento',
  'Salud': 'badge-salud',
  'Servicios': 'badge-servicios',
}

export default function Gastos() {
  const [gastos, setGastos] = useState(initialGastos)
  const [search, setSearch] = useState('')

  const filtered = gastos.filter(
    (g) =>
      g.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      g.categoria.toLowerCase().includes(search.toLowerCase())
  )

  const total = gastos.reduce((sum, g) => sum + g.monto, 0)

  const handleDelete = (id) => {
    setGastos(gastos.filter((g) => g.id !== id))
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar variant="auth" />

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Gastos</h1>
        </header>

        <div className="content-wrapper">
          <section className="page-intro">
            <div>
              <h2 className="intro-title">Gastos</h2>
              <p className="intro-subtitle">Controla y gestiona tus gastos</p>
            </div>
            <button className="btn-new-expense">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Nuevo Gasto
            </button>
          </section>

          <div className="expense-summary">
            <div className="summary-card">
              <div className="summary-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 3 9 21 6 12 2 12"/>
                </svg>
              </div>
              <div className="summary-content">
                <div className="summary-label">Total de gastos</div>
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
                placeholder="Buscar gastos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <section className="gastos-section">
            <div className="table-container">
              <table className="gastos-table">
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
                  {filtered.map((g) => (
                    <tr key={g.id}>
                      <td className="date">{g.fecha}</td>
                      <td className="description">{g.descripcion}</td>
                      <td className="category">
                        <span className={`badge ${badgeClass[g.categoria] || ''}`}>{g.categoria}</span>
                      </td>
                      <td className="amount negative">-${g.monto.toFixed(2)}</td>
                      <td className="actions">
                        <button className="btn-edit" title="Editar">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                          </svg>
                        </button>
                        <button className="btn-delete" title="Eliminar" onClick={() => handleDelete(g.id)}>
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
