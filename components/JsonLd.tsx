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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
