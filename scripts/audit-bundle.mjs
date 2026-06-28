import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const html = await readFile("dist/index.html", "utf8");
const assetNames = await readdir("dist/_astro");
const islandMatches = [...html.matchAll(/component-url="([^"]+)"/g)].map((match) => match[1]);
const unexpectedIslands = islandMatches.filter((url) => !url.includes("contact-form"));
const hasContactIsland = islandMatches.some((url) => url.includes("contact-form"));
const reactAssets = assetNames.filter((name) => /react|client|contact-form/i.test(name));

if (!hasContactIsland) {
  throw new Error("Expected contact-form React island was not found in dist/index.html.");
}

if (unexpectedIslands.length > 0) {
  throw new Error(`Unexpected hydrated islands found: ${unexpectedIslands.join(", ")}`);
}

console.log("Bundle audit passed.");
console.log(`Hydrated islands: ${islandMatches.length}`);
console.log(`React-related assets: ${reactAssets.map((name) => join("_astro", name)).join(", ")}`);
