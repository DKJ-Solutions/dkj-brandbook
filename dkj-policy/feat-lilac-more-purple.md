## feat/lilac-more-purple

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

The owner finds Lila, the dark counterpart of Paars, too dark and short of purple. Keep each step's
OKLCH lightness (so every contrast and the October 14 mirror decision hold) and roughly double its
chroma at hue 297-300. Approved on Lila, the owner asked for the same on the other five dark themes.

### CREATE

- [x] `house-style/house-style.css`: the six `lilac` primaries, old -> new (OKLCH L/C):
      -1 `#1e1b25` -> `#1f182e` (0.230, 0.020 -> 0.042), -2 `#302c39` -> `#322945` (0.303, 0.024 -> 0.052),
      -3 `#433c55` -> `#46356a` (0.374, 0.043 -> 0.090), -4 `#3d3b43` -> `#3e394a` (0.357, 0.014 -> 0.030),
      -5 `#f0eef6` -> `#f0ecfc` (0.950, 0.011 -> 0.022), -6 `#f9f8fa` -> `#f9f7fd` (0.980, 0.003 -> 0.008)

### TEST

- [x] Contrast (WCAG): `--neutral-3` on -1 9.54:1 (was 9.46), on -2 7.62:1 (was 7.59); -1 on -5 14.74:1
      (was 14.75); -6 on -1 16.08:1. Every documented worst case (6.8:1, 14.3:1) still holds and stays Geel.
- [x] An owner has looked at Lila in the showcase and approved it
- [x] The other five dark themes, same method: each step keeps its own OKLCH lightness and hue and takes
      Lila's chroma factor for that step (x2.18, 2.13, 2.08, 2.14, 2.00, 2.89), clipped to sRGB where it
      would leave the gamut (Cyaan and Geel's dark steps). Cyaan is also the house dark default, so both
      dark token blocks change with it.
      Roze `#2d1124 #461d37 #691d4e #4a3542 #fde9f3 #fff6f9`;
      Hemelsblauw `#091f2e #143046 #05416c #2f3e4b #e8f1fb #f6f9fc`;
      Cyaan `#002225 #00353a #004a50 #264244 #e6f2f4 #f4fafa`;
      Geel `#291e00 #3d3100 #574500 #463d25 #f5efe1 #fcf9f0`;
      Oranje `#2d1504 #452306 #612e00 #4a372a #fcece4 #fff7f4`
- [x] Contrast (WCAG) over all six dark themes: `--neutral-3` on -2 7.16:1 or better, -1 on -5 14.31:1 or
      better, worst Geel in both; the stylesheet's stated floors (6.8:1, 14.3:1, worst Geel) still hold.
- [x] An owner has looked at the five other dark themes: four approved, Oranje still read too brown
- [x] Oranje, further: steps -1 to -3 and -5 move to hue 50 (from 54-56, away from brown-yellow) at 95-100%
      of the sRGB maximum chroma for their lightness, -4 at 60%; lightness unchanged, -6 unchanged.
      `#311200 #4a1f02 #642b00 #53321f #feebe1 #fff7f4`. Contrast: `--neutral-3` on -2 7.88:1, -1 on -5
      14.94:1, -6 on -1 16.32:1.
- [x] An owner has looked at Oranje: -3 still read brown
- [x] Oranje -3 `#642b00` -> `#793300`: it already sat at the sRGB maximum chroma, so the only way to more
      orange was lighter -- OKLCH L 0.363 -> 0.41, hue 48, maximum chroma (0.112). `--neutral-3` on it
      5.13:1 (was 6.21; L 0.45 would drop to 4.36), as text on -6 (the showcase nav) 8.69:1.
- [x] An owner has looked at Oranje -3: chose `#a54600` by hand
- [x] Oranje -3 `#793300` -> `#a54600`, the owner's own value. `--neutral-3` on it falls to 3.37:1.
- [x] The `-3` rule (owner's decision, October 14, 2026: "primary-3 staat centraal, alles staat daaromheen"):
      text on a `--primary-3` surface is `--primary-6`, which reaches 4.94:1 or better on `-3` in all
      twelve themes (worst Roest; Oranje 5.71:1). Applied to `.table--accent th`, `.theme-settings__toggle:hover`,
      the joined choice's hover, `.dkj-daterow--near/--today` and `--link:hover`, `.dkj-dialog--accent`,
      the InfoRows box (not `--info`), and the showcase's nav current item and chip hover. Written into
      `house-style/README.md`, with the dark themes' chroma factors beside the recipe.
- [x] `scripts/lint/lint-web.ps1` green
- [x] An owner asked to try the anchor on every theme
- [x] Trial: every theme's `-3` takes the hue and chroma of its identity colour (the picker's dot), capped by
      sRGB, at the lightness where `--primary-6` on it matches Oranje's 5.7:1 (dark) or 4.6:1 (light; the
      light `-6` is too dark for more). Oranje keeps `#a54600`, which sits at its identity chroma already.
      Magenta `#ffb9e0`, Paars `#cdbcff`, Blauw `#b0cdff`, Petrol `#88e4ee`, Oker `#e0d17a`, Roest `#ffcba9`;
      Roze `#ad2d7f`, Lila `#6d51ad`, Hemelsblauw `#0066a9`, Cyaan `#026d77`, Geel `#7b5f01`. Blauw and Cyaan
      are the house defaults, so `:root` and both dark blocks change with them.
- [x] An owner looked at the trial: Geel's `-3` must be truly yellow
- [x] Geel `-3` `#7b5f01` -> `#f2c230` (its identity colour; yellow only exists light). New token
      `--on-primary-3`, the text on a `-3` surface: `--primary-6` by default, `--primary-1` in Geel (9.79:1
      on `#f2c230`). Every text-on-`-3` site reads it now; the showcase nav brand takes `--primary-1` in Geel
      (yellow on its near-white nav was 1.59:1). README token table and the `-3` rule updated.
- [x] `scripts/lint/lint-web.ps1` green
- [x] An owner asked for `h1`/`h2` in `--primary-3`; measured: unreadable in 11 themes (1.3-2.9:1), so it was
      shown in the working copy only, never committed
- [x] An owner chose a five-step scale with `--primary-3` as the theme's own colour (the anchor), two steps to
      the ground and two to the ink. Rename, applied in this order: old `-3` (tinted surface) -> `-4`, old `-5`
      (fill) -> `-3`, old `-6` (text colour) -> `-3`, `--on-primary-3` -> `-5` (new: the ink). `-1`, `-2`, `-4`
      keep their values. `-3` is the identity colour, Petrol and Roest a fraction darker to reach 4.5:1 as link
      text on the card (`#087983`, `#aa5703`; the picker's dots follow). `-5`: near-white on dark, OKLCH L 0.36
      at three quarters of the colour's chroma on light. `h1`, `h2` and links are `-3`; the accent dialog's
      title and links take `-5`. The showcase's dark nav is `-5` with a `-3` hover; Geel's exceptions are gone.
- [x] Contrast, all twelve themes: `-3` on `-2` 4.51:1 or better (Petrol, Roest); `-1` on `-3` 4.88:1 on light
      (Petrol), 6.91:1 on dark (Oranje); `-5` on `-4` 5.88:1 (Petrol); `-5` on `-1` 10.0:1 or better
- [x] `house-style/README.md`: token table, migration rows (old -> new, in order), the anchor and the measurements
- [x] `scripts/lint/lint-web.ps1` green
- [x] An owner found Hemelsblauw too close to Cyaan
- [x] Hemelsblauw `-3` `#5cb3ff` -> `#6aa2ff` (and the picker's dot): OKLCH hue 247 -> 260, Blauw's own hue,
      L 0.745 -> 0.715 at maximum chroma (0.148); 55 degrees from Cyaan, 35 from Lila. `-1` on it 6.60:1,
      it on `-2` 5.34:1.
- [x] An owner chose seven steps instead: `-4` in the middle is always the most saturated colour; on dark
      `-1`/`-2` the darkest and `-6`/`-7` the whitest (mirrored on light); `-3` and `-5` the greyest, `-5` the
      far-side mirror of `-3`. Rename from the five-step trial: `-3` (colour) <-> `-4` (lines and tinted
      surfaces) swapped; `-5` keeps its role (text on a tinted surface) with new, greyer values: `-3`'s hue and
      chroma at the first lightness on the far side reaching 4.5:1 on `-3`. `-6` (no role yet) and `-7` (the
      showcase's dark panel) in the colour's hue, OKLCH L 0.95/0.98 on dark, 0.36/0.26 on light.
- [x] Contrast: `-5` on `-3` 4.51:1 or better (Lila), `-5` on `-2` 5.48:1 or better; `-4`/`-1` as before
- [x] README token table, the anchor bullets and the migration rows, rewritten as one step from the released
      six-step scale to seven (the five-step trial never reached `main`)
- [x] `scripts/lint/lint-web.ps1` green
- [ ] An owner has looked at the seven-step scale in a light and a dark theme and approved it

### DEPLOY: feat/lilac-more-purple

#### What does the change on this branch deploy to main?

##### Tier 0

The primary scale grows from six steps to seven, with the theme's own colour in the middle: `--primary-4` is
the most saturated step and the anchor (buttons, switches, focus rings, links, `h1` and `h2`, the picker's dot).
`-1` and `-2` are the page and the card; `-3` the lines and the tinted surfaces; `-5` the text on a tinted
surface, as grey as `-3` on the far side of the colour; `-6` has no role yet; `-7` is the far end, an inverted
surface. `--primary-4` and `--primary-5` change meaning and `--primary-6` changes value, so a consuming repo
renames in the order the README's migration rows give (old `-4` -> `-3` first, old `-5` -> `-4`, old `-6` ->
`-4` last). On the dark themes the fills and links turn from near-white to the theme's colour itself, and all
six dark themes carry about twice the colour on their page, cards and lines. Petrol and Roest move a fraction
darker, Hemelsblauw to Blauw's hue.

**Score:** 5

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Every app looks like its theme's colour: on dark the buttons, links and headings now carry the colour itself instead of near-white.

**Score:** 2

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

A user sees buttons, links and headings in the theme's own colour, and a more colourful page on dark.

**Score:** 2

#### Pull Request

The primary scale has seven steps, with the theme's colour as --primary-4

