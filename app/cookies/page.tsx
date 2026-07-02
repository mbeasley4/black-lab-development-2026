import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import JsonLd from "@/components/JsonLd";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import { legalWebPageSchema } from "@/app/lib/legal";

const LAST_UPDATED = "July 2, 2026";

export const metadata: Metadata = {
  title: "Cookie Policy | Black Lab Development",
  description:
    "A full breakdown of the cookies and similar technologies used on blacklabdev.com, what each one does, and how to control them.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cookie Policy | Black Lab Development",
    description:
      "A full breakdown of the cookies and similar technologies used on blacklabdev.com, what each one does, and how to control them.",
    url: "/cookies",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Cookie Policy | Black Lab Development",
    description: "A full breakdown of the cookies used on blacklabdev.com.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const SECTIONS = [
  { id: "what-are-cookies", title: "What Are Cookies?" },
  { id: "how-we-use-cookies", title: "How We Use Cookies" },
  { id: "cookie-categories", title: "Cookie Categories" },
  { id: "cookies-we-use", title: "Cookies We Use" },
  { id: "cookieless-analytics", title: "Cookieless Analytics" },
  { id: "managing-cookies", title: "Managing Your Preferences" },
  { id: "browser-controls", title: "Browser-Level Controls" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

const NECESSARY_COOKIES = [
  {
    name: "cookie-consent",
    provider: "Black Lab Development (first-party)",
    purpose: "Remembers your cookie category choices so we don't ask again on every visit.",
    storage: "Browser local storage",
    duration: "Until you change your choice or clear browser data",
  },
];

const ANALYTICS_COOKIES = [
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics",
    purpose: "Distinguishes unique visitors and tracks sessions for aggregate usage reporting.",
    storage: "Cookie",
    duration: "Up to 2 years",
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    purpose: "Distinguishes unique visitors on a shorter, per-day basis.",
    storage: "Cookie",
    duration: "24 hours",
  },
];

const ADVERTISING_COOKIES = [
  {
    name: "_gcl_au, IDE, test_cookie",
    provider: "Google Ads / DoubleClick",
    purpose: "Measures ad conversions and personalizes marketing shown to you on other sites.",
    storage: "Cookie",
    duration: "Up to 3 months",
  },
];

function CookieTable({
  rows,
}: {
  rows: { name: string; provider: string; purpose: string; storage: string; duration: string }[];
}) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-lg border border-white/10">
      <table className="w-full min-w-150 border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wide text-slate-400">
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Provider</th>
            <th className="px-4 py-3 font-semibold">Purpose</th>
            <th className="px-4 py-3 font-semibold">Storage</th>
            <th className="px-4 py-3 font-semibold">Duration</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.map((row) => (
            <tr key={row.name}>
              <td className="px-4 py-3 align-top font-mono text-xs text-volt-400">{row.name}</td>
              <td className="px-4 py-3 align-top text-slate-300">{row.provider}</td>
              <td className="px-4 py-3 align-top text-slate-400">{row.purpose}</td>
              <td className="px-4 py-3 align-top text-slate-400">{row.storage}</td>
              <td className="px-4 py-3 align-top text-slate-400">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={legalWebPageSchema("Cookie Policy", "/cookies", "2026-07-02")} />
      <LegalPageLayout
        label="Legal"
        title="Cookie Policy"
        description={`A full breakdown of the cookies and similar technologies used on this site, what each one does, and how to control them. Last updated ${LAST_UPDATED}.`}
        sections={SECTIONS}
      >
        <p className="text-sm uppercase tracking-widest text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>

        <p>
          This Cookie Policy explains how Black Lab Development uses cookies and similar
          technologies on blacklabdev.com (the &ldquo;Site&rdquo;), and complements our{" "}
          <a href="/privacy">Privacy Policy</a>. It's more technical and specific than the Privacy
          Policy's cookie section — if you just want to change your preferences, use{" "}
          <CookieSettingsButton className="font-medium text-volt-400 underline underline-offset-4 hover:text-volt-300">
            Manage Cookie Preferences
          </CookieSettingsButton>{" "}
          in the footer.
        </p>

        <h2 id="what-are-cookies">What Are Cookies?</h2>
        <p>
          Cookies are small text files a website stores in your browser. They let a site remember
          information about your visit — like preferences or whether you've seen a particular
          message — the next time you come back, or let it recognize your browser across pages
          during a single session. &ldquo;Similar technologies&rdquo; includes things like browser
          local storage, which we use to remember your cookie choice.
        </p>

        <h2 id="how-we-use-cookies">How We Use Cookies</h2>
        <p>
          We use cookies to keep the Site working properly, understand how visitors use it, and — only
          if you opt in — measure and personalize marketing. We don't use cookies to sell your data to
          third parties.
        </p>
        <p>
          On your first visit, every optional cookie category defaults to <strong>off</strong>. We use{" "}
          <strong>Google Consent Mode v2</strong> so that Google's own tags (Analytics, Ads) respect
          your choice before any cookie is set.
        </p>

        <h2 id="cookie-categories">Cookie Categories</h2>
        <ul>
          <li>
            <strong>Necessary</strong> — always on, can't be disabled. Required for the Site to
            function, including remembering your cookie choice itself.
          </li>
          <li>
            <strong>Analytics</strong> — optional. Helps us see which pages get used and how, in
            aggregate, so we can improve the Site.
          </li>
          <li>
            <strong>Advertising</strong> — optional. Used to measure ad performance and personalize
            the marketing you see from us on other sites.
          </li>
        </ul>

        <h2 id="cookies-we-use">Cookies We Use</h2>

        <h3>Necessary</h3>
        <CookieTable rows={NECESSARY_COOKIES} />

        <h3>Analytics (only if you opt in)</h3>
        <p>
          These are set by Google Analytics through Google Tag Manager, only after you enable the
          Analytics category. Exact cookie names can change as Google updates its tags; the table
          below reflects Google Analytics 4's standard cookies at the time of writing.
        </p>
        <CookieTable rows={ANALYTICS_COOKIES} />

        <h3>Advertising (only if you opt in)</h3>
        <p>
          These are set by Google Ads / Google Marketing Platform through Google Tag Manager, only
          after you enable the Advertising category.
        </p>
        <CookieTable rows={ADVERTISING_COOKIES} />

        <h2 id="cookieless-analytics">Cookieless Analytics</h2>
        <p>
          Two tools we use don't set cookies at all and aren't gated by your cookie choice, because
          they aren't designed to track you individually across sites:
        </p>
        <ul>
          <li>
            <strong>Aptabase</strong> — privacy-first product analytics that reports aggregate page
            views and navigation without persistent identifiers or cross-site tracking.
          </li>
          <li>
            <strong>Vercel Web Analytics &amp; Speed Insights</strong> — measures aggregate traffic
            and page performance (like load times) without cookies or a visitor-level profile.
          </li>
        </ul>
        <p>
          We also use <strong>Cloudflare Turnstile</strong> on the contact form to filter spam.
          Turnstile is designed to avoid tracking cookies and does not require you to solve a CAPTCHA;
          it may briefly use device signals purely to confirm you're not a bot, not for advertising.
        </p>

        <h2 id="managing-cookies">Managing Your Preferences</h2>
        <p>
          You can change your cookie choice at any time by clicking{" "}
          <CookieSettingsButton className="font-medium text-volt-400 underline underline-offset-4 hover:text-volt-300">
            Manage Cookie Preferences
          </CookieSettingsButton>{" "}
          in the footer of any page. This reopens the same panel you saw on your first visit, with
          your current choices pre-filled, so you can toggle Analytics and Advertising independently
          and save.
        </p>

        <h2 id="browser-controls">Browser-Level Controls</h2>
        <p>
          Most browsers also let you block or delete cookies directly, or clear local storage. Doing
          so through your browser settings will remove our remembered choice too, so the consent
          banner will appear again on your next visit. Browser help pages for common browsers:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>

        <h2 id="changes">Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy as the tools and tags on the Site change. We'll update the
          &ldquo;Last updated&rdquo; date at the top of this page when we do.
        </p>

        <h2 id="contact">Contact Us</h2>
        <p>Questions about this Cookie Policy? Reach out:</p>
        <ul>
          <li>
            Send us a message through our <a href="/contact">contact form</a>
          </li>
        </ul>
      </LegalPageLayout>
    </>
  );
}
