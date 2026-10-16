import { Button } from '../components/Button'
import { Card, CardHead } from '../components/Card'
import { Message } from '../components/Feedback'
import { Breadcrumbs } from '../components/Navigation'
import { DASHBOARD_PATH, DASHBOARDS_PATH, dashboardPreviewPath } from '../routes'
import { Toolbar } from '../showcase/Showcase'
import { PREVIEWS } from './previews'
import './dashboard.css'

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

/** One repo's dashboard preview; an unknown id says so, and the breadcrumbs lead back to the menu. */
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
          <preview.Component />
        ) : (
          <Message>There is no dashboard preview for this repo.</Message>
        )}
      </main>
    </>
  )
}
