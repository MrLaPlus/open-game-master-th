// Compile the actual odds import graph for a browser. Node built-ins must
// never enter it, including imports a permissive bundler would externalize.
import assert from "node:assert/strict";
import { isBuiltin } from "node:module";
import path from "node:path";
import { build } from "vite";

const result = await build({
  configFile: false,
  logLevel: "error",
  resolve: { alias: { "@": path.resolve("src") } },
  plugins: [{
    name: "reject-node-builtins-in-browser",
    enforce: "pre",
    resolveId(id, importer) {
      if (isBuiltin(id)) throw new Error(`Browser imports ${id} from ${importer}`);
    },
  }],
  build: {
    write: false,
    minify: false,
    lib: { entry: { odds: path.resolve("src/lib/srd/odds.ts"), compare: path.resolve("src/lib/reference/compare.ts") }, formats: ["es"] },
  },
});
const outputs = Array.isArray(result) ? result : [result];
assert.ok(outputs.some((output) => output.output.some((part) => part.type === "chunk" && part.isEntry)));
console.log("Dice browser boundary: real odds/reference dependency graphs contains no Node built-ins.");
