import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../house-style/house-style.css'
import './brand-layer.css'
import './index.css'
import App from './App.tsx'
import { RepoDashboard } from './dashboard/RepoDashboard.tsx'
import { DashboardPreviews } from './dashboard/DashboardPreviews.tsx'
import { SHOWCASE_PATH, isDashboardPath, isDashboardsPath, isShowcasePath } from './routes'

const { pathname, hash } = window.location

// A link from before the showcase moved off the index (/#tokens, /#preview/<repo>) still lands on its section;
// nothing renders meanwhile, so the dashboard neither flashes nor spends GitHub requests on the way.
if (isDashboardPath(pathname) && hash.length > 1) {
  window.location.replace(`${SHOWCASE_PATH}${hash}`)
} else {
  createRoot(document.getElementById('root')!).render(<StrictMode>{isShowcasePath(pathname) ? <App /> : isDashboardsPath(pathname) ? <DashboardPreviews /> : <RepoDashboard />}</StrictMode>)
}
