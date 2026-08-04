import { headers } from "next/headers";

/** CSP nonce for the current request, set by middleware.ts. Undefined on /studio, which has no CSP. */
export async function getNonce() {
  const headersList = await headers();
  return headersList.get("x-nonce") ?? undefined;
}
