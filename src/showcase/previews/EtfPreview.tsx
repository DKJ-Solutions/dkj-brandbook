import { useState } from 'react'
import { RoundToggle, SegmentedChoice } from '../../components/Button'
import { Card, CardBody, CardHead } from '../../components/Card'
import { ColumnChart, type ColumnDatum } from '../../components/Chart'
import { FooterNote } from '../../components/Content'
import { Banner } from '../../components/Feedback'
import { Badge, BadgeRow, Delta, HeroRow, HeroValue, Legend, LegendItem, Meter, MiniCard, MiniCards, StatTile, StatTiles } from '../../components/Metrics'
import { PageHeader } from '../../components/Navigation'
import { DataTable } from '../../components/Table'

const info = (what: string) => <RoundToggle size="inline" label={`Explain: ${what}`} />
const eur = (v: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0, signDisplay: 'exceptZero' }).format(v)

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
/** Placeholder figures: twelve months from January 2026. */
const MONTHS: ColumnDatum[] = [140, -60, 220, -310, 180, 90, 260, -120, 310, 150, -40, 200].map((value, m) => ({
  key: `2026-${m + 1}`,
  label: `${MONTH_NAMES[m]} 2026`,
  short: m === 0 ? `${MONTH_NAMES[m]} 2026` : MONTH_NAMES[m],
  value,
  guide: m % 3 === 0 ? `Q${m / 3 + 1} 2026` : undefined,
}))

/** A recreation of the ETF tracker's dashboard (src/apps/registry.ts, ETF_VIEWS), with placeholder figures. */
export function EtfPreview() {
  const [view, setView] = useState<'primary' | 'secondary'>('primary')
  return (
    <div className="bb-preview-app bb-preview-app--padded">
      <PageHeader title="Portfolio" asOf="As of 13 October 2026">
        <SegmentedChoice
          label="View"
          layout="joined"
          value={view}
          onChange={setView}
          options={[
            { value: 'primary', label: 'Overview' },
            { value: 'secondary', label: 'Details' },
          ]}
        />
      </PageHeader>
      <div className="bb-preview-column bb-preview-column--wide">
        <Banner tone="warn" lead="The ledger does not match the export">
          -- one figure may differ.
        </Banner>
        <Card variant="data">
          <CardHead title="Summary" subtitle="In euro, at the last closing prices" />
          <CardBody>
            <StatTiles>
              <StatTile label="Deposited" value="€ 12,500" info={info('Deposited')} />
              <StatTile label="Invested" value="€ 12,180" info={info('Invested')} />
              <StatTile label="Cash" value="€ 320" info={info('Cash')} />
              <StatTile label="Dividend" value="+€ 86" tone="positive" info={info('Dividend')} />
            </StatTiles>
            <HeroRow>
              <HeroValue label="Total value" info={info('Total value')}>
                € 13,650
              </HeroValue>
              <HeroValue label="Result against deposits" info={info('Result against deposits')} size="lg">
                <Delta tone="up">+€ 1,150 (+9.2%)</Delta>
              </HeroValue>
            </HeroRow>
          </CardBody>
        </Card>
        <Card variant="data">
          <CardHead title="Monthly result" info={info('Monthly result')} />
          <CardBody>
            <Legend>
              <LegendItem color="gain">Gain</LegendItem>
              <LegendItem color="loss">Loss</LegendItem>
            </Legend>
            <ColumnChart label="Result per month" data={MONTHS} format={eur} periodHeading="Month" />
          </CardBody>
        </Card>
        <Card variant="data">
          <CardHead title="Positions" info={info('Positions')} />
          <CardBody>
            <DataTable
              label="Positions"
              columns={[
                { key: 'name', label: 'Product' },
                { key: 'value', label: 'Value' },
                { key: 'result', label: 'Result' },
              ]}
              rows={[
                { id: 'a', sub: 'XX0000000001', cells: { name: 'World fund', value: '€ 8,240', result: '+€ 910' }, tones: { result: 'positive' } },
                { id: 'b', sub: 'XX0000000002', cells: { name: 'Emerging markets fund', value: '€ 3,120', result: '+€ 260' }, tones: { result: 'positive' } },
                { id: 'c', sub: 'XX0000000003', cells: { name: 'Small caps fund', value: '€ 1,970', result: '−€ 20' }, tones: { result: 'negative' } },
              ]}
              total={{ label: 'Total', cells: { value: '€ 13,330', result: '+€ 1,150' }, tones: { result: 'positive' } }}
            />
          </CardBody>
        </Card>
        <Card variant="data">
          <CardHead title="Quarterly deposits" subtitle="Target: € 1,500 per quarter" info={info('Quarterly deposits')} />
          <MiniCards>
            <MiniCard label="Q1 2026" value="€ 1,500">
              <Meter value={100} tone="good" label="100% of the target" />
              <BadgeRow badge={<Badge tone="good" size="sm">✓</Badge>}>Met</BadgeRow>
            </MiniCard>
            <MiniCard label="Q2 2026" value="€ 1,500">
              <Meter value={100} tone="good" label="100% of the target" />
              <BadgeRow badge={<Badge tone="good" size="sm">✓</Badge>}>Met</BadgeRow>
            </MiniCard>
            <MiniCard label="Q3 2026" value="€ 900">
              <Meter value={60} tone="bad" label="60% of the target" />
              <BadgeRow badge={<Badge tone="bad" size="sm">✗</Badge>}>Missed</BadgeRow>
            </MiniCard>
            <MiniCard label="Q4 2026" value="€ 300" highlight>
              <Meter value={20} tone="warn" label="20% of the target" />
              <BadgeRow badge={<Badge tone="warn" size="sm">◷</Badge>}>Still open</BadgeRow>
            </MiniCard>
          </MiniCards>
        </Card>
        <FooterNote>A recreated preview with placeholder figures. The explanations are general information to help read the figures.</FooterNote>
      </div>
    </div>
  )
}
