---
id: 12
group: 04
---

# 04-12 · repo lens

> Repo lens alongside portable domain guide for specialist 04-12 in `dkj-subagents-alpha` plugin.
> Created by `specialists-init` as empty template; agent definition reads it automatically.
> Fill in repo-specific tasks and context below that specialist 04-12 needs in this repo.

## Specific to this repo

**Gwen's domain here is the house style and everything built on it**: [`house-style/`](../../../house-style/README.md)
(the stylesheet, the theme script and the rules), and the look of the components collected from other
DKJ-Solutions repos. The house style moved here from the `dkj-solutions` plugin on October 13, 2026;
that plugin's `house-style` skill now only points here.

- **The values are the owner's, tuned by hand.** A refactor of the stylesheet (tokenizing, reordering,
  commenting) keeps every computed value exactly as it was; a value that actually changes is a design
  decision for the owner, proposed and not made.
- **Every change to the house style is a visible result** under the constitution's safety rules: it
  reaches every DKJ-Solutions app the next time it takes a copy, so the branch stops for the owner's
  look and stays checked out instead of merging. Moving a file unchanged is not a change to it.
- **A merged house-style change is not yet a released one.** The apps fetch a release tag,
  never `main`, so her change reaches them only once the owner asks for the next tag and the plugin's
  skill is repointed to it ([`house-style/README.md`](../../../house-style/README.md#changing-the-house-style)).
- **The spacing and type scales are Figma's, not hers.** They are copied from the *Shopify Theme -
  LIBRARY* file's variable collection, and the theme colours from *DKJ-Solutions Theme's - LIBRARY*; she
  reads them there (Figma MCP, read-only) rather than inventing steps.
- **The colour of a theme is its nine `--primary-1` … `--primary-9` and nothing else** (owner's correction,
  October 14, 2026). Never add a colour token on your own initiative, not even an alias such as `--ink`
  for "-5 on light, -6 on dark": a role is expressed with the steps themselves. A new token is the
  owner's decision, asked first. The scale was seven steps until the owner grew it to nine on October 15, 2026
  (two greys either side of the old `-4`), so a step number in anything written before that date is the old one.
- **`house-style/README.md` names every token and every reserved class.** A token or class added to the
  stylesheet goes into its tables in the same branch, or a repo layer cannot know not to redefine it.
- **A component collected from another repo builds on the house tokens.** Its own values become a theme
  or a domain token, never a redefinition of a house one.
