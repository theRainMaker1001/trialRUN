# Speechify QA Assessment — Tom Cunningham

**Window:** 80 min • **Deliverable:** Clean GitHub repo (Markdown + light Node, no libs)

## How to run
```bash
BASE_URL=https://api.example.com node scripts/request.mjs
BASE_URL=https://api.example.com node scripts/get-demo.mjs
BASE_URL=https://api.example.com DEMO_EMAIL="you@ex.com" DEMO_PASS="secret" node scripts/login-demo.mjs
```

## Repo map
```
README.md
/test-artifacts/test-cases.md
/test-artifacts/bugs.md
/scripts/request.mjs
/scripts/get-demo.mjs
/scripts/login-demo.mjs
```

## Assumptions
- BASE_URL points to target env; Bearer token if auth is returned.
- 401/403 for missing/invalid tokens; 429 indicates rate limit.
- Use EP (valid vs invalid) and BVA (min−1/min/min+1) where rules are unclear.

## Test scope
- Auth: login **positive + negative** (expect 200 + token / 400–401 + readable message).
- Read endpoints: `/health`, `/me` (status + safe JSON/text parse).
- Errors: human-readable messages (WCAG 3.3.1/3.3.3).

## Accessibility (WCAG focus)
- **1.4.2 Audio Control** — audio is pausable/stop/mute.
- **2.5.3 Label-in-Name** — visible text appears in accessible name.
- **2.5.8 Target Size** — controls ≥ 44×44 CSS px.

## Git flow
```bash
git checkout -b feat/assessment
git add .
git commit -m "chore: scaffold + initial checks"
git push -u origin feat/assessment
```

## Final checklist
- [ ] request() helper in `scripts/`
- [ ] GET `/health` sanity
- [ ] Login +/− (if creds provided)
- [ ] `test-cases.md` (EP, BVA, positive & negative)
- [ ] `bugs.md` (1–2 solid defects)
- [ ] Last push before T+80
