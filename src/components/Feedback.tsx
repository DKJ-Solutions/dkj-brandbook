import { useId, useState, type ReactNode } from 'react'
import { cx } from './cx'
import { RoundToggle } from './Button'
import './surfaces.css'

/** Banner -- a soft accent-tinted callout with an accent-mixed border; <strong> inside it turns accent. */
export function Banner({ children }: { children: ReactNode }) {
  return <p className="dkj-banner">{children}</p>
}

/**
 * Message -- a line of supporting text.
 * hint: muted help. note: a hint with more space above. warn: bold warning colour. error: danger.
 * debug: developer info, dashed danger outline, so it never reads as help for the user.
 */
export function Message({ tone = 'hint', children }: { tone?: 'hint' | 'note' | 'warn' | 'error' | 'debug'; children: ReactNode }) {
  return <p className={cx('dkj-msg', `dkj-msg--${tone}`)}>{children}</p>
}

/** Chip -- a verdict pill. yes: accent fill. no: page fill. todo / unknown: muted and dashed. */
export function Chip({ tone, children }: { tone: 'yes' | 'no' | 'todo' | 'unknown'; children: ReactNode }) {
  return <span className={cx('dkj-chip', `dkj-chip--${tone}`)}>{children}</span>
}

/** TitleTag -- a small uppercase pill label on its own line above a title. info: the info-accent. */
export function TitleTag({ tone = 'accent', children }: { tone?: 'accent' | 'info'; children: ReactNode }) {
  return <span className={cx('dkj-tag', tone === 'info' && 'dkj-tag--info')}>{children}</span>
}

/**
 * Help -- an explanation that stays closed until asked for: a round "?" on the right, the text below it.
 * The text stays in the page (hidden), so aria-controls holds.
 */
export function Help({ children, defaultOpen = false }: { children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className="dkj-help">
      <RoundToggle expanded={open} aria-controls={id} onClick={() => setOpen(!open)} />
      <p className="dkj-msg dkj-msg--hint" id={id} hidden={!open}>
        {children}
      </p>
    </div>
  )
}

/** Disclosure -- a native <details> with a bold summary. */
export function Disclosure({ summary, children, defaultOpen }: { summary: string; children: ReactNode; defaultOpen?: boolean }) {
  return (
    <details className="dkj-disclosure" open={defaultOpen}>
      <summary>{summary}</summary>
      {children}
    </details>
  )
}
