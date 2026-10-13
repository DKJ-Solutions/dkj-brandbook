import { cx } from './components/cx'
import { Toolbar } from './showcase/Showcase'
import { useWidth } from './showcase/theme'
import { Apps } from './showcase/sections/Apps'
import { Actions } from './showcase/sections/Actions'
import { Data } from './showcase/sections/Data'
import { Forms } from './showcase/sections/Forms'
import { Foundations } from './showcase/sections/Foundations'
import { Metrics } from './showcase/sections/Metrics'
import { Overlays } from './showcase/sections/Overlays'
import { Surfaces } from './showcase/sections/Surfaces'

/** The navigation mirrors the section order below; each id is a component id in src/components/sources.ts. */
const NAV = [
  { group: 'Apps', items: ['apps'] },
  { group: 'Foundations', items: ['tokens'] },
  { group: 'Actions', items: ['Button', 'SaveButton', 'SegmentedChoice', 'IconButton', 'RoundToggle'] },
  { group: 'Surfaces & content', items: ['Card', 'TintedPanel', 'Banner', 'Alert', 'Message', 'Chip', 'TitleTag', 'Help', 'Disclosure', 'ReadMoreToggle', 'GroupHeading', 'QuestionBlock', 'Amount', 'FooterNote'] },
  { group: 'Metrics', items: ['StatTile', 'HeroValue', 'Delta', 'Legend', 'ColumnChart', 'MiniCard', 'Meter', 'Badge'] },
  { group: 'Forms & rows', items: ['Field', 'Checkbox', 'Stepper', 'SearchCombobox', 'ValueBox', 'StatRow', 'FormulaRow'] },
  { group: 'Overlays & navigation', items: ['Dialog', 'Tooltip', 'Drawer', 'TopBar', 'PageHeader', 'MenuRow', 'DownloadButton', 'StepHeader', 'InfoRow'] },
  { group: 'Data', items: ['DefinitionList', 'DataTable', 'BillTable', 'ComparisonTable', 'CalcTable', 'AnswerBox'] },
] as const

const LABELS: Record<string, string> = { apps: 'Overview', tokens: 'Tokens' }

/** Every repo in the DKJ-Solutions GitHub organisation; each links to the repo itself. */
const REPOS = [
  'dkj-brandbook',
  'dkj-claude-plugins',
  'dkj-etf-tracker',
  'dkj-maplestory-classic-mesowise',
  'dkj-music-library',
  'dkj-recipes',
  'dkj-thumbnail-generator',
  'djcylow-react',
  'life-hub',
] as const

export default function App() {
  const controls = useWidth()
  return (
    <div className="bb-shell">
      <nav className="bb-nav" aria-label="Components">
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
              <a href={`https://github.com/DKJ-Solutions/${r}`} title={r}>
                {r}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="bb-main">
        <Toolbar controls={controls} />
        <div className={cx('bb-content', controls.width === 'phone' && 'bb-content--phone')}>
          <Apps />
          <Foundations />
          <Actions />
          <Surfaces />
          <Metrics />
          <Forms />
          <Overlays />
          <Data />
        </div>
      </main>
    </div>
  )
}
