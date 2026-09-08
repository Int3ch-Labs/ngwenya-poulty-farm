import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Ngwenyama Poultry Farm website.",
};

export default function TermsOfServicePage() {
  return (
    <PolicyLayout title="Terms of Service" lastUpdated="8 September 2026">
      <p>
        These terms govern your use of the Ngwenyama Poultry Farm website
        (&quot;the site&quot;). By browsing this site, you agree to these terms. If
        you do not agree, please do not use the site.
      </p>

      <section>
        <h2>1. About this website</h2>
        <p>
          This site is an informational website for Ngwenyama Poultry Farm.
          It shares information about our farm, our eggs, and updates from
          our team. <strong>This site does not offer online ordering,
          online payment, or delivery booking.</strong> All purchases and
          collection arrangements are made directly with our team by phone,
          WhatsApp, or in person.
        </p>
      </section>

      <section>
        <h2>2. Accuracy of information</h2>
        <p>
          We make reasonable efforts to keep information on this site
          accurate and current, including product descriptions and farm
          updates. However, egg availability, pricing, and stock change
          daily depending on production, and information on this site may
          not always reflect same-day availability. Always confirm current
          availability and pricing directly with our team before visiting
          or arranging collection.
        </p>
      </section>

      <section>
        <h2>3. Acceptable use</h2>
        <p>When using this site, you agree not to:</p>
        <ul>
          <li>Attempt to gain unauthorised access to the admin portal or any restricted area of the site.</li>
          <li>Interfere with or disrupt the site&apos;s operation, servers, or networks.</li>
          <li>Copy, reproduce, or republish content from this site for commercial use without permission.</li>
          <li>Use the contact form to submit spam, malicious content, or unlawful material.</li>
        </ul>
      </section>

      <section>
        <h2>4. Admin portal</h2>
        <p>
          Access to the admin portal, used by our team to publish farm
          updates and announcements, is restricted to authorised personnel
          of Ngwenyama Poultry Farm. Credentials must not be shared, and any
          suspected unauthorised access should be reported to us
          immediately.
        </p>
      </section>

      <section>
        <h2>5. Intellectual property</h2>
        <p>
          The Ngwenyama Poultry Farm name, logo, and the content published on
          this site (text, images, and farm updates) belong to Ngwenyama
          Poultry Farm unless otherwise stated, and may not be used without
          our written permission.
        </p>
      </section>

      <section>
        <h2>6. Limitation of liability</h2>
        <p>
          This site is provided &quot;as is&quot;. While we take care to keep it
          accurate and available, we do not guarantee it will be free of
          errors or interruptions, and we are not liable for any loss
          arising from reliance on information found on this site, to the
          extent permitted by law.
        </p>
      </section>

      <section>
        <h2>7. Changes to these terms</h2>
        <p>
          We may revise these terms from time to time. Continued use of the
          site after changes are posted means you accept the updated terms.
        </p>
      </section>

      <section>
        <h2>8. Governing law</h2>
        <p>
          These terms are governed by the laws of South Africa.
        </p>
      </section>

      <section>
        <h2>9. Contact us</h2>
        <p>
          Questions about these terms can be sent to us via our contact form,
          or by calling 072 662 9295 / 067 615 6699.
        </p>
      </section>

      <p className="text-xs text-ink-500">
        This document is provided as a general template and does not
        constitute legal advice. We recommend having it reviewed by a
        qualified professional before relying on it.
      </p>
    </PolicyLayout>
  );
}
