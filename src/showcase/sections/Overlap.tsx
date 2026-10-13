import type { ComponentId } from '../../components/sources'
import { Section } from '../Showcase'

/** One finding of the overlap review: the components involved (each links to its section), what they share, and the proposal. */
type Finding = { title: string; components: readonly ComponentId[]; why: string; proposal?: string }

/** The overlap review of October 13, 2026 (#64), grouped by verdict. Each merge is decided per pair, in its own issue. */
const GROUPS: readonly { verdict: string; findings: readonly Finding[] }[] = [
  {
    verdict: 'Strong candidates -- one pattern, two names',
    findings: [
      {
        title: 'SaveButton and Button primary',
        components: ['SaveButton', 'Button'],
        why: 'Both are an accent fill with the on-accent text. Primary is always full width with a border; SaveButton has neither.',
        proposal: 'SaveButton becomes Button variant="primary", with the width set by the existing block prop.',
      },
      {
        title: 'StatTile and MiniCard',
        components: ['StatTile', 'MiniCard'],
        why: 'Both are a bordered tile with a small muted label and a 600-weight figure. Only radius, padding, figure size and grid column width differ.',
        proposal: 'One Tile with size="md" | "sm", keeping the info, tone, highlight and children slots.',
      },
      {
        title: 'Banner warn and Alert',
        components: ['Banner', 'Alert'],
        why: 'Both are a tinted callout with a bold lead, a warning icon and text under it; the house .notice is a third. Only the colour differs.',
        proposal: 'One Callout with tone="accent" | "warn" | "danger".',
      },
      {
        title: 'StatRow and MenuRow',
        components: ['StatRow', 'MenuRow'],
        why: 'Both are a name on the left, a value on the right and a pencil button, with a rule between rows.',
        proposal: 'MenuRow becomes a variant of StatRow.',
      },
      {
        title: 'ComparisonTable and DataTable',
        components: ['ComparisonTable', 'DataTable'],
        why: 'Both have a label column, right-aligned tabular figures, a bold total row and a tone per cell. ComparisonTable is a DataTable without sorting, toned on its last column.',
        proposal: 'ComparisonTable becomes a mode of DataTable.',
      },
    ],
  },
  {
    verdict: 'Borderline -- closely related, but each has a role of its own',
    findings: [
      {
        title: 'DownloadButton and Button',
        components: ['DownloadButton', 'Button'],
        why: 'A full-width bordered button; the difference is that it is an <a download> with an icon.',
        proposal: 'Possibly Button with href and icon.',
      },
      {
        title: 'ResetButton',
        components: ['Stepper', 'Button'],
        why: 'Accent text without a fill, shown beside the Stepper: in effect a Button variant="text" the set does not have yet.',
        proposal: 'Possibly a text variant of Button.',
      },
      {
        title: 'AnswerBox and TintedPanel accent',
        components: ['AnswerBox', 'TintedPanel'],
        why: 'Both are an accent-tinted box: 10% without a border against 7% with one.',
        proposal: 'Possibly TintedPanel with a fixed label-and-value layout.',
      },
      {
        title: 'Chip and TitleTag',
        components: ['Chip', 'TitleTag'],
        why: 'Both are a pill. Chip is a verdict (large, bordered), TitleTag a small uppercase label.',
        proposal: 'Possibly one Pill with a size, but the roles do differ.',
      },
      {
        title: 'ValueBox and Amount',
        components: ['ValueBox', 'Amount'],
        why: 'Both are a tabular number with something after it: a unit or an icon.',
      },
    ],
  },
  {
    verdict: 'Looks alike, but is not a duplicate',
    findings: [
      {
        title: 'SegmentedChoice and FilterChips',
        components: ['SegmentedChoice', 'FilterChips'],
        why: 'One is a single choice, the other a multiple one.',
      },
      {
        title: 'Help, Disclosure, Tooltip and ReadMoreToggle',
        components: ['Help', 'Disclosure', 'Tooltip', 'ReadMoreToggle'],
        why: 'Four ways to keep an explanation out of sight, each with its own behaviour. What they need is a guideline on when to use which, not a merge.',
      },
      {
        title: 'The three charts',
        components: ['ColumnChart', 'BarChart', 'LineChart'],
        why: 'They already share their internals: the chart frame, the keyboard handling, the tooltip and the table.',
      },
      {
        title: 'GroupHeading and CalcSection',
        components: ['GroupHeading', 'AnswerBox'],
        why: 'A muted uppercase section label against the bold question heading of a calculation block: a different look and a different job.',
      },
    ],
  },
]

/** The overlap review: which components duplicate or closely resemble each other, and what to do about it. */
export function Overlap() {
  return (
    <Section
      id="overlap"
      title="Overlap"
      intro="A review of every component, its API and its CSS side by side, for pairs that render the same pattern under two names. A merge changes how something looks, so each one is decided per pair. Follow a link to compare the components."
    >
      {GROUPS.map((g) => (
        <article key={g.verdict} className="bb-app">
          <h3 className="bb-kind">{g.verdict}</h3>
          <ul className="bb-views">
            {g.findings.map((f) => (
              <li key={f.title} className="bb-view">
                <h4 className="bb-view-title">{f.title}</h4>
                <p>{f.why}</p>
                {f.proposal && (
                  <p>
                    <strong>Proposal:</strong> {f.proposal}
                  </p>
                )}
                <div className="bb-view-components">
                  {f.components.map((c) => (
                    <a key={c} href={`#${c}`}>
                      {c}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  )
}
