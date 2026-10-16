import type { ComponentType } from 'react'
import { ConnectedReposPreview } from './ConnectedReposPreview'

export type DashboardPreview = { id: string; label: string; description: string; Component: ComponentType }

/**
 * The repos whose dashboard can be previewed, each on /dashboards/<id> (the id is the repo name). Add an entry to preview
 * another repo; its data stays placeholder data. The Repo dashboard's repo list links every entry here.
 */
export const PREVIEWS: readonly DashboardPreview[] = [
  {
    id: 'dkj-claude-plugins',
    label: 'dkj-claude-plugins',
    description: 'The connector dashboard: every repo that runs the plugins, its status, installed version and checkout.',
    Component: ConnectedReposPreview,
  },
]
