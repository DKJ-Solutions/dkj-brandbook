import type { ReactNode } from 'react'
import { cx } from './cx'
import { Icon, type IconName } from './Icon'
import './surfaces.css'

/**
 * Card -- the main surface. flush: no padding, the head and body bring their own.
 * invalid: a danger border. open: a stronger accent-tinted border while its dialog is open.
 */
export function Card({
  children,
  flush,
  invalid,
  open,
  className,
}: {
  children: ReactNode
  flush?: boolean
  invalid?: boolean
  open?: boolean
  className?: string
}) {
  return (
    <section className={cx('dkj-card', flush && 'dkj-card--flush', invalid && 'dkj-card--invalid', open && 'dkj-card--open', className)}>
      {children}
    </section>
  )
}

/** CardHead -- a centred title (optionally with an accent icon), and below it the card's actions over the full width. */
export function CardHead({ title, icon, actions }: { title: ReactNode; icon?: IconName; actions?: ReactNode }) {
  return (
    <div className="dkj-card-head">
      <h2 className={cx('dkj-card-title', icon && 'dkj-card-title--icon')}>
        {icon && <Icon name={icon} className="dkj-card-icon" />}
        {title}
      </h2>
      {actions}
    </div>
  )
}

/** CardBody -- the card content under a rule. */
export function CardBody({ children }: { children: ReactNode }) {
  return <div className="dkj-card-body">{children}</div>
}

/**
 * TintedPanel -- a bordered panel tinted from one colour token, so parts of one card read as separate:
 * neutral (muted), accent, or positive. As a button it becomes a large tappable tile.
 */
export function TintedPanel({
  tone = 'neutral',
  children,
  as = 'div',
  onClick,
}: {
  tone?: 'neutral' | 'accent' | 'positive'
  children: ReactNode
  as?: 'div' | 'button'
  onClick?: () => void
}) {
  const className = cx('dkj-panel', `dkj-panel--${tone}`, as === 'button' && 'dkj-panel--button')
  return as === 'button' ? (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  ) : (
    <div className={className}>{children}</div>
  )
}
