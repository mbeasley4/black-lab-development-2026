import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import JsonLd from "@/components/JsonLd";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import { legalWebPageSchema } from "@/app/lib/legal";

const LAST_UPDATED = "July 2, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Black Lab Development collects, uses, and protects your information, including details on cookies, analytics, and your privacy choices.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy",
    description:
      "How Black Lab Development collects, uses, and protects your information, including details on cookies, analytics, and your privacy choices.",
    url: "/privacy",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Privacy Policy",
    description:
      "How Black Lab Development collects, uses, and protects your information.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const SECTIONS = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "cookies-and-tracking", title: "Cookies & Tracking Technologies" },
  { id: "how-we-use-information", title: "How We Use Your Information" },
  { id: "third-party-services", title: "Third-Party Service Providers" },
  { id: "data-sharing", title: "How We Share Information" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-privacy-rights", title: "Your Privacy Rights" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "international-visitors", title: "International Visitors" },
  { id: "security", title: "Data Security" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={legalWebPageSchema("Privacy Policy", "/privacy", "2026-07-02")} />
      <LegalPageLayout
        label="Legal"
        title="Privacy Policy"
        description={`We built this site to be fast and useful, not to harvest your data. Here's exactly what we collect, why, and how you can control it. Last updated ${LAST_UPDATED}.`}
        sections={SECTIONS}
      >
        <p className="text-sm uppercase tracking-widest text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>

        <p>
          Black Lab Development (&ldquo;Black Lab,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) operates blacklabdev.com (the &ldquo;Site&rdquo;). This Privacy Policy
          explains what information we collect when you visit the Site or get in touch with us, why
          we collect it, how it's used, and the choices you have — including the granular cookie
          controls available at any time via the{" "}
          <CookieSettingsButton className="font-medium text-volt-400 underline underline-offset-4 hover:text-volt-300">
            Manage Cookie Preferences
          </CookieSettingsButton>{" "}
          link in the site footer. See also our{" "}
          <a href="/terms">Terms &amp; Conditions</a> and{" "}
          <a href="/cookies">Cookie Policy</a>.
        </p>
        <p>
          We are a small, independent web development studio. We don't sell your personal
          information, and we only collect what's actually useful for running the business and
          improving the Site.
        </p>

        <h2 id="information-we-collect">Information We Collect</h2>

        <h3>Information you provide directly</h3>
        <p>
          When you submit the contact form on this Site, we collect the information you enter: your
          name, email address, and message. That submission is sent to us by email (via our
          transactional email provider, Resend) so we can respond to your inquiry. We also run your
          submission through Cloudflare Turnstile, a privacy-focused bot-detection check, to filter
          spam before it reaches us — Turnstile does not require you to solve a CAPTCHA and does not
          track you for advertising purposes.
        </p>

        <h3>Information collected automatically</h3>
        <p>
          Like most websites, we automatically collect some technical information when you browse the
          Site, such as your approximate location (derived from IP address), device and browser type,
          pages viewed, referring page, and general usage patterns. Depending on your cookie
          preferences (see below), this may be collected via cookies and similar technologies, or via
          cookieless, privacy-preserving analytics that don't require your consent because they don't
          track you individually across sites.
        </p>

        <h2 id="cookies-and-tracking">Cookies & Tracking Technologies</h2>
        <p>
          We use a cookie consent system built on <strong>Google Consent Mode v2</strong>. On your
          first visit, all optional tracking defaults to <strong>off</strong> until you make a choice.
          You can accept everything, reject everything, or pick exactly which categories you're
          comfortable with — and you can change your mind at any time using the{" "}
          <CookieSettingsButton className="font-medium text-volt-400 underline underline-offset-4 hover:text-volt-300">
            Manage Cookie Preferences
          </CookieSettingsButton>{" "}
          link in the footer of every page. For a full breakdown of every cookie we use, see our{" "}
          <a href="/cookies">Cookie Policy</a>.
        </p>

        <p>We group cookies into three categories:</p>
        <ul>
          <li>
            <strong>Necessary</strong> — always on. These support core functionality like page
            navigation, security, and remembering the cookie choice you've made. The Site cannot
            function properly without them, so they aren't optional.
          </li>
          <li>
            <strong>Analytics</strong> — optional. Helps us understand how visitors use the Site
            (pages viewed, time on page, navigation paths) so we can improve it. Governed by the{" "}
            <code>analytics_storage</code> Consent Mode signal.
          </li>
          <li>
            <strong>Advertising</strong> — optional. Used to measure ad performance and personalize
            marketing shown to you on other sites. Governed by the <code>ad_storage</code>,{" "}
            <code>ad_user_data</code>, and <code>ad_personalization</code> Consent Mode signals.
            Declining this category doesn't reduce how many ads you see — just how relevant they are.
          </li>
        </ul>

        <p>
          Two analytics tools we use — <strong>Aptabase</strong> and{" "}
          <strong>Vercel Analytics / Speed Insights</strong> — are cookieless by design. They measure
          aggregate traffic and page performance without setting tracking cookies or building a
          profile tied to you individually, so they run regardless of your cookie choice.
        </p>

        <h2 id="how-we-use-information">How We Use Your Information</h2>
        <ul>
          <li>To respond to messages sent through the contact form.</li>
          <li>To understand how the Site is used so we can fix problems and improve it.</li>
          <li>To measure and improve Site performance and reliability.</li>
          <li>
            Where you've opted in, to measure marketing effectiveness and, in limited cases,
            personalize advertising.
          </li>
          <li>To detect and prevent spam, abuse, and security issues.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 id="third-party-services">Third-Party Service Providers</h2>
        <p>
          We use a small number of vetted third-party services to run the Site. Each only receives
          the information necessary to perform its function:
        </p>
        <ul>
          <li>
            <strong>Google Tag Manager / Google Analytics</strong> — loads on the Site to manage tags
            and, if you've granted analytics or advertising consent, measure traffic and ad
            performance. Governed by Google's{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>
            .
          </li>
          <li>
            <strong>Aptabase</strong> — privacy-first, cookieless product analytics used to track
            aggregate page views and navigation without collecting personal data.
          </li>
          <li>
            <strong>Vercel</strong> — hosts the Site and provides cookieless Web Analytics and Speed
            Insights to help us monitor performance and uptime.
          </li>
          <li>
            <strong>Resend</strong> — delivers the email generated when you submit the contact form.
          </li>
          <li>
            <strong>Cloudflare Turnstile</strong> — verifies contact form submissions aren't automated
            spam without tracking you.
          </li>
          <li>
            <strong>Sanity</strong> — our content management system, used to store and publish
            articles and case studies on the Site. It does not process visitor personal data.
          </li>
        </ul>

        <h2 id="data-sharing">How We Share Information</h2>
        <p>
          We do not sell your personal information. We share information only with the service
          providers listed above, each acting on our behalf to operate the Site, and only to the
          extent necessary for them to perform their function. We may also disclose information if
          required by law, to protect our legal rights, or in connection with a merger, acquisition,
          or sale of business assets, in which case this Privacy Policy would continue to apply to
          your information.
        </p>

        <h2 id="data-retention">Data Retention</h2>
        <p>
          Contact form submissions are retained in our email system for as long as reasonably
          necessary to handle your inquiry and for our business records. Analytics data collected
          through Google Analytics, Aptabase, and Vercel Analytics is retained according to each
          provider's standard retention settings. Your cookie preference is stored in your browser's
          local storage until you change it or clear your browser data.
        </p>

        <h2 id="your-privacy-rights">Your Privacy Rights</h2>
        <p>
          Depending on where you live, you may have rights under laws such as the EU/UK GDPR or U.S.
          state privacy laws (like the California Consumer Privacy Act), including the right to:
        </p>
        <ul>
          <li>Know what personal information we hold about you and how it's used.</li>
          <li>Request access to or a copy of your personal information.</li>
          <li>Request correction or deletion of your personal information.</li>
          <li>
            Opt out of analytics and advertising cookies at any time via{" "}
            <CookieSettingsButton className="font-medium text-volt-400 underline underline-offset-4 hover:text-volt-300">
              Manage Cookie Preferences
            </CookieSettingsButton>
            .
          </li>
          <li>Not be discriminated against for exercising any of these rights.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us using the details below. We'll respond within a
          reasonable timeframe and in accordance with applicable law.
        </p>

        <h2 id="childrens-privacy">Children's Privacy</h2>
        <p>
          The Site is intended for business audiences and is not directed at children under 13. We do
          not knowingly collect personal information from children. If you believe a child has
          provided us information, contact us and we'll delete it.
        </p>

        <h2 id="international-visitors">International Visitors</h2>
        <p>
          Black Lab Development is based in Cincinnati, Ohio, USA, and the Site is hosted in the
          United States. If you access the Site from outside the U.S., your information will be
          processed in the U.S., which may have different data protection laws than your
          jurisdiction.
        </p>

        <h2 id="security">Data Security</h2>
        <p>
          We use reasonable technical and organizational measures — including encrypted connections
          (HTTPS), reputable third-party providers, and bot/spam filtering — to protect the
          information we collect. No method of transmission or storage is completely secure, so we
          can't guarantee absolute security.
        </p>

        <h2 id="changes">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or
          for legal or operational reasons. We'll update the &ldquo;Last updated&rdquo; date at the
          top of this page when we do. Material changes will be reflected here — we encourage you to
          review this page periodically.
        </p>

        <h2 id="contact">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how we handle your information, reach
          out:
        </p>
        <ul>
          <li>Location: Cincinnati, OH</li>
          <li>
            Send us a message through our <a href="/contact">contact form</a>
          </li>
        </ul>
      </LegalPageLayout>
    </>
  );
}
