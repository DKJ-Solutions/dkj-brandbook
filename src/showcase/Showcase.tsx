import type { ReactNode } from 'react'
import { SOURCES, type ComponentId } from '../components/sources'
import { cx } from '../components/cx'
import { THEMES, type ThemeId, type useThemeControls } from './theme'
import './showcase.css'

/** A labelled group of demos for one component, with its origin printed underneath. */
export function Section({ id, title, intro, children }: { id: ComponentId | 'tokens'; title: string; intro?: string; children: ReactNode }) {
  const sources = id === 'tokens' ? null : SOURCES[id]
  return (
    <section className="bb-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="bb-section-title" id={`${id}-title`}>
        {title}
      </h2>
      {intro && <p className="bb-section-intro">{intro}</p>}
      <div className="bb-demos">{children}</div>
      {sources && (
        <footer className="bb-source">
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

export function Toolbar({ controls }: { controls: ReturnType<typeof useThemeControls> }) {
  const { theme, setTheme, mode, setMode, width, setWidth } = controls
  return (
    <div className="bb-toolbar" role="group" aria-label="Preview settings">
      <label className="bb-control">
        <span>Theme</span>
        <select value={theme} onChange={(e) => setTheme(e.target.value as ThemeId)}>
          {THEMES.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </label>
      <Toggle label="Mode" value={mode} onChange={setMode} options={['auto', 'light', 'dark']} />
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
