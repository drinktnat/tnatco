# TNAT Chocolate

Pre-launch refrigerated whey isolate shake website for TNAT Co. LLC.

## Product decisions
- Monk fruit extract only. Seven proposed ingredients.
- Nutrition is calculated, not lab-tested. Process and shelf life are development targets.
- No checkout, preorder, certification, or health claims.

## Development
Use the existing Node 22+ / pnpm dependencies. `pnpm dev`, `pnpm build`, `pnpm test`.

## Waitlist activation
The custom React form calls `/api/waitlist`. The server uses Kit v4; no API keys reach the browser.
Set production secrets with Sites environment management:
- `KIT_API_KEY`: a Kit v4 API key (secret)
- `KIT_FORM_ID`: numeric ID for the launch waitlist form
Set the matching local `.env` keys only for local integration testing. `.env.example` contains blank values.
Create the form in Kit and configure its incentive/confirmation email and sender before enabling live signups. The integration creates an inactive subscriber, then subscribes that address to the designated form; existing subscribers are not forcibly reactivated. Verify Kit form confirmation settings with an owner-authorized test signup before calling the waitlist live.
Missing configuration returns 503 with an honest user-visible message; no signup is falsely confirmed.

Wholesale uses the existing FormSubmit destination contact@tnatco.com. Verify mailbox activation and real delivery with an owner-authorized test before relying on it.

## Sources
- https://developers.kit.com/api-reference/subscribers/create-a-subscriber
- https://developers.kit.com/api-reference/forms/add-subscriber-to-form-by-email-address
- https://www.premierprotein.com/products/chocolate-protein-shake
- https://fairlife.com/core-power/chocolate-protein-shake/

Competitor labels checked September 22, 2026. Bottle image is an AI-generated packaging concept.

## Founder and positioning
Trevor Natalie is the founder and owner. Business location: Stuart, Florida. Founder photo and Hofstra game photo are user-supplied. LinkedIn link recovered from the original site.
Monk fruit dose remains in testing; the previous blended-sweetener dose is not treated as a pure-extract quantity.
