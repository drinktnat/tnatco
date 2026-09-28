# beeast — Palmetto Honey Protein Milk

Pre-launch website for beeast, based in Stuart, Florida. Public domain and contact inbox remain drinktnat.com and contact@drinktnat.com. TNAT Co. LLC remains the legal operator.

## Current product direction
- Refrigerated 12 fl oz protein milk, with a 30g+ protein target and a full serving of palmetto honey.
- Filtered water, fat-free ultra-filtered milk, whey protein concentrate, palmetto honey, pure vanilla extract and sea salt. Contains milk. Commercial supplier subingredients are pending.
- All nutrition values are prototype estimates, pending commercial specifications and finished-product analysis.
- Pasteurization/extended-shelf-life processing and refrigerated shelf life are under evaluation.
- No raw-honey or lactose-free product claim. Recipe quantities and processing parameters stay private.
- Waitlist and team inquiries only; no checkout or preorders.

## Development
Use the existing Node 22+ / pnpm dependencies. `pnpm dev`, `pnpm build`, `pnpm test`.

## Submission storage
The custom forms call `/api/waitlist` and `/api/teams`. Both validate requests server-side and persist submissions in the Sites-managed Cloudflare D1 binding `DB`. Drizzle schema and migrations are checked in. Success is shown only after a completed write; duplicate waitlist emails are normalized and ignored. Private submission data has no public read endpoint.

Waitlist records include email, timestamp, consent version, and source form. Team inquiries include name, organization, role, monthly bottle volume, email, and response consent. The site owner can inspect records in the Sites database viewer. Email campaigns and automatic inbox notifications are not configured. Connecting an email platform later requires consent-preserving import/sync and unsubscribe support.

The earlier Kit path remains as a fallback when no D1 binding exists. It requires `KIT_API_KEY` and `KIT_FORM_ID`; setting those secrets while D1 is active does not automatically synchronize subscribers. No credentials reach the browser.

## Validation
`node --test tests/rendered-html.test.mjs` after building verifies routes, copy guardrails, storage, duplicate handling, malformed submissions, and failure responses. Runtime declarations are generated with Wrangler; `tsc --noEmit --incremental false` checks types. Responsive navigation and both form flows have also been exercised through the browser against local D1.

## Sources and assets
- UF/IFAS saw palmetto: https://gardeningsolutions.ifas.ufl.edu/plants/trees-and-shrubs/palms-and-cycads/saw-palmetto/
- UF/IFAS honey: https://ask.ifas.ufl.edu/publication/AA154
- FAO honey composition: https://www.fao.org/4/w0076e/w0076e04.htm
- FDA added sugars: https://www.fda.gov/media/127968/download

Bottle and logo assets are AI-assisted edits of the founder-supplied beeast reference. Packaging is conceptual. Founder photos are user-supplied. Trevor Natalie is the founder and owner; his Hofstra credentials are retained on the story page.
