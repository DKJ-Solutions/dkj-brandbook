import { Fragment, useEffect, useState } from 'react'
import { Icon, ICON_NAMES } from '../../components/Icon'
import { Demo, Section } from '../Showcase'
import { HouseThemeReachDemo } from './HouseApp'
import { useThemeId } from '../theme'

/** House tokens (house-style/house-style.css), grouped as in house-style/README.md. */
const HOUSE_COLORS = {
  'Surfaces and ink': ['page', 'surface', 'ink', 'ink-2', 'muted', 'grid', 'axis', 'border', 'page-base', 'surface-base', 'grid-base', 'border-base'],
  Primary: ['primary', 'on-primary', 'primary-soft', 'primary-ink'],
  Status: ['good', 'warn', 'bad', 'warn-bg', 'status-mark', 'on-warn'],
  Direction: ['gain', 'loss', 'up', 'down'],
  Categorical: ['cat-1', 'cat-2', 'cat-3'],
} as const

/** Brand-layer colours (src/brand-layer.css), all built from house tokens. */
const LAYER_COLORS = [
  'surface', 'accent', 'on-accent', 'positive-hi', 'positive-lo', 'warn-text', 'backdrop',
  'tint-accent', 'tint-accent-border', 'tint-accent-box', 'tint-info', 'tint-info-border', 'tint-info-box', 'tint-danger',
] as const

/** How much of the primary each house surface takes (set per mode). */
const TINTS = ['--page-tint', '--surface-tint', '--grid-tint', '--border-tint'] as const

const TEXT_SIZES = [
  '--text-h0', '--text-h1', '--text-h2', '--text-h3', '--text-h4', '--text-h5', '--text-h6',
  '--text-lg', '--text-base', '--text-sm', '--text-xs',
] as const
const WEIGHTS = ['regular', 'medium', 'semibold', 'bold'] as const
const LINE_HEIGHTS = ['none', 'tight', 'snug', 'prose'] as const
const TRACKING = ['caps', 'label', 'tag'] as const
/** Every step of the house spacing scale. */
const SPACES = [
  '0-5', '1', '1-5', '2', '2-5', '3', '3-5', '4', '4-5', '5', '5-5', '6', '6-5', '7', '7-5', '8', '8-5', '9', '9-5', '10',
  '11', '12', '14', '16', '18', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60', '64', '72', '80', '96',
] as const
/** Sizes: the house app shell, then the brand layer's layout widths. */
const SIZES = ['--control-h', '--tap', '--topbar-h', '--column-narrow', '--dkj-column-w', '--dkj-topbar-h', '--dkj-drawer-w', '--dkj-datecol'] as const
const DURATIONS = ['--dkj-duration-fast', '--dkj-duration-base', '--dkj-duration-slow', '--dkj-duration-panel', '--dkj-duration-flash'] as const
const FOCUS = ['--dkj-focus-w', '--dkj-focus-offset', '--dkj-focus-offset-inset', '--shadow-pop'] as const
const MOTION = [...DURATIONS, '--dkj-ease-out', '--dkj-popup-scale', '--dkj-popup-step'] as const
/** Read as text: tokens that are a number or a word rather than a colour to swatch. */
const READOUTS = [...TINTS, ...FOCUS, ...MOTION, '--dkj-font-mono'] as const
const RADII = ['xs', 'sm', 'md', 'md-plus', 'lg', 'xl', 'pill'] as const
const CONTROLS = ['inline-toggle', 'control-dense', 'control-compact', 'control-h', 'tap', 'control-lg'] as const

type Swatch = { name: string; value: string | undefined }

const hex2 = (n: number) => n.toString(16).padStart(2, '0')

/** The colour a CSS colour value resolves to, as #rrggbb (or #rrggbbaa when it is translucent), painted on a 1px canvas. */
function resolveHex(value: string): string | undefined {
  const ctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true })
  if (!ctx) return undefined
  ctx.fillStyle = value
  ctx.fillRect(0, 0, 1, 1)
  const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
  return `#${hex2(r)}${hex2(g)}${hex2(b)}${a < 255 ? hex2(a) : ''}`
}

/**
 * A color-mix() value as a recipe, one layer per step: "color-mix(in srgb, A 7%, color-mix(in srgb, A 2%, B))"
 * reads ["7% A", "2% A", "B"] -- each colour laid over the one after it. undefined when it is not such a mix.
 */
function mixRecipe(value: string): string[] | undefined {
  const m = /^color-mix\(in srgb, (\S+) ([\d.]+%), (.+)\)$/.exec(value)
  if (!m) return undefined
  const [, color, share, base] = m
  return [`${share} ${color}`, ...(mixRecipe(base) ?? [base])]
}

function SwatchGrid({ items }: { items: Swatch[] }) {
  return (
    <div className="bb-swatches">
      {items.map(({ name, value }) => {
        const recipe = value ? mixRecipe(value) : undefined
        return (
          <div key={name} className="bb-swatch">
            <span className="bb-swatch-chip" style={{ background: `var(${name})` }} />
            <span className="bb-swatch-text">
              <code className="bb-swatch-name">{name}</code>
              {/* A mix shows the colour it comes to, then its recipe; a plain value shows itself. */}
              <span className="bb-swatch-value">{recipe ? resolveHex(value!) : value}</span>
              {recipe && (
                <span className="bb-swatch-recipe" title={value}>
                  {recipe.map((step, i) => (
                    <Fragment key={i}>
                      {i > 0 && ' '}
                      <span>{i > 0 ? `over ${step}` : step}</span>
                    </Fragment>
                  ))}
                </span>
              )}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function Readouts({ names, values }: { names: readonly string[]; values: Record<string, string> }) {
  return (
    <dl className="bb-readouts">
      {names.map((n) => (
        <div key={n}>
          <dt>
            <code>{n}</code>
          </dt>
          <dd>{values[n]}</dd>
        </div>
      ))}
    </dl>
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
      ...READOUTS,
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
              <code>{f}</code>
              <span style={{ fontSize: `var(${f})`, color: 'var(--ink)', lineHeight: 'var(--dkj-lh-tight)' }}>The quick label 1,234</span>
            </div>
          ))}
        </div>
      </Demo>
      <Demo label="Type -- weights, line heights, tracking and mono (--dkj-*)" wide>
        <div className="bb-scale">
          {WEIGHTS.map((w) => (
            <div key={w} className="bb-scale-row">
              <code>--dkj-fw-{w}</code>
              <span style={{ fontSize: 'var(--text-lg)', fontWeight: `var(--dkj-fw-${w})`, color: 'var(--ink)' }}>The quick label 1,234</span>
            </div>
          ))}
          {LINE_HEIGHTS.map((l) => (
            <div key={l} className="bb-scale-row">
              <code>--dkj-lh-{l}</code>
              <span className="bb-lh-sample" style={{ lineHeight: `var(--dkj-lh-${l})` }}>
                Two lines of running text in a narrow column, so the space between them shows the line height.
              </span>
            </div>
          ))}
          {TRACKING.map((t) => (
            <div key={t} className="bb-scale-row">
              <code>--dkj-tracking-{t}</code>
              <span className="bb-tracking-sample" style={{ letterSpacing: `var(--dkj-tracking-${t})` }}>Uppercase label</span>
            </div>
          ))}
          <div className="bb-scale-row">
            <code>--dkj-font-mono</code>
            <span style={{ fontFamily: 'var(--dkj-font-mono)', color: 'var(--ink)' }}>const tap = '44px' -- 0123456789</span>
          </div>
        </div>
      </Demo>
      <Demo label="Theme tint -- how much of the primary each surface takes (per mode)">
        <Readouts names={TINTS} values={values} />
      </Demo>
      <Demo label="Spacing -- house, every step" wide>
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
      <Demo label="Sizes -- house app shell and brand layer layout" wide>
        <div className="bb-scale">
          {SIZES.map((s) => (
            <div key={s} className="bb-scale-row">
              <code>{s}</code>
              <span className="bb-bar" style={{ width: `var(${s})` }} />
            </div>
          ))}
          <div className="bb-scale-row">
            <code>--dkj-popup-scale</code>
            <span className="bb-bar" style={{ width: 'calc(var(--dkj-column-w) * var(--dkj-popup-scale))' }} />
          </div>
          <div className="bb-scale-row">
            <code>--dkj-popup-step</code>
            <span className="bb-bar" style={{ width: 'calc(var(--dkj-column-w) * var(--dkj-popup-scale) * var(--dkj-popup-step))' }} />
          </div>
        </div>
      </Demo>
      <Demo label="Focus ring and shadow">
        <div className="bb-row bb-focus-row">
          <span className="bb-focus-sample" style={{ outlineOffset: 'var(--dkj-focus-offset)' }}>offset</span>
          <span className="bb-focus-sample" style={{ outlineOffset: 'var(--dkj-focus-offset-inset)' }}>inset</span>
          <span className="bb-shadow-sample">shadow</span>
        </div>
        <Readouts names={FOCUS} values={values} />
      </Demo>
      <Demo label="Motion -- hover or focus the tracks to play each duration">
        <div className="bb-scale bb-motion" tabIndex={0}>
          {DURATIONS.map((d) => (
            <div key={d} className="bb-scale-row">
              <code>{d}</code>
              <span className="bb-motion-track">
                <span className="bb-motion-dot" style={{ transitionDuration: `var(${d})` }} />
              </span>
            </div>
          ))}
        </div>
        <Readouts names={MOTION} values={values} />
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
