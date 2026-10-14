import { useEffect, useState } from 'react'
import { cx } from './components/cx'
import { Toolbar } from './showcase/Showcase'
import { Intro } from './showcase/sections/Intro'
import { RepoPreview } from './showcase/previews/RepoPreview'
import { useWidth } from './showcase/theme'
import { Apps } from './showcase/sections/Apps'
import { Actions } from './showcase/sections/Actions'
import { Data } from './showcase/sections/Data'
import { Forms } from './showcase/sections/Forms'
import { Foundations } from './showcase/sections/Foundations'
import { Metrics } from './showcase/sections/Metrics'
import { Overlap } from './showcase/sections/Overlap'
import { Overlays } from './showcase/sections/Overlays'
import { Surfaces } from './showcase/sections/Surfaces'

/** The navigation mirrors the section order below; each id is a component id in src/components/sources.ts. */
const NAV = [
  { group: 'Apps', items: ['apps', 'overlap'] },
  { group: 'Foundations', items: ['tokens'] },
  { group: 'Actions', items: ['Button', 'SaveButton', 'SegmentedChoice', 'FilterChips', 'IconButton', 'RoundToggle'] },
  { group: 'Surfaces & content', items: ['Card', 'TintedPanel', 'Banner', 'Alert', 'Message', 'Chip', 'TitleTag', 'Help', 'Disclosure', 'ReadMoreToggle', 'GroupHeading', 'QuestionBlock', 'Amount', 'Prose', 'Figure', 'FooterNote'] },
  { group: 'Metrics', items: ['StatTile', 'HeroValue', 'Delta', 'Legend', 'ColumnChart', 'BarChart', 'LineChart', 'MiniCard', 'Meter', 'Badge'] },
  { group: 'Forms & rows', items: ['Field', 'Checkbox', 'Stepper', 'SearchCombobox', 'ValueBox', 'StatRow', 'FormulaRow', 'DateRow'] },
  { group: 'Overlays & navigation', items: ['Dialog', 'Tooltip', 'Drawer', 'TopBar', 'PageHeader', 'MenuRow', 'DownloadButton', 'StepHeader', 'InfoRow'] },
  { group: 'Data', items: ['DefinitionList', 'DataTable', 'BillTable', 'ComparisonTable', 'CalcTable', 'AnswerBox'] },
] as const

const LABELS: Record<string, string> = { apps: 'Overview', overlap: 'Overlap', tokens: 'Tokens' }

/** The repos in the DKJ-Solutions GitHub organisation as of October 13, 2026, except this brand book itself; each opens its recreated preview (#preview/<repo>). */
const REPOS = [
  'dkj-claude-plugins',
  'dkj-etf-tracker',
  'dkj-maplestory-classic-mesowise',
  'dkj-music-library',
  'dkj-recipes',
  'dkj-thumbnail-generator',
  'life-hub',
] as const

/** The repo whose preview the hash asks for, or null for the brand book itself. */
function usePreviewRepo() {
  // Repo names are plain ASCII, so the raw hash is compared as-is: no decode that a malformed hash could make throw.
  const read = () => {
    const m = /^#preview\/(.+)$/.exec(window.location.hash)
    return m && (REPOS as readonly string[]).includes(m[1]) ? m[1] : null
  }
  const [repo, setRepo] = useState(read)
  useEffect(() => {
    let frame = 0
    // Leaving a preview for a section: that section only exists after the next render, so scroll to it then.
    const onHash = () => {
      const next = read()
      setRepo(next)
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const target = next ? null : document.getElementById(window.location.hash.slice(1))
        if (target) target.scrollIntoView()
        else window.scrollTo(0, 0)
      })
    }
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('hashchange', onHash)
      cancelAnimationFrame(frame)
    }
  }, [])
  return repo
}

export default function App() {
  const controls = useWidth()
  const previewRepo = usePreviewRepo()
  return (
    <div className="bb-shell">
      <nav className="bb-nav" aria-label="Brand book">
        <p className="bb-brand">DKJ Brand Book</p>
        <p className="bb-brand-sub">One brand, several themes</p>
        {NAV.map((g) => (
          <div key={g.group}>
            <p className="bb-nav-group">{g.group}</p>
            <ul>
              {g.items.map((i) => (
                <li key={i}>
                  <a href={`#${i}`}>{LABELS[i] ?? i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="bb-nav-group">DKJ-Solutions</p>
        <ul>
          {REPOS.map((r) => (
            <li key={r}>
              <a href={`#preview/${r}`} title={r} aria-current={r === previewRepo ? 'page' : undefined}>
                {r}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="bb-main">
        <Toolbar controls={controls} />
        <div className={cx('bb-content', controls.width === 'phone' && 'bb-content--phone')}>
          {previewRepo ? (
            <RepoPreview repo={previewRepo} />
          ) : (
            <>
              <Intro />
              <Apps />
              <Overlap />
              <Foundations />
              <Actions />
              <Surfaces />
              <Metrics />
              <Forms />
              <Overlays />
              <Data />
            </>
          )}
        </div>
      </main>
    </div>
  )
}
