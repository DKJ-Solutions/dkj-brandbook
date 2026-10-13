import { useState } from 'react'
import { Button, SegmentedChoice } from '../../components/Button'
import { Card, CardBody } from '../../components/Card'
import { FooterNote, GroupHeading } from '../../components/Content'
import { Message } from '../../components/Feedback'
import { SelectField, Stepper } from '../../components/Field'
import { Meter } from '../../components/Metrics'
import { PageHeader } from '../../components/Navigation'
import { DataTable, DefinitionList } from '../../components/Table'

type View = 'listen' | 'mix'

type Mix = {
  id: string
  colour: string
  shade: string
  subgenre: string
  genre: string
  power: string
  vol: number
  date: string
  tracks: readonly { name: string; time: string }[]
}

const ALL = 'All'
const PAGE_SIZE = 10

/** Invented moods: one colour each, as the source pairs a colour with a few mood words. */
const MOODS: readonly { colour: string; words: string }[] = [
  { colour: 'Amber', words: 'warm, easy' },
  { colour: 'Azure', words: 'open, floating' },
  { colour: 'Coral', words: 'playful, bright' },
  { colour: 'Jade', words: 'calm, steady' },
  { colour: 'Lilac', words: 'dreamy, soft' },
  { colour: 'Olive', words: 'earthy, slow' },
  { colour: 'Rose', words: 'tender, close' },
  { colour: 'Slate', words: 'dark, driving' },
]
const GENRES = ['Genre one', 'Genre two', 'Genre three'] as const
const POWERS = ['Low', 'Medium', 'High'] as const

const TRACKS = (n: number) =>
  Array.from({ length: n }, (_, i) => ({ name: `Example track ${i + 1}`, time: `${String(i * 4).padStart(2, '0')}:${i % 2 ? '30' : '00'}` }))

/** Placeholder mixes: invented names, dates and tracks; nothing copied from a real catalogue. */
const MIXES: readonly Mix[] = Array.from({ length: 14 }, (_, i) => {
  const m = MOODS[i % MOODS.length]
  return {
    id: `m${i + 1}`,
    colour: m.colour,
    shade: ['Light', 'Medium', 'Deep'][i % 3],
    subgenre: `Subgenre ${'ABCD'[i % 4]}`,
    genre: GENRES[i % GENRES.length],
    power: POWERS[(i * 2) % POWERS.length],
    vol: 14 - i,
    date: `2026-09-${28 - i}`,
    tracks: i === 3 ? [] : TRACKS(4 + (i % 3)),
  }
})

const mixTitle = (m: Mix) => `${m.colour} ${m.subgenre} Mix · ${m.vol}`

/**
 * A stand-in for the audio player (gap: the AudioPlayer issue, #52): a play toggle and a labelled progress meter.
 * Playing is only shown, not heard.
 */
function PlayerStandIn({ title, large }: { title: string; large?: boolean }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="bb-preview-gap">
      <Button variant={playing ? 'outline' : 'default'} size={large ? 'md' : 'compact'} aria-pressed={playing} onClick={() => setPlaying((p) => !p)}>
        Play
        <span className="sr-only"> {title}</span>
      </Button>
      <Meter value={playing ? 35 : 0} tone="series" label={`Progress of ${title}: ${playing ? 'playing' : 'not started'}`} />
    </div>
  )
}

function Listen({ onOpen }: { onOpen: (id: string) => void }) {
  const [mood, setMood] = useState(ALL)
  const [genre, setGenre] = useState(ALL)
  const [power, setPower] = useState(ALL)
  const [shown, setShown] = useState(PAGE_SIZE)
  const visible = MIXES.filter((m) => (mood === ALL || m.colour === mood) && (genre === ALL || m.genre === genre) && (power === ALL || m.power === power))
  // Any filter change starts the list over at the first page, as in the source.
  const filter = <T,>(set: (v: T) => void) => (v: T) => {
    set(v)
    setShown(PAGE_SIZE)
  }
  return (
    <>
      <Card variant="data">
        <CardBody>
          <GroupHeading>Mood</GroupHeading>
          <SegmentedChoice
            label="Mood"
            layout="list"
            value={mood}
            onChange={filter(setMood)}
            options={[{ value: ALL, label: ALL }, ...MOODS.map((m) => ({ value: m.colour, label: `${m.colour} — ${m.words}` }))]}
          />
          <div className="bb-preview-tiles bb-preview-gap">
            <SelectField label="Genre" options={[ALL, ...GENRES]} value={genre} onChange={(e) => filter(setGenre)(e.target.value)} />
            <SelectField label="Power" options={[ALL, ...POWERS]} value={power} onChange={(e) => filter(setPower)(e.target.value)} />
          </div>
        </CardBody>
      </Card>

      {visible.length === 0 && <Message>No mixes found</Message>}
      <div className="bb-preview-tiles">
        {visible.slice(0, shown).map((m) => (
          <Card key={m.id}>
            <CardBody>
              <strong>{mixTitle(m)}</strong>
              <Message>{m.date}</Message>
              <PlayerStandIn title={mixTitle(m)} />
              <div className="bb-preview-gap">
                <Button variant="outline" size="compact" onClick={() => onOpen(m.id)}>
                  Open mix
                  <span className="sr-only"> {mixTitle(m)}</span>
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      {visible.length > shown && (
        <Button variant="outline" onClick={() => setShown((n) => n + PAGE_SIZE)}>
          Load more
        </Button>
      )}
    </>
  )
}

function MixDetail({ mix, onBack }: { mix: Mix; onBack: () => void }) {
  const [volume, setVolume] = useState(7)
  return (
    <>
      <div>
        <Button variant="outline" size="compact" onClick={onBack}>
          &larr; All mixes
        </Button>
      </div>
      <Card variant="data">
        <CardBody>
          <PlayerStandIn title={mixTitle(mix)} large />
          <div className="bb-preview-gap">
            <Stepper label="Volume" value={volume} min={0} max={10} onChange={setVolume} />
          </div>
          <Message>{mix.date}</Message>
          <p>An invented description of the mix: a few sentences on the mood and the build, as the real page shows above the facts.</p>
        </CardBody>
      </Card>

      <Card variant="data">
        <CardBody>
          <GroupHeading>Key facts</GroupHeading>
          <DefinitionList
            variant="facts"
            items={[
              { term: 'Colour', value: mix.colour },
              { term: 'Shade', value: mix.shade },
              { term: 'Subgenre', value: mix.subgenre },
              { term: 'Tracks', value: String(mix.tracks.length) },
            ]}
          />
        </CardBody>
      </Card>

      <Card variant="data">
        <CardBody>
          <GroupHeading>Tracklist</GroupHeading>
          <DataTable
            label="Tracklist"
            columns={[
              { key: 'track', label: 'Track' },
              { key: 'time', label: 'Time' },
            ]}
            rows={mix.tracks.map((t) => ({ id: t.name, cells: { track: t.name, time: t.time } }))}
            empty="No tracklist available"
          />
          <Message>Example rights notice: the music belongs to its rights holders; this page only links a mix.</Message>
        </CardBody>
      </Card>
    </>
  )
}

/** A recreation of the two screens of djcylow-react (the Listen page and a mix page), with placeholder content. */
export function DjCylowPreview() {
  const [view, setView] = useState<View>('listen')
  const [openId, setOpenId] = useState(MIXES[0].id)
  const mix = MIXES.find((m) => m.id === openId) ?? MIXES[0]
  return (
    <div className="bb-preview-app bb-preview-app--padded">
      <PageHeader title={view === 'listen' ? 'Listen' : mixTitle(mix)}>
        <SegmentedChoice
          label="Screen"
          layout="joined"
          value={view}
          onChange={setView}
          options={[
            { value: 'listen', label: 'Listen' },
            { value: 'mix', label: 'Mix' },
          ]}
        />
      </PageHeader>
      <div className="bb-preview-column">
        {view === 'listen' ? (
          <Listen
            onOpen={(id) => {
              setOpenId(id)
              setView('mix')
            }}
          />
        ) : (
          <MixDetail key={mix.id} mix={mix} onBack={() => setView('listen')} />
        )}
        <FooterNote>A recreated preview; every mix, date and track is invented. Nothing plays: the player is a stand-in.</FooterNote>
      </div>
    </div>
  )
}
