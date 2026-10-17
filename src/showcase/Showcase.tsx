import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
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
    <section className="dkj-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="dkj-section-title" id={`${id}-title`}>
        {title}
      </h2>
      {intro && <p className="dkj-section-intro">{intro}</p>}
      <div className="dkj-demos">{children}</div>
      {sources && (
        <footer className="dkj-source">
          {usages.length > 0 && (
            <p className="dkj-used-in">
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
    <figure className={cx('dkj-demo', wide && 'dkj-demo--wide')}>
      <figcaption>{label}</figcaption>
      <div className={cx('dkj-demo-stage', surface && 'dkj-demo-stage--surface')}>{children}</div>
    </figure>
  )
}

/**
 * The preview settings: the house settings button (DKJTheme.settings) -- a round toggle whose panel holds
 * the theme picker and a reset -- with the brand book's own width toggle rendered into the panel's slot.
 * Without controls (the Repo dashboard) the panel holds the theme picker and the reset only.
 * With a menu (the showcase's contents button) that sits on the far right and the settings button moves left of it.
 */
export function Toolbar({ controls, menu }: { controls?: ReturnType<typeof useWidth>; menu?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [slot, setSlot] = useState<HTMLElement | null>(null)
  useEffect(() => {
    // The house API has no destroy, and settings() returns the existing slot on a second call (StrictMode runs this twice safely).
    setSlot(
      window.DKJTheme.settings(ref.current, {
        label: 'Preview settings',
        theme: 'Theme',
        reset: 'Reset theme',
        light: 'Light',
        dark: 'Dark',
      }),
    )
  }, [])
  return (
    <div className={cx('dkj-settings', menu !== undefined && 'dkj-settings--menu')}>
      <div className="dkj-settings-anchor" ref={ref} />
      {menu && <div className="dkj-menu-anchor">{menu}</div>}
      {slot && controls && createPortal(<Toggle label="Width" value={controls.width} onChange={controls.setWidth} options={['fluid', 'phone']} />, slot)}
    </div>
  )
}

function Toggle<T extends string>({ label, value, onChange, options }: { label: string; value: T; onChange: (v: T) => void; options: readonly T[] }) {
  return (
    <div className="dkj-control">
      <span className="theme-settings__label">{label}</span>
      <div className="dkj-toggle" role="group" aria-label={label}>
        {options.map((o) => (
          <button key={o} type="button" aria-pressed={o === value} onClick={() => onChange(o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}
