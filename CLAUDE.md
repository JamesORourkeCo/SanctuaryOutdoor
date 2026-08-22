sanctuaryoutdoor.com landscaping web site. Version 2.0 (2026-08-22, first governed session close)

CORE SEO STRATEGY (unchanged, controlling)
Landing pages for cities within 60 miles link back to the home page.
Semantic (syntactical) word-matching linking is the primary SEO
approach, not hyperlinks — no hyperlinks between cluster sibling
pages, ever. Kingman AZ is the primary landing page; product pages
link back to it. Proven: #1 organic without paid ads or GBP; jobs
sourced via ChatGPT and Siri recommendations.

GOVERNANCE STATUS
mandatory.md v2.3 + 2026-08-21 addendum; featureadditionprocess.md
v0010. Standing preambles: sowebsitephaseastandingpreamblev0001.md,
sowebsitephasebstandingpreamblev0002.md (v0002 adds page-specific
backup naming — every page is index.html, so backups MUST carry the
location/product prefix, e.g. bullhead-city-index.html.0003).
Git is OPERATOR-ONLY; terminal agents never run git. All agent work
targets the local copy at /mnt/d/apps/sowebsite/code; operator alone
pushes. Backups live at /mnt/d/apps/sowebsite/ root, never in code/.
Terminal model: Fable 5 High for judgment work; Sonnet 5 High for
mechanical read-only passes. Model/effort requires operator approval.

SITE FACTS (as of session close)
19 index.html files: root, 6 location hubs, 11 Kingman service pages
(greenhouse added this session, clustered with irrigation), 1
golden-valley/backyarddrainage redirect stub (JS redirect, no footer,
intentionally untouched, excluded from sitemap). Three clusters:
irrigation (drip, bubble, sprinkler, greenhouse), ground cover (turf,
sod, rock), hardscape (pergola, flagstone, concrete);
backyard-drainage standalone. Section 4 cluster phrases implemented
verbatim in intros. All titles use "[Service] in Kingman & Northwest
Arizona | Sanctuary Outdoor". All meta descriptions ≤155 chars. All
17 subpage footers byte-identical (copyright last line, en dash,
&amp;, download attr, Kingman Landscape Services link incl. self-link
on kingman hub); homepage keeps its unique richer footer. Gallery
rule: >2 images = carousel pattern, no visible captions anywhere (alt
text carries description); shared JS at assets/js/carousel-lightbox.js
+ accordion-one-open.js, referenced per page in that order; every
carousel page has the verified #lightbox block (homepage markup is
the canonical template). Reviews: 6 on root (schema + visible
accordion, NO reviewRating, NO fabricated dates); Albertus duplicated
on bullhead-city, Shelly on drip-irrigation + greenhouse. HOA FAQ on
bullhead-city (source) + root. No GBP by operator decision
(competitor-manipulation risk, no fixed address).

LESSONS LEARNED THIS SESSION
1. Every page is named index.html — generic backup suffixes collide.
   Page-prefixed backup names are mandatory (preamble v0002).
2. The homepage's inline carousel/lightbox script was truncated IN
   PRODUCTION for months (arrows/lightbox silently dead; CSS
   scroll-snap masked it). Recovery came from completing a pattern
   already present twice in the same file — never fabricate missing
   code; find or derive from verified source. Then centralize:
   shared JS files prevent per-page copies drifting or truncating.
3. Changing a <title> means syncing og:title, twitter:title, and
   WebPage schema name/description in the same touch — they silently
   go stale otherwise (cost a second pass on 5 pages).
4. Batch by PAGE, not by category — one backup/verify cycle per file;
   parallel launches are safe only across disjoint files.
5. Audit findings go stale: bullhead-city's "missing canonical/meta"
   was wrong by execution time; rock's "working Reviews link" never
   existed. Agents must re-verify live state and STOP on mismatch —
   which they did, repeatedly, correctly.
6. `cat` on a missing handoff file fails silently into the prompt —
   9 launches ran with preamble only. Verify files exist on disk
   (dir *.md) before launching a batch.
7. Character limits: wc -c counts bytes; em dashes are 3 bytes.
   Count characters for meta-description limits.
8. FAQ/review content must exist BOTH as schema and visible markup —
   either alone is a compliance gap (found in both directions).
9. Fabricated data is a liability: hardcoded 5-star reviewRating and
   aggregateRating with no collected ratings violate Google review
   policy — removed everywhere; never invent dates or ratings.

OPEN ITEMS (next session)
1. Codemap: build codemap/INDEX.md + chapter files from the full
   audit's Step 4 schema inventory (page | canonical | title | meta |
   schema types) plus the linking-strategy chapter from the four
   2026-01-25 plan documents.
2. Off-site authority: directories/citations/local press — the
   largest remaining SEO ceiling; also the top AI-recommendation
   lever per research (third-party mentions beat markup).
3. Optional: llms.txt at root (OpenAI/Anthropic/Perplexity honor it);
   visible "last updated" freshness dates.
4. Operator pending: push; Search Console priority requests
   (root, kingman hub, greenhouse, drip-irrigation, 5 city hubs);
   GSC check on the golden-valley redirect stub before any deletion;
   visual check of hualapai img16/001.jpg aspect class
   (landscape-3-2 was an unverified guess).
5. Meta descriptions and titles are now LOCKED per the original plan
   convention — changes require explicit operator approval.

SESSION-CLOSE REMINDER (standing rule): confirm no GitHub references
exist in this file — none do as of this version.
