import { useEffect, useState } from 'react'
import { Icon, ICON_NAMES } from '../../components/Icon'
import { Demo, Section } from '../Showcase'

const COLORS = [
  'bg', 'surface', 'text', 'text-muted', 'border', 'accent', 'on-accent', 'fill-strong', 'on-fill-strong',
  'positive-hi', 'positive-lo', 'on-positive', 'negative', 'positive', 'danger', 'warning',
  'surface-accent', 'surface-accent-border', 'surface-accent-box',
  'surface-info', 'surface-info-border', 'surface-info-box', 'info-accent', 'on-info-accent', 'backdrop',
] as const

const FONT_SIZES = ['3xs', '2xs', 'xs', 'sm', 'md', 'base', 'lg', 'xl', 'h4', 'h3', 'h2', 'h1', 'display'] as const
const SPACES = ['0-5', '1', '1-5', '2', '2-5', '3', '3-5', '4', '5', '6', '8'] as const
const RADII = ['xs', 'sm', 'md', 'md-plus', 'lg', 'xl', 'pill'] as const

/** Colour swatches with the value the active theme and mode resolve to. `stamp` changes when theme or mode does. */
export function Foundations({ stamp }: { stamp: string }) {
  const [values, setValues] = useState<Record<string, string>>({})
  useEffect(() => {
    // Read after the theme attributes have been applied, and again when the OS scheme flips.
    const readAll = () => {
      const cs = getComputedStyle(document.documentElement)
      setValues(Object.fromEntries(COLORS.map((c) => [c, cs.getPropertyValue(`--color-${c}`).trim()])))
    }
    readAll()
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', readAll)
    return () => mq.removeEventListener('change', readAll)
  }, [stamp])

  return (
    <Section
      id="tokens"
      title="Tokens"
      intro="tokens/base.css holds everything shared by every DKJ-Solutions repo; tokens/themes/<theme>.css holds only colour. Switch theme and mode above: the swatches show what the active combination resolves to."
    >
      <Demo label="Colour -- theme layer" wide>
        <div className="bb-swatches">
          {COLORS.map((c) => (
            <div key={c} className="bb-swatch">
              <span className="bb-swatch-chip" style={{ background: `var(--color-${c})` }} />
              <span>
                <code>--color-{c}</code>
                <br />
                {values[c]}
              </span>
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Type scale -- base layer" wide>
        <div className="bb-scale">
          {FONT_SIZES.map((f) => (
            <div key={f} className="bb-scale-row">
              <code>--fs-{f}</code>
              <span style={{ fontSize: `var(--fs-${f})`, color: 'var(--color-text)', lineHeight: 'var(--lh-tight)' }}>The quick label 1,234</span>
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Spacing">
        <div className="bb-scale">
          {SPACES.map((s) => (
            <div key={s} className="bb-scale-row">
              <code>--space-{s}</code>
              <span className="bb-bar" style={{ width: `var(--space-${s})` }} />
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Radius">
        <div className="bb-row">
          {RADII.map((r) => (
            <div key={r} style={{ display: 'grid', justifyItems: 'center', gap: 'var(--space-1)', fontSize: 'var(--fs-2xs)' }}>
              <span className="bb-radius" style={{ borderRadius: `var(--radius-${r})` }} />
              <code>{r}</code>
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Controls and tap targets">
        <div className="bb-scale">
          {(['control-compact', 'control-h', 'tap', 'control-lg'] as const).map((s) => (
            <div key={s} className="bb-scale-row">
              <code>--{s}</code>
              <span className="bb-bar" style={{ width: `var(--${s})`, height: `var(--${s})`, opacity: 0.35 }} />
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Icons (stroke set, currentColor)">
        <div className="bb-row" style={{ color: 'var(--color-text)' }}>
          {ICON_NAMES.map((n) => (
            <span key={n} title={n} style={{ display: 'grid', justifyItems: 'center', gap: 'var(--space-1)', width: '4rem', fontSize: 'var(--fs-3xs)' }}>
              <Icon name={n} size={24} />
              {n}
            </span>
          ))}
        </div>
      </Demo>
    </Section>
  )
}
