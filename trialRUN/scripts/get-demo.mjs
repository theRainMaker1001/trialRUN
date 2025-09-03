import { request } from "./request.mjs";

(async () => {
  const res = await request("GET", "/posts");
  console.log("GET /posts → status:", res.status);
  console.log("First two posts:", res.data.slice(0, 2)); // show only first 2
})();
