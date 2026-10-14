import { createContext, useContext, type ReactNode } from 'react'
import { cx } from './cx'
import { Icon, type IconName } from './Icon'
import './surfaces.css'

/** The card's variant, so CardHead picks the heading element whose token its title is set in. */
const CardVariant = createContext<'default' | 'data'>('default')

/**
 * Card -- the main surface. flush: no padding, the head and body bring their own.
 * invalid: a danger border. open: a stronger accent-tinted border while its dialog is open.
 * variant="data": for a data view -- 20px padding, the head left-aligned in the house serif with an optional subline,
 * and no rule between head and body. The other states stay.
 */
export function Card({
  children,
  flush,
  invalid,
  open,
  variant = 'default',
  className,
}: {
  children: ReactNode
  flush?: boolean
  invalid?: boolean
  open?: boolean
  variant?: 'default' | 'data'
  className?: string
}) {
  return (
    <section
      className={cx('dkj-card', flush && 'dkj-card--flush', variant === 'data' && 'dkj-card--data', invalid && 'dkj-card--invalid', open && 'dkj-card--open', className)}
    >
      <CardVariant.Provider value={variant}>{children}</CardVariant.Provider>
    </section>
  )
}

/**
 * CardHead -- a centred title (optionally with an accent icon), and below it the card's actions over the full width.
 * The title is an <h6> (--text-h6), or an <h2> (--text-h2) in a data card: a heading takes the token of its own level.
 * subtitle: a muted line under the title. info: a slot after the title text, for an inline RoundToggle.
 */
export function CardHead({
  title,
  icon,
  subtitle,
  info,
  actions,
}: {
  title: ReactNode
  icon?: IconName
  subtitle?: ReactNode
  info?: ReactNode
  actions?: ReactNode
}) {
  const Title = useContext(CardVariant) === 'data' ? 'h2' : 'h6'
  return (
    <div className="dkj-card-head">
      <Title className={cx('dkj-card-title', icon && 'dkj-card-title--icon')}>
        {icon && <Icon name={icon} className="dkj-card-icon" />}
        {title}
        {info}
      </Title>
      {subtitle && <p className="dkj-card-sub">{subtitle}</p>}
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
