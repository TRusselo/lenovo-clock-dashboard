import { test } from "node:test";
import assert from "node:assert/strict";

test("lists itself in the dashboard picker's custom strategies", async () => {
  globalThis.window = { customStrategies: [] };
  await import("../kiosk-clock-strategy.js?register");
  const entry = window.customStrategies.find((s) => s.type === "kiosk-clock");
  assert.equal(entry.strategyType, "dashboard");
  assert.ok(entry.name);
  delete globalThis.window;
});
