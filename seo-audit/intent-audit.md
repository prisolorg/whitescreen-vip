# whitescreen.vip homepage: search-intent audit

Date: 18 Nov 2026. Scope: `https://whitescreen.vip/` (English). Report only: nothing on the site has been changed.

**Data used**
- Google Search Console, Web search, last 3 months, filtered to the homepage. A per-query breakdown by page was used to check for cannibalization.
- Your homepage Chart.csv (17 Aug – 16 Nov).
- A GSC comparison of 14–17 Nov against 7–10 Nov.
- `gsc-queries.csv` was not in the project, so I pulled the same columns from GSC directly.
- `serp-overlap.csv` has not been supplied. Because of that, every intent call below is **NEEDS SERP CHECK**. None of them is a guess.

**Rule 5:** /de/, /it/ and other language versions also get impressions for "white screen". They are hreflang translations, so they are excluded.

---

## Pairs I need you to check in Google

For each pair, search both terms in an incognito window (US English) and count how many of the top 10 URLs appear in both result lists:
- 3 or more shared = same intent
- 0–1 shared = different intent
- exactly 2 shared = I'll mark it MANUAL CHECK

| # | Homepage query | Compare with | Why it matters |
|---|---|---|---|
| 1 | white screen | white screen test | Homepage is at p14.4 for this; a test page may fit better |
| 2 | white screen | white screen for tracing | 3.5K impressions in the tracing/lightbox group; a tracing guide exists |
| 3 | white screen | lightbox online | Same group as #2 |
| 4 | white screen | flashlight online | Largest off-topic group (about 13K impressions) |
| 5 | white screen | white screen for x ray | 1.6K impressions, 49 clicks, ranks p3.5–5.8 |
| 6 | white screen | white screen for cleaning | 271 impressions, 0 clicks, p9.6–11.4; a cleaning guide exists |
| 7 | white screen | white screen background | 4K impressions; a White Background page exists |
| 8 | white screen | makeup light screen | 587 impressions in the makeup/call group |
| 9 | white screen | bright screen | Checks whether "bright screen" queries belong on the homepage |

---

## 1. Inventory

| Field | Value |
|---|---|
| URL | https://whitescreen.vip/ |
| lang | en |
| title | White Screen - Open Full Screen For Bright Display Online (Free) (64 chars) |
| H1 | White Screen |
| meta description | Open a bright white screen in full screen with 1 click. Use it for Zoom lighting, video calls, photography, monitor cleaning and dead pixel tests. Free. |
| slug | `/` |
| primary keyword | white screen |
| other keywords in title / H2s | full screen, bright display, online, free (title)<br>what is a white screen, bright white screen, blank white screen, white screen for light, white screen background, white screen test, white screen problems (H2s) |

### Top 10 GSC queries for the homepage

Source: GSC, Web search, page = homepage. The 3-month position is shown where I recorded it. The 4-day columns compare 7–10 Nov with 14–17 Nov.

| Query | Impressions 7–10 Nov | Impressions 14–17 Nov | Position 7–10 Nov | Position 14–17 Nov |
|---|---|---|---|---|
| white screen | 21,054 | 1,665 | 9.3 | 9.6 |
| white screen online | 1,287 | 570 | 5.8 | 7.3 |
| white screen bright | 1,357 | 72 | 8.9 | 9.4 |
| white screen for light | 796 | 214 | 9.5 | 9.3 |
| white light screen | 348 | 217 | 8.0 | 9.2 |
| bright screen light | 151 | 39 | 9.6 | 8.8 |
| white flash screen | 85 | 57 | 8.6 | 9.3 |
| white screen for x ray reading | 13 | 14 | 4.7 | 4.9 |
| white screen for x ray | 3 | 12 | 4.0 | 3.5 |
| white background for x ray view | 6 | 10 | 6.3 | 5.2 |

### Use-case groups the homepage ranks for (3 months)

| Group | Impressions | Note |
|---|---|---|
| flash / flashlight | ~13K | No flashlight page exists |
| background | ~4K | backgrounds/white-background exists |
| tracing / lightbox | ~3.5K | "white screen for tracing": homepage 836 impressions at p8.0 |
| x-ray | ~1.6K | 49 clicks; best CTR on the page |
| makeup / call light | ~587 | zoom-lighting and ring-light exist |
| white screen test | ~354 | Homepage at p14.4 |
| cleaning | ~271 | 0 clicks, p9.6–11.4 |

**Traffic note (not an intent problem):** daily homepage impressions:
- 5–13 Nov: 9–12K a day
- 14 Nov: 2,134
- 15 Nov: 1,881
- 16 Nov: 1,241

Average position stayed at 8.7–8.9 throughout. Almost the whole drop is the single query "white screen" (21,054 → 1,665), which held position 9.3 → 9.6. A drop in impressions at an unchanged position usually means Google showed the result less often, for example a SERP layout change or fewer results counted on page 1. It does not mean another page took over: no other English page picked up those impressions. Keep watching; no action proposed.

---

## 2. Flags

### STUFFED TITLE: yes
- **Evidence:** "White Screen - Open Full Screen For Bright Display Online (Free)" repeats "Screen". It also stacks four modifiers (full screen, bright display, online, free) and doesn't follow your format "Primary | one secondary | whitescreen.vip". At 64 characters it is over the ~60 limit.
- **Conflict to flag:** you picked this title on purpose, to match the "full screen, bright, online" intent. Your new format rule removes most of those words. You need to decide which rule wins (see the fixes section).

### MIXED INTENT: possible, NEEDS SERP CHECK
The homepage ranks for several use cases that may each be a separate intent:

| Use case | Evidence (GSC) | Status |
|---|---|---|
| flashlight | ~13K impressions | NEEDS SERP CHECK (#4) |
| tracing / lightbox | ~3.5K impressions, p8.0 | NEEDS SERP CHECK (#2, #3) |
| background | ~4K impressions | NEEDS SERP CHECK (#7) |
| x-ray | ~1.6K impressions, 49 clicks, p3.5–5.8 | NEEDS SERP CHECK (#5) |
| makeup / call light | ~587 impressions | NEEDS SERP CHECK (#8) |
| test | ~354 impressions, p14.4 | NEEDS SERP CHECK (#1) |
| cleaning | ~271 impressions, 0 clicks | NEEDS SERP CHECK (#6) |

**H2 "White Screen Problems and How to Fix Them" (corrected 18 Nov after reading the section):** the body is about fixing this tool when it misbehaves: the page stays blank, fullscreen won't open, white looks yellow, or the white doesn't fill the display. That is the same intent as the rest of the page. Only the heading text could be read as "white screen of death" troubleshooting. Renamed to "White Screen Not Working? Quick Fixes" on 18 Nov (approved; not deployed yet). Not a mixed-intent flag.

**Article-level verdict:** one intent, "open and use a white screen now".
- About 770 of the roughly 1,500 article words are direct tool use: What Is, How to Use, Bright, Blank, and For Light.
- The Background (62 words) and Test (113 words) sections are short support sections that hand off to their own pages.
- The FAQ answers questions about using the tool.

### CANNIBALIZATION: none confirmed
I checked each main query against rule 3 (a + b + c). The homepage is the only English page that gets impressions for every head query. Two queries had a second page:

| Query | Pages and positions | (a) 2+ pages | (b) same intent | (c) cost | Result |
|---|---|---|---|---|---|
| white screen for tracing | Homepage: 836 impressions, p8.0<br>Tracing guide: 5 impressions, p12.6 | yes | NEEDS SERP CHECK | no: homepage is stable in the top 10 | Not cannibalization |
| white screen test | Homepage: p14.4<br>/guides/: 22 impressions, p63.6<br>/guides/screen-uniformity-test/: 4 impressions, p35.8 | yes | NEEDS SERP CHECK | possible: all pages are below 10 | **Pending pair #1.** Even if confirmed, the other pages' share is tiny (26 impressions), so the fix is a link, not a merge |

### WRONG PAGE TYPE: possible, NEEDS SERP CHECK
| Query | Concern | Status |
|---|---|---|
| white screen test | Searchers may want a test tool (monitor-test, dead-pixel-test) rather than a plain white screen. The homepage is stuck at p14.4 | NEEDS SERP CHECK (#1) |
| white screen for cleaning | The tool page ranks, but the cleaning guide (a how-to) may be the type Google prefers. 0 clicks so far | NEEDS SERP CHECK (#6) |

---

## 3. Proposed fixes (not applied)

### Homepage title, H1 and description
The hard limits apply: the primary keyword stays "white screen", the URL stays `/`, and the main copy stays as it is.

**Title.** Your format takes one secondary keyword with the same intent. The best-supported secondaries are "white screen online" (570–1,287 impressions) and "white screen for light" / "white light screen". Using "Online" repeats nothing, which is why it leads the options.

| Option | Title | Length |
|---|---|---|
| A (recommended) | White Screen \| Bright Light Online \| whitescreen.vip | 52 |
| B | White Screen \| Online Light for Calls \| whitescreen.vip | 55 |
| C (keeps your full-screen angle; breaks the no-repeat rule on "Screen") | White Screen \| Bright Full Screen Light \| whitescreen.vip | 57 |

**Decision (18 Nov):** you approved Option C. It is applied in `ui-translations.ts` and `meta.ts` and verified in the build, but not deployed yet.

**H1:** keep "White Screen". It already matches.

**Description:** keep the current one (deployed 21c26d7). It starts with the primary keyword's intent, lists real uses and ends with "Free". No change needed unless the title changes the angle.

**Slug:** `/`. No change.

### Where the off-intent keywords should go
Do this only if the SERP check says they are a different intent. If the check comes back "same intent", leave them on the homepage.

| Keyword group | Destination |
|---|---|
| white screen test | Existing **monitor-test** ("Screen Test") or **dead-pixel-test**. Add a link from the homepage "White Screen Test" H2 |
| white screen for tracing / lightbox online | Existing **guides/fullscreen-white-screen-for-drawing-and-tracing** |
| white screen for cleaning | Existing **guides/how-to-use-white-screen-for-monitor-cleaning** |
| white screen background | Existing **backgrounds/white-background** |
| makeup / call light | Existing **zoom-lighting** and **ring-light** |
| flashlight online | No page exists → **new page needed**, slug `/flashlight` (pending SERP check #4) |
| white screen for x ray | No page exists → **new page needed**, slug `/x-ray-viewer` (pending SERP check #5). The homepage already wins here (p3.5–5.8, best CTR), so the risk of moving this is higher than the gain. Leaning: keep it on the homepage |

### Merges or 301s
None. No cannibalization meets rule 3.

### Internal links to add (guide → tool)
Each anchor is the target page's H1.

| From | To | Anchor |
|---|---|---|
| guides/fullscreen-white-screen-for-drawing-and-tracing | `/` | White Screen |
| guides/how-to-use-white-screen-for-monitor-cleaning | `/` | White Screen |
| guides/screen-uniformity-test | `/monitor-test` | Screen Test |
| /guides/ (hub) | `/monitor-test` | Screen Test |
| Homepage H2 "White Screen Test" (link only; main copy unchanged) | `/monitor-test` | Screen Test |

*Before adding any of these, I'll check whether the link is already there.*

---

**Waiting for you:** the SERP counts for pairs 1–9, and a choice of title option (A, B or C). Nothing changes until you approve.
