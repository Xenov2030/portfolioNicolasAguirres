import assert from "node:assert/strict";
import { stripVTControlCharacters } from "node:util";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout } from "node:timers/promises";
import { pages, origin } from "../src/data/seo.js";
const base = "http://127.0.0.1:4193";
const preview = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    "4193",
    "--strictPort",
  ],
  { cwd: new URL("../", import.meta.url), stdio: ["ignore", "pipe", "pipe"] },
);
let logs = "";
preview.stdout.on("data", (chunk) => (logs += chunk));
preview.stderr.on("data", (chunk) => (logs += chunk));
try {
  let ready = false;
  for (let i = 0; i < 50; i++) {
    if (preview.exitCode !== null) throw new Error(logs);
    // Never accept a different process already using this port.
    if (stripVTControlCharacters(logs).includes(base)) {
      ready = true;
      break;
    }
    await setTimeout(100);
  }
  assert(ready, `Preview did not start: ${logs}`);
  for (const page of pages)
    for (let attempt = 0; attempt < 2; attempt++) {
      const response = await fetch(base + page.path);
      assert.equal(response.status, 200);
      assert(response.headers.get("content-type").includes("text/html"));
      assert(!/noindex/i.test(response.headers.get("x-robots-tag") || ""));
      const html = await response.text();
      assert(html.includes(`<title>${page.title}</title>`));
      assert(html.includes(`rel="canonical" href="${origin}${page.path}"`));
      assert.equal((html.match(/<h1\b/g) || []).length, 1);
    }
  assert.equal(
    (await fetch(base + "/no-existe-comprobacion-http/")).status,
    404,
  );
  for (const path of [
    "/robots.txt",
    "/sitemap.xml",
    "/Nicolas_Aguirres_CV.pdf",
  ])
    assert.equal((await fetch(base + path)).status, 200);
  console.log(
    "HTTP preview checks passed: three direct routes, repeat requests, metadata, resources and a real 404. Apache redirects require post-deploy verification.",
  );
} finally {
  if (preview.exitCode === null) {
    const closed = once(preview, "exit");
    preview.kill("SIGTERM");
    await closed;
  }
}
