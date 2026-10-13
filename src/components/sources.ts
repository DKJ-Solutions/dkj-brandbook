/**
 * Where each brand-book component comes from: the source repo, the component(s) in that repo, and the CSS it was
 * lifted from. This register is how we later see which repo delivers which component; the showcase prints it under
 * every component. Only the UI/UX design was taken over -- no content, data or logic.
 */
export type SourceRef = {
  repo: string
  /** Function components in the source file that render this pattern. */
  components: readonly string[]
  /** Class names in the source stylesheet. */
  selectors: readonly string[]
  file: string
  css: string
}

const MESOWISE = 'DKJ-Solutions/dkj-maplestory-classic-mesowise'
const m = (components: string[], selectors: string[]): SourceRef[] => [
  { repo: MESOWISE, file: 'src/app.tsx', css: 'src/style.css', components, selectors },
]

export const SOURCES = {
  Icon: m(['CardIcon', 'EyeIcon', 'PencilPath', 'INFO_ICON', 'QUESTION_ICON', 'PENCIL_ICON'], ['.card-icon']),
  Button: m(['App (level row)', 'CheapestDetails', 'SkillQuestion'], ['.btn', '.btn.primary', '.btn.levelup', '.btn.level-down', '.level-row .btn', '.btn.auto-assign.ready']),
  SaveButton: m(['ChoiceSave', 'StatEditor'], ['.equip-save', '.equip-save:disabled']),
  SegmentedChoice: m(['JobChoices', 'GenderChoices'], ['.job-choices', '.job-choice', '.menu-drawer .job-choice']),
  IconButton: m(['ViewButtons', 'StatLine', 'JobCard', 'TopBar'], ['.card-action', '.equip-edit', '.job-edit', '.topbar-menu']),
  RoundToggle: m(['HelpToggle', 'PopupButton', 'InvoiceTable'], ['.help-toggle', '.info-toggle', '.invoice-why']),
  Card: m(['CardHead', 'ViewButtons', 'EquipmentCard', 'StatsCard'], ['.card', '.card:has([aria-expanded])', '.spot-head', '.spot-body', '.card-actions', '.*.invalid']),
  TintedPanel: m(['LevelCostButtons', 'TotalCostCard'], ['.total-cost-part', '.level-cost-btn', '.level-cost-label', '.level-cost-total']),
  Banner: m(['App (app question)'], ['.app-question']),
  Message: m(['Warnings', 'NotComputed', 'NotComputedDebug'], ['.hint', '.note', '.warn', '.error', '.debug']),
  Chip: m(['Question'], ['.chip', '.chip.yes', '.chip.no', '.chip.todo', '.chip.unknown']),
  TitleTag: m(['StatDialog (tag)'], ['.title-tag', '.worn-dialog .title-tag']),
  Help: m(['Help', 'HelpToggle'], ['.help', '.help-toggle']),
  Disclosure: m(['TopBar (menu help)'], ['.menu-help']),
  GroupHeading: m(['SkillGroups', 'PotionsCard', 'PoolCount'], ['.skill-group h3', '.potion-group h3', '.skill-sp.over']),
  QuestionBlock: m(['Question', 'SkillQuestion', 'MobQuestion', 'PotionQuestion'], ['.question-head', '.chip', '.verdict']),
  Amount: m(['MesoAmount'], ['.meso-amount', '.meso-icon']),
  Field: m(['PotionsCard', 'HuntedMobCard'], ['.field', '.field input', '.field select', '.field-fixed']),
  Checkbox: m(['EquipmentCard (switch)'], ['.equip-head .switch']),
  Stepper: m(['StatEditor', 'ApInput'], ['.equip-step', '.stat-dialog .equip-step', '.equip-reset', '.ap-edit']),
  SearchCombobox: m(['EquipSearch'], ['.equip-picked', '.equip-search input', '.equip-list', '.equip-list li.active', '.equip-list li.own', '.equip-list li.more']),
  ValueBox: m(['StatLine'], ['.equip-value', '.equip-value.changed', '.equip-value-num', '.equip-value-head', '.equip-value strong.cost/.gain']),
  StatRow: m(['StatLine', 'SkillLine', 'StatRows'], ['.stat-line', '.skill-row', '.stat-line.with-help', '.skill-mp']),
  FormulaRow: m(['AbilityLine', 'AbilityHead'], ['.stat-line.ability-line', '.ability-head', '.ap-plus', '.ap-total', '.ap-base.flash']),
  Dialog: m(['StatDialog', 'CardPopup', 'PopupButton'], ['.stat-dialog', '.stat-dialog-head', '.stat-dialog-close', '.advised-dialog', '.worn-dialog', '.stat-dialog-actions']),
  Drawer: m(['TopBar', 'StatDialog (drawer)'], ['.stat-dialog.menu-drawer', '.menu-drawer .stat-dialog-head']),
  TopBar: m(['TopBar'], ['.topbar', '.topbar-inner', '.topbar-brand', '.topbar-menu']),
  MenuRow: m(['SettingsList'], ['.menu-list', '.menu-row', '.menu-label', '.menu-value']),
  DownloadButton: m(['TopBar (download)'], ['.menu-download .download-btn']),
  StepHeader: m(['App (level row)'], ['.level-row', '.current-level', '.btn.level-down', '.btn.levelup']),
  InfoRow: m(['BasedOn'], ['.based-on', '.based-on-row', '.based-on-label', '.based-on-value']),
  DefinitionList: m(['BreakdownList', 'BillRow (facts)'], ['.breakdown-list', '.item-facts']),
  BillTable: m(['BillTable', 'BillHead', 'BillRow', 'BillSum', 'BillTotal', 'LevelBill'], ['.advised-bill', '.advised-head', '.advised-row', '.advised-subtotal', '.advised-total']),
  ComparisonTable: m(['DifferenceTable'], ['.invoice', '.invoice-difference']),
  CalcTable: m(['MulCalc', 'WhyTable'], ['.why-mul', '.why-mul-box', '.why-mul-result', '.why-table']),
  AnswerBox: m(['PotionSteps', 'AmmoSteps', 'ShopSteps'], ['.why-answer', '.why-section', '.why-group']),
} as const satisfies Record<string, SourceRef[]>

export type ComponentId = keyof typeof SOURCES
