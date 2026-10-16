import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Card, CardBody, CardHead } from '../components/Card'
import { FooterNote } from '../components/Content'
import { Message } from '../components/Feedback'
import { StatTile, StatTiles } from '../components/Metrics'
import { DataTable, DefinitionList } from '../components/Table'
import { SHOWCASE_PATH } from '../routes'
import { Toolbar } from '../showcase/Showcase'
import './dashboard.css'

/**
 * The Repo dashboard: the index of this repo's dev server (DKJ-Solutions/dkj-claude-plugins#3064, #137). A welcome page
 * with what this repo is for and what is in flight -- open pull requests, open issues and the branches off the trunk --
 * and a button to the product, the brand book showcase, which has a route of its own.
 * In-flight data is read live from the GitHub API: the repo is public, so no token is needed (60 requests an hour).
 */
const REPO = 'DKJ-Solutions/dkj-brandbook'
const TRUNK = 'main'
const API = `https://api.github.com/repos/${REPO}`

type Pull = { number: number; title: string; html_url: string; draft: boolean; created_at: string; head: { ref: string } }
type Issue = { number: number; title: string; html_url: string; updated_at: string; labels: { name: string }[]; assignees: { login: string }[]; pull_request?: unknown }
type Branch = { name: string }
type InFlight = { pulls: Pull[]; issues: Issue[]; branches: Branch[] }
type Load = { status: 'loading' } | { status: 'error'; reason: string } | { status: 'ready'; data: InFlight }

async function get<T>(path: string, signal: AbortSignal): Promise<T> {
  const res = await fetch(`${API}/${path}`, { signal, headers: { Accept: 'application/vnd.github+json' } })
  if (!res.ok) throw new Error(res.status === 403 || res.status === 429 ? 'the GitHub API rate limit is reached; try again within the hour' : `GitHub answered ${res.status}`)
  return res.json() as Promise<T>
}

function useInFlight() {
  const [load, setLoad] = useState<Load>({ status: 'loading' })
  useEffect(() => {
    const abort = new AbortController()
    Promise.all([
      get<Pull[]>('pulls?state=open&per_page=100', abort.signal),
      // The issues endpoint lists pull requests too; those are counted under pulls.
      get<Issue[]>('issues?state=open&per_page=100', abort.signal).then((all) => all.filter((i) => !i.pull_request)),
      get<Branch[]>('branches?per_page=100', abort.signal).then((all) => all.filter((b) => b.name !== TRUNK)),
    ])
      .then(([pulls, issues, branches]) => setLoad({ status: 'ready', data: { pulls, issues, branches } }))
      .catch((e: unknown) => {
        if (!abort.signal.aborted) setLoad({ status: 'error', reason: e instanceof Error ? e.message : String(e) })
      })
    return () => abort.abort()
  }, [])
  return load
}

const day = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' })
const date = (iso: string) => day.format(new Date(iso))

/** The issue's prio-N label as a number, or Infinity without one, so unprioritised issues sort last. */
function prio(issue: Issue) {
  const m = issue.labels.map((l) => /^prio-(\d+)$/.exec(l.name)).find(Boolean)
  return m ? Number(m[1]) : Infinity
}

export function RepoDashboard() {
  const load = useInFlight()
  const data = load.status === 'ready' ? load.data : null
  const count = (n: number | undefined) => (n === undefined ? '--' : String(n))

  return (
    <main className="dkj-dashboard">
      <Toolbar />
      <header className="dkj-intro">
        <p className="dkj-eyebrow">{REPO}</p>
        <h1>Repo dashboard</h1>
        <p className="dkj-lead">
          The single source of the DKJ-Solutions brand: the design principles, the tokens, the twelve themes and every component the
          DKJ-Solutions apps share, in one place.
        </p>
        <p className="dkj-dashboard-cta">
          <Button variant="primary" href={SHOWCASE_PATH}>
            Open the brand book
          </Button>
        </p>
      </header>

      <StatTiles>
        <StatTile label="Open pull requests" value={count(data?.pulls.length)} />
        <StatTile label="Open issues" value={count(data?.issues.length)} />
        <StatTile label={`Branches off ${TRUNK}`} value={count(data?.branches.length)} />
      </StatTiles>

      {load.status === 'loading' && <Message>Reading what is in flight from GitHub...</Message>}
      {load.status === 'error' && <Message tone="warn">What is in flight could not be read: {load.reason}.</Message>}

      {data && (
        <>
          <Card variant="data">
            <CardHead title="Pull requests" subtitle="Open, newest first" />
            <CardBody>
              <DataTable
                label="Open pull requests"
                columns={[
                  { key: 'title', label: 'Pull request' },
                  { key: 'number', label: 'Number' },
                  { key: 'opened', label: 'Opened' },
                ]}
                rows={data.pulls.map((p) => ({
                  id: String(p.number),
                  cells: { title: <a href={p.html_url}>{p.title}</a>, number: `#${p.number}`, opened: date(p.created_at) },
                  sub: p.draft ? `${p.head.ref} (draft)` : p.head.ref,
                }))}
                empty="No open pull requests."
              />
            </CardBody>
          </Card>

          <Card variant="data">
            <CardHead title="Issues" subtitle="Open, by priority" />
            <CardBody>
              <DataTable
                label="Open issues"
                columns={[
                  { key: 'title', label: 'Issue' },
                  { key: 'number', label: 'Number' },
                  { key: 'prio', label: 'Priority' },
                ]}
                rows={[...data.issues]
                  .sort((a, b) => prio(a) - prio(b) || b.number - a.number)
                  .map((i) => ({
                    id: String(i.number),
                    cells: { title: <a href={i.html_url}>{i.title}</a>, number: `#${i.number}`, prio: Number.isFinite(prio(i)) ? String(prio(i)) : '--' },
                    sub: i.assignees.length ? `Claimed by ${i.assignees.map((a) => a.login).join(', ')}` : 'Unclaimed',
                  }))}
                empty="No open issues."
              />
            </CardBody>
          </Card>

          <Card variant="data">
            <CardHead title="Branches" subtitle={`Every branch off ${TRUNK}, with its pull request where one is open`} />
            <CardBody>
              <DataTable
                label={`Branches off ${TRUNK}`}
                columns={[
                  { key: 'name', label: 'Branch' },
                  { key: 'pull', label: 'Pull request' },
                ]}
                rows={data.branches.map((b) => {
                  const pull = data.pulls.find((p) => p.head.ref === b.name)
                  return { id: b.name, cells: { name: <a href={`https://github.com/${REPO}/tree/${b.name}`}>{b.name}</a>, pull: pull ? `#${pull.number}` : 'none yet' } }
                })}
                empty={`No branches off ${TRUNK}.`}
              />
            </CardBody>
          </Card>
        </>
      )}

      <Card variant="data">
        <CardHead title="About this repo" />
        <CardBody>
          <DefinitionList
            variant="facts"
            items={[
              { term: 'Stack', value: 'React 19 + TypeScript + Vite' },
              { term: 'Trunk', value: TRUNK },
              { term: 'Gate', value: 'scripts/lint/lint-web.ps1' },
              { term: 'Showcase', value: SHOWCASE_PATH },
            ]}
          />
        </CardBody>
      </Card>

      <FooterNote>
        In flight is read live from the GitHub API for <a href={`https://github.com/${REPO}`}>{REPO}</a> each time this page opens.
      </FooterNote>
    </main>
  )
}
