/// <reference types="vite/client" />

/** house-style/house-theme.js, inlined in <head> by vite.config.ts. */
interface DKJThemeApi {
  themes: { id: string; name: string; mode: 'light' | 'dark'; hex: string }[]
  set(id: string): void
  reset(): void
  picker(el: HTMLElement | null, labels?: { light?: string; dark?: string }): void
  current(): string | null
}
interface Window {
  DKJTheme: DKJThemeApi
}
