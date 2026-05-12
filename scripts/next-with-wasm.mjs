import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const wasmDir = path.join(root, "node_modules", "@next", "swc-wasm-nodejs");

const child = spawn(process.execPath, [nextBin, ...process.argv.slice(2)], {
  cwd: root,
  env: {
    ...process.env,
    NEXT_TEST_WASM_DIR: process.env.NEXT_TEST_WASM_DIR || wasmDir,
  },
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
