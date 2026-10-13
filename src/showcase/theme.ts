import { useEffect, useState } from 'react'

/** The themes the brand book ships. A new theme: add its file under tokens/themes/ and list it here. */
export const THEMES = [{ id: 'mesowise', label: 'Mesowise' }] as const
export type ThemeId = (typeof THEMES)[number]['id']
type Mode = 'auto' | 'light' | 'dark'
type Width = 'fluid' | 'phone'

function read<T extends string>(key: string, fallback: T): T {
  try {
    return (localStorage.getItem(key) as T | null) ?? fallback
  } catch {
    return fallback
  }
}
function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable: the choice simply is not remembered */
  }
}

/** The theme switcher: theme x mode, written to <html data-theme data-mode>, the same hooks a consuming repo uses. */
export function useThemeControls() {
  const [theme, setTheme] = useState<ThemeId>(() => read('bb-theme', 'mesowise'))
  const [mode, setMode] = useState<Mode>(() => read('bb-mode', 'auto'))
  const [width, setWidth] = useState<Width>(() => read('bb-width', 'fluid'))
  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    if (mode === 'auto') delete root.dataset.mode
    else root.dataset.mode = mode
    write('bb-theme', theme)
    write('bb-mode', mode)
  }, [theme, mode])
  useEffect(() => write('bb-width', width), [width])
  return { theme, setTheme, mode, setMode, width, setWidth }
}
