// Binary Search — Speechify: max text length per read-aloud (with A11y checks)
// Why: discover server limit precisely; errors are clear when exceeding it (WCAG 3.3.1/3.3.3).
// Assumes request() helper exists.

async function okLen(n) {
  const r = await request("POST", "/read-aloud", { text: "A".repeat(n) });
  return r.status === 200 && r.data && (r.data.jobId || r.data.audioUrl);
}

// Start with pragmatic bounds (adjust as you learn)
let lo2 = 1000, hi2 = 50000;
while (lo2 < hi2) {
  const mid = Math.floor((lo2 + hi2 + 1) / 2); // bias up to find max
  if (await okLen(mid)) { lo2 = mid; } else { hi2 = mid - 1; }
}
console.log("Max allowed text length ≈", lo2);

// Negative (WCAG 3.3.1/3.3.3): just above max should 4xx + readable message
const tooLong = lo2 + 1;
const neg2 = await request("POST", "/read-aloud", { text: "A".repeat(tooLong) });
console.assert([400, 413, 422].includes(neg2.status), "Expected 4xx for length " + tooLong + ", got " + neg2.status);
console.assert(neg2.data && (neg2.data.message || neg2.data.error), "Expected human-readable error for over-length text");

// Tie-ins: BVA (max−1 / max / max+1) and A11y: clear guidance enables user correction.
