import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import routes from './routes/routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
