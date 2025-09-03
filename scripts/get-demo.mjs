// scripts/get-demo.mjs

import { request } from "./request.mjs";

(async () => {
  const res = await request("GET", "/health");
  console.log("GET /health → status:", res.status);
  console.log("Data:", res.data);
})();