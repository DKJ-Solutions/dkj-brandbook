import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../house-style/house-style.css'
import './brand-layer.css'
import './index.css'
import App from './App.tsx'
import { RepoDashboard } from './dashboard/RepoDashboard.tsx'
import { DASHBOARD_PATH, SHOWCASE_PATH, isShowcasePath } from './routes'

// A link from before the showcase moved off the index (/#tokens, /#preview/<repo>) still lands on its section.
if (window.location.pathname === DASHBOARD_PATH && window.location.hash.length > 1) {
  window.location.replace(`${SHOWCASE_PATH}${window.location.hash}`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isShowcasePath(window.location.pathname) ? <App /> : <RepoDashboard />}</StrictMode>,
)
