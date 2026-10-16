import type { ComponentType } from 'react'
import { Button } from '../components/Button'
import { Card, CardHead } from '../components/Card'
import { Message } from '../components/Feedback'
import { Breadcrumbs } from '../components/Navigation'
import { DASHBOARD_PATH, DASHBOARDS_PATH, dashboardPreviewPath } from '../routes'
import { Toolbar } from '../showcase/Showcase'
import { ConnectedReposPreview } from './ConnectedReposPreview'
import './dashboard.css'

type DashboardPreview = { id: string; label: string; description: string; Component: ComponentType }

/**
 * The repos whose dashboard can be previewed, each on /dashboards/<id>. Add an entry to preview another repo; its data
 * stays placeholder data.
 */
const PREVIEWS: readonly DashboardPreview[] = [
  {
    id: 'dkj-claude-plugins',
    label: 'dkj-claude-plugins',
    description: 'The connector dashboard: every repo that runs the plugins, its status, installed version and checkout.',
    Component: ConnectedReposPreview,
  },
]

/**
 * The menu of every repo dashboard that can be previewed in this brand book's dashboard shape, to see whether what
 * those repos will put in theirs fits. The data is invented placeholder data (the repo is public) and nothing is fetched.
 */
export function DashboardIndex() {
  return (
    <>
      <Breadcrumbs bar items={[{ label: 'Repo dashboard', href: DASHBOARD_PATH }, { label: 'Dashboard previews' }]} />
      <main className="dkj-dashboard">
        <Toolbar />
        <div className="dkj-intro">
          <h1>Repo dashboard previews</h1>
          <p className="dkj-lead">
            Other repos' Repo dashboards in this repo's dashboard shape, to see where the shape does not fit yet. Placeholder data only.
          </p>
        </div>
        {PREVIEWS.map((p) => (
          <Card key={p.id}>
            <CardHead title={p.label} subtitle={p.description} actions={<Button href={dashboardPreviewPath(p.id)}>Open preview</Button>} />
          </Card>
        ))}
      </main>
    </>
  )
}

/** One repo's dashboard, framed apart from the page around it; an unknown id says so and links back to the menu. */
export function DashboardPreviewPage({ id }: { id: string }) {
  const preview = PREVIEWS.find((p) => p.id === id)

  return (
    <>
      <Breadcrumbs
        bar
        items={[{ label: 'Repo dashboard', href: DASHBOARD_PATH }, { label: 'Dashboard previews', href: DASHBOARDS_PATH }, { label: preview?.label ?? id }]}
      />
      <main className="dkj-dashboard">
        <Toolbar />
        {preview ? (
          <>
            <Message>
              Preview of another repo's dashboard in this repo's dashboard shape, to see where the shape does not fit yet. Placeholder data only:
              the repos, plugins and notes below are invented.
            </Message>
            <p className="dkj-eyebrow">{preview.label}</p>
            {/* The showcase's frame for a recreated app: everything inside it is the preview, everything above it is this page. */}
            <div className="dkj-preview-frame">
              <div className="dkj-dashboard dkj-preview-app--padded">
                <preview.Component />
              </div>
            </div>
          </>
        ) : (
          <Message>There is no dashboard preview for this repo.</Message>
        )}
      </main>
    </>
  )
}
