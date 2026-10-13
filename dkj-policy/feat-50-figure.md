## feat/50-figure

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

This branch is #50 and ships with `-Resolves 50`: a `Figure` component, a framed image with a fixed aspect ratio, an optional caption and a placeholder state, so a brand-book image no longer has to be faked as a text tile. It is a visible result, so the PR waits for an owner's look.

#### Design (Gwen)

- **Scope.** `Figure` in a new `src/components/figure.css` (brand layer, `dkj-figure*` names; no house token or class redefined, nothing added to `house-style.css`) plus `Figure.tsx`, registered in `sources.ts` as a brand-book original. DJ Cylow covers are out of the brand book and are not used.
- **API.** `<Figure src? alt? ratio? fit? caption? placeholder? placeholderLabel? children?>`. `ratio` is `'16/9' | '4/3' | '3/2' | '1/1' | '3/4' | '9/16'`, default `'16/9'`, written as the CSS `aspect-ratio` (one custom property `--dkj-figure-ratio`, so the six are a lookup, not six classes). `fit` is `'cover'` (default) or `'contain'` (contain letterboxes on the placeholder fill). `alt` is required in the types when `src` is given (a union: `{src, alt}` or `{src?: undefined}`); `alt=""` is allowed and means decorative.
- **Markup.** `<figure class="dkj-figure">` > `<div class="dkj-figure__frame">` (the ratio box) > `<img>` or the placeholder, then an optional `<figcaption class="dkj-figure__caption">`. The frame is `width: 100%; max-width: 100%; aspect-ratio: var(--dkj-figure-ratio)`, so it fills its column and wraps with it; a `width` prop is not needed (the parent grid sets it). `img` is `position: absolute; inset: 0; width/height: 100%; object-fit: var(--dkj-figure-fit); display: block`. The `<img>` gets `loading="lazy"` and `decoding="async"`.
- **Frame look.** `border-radius: var(--dkj-radius-lg)`; `border: 1px solid var(--border)`; `overflow: hidden`; fill `color-mix(in srgb, var(--ink) 5%, var(--surface))` (the same tint the prose code block uses, so it follows every theme and dark mode with no literal colour). No shadow. The border sits on the frame, so a contained image on the tinted fill still reads as one object.
- **Placeholder state.** Shown when there is no `src`, when `placeholder` is set (a preview that must not show the real image, so `src` is deliberately not rendered, not even hidden), or when the image fails to load. The frame shows a centred, stacked image glyph (inline SVG, `currentColor`, `color: var(--muted)`, 32px; `aria-hidden`) over an optional visible label in `var(--text-sm)`, `var(--ink-2)`. The label is `placeholderLabel`, default "Image placeholder". It is visible text, not a tooltip, so a screenshot or a print still says what the box is.
- **Accessible name.** Real image: `alt` as given. Placeholder: the frame is `role="img"` with `aria-label` = the `alt` if one was given, else `placeholderLabel`; the glyph and the visible label are then hidden from the tree so the name is not read twice. When a caption names the figure, the placeholder stays `role="img"` (the caption is read as `figcaption` by the `figure`), so nothing is left unnamed.
- **Broken image.** An `onError` on the `<img>` flips local state and renders the placeholder (label "Image unavailable", still named by `alt`). A `src` change resets the state. No retry, no spinner; the fixed ratio already prevents layout shift while loading.
- **Caption.** `figcaption`: `font-size: var(--text-sm)`, `color: var(--ink-2)`, `line-height: var(--dkj-lh-snug)`, `margin-top: var(--spacing-2)`, left-aligned, wraps (`overflow-wrap: break-word`). `caption` is a ReactNode, so it can hold text plus a verdict `Chip`; no separate overlay slot (an overlay on an image cannot be guaranteed contrast in every theme and over every picture, so it is deliberately left out; the simpler form wins).
- **Prose relationship.** `.dkj-prose img` stays as it is (max-width and radius for a bare markdown image). `Figure` is the component for an image that needs a ratio, caption or placeholder, and it can sit inside `Prose` as a block child. To keep the two from fighting, `figure.css` also declares `.dkj-prose .dkj-figure__frame > img` (higher specificity than `.dkj-prose img`, so it wins whatever the load order) with `border-radius: 0; height: 100%`, as the frame already rounds and clips. `Prose` also gets a one-line note in the showcase text that a figure is used for a captioned or fixed-ratio image.
- **Focus and motion.** The figure is not interactive, so it gets no focus ring; no animation, so nothing to reduce.
- **Showcase.** A "Figure" page in the showcase with: the four common ratios side by side (16/9, 4/3, 1/1, 9/16 on a placeholder, the 9/16 narrower via the grid); a real image (a small inline SVG `data:` URI, so no network and no asset to licence) with `cover` against `contain`; a caption with a `Chip`; the `placeholder` state on a given `src` (shows it does not reveal the image); the broken-image fallback (a `src` that cannot load); and one Figure inside `Prose`. Props table follows the existing showcase pattern.
- **ThumbnailPreview.** The contact sheet's four `MiniCard`s ("Image placeholder") become four `Figure`s on the same `TintedPanel`, in a grid that wraps (`repeat(auto-fit, minmax(14rem, 1fr))`, a YouTube thumbnail being 16/9), each `placeholder`, `ratio="16/9"`, `placeholderLabel="Candidate N"`, and the caption reading "Candidate N" plus the verdict `Chip` (the verdict moves into the caption, no overlay). The `Message` copy stays. `MiniCard` and `MiniCards` are used only there, so those two imports go (`StatTile(s)` stay).
- **Out of scope.** Lightbox or zoom, multiple sources or `srcset` (a `srcSet` pass-through can come later), video, and galleries. A new house token or theme change is not needed; if one proves needed it goes upstream-in-place here (this is the brand book).

### CREATE

- [x] `Figure.tsx` and `figure.css` built per the design (required `alt` with a `src`, placeholder, `onError` fallback, ratio and fit as classes).
- [x] Registered `Figure: []` in `sources.ts`; added the Figure showcase section in `Surfaces.tsx` (with its demos) and its nav entry in `App.tsx`.
- [x] ThumbnailPreview: the four `MiniCard`s became placeholder 16/9 `Figure`s in an auto-fit grid, with the verdict `Chip` in the caption; `registry.ts` lists `Figure` instead of `MiniCard` for the contact sheet.
- [x] `npx eslint src` and `npx tsc -b` are clean.

### TEST

### DEPLOY: feat/50-figure

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

Figure: an image frame with aspect ratio, caption and a placeholder state

