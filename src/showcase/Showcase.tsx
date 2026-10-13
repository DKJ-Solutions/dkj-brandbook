import { useEffect, useRef, type ReactNode } from 'react'
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

/** The preview settings: the house theme picker (twelve swatches, the one-click reskin), a reset, and the width toggle. */
export function Toolbar({ controls }: { controls: ReturnType<typeof useWidth> }) {
  const { width, setWidth } = controls
  const pickerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // The house API has no destroy, and picker() is idempotent per element (StrictMode runs this twice safely).
    window.DKJTheme.picker(pickerRef.current, { light: 'Light', dark: 'Dark' })
  }, [])
  return (
    <div className="bb-toolbar" role="group" aria-label="Preview settings">
      <div className="bb-control">
        <span>Theme</span>
        <div className="bb-theme-row">
          <div ref={pickerRef} />
          <button type="button" className="btn" onClick={() => window.DKJTheme.reset()}>
            Reset
          </button>
        </div>
      </div>
      <Toggle label="Width" value={width} onChange={setWidth} options={['fluid', 'phone']} />
    </div>
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
