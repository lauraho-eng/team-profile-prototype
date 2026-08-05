# Team Profile Prototype

Interactive HTML prototype of the realtor.com **PRO branding team profile** experience.

**Repo:** `lauraho-eng/team-profile-prototype-private` (private — access by invitation)

## Viewing the prototype

The prototype is a single self-contained HTML file. There's no build step and no
dependencies — you just open it in a browser.

### First time

```bash
git clone https://github.com/lauraho-eng/team-profile-prototype-private.git
cd team-profile-prototype-private
open team-profile-flow.html        # macOS — or double-click the file in Finder
```

### Every time after

Pull first so you're looking at the latest, then open it:

```bash
git pull
open team-profile-flow.html
```

> **No terminal?** On the repo page click **Code → Download ZIP**, unzip, and
> double-click `team-profile-flow.html`. Re-download to get the latest version.

Use the **hamburger menu** (top left) to move between flows.

## Making changes

Everything lives in one file, so two people editing it at once can overwrite each
other. Work on a branch and open a pull request — git merges per-line instead of
replacing the whole file:

```bash
git checkout -b my-change
# edit team-profile-flow.html
git add team-profile-flow.html
git commit -m "Describe your change"
git push -u origin my-change
```

Then open a PR on GitHub. See `CLAUDE.md` for the full architecture guide and
collaboration rules — **read it before editing.**

Only `team-profile-flow.html` is hand-edited.
`team-profile-prototype-shareable.html` is generated from it.

## Files

| File | What it is |
|------|------------|
| `team-profile-flow.html` | The prototype. **Source of truth — edit this.** |
| `team-profile-prototype-shareable.html` | Generated copy for sharing. Don't hand-edit. |
| `CLAUDE.md` | Architecture, screen list, and how to add a flow. |
| `*/**.png` | Design mockups per flow. |

## Sharing with people outside the repo

There's no hosted URL for this prototype. GitHub Pages needs either a public repo
or an Enterprise-owned one, and this repo is intentionally private on a personal
account.

To share with someone who isn't a collaborator, either add them to the repo
(**Settings → Collaborators**), or send them
`team-profile-prototype-shareable.html` as a file attachment — it's fully
self-contained and opens in any browser.
