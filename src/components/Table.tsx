import type { ReactNode } from 'react'
import { cx } from './cx'
import './tables.css'

/**
 * DefinitionList -- label left, value right (bold, tabular), a rule between rows; a detail line small and muted under
 * the label; an optional total row in bold without a rule under it. variant="facts": the label is muted.
 */
export function DefinitionList({
  items,
  total,
  variant = 'breakdown',
}: {
  items: readonly { term: string; detail?: string; value: string }[]
  total?: { term: string; value: string }
  variant?: 'breakdown' | 'facts'
}) {
  return (
    <dl className={cx('dkj-dl', variant === 'facts' && 'dkj-dl--facts')}>
      {items.map((i) => (
        <div key={i.term}>
          <dt>
            {i.term}
            {i.detail && <span className="dkj-dl-detail">{i.detail}</span>}
          </dt>
          <dd>{i.value}</dd>
        </div>
      ))}
      {total && (
        <div className="dkj-dl-total">
          <dt>{total.term}</dt>
          <dd>{total.value}</dd>
        </div>
      )}
    </dl>
  )
}

export type BillLine = {
  slot: string
  name: string | null
  qty?: string
  price: string | null
  /** buy: the price in the accent. empty: a muted dash for the name. */
  tone?: 'buy' | 'empty'
  action?: ReactNode
}

/**
 * BillTable -- one table per invoice: small uppercase muted column heads, a row per line (slot, item name that
 * truncates, optional qty, price right-aligned), optional groups that close with a subtotal between stronger rules,
 * and a total under a rule in the accent.
 */
export function BillTable({
  columns,
  groups,
  total,
  withQty,
}: {
  columns: { slot: string; item: string; qty?: string; price: string }
  groups: readonly { name?: string; lines: readonly BillLine[]; subtotal?: string }[]
  total?: { label: string; value: string }
  withQty?: boolean
}) {
  return (
    <table className={cx('dkj-bill', withQty && 'dkj-bill--qty')}>
      <thead>
        <tr className="dkj-bill-head">
          <th scope="col">{columns.slot}</th>
          <th scope="col">{columns.item}</th>
          {withQty && <th scope="col" className="dkj-num">{columns.qty}</th>}
          <th scope="col" className="dkj-num">{columns.price}</th>
          <th scope="col" aria-label="Actions" />
        </tr>
      </thead>
      {groups.map((g, gi) => (
        <tbody key={gi} className={cx(g.subtotal && 'dkj-bill-group')}>
          {g.lines.map((l) => (
            <tr key={l.slot} className={cx('dkj-bill-row', l.tone && `dkj-bill-row--${l.tone}`)}>
              <th scope="row" className="dkj-bill-slot">{l.slot}</th>
              <td>
                <span className="dkj-bill-name">{l.name ?? '—'}</span>
              </td>
              {withQty && <td className="dkj-num dkj-bill-qty">{l.qty}</td>}
              <td className="dkj-num dkj-bill-price">{l.price ?? ''}</td>
              <td className="dkj-bill-action">{l.action}</td>
            </tr>
          ))}
          {g.subtotal && (
            <tr className="dkj-bill-subtotal">
              <th scope="row" colSpan={withQty ? 3 : 2}>
                {g.name}
              </th>
              <td className="dkj-num">
                <strong>{g.subtotal}</strong>
              </td>
              <td />
            </tr>
          )}
        </tbody>
      ))}
      {total && (
        <tfoot>
          <tr className="dkj-bill-total">
            <th scope="row" colSpan={withQty ? 3 : 2}>
              {total.label}
            </th>
            <td className="dkj-num">
              <strong>{total.value}</strong>
            </td>
            <td />
          </tr>
        </tfoot>
      )}
    </table>
  )
}

/**
 * ComparisonTable -- a label column and numeric columns with small right-aligned muted heads; the last column is the
 * difference, negative in red with a minus and positive in green with a plus; a bold total row under a strong rule.
 */
export function ComparisonTable({
  columns,
  rows,
  total,
}: {
  columns: readonly string[]
  rows: readonly { label: string; values: readonly string[]; tone?: 'negative' | 'positive' | 'none' }[]
  total?: { label: string; values: readonly string[]; tone?: 'negative' | 'positive' }
}) {
  const diff = (tone: 'negative' | 'positive' | 'none' | undefined) => cx('dkj-num', tone && tone !== 'none' && `dkj-tone-${tone}`, tone === 'none' && 'dkj-muted')
  return (
    <table className="dkj-compare">
      <thead>
        <tr>
          <td />
          {columns.map((c) => (
            <th key={c} scope="col">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label}>
            <th scope="row">{r.label}</th>
            {r.values.map((v, i) => (
              <td key={i} className={i === r.values.length - 1 ? diff(r.tone) : 'dkj-num'}>
                {v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {total && (
        <tfoot>
          <tr>
            <th scope="row">{total.label}</th>
            {total.values.map((v, i) => (
              <td key={i} className={i === total.values.length - 1 ? diff(total.tone) : 'dkj-num'}>
                {v}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  )
}

export type CalcItem =
  | { kind: 'row'; what: string; sub?: string; op?: string; num: string }
  | { kind: 'box'; items: readonly CalcItem[] }

/**
 * CalcTable -- a calculation written downwards: what it is left, the operator and the number right-aligned so the
 * digits line up, a thin rule between factors. Boxes (an accent-mixed border) group the factors that belong together
 * and share the outer columns via subgrid. The result sits below without a label, large and in the accent.
 */
export function CalcTable({ items, result }: { items: readonly CalcItem[]; result: string }) {
  const boxed = items.some((i) => i.kind === 'box')
  const render = (list: readonly CalcItem[]): ReactNode =>
    list.map((i, n) =>
      i.kind === 'box' ? (
        <div key={n} className="dkj-calc-box">
          {render(i.items)}
        </div>
      ) : (
        <div key={n} className="dkj-calc-row">
          <span className="dkj-calc-what">
            {i.what}
            {i.sub && <span className="dkj-calc-sub">{i.sub}</span>}
          </span>
          <span className="dkj-calc-op">{i.op ?? ''}</span>
          <span className="dkj-calc-num">{i.num}</span>
        </div>
      ),
    )
  return (
    <div className={cx('dkj-calc', boxed && 'dkj-calc--boxed')}>
      {render(items)}
      <div className="dkj-calc-row dkj-calc-result">
        <span className="dkj-calc-what" />
        <span className="dkj-calc-op">=</span>
        <span className="dkj-calc-num">{result}</span>
      </div>
    </div>
  )
}

/** AnswerBox -- the answer of a block: a rounded accent-tinted box, the label left and the number right in the accent. */
export function AnswerBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="dkj-answer">
      <span className="dkj-answer-label">{label}</span>
      <span className="dkj-answer-value">{value}</span>
    </div>
  )
}

/** CalcSection -- a block of a calculation with a bold question as its heading; space between blocks. */
export function CalcSection({ question, children }: { question: string; children: ReactNode }) {
  return (
    <section className="dkj-calc-section">
      <h4 className="dkj-calc-question">{question}</h4>
      {children}
    </section>
  )
}
