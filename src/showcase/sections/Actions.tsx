import { useState } from 'react'
import { Button, CardActions, IconButton, RoundToggle, SaveButton, SegmentedChoice } from '../../components/Button'
import { Demo, Section } from '../Showcase'

const OPTIONS = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
  { value: 'd', label: 'Option D' },
] as const

export function Actions() {
  const [choice, setChoice] = useState<'a' | 'b' | 'c' | 'd'>('b')
  const [listChoice, setListChoice] = useState<'a' | 'b' | 'c' | 'd'>('a')
  const [pressed, setPressed] = useState(false)
  const [help, setHelp] = useState(false)
  return (
    <>
      <Section id="Button" title="Button" intro="One text button with four variants and a compact size. The compact size keeps a 44px tap area around its 36px face.">
        <Demo label="Variants">
          <div className="bb-row">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="positive">Positive</Button>
          </div>
          <Button variant="primary">Primary (full width)</Button>
        </Demo>
        <Demo label="States -- default">
          <div className="bb-row">
            <Button>Rest</Button>
            <Button data-demo-state="focus">Focus</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Demo>
        <Demo label="Compact (uppercase)">
          <div className="bb-row">
            <Button variant="outline" size="compact">Back</Button>
            <Button variant="positive" size="compact">Next</Button>
            <Button variant="positive" size="compact" disabled>Next</Button>
          </div>
        </Demo>
        <Demo label="Primary -- states">
          <Button variant="primary" data-demo-state="focus">Focus</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </Demo>
      </Section>

      <Section id="SaveButton" title="SaveButton" intro="The most prominent button in a box. It only becomes active once there is something to save.">
        <Demo label="Enabled / focus / disabled">
          <div className="bb-row">
            <SaveButton />
            <SaveButton data-demo-state="focus" />
            <SaveButton disabled />
          </div>
        </Demo>
      </Section>

      <Section id="SegmentedChoice" title="SegmentedChoice" intro="A single choice. As a row it holds four options on a 360px phone; in a drawer it becomes a list.">
        <Demo label="Row">
          <SegmentedChoice label="Choose an option" options={OPTIONS} value={choice} onChange={setChoice} />
        </Demo>
        <Demo label="Row -- nothing chosen yet">
          <SegmentedChoice label="Choose an option" options={OPTIONS} value={undefined} onChange={setChoice} />
        </Demo>
        <Demo label="List (in a drawer)">
          <SegmentedChoice label="Choose an option" layout="list" options={OPTIONS} value={listChoice} onChange={setListChoice} />
        </Demo>
      </Section>

      <Section id="IconButton" title="IconButton" intro="Filled for a card's actions, outline for the pencil beside a value (never taller than --control-h), ghost for the menu and close.">
        <Demo label="Filled -- card actions">
          <CardActions>
            <IconButton variant="filled" icon="eye" label="View A">View A</IconButton>
            <IconButton variant="filled" icon="eye" label="View B">View B</IconButton>
          </CardActions>
          <CardActions>
            <IconButton variant="filled" icon="eye" label="Icon only" />
            <IconButton variant="filled" icon="eye" label="Focus" data-demo-state="focus" />
            <IconButton variant="filled" icon="eye" label="Disabled" disabled />
          </CardActions>
        </Demo>
        <Demo label="Outline -- rest / focus / pressed (open)">
          <div className="bb-row">
            <IconButton icon="pencil" label="Edit" />
            <IconButton icon="pencil" label="Edit" data-demo-state="focus" />
            <IconButton icon="pencil" label="Edit" pressed={pressed} onClick={() => setPressed(!pressed)} />
            <span style={{ fontSize: 'var(--fs-2xs)', color: 'var(--color-text-muted)' }}>tap the third to toggle</span>
          </div>
        </Demo>
        <Demo label="Ghost">
          <div className="bb-row">
            <IconButton variant="ghost" icon="menu" label="Menu" />
            <IconButton variant="ghost" icon="close" label="Close" />
          </div>
        </Demo>
      </Section>

      <Section id="RoundToggle" title="RoundToggle" intro="A round “?” or “i”: a small glyph with a 44px tap area that does not make its row taller. The badge size sits after a number in a table.">
        <Demo label="Help -- closed / open">
          <div className="bb-row">
            <RoundToggle />
            <RoundToggle expanded />
            <RoundToggle data-demo-state="focus" />
          </div>
        </Demo>
        <Demo label="Info -- closed / open">
          <div className="bb-row">
            <RoundToggle kind="info" />
            <RoundToggle kind="info" expanded />
          </div>
        </Demo>
        <Demo label="Badge -- after a number">
          <div className="bb-row" style={{ fontVariantNumeric: 'tabular-nums' }}>
            <span>12 pcs</span>
            <RoundToggle size="badge" expanded={help} onClick={() => setHelp(!help)} />
          </div>
        </Demo>
      </Section>
    </>
  )
}
