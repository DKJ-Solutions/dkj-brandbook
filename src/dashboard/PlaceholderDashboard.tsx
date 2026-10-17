import type { ReactNode } from 'react'
import { Button } from '../components/Button'
import { Card, CardBody, CardHead } from '../components/Card'
import { FooterNote } from '../components/Content'
import { DefinitionList } from '../components/Table'
import { DashboardIntro, InFlightCards, InFlightTiles, type InFlight, type Issue, type Pull } from './DashboardShell'

/**
 * A repo's Repo dashboard in the one form the house-style README lays down ("The Repo dashboard"), filled with
 * placeholder data: the intro, the in-flight tiles and cards, the repo's own cards, "About this repo" and the footer
 * note. A preview only: nothing is fetched and the product button goes nowhere.
 */
export type PlaceholderRepo = {
  /** GitHub "owner/name", the eyebrow. */
  slug: string
  lead: string
  /** The product button's label; left out for a repo without a product. */
  product?: string
  trunk?: string
  inFlight: InFlight
  facts: readonly { term: string; value: ReactNode }[]
  /** Where the real page would read its in-flight lists, for the footer note. */
  source: string
}

/** One open pull request, opened on the given day of October 2026. */
export const pull = (number: number, title: string, ref: string, day: number, draft = false): Pull => ({
  number,
  title,
  html_url: '#',
  draft,
  created_at: `2026-10-${String(day).padStart(2, '0')}T09:00:00Z`,
  head: { ref },
})

/** One open issue, with its labels and, where claimed, who claimed it. */
export const issue = (number: number, title: string, labels: readonly string[], claimedBy?: string): Issue => ({
  number,
  title,
  html_url: '#',
  updated_at: '2026-10-12T09:00:00Z',
  labels: labels.map((name) => ({ name })),
  assignees: claimedBy ? [{ login: claimedBy }] : [],
})

export function PlaceholderDashboard({ repo, children }: { repo: PlaceholderRepo; children?: ReactNode }) {
  const trunk = repo.trunk ?? 'main'
  return (
    <>
      <DashboardIntro
        eyebrow={repo.slug}
        title="Repo dashboard"
        lead={repo.lead}
        actions={
          repo.product && (
            <Button variant="primary" aria-disabled="true">
              {repo.product}
            </Button>
          )
        }
      />

      <InFlightTiles data={repo.inFlight} trunk={trunk} />

      <InFlightCards data={repo.inFlight} repo={repo.slug} trunk={trunk} />

      {children}

      <Card variant="data">
        <CardHead title="About this repo" />
        <CardBody>
          <DefinitionList variant="facts" items={[...repo.facts, { term: 'Trunk', value: trunk }]} />
        </CardBody>
      </Card>

      <FooterNote>{repo.source} Placeholder data only.</FooterNote>
    </>
  )
}
