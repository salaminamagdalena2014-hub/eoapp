import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/categorias.css'

const initialCategorias = {
  ingresos: [
    { id: 1, nombre: 'Sueldo', movimientos: 5 },
    { id: 2, nombre: 'Freelance', movimientos: 3 },
    { id: 3, nombre: 'Inversiones', movimientos: 2 },
  ],
  gastos: [
    { id: 4, nombre: 'Alimentación', movimientos: 8 },
    { id: 5, nombre: 'Transporte', movimientos: 6 },
    { id: 6, nombre: 'Entretenimiento', movimientos: 4 },
    { id: 7, nombre: 'Salud', movimientos: 2 },
    { id: 8, nombre: 'Servicios', movimientos: 3 },
  ],
}

const IncomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)

const ExpenseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 3 9 21 6 12 2 12"/>
  </svg>
)

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

export default function Categorias() {
  const [categorias, setCategorias] = useState(initialCategorias)

  const handleDelete = (type, id) => {
    setCategorias((prev) => ({
      ...prev,
      [type]: prev[type].filter((c) => c.id !== id),
    }))
  }

  const renderGroup = (type, list, Icon) => (
    <div className="category-group">
      <h3 className="group-title">{type === 'ingresos' ? 'Ingresos' : 'Gastos'}</h3>
      {list.map((cat) => (
        <div className="category-item" key={cat.id}>
          <div className={`category-icon ${type === 'ingresos' ? 'income' : 'expense'}`}>
            <Icon />
          </div>
          <div className="category-info">
            <h4 className="category-name">{cat.nombre}</h4>
            <p className="category-count">{cat.movimientos} movimientos</p>
          </div>
          <div className="category-actions">
            <button className="btn-icon" title="Editar"><EditIcon /></button>
            <button className="btn-icon btn-delete" title="Eliminar" onClick={() => handleDelete(type, cat.id)}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar variant="auth" />

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Categorías</h1>
        </header>

        <div className="content-wrapper">
          <section className="page-intro">
            <div>
              <h2 className="intro-title">Categorías</h2>
              <p className="intro-subtitle">Organiza tus ingresos y gastos</p>
            </div>
            <button className="btn-new-category">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Nueva Categoría
            </button>
          </section>

          <section className="categories-section">
            <div className="categories-grid">
              {renderGroup('ingresos', categorias.ingresos, IncomeIcon)}
              {renderGroup('gastos', categorias.gastos, ExpenseIcon)}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
