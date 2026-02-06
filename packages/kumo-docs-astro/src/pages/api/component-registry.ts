import type { APIRoute } from "astro";
import { readFileSync } from "node:fs";

const componentRegistry = JSON.parse(
  readFileSync(
    new URL("../../../../kumo/ai/component-registry.json", import.meta.url),
    "utf8",
  ),
);

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(componentRegistry), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
