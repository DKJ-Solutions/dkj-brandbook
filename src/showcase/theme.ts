import { useEffect, useState } from 'react'

type Width = 'fluid' | 'phone' | 'full'

/** Preview width, remembered on this device. The colour theme itself is owned by the house script (window.DKJTheme). */
export function useWidth() {
  const [width, setWidth] = useState<Width>(() => {
    try {
      return (localStorage.getItem('dkj-width') as Width | null) ?? 'fluid'
    } catch {
      return 'fluid'
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem('dkj-width', width)
    } catch {
      /* storage unavailable: the choice simply is not remembered */
    }
  }, [width])
  return { width, setWidth }
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
