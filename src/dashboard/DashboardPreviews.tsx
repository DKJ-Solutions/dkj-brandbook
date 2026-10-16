import { useState, type ComponentType } from 'react'
import { Button, SegmentedChoice } from '../components/Button'
import { Message } from '../components/Feedback'
import { DASHBOARD_PATH } from '../routes'
import { Toolbar } from '../showcase/Showcase'
import { ConnectedReposPreview } from './ConnectedReposPreview'
import './dashboard.css'

type DashboardPreview = { id: string; label: string; Component: ComponentType }

/** The repos whose dashboard can be previewed. Add an entry to preview another repo; its data stays placeholder data. */
const PREVIEWS: readonly DashboardPreview[] = [{ id: 'example-plugins', label: 'dkj-claude-plugins', Component: ConnectedReposPreview }]

/**
 * Previews of other repos' Repo dashboards, in this brand book's dashboard shape: does what they will put in theirs fit?
 * The data is invented placeholder data (the repo is public) and nothing is fetched.
 */
export function DashboardPreviews() {
  const [id, setId] = useState(PREVIEWS[0].id)
  const { Component } = PREVIEWS.find((p) => p.id === id) ?? PREVIEWS[0]

  return (
    <main className="dkj-dashboard">
      <Toolbar />
      <p>
        <Button href={DASHBOARD_PATH}>Back to the Repo dashboard</Button>
      </p>
      {/* A choice of one is no choice: the selector appears once a second repo is added. */}
      {PREVIEWS.length > 1 ? (
        <SegmentedChoice label="Repo" layout="joined" options={PREVIEWS.map((p) => ({ value: p.id, label: p.label }))} value={id} onChange={setId} />
      ) : (
        <p className="dkj-eyebrow">{PREVIEWS[0].label}</p>
      )}
      <Message>Preview of another repo's dashboard in this repo's dashboard shape, to see where the shape does not fit yet. Placeholder data only: the repos, plugins and notes below are invented.</Message>
      <Component />
    </main>
  )
}
