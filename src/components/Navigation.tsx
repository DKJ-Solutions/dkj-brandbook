import { useRef, useState, type ReactNode } from 'react'
import { cx } from './cx'
import { Button, IconButton, RoundToggle } from './Button'
import { Dialog } from './Dialog'
import { Icon } from './Icon'
import './navigation.css'

/**
 * TopBar -- sticky, the surface colour, full width with a hairline shadow; the content aligns with the app column.
 * Brand name and a muted tagline on the left, a menu button on the right that opens a Drawer.
 */
export function TopBar({ name, tagline, menuTitle = 'Settings', menu }: { name: string; tagline?: string; menuTitle?: string; menu: ReactNode }) {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  return (
    <header className="dkj-topbar">
      <div className="dkj-topbar-inner">
        <div className="dkj-topbar-brand">
          <span className="dkj-topbar-name">{name}</span>
          {tagline && <span className="dkj-topbar-tagline">{tagline}</span>}
        </div>
        <IconButton
          ref={button}
          variant="ghost"
          icon="menu"
          label={menuTitle}
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        />
      </div>
      <Dialog
        open={open}
        variant="drawer"
        heading="plain"
        title={menuTitle}
        onClose={() => {
          setOpen(false)
          button.current?.focus()
        }}
      >
        <div className="dkj-drawer-content">{menu}</div>
      </Dialog>
    </header>
  )
}

/** MenuList / MenuRow -- a label, the chosen value right-aligned against a pencil; a rule between rows only. */
export function MenuList({ children }: { children: ReactNode }) {
  return <ul className="dkj-menu-list">{children}</ul>
}

export function MenuRow({ label, value, onEdit }: { label: string; value: ReactNode; onEdit?: () => void }) {
  return (
    <li className="dkj-menu-row">
      <span className="dkj-menu-label">{label}:</span>
      <span className="dkj-menu-value">{value}</span>
      <IconButton icon="pencil" label={`Edit ${label}`} onClick={onEdit} />
    </li>
  )
}

/** DrawerFooter -- pinned to the bottom of a drawer, with free space above it. */
export function DrawerFooter({ children }: { children: ReactNode }) {
  return <div className="dkj-drawer-footer">{children}</div>
}

/**
 * StepHeader -- back, a large value exactly centred, forward. Two equal side columns keep the value in the middle of
 * the screen however wide the buttons are. Both buttons are compact and identical in size; back is outline, forward
 * is the positive gradient.
 */
export function StepHeader({
  value,
  backLabel = 'Back',
  forwardLabel = 'Next',
  onBack,
  onForward,
  canBack = true,
  canForward = true,
}: {
  value: ReactNode
  backLabel?: string
  forwardLabel?: string
  onBack?: () => void
  onForward?: () => void
  canBack?: boolean
  canForward?: boolean
}) {
  return (
    <div className="dkj-stephead">
      <Button variant="outline" size="compact" onClick={onBack} disabled={!canBack}>
        {backLabel}
      </Button>
      <p className="dkj-stephead-value">{value}</p>
      <Button variant="positive" size="compact" onClick={onForward} disabled={!canForward}>
        {forwardLabel}
      </Button>
    </div>
  )
}

/**
 * InfoRow ("based on") -- a small muted head, then one tinted box per row: the value (or a muted placeholder), an
 * info button that fills the box so the name is tappable too, and optionally a pencil outside the box.
 */
export function InfoRows({ head, tone = 'accent', children }: { head: string; tone?: 'accent' | 'info'; children: ReactNode }) {
  return (
    <section className={cx('dkj-inforows', tone === 'info' && 'dkj-inforows--info')}>
      <p className="dkj-inforows-head">{head}</p>
      <div className="dkj-inforows-list">{children}</div>
    </section>
  )
}

export function InfoRow({
  value,
  placeholder = 'Nothing chosen',
  onInfo,
  onHelp,
  onEdit,
}: {
  value: string | null
  placeholder?: string
  onInfo?: () => void
  onHelp?: () => void
  onEdit?: () => void
}) {
  return (
    <div className="dkj-inforow">
      <div className="dkj-inforow-box">
        {value ? (
          <button type="button" className="dkj-inforow-named" onClick={onInfo}>
            <Icon name="info" />
            <span className="dkj-inforow-value">{value}</span>
          </button>
        ) : (
          <span className="dkj-inforow-value dkj-inforow-value--placeholder">{placeholder}</span>
        )}
        {onHelp && <RoundToggle onClick={onHelp} />}
      </div>
      {onEdit && <IconButton icon="pencil" label="Edit" onClick={onEdit} />}
    </div>
  )
}

/**
 * PageHeader -- the page title as the house serif h1, and on its right a controls row: a muted "as of" line, then
 * whatever controls the page has (a joined SegmentedChoice, buttons). The row wraps under the title on a narrow screen.
 * It carries its own flex layout, so it also works where the header is not a direct child of <main>.
 */
export function PageHeader({ title, asOf, children }: { title: string; asOf?: string; children?: ReactNode }) {
  return (
    <header className="dkj-page-header">
      <h1>{title}</h1>
      <div className="controls">
        {asOf && <span className="muted">{asOf}</span>}
        {children}
      </div>
    </header>
  )
}

/**
 * Breadcrumbs -- where this page sits: each ancestor a link, the current page last and unlinked (aria-current), a muted
 * slash between them. The trail wraps on a narrow screen.
 */
export function Breadcrumbs({ items }: { items: readonly { label: string; href?: string }[] }) {
  return (
    <nav className="dkj-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => {
          const current = i === items.length - 1
          return (
            <li key={i}>
              {i > 0 && (
                <span className="dkj-breadcrumbs-sep" aria-hidden="true">
                  /
                </span>
              )}
              {current || !item.href ? <span aria-current={current ? 'page' : undefined}>{item.label}</span> : <a href={item.href}>{item.label}</a>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
