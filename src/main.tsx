import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../tokens/base.css'
import '../tokens/themes/mesowise.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
