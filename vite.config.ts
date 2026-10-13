import { readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Inlines house-style/house-theme.js (the single copy) as the first script in <head>, in dev and in the build,
 * so data-theme is set before first paint and nothing flashes. The file is read, never copied, so it cannot drift.
 * Its header comment mentions a closing script tag, which would end an inline script early: that is escaped.
 */
function houseTheme(): Plugin {
  const file = new URL('./house-style/house-theme.js', import.meta.url)
  return {
    name: 'house-theme-inline',
    transformIndexHtml: () => [{ tag: 'script', children: readFileSync(file, 'utf8').replaceAll('</script', '<\\/script'), injectTo: 'head-prepend' }],
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), houseTheme()],
})
