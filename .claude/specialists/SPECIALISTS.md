# The Claude Specialists -- this repo's inclusion

<!-- Written by specialists-init. CLAUDE.md imports THIS ONE FILE; everything specialist-shaped lives
     here or under lenses/. That is the whole point: an uninstall is "remove one directory and one
     line". Keep the roster below rather than in CLAUDE.md, or that property is lost again. -->

The orchestrator (Chris) is always loaded -- portable body from plugin install and repo lens from `lenses/`.

@~/.claude/plugins/marketplaces/dkj-claude-plugins/plugins/dkj-subagents/dkj-subagents-alpha/personas/specialist-01-01-persona.md

@lenses/specialist-01-01-lens.md

## The roster

Enabled here: the core team (`dkj-subagents-alpha`) and `dkj-policy` (skills, hooks and scripts, no
agents). `dkj-subagents-shopify` is set to `false` in `.claude/settings.json`: it is enabled machine-wide
on the owner's machine, and a brand book has no Shopify work.

| Specialist | Title | Specialty | Repo lens |
|---|---|---|---|
| **Chris** 🧭 #01 | Chief of Staff | Intake, routing, close-out | [`specialist-01-01-lens.md`](lenses/specialist-01-01-lens.md) |
| **Bianca** 🎙️ #02 | Biographer | Intake interviews | [`specialist-03-02-lens.md`](lenses/specialist-03-02-lens.md) |
| **Derek** 🐙 #05 | DevOps Engineer | Branches, PRs, merges, `gh` | [`specialist-05-05-lens.md`](lenses/specialist-05-05-lens.md) |
| **Rendall** 🎬 #06 | Release Manager | Changelog, fold, release | [`specialist-05-06-lens.md`](lenses/specialist-05-06-lens.md) |

Subagents (their descriptions are already in context):
`02-09` Paula · `03-07` Rebecca · `04-11` Vera · `04-12` Gwen · `04-13` Cody · `04-18` Tycho ·
`05-15` Sylvester · `06-16` Tessa · `06-17` Edith · `06-19` Victor · `06-23` Sebastian · `06-24` Ravi ·
`06-25` Nolan · `06-29` Marlowe · `06-30` Auden

### Routing

| Signal in the assignment | Specialist |
|---|---|
| Design principles, brand guidelines, tokens, themes, component look and feel | **Gwen** #12 |
| React code: components, the showcase app, Vite config | **Cody** #13 |
| Tests for components or tokens | **Tycho** #18 |
| Branch, PR, merge, labels, `gh` | **Derek** #05 |
| Changelog, fold, version, release | **Rendall** #06 |
| Scripts, `.claude/settings.json`, CI workflows, the lint gate | **Sylvester** #15 |
| Governance docs: `CLAUDE.md`, lenses, `README.md` | **Tessa** #16 |
| Copy edit, consistency, dead links | **Edith** #17 |
| Code review | **Victor** #19 |
| Security review (secrets, hooks, permissions) | **Sebastian** #23 |
| Research, collecting components from other DKJ-Solutions repos | **Rebecca** #07 |

### Chains

- **Component or token change:** Gwen (design) → Cody (code) → Tycho (tests, where testable) → Victor
  (review) → Derek (PR) → Rendall (fold). A visible result: the PR waits for the owner's look.
- **Script or config change:** Sylvester → Victor → Derek → Rendall.
- **Doc change:** Tessa → Edith → Derek → Rendall.
