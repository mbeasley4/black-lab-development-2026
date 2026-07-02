import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import { legalWebPageSchema } from "@/app/lib/legal";

const LAST_UPDATED = "July 2, 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions | Black Lab Development",
  description:
    "The terms and conditions governing your use of blacklabdev.com, including intellectual property, disclaimers, and limitations of liability.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms & Conditions | Black Lab Development",
    description:
      "The terms and conditions governing your use of blacklabdev.com, including intellectual property, disclaimers, and limitations of liability.",
    url: "/terms",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Terms & Conditions | Black Lab Development",
    description: "The terms and conditions governing your use of blacklabdev.com.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const SECTIONS = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "use-of-site", title: "Use of the Site" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "services-engagements", title: "Services & Engagements" },
  { id: "case-studies", title: "Case Studies & Results" },
  { id: "third-party-links", title: "Third-Party Links & Demos" },
  { id: "disclaimer", title: "Disclaimer of Warranties" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to These Terms" },
  { id: "contact", title: "Contact Us" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={legalWebPageSchema("Terms & Conditions", "/terms", "2026-07-02")} />
      <LegalPageLayout
        label="Legal"
        title="Terms & Conditions"
        description={`The rules for using this website. Last updated ${LAST_UPDATED}.`}
        sections={SECTIONS}
      >
        <p className="text-sm uppercase tracking-widest text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>

        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of blacklabdev.com (the
          &ldquo;Site&rdquo;), operated by Black Lab Development (&ldquo;Black Lab,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a web development studio based in
          Cincinnati, Ohio. By accessing or using the Site, you agree to these Terms. If you don't
          agree, please don't use the Site.
        </p>
        <p>
          These Terms cover use of the <em>website itself</em>. They don't replace or modify any
          separate proposal, statement of work, or services agreement you sign with us to build or
          maintain a website — those documents govern the actual engagement and control if there's any
          conflict.
        </p>

        <h2 id="acceptance">Acceptance of Terms</h2>
        <p>
          By browsing the Site, submitting the contact form, or otherwise interacting with it, you
          confirm that you've read, understood, and agree to be bound by these Terms and our{" "}
          <a href="/privacy">Privacy Policy</a> and <a href="/cookies">Cookie Policy</a>. We may
          update these Terms from time to time; continued use of the Site after changes take effect
          constitutes acceptance of the revised Terms.
        </p>

        <h2 id="use-of-site">Use of the Site</h2>
        <p>You agree to use the Site only for lawful purposes. You agree not to:</p>
        <ul>
          <li>Scrape, crawl, or harvest content from the Site using automated means, except for standard search engine indexing.</li>
          <li>Attempt to gain unauthorized access to the Site, its systems, or related networks.</li>
          <li>Interfere with or disrupt the Site's functionality, security, or performance.</li>
          <li>Reverse engineer, decompile, or copy the Site's underlying code or design for commercial use.</li>
          <li>Use the contact form to send spam, phishing attempts, or unsolicited commercial messages.</li>
          <li>Misrepresent your identity or affiliation when contacting us.</li>
        </ul>

        <h2 id="intellectual-property">Intellectual Property</h2>
        <p>
          Unless otherwise noted, all content on the Site — including text, graphics, logos, code,
          layout, and design — is the property of Black Lab Development or its licensors and is
          protected by copyright, trademark, and other intellectual property laws. You may view and
          print pages from the Site for personal, non-commercial reference. You may not reproduce,
          distribute, modify, or create derivative works from the Site's content without our prior
          written permission.
        </p>
        <p>
          The &ldquo;Black Lab Development&rdquo; name and logo are our trademarks. Nothing on the
          Site grants you a license to use them without our written consent.
        </p>

        <h2 id="services-engagements">Services & Engagements</h2>
        <p>
          The Site describes web development services we offer, but browsing it doesn't create a
          client relationship or any obligation on either side. An actual engagement — scope,
          deliverables, timeline, and fees — is only formed once both parties sign a separate proposal
          or services agreement. Nothing on the Site should be read as a binding offer to perform
          services on specific terms.
        </p>

        <h2 id="case-studies">Case Studies & Results</h2>
        <p>
          Case studies, testimonials, and performance statistics shown on the Site (for example,
          traffic or conversion improvements) reflect results achieved for specific past clients under
          specific circumstances. They're shared to illustrate our work, not as a guarantee of similar
          results for any other business. Individual outcomes depend on many factors outside our
          control, including your market, existing traffic, budget, and how recommendations are
          implemented.
        </p>

        <h2 id="third-party-links">Third-Party Links & Demos</h2>
        <p>
          The Site links to third-party websites, including live client and demo projects (for
          example, under the &ldquo;Demos&rdquo; section of the footer) and external resources. We
          don't control and aren't responsible for the content, availability, or privacy practices of
          any third-party site. Visiting a linked site is at your own risk and subject to that site's
          own terms and privacy policy.
        </p>

        <h2 id="disclaimer">Disclaimer of Warranties</h2>
        <p>
          The Site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties
          of any kind, express or implied, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, and non-infringement. We don't warrant
          that the Site will be uninterrupted, error-free, or free of harmful components, or that any
          defects will be corrected.
        </p>

        <h2 id="limitation-of-liability">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Black Lab Development will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of profits or
          revenue, arising out of or related to your use of, or inability to use, the Site — even if
          we've been advised of the possibility of such damages. Our total liability arising from your
          use of the Site will not exceed one hundred dollars ($100).
        </p>

        <h2 id="indemnification">Indemnification</h2>
        <p>
          You agree to indemnify and hold Black Lab Development harmless from any claims, damages,
          losses, or expenses (including reasonable attorneys' fees) arising from your violation of
          these Terms or your misuse of the Site.
        </p>

        <h2 id="governing-law">Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Ohio, without regard to its conflict of
          laws principles. Any dispute arising from these Terms or your use of the Site will be subject
          to the exclusive jurisdiction of the state and federal courts located in Hamilton County,
          Ohio.
        </p>

        <h2 id="changes">Changes to These Terms</h2>
        <p>
          We may revise these Terms from time to time to reflect changes in our practices or for legal
          or operational reasons. We'll update the &ldquo;Last updated&rdquo; date at the top of this
          page when we do. We encourage you to review this page periodically.
        </p>

        <h2 id="contact">Contact Us</h2>
        <p>If you have questions about these Terms, reach out:</p>
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
