import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type PointerEvent as ReactPointerEvent, type ReactNode, type RefObject } from 'react'
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

/** What both charts share: the measured width, the active mark, the roving focus stop and the tooltip placement. */
function useChartFrame(n: number) {
  const wrap = useRef<HTMLDivElement>(null)
  const tip = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [active, setActive] = useState<number | null>(null)
  const [focusStop, setFocusIndex] = useState(0)
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

  const show = (i: number, point: { x: number; y: number }) => {
    setActive(i)
    setAt(point)
  }
  // Clamped, so a shrinking data set never leaves the chart without its one tab stop.
  const focusIndex = Math.min(focusStop, Math.max(0, n - 1))
  return { wrap, tip, width, active, setActive, focusIndex, setFocusIndex, show }
}

/** A chart tooltip follows the pointer, so it stays click-through: shown inline, never .tooltip--open. */
function ChartTip({ tipRef, children }: { tipRef: RefObject<HTMLDivElement | null>; children: ReactNode }) {
  return createPortal(
    <div ref={tipRef} className="tooltip" style={{ display: 'block' }} aria-hidden="true">
      {children}
    </div>,
    document.body,
  )
}

/** The figures as a table in a house .more disclosure, so they are always reachable. */
function ChartTable({ summary, caption, headings, children }: { summary: string; caption: string; headings: string[]; children: ReactNode }) {
  return (
    <details className="more">
      <summary>{summary}</summary>
      <div className="table-wrap">
        <table className="table">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              {headings.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </details>
  )
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
  const { wrap, tip, width, active, setActive, focusIndex, setFocusIndex, show } = useChartFrame(data.length)

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
      {d && (
        <ChartTip tipRef={tip}>
          <b>{d.label}</b>
          {d.detail && <span className="dkj-chart-detail">{d.detail}</span>}
          <span className={cx('num', d.value >= 0 ? 'delta--up' : 'delta--down')}>{format(d.value)}</span>
        </ChartTip>
      )}
      <ChartTable summary={tableLabel} caption={label} headings={[periodHeading, valueHeading]}>
        {data.map((c) => (
          <tr key={c.key}>
            <td>
              {c.label}
              {c.detail && <span className="dkj-chart-detail">{c.detail}</span>}
            </td>
            <td className={c.value >= 0 ? 'delta--up' : 'delta--down'}>{format(c.value)}</td>
          </tr>
        ))}
      </ChartTable>
    </div>
  )
}

/** One bar: `label` is the full name (tooltip, table, accessible name), `short` is what the row shows. */
export type BarDatum = {
  key: string
  label: string
  /** The shorter name the row shows; defaults to `label`. */
  short?: string
  value: number
  /** Muted lines under the label in the tooltip and the table, e.g. "Fund · 120 units". */
  detail?: string
  /** For `colorBy="series"`: 1 to 3, the house --cat-N the bar takes. */
  series?: 1 | 2 | 3
}

const WIDE = 480 // from this width a row is one 30px line; below it the row is stacked at 48px
const LABEL_CHAR_PX = 6.5 // the estimated width of an average 12px text character, for cutting a label with an ellipsis
const VALUE_CHAR_PX = 7 // a figure is wider than average text (digits, currency sign), and a value is never cut, so it is measured generously
const BAR_H = 18

/** Cut a label with an ellipsis at what fits in `px`, on a character estimate. */
function fit(text: string, px: number) {
  const max = Math.max(1, Math.floor(px / LABEL_CHAR_PX))
  return text.length > max ? `${text.slice(0, max - 1)}\u2026` : text
}

/** A horizontal bar with a 4px rounded data end and a square end on the zero line, to the right or the left of it. */
function barPath(x0: number, w: number, y: number, right: boolean) {
  const r = Math.min(4, w, BAR_H / 2)
  const mid = BAR_H - 2 * r
  return right
    ? `M${x0},${y}h${w - r}a${r},${r} 0 0 1 ${r},${r}v${mid}a${r},${r} 0 0 1 ${-r},${r}h${r - w}z`
    : `M${x0},${y}h${r - w}a${r},${r} 0 0 0 ${-r},${r}v${mid}a${r},${r} 0 0 0 ${r},${r}h${w - r}z`
}

type BarColor = { colorBy: 'series' } | { colorBy: 'direction' }

/**
 * BarChart -- a value per row as a horizontal bar, on the house .chart. `colorBy="series"` colours each bar with the
 * house --cat-N of its `series` (put a Legend above it); `colorBy="direction"` draws gains to the right of the zero line
 * in --gain and losses to the left in --loss, so the side says the same as the colour. The order of `data` is kept, so
 * sort it first. It draws at its real width: one 30px line per row from 480px, stacked rows (label and value over the
 * bar) below it, so 12px text stays 12px on a phone. Hover, or tab to it and use Up, Down, Home and End, for the house
 * .tooltip; the same figures, and with `share` each row's share of the total, are always a table away.
 */
export function BarChart({
  label,
  data,
  format,
  share,
  tableLabel = 'Show as table',
  itemHeading = 'Item',
  valueHeading = 'Value',
  shareHeading = 'Share',
  ...color
}: {
  /** Names the chart for a screen reader and the table, e.g. "Allocation". */
  label: string
  data: readonly BarDatum[]
  format: (v: number) => string
  /** Words a row's share of the sum of all bars, e.g. "12% of total"; only meaningful for parts of a whole, so it is ignored unless every value is 0 or more and their sum is above 0. */
  share?: (fraction: number) => string
  tableLabel?: string
  itemHeading?: string
  valueHeading?: string
  shareHeading?: string
} & BarColor) {
  const { wrap, tip, width, active, setActive, focusIndex, setFocusIndex, show } = useChartFrame(data.length)

  const wide = width >= WIDE
  const rowH = wide ? 30 : 48
  const barY = wide ? 6 : 24 // the top of a bar within its row
  const values = data.map((d) => d.value)
  const lo = Math.min(0, ...values)
  const hi = Math.max(0, ...values)
  const mixed = lo < 0 && hi > 0
  const tk = ticks(lo, hi, 4)
  const min = mixed ? Math.min(lo, tk[0]) : lo
  const max = mixed ? Math.max(hi, tk[tk.length - 1]) : hi
  const valW = Math.max(0, ...data.map((d) => format(d.value).length)) * VALUE_CHAR_PX + 8
  const labelW = wide ? Math.max(96, Math.min(168, Math.round(width * 0.3))) : 0
  // The plot runs from px0 to px1; a stacked row keeps 1px in from the edge where the zero line sits on it, so the full 1px shows.
  const px0 = wide ? labelW + 8 : lo === 0 ? 1 : 0
  const px1 = wide ? width - valW - 8 : hi === 0 ? width - 1 : width
  const x = (v: number) => px0 + ((v - min) / (max - min || 1)) * (px1 - px0)
  const x0 = x(0)
  const total = values.reduce((a, b) => a + b, 0)
  const showShare = !!share && lo >= 0 && total > 0 // a share is only meaningful for parts of a whole
  const fill = (d: BarDatum) => (color.colorBy === 'series' ? `var(--cat-${d.series ?? 1})` : d.value >= 0 ? 'var(--gain)' : 'var(--loss)')
  const sign = (v: number) => (color.colorBy === 'direction' ? (v >= 0 ? 'delta--up' : 'delta--down') : undefined)

  const showAtRow = (i: number) => {
    const svg = wrap.current?.querySelector('svg')
    if (!svg) return
    const b = svg.getBoundingClientRect()
    show(i, { x: b.left + x(data[i].value), y: b.top + i * rowH + barY })
  }
  const onKey = (e: KeyboardEvent<SVGSVGElement>) => {
    const next = { ArrowDown: focusIndex + 1, ArrowUp: focusIndex - 1, Home: 0, End: data.length - 1 }[e.key]
    if (e.key === 'Escape') return setActive(null)
    if (next === undefined) return
    e.preventDefault()
    const i = Math.max(0, Math.min(data.length - 1, next))
    setFocusIndex(i)
    wrap.current?.querySelectorAll<SVGRectElement>('.bar')[i]?.focus()
  }

  const h = data.length * rowH
  const d = active === null ? null : data[active]
  return (
    <div className="dkj-chart">
      <div ref={wrap} className="chart">
        {width > 0 && (
          <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} role="group" aria-label={label} onKeyDown={onKey}>
            {/* The zero line: through stacked rows it would cut their text, so those get a piece beside each bar. */}
            {wide ? (
              <line x1={x0} x2={x0} y1={0} y2={h} stroke="var(--axis)" strokeWidth={1} />
            ) : (
              data.map((c, i) => <line key={c.key} x1={x0} x2={x0} y1={i * rowH + barY - 2} y2={i * rowH + barY + BAR_H + 2} stroke="var(--axis)" strokeWidth={1} />)
            )}
            {data.map((c, i) => {
              const w = Math.max(Math.abs(x(c.value) - x0), 1) // a zero value stays a 1px bar
              const y = i * rowH + barY
              const textY = wide ? y + BAR_H / 2 + 4 : i * rowH + 16
              return (
                <g key={c.key}>
                  <text x={0} y={textY}>
                    {fit(c.short ?? c.label, (wide ? labelW : width - valW) - 8)}
                  </text>
                  <path className={cx('dkj-chart-bar', active === i && 'dkj-chart-bar--active')} d={barPath(x0, w, y, c.value >= 0)} fill={fill(c)} aria-hidden="true" />
                  <text className="val" x={width} y={textY} textAnchor="end">
                    {format(c.value)}
                  </text>
                </g>
              )
            })}
            {/* The hit areas: the full row, and the keyboard stops (one tab stop, arrows move). */}
            {data.map((c, i) => (
              <rect
                key={c.key}
                className="bar"
                x={0}
                y={i * rowH}
                width={width}
                height={rowH}
                fill="transparent"
                role="img"
                aria-label={`${c.label}${c.detail ? ` (${c.detail})` : ''}: ${format(c.value)}`}
                tabIndex={i === focusIndex ? 0 : -1}
                onPointerMove={(e: ReactPointerEvent) => show(i, { x: e.clientX, y: e.clientY })}
                onPointerLeave={() => setActive(null)}
                onFocus={() => {
                  setFocusIndex(i)
                  showAtRow(i)
                }}
                onBlur={() => setActive(null)}
              />
            ))}
          </svg>
        )}
      </div>
      {d && (
        <ChartTip tipRef={tip}>
          <b>{d.label}</b>
          {d.detail && <span className="dkj-chart-detail">{d.detail}</span>}
          <span className={cx('num', sign(d.value))}>{format(d.value)}</span>
          {showShare && <span className="dkj-chart-detail">{share(d.value / total)}</span>}
        </ChartTip>
      )}
      <ChartTable summary={tableLabel} caption={label} headings={showShare ? [itemHeading, valueHeading, shareHeading] : [itemHeading, valueHeading]}>
        {data.map((c) => (
          <tr key={c.key}>
            <td>
              {c.label}
              {c.detail && <span className="dkj-chart-detail">{c.detail}</span>}
            </td>
            <td className={sign(c.value)}>{format(c.value)}</td>
            {showShare && <td>{share(c.value / total)}</td>}
          </tr>
        ))}
      </ChartTable>
    </div>
  )
}
