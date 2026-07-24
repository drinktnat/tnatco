import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the TNAT Co. website and current pricing", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>TNAT Co\. \| Look Professional\. Get Found\. Stay Busy\.<\/title>/i);
  assert.match(html, /\+ \$199\/year hosting/);
  assert.match(html, /\+ \$179\/month/);
  assert.match(html, /\+ \$299\/month/);
  assert.doesNotMatch(html, /Your site is taking shape|Codex is working/i);
});

test("keeps the current website field optional and the service choices focused", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Current website or social page/);
  assert.match(html, /— optional/);
  assert.match(html, /example\.com or instagram\.com\/yourbusiness/);
  assert.match(html, /Leave this blank if you do not have one yet/);
  assert.doesNotMatch(html, /Photo \+ video content only/);
  assert.doesNotMatch(
    html,
    /<input(?=[^>]*name="Current website or social page")(?=[^>]*\srequired(?:\s|=|>))[^>]*>/i,
  );
});
