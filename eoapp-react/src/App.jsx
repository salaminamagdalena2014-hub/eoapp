import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Dashboard from './pages/Dashboard'
import Ingresos from './pages/Ingresos'
import Gastos from './pages/Gastos'
import Categorias from './pages/Categorias'
import Metas from './pages/Metas'
import Error from './pages/Error'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ingresos" element={<Ingresos />} />
      <Route path="/gastos" element={<Gastos />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/metas" element={<Metas />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
