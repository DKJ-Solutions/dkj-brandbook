import { useEffect, useRef, useState, type ReactNode } from 'react'
import { SOURCES, type ComponentId } from '../components/sources'
import { cx } from '../components/cx'
import { usagesOf } from '../apps/registry'
import type { useWidth } from './theme'
import './showcase.css'

/** A labelled group of demos for one component, with its origin printed underneath. */
export function Section({ id, title, intro, children }: { id: ComponentId | 'tokens' | 'apps' | 'overlap'; title: string; intro?: string; children: ReactNode }) {
  const isComponent = id !== 'tokens' && id !== 'apps' && id !== 'overlap'
  const sources = isComponent ? SOURCES[id] : null
  const usages = isComponent ? usagesOf(id) : []
  return (
    <section className="bb-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="bb-section-title" id={`${id}-title`}>
        {title}
      </h2>
      {intro && <p className="bb-section-intro">{intro}</p>}
      <div className="bb-demos">{children}</div>
      {sources && (
        <footer className="bb-source">
          {usages.length > 0 && (
            <p className="bb-used-in">
              <strong>Used in:</strong>{' '}
              {usages.map(({ app, view }, i) => (
                <span key={`${app.id}/${view.id}`}>
                  {i > 0 && ', '}
                  <a href={`#app-${app.id}`}>{app.name}</a> &rsaquo; {view.name}
                </span>
              ))}
            </p>
          )}
          {sources.map((s) => (
            <dl key={s.repo}>
              <div>
                <dt>Source</dt>
                <dd>{s.repo}</dd>
              </div>
              <div>
                <dt>{s.file}</dt>
                <dd>{s.components.join(', ')}</dd>
              </div>
              <div>
                <dt>{s.css}</dt>
                <dd>
                  <code>{s.selectors.join('  ')}</code>
                </dd>
              </div>
            </dl>
          ))}
        </footer>
      )}
    </section>
  )
}

/** One variant or state, with its label above it. wide: spans the full row. surface: sits on a card surface. */
export function Demo({ label, children, wide, surface = true }: { label: string; children: ReactNode; wide?: boolean; surface?: boolean }) {
  return (
    <figure className={cx('bb-demo', wide && 'bb-demo--wide')}>
      <figcaption>{label}</figcaption>
      <div className={cx('bb-demo-stage', surface && 'bb-demo-stage--surface')}>{children}</div>
    </figure>
  )
}

/**
 * The preview settings: the house theme picker (twelve swatches, the one-click reskin), a reset, and the width toggle.
 * A round sticky button opens them as a floating panel; Escape or a click outside closes it again.
 */
export function Toolbar({ controls }: { controls: ReturnType<typeof useWidth> }) {
  const { width, setWidth } = controls
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pickerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // The house API has no destroy, and picker() is idempotent per element (StrictMode runs this twice safely).
    window.DKJTheme.picker(pickerRef.current, { light: 'Light', dark: 'Dark' })
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])
  return (
    <div className="bb-settings" ref={rootRef}>
      <button
        ref={toggleRef}
        type="button"
        className="bb-settings-toggle"
        aria-expanded={open}
        aria-controls="bb-settings-panel"
        aria-label={open ? 'Close preview settings' : 'Open preview settings'}
        title={open ? 'Close preview settings' : 'Open preview settings'}
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <GearIcon />}
      </button>
      {/* hidden, not unmounted: the house script draws the picker into this element once. */}
      <div className="bb-settings-panel" id="bb-settings-panel" role="group" aria-labelledby="bb-settings-title" hidden={!open}>
        <p className="bb-settings-title" id="bb-settings-title">
          Preview settings
        </p>
        <div className="bb-settings-group">
          <span className="bb-settings-label">Theme</span>
          <div ref={pickerRef} />
        </div>
        <div className="bb-settings-group bb-settings-foot">
          <Toggle label="Width" value={width} onChange={setWidth} options={['fluid', 'phone']} />
          <button type="button" className="btn" onClick={() => window.DKJTheme.reset()}>
            Reset theme
          </button>
        </div>
      </div>
    </div>
  )
}

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function Toggle<T extends string>({ label, value, onChange, options }: { label: string; value: T; onChange: (v: T) => void; options: readonly T[] }) {
  return (
    <div className="bb-control">
      <span>{label}</span>
      <div className="bb-toggle" role="group" aria-label={label}>
        {options.map((o) => (
          <button key={o} type="button" aria-pressed={o === value} onClick={() => onChange(o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}
