import { getNonce } from "@/lib/nonce";

export default async function JsonLd({ data }: { data: object | object[] }) {
  const nonce = await getNonce();
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          nonce={nonce}
          // Browsers hide the `nonce` attribute from DOM reads once a
          // <script> is inserted (anti-XSS measure), which makes React's
          // hydration diff see a false mismatch on this attribute alone.
          // The nonce is still applied correctly; this just silences the
          // known false positive.
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
