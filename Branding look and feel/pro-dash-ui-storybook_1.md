# Pro Dash — UI Style Guide & Storybook Reference

**Product:** realtor.com for Professionals — Dashboard ("Pro Dash")
**Page:** Home
**Source:** `Pro_Dash_-_Home.png`

---

## 1. Overview

Pro Dash is the agent-facing dashboard home screen for realtor.com's professional tools suite. The layout follows a persistent left navigation rail + top utility bar, with a scrollable main content area composed of modular "card" panels (leads, tasks, contacts, team, performance).

**Design language:** Clean, editorial, whitespace-driven. Minimal chrome, no heavy borders or shadows — panels are separated mostly by background-color contrast and generous padding rather than strong drop shadows.

---

## 2. Layout Structure

```
┌───────────────────────────────────────────────────────────┐
│ Utility Bar (dark, 32px)                                  │
├───────────────────────────────────────────────────────────┤
│ Header Bar (white, logo + welcome/avatar)                 │
├───────────┬─────────────────────────────────┬─────────────┤
│           │  Suggested Follow-ups (span 2)  │ Recent Leads│
│  Left     ├─────────────────┬───────────────┤  (carousel) │
│  Nav      │  Profile Card   │  Tasks Card   │             │
│  Rail     ├─────────────────┴───────────────┴─────────────┤
│  (fixed)  │  Listing Performance            │ Agent Bio   │
└───────────┴─────────────────────────────────┴─────────────┘
```

- **Grid:** 12-column responsive grid; main content splits roughly 65% / 35% for two-column card rows.
- **Left nav width:** ~256px, fixed/sticky.
- **Content max-width:** fluid, contained with ~24px outer margins and ~24px gutters between cards.
- **Card corner radius:** none/sharp (0px) — panels are flush rectangles, not rounded cards.
- **Card background:** white / very light gray (`#FAFAFA`–`#F5F5F5`) alternating against page background (`#EDEDED`-ish gray).

---

## 3. Color Palette

| Token | Hex (approx) | Usage |
|---|---|---|
| `brand-red` | `#D6001C` | "realtor.com" logo mark |
| `text-primary` | `#222222` | Headings, names, primary body text |
| `text-secondary` | `#767676` | Meta text (timestamps, labels, subtext) |
| `link-blue` | `#1B5FBD` / `#0059B3` | Text links ("View all tasks", "Manage profile") |
| `alert-red` | `#C0392B` | "overdue" stat, urgency indicators |
| `badge-blue` | `#2F6FE4` | "New" pill badge |
| `badge-green` | `#1F8A3B` | "New" tag on lead image overlay |
| `surface-page` | `#EDEDED` | App background |
| `surface-card` | `#FFFFFF` | Card backgrounds |
| `surface-subtle` | `#F5F5F5` / `#FAFAFA` | Nested/secondary panel fill (e.g. contact strip) |
| `divider` | `#E0E0E0` | Hairline separators between nav items / card sections |
| `topbar-dark` | `#3C3C3C` | Top utility bar background |

---

## 4. Typography

| Style | Weight | Approx Size | Usage |
|---|---|---|---|
| Display number | Light/Regular | 48–56px | Big stat figures ("3", "99+", "12", "8") |
| Card title | Regular | 18–20px | "Suggested follow-ups", "Tasks", "Listing performance" |
| Body / name | Medium | 16px | Contact names, agent names |
| Body text | Regular | 14px | Descriptions, addresses, emails |
| Meta / caption | Regular | 12–13px | Timestamps, "past 3 days", "Source: realtor.com" |
| Nav label | Regular | 14–15px | Left sidebar items |
| Link | Regular, underline-on-hover | 14px | Blue action links |

Font family reads as a standard humanist sans (system sans-serif stack, e.g. Helvetica Neue / Arial-like), consistent across all UI text.

---

## 5. Navigation Components

### 5.1 Utility Bar (top, dark)
- Height: ~32px
- Left: text links — `Go to realtor.com`, `Homepage`, `Your profile`, `Your listings`
- Right: `Purchase products` link
- Text color: light gray/white on dark background, small caps-free label style

### 5.2 Header Bar (white)
- Logo: "realtor.com" wordmark (red "realtor", black ".com") + superscript ® + " for Professionals" in gray
- Right-aligned: "Welcome" label + user first name ("Kelly") + circular avatar + dropdown chevron
- Thin brand-color divider (indigo/blue, ~3px) under header bar

### 5.3 Left Sidebar Nav
- Vertical list, left-aligned text, ~16px vertical padding per item
- Top-level items: Home, Contacts, Tasks, Listings, Listing Presentations
- Divider
- Expandable sections (chevron toggle): Profile, Performance, My Team (with "New" badge — blue pill)
- My Team expanded sub-items (indented): Branding Team Profile (with blue dot indicator), Realtor Team Profile, Realtor Team Members
- Divider
- Bottom items: Purchase Products, My Products, Billing (expandable), Help (expandable)
- Active/current state: not visibly highlighted in this screenshot (flat list); consider adding an active-state treatment (bold text or left accent bar) in implementation.

---

## 6. Card Components (Molecules)

### 6.1 Suggested Follow-ups Card
- Header row: Title left, "4 more" link right
- Nested sub-panel (light gray) containing:
  - Circular avatar initials badge ("DH")
  - Contact name (bold) + inquiry description
  - Timestamp, right-aligned ("15 min ago")
  - Dismiss "✕" icon, top-right
  - CTA text link: "Follow-up with Dorothy"
  - Footer strip (contact row): phone number + email, separated by spacing, on a slightly darker sub-background

**States:** dismissible (✕), expandable ("4 more"), contact-detail reveal footer.

### 6.2 Recent Leads Card (carousel)
- Hero image (property photo) with overlay badges: relative time ("1 min ago", light pill) top-left, "New" tag (green) top-right
- Circular initials avatar overlapping image bottom edge ("CB")
- Name (bold, large)
- Email (gray)
- Address (gray)
- Price (bold, black)
- Source label (gray, small): "Source: realtor.com®"
- Primary button: "View details" (outlined/bordered button, full-width-ish, sharp corners)
- Carousel pagination dots at bottom (4 dots, active = solid black, inactive = light gray)

### 6.3 Profile / Team Member Card
- Photo thumbnail (square, left) + Name (right, bold)
- Definition-list style rows: "Email" / "Phone" labels (gray, left column) with values (right column); Phone splits into Mobile / Office sub-rows
- Footer link: "Manage profile" (blue)

### 6.4 Tasks Card
- Title: "Tasks"
- Three-stat row, evenly spaced:
  - Big number + label + sub-caption (e.g. "3" / "due today")
  - "99+" / "overdue" (red) / "past 3 days"
  - "12" / "coming up" / "next 7 days"
- Footer link: "View all tasks" (blue)

### 6.5 Listing Performance Card
- Header row: Title left, "Last 30 days" meta right
- Large stat: "8" (big numeral) + "total listings" (label, same baseline)

### 6.6 Agent Bio Card (sidebar, small)
- Circular/square photo (top or left)
- Agent name (bold): "Kelly Agent"
- Tagline/quote text (gray, italic-style tone): "Real estate is more than a people business, it's REAL business."

---

## 7. UI Elements (Atoms)

| Element | Notes |
|---|---|
| Avatar (photo) | Circular, used for user/agent/contact photos |
| Avatar (initials) | Circular, gray fill, white initials — fallback when no photo |
| Badge — "New" (pill, blue) | Used in nav (My Team) |
| Badge — "New" (tag, green) | Used on lead image overlay |
| Badge — timestamp pill | Semi-transparent dark pill on image, white text |
| Button — outlined | "View details" — black border, white fill, sharp corners, medium padding |
| Link — text | Blue, no underline by default (assume underline on hover/focus) |
| Divider | 1px hairline, light gray, used between nav groups and card sections |
| Icon — dismiss (✕) | Simple line icon, gray, top-right of dismissible items |
| Icon — chevron (expand/collapse) | Used in nav for Profile/Performance/My Team/Billing/Help |
| Pagination dots | Carousel indicator, active = filled dark, inactive = light gray outline/fill |

---

## 8. Spacing & Sizing (approximate)

- Base spacing unit: 8px
- Card internal padding: 24px
- Card-to-card gutter: 20–24px
- Section vertical rhythm: 24–32px between major rows
- Avatar sizes: 32px (nav/header), 40px (list initials), 56–64px (profile/lead cards)

---

## 9. Component Naming (Suggested Storybook Structure)

```
components/
├── layout/
│   ├── UtilityBar
│   ├── HeaderBar
│   └── SidebarNav
│       └── SidebarNavItem (with optional Badge, Chevron, nested list)
├── cards/
│   ├── FollowUpCard
│   │   └── ContactFooterStrip
│   ├── LeadCarouselCard
│   │   ├── LeadImageOverlay (TimeBadge, NewBadge)
│   │   └── PaginationDots
│   ├── ProfileSummaryCard
│   ├── TaskSummaryCard
│   │   └── StatBlock (number, label, caption, tone: default | alert)
│   ├── ListingPerformanceCard
│   └── AgentBioCard
├── atoms/
│   ├── Avatar (photo | initials)
│   ├── Badge (pill | tag)
│   ├── Button (outlined)
│   ├── TextLink
│   └── Divider
```

---

## 10. Notes / Open Questions for Implementation

- No visible "active" nav state in this screenshot — define hover and active/selected treatments.
- Confirm exact hex values against brand style guide / design tokens file if available.
- "99+" overdue stat implies a numeric cap/truncation pattern — define threshold logic.
- Carousel card ("Recent leads") implies multiple lead entries — define data model and swipe/click interaction for dots.
