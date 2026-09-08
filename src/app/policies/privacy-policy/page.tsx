import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ngwenyama Poultry Farm collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="8 September 2026">
      <p>
        Ngwenyama Poultry Farm (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy.
        This policy explains what information we collect through this
        website, why we collect it, and how we look after it. This website
        is informational — we do not sell products or process payments
        online, so we collect far less information than a typical online
        store.
      </p>

      <section>
        <h2>1. Information we collect</h2>
        <p>We collect information in two ways:</p>
        <ul>
          <li>
            <strong>Information you give us directly</strong> — such as your
            name, phone number or email address, and message, when you use
            our contact form to make an enquiry.
          </li>
          <li>
            <strong>Basic technical information</strong> — such as browser
            type and pages visited, collected automatically to help us keep
            the site running properly. See our Cookie Policy for detail on
            what, if anything, is stored in your browser.
          </li>
        </ul>
        <p>
          We do not collect payment card details, delivery addresses for
          online orders, or account passwords from visitors, because this
          site does not offer online ordering or checkout.
        </p>
      </section>

      <section>
        <h2>2. How we use your information</h2>
        <ul>
          <li>To respond to enquiries submitted through our contact form.</li>
          <li>To answer calls or messages you send to our listed phone numbers.</li>
          <li>To improve this website and understand which pages are useful to visitors.</li>
          <li>To meet legal or regulatory obligations where applicable.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>
      </section>

      <section>
        <h2>3. Legal basis and your rights</h2>
        <p>
          As a South African business, we aim to handle personal information
          in line with the Protection of Personal Information Act (POPIA).
          Where we process your information, we do so with your consent
          (for example, when you voluntarily submit our contact form) or
          because it is necessary to respond to your enquiry.
        </p>
        <p>Subject to applicable law, you may ask us to:</p>
        <ul>
          <li>Confirm what personal information we hold about you.</li>
          <li>Correct inaccurate personal information.</li>
          <li>Delete personal information we no longer need to keep.</li>
          <li>Stop using your information for a particular purpose.</li>
        </ul>
        <p>To exercise these rights, contact us using the details in Section 6.</p>
      </section>

      <section>
        <h2>4. How long we keep information</h2>
        <p>
          Enquiry messages submitted through our contact form are kept only
          for as long as needed to respond to and resolve the enquiry,
          after which they may be deleted periodically.
        </p>
      </section>

      <section>
        <h2>5. Content posted by our team</h2>
        <p>
          Our farm updates, announcements, and gallery content are managed
          by authorised staff through a password-protected admin portal.
          This content is public by design and is not personal information
          about site visitors.
        </p>
      </section>

      <section>
        <h2>6. Contact us</h2>
        <p>
          If you have questions about this policy or how your information is
          handled, contact us on 072 662 9295 / 067 615 6699, or via the
          contact form on this website.
        </p>
      </section>

      <section>
        <h2>7. Changes to this policy</h2>
        <p>
          We may update this policy from time to time as our website or
          practices change. The &quot;last updated&quot; date at the top of this page
          reflects the most recent revision.
        </p>
      </section>

      <p className="text-xs text-ink-500">
        This document is provided as a general template and does not
        constitute legal advice. We recommend having it reviewed by a
        qualified professional to ensure it fully reflects your specific
        operations and applicable law.
      </p>
    </PolicyLayout>
  );
}
