## feat/35-music-library-preview

> **How this file is read.** A step is `- [ ]` until it is resolved -- `- [x]` done, or
> `- [~]` dropped with the reason, which exists so nobody ticks a box for work they did not do.
> open-pr and ship-pr both refuse while one is still open, and there is no `-Force`.
>
> **FOUR `###` HEADINGS, AND NEVER A FIFTH** -- PLAN, CREATE, TEST, DEPLOY are the whole top
> level. A section needing its own heading goes in as a `####` UNDER whichever of the four owns
> it. No gate in YOUR repo reads a heading, so this half is on you -- only the repo that authors
> this workflow refuses a fifth (Dave, August 26, 2026).
>
> **AND NOTHING BRANCH-SPECIFIC ABOVE THE FIRST OF THOSE FOUR HEADINGS** -- everything between the
> title and it is this guidance, which is identical in every branch document. A status line, a note about
> THIS branch or an instruction to a session belongs under one of the four, normally as a `####`
> in PLAN. THIS half open-pr refuses, in every repo, before the push -- it reads the shape, so a
> guidance block in your own language passes and your own paragraph here does not (Dave,
> August 26, 2026; refused since #1650).
>
> **DEPLOY takes no steps of its own, and it is WRITTEN LAST** -- it is what the branch DID, once
> TEST says so. Written while steps above it are still open it states an INTENTION, and no gate
> holds it against what landed: the step gate splits this file at that heading and counts only
> above it. The PR title is the one exception -- new-branch -Title writes it at creation, because
> open-pr composes the PR title from it. It is the one part of this file that travels verbatim
> into `CHANGELOG.md` at the merge. In each tier, write the reason
> ABOVE the Score line -- anything below it is discarded.
>
> Relative links in that text resolve FROM THIS DIRECTORY -- `CHANGELOG.md` sits here too, so
> write each path exactly as it reads in this file.
>
> The phase arc, the marks and the whole form: `DEVELOPMENT-portable.md`, which ships
> with this workflow.

### PLAN

This branch is #35: a recreated preview for `DKJ-Solutions/dkj-music-library`, a local Next.js app with no deployment (so no live link). It has three screens, so the preview recreates all three with placeholder content and switches between them in the page header with a joined `SegmentedChoice`, the way `EtfPreview` and `PluginsPreview` do. Only existing brand-book components are used; nothing lifted into the brand book, so `sources.ts` is untouched. Every name, artist, track and id is invented.

#### What the preview shows

- **Playlist manager (first screen):** a kicker (`TitleTag`) and lede; a "Connection" card with a status line, a connect/disconnect button and a sync button; a "Worlds" card of `StatTile`s (emoji, label, count) with the total as its subtitle; a stats row (playlists, artists, with ID, in the DJ world, sync); a toolbar with a search field, type and genre selects, colour `Checkbox`es, joined `SegmentedChoice`s for density and BPM tier and for "ID filled", and a clear-filters button; a sortable playlist table (world, type, BPM tier, name, colour, mix id, genre, density, tracks, a done checkbox) with a "No playlists match these filters" empty row. Search, filters, sort and the done checkboxes work on the placeholder data.
- **Data dashboard:** a duplicates table with the count as text ("3×"), ranked top-artist bars (`BarChart`, "N tracks"), and distributions: world tiles, a colour bar list with a `Legend`, and BPM tier tiles.
- **Track register:** a stats row, a filter fieldset (search, BPM, genre, album and group selects, clear), a sortable table with an empty row, and a player strip under the table.
- **Footer** says the app is local with no deployment; a banner says the content is invented.
- **Gaps (no component, rendered as closely as possible):** multi-select colour chips with a colour dot (plain `Checkbox`es with the colour as text, and the colour as a text cell in the table); pill toggles that are really multi-select (a joined `SegmentedChoice` is single choice, so "All" is an option); inline selects and the inline editable cell per table row (plain text cells); the emoji navigation tiles of the Worlds section (`StatTile`s that do not navigate); a bar list with a per-bar colour dot (single-colour `BarChart`, rank in the label); the player strip (a `TintedPanel` with a note, no embed); the bulk-progress line of the sync (left out); a native `fieldset` for the track filters, since no component wraps one.

### CREATE

- [x] `src/showcase/previews/MusicLibraryPreview.tsx`: the playlist manager, the data dashboard and the track register, switched with a `SegmentedChoice` in the `PageHeader`, built from existing components only.
- [x] `src/showcase/previews/RepoPreview.tsx`: `dkj-music-library` registered in `PREVIEWS`.
- [x] `src/apps/registry.ts`: the `dkj-music-library` entry with its three screen views (`MUSIC_LIBRARY_VIEWS`).
- [x] `npx eslint src` and `npx tsc -b` are clean.

### TEST

### DEPLOY: feat/35-music-library-preview

#### What does the change on this branch deploy to main?

##### Tier 0

**Score:**

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

**Score:**

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

**Score:**

#### Pull Request

Recreated preview for dkj-music-library

