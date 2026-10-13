import { cx } from './components/cx'
import { Toolbar } from './showcase/Showcase'
import { useThemeControls } from './showcase/theme'
import { Actions } from './showcase/sections/Actions'
import { Data } from './showcase/sections/Data'
import { Forms } from './showcase/sections/Forms'
import { Foundations } from './showcase/sections/Foundations'
import { Overlays } from './showcase/sections/Overlays'
import { Surfaces } from './showcase/sections/Surfaces'

/** The navigation mirrors the section order below; each id is a component id in src/components/sources.ts. */
const NAV = [
  { group: 'Foundations', items: ['tokens'] },
  { group: 'Actions', items: ['Button', 'SaveButton', 'SegmentedChoice', 'IconButton', 'RoundToggle'] },
  { group: 'Surfaces & content', items: ['Card', 'TintedPanel', 'Banner', 'Message', 'Chip', 'TitleTag', 'Help', 'Disclosure', 'GroupHeading', 'QuestionBlock', 'Amount'] },
  { group: 'Forms & rows', items: ['Field', 'Checkbox', 'Stepper', 'SearchCombobox', 'ValueBox', 'StatRow', 'FormulaRow'] },
  { group: 'Overlays & navigation', items: ['Dialog', 'Drawer', 'TopBar', 'MenuRow', 'DownloadButton', 'StepHeader', 'InfoRow'] },
  { group: 'Data', items: ['DefinitionList', 'BillTable', 'ComparisonTable', 'CalcTable', 'AnswerBox'] },
] as const

export default function App() {
  const controls = useThemeControls()
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
                  <a href={`#${i}`}>{i === 'tokens' ? 'Tokens' : i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <main className="bb-main">
        <Toolbar controls={controls} />
        <div className={cx('bb-content', controls.width === 'phone' && 'bb-content--phone')}>
          <Foundations stamp={`${controls.theme}-${controls.mode}`} />
          <Actions />
          <Surfaces />
          <Forms />
          <Overlays />
          <Data />
        </div>
      </main>
    </div>
  )
}
