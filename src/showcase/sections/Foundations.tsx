import { useEffect, useState } from 'react'
import { Icon, ICON_NAMES } from '../../components/Icon'
import { Demo, Section } from '../Showcase'
import { HouseThemeReachDemo } from './HouseApp'
import { useThemeId } from '../theme'

/** House tokens (house-style/house-style.css), grouped as in house-style/README.md. */
const HOUSE_COLORS = {
  'Surfaces and ink': ['page', 'surface', 'ink', 'ink-2', 'muted', 'grid', 'axis', 'border', 'page-base', 'surface-base', 'grid-base', 'border-base'],
  Primary: ['primary', 'on-primary', 'primary-soft', 'primary-ink'],
  Status: ['good', 'warn', 'bad', 'warn-bg', 'status-mark'],
  Direction: ['gain', 'loss', 'up', 'down'],
  Categorical: ['cat-1', 'cat-2', 'cat-3'],
} as const

/** Brand-layer colours (src/brand-layer.css), all built from house tokens. */
const LAYER_COLORS = [
  'surface', 'accent', 'on-accent', 'positive-hi', 'positive-lo', 'warn-text', 'on-warn', 'backdrop',
  'tint-accent', 'tint-accent-border', 'tint-accent-box', 'tint-info', 'tint-info-border', 'tint-info-box', 'tint-danger',
] as const

const TEXT_SIZES = ['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lg', 'base', 'sm', 'xs'] as const
const SPACES = ['0-5', '1', '1-5', '2', '2-5', '3', '3-5', '4', '5', '6', '8', '12', '16'] as const
const RADII = ['xs', 'sm', 'md', 'md-plus', 'lg', 'xl', 'pill'] as const
const CONTROLS = ['inline-toggle', 'control-dense', 'control-compact', 'control-h', 'tap', 'control-lg'] as const

type Swatch = { name: string; value: string | undefined }

function SwatchGrid({ items }: { items: Swatch[] }) {
  return (
    <div className="bb-swatches">
      {items.map(({ name, value }) => (
        <div key={name} className="bb-swatch">
          <span className="bb-swatch-chip" style={{ background: `var(${name})` }} />
          <span>
            <code>{name}</code>
            <br />
            {value}
          </span>
        </div>
      ))}
    </div>
  )
}

/** Live token readouts: every value is read from the computed style, so a theme click changes them. */
export function Foundations() {
  const theme = useThemeId()
  const [values, setValues] = useState<Record<string, string>>({})
  useEffect(() => {
    // Re-read when the house theme changes (useThemeId also fires when the OS scheme moves the default theme).
    const cs = getComputedStyle(document.documentElement)
    const names = [
      ...Object.values(HOUSE_COLORS).flat().map((c) => `--${c}`),
      ...LAYER_COLORS.map((c) => `--dkj-${c}`),
    ]
    setValues(Object.fromEntries(names.map((n) => [n, cs.getPropertyValue(n).trim()])))
  }, [theme])

  return (
    <Section
      id="tokens"
      title="Tokens"
      intro="house-style/house-style.css is the one token source for every DKJ-Solutions app; src/brand-layer.css adds only what the house style does not have (--dkj-*), built from house tokens. Click a theme swatch above: every value below is read live and follows."
    >
      {Object.entries(HOUSE_COLORS).map(([group, names]) => (
        <Demo key={group} label={`House colour -- ${group}`} wide>
          <SwatchGrid items={names.map((n) => ({ name: `--${n}`, value: values[`--${n}`] }))} />
        </Demo>
      ))}
      <Demo label="Brand layer colour (--dkj-*)" wide>
        <SwatchGrid items={LAYER_COLORS.map((n) => ({ name: `--dkj-${n}`, value: values[`--dkj-${n}`] }))} />
      </Demo>
      <Demo label="Theme reach -- links, native controls, selection, and the opt-in --accent modifiers" wide>
        <HouseThemeReachDemo />
      </Demo>
      <Demo label="Type scale -- house" wide>
        <div className="bb-scale">
          {TEXT_SIZES.map((f) => (
            <div key={f} className="bb-scale-row">
              <code>--text-{f}</code>
              <span style={{ fontSize: `var(--text-${f})`, color: 'var(--ink)', lineHeight: 'var(--dkj-lh-tight)' }}>The quick label 1,234</span>
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Spacing -- house">
        <div className="bb-scale">
          {SPACES.map((s) => (
            <div key={s} className="bb-scale-row">
              <code>--spacing-{s}</code>
              <span className="bb-bar" style={{ width: `var(--spacing-${s})` }} />
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Radius (--dkj-radius-*)">
        <div className="bb-row">
          {RADII.map((r) => (
            <div key={r} style={{ display: 'grid', justifyItems: 'center', gap: 'var(--spacing-1)', fontSize: 'var(--text-xs)' }}>
              <span className="bb-radius" style={{ borderRadius: `var(--dkj-radius-${r})` }} />
              <code>{r}</code>
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Controls and tap targets (--dkj-*)">
        <div className="bb-scale">
          {CONTROLS.map((s) => (
            <div key={s} className="bb-scale-row">
              <code>--dkj-{s}</code>
              <span className="bb-bar" style={{ width: `var(--dkj-${s})`, height: `var(--dkj-${s})`, opacity: 0.35 }} />
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Icons (stroke set, currentColor)">
        <div className="bb-row" style={{ color: 'var(--ink)' }}>
          {ICON_NAMES.map((n) => (
            <span key={n} title={n} style={{ display: 'grid', justifyItems: 'center', gap: 'var(--spacing-1)', width: '4rem', fontSize: 'var(--text-xs)' }}>
              <Icon name={n} size={24} />
              {n}
            </span>
          ))}
        </div>
      </Demo>
    </Section>
  )
}
