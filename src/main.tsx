import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../house-style/house-style.css'
import './brand-layer.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
