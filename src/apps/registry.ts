import type { ComponentId } from '../components/sources'

/**
 * The apps overview: every DKJ-Solutions app whose design the brand book follows, and the views it is made of.
 * Adding the next app is one new entry in APPS below (plus its views); the Apps section and the "Used in" footer
 * under every component are derived from this file. `components` is typed against ComponentId, so a typo fails tsc.
 */
export type ViewKind = 'screen' | 'card' | 'dialog' | 'drawer' | 'menu'

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
]

/** One place a component is used: an app and one of its views. */
export type Usage = { app: App; view: View }

/** The reverse index: for a component, every app view that uses it. */
export function usagesOf(id: ComponentId): Usage[] {
  return APPS.flatMap((app) => app.views.filter((v) => v.components.includes(id)).map((view) => ({ app, view })))
}
