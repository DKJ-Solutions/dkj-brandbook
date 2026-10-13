import type { ComponentId } from '../components/sources'

/**
 * The apps overview: every DKJ-Solutions app whose design the brand book follows, and the views it is made of.
 * Adding the next app is one new entry in APPS below (plus its views); the Apps section and the "Used in" footer
 * under every component are derived from this file. `components` is typed against ComponentId, so a typo fails tsc.
 */
export type ViewKind = 'screen' | 'card' | 'dialog' | 'tooltip' | 'drawer' | 'menu'

export type View = {
  id: string
  name: string
  kind: ViewKind
  description: string
  components: readonly ComponentId[]
}

export type App = {
  id: string
  name: string
  /** GitHub "owner/name". */
  repo: string
  description: string
  /** Live URL, where the app is deployed. */
  url?: string
  stack: string
  views: readonly View[]
}

/** Display order and labels of the view kinds. */
export const VIEW_KINDS: readonly { kind: ViewKind; label: string }[] = [
  { kind: 'screen', label: 'Screens' },
  { kind: 'card', label: 'Cards' },
  { kind: 'dialog', label: 'Dialogs' },
  { kind: 'tooltip', label: 'Tooltips' },
  { kind: 'drawer', label: 'Drawers' },
  { kind: 'menu', label: 'Menus and bars' },
]

// Mesowise: researched read-only from the app's repo; live URL verified 2026-10-13.
const MESOWISE_VIEWS: readonly View[] = [
  { id: 'top-bar', name: 'Top bar', kind: 'menu', description: 'Full-width header with the app name, a tagline and a hamburger button that opens the settings drawer.', components: ['TopBar', 'IconButton'] },
  { id: 'settings-drawer', name: 'Settings drawer', kind: 'drawer', description: 'Panel sliding in from the right with a list of settings rows, a collapsible Help note and an offline-download button; each row opens a second drawer with segmented choices and a Save button.', components: ['Drawer', 'MenuRow', 'SegmentedChoice', 'SaveButton', 'Disclosure', 'DownloadButton', 'Message'] },
  { id: 'level-row', name: 'Level stepper', kind: 'card', description: 'A row with Back, the current level as the page heading and Level up, with a hint under it when levelling is blocked.', components: ['StepHeader', 'Button', 'Message'] },
  { id: 'app-question', name: 'Headline question', kind: 'card', description: 'A single highlighted question line that names the current level and job.', components: ['Banner'] },
  { id: 'level-cost-summary', name: 'Level cost summary', kind: 'card', description: 'Tinted buttons showing the cost of the next level for the cheapest setup versus the current setup, with the difference below; each opens the matching popup.', components: ['TintedPanel', 'Amount', 'Icon'] },
  { id: 'job-card', name: 'Job and gender card', kind: 'card', description: 'First-run card with segmented choices for job and gender, shown only until both are chosen, with an edit icon afterwards.', components: ['Card', 'SegmentedChoice', 'IconButton', 'Help'] },
  { id: 'equipment-card', name: 'Equipment card', kind: 'card', description: 'Card with a title and Cheapest/Profile view buttons; the popups hold equipment slots with a search picker, value boxes with steppers and a switch.', components: ['Card', 'IconButton', 'Icon', 'SearchCombobox', 'ValueBox', 'Stepper', 'SaveButton', 'Checkbox', 'StatRow', 'Message'] },
  { id: 'skills-card', name: 'Skill points card', kind: 'card', description: 'Card with view buttons; the popup lists grouped skill rows with a points-pool counter, and its report asks a question and offers a Place-point button.', components: ['Card', 'GroupHeading', 'StatRow', 'QuestionBlock', 'Chip', 'Button', 'Message'] },
  { id: 'monster-card', name: 'Monster card', kind: 'card', description: 'Card where you pick the monster you hunt and edit its info, with a draft that Save commits and a report.', components: ['Card', 'Field', 'SaveButton', 'QuestionBlock', 'Chip', 'Message'] },
  { id: 'potions-card', name: 'Potions card', kind: 'card', description: 'Card with groups of selectable potion fields you can correct, plus a report with a recommendation.', components: ['Card', 'GroupHeading', 'Field', 'QuestionBlock', 'Chip'] },
  { id: 'ability-points-card', name: 'Ability points card', kind: 'card', description: 'Card whose popup shows the character profile with plus/total ability rows, steppers, an auto-assign button and a Based-on summary.', components: ['Card', 'FormulaRow', 'Stepper', 'StatRow', 'Button', 'InfoRow', 'DefinitionList'] },
  { id: 'total-stats-card', name: 'Total stats card', kind: 'card', description: 'Card whose popup shows derived stat rows with value boxes and an expandable per-stat breakdown.', components: ['Card', 'StatRow', 'ValueBox', 'DefinitionList', 'RoundToggle', 'Help'] },
  { id: 'total-cost-card', name: 'Total cost card', kind: 'card', description: 'Card with the level cost as itemised bill tables for the current and cheapest setups, a difference table, an Apply/Undo change list and a note on what changes.', components: ['Card', 'TintedPanel', 'BillTable', 'ComparisonTable', 'Amount', 'Button', 'Message', 'RoundToggle', 'AnswerBox', 'CalcTable'] },
  { id: 'card-dialog', name: 'Card popup', kind: 'dialog', description: 'Modal opened from a card with a title, optional tag, close button, a Based-on summary, the card body and an optional Save.', components: ['Dialog', 'TitleTag', 'Help', 'InfoRow', 'IconButton', 'SaveButton', 'Message'] },
  { id: 'report-dialog', name: 'Report dialog', kind: 'dialog', description: 'Modal opened from a clipboard icon inside a card popup, holding the advice question with a coloured verdict chip and step-by-step calculations.', components: ['Dialog', 'IconButton', 'QuestionBlock', 'Chip', 'AnswerBox', 'CalcTable', 'Message'] },
  { id: 'why-dialog', name: 'Bill line explanation', kind: 'dialog', description: 'Small modal opened from the question-mark toggle on a bill row, showing a worked multiplication/answer breakdown.', components: ['Dialog', 'RoundToggle', 'AnswerBox', 'CalcTable'] },
]

// ETF tracker: researched read-only from etf_tracker/dashboard.py. The column chart is mirrored (ColumnChart, #20); the
// other chart views list only the non-chart components they use, as their bar and line charts are not mirrored yet.
const ETF_VIEWS: readonly View[] = [
  { id: 'dashboard', name: 'Dashboard', kind: 'screen', description: 'One page: a header, then a column of cards (some in a two-up grid on a wide screen), a footer note, and a tooltip layer behind every explanation mark. A switch in the header toggles between a primary and a secondary set of cards.', components: ['PageHeader', 'Card', 'FooterNote', 'Tooltip'] },
  { id: 'page-header', name: 'Page header', kind: 'menu', description: 'The page title in a serif h1, a muted as-of date, and a joined two-option switch that changes which set of cards shows.', components: ['PageHeader', 'SegmentedChoice'] },
  { id: 'ledger-warning', name: 'Ledger warning', kind: 'card', description: 'A warm notice above the cards when the data does not add up: a bold lead line with a warning mark, then a list of the discrepancies.', components: ['Banner'] },
  { id: 'summary', name: 'Summary', kind: 'card', description: 'The key figures as a grid of tiles, then the total value as one large figure beside the result as a coloured up or down change; every label has an explanation mark.', components: ['Card', 'StatTile', 'HeroValue', 'Delta', 'RoundToggle'] },
  { id: 'monthly-result', name: 'Monthly result', kind: 'card', description: 'A column chart of the result per month around a zero line, with quarter guides, a gain/loss legend and an explanation mark beside the title.', components: ['Card', 'Legend', 'ColumnChart', 'Tooltip', 'RoundToggle'] },
  { id: 'positions', name: 'Positions', kind: 'card', description: 'A sortable table of everything held, one row per holding with its code as a muted line under the name, signed figures in colour and a bold total row; it scrolls sideways on a phone.', components: ['Card', 'DataTable', 'Tooltip', 'RoundToggle'] },
  { id: 'insights', name: 'Insights', kind: 'card', description: 'Observations grouped by kind, each group with a status badge and a count in its heading and its items in a responsive grid.', components: ['Card', 'Badge', 'RoundToggle'] },
  { id: 'danger-zone', name: 'Danger zone', kind: 'card', description: 'A framed, high-visibility zone for the one part of the page that gives concrete advice: a warning title, an acknowledgement, an action tag per advice, a read-more per advice and a collapsible list of sources. Here it is the generic danger alert; the hazard stripes and the advice layout stay in the app.', components: ['Alert', 'TitleTag', 'ReadMoreToggle', 'Disclosure', 'RoundToggle'] },
  { id: 'allocation', name: 'Allocation', kind: 'card', description: 'A horizontal bar chart of value per holding with a legend in three series colours, each with an explanation mark. The chart itself is not mirrored yet.', components: ['Card', 'Legend', 'Tooltip', 'RoundToggle'] },
  { id: 'unrealised', name: 'Unrealised result', kind: 'card', description: 'A horizontal bar chart of gain and loss per holding with a gain/loss legend. The chart itself is not mirrored yet.', components: ['Card', 'Legend', 'Tooltip', 'RoundToggle'] },
  { id: 'breakdown', name: 'Result breakdown', kind: 'card', description: 'Where the result comes from: a list of sources with a signed, coloured figure each and an explanation mark after the label, and a bold total.', components: ['Card', 'DefinitionList', 'Tooltip', 'RoundToggle'] },
  { id: 'closed-positions', name: 'Closed positions', kind: 'card', description: 'A table of what was fully sold, with the realised result in colour; an empty state is one muted row.', components: ['Card', 'DataTable', 'RoundToggle'] },
  { id: 'timeline', name: 'Value over time', kind: 'card', description: 'A line chart of value, deposits and result at each month end with a legend of three line series. The chart itself is not mirrored yet.', components: ['Card', 'Legend', 'Tooltip', 'RoundToggle'] },
  { id: 'quarters', name: 'Quarterly deposits', kind: 'card', description: 'A grid of small cards, one per quarter: the amount, a progress bar towards the target, a status badge with its label and a muted note; the quarter still open has a warning border.', components: ['Card', 'MiniCard', 'Meter', 'Badge', 'RoundToggle'] },
  { id: 'market-report', name: 'Market report', kind: 'card', description: 'A long written report in a grid of tiles that is cut off with a fade until a full-width read-more button opens it, with a collapsible list of sources and an outdated note.', components: ['Card', 'ReadMoreToggle', 'Disclosure', 'RoundToggle'] },
  { id: 'footer-note', name: 'Footer note', kind: 'card', description: 'A small muted note at the foot of the page saying what the explanations and the figures are and are not.', components: ['FooterNote'] },
  { id: 'explain-tooltip', name: 'Explanation tooltip', kind: 'tooltip', description: 'A bold title and a few short paragraphs in a floating panel, opened by hover or keyboard focus on an explanation mark (or a sortable column header), pinned by a click, closed by Escape or a click elsewhere.', components: ['Tooltip', 'RoundToggle'] },
]

export const APPS: readonly App[] = [
  {
    id: 'mesowise',
    name: 'Mesowise',
    repo: 'DKJ-Solutions/dkj-maplestory-classic-mesowise',
    description:
      'A mobile-first web app that works out the cheapest way to level up a game character, and shows the cost of each level as an itemised bill you can compare against your current setup.',
    url: 'https://dkj-solutions.github.io/dkj-maplestory-classic-mesowise/',
    stack: 'Preact 11 + TypeScript + Vite 8; installable PWA; GitHub Pages',
    views: MESOWISE_VIEWS,
  },
  {
    id: 'etf-tracker',
    name: 'ETF tracker',
    repo: 'DKJ-Solutions/dkj-etf-tracker',
    description:
      'A personal investment dashboard: one generated page with the portfolio value, the result against deposits, the holdings, charts over time, quarterly deposit goals and a written market report, every figure with a short explanation.',
    stack: 'Python-generated static HTML dashboard (inline CSS + JS)',
    views: ETF_VIEWS,
  },
]

/** One place a component is used: an app and one of its views. */
export type Usage = { app: App; view: View }

/** The reverse index: for a component, every app view that uses it. */
export function usagesOf(id: ComponentId): Usage[] {
  return APPS.flatMap((app) => app.views.filter((v) => v.components.includes(id)).map((view) => ({ app, view })))
}
