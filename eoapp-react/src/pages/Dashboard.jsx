import Sidebar from '../components/Sidebar'
import '../styles/dashboard.css'

const transactions = [
  { type: 'income', name: 'Salario mensual', category: 'Sueldo', date: '2025-10-07', amount: '+$3600.00' },
  { type: 'expense', name: 'Supermercado', category: 'Alimentacion', date: '2025-10-06', amount: '-$150.00' },
  { type: 'income', name: 'Freelance proyecto', category: 'Freelance', date: '2025-10-05', amount: '+$800.00' },
  { type: 'expense', name: 'Transporte público', category: 'Transporte', date: '2025-10-05', amount: '-$45.00' },
  { type: 'expense', name: 'Netflix suscripción', category: 'Entretenimiento', date: '2025-10-04', amount: '-$15.00' },
]

const goals = [
  { name: 'Fondo de emergencia', current: 2500, total: 5000 },
  { name: 'Vacaciones', current: 800, total: 2000 },
  { name: 'Nuevo laptop', current: 450, total: 1500 },
]

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar variant="auth" />

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Dashboard</h1>
        </header>

        <div className="content-wrapper">
          <section className="welcome-section">
            <h2 className="welcome-title">¡Bienvenido, Eduardo!</h2>
            <p className="welcome-subtitle">Aquí tienes un resumen de tus finanzas personales.</p>
          </section>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon stat-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M8 12h8M12 8v8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-label">Balance Total</div>
                <div className="stat-value">$3,450.00</div>
              </div>
              <div className="stat-badge stat-badge-positive">+12.5%</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-icon-green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-label">Ingresos del Mes</div>
                <div className="stat-value">$5,200.00</div>
              </div>
              <div className="stat-badge stat-badge-positive">+8.2%</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-icon-red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 3 9 21 6 12 2 12"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-label">Gastos del Mes</div>
                <div className="stat-value">$1,750.00</div>
              </div>
              <div className="stat-badge stat-badge-negative">-3.1%</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-icon-orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-label">Metas Activas</div>
                <div className="stat-value">3</div>
              </div>
              <div className="stat-badge stat-badge-progress">75% completado</div>
            </div>
          </div>

          <div className="content-grid">
            <section className="transactions-section">
              <h3 className="section-title">Transacciones Recientes</h3>
              <div className="transaction-list">
                {transactions.map((t, i) => (
                  <div className="transaction-item" key={i}>
                    <div className={`transaction-icon ${t.type === 'income' ? 'income' : 'expense'}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {t.type === 'income'
                          ? <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                          : <polyline points="22 12 18 12 15 3 9 21 6 12 2 12"/>
                        }
                      </svg>
                    </div>
                    <div className="transaction-details">
                      <div className="transaction-name">{t.name}</div>
                      <div className="transaction-category">{t.category} • {t.date}</div>
                    </div>
                    <div className={`transaction-amount ${t.type === 'income' ? 'positive' : 'negative'}`}>
                      {t.amount}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="savings-section">
              <h3 className="section-title">Metas de Ahorro</h3>
              <div className="savings-list">
                {goals.map((g) => {
                  const pct = Math.round((g.current / g.total) * 100)
                  return (
                    <div className="saving-goal" key={g.name}>
                      <div className="goal-header">
                        <div className="goal-name">{g.name}</div>
                        <div className="goal-amount">${g.current.toLocaleString()} / ${g.total.toLocaleString()}</div>
                      </div>
                      <div className="goal-progress">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%` }}></div>
                        </div>
                        <div className="progress-text">{pct}% completado</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
