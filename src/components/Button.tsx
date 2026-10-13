import { useRef, type ButtonHTMLAttributes, type CSSProperties, type ReactNode, type Ref } from 'react'
import { cx } from './cx'
import { Icon, type IconName } from './Icon'
import './buttons.css'

type Native = ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Button -- the text button.
 * default: surface fill with a border. primary: accent fill, full width. positive: green gradient.
 * outline: transparent with a muted border in the text colour (a quiet "back").
 * size="compact": 36px, uppercase, tracked -- the tap area stays 44px.
 */
export function Button({
  variant = 'default',
  size = 'md',
  block,
  className,
  type = 'button',
  ...rest
}: Native & { variant?: 'default' | 'primary' | 'positive' | 'outline'; size?: 'md' | 'compact'; block?: boolean }) {
  return (
    <button
      type={type}
      className={cx('dkj-btn', `dkj-btn--${variant}`, size === 'compact' && 'dkj-btn--compact', block && 'dkj-btn--block', className)}
      {...rest}
    />
  )
}

/** SaveButton -- the most prominent button in a box: accent fill, no border. Disabled: visible, colourless, inert. */
export function SaveButton({ className, type = 'button', children = 'Save', ...rest }: Native) {
  return (
    <button type={type} className={cx('dkj-save', className)} {...rest}>
      {children}
    </button>
  )
}

/**
 * IconButton.
 * filled: dark fill, 44px high, stretches in a CardActions row; may carry a text label next to its icon.
 * outline: light fill with a border, exactly --control-h square -- never taller than the value box beside it.
 * ghost: no fill, no border, 44px square (menu, close).
 * pressed (outline): no fill, no border, in the accent -- the "open" state.
 */
export function IconButton({
  icon,
  label,
  variant = 'outline',
  pressed,
  children,
  className,
  type = 'button',
  ref,
  ...rest
}: Native & { icon: IconName; label: string; variant?: 'filled' | 'outline' | 'ghost'; pressed?: boolean; children?: ReactNode; ref?: Ref<HTMLButtonElement> }) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx('dkj-iconbtn', `dkj-iconbtn--${variant}`, className)}
      aria-label={children ? undefined : label}
      aria-pressed={pressed}
      {...rest}
    >
      <Icon name={pressed && variant === 'outline' ? 'close' : icon} size={variant === 'ghost' && icon === 'menu' ? 24 : 20} />
      {children}
    </button>
  )
}

/** CardActions -- a row of filled IconButtons sharing the full width. */
export function CardActions({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx('dkj-card-actions', className)}>{children}</div>
}

/**
 * RoundToggle -- the round "?" (help) or "i" (info) button.
 * size="tap": a 24px glyph in a 44px tap area that does not make its row taller (negative margin).
 * size="badge": a small bordered circle with a "?" text glyph, e.g. after a number in a table.
 * size="inline": a 16px muted ring with a "?" or "i" in the text, for inside a label or heading; the tap area is 44px high.
 * Its label is required (e.g. "Explain: Total value"), so a page of them is not a row of identical buttons.
 * expanded: the glyph turns accent.
 */
export function RoundToggle({
  kind = 'help',
  size = 'tap',
  expanded,
  label,
  className,
  type = 'button',
  ...rest
}: Native & { kind?: 'help' | 'info'; expanded?: boolean } & ({ size?: 'tap' | 'badge'; label?: string } | { size: 'inline'; label: string })) {
  if (size === 'inline') {
    return (
      <button
        type={type}
        className={cx('dkj-inline-toggle', className)}
        aria-label={label ?? (kind === 'help' ? 'Explain' : 'Info')}
        aria-expanded={expanded}
        {...rest}
      >
        {kind === 'help' ? '?' : 'i'}
      </button>
    )
  }
  if (size === 'badge') {
    return (
      <button type={type} className={cx('dkj-badge-toggle', className)} aria-label={label ?? 'Explain'} aria-expanded={expanded} {...rest}>
        ?
      </button>
    )
  }
  return (
    <button
      type={type}
      className={cx('dkj-round-toggle', `dkj-round-toggle--${kind}`, className)}
      aria-label={label ?? (kind === 'help' ? 'Explain' : 'Info')}
      aria-expanded={expanded}
      {...rest}
    >
      <Icon name={kind} size={kind === 'help' ? 24 : 20} />
    </button>
  )
}

/**
 * SegmentedChoice -- a single choice from a few options.
 * layout="row": equal buttons side by side that scale their text down to a 360px phone; the pressed one is accent.
 * layout="list": a borderless list, one row per option with a rule between; the chosen one accent and bold, the rest muted.
 * layout="joined": one bordered capsule with dividers, 30px to the eye with a 44px tap area; the pressed one is an accent fill.
 */
export function SegmentedChoice<T extends string>({
  options,
  value,
  onChange,
  layout = 'row',
  label,
}: {
  options: readonly { value: T; label: string }[]
  value: T | undefined
  onChange: (value: T) => void
  layout?: 'row' | 'list' | 'joined'
  label: string
}) {
  return (
    <div className={cx('dkj-choices', `dkj-choices--${layout}`)} role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.value} type="button" className="dkj-btn dkj-btn--default dkj-choice" aria-pressed={o.value === value} onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  )
}

/**
 * FilterChips -- a multi-select filter group: a wrapping row of toggle chips, several on at once.
 * value: the chosen options; empty means "no filter", so there is no "All" option.
 * color (optional, per option): a free CSS colour for a leading dot, a house token (var(--cat-1)) where the colour is brand,
 * a literal where it is the user's content. The dot is decorative: the label carries the meaning. It is the one inline style here.
 * An on chip also shows a check mark, so the state is not colour alone.
 * label: the group name (required). A Clear button follows the chips while anything is chosen; clearLabel is its text.
 */
export function FilterChips<T extends string>({
  options,
  value,
  onChange,
  label,
  clearLabel = 'Clear',
}: {
  options: readonly { value: T; label: string; color?: string }[]
  value: readonly T[]
  onChange: (value: T[]) => void
  label: string
  clearLabel?: string
}) {
  const group = useRef<HTMLDivElement>(null)
  const toggle = (v: T) => onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v])
  const clear = () => {
    onChange([])
    // Focus moves synchronously, before Clear unmounts, to the first chip (a no-op when there are no options).
    group.current?.querySelector<HTMLButtonElement>('.dkj-filter-chip')?.focus()
  }
  return (
    <div ref={group} className="dkj-filter-chips" role="group" aria-label={label}>
      {options.map((o) => {
        const on = value.includes(o.value)
        return (
          <button key={o.value} type="button" className="dkj-filter-chip" aria-pressed={on} onClick={() => toggle(o.value)}>
            {on && (
              <svg className="dkj-filter-chip__check" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
                <path d="M3 8.5l3.2 3.2L13 4.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {o.color && <span className="dkj-filter-chip__dot" style={{ '--c': o.color } as CSSProperties} aria-hidden="true" />}
            {o.label}
          </button>
        )
      })}
      {value.length > 0 && (
        <button
          type="button"
          className="dkj-filter-chips__clear"
          aria-label={clearLabel.toLowerCase().includes(label.toLowerCase()) ? undefined : `${clearLabel} ${label}`}
          onClick={clear}
        >
          {clearLabel}
        </button>
      )}
    </div>
  )
}
