SERVICIO NACIONAL DE APRENDIZAJE – SENA
Evidencia GA8-220501096-AA1-EV02
INTEGRACIÓN DE MÓDULOS DEL SOFTWARE – EO APP

Aprendiz: Eduardo Rafael Machado Cantillo
Programa: Tecnólogo en Análisis y Desarrollo de Software
Instructor: Luis Manuel Cabarcas
Ficha: *(número de ficha)*
Fecha de entrega: 22 de junio de 2026

---

1. Introducción

Este documento evidencia la integración de los módulos desarrollados para EO App, una aplicación de gestión financiera personal. Se documentan los módulos implementados, la arquitectura del sistema, el ambiente de desarrollo, las pruebas realizadas y la aceptación de la integración.

El proyecto está compuesto por dos capas integradas: un frontend desarrollado como Single Page Application (SPA) con React y un backend API REST construido con Node.js y Express, conectado a una base de datos MySQL. Ambas capas se comunican mediante peticiones HTTP y autenticación basada en tokens JWT.

---

2. Objetivo

Demostrar la integración funcional de los módulos del sistema (frontend y backend) y validar su correcto funcionamiento en conjunto conforme a los requerimientos establecidos para EO App.

---

3. Descripción del Proyecto EO App

EO App es una aplicación web de gestión financiera personal que permite al usuario administrar ingresos, gastos, categorías y metas de ahorro. La aplicación cuenta con una interfaz web moderna desarrollada en React y un servidor backend API REST en Node.js que gestiona la autenticación y el acceso a los datos almacenados en MySQL.

---

4. Módulos Integrados

**Frontend (React SPA):**
- **Home (Inicio):** Página de bienvenida con descripción de funcionalidades y accesos a Registro y Demo.
- **Login (Inicio de sesión):** Formulario de autenticación; envía credenciales al endpoint `POST /api/auth/login` y almacena el token JWT recibido.
- **Registro:** Formulario de creación de cuenta; envía los datos al endpoint `POST /api/auth/registro` y redirige al Login al completar.
- **Dashboard:** Vista resumen con tarjetas de estadísticas (balance total, ingresos del mes, gastos del mes), listado de transacciones recientes y progreso de metas de ahorro, obtenidos desde la API.
- **Ingresos:** Listado de ingresos consumido desde `GET /api/ingresos`, con búsqueda en tiempo real, resumen del total y operaciones de creación y eliminación.
- **Gastos:** Listado de gastos consumido desde `GET /api/gastos`, con búsqueda, resumen del total mensual y operaciones de creación y eliminación.
- **Categorías:** Gestión de categorías consumida desde `GET /api/categorias`, con opciones de agregar, editar y eliminar.
- **Metas de Ahorro:** Tarjetas de objetivos financieros con barra de progreso, obtenidas desde `GET /api/metas`. Permite crear, editar y eliminar metas.
- **Error 404:** Página de error para rutas no encontradas con enlace de regreso al inicio.
- **Sidebar:** Componente de navegación lateral con variante pública (Inicio, Login, Registro) y autenticada (Dashboard, Ingresos, Gastos, Categorías, Metas).

**Backend (Node.js / Express):**
- **Autenticación:** Registro e inicio de sesión con contraseñas cifradas mediante bcrypt y emisión de token JWT.
- **Ingresos:** CRUD completo (`GET`, `POST`, `PUT`, `DELETE`) con protección por token.
- **Gastos:** CRUD completo con protección por token.
- **Categorías:** CRUD completo con protección por token.
- **Metas de ahorro:** CRUD completo con protección por token.

---

5. Arquitectura del Sistema

**Tipo de arquitectura:** Cliente-Servidor. SPA en el frontend consumiendo una API REST en el backend, con base de datos relacional MySQL.

```
[ Navegador - React SPA ]
        |  HTTP / JSON
        v
[ Node.js + Express - API REST ]
        |  mysql2
        v
[ Base de datos MySQL ]
```

**Estructura de carpetas — Frontend (eoapp-react):**

```
src/
  App.jsx           → Definición de rutas principales
  main.jsx          → Punto de entrada, BrowserRouter
  components/
    Sidebar.jsx     → Navegación lateral (variante pública / autenticada)
  pages/
    Home.jsx        → Vista de inicio
    Login.jsx       → Inicio de sesión (consume POST /api/auth/login)
    Registro.jsx    → Registro de usuario (consume POST /api/auth/registro)
    Dashboard.jsx   → Resumen financiero
    Ingresos.jsx    → Gestión de ingresos (consume /api/ingresos)
    Gastos.jsx      → Gestión de gastos (consume /api/gastos)
    Categorias.jsx  → Gestión de categorías (consume /api/categorias)
    Metas.jsx       → Metas de ahorro (consume /api/metas)
    Error.jsx       → Página 404
  styles/           → Archivos CSS por módulo
```

**Estructura de carpetas — Backend (eoapp-backend):**

```
index.js                      → Servidor Express, configuración de rutas
src/
  db.js                       → Conexión al pool de MySQL (mysql2)
  middleware/
    verificarToken.js         → Validación de JWT en rutas protegidas
  routes/
    auth.js                   → POST /registro · POST /login
    ingresos.js               → GET · POST · PUT /:id · DELETE /:id
    gastos.js                 → GET · POST · PUT /:id · DELETE /:id
    categorias.js             → GET · POST · PUT /:id · DELETE /:id
    metas.js                  → GET · POST · PUT /:id · DELETE /:id
  data/
    mockData.js               → Datos de prueba en memoria
database/
  eoapp.sql                   → Script de creación de tablas MySQL
.env.example                  → Variables de entorno requeridas
```

**Tecnologías utilizadas:**

| Capa       | Tecnología        | Versión  | Rol                                   |
|------------|-------------------|----------|---------------------------------------|
| Frontend   | React             | 19.x     | Biblioteca de interfaz de usuario     |
| Frontend   | React Router DOM  | 7.x      | Enrutamiento del lado del cliente     |
| Frontend   | Vite              | 8.x      | Bundler y servidor de desarrollo      |
| Backend    | Node.js           | 20.x     | Entorno de ejecución del servidor     |
| Backend    | Express           | 4.x      | Framework de API REST                 |
| Backend    | jsonwebtoken      | 9.x      | Generación y validación de JWT        |
| Backend    | bcrypt            | 5.x      | Cifrado de contraseñas                |
| Backend    | mysql2            | 3.x      | Conexión a base de datos MySQL        |
| Backend    | dotenv            | 16.x     | Gestión de variables de entorno       |
| Base datos | MySQL             | 8.x      | Almacenamiento relacional             |
| Común      | Git / GitHub      | —        | Control de versiones                  |

---

6. Ambiente de Desarrollo y Pruebas

| Componente            | Detalle                         |
|-----------------------|---------------------------------|
| Sistema Operativo     | Windows 10/11                   |
| Editor                | Visual Studio Code              |
| Frontend (dev server) | Vite (`npm run dev`) — puerto 5173 |
| Backend (servidor)    | Node.js + nodemon (`npm run dev`) — puerto 3000 |
| Base de datos         | MySQL 8.x                       |
| Pruebas de API        | Postman                         |
| Navegador de prueba   | Google Chrome / Microsoft Edge  |
| Control de versiones  | Git y GitHub                    |
| Gestor de paquetes    | npm                             |

---

7. Guía de Instalación y Ejecución del Proyecto

**Prerrequisitos:**
- Node.js 20.x o superior
- npm 9.x o superior
- MySQL 8.x (opcional; el backend funciona con datos en memoria sin configurarlo)

**Pasos para ejecutar el backend:**

```bash
# 1. Entrar a la carpeta del backend
cd eoapp-backend

# 2. Instalar dependencias
npm install

# 3. Crear archivo de variables de entorno
copy .env.example .env

# 4. Iniciar el servidor en modo desarrollo
npm run dev
# El servidor queda disponible en: http://localhost:3000
# Verificar: GET http://localhost:3000/api/health
```

**Pasos para ejecutar el frontend:**

```bash
# 1. Entrar a la carpeta del frontend
cd eoapp-react

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
# La aplicación queda disponible en: http://localhost:5173
```

**Credenciales de prueba (usuario precargado):**

| Campo    | Valor                    |
|----------|--------------------------|
| Correo   | eduardo@eoapp.com        |
| Contraseña | password123            |

**Activar MySQL (opcional):**
1. Ejecutar `database/eoapp.sql` en MySQL para crear las tablas.
2. Completar las variables `DB_*` en el archivo `.env`.
3. Descomentar el bloque de conexión en `src/db.js`.

---

8. Fragmentos de Código Fuente – Módulos Integrados

A continuación se presentan fragmentos representativos de los módulos codificados.

**8.1 Enrutamiento principal del frontend (`src/App.jsx`):**

```jsx
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
```

**8.2 Middleware de autenticación JWT (`src/middleware/verificarToken.js`):**

```js
const jwt = require('jsonwebtoken')

module.exports = function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado: token requerido' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = decoded
    next()
  } catch {
    return res.status(403).json({ mensaje: 'Token inválido o expirado' })
  }
}
```

**8.3 Módulo de autenticación – Login (`src/routes/auth.js`, fragmento):**

```js
// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { correo, password } = req.body

  if (!correo || !password) {
    return res.status(400).json({ mensaje: 'Correo y contraseña son requeridos' })
  }

  // Con MySQL: SELECT * FROM usuarios WHERE correo = ?
  const usuario = usuarios.find((u) => u.correo === correo)
  if (!usuario) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' })
  }

  const valido = await bcrypt.compare(password, usuario.password)
  if (!valido) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' })
  }

  const token = jwt.sign(
    { id: usuario.id, correo: usuario.correo, nombres: usuario.nombres },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  )

  res.json({ token, usuario: { id: usuario.id, nombres: usuario.nombres } })
})
```

**8.4 Módulo de Ingresos – CRUD protegido (`src/routes/ingresos.js`, fragmento):**

```js
// GET /api/ingresos  →  solo devuelve registros del usuario autenticado
router.get('/', verificarToken, (req, res) => {
  const datos = ingresos.filter((i) => i.usuario_id === req.usuario.id)
  res.json(datos)
})

// DELETE /api/ingresos/:id
router.delete('/:id', verificarToken, (req, res) => {
  const id = Number(req.params.id)
  const idx = ingresos.findIndex((i) => i.id === id && i.usuario_id === req.usuario.id)

  if (idx === -1) {
    return res.status(404).json({ mensaje: 'Ingreso no encontrado' })
  }

  ingresos.splice(idx, 1)
  res.json({ mensaje: 'Ingreso eliminado correctamente' })
})
```

**8.5 Script SQL de base de datos (`database/eoapp.sql`, fragmento):**

```sql
CREATE TABLE IF NOT EXISTS ingresos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id  INT NOT NULL,
  fecha       DATE NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  categoria   VARCHAR(100),
  monto       DECIMAL(10, 2) NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
```

---

9. Evidencia de Integración de Módulos

El flujo integrado de la aplicación funciona de la siguiente manera:

1. El usuario accede a **Home** (`/`) y puede navegar a Registro o ver el Demo.
2. En **Registro** (`/registro`) completa el formulario; el frontend envía los datos al endpoint `POST /api/auth/registro`. El backend valida los datos, cifra la contraseña con bcrypt y crea el usuario. El frontend redirige al Login.
3. En **Login** (`/login`) el usuario ingresa sus credenciales; el frontend envía `POST /api/auth/login`. El backend verifica la contraseña y devuelve un token JWT. El frontend almacena el token y redirige al Dashboard.
4. En el **Dashboard** el frontend consulta los datos de ingresos, gastos y metas enviando el token JWT en el header `Authorization: Bearer <token>`. El backend valida el token mediante el middleware `verificarToken` y devuelve solo los datos del usuario autenticado.
5. Los módulos **Ingresos**, **Gastos**, **Categorías** y **Metas** consumen sus respectivos endpoints CRUD, siempre incluyendo el token JWT para las operaciones protegidas.
6. El **Sidebar** en variante autenticada permite navegar entre módulos sin recargar la página (React Router).
7. Cualquier ruta no definida muestra la página **Error 404**.

---

10. Repositorio y Control de Versiones

Repositorio GitHub: *(enlace al repositorio)*

**Estructura de ramas:**

| Rama    | Propósito                              |
|---------|----------------------------------------|
| `main`  | Código estable e integrado             |

**Historial de commits representativos:**

| Hash (corto) | Mensaje del commit                              | Módulo       |
|--------------|------------------------------------------------|--------------|
| *(commit)*   | Inicialización del proyecto React con Vite     | Proyecto     |
| *(commit)*   | Estructura de rutas y componente Sidebar       | Frontend     |
| *(commit)*   | Implementación de páginas Home, Login, Registro| Auth         |
| *(commit)*   | Dashboard con tarjetas de estadísticas         | Dashboard    |
| *(commit)*   | Módulos Ingresos, Gastos, Categorías y Metas   | CRUD         |
| *(commit)*   | Backend Node.js/Express con rutas API REST     | Backend      |
| *(commit)*   | Middleware JWT y cifrado bcrypt                | Seguridad    |
| *(commit)*   | Script SQL y conexión MySQL preparada          | Base de datos|

*(Reemplazar los hashes y mensajes con los commits reales del repositorio)*

---

11. Casos de Prueba Ejecutados

| Caso  | Módulo        | Acción realizada                                        | Resultado esperado                               | Resultado obtenido                               | Estado   | Severidad |
|-------|---------------|---------------------------------------------------------|--------------------------------------------------|--------------------------------------------------|----------|-----------|
| CP-01 | Auth – API    | `POST /api/auth/registro` con datos válidos             | HTTP 201, usuario creado                         | HTTP 201, usuario registrado                     | Cerrado  | Alta      |
| CP-02 | Auth – API    | `POST /api/auth/login` con credenciales correctas       | HTTP 200, token JWT en respuesta                 | HTTP 200, token JWT recibido                     | Cerrado  | Alta      |
| CP-03 | Auth – API    | `POST /api/auth/login` con contraseña incorrecta        | HTTP 401, mensaje de error                       | HTTP 401, "Credenciales incorrectas"             | Cerrado  | Alta      |
| CP-04 | Auth – UI     | Enviar formulario de login desde el navegador           | Redirige al Dashboard                            | Redirige correctamente a `/dashboard`            | Cerrado  | Media     |
| CP-05 | Ingresos – API| `GET /api/ingresos` con token válido                    | HTTP 200, lista de ingresos del usuario          | HTTP 200, datos devueltos correctamente          | Cerrado  | Media     |
| CP-06 | Ingresos – API| `POST /api/ingresos` con monto y descripción            | HTTP 201, ingreso creado                         | HTTP 201, registro creado en el sistema          | Cerrado  | Media     |
| CP-07 | Ingresos – API| `DELETE /api/ingresos/:id` con token válido             | HTTP 200, ingreso eliminado                      | HTTP 200, "Ingreso eliminado correctamente"      | Cerrado  | Media     |
| CP-08 | Gastos – API  | `GET /api/gastos` con token válido                      | HTTP 200, lista de gastos del usuario            | HTTP 200, datos devueltos correctamente          | Cerrado  | Media     |
| CP-09 | Categorías – API | `POST /api/categorias` con tipo inválido             | HTTP 400, mensaje de validación                  | HTTP 400, "El tipo debe ser ingreso o gasto"     | Cerrado  | Baja      |
| CP-10 | Metas – API   | `PUT /api/metas/:id` actualizando el monto actual       | HTTP 200, meta actualizada                       | HTTP 200, registro actualizado                   | Cerrado  | Media     |
| CP-11 | JWT           | `GET /api/ingresos` sin token en el header              | HTTP 401, acceso denegado                        | HTTP 401, "Acceso denegado: token requerido"     | Cerrado  | Alta      |
| CP-12 | Navegación UI | Acceder a ruta inexistente (`/xyz`)                     | Página 404 con enlace al inicio                  | Página de error mostrada correctamente           | Cerrado  | Baja      |

---

12. Acta de Aplicación de Pruebas y Aceptación

**Proyecto:** EO App – Gestión Financiera Personal  
**Fecha de pruebas:** 22 de junio de 2026  
**Responsable:** Eduardo Rafael Machado Cantillo  
**Ambiente:** Localhost – Windows 10/11, Node.js 20.x, Vite 8.x

Después de ejecutar los 12 casos de prueba definidos, se verificó que los módulos del sistema funcionan correctamente de forma integrada:

- El **backend** expone los endpoints REST de autenticación y CRUD para los cuatro módulos (Ingresos, Gastos, Categorías, Metas), con validación JWT en cada ruta protegida y cifrado de contraseñas con bcrypt.
- El **frontend** presenta todas las vistas requeridas con navegación fluida entre módulos mediante React Router, sin recarga de página.
- La **autenticación** funciona de extremo a extremo: el usuario se registra, inicia sesión y recibe un token JWT que autoriza las operaciones posteriores.
- La **base de datos MySQL** cuenta con script de creación de tablas con relaciones y claves foráneas, lista para conectarse mediante variables de entorno.

**Resultado global:** 12/12 casos de prueba cerrados. Sin defectos críticos o bloqueantes pendientes.

**Decisión de aceptación:** Se acepta la integración de los módulos del software como entregable de la evidencia GA8-220501096-AA1-EV02.

---

13. Conclusiones

La integración de los módulos del sistema fue realizada satisfactoriamente. EO App cuenta con una arquitectura cliente-servidor completa: un frontend React con navegación fluida entre todas las vistas y un backend Node.js/Express que expone una API REST con autenticación JWT, cifrado de contraseñas y gestión de datos por usuario.

La separación de responsabilidades entre frontend y backend garantiza una arquitectura escalable, mantenible y lista para conectarse a MySQL en producción simplemente configurando las variables de entorno correspondientes.

---

Firma Aprendiz: ______________________________  
Nombre: Eduardo Rafael Machado Cantillo  
Fecha: 22 de junio de 2026

Firma Instructor: _____________________________  
Nombre: Luis Manuel Cabarcas  
Fecha: _______________________________
