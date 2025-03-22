import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/myCalc.ts"],
    format: ["cjs", "esm"],
    dts: true,
});