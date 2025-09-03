// Base URL comes from environment variable, or falls back to local server
const BASE = process.env.BASE_URL || "http://localhost:3000";

/**
 * Generic HTTP request helper
 * @param {string} method - HTTP method ("GET", "POST", etc.)
 * @param {string} path - URL path (e.g., "/posts")
 * @param {object} body - Optional request body (JSON)
 * @param {object} headers - Optional extra headers
 */
export async function request(method, path, body, headers = {}) {
  const res = await fetch(BASE + path, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined
  });

  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  return { status: res.status, headers: res.headers, data };
};
