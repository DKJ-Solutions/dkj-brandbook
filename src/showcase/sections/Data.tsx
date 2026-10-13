import { IconButton, RoundToggle } from '../../components/Button'
import { AnswerBox, BillTable, CalcSection, CalcTable, ComparisonTable, DefinitionList } from '../../components/Table'
import { Demo, Section } from '../Showcase'

export function Data() {
  return (
    <>
      <Section id="DefinitionList" title="DefinitionList" intro="Label left, a bold tabular value right, a rule between; a detail line under a label; a bold total. The facts variant mutes the labels.">
        <Demo label="Breakdown with total">
          <DefinitionList
            items={[
              { term: 'Part one', detail: '12 × 3', value: '36' },
              { term: 'Part two', value: '14' },
              { term: 'Part three', detail: 'base + bonus', value: '50' },
            ]}
            total={{ term: 'Total', value: '100' }}
          />
        </Demo>
        <Demo label="Facts">
          <DefinitionList
            variant="facts"
            items={[
              { term: 'Label', value: 'Value' },
              { term: 'Another label', value: '1,234' },
              { term: 'Third', value: 'Yes' },
            ]}
          />
        </Demo>
      </Section>

      <Section id="BillTable" title="BillTable" intro="One table per invoice. Long names truncate on a 360px phone; empty slots show a muted dash; what you buy has its price in the accent. Groups close with a subtotal between stronger rules; the total sits under a rule in the accent.">
        <Demo label="Simple, with info / help / edit actions" wide>
          <BillTable
            columns={{ slot: 'Slot', item: 'Item', price: 'Price' }}
            groups={[
              {
                lines: [
                  { slot: 'Slot A', name: 'Item alpha with a rather long name', price: '1,200', tone: 'buy', action: <RoundToggle /> },
                  { slot: 'Slot B', name: 'Item bravo', price: '0', action: <RoundToggle kind="info" /> },
                  { slot: 'Slot C', name: null, price: null, tone: 'empty', action: <IconButton icon="pencil" label="Edit slot C" /> },
                ],
              },
            ]}
            total={{ label: 'Total', value: '1,200' }}
          />
        </Demo>
        <Demo label="With quantity, grouped with subtotals" wide>
          <BillTable
            withQty
            columns={{ slot: 'Slot', item: 'Item', qty: 'Qty', price: 'Price' }}
            groups={[
              {
                name: 'Group one',
                subtotal: '2,450',
                lines: [
                  { slot: 'Line 1', name: 'Item charlie', qty: '120', price: '1,800', tone: 'buy' },
                  { slot: 'Line 2', name: 'Item delta', qty: '30', price: '650', tone: 'buy' },
                ],
              },
              {
                name: 'Group two',
                subtotal: '300',
                lines: [{ slot: 'Line 3', name: 'Item echo', qty: '5', price: '300', tone: 'buy' }],
              },
            ]}
            total={{ label: 'Total', value: '2,750' }}
          />
        </Demo>
      </Section>

      <Section id="ComparisonTable" title="ComparisonTable" intro="Several numeric columns with small right-aligned heads; the difference column is red with a minus or green with a plus.">
        <Demo label="Comparison" wide>
          <ComparisonTable
            columns={['Option A', 'Option B', 'Difference']}
            rows={[
              { label: 'Category one', values: ['1,500', '1,200', '−300'], tone: 'negative' },
              { label: 'Category two', values: ['800', '950', '+150'], tone: 'positive' },
              { label: 'Category three', values: ['400', '400', '—'], tone: 'none' },
            ]}
            total={{ label: 'Total', values: ['2,700', '2,550', '−150'], tone: 'negative' }}
          />
        </Demo>
      </Section>

      <Section id="CalcTable" title="CalcTable" intro="A calculation written downwards, digits right-aligned so they line up; boxes group what belongs together and share the outer columns; the result is large and in the accent.">
        <Demo label="Plain">
          <CalcTable
            items={[
              { kind: 'row', what: 'Factor one', num: '1,234' },
              { kind: 'row', what: 'Factor two', sub: '12 + 3', op: '×', num: '15' },
              { kind: 'row', what: 'Divider', op: '÷', num: '100' },
            ]}
            result="185.1"
          />
        </Demo>
        <Demo label="Boxed">
          <CalcTable
            items={[
              {
                kind: 'box',
                items: [
                  { kind: 'row', what: 'Factor one', num: '250' },
                  { kind: 'row', what: 'Factor two', op: '+', num: '50' },
                ],
              },
              { kind: 'row', what: 'Multiplier', op: '×', num: '1.5' },
            ]}
            result="450"
          />
        </Demo>
      </Section>

      <Section id="AnswerBox" title="AnswerBox" intro="The answer of a calculation block, in an accent-tinted rounded box; blocks carry a bold question as their heading.">
        <Demo label="Sections with answers">
          <CalcSection question="How many are needed?">
            <DefinitionList items={[{ term: 'Per step', value: '12' }, { term: 'Steps', value: '10' }]} />
            <AnswerBox label="Needed" value="120" />
          </CalcSection>
          <CalcSection question="What does it cost?">
            <AnswerBox label="Cost" value="1,800" />
          </CalcSection>
        </Demo>
      </Section>
    </>
  )
}
