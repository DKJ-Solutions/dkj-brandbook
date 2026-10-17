import { themeName, type ThemePair } from '../repos'

/** One theme as a small round swatch (the house .theme-swatch carries the theme's own colours) and its name. */
function Theme({ id }: { id: string }) {
  return (
    <span className="dkj-theme-pair__theme">
      <span className="theme-swatch dkj-theme-pair__swatch" data-id={id} aria-hidden="true">
        <i />
      </span>
      {themeName(id)}
    </span>
  )
}

/** A repo's default theme pair: the light theme, then the dark one. */
export function ThemePairLabel({ pair }: { pair: ThemePair }) {
  return (
    <span className="dkj-theme-pair">
      <Theme id={pair.light} /> / <Theme id={pair.dark} />
    </span>
  )
}
