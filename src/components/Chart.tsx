import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type PointerEvent as ReactPointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { cx } from './cx'
import './charts.css'

/** One column: `label` names it in the tooltip and the table, `short` under the axis; `guide` draws a divider before it. */
export type ColumnDatum = {
  key: string
  label: string
  short: string
  value: number
  /** A muted line under the label in the tooltip, e.g. "up to 13 Oct" for a month still running. */
  detail?: string
  /** A vertical guide before this column, with this text at its top (e.g. "Q2 2026"). */
  guide?: string
}

const H = 240
const M = { top: 24, right: 8, bottom: 24, left: 56 }
const LABEL_GAP = 44 // the least room an axis label needs, in px
const GUIDE_GAP = 64 // the least room between two guide labels, in px

/** Round tick values for a range: 1, 2, 2.5 or 5 times a power of ten, about `count` of them, always including 0. */
function ticks(lo: number, hi: number, count: number) {
  const span = hi - lo || Math.abs(hi) || 1
  const raw = span / count
  const pow = 10 ** Math.floor(Math.log10(raw))
  const step = [1, 2, 2.5, 5, 10].map((f) => f * pow).find((s) => s >= raw) ?? 10 * pow
  const out: number[] = []
  for (let v = Math.floor(lo / step) * step; v <= hi + step * 1e-9; v += step) out.push(Math.round(v / step) * step)
  return out
}

/** A column with a 4px rounded data end and a square end on the zero line, up or down. */
function columnPath(x: number, w: number, y0: number, h: number, up: boolean) {
  const r = Math.min(4, h, w / 2)
  return up
    ? `M${x},${y0}V${y0 - h + r}a${r},${r} 0 0 1 ${r},${-r}H${x + w - r}a${r},${r} 0 0 1 ${r},${r}V${y0}z`
    : `M${x},${y0}V${y0 + h - r}a${r},${r} 0 0 0 ${r},${r}H${x + w - r}a${r},${r} 0 0 0 ${r},${-r}V${y0}z`
}

/**
 * ColumnChart -- a result per period around a zero line, on the house .chart: gain columns up in --gain, loss columns
 * down in --loss, so direction reads from position as well as colour. It draws at the width it is given, so its 12px
 * labels stay 12px on a phone, and thins the axis labels to what fits. Hover or keyboard focus shows the house
 * .tooltip with the value; the columns are one tab stop, and the arrow keys, Home and End move through them. The same
 * figures are always reachable as a table under the chart. Put a Legend (gain, loss) above it.
 */
export function ColumnChart({
  label,
  data,
  format,
  tableLabel = 'Show as table',
  periodHeading = 'Period',
  valueHeading = 'Result',
}: {
  /** Names the chart for a screen reader and the table, e.g. "Result per month". */
  label: string
  data: readonly ColumnDatum[]
  format: (v: number) => string
  tableLabel?: string
  periodHeading?: string
  valueHeading?: string
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const tip = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [active, setActive] = useState<number | null>(null)
  const [focusIndex, setFocusIndex] = useState(0)
  const [at, setAt] = useState<{ x: number; y: number } | null>(null)

  useLayoutEffect(() => {
    const el = wrap.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Place the tooltip next to the point it belongs to, inside the viewport.
  useLayoutEffect(() => {
    const t = tip.current
    if (!t || active === null || !at) return
    t.style.left = `${Math.max(8, Math.min(at.x + 14, window.innerWidth - t.offsetWidth - 8))}px`
    t.style.top = `${Math.max(8, Math.min(at.y + 14, window.innerHeight - t.offsetHeight - 8))}px`
  }, [active, at])

  useEffect(() => {
    if (active === null) return
    const hide = () => setActive(null)
    window.addEventListener('scroll', hide, true)
    return () => window.removeEventListener('scroll', hide, true)
  }, [active])

  const pw = Math.max(0, width - M.left - M.right)
  const ph = H - M.top - M.bottom
  const values = data.map((d) => d.value)
  const lo = Math.min(0, ...values)
  const hi = Math.max(0, ...values)
  const tk = ticks(lo, hi, 4)
  const yMin = Math.min(lo, tk[0])
  const yMax = Math.max(hi, tk[tk.length - 1])
  const y = (v: number) => M.top + ((yMax - v) / (yMax - yMin || 1)) * ph
  const y0 = y(0)
  const band = data.length ? pw / data.length : 0
  const bw = Math.max(2, Math.min(24, band - 2)) // at least a 2px gap between columns
  const every = Math.max(1, Math.ceil(LABEL_GAP / (band || 1)))

  let lastGuideX = -Infinity
  const guides = data.flatMap((d, i) => {
    if (!d.guide || i === 0) return []
    const x = M.left + band * i
    const showText = x - lastGuideX >= GUIDE_GAP && x + GUIDE_GAP / 2 <= width
    if (showText) lastGuideX = x
    return [{ key: d.key, x, text: showText ? d.guide : null }]
  })

  const show = (i: number, point: { x: number; y: number }) => {
    setActive(i)
    setAt(point)
  }
  const showAtColumn = (i: number) => {
    const svg = wrap.current?.querySelector('svg')
    if (!svg) return
    const b = svg.getBoundingClientRect()
    show(i, { x: b.left + M.left + band * (i + 0.5), y: b.top + Math.min(y(data[i].value), y0) - 8 })
  }
  const onKey = (e: KeyboardEvent<SVGSVGElement>) => {
    const next = { ArrowRight: focusIndex + 1, ArrowLeft: focusIndex - 1, Home: 0, End: data.length - 1 }[e.key]
    if (e.key === 'Escape') return setActive(null)
    if (next === undefined) return
    e.preventDefault()
    const i = Math.max(0, Math.min(data.length - 1, next))
    setFocusIndex(i)
    wrap.current?.querySelectorAll<SVGRectElement>('.bar')[i]?.focus()
  }

  const d = active === null ? null : data[active]
  return (
    <div className="dkj-chart">
      <div ref={wrap} className="chart">
        {width > 0 && (
          <svg width={width} height={H} viewBox={`0 0 ${width} ${H}`} role="group" aria-label={label} onKeyDown={onKey}>
            {tk.map((v) => (
              <g key={v}>
                <line x1={M.left} x2={M.left + pw} y1={y(v)} y2={y(v)} stroke={v === 0 ? 'var(--axis)' : 'var(--grid)'} strokeWidth={1} />
                <text x={M.left - 8} y={y(v) + 4} textAnchor="end">
                  {format(v)}
                </text>
              </g>
            ))}
            {guides.map((g) => (
              <g key={g.key}>
                <line x1={g.x} x2={g.x} y1={M.top} y2={M.top + ph} stroke="var(--grid)" strokeWidth={1} />
                {g.text && (
                  <text className="axis-note" x={g.x + 4} y={M.top - 8}>
                    {g.text}
                  </text>
                )}
              </g>
            ))}
            {data.map((c, i) => {
              const up = c.value >= 0
              const h = Math.max(Math.abs(y(c.value) - y0), 1)
              const cx0 = M.left + band * i + band / 2
              return (
                <path
                  key={c.key}
                  className={cx('dkj-chart-col', active === i && 'dkj-chart-col--active')}
                  d={columnPath(cx0 - bw / 2, bw, y0, h, up)}
                  fill={up ? 'var(--gain)' : 'var(--loss)'}
                  aria-hidden="true"
                />
              )
            })}
            {data.map((c, i) =>
              i % every === 0 ? (
                <text key={c.key} x={M.left + band * i + band / 2} y={H - 8} textAnchor="middle">
                  {c.short}
                </text>
              ) : null,
            )}
            {/* The hit areas: the full band, taller than the column, and the keyboard stops (one tab stop, arrows move). */}
            {data.map((c, i) => (
              <rect
                key={c.key}
                className="bar"
                x={M.left + band * i}
                y={M.top}
                width={band}
                height={ph}
                fill="transparent"
                role="img"
                aria-label={`${c.label}${c.detail ? ` (${c.detail})` : ''}: ${format(c.value)}`}
                tabIndex={i === focusIndex ? 0 : -1}
                onPointerMove={(e: ReactPointerEvent) => show(i, { x: e.clientX, y: e.clientY })}
                onPointerLeave={() => setActive(null)}
                onFocus={() => {
                  setFocusIndex(i)
                  showAtColumn(i)
                }}
                onBlur={() => setActive(null)}
              />
            ))}
          </svg>
        )}
      </div>
      {d &&
        createPortal(
          // A chart tooltip follows the pointer, so it stays click-through: shown inline, never .tooltip--open.
          <div ref={tip} className="tooltip" style={{ display: 'block' }} aria-hidden="true">
            <b>{d.label}</b>
            {d.detail && <span className="dkj-chart-detail">{d.detail}</span>}
            <span className={cx('num', d.value >= 0 ? 'delta--up' : 'delta--down')}>{format(d.value)}</span>
          </div>,
          document.body,
        )}
      <details className="more">
        <summary>{tableLabel}</summary>
        <div className="table-wrap">
          <table className="table">
            <caption className="sr-only">{label}</caption>
            <thead>
              <tr>
                <th scope="col">{periodHeading}</th>
                <th scope="col">{valueHeading}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((c) => (
                <tr key={c.key}>
                  <td>
                    {c.label}
                    {c.detail && <span className="dkj-chart-detail">{c.detail}</span>}
                  </td>
                  <td className={c.value >= 0 ? 'delta--up' : 'delta--down'}>{format(c.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  )
}
