# TNAT Chocolate

Pre-launch refrigerated whey isolate shake website for TNAT.

## Product decisions
- Monk fruit extract only. Seven ingredients in development.
- Nutrition is calculated, not lab-tested. Process and shelf life are development targets.
- No checkout, preorder, certification, or health claims.

## Development
Use the existing Node 22+ / pnpm dependencies. `pnpm dev`, `pnpm build`, `pnpm test`.

## Submission storage
The custom forms call `/api/waitlist` and `/api/teams`. Both validate requests server-side and persist submissions in the Sites-managed Cloudflare D1 binding `DB`. Drizzle schema and migrations are checked in. Success is shown only after a completed write; duplicate waitlist emails are normalized and ignored. Private submission data has no public read endpoint.

Waitlist records include email, timestamp, consent version, and source form. Team inquiries include name, organization, role, monthly bottle volume, email, and response consent. The site owner can inspect records in the Sites database viewer. Email campaigns and automatic inbox notifications are not configured. Connecting an email platform later requires consent-preserving import/sync and unsubscribe support.

The earlier Kit path remains as a fallback when no D1 binding exists. It requires `KIT_API_KEY` and `KIT_FORM_ID`; setting those secrets while D1 is active does not automatically synchronize subscribers. No credentials reach the browser.

## Validation
`node --test tests/rendered-html.test.mjs` after building verifies routes, copy guardrails, storage, duplicate handling, malformed submissions, and failure responses. Runtime declarations are generated with Wrangler; `tsc --noEmit --incremental false` checks types. Responsive navigation and both form flows have also been exercised through the browser against local D1.

## Sources
- https://developers.kit.com/api-reference/subscribers/create-a-subscriber
- https://developers.kit.com/api-reference/forms/add-subscriber-to-form-by-email-address
- https://www.premierprotein.com/products/chocolate-protein-shake
- https://fairlife.com/core-power/chocolate-protein-shake/

Competitor labels checked September 22, 2026. Bottle image is an AI-generated packaging concept.

## Founder and positioning
Trevor Natalie is the founder and owner. Business location: Stuart, Florida. Founder photo and Hofstra game photo are user-supplied. LinkedIn link recovered from the original site.
Monk fruit dose remains in testing; the previous blended-sweetener dose is not treated as a pure-extract quantity.
