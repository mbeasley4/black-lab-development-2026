import Script from "next/script";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";
import { getNonce } from "@/lib/nonce";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Consent Mode v2 bootstrap — synchronous inline head script.
 *
 * Must run BEFORE the GTM container so that consent defaults are in the
 * dataLayer when GTM evaluates them. `next/script` (afterInteractive) is too
 * late; a plain inline <script> in <head> executes in document order.
 *
 * Also replays the stored per-category preferences for returning visitors
 * (analytics vs. marketing), so their consent is honoured before GTM fires.
 */
const consentBootstrap = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
try {
  var stored = JSON.parse(window.localStorage.getItem('${CONSENT_STORAGE_KEY}') || 'null');
  if (stored && typeof stored === 'object') {
    var marketing = stored.marketing ? 'granted' : 'denied';
    gtag('consent', 'update', {
      analytics_storage: stored.analytics ? 'granted' : 'denied',
      ad_storage: marketing,
      ad_user_data: marketing,
      ad_personalization: marketing
    });
  }
} catch (e) {}
`;

/** Inline head script that sets Consent Mode v2 defaults before GTM loads. */
export async function ConsentModeBootstrap() {
  const nonce = await getNonce();
  return (
    <script
      id="consent-mode-default"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: consentBootstrap }}
    />
  );
}

/** No-ops when NEXT_PUBLIC_GTM_ID is unset — safe to include unconditionally. */
export async function GoogleTagManager() {
  if (!GTM_ID) return null;
  const nonce = await getNonce();
  return (
    <>
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        nonce={nonce}
        dangerouslySetInnerHTML={{
          __html:
            "(function(w,l){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});})(window,'dataLayer');",
        }}
      />
      <Script
        id="gtm-src"
        strategy="afterInteractive"
        nonce={nonce}
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
