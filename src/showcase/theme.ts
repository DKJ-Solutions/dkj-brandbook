import { useEffect, useState } from 'react'

type Width = 'fluid' | 'phone'

/** Preview width, remembered on this device. The colour theme itself is owned by the house script (window.DKJTheme). */
export function useWidth() {
  const [width, setWidth] = useState<Width>(() => {
    try {
      return (localStorage.getItem('bb-width') as Width | null) ?? 'fluid'
    } catch {
      return 'fluid'
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem('bb-width', width)
    } catch {
      /* storage unavailable: the choice simply is not remembered */
    }
  }, [width])
  return { width, setWidth }
}

/** Whether the preview settings bar is open, remembered on this device. Open by default. */
export function useToolbarOpen() {
  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem('bb-toolbar') !== 'closed'
    } catch {
      return true
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem('bb-toolbar', open ? 'open' : 'closed')
    } catch {
      /* storage unavailable: the choice simply is not remembered */
    }
  }, [open])
  return { open, setOpen }
}

/** The active house theme id (e.g. "blue"), kept in sync with data-theme so token readouts can re-read on a change. */
export function useThemeId() {
  const [id, setId] = useState(() => document.documentElement.dataset.theme ?? '')
  useEffect(() => {
    const obs = new MutationObserver(() => setId(document.documentElement.dataset.theme ?? ''))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])
  return id
}
