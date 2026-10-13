import { useState } from 'react'
import { RoundToggle } from '../../components/Button'
import { Checkbox, FixedField, ResetButton, SearchCombobox, SelectField, Stepper, TextField } from '../../components/Field'
import { FormulaHead, FormulaRow, RowList, StatRow, ValueBox } from '../../components/Row'
import { Demo, Section } from '../Showcase'

const ITEMS = [
  { value: 'Item alpha', meta: 'lv 10 / 12' },
  { value: 'Item bravo', meta: 'lv 15 / 18' },
  { value: 'Item charlie', meta: 'lv 20 / 25' },
  { value: 'Item delta', meta: 'lv 25 / 31' },
]

export function Forms() {
  const [n, setN] = useState(12)
  const [lg, setLg] = useState(240)
  const [picked, setPicked] = useState<string | null>('Item bravo')
  const [empty, setEmpty] = useState<string | null>(null)
  const [check, setCheck] = useState(true)
  const [flash, setFlash] = useState(0)
  return (
    <>
      <Section id="Field" title="Field" intro="A muted label above a full-width control on the page fill. Inputs are 16px so iOS does not zoom on focus.">
        <Demo label="Text input -- rest / focus / disabled">
          <TextField label="Label" placeholder="Placeholder" />
          <TextField label="Label" defaultValue="Value 1,234" data-demo-state="focus" />
          <TextField label="Label" defaultValue="Value 1,234" disabled />
        </Demo>
        <Demo label="Select / fixed value">
          <SelectField label="Label" options={['Option one', 'Option two', 'Option three with a long name that truncates']} />
          <FixedField label="Label">Fixed value (read-only)</FixedField>
        </Demo>
      </Section>

      <Section id="Checkbox" title="Checkbox" intro="A native checkbox in the accent, with a 44px tap area and an optional description.">
        <Demo label="Checked / unchecked">
          <Checkbox label="Option label" description="A short muted description under the label." checked={check} onChange={(e) => setCheck(e.target.checked)} />
          <Checkbox label="Option label" />
        </Demo>
      </Section>

      <Section id="Stepper" title="Stepper" intro="Minus, number, plus. 44px on a card, 52px in a dialog. A reset button can sit next to it. Press a button to see its active state.">
        <Demo label="Medium (44px) + reset">
          <div className="bb-row">
            <Stepper label="Amount" value={n} onChange={setN} />
            <ResetButton onClick={() => setN(12)} />
          </div>
        </Demo>
        <Demo label="Large (52px), at the minimum">
          <Stepper label="Amount" size="lg" value={lg} min={240} onChange={setLg} />
        </Demo>
      </Section>

      <Section
        id="SearchCombobox"
        title="SearchCombobox"
        intro="The chosen value is a button over an invisible search field. Tap it to search; the list opens across the full width. Keyboard: arrows, Enter, Escape. Type something new to see the dashed “use your own” option."
      >
        <Demo label="With a value">
          <SearchCombobox label="Search an item" options={ITEMS} value={picked} onChange={setPicked} ownLabel={(q) => `Use “${q}” as your own`} moreText="2 more -- keep typing" />
        </Demo>
        <Demo label="Empty">
          <SearchCombobox label="Search an item" options={ITEMS} value={empty} onChange={setEmpty} ownLabel={(q) => `Use “${q}” as your own`} />
        </Demo>
      </Section>

      <Section id="ValueBox" title="ValueBox" intro="A read-only figure. It does not look like the pencil next to it: no border, no fill. Changed values get an accent border with the expected value struck through.">
        <Demo label="States">
          <div className="bb-row">
            <ValueBox value="1,234" />
            <ValueBox value="1,240" changed expected="1,234" />
            <ValueBox value="56" unit="UNIT" />
            <ValueBox value="−12" tone="negative" />
            <ValueBox value="+8" tone="positive" />
          </div>
        </Demo>
      </Section>

      <Section id="StatRow" title="StatRow" intro="Name, value and pencil on one row. In a list with a “?” column, every row keeps that column free so the values stay aligned.">
        <Demo label="Rows">
          <RowList>
            <StatRow name="Label one">
              <ValueBox value="1,234" />
            </StatRow>
            <StatRow name="Label two" sub={<span className="dkj-tone-negative">−5 per use</span>}>
              <ValueBox value="7" />
            </StatRow>
            <StatRow name="Label three (read-only)" readOnly>
              <ValueBox value="42" />
            </StatRow>
          </RowList>
        </Demo>
        <Demo label="With a help column">
          <RowList withHelp>
            <StatRow name="Label one">
              <ValueBox value="1,234" />
            </StatRow>
            <StatRow name="Label two" help={<RoundToggle />}>
              <ValueBox value="88" />
            </StatRow>
            <StatRow name="Label three">
              <ValueBox value="1,240" changed expected="1,234" />
            </StatRow>
          </RowList>
        </Demo>
      </Section>

      <Section id="FormulaRow" title="FormulaRow" intro="Base + extra = total in fixed narrow columns; only the total is bold and larger. The flash marks a value the app just changed.">
        <Demo label="Rows with heads">
          <RowList>
            <FormulaHead a="Base" b="Extra" total="Total" />
            <FormulaRow name="Label A" a="12" b="3" total="15" />
            <FormulaRow name="Label B" a="4" b="0" total="4" />
            <FormulaRow name="Label C" a="250" b="25" total="275" />
          </RowList>
        </Demo>
        <Demo label="Flash (app changed the value)">
          <div className="bb-row">
            <span className="dkj-flash" style={{ display: 'inline-block', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-md)' }} key={flash}>
              25
            </span>
            <ResetButton onClick={() => setFlash(flash + 1)}>Replay</ResetButton>
          </div>
        </Demo>
      </Section>
    </>
  )
}
