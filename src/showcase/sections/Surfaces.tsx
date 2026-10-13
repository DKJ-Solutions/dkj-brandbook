import { CardActions, IconButton } from '../../components/Button'
import { Card, CardBody, CardHead, TintedPanel } from '../../components/Card'
import { Amount, GroupHeading, QuestionBlock } from '../../components/Content'
import { Banner, Chip, Disclosure, Help, Message, TitleTag } from '../../components/Feedback'
import { Icon } from '../../components/Icon'
import { StatRow, RowList, ValueBox } from '../../components/Row'
import { Demo, Section } from '../Showcase'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'

function Actions2() {
  return (
    <div style={{ padding: '0 var(--space-4) var(--space-4)' }}>
      <CardActions>
        <IconButton variant="filled" icon="eye" label="View A">View A</IconButton>
        <IconButton variant="filled" icon="eye" label="View B">View B</IconButton>
      </CardActions>
    </div>
  )
}

export function Surfaces() {
  return (
    <>
      <Section id="Card" title="Card" intro="The main surface. A card head is a centred title with an accent icon, and below it the card's actions across the full width. The body sits under a rule.">
        <Demo label="Default" surface={false}>
          <Card>
            <p style={{ margin: 0 }}>{LOREM}</p>
          </Card>
        </Demo>
        <Demo label="Flush -- head, actions" surface={false}>
          <Card flush>
            <CardHead title="Card title" icon="shield" />
            <Actions2 />
          </Card>
        </Demo>
        <Demo label="Flush -- head and body" surface={false}>
          <Card flush>
            <CardHead title="Card title" icon="chart" />
            <CardBody>
              <RowList>
                <StatRow name="Label one">
                  <ValueBox value="1,234" />
                </StatRow>
                <StatRow name="Label two">
                  <ValueBox value="56" />
                </StatRow>
              </RowList>
            </CardBody>
          </Card>
        </Demo>
        <Demo label="Open (its dialog is open)" surface={false}>
          <Card flush open>
            <CardHead title="Card title" icon="book" />
            <Actions2 />
          </Card>
        </Demo>
        <Demo label="Invalid" surface={false}>
          <Card flush invalid>
            <CardHead title="Card title" icon="target" />
            <p className="dkj-msg dkj-msg--error" style={{ padding: '0 var(--space-4) var(--space-3)' }}>
              This value is out of range.
            </p>
          </Card>
        </Demo>
      </Section>

      <Section id="TintedPanel" title="TintedPanel" intro="Parts of one card, each in its own tint mixed from a colour token, so they follow the theme and the mode on their own. As a button it becomes a large tile.">
        <Demo label="Panels">
          <TintedPanel>
            <strong>Neutral</strong>
            <p className="dkj-msg">{LOREM}</p>
          </TintedPanel>
          <TintedPanel tone="accent">
            <strong>Accent</strong>
            <p className="dkj-msg">{LOREM}</p>
          </TintedPanel>
          <TintedPanel tone="positive">
            <strong>Positive</strong>
            <p className="dkj-msg">{LOREM}</p>
          </TintedPanel>
        </Demo>
        <Demo label="Tiles (buttons)">
          <TintedPanel as="button" tone="accent">
            <span className="dkj-panel-label">Label A</span>
            <span className="dkj-panel-value">1,234</span>
          </TintedPanel>
          <TintedPanel as="button">
            <span className="dkj-panel-label">Label B</span>
            <span className="dkj-panel-value dkj-tone-negative">−5,678</span>
          </TintedPanel>
        </Demo>
      </Section>

      <Section id="Banner" title="Banner" intro="A soft accent-tinted callout; strong words in it turn accent.">
        <Demo label="Banner" surface={false}>
          <Banner>
            What does it take to reach <strong>step 12</strong>?
          </Banner>
        </Demo>
      </Section>

      <Section id="Message" title="Message" intro="Supporting text in five tones. Debug is for developers only, outlined so it never reads as help.">
        <Demo label="Tones">
          <Message>Hint -- muted help under a field.</Message>
          <Message tone="warn">Warning -- needs attention.</Message>
          <Message tone="error">Error -- the value is not valid.</Message>
          <Message tone="debug">Debug -- developer info: id=42, state=idle</Message>
          <Message tone="note">Note -- a hint with more room above it.</Message>
        </Demo>
      </Section>

      <Section id="Chip" title="Chip" intro="A verdict pill.">
        <Demo label="Tones">
          <div className="bb-row">
            <Chip tone="yes">Yes</Chip>
            <Chip tone="no">No</Chip>
            <Chip tone="todo">To do</Chip>
            <Chip tone="unknown">Unknown</Chip>
          </div>
        </Demo>
      </Section>

      <Section id="TitleTag" title="TitleTag" intro="A small uppercase pill on its own line above a title.">
        <Demo label="Accent / info">
          <div className="bb-row">
            <TitleTag>Expected</TitleTag>
            <TitleTag tone="info">Edit</TitleTag>
          </div>
        </Demo>
      </Section>

      <Section id="Help" title="Help" intro="An explanation that stays closed until asked for; the round “?” sits on the right.">
        <Demo label="Closed">
          <Help>{LOREM}</Help>
        </Demo>
        <Demo label="Open">
          <Help defaultOpen>{LOREM}</Help>
        </Demo>
      </Section>

      <Section id="Disclosure" title="Disclosure" intro="A native details/summary.">
        <Demo label="Closed / open">
          <Disclosure summary="Help">
            <Message>{LOREM}</Message>
          </Disclosure>
          <Disclosure summary="Help" defaultOpen>
            <Message>{LOREM}</Message>
          </Disclosure>
        </Demo>
      </Section>

      <Section id="GroupHeading" title="GroupHeading" intro="An uppercase muted section label, with an optional counter that turns danger when over its limit.">
        <Demo label="Plain / with counter / over">
          <GroupHeading>Group label</GroupHeading>
          <GroupHeading count="12 / 20">Group label</GroupHeading>
          <GroupHeading count="23 / 20" over>
            Group label
          </GroupHeading>
        </Demo>
      </Section>

      <Section id="QuestionBlock" title="QuestionBlock" intro="An h3 with its verdict chip on the same line (the chip shrinks or drops below a long heading), then the verdict and supporting text.">
        <Demo label="Yes">
          <QuestionBlock title="Question title" chip="yes" chipText="Yes" verdict="Short verdict line">
            <Message>{LOREM}</Message>
          </QuestionBlock>
        </Demo>
        <Demo label="To do -- long heading">
          <QuestionBlock title="A considerably longer question title that wraps" chip="todo" chipText="Not decided yet">
            <Message>{LOREM}</Message>
          </QuestionBlock>
        </Demo>
      </Section>

      <Section id="Amount" title="Amount" intro="A tabular figure with a small icon at the height of the digits.">
        <Demo label="Amount">
          <div className="bb-row">
            <Amount value="1,234" icon={<Icon name="coin" />} />
            <Amount value="98,765" icon={<Icon name="coin" />} />
          </div>
        </Demo>
      </Section>
    </>
  )
}
