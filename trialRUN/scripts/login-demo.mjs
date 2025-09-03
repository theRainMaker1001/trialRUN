import { request } from "./request.mjs";

(async () => {
  // Fake "happy path" login
  const ok = await request("POST", "/posts", {
    title: "Alien login",
    body: "Pretend credentials sent!",
    userId: 42
  });
  console.log("Happy login (fake) →", ok.status, ok.data);

  // Fake "negative" login
  const bad = await request("POST", "/posts", {
    title: "Alien wrong creds",
    body: "Bad login attempt",
    userId: -1
  });
  console.log("Negative login (fake) →", bad.status, bad.data);
})();
