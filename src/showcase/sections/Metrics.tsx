import { RoundToggle } from '../../components/Button'
import { Card, CardHead } from '../../components/Card'
import { Badge, BadgeRow, Delta, HeroRow, HeroValue, Legend, LegendItem, Meter, MiniCard, MiniCards, StatTile, StatTiles } from '../../components/Metrics'
import { Demo, Section } from '../Showcase'
import { ColumnChart, type ColumnDatum } from '../../components/Chart'

const eur = (v: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0, signDisplay: 'exceptZero' }).format(v)
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const RESULTS = [120, -80, 310, -420, 180, 260, 90, -150, 340, 410, -60, 220, 150, -310, 280, 190, -90, 130]
/** Eighteen months from January 2025, a quarter guide before every January, April, July and October; the last one still running. */
const MONTHS: ColumnDatum[] = RESULTS.map((value, i) => {
  const m = i % 12
  const year = 2025 + Math.floor(i / 12)
  return {
    key: `${year}-${m + 1}`,
    label: `${MONTH_NAMES[m]} ${year}`,
    short: m === 0 || i === 0 ? `${MONTH_NAMES[m]} ${year}` : MONTH_NAMES[m],
    value,
    detail: i === RESULTS.length - 1 ? 'up to 13 Jun' : undefined,
    guide: m % 3 === 0 ? `Q${m / 3 + 1} ${year}` : undefined,
  }
})

const info = (what: string) => <RoundToggle size="inline" label={`Explain: ${what}`} />

export function Metrics() {
  return (
    <>
      <Section id="StatTile" title="StatTile" intro="A bordered tile: a small muted label, with an optional info mark after it, and one figure. The grid fits as many 160px columns as the width allows.">
        <Demo label="Grid of tiles" wide surface={false}>
          <StatTiles>
            <StatTile label="Label one" value="€ 12,400.00" info={info("Label one")} />
            <StatTile label="Label two" value="€ 1,250.00" info={info("Label two")} />
            <StatTile label="A gain" value="+€ 340.50" tone="positive" info={info("A gain")} />
            <StatTile label="A loss" value="−€ 42.10" tone="negative" info={info("A loss")} />
            <StatTile label="Label five" value="€ 18.75" />
            <StatTile label="Label six" value="€ 9.00" />
          </StatTiles>
        </Demo>
      </Section>

      <Section id="HeroValue" title="HeroValue" intro="The one big figure of a page: a muted label over a value in the fluid display size, capped at the house h0 (it shrinks on a phone). The secondary figure beside it is the lg size, usually a Delta.">
        <Demo label="Total and result" wide surface={false}>
          <Card variant="data">
            <HeroRow>
              <HeroValue label="Total value" info={info("Total value")}>
                € 13,650.00
              </HeroValue>
              <HeroValue label="Result against deposits" info={info("Result against deposits")} size="lg">
                <Delta tone="up">+€ 1,150.00 (+9.2%)</Delta>
              </HeroValue>
            </HeroRow>
          </Card>
        </Demo>
      </Section>

      <Section id="Delta" title="Delta" intro="A change in direction: a ▲ or ▼, then the figure with its sign. Green is up and red is down, in the text versions of the colours; the sign is in the text, so the colour is never the only signal.">
        <Demo label="Up / down">
          <div className="bb-row">
            <Delta tone="up">+€ 1,150.00 (+9.2%)</Delta>
            <Delta tone="down">−€ 320.00 (−2.4%)</Delta>
          </div>
        </Demo>
      </Section>

      <Section id="Legend" title="Legend" intro="A row of swatches above a chart. Each series takes one of --cat-1 .. --cat-3 and keeps it in the whole view; gain and loss use --gain and --loss. A line series gets a short line instead of a square.">
        <Demo label="Squares -- series, with info marks">
          <Legend>
            <LegendItem color="cat-1">
              Series one
              {info("Series one")}
            </LegendItem>
            <LegendItem color="cat-2">
              Series two
              {info("Series two")}
            </LegendItem>
            <LegendItem color="cat-3">
              Series three
              {info("Series three")}
            </LegendItem>
          </Legend>
        </Demo>
        <Demo label="Squares -- gain and loss">
          <Legend>
            <LegendItem color="gain">Gain</LegendItem>
            <LegendItem color="loss">Loss</LegendItem>
          </Legend>
        </Demo>
        <Demo label="Lines">
          <Legend>
            <LegendItem color="cat-1" line>
              Total value
            </LegendItem>
            <LegendItem color="cat-2" line>
              Deposits
            </LegendItem>
            <LegendItem color="cat-3" line>
              Result
            </LegendItem>
          </Legend>
        </Demo>
      </Section>

      <Section id="ColumnChart" title="ColumnChart" intro="A result per period around a zero line: gain up in --gain, loss down in --loss, quarter guides, a legend above. It draws at its real width, so its labels stay 12px on a phone and thin out to what fits. Hover, or tab to it and use the arrow keys, for a value; the same figures are always a table away.">
        <Demo label="Result per month, with quarter guides" wide>
          <Legend>
            <LegendItem color="gain">Gain</LegendItem>
            <LegendItem color="loss">Loss</LegendItem>
          </Legend>
          <ColumnChart label="Result per month" data={MONTHS} format={eur} periodHeading="Month" />
        </Demo>
        <Demo label="At phone width (360px)">
          <div style={{ maxWidth: '360px' }}>
            <Legend>
              <LegendItem color="gain">Gain</LegendItem>
              <LegendItem color="loss">Loss</LegendItem>
            </Legend>
            <ColumnChart label="Result per month" data={MONTHS} format={eur} periodHeading="Month" />
          </div>
        </Demo>
      </Section>

      <Section id="MiniCard" title="MiniCard" intro="A small bordered card: a muted label, a figure, then what you put under it. The grid fits as many 104px columns as the width allows; the highlighted one has a warning border.">
        <Demo label="Quarter cards" wide surface={false}>
          <Card variant="data">
            <CardHead title="Quarterly goals" subtitle="Target: € 1,500 per quarter" />
            <MiniCards>
              <MiniCard label="Q1 2026" value="€ 1,500">
                <Meter value={100} tone="good" label="100% of the target" />
                <BadgeRow badge={<Badge tone="good" size="sm">✓</Badge>}>Met</BadgeRow>
                <div className="note">€ 120 more than the target</div>
              </MiniCard>
              <MiniCard label="Q2 2026" value="€ 600">
                <Meter value={40} tone="bad" label="40% of the target" />
                <BadgeRow badge={<Badge tone="bad" size="sm">✗</Badge>}>Missed</BadgeRow>
                <div className="note">€ 900 behind schedule</div>
              </MiniCard>
              <MiniCard label="Q3 2026" value="€ 1,500">
                <Meter value={100} tone="series" label="100% of the target" />
                <BadgeRow badge={<Badge tone="series" size="sm">=</Badge>}>Covered</BadgeRow>
                <div className="note">On schedule</div>
              </MiniCard>
              <MiniCard label="Q4 2026" value="€ 300" highlight>
                <Meter value={20} tone="warn" label="20% of the target" />
                <BadgeRow badge={<Badge tone="warn" size="sm">◷</Badge>}>Still open</BadgeRow>
                <div className="note">€ 1,200 to go · 46 days left</div>
              </MiniCard>
            </MiniCards>
          </Card>
        </Demo>
      </Section>

      <Section id="Meter" title="Meter" intro="A thin progress bar, an image with a text alternative. Its colour is a status token: good, warn, bad, info (the theme's primary) or series (--cat-1).">
        <Demo label="Tones">
          <Meter value={100} tone="good" label="Good, 100%" />
          <Meter value={60} tone="warn" label="Warn, 60%" />
          <Meter value={30} tone="bad" label="Bad, 30%" />
          <Meter value={75} tone="info" label="Info, 75%" />
          <Meter value={50} tone="series" label="Series, 50%" />
        </Demo>
      </Section>

      <Section id="Badge" title="Badge" intro="A small round status mark with a glyph. The colour is a status token (--good, --warn, --bad, the primary, --cat-1), the glyph is --status-mark, and the status is also written next to it: the glyph alone is decorative.">
        <Demo label="Tones, 20px">
          <div className="bb-row">
            <Badge tone="good">✓</Badge>
            <Badge tone="warn">!</Badge>
            <Badge tone="bad">✗</Badge>
            <Badge tone="info">i</Badge>
            <Badge tone="series">=</Badge>
            <Badge tone="neutral">?</Badge>
          </div>
        </Demo>
        <Demo label="Small, 18px, with its text">
          <BadgeRow badge={<Badge tone="good" size="sm">✓</Badge>}>Doing well (3)</BadgeRow>
          <BadgeRow badge={<Badge tone="warn" size="sm">!</Badge>}>Pay attention (2)</BadgeRow>
        </Demo>
      </Section>
    </>
  )
}
