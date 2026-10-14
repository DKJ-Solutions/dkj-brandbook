// Fails when a stylesheet types a colour instead of reading a token.
//
// Scans house-style/house-style.css and every .css under src/. A colour code -- #hex, rgb(), rgba(),
// hsl(), hsla() -- is allowed only as the value of a custom-property declaration (--name: #abc), and
// two things are reported:
//   - a colour code anywhere else, e.g. `color: #fff` or inside a color-mix() in a rule;
//   - a declaration under src/ whose code the house style already defines (`--bb-nav-ink: #52514e`
//     where --neutral-3 is #52514e): read the house token instead of typing its value again.
// Codes are compared case-insensitively with #abc expanded to #aabbcc. TS/TSX are not scanned: their
// colour codes are data (the theme picker's swatch list, an inline SVG placeholder image), not styling.
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = join(import.meta.dirname, '..', '..')
const house = join(root, 'house-style', 'house-style.css')

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  )
}

const files = [house, ...walk(join(root, 'src')).filter((f) => f.endsWith('.css'))]
// Comments are blanked (newlines kept, so line numbers hold).
const read = (f) => readFileSync(f, 'utf8').replace(/\/\*[\s\S]*?\*\//g, (c) => c.replace(/[^\n]/g, ' '))

const colour = /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?)\([^)]*\)/g
const norm = (c) => {
  c = c.toLowerCase().replace(/\s+/g, '')
  return /^#[0-9a-f]{3}$/.test(c) ? '#' + [...c.slice(1)].map((x) => x + x).join('') : c
}

// Every code the house style defines, with the first token that holds it.
const houseCodes = new Map()
for (const m of read(house).matchAll(/(--[\w-]+)\s*:([^;}]*)/g)) {
  for (const c of m[2].matchAll(colour)) if (!houseCodes.has(norm(c[0]))) houseCodes.set(norm(c[0]), m[1])
}

const problems = []
for (const f of files) {
  const src = read(f)
  const rel = relative(root, f).replaceAll('\\', '/')
  // The spans of every custom-property declaration's value.
  const decls = [...src.matchAll(/(--[\w-]+)\s*:([^;}]*)/g)].map((m) => ({
    name: m[1],
    from: m.index + m[0].length - m[2].length,
    to: m.index + m[0].length,
  }))
  for (const c of src.matchAll(colour)) {
    const line = src.slice(0, c.index).split('\n').length
    const decl = decls.find((d) => c.index >= d.from && c.index < d.to)
    if (!decl) {
      problems.push(`${rel}:${line}  ${c[0]} outside a token declaration -- read a token with var()`)
    } else if (f !== house && houseCodes.has(norm(c[0]))) {
      problems.push(`${rel}:${line}  ${decl.name}: ${c[0]} repeats a house value -- use var(${houseCodes.get(norm(c[0]))})`)
    }
  }
}

if (problems.length) {
  console.log(`[ERROR] ${problems.length} colour code(s) that should be a token:`)
  for (const p of problems) console.log(`  ${p}`)
  process.exit(1)
}
console.log(`[OK] every colour in the stylesheets is a token (${files.length} files).`)
