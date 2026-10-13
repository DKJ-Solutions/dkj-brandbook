import type { ReactNode } from 'react'
import { cx } from './cx'
import { Chip } from './Feedback'
import './surfaces.css'

/**
 * GroupHeading -- an uppercase, muted section label (h4 size), optionally with a counter on the right
 * that turns danger when it is over its limit.
 */
export function GroupHeading({ children, count, over }: { children: ReactNode; count?: ReactNode; over?: boolean }) {
  return (
    <h3 className="dkj-group-heading">
      <span>{children}</span>
      {count !== undefined && <span className={cx('dkj-group-count', over && 'dkj-group-count--over')}>{count}</span>}
    </h3>
  )
}

/**
 * QuestionBlock -- a heading (h3) with a verdict chip on the same line (the chip shrinks or wraps below),
 * then a verdict line (h4 size) and supporting text.
 */
export function QuestionBlock({
  title,
  chip,
  chipText,
  verdict,
  children,
}: {
  title: ReactNode
  chip: 'yes' | 'no' | 'todo' | 'unknown'
  chipText: string
  verdict?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="dkj-question">
      <div className="dkj-question-head">
        <h3>{title}</h3>
        <Chip tone={chip}>{chipText}</Chip>
      </div>
      {verdict && <p className="dkj-verdict">{verdict}</p>}
      {children}
    </div>
  )
}

/** Amount -- a tabular number with a small icon after it, at the height of the digits. */
export function Amount({ value, icon }: { value: string; icon?: ReactNode }) {
  return (
    <span className="dkj-amount">
      {value}
      {icon}
    </span>
  )
}
