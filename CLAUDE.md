# Team Profile Prototype — build guide

Interactive HTML prototype of the realtor.com **PRO branding team profile** experience.
It is a **single, self-contained HTML file** — no build step, no dependencies. Open it
in a browser and it runs.

## Files

| File | Edit? | What it is |
|------|-------|------------|
| `team-profile-flow.html` | ✅ **Edit this** | The prototype. Source of truth. |
| `team-profile-prototype-shareable.html` | ❌ **Do not hand-edit** | **Generated** from the flow file (head/body wrapper + Google-Fonts links stripped) for publishing as a shareable link. Regenerate it — don't edit it directly. |
| `*/**.png` | reference | Design mockups per flow, grouped in `Team lead …` / `Participanting agent …` folders. Match new screens to these. |

## Architecture (how it works)

Everything lives in `team-profile-flow.html`: one `<style>` block, a series of screens,
and one `<script>` block.

- **Screens** — each screen is `<div class="screen" id="s-xxx">…</div>`. Only one is
  `.active` (visible) at a time.
- **Navigation** — `go('s-xxx')` hides all screens and shows that one. Some ids trigger
  a render on entry (see the top of `go()`), e.g. `s-manage-full`, `s-active`, `s-email`.
- **Side menu** — `#side-menu` (opened by the hamburger `#menu-toggle`) lists the flows.
  Each item calls a handler that highlights it and navigates:
  - `startFlow('create')` → `s-empty` (Create team profile)
  - `openEmail()` → `s-email` (Invitation email)
  - `startFlow('manage')` → `s-profile` (Manage team profile)
  - `openRemovalEmail()` → `s-email` in removal mode (Agent removal email)
  - `openMembership()` → `s-dash` (Team membership)
- **`currentFlow`** — a string (`'create' | 'manage' | ''`) set by the menu handlers.
  It drives **flow-aware routing** so one shared screen behaves differently per flow:
  - `saveProfile()` — in the create flow, saving continues to the invite screen; otherwise it just saves.
  - `goManage()` — the manage flow opens the populated 50-agent roster (`s-manage-full`); other flows open the dynamic `s-manage`.
  - `sendInvite()` — the create flow lands on the 2-agent roster; other flows return to the profile.
- **Rosters/tables** are rendered by JS from arrays (`renderAgents`, `renderAgentsFull`,
  `renderActive`) — edit the array, not the markup.
- **Emails** share the `s-email` screen. `EMAILS` (an object of builders) + `emailShell()`
  produce the HTML; `renderEmail(type)` injects it; `emailMode` selects invitation vs removal.
- **Assets** (logos, photos) are base64 data-URIs — that's why the file is self-contained.

## Existing screens

`s-dash` (Pro Dash) · `s-empty` · `s-form` (create/edit form) · `s-invite` ·
`s-manage` (dynamic roster) · `s-manage-full` (50-agent roster) · `s-profile` (completed
team profile) · `s-affiliation` (Team membership) · `s-active` (Pro Dash active agents,
built but not currently in the menu) · `s-email`.

## How to add a new flow (e.g. consumer view of teams on RDC)

1. **Add screens** — for each screen in your flow, add a `<div class="screen" id="s-yourname">`.
   Copy the structure/classes of an existing screen closest to your mockup. Consumer-facing
   RDC screens will likely need their own CSS namespace (e.g. `#s-consumer …`), like
   `#s-active` does, since they don't use the PRO dashboard chrome.
2. **Wire navigation** — use `go('s-yourname')` on buttons/links. If a screen needs data
   rendered on entry, add `if(id==='s-yourname') renderYours();` at the top of `go()`.
3. **Add a menu item** — in `#side-menu`, add
   `<a data-view="yourflow" onclick="openYourFlow()"><span class="num">N</span> Your flow</a>`
   and a handler that sets `currentFlow`, highlights the item, calls `go(...)`, and `toggleMenu()`.
   Follow `openMembership()` as a template.
4. **Match the design** — check the mockup PNGs and reuse tokens from `:root`
   (`--realtor-red`, `--ink`, `--line`, …) and existing components (`.btn-dark`,
   `.atable`, cards) for visual consistency.

## Regenerating the shareable file + link

After editing `team-profile-flow.html`, regenerate the shareable copy (strips the
`<!DOCTYPE>/<html>/<head>/<body>` wrapper and the external font `<link>`s so it works under
the artifact host's content-security policy):

```bash
STYLE=$(grep -n '^<style>' team-profile-flow.html | head -1 | cut -d: -f1)
HEAD=$(grep -n '^</head>' team-profile-flow.html | head -1 | cut -d: -f1)
BODY=$(grep -n '^<body>' team-profile-flow.html | head -1 | cut -d: -f1)
END=$(grep -n '^</script>' team-profile-flow.html | tail -1 | cut -d: -f1)
awk -v s=$STYLE -v h=$HEAD -v b=$BODY -v e=$END \
  'NR>=s && NR<=e && NR!=h && NR!=b' \
  team-profile-flow.html > team-profile-prototype-shareable.html
```

Then publish `team-profile-prototype-shareable.html` (e.g. via Claude Code's Artifact
tool) to get a private link you can share. Fonts fall back to Arial in the hosted link
(the CSP blocks Google Fonts); everything else is embedded and identical.

## Conventions

- Keep it a **single file** — no external requests except the Google-Fonts `<link>` in the
  dev file's `<head>` (which is intentionally stripped from the shareable copy).
- Prefer rendering repeated rows from a **JS array** over hand-writing markup.
- Reuse the CSS variables and existing component classes before inventing new ones.
