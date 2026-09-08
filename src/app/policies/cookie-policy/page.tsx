import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Ngwenyama Poultry Farm uses cookies and similar technology.",
};

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="8 September 2026">
      <p>
        This policy explains how Ngwenyama Poultry Farm uses cookies and
        similar technologies on this website, and the choices available to
        you.
      </p>

      <section>
        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files placed on your device by a website
          you visit. They are widely used to make websites work, work more
          efficiently, and to provide information to the site owner.
        </p>
      </section>

      <section>
        <h2>2. What we use</h2>
        <p>This site is deliberately kept simple. Currently:</p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> a session cookie is used only
            to keep an authorised team member securely signed in to the
            admin portal. This cookie is not set for ordinary site visitors
            browsing the public pages.
          </li>
          <li>
            <strong>No advertising or tracking cookies</strong> are used on
            this site, and we do not run third-party advertising.
          </li>
        </ul>
        <p>
          If we introduce analytics tools in the future to understand site
          usage, this policy will be updated to reflect exactly what is
          collected.
        </p>
      </section>

      <section>
        <h2>3. Managing cookies</h2>
        <p>
          Most browsers let you view, manage, and delete cookies through
          their settings. Because this site relies on a cookie only for
          admin sign-in, blocking cookies will not affect your ability to
          browse the public pages, but it will prevent the admin portal from
          keeping you signed in.
        </p>
      </section>

      <section>
        <h2>4. Changes to this policy</h2>
        <p>
          We&apos;ll update this page if the cookies or technologies used on this
          site change.
        </p>
      </section>

      <section>
        <h2>5. Contact us</h2>
        <p>
          Questions about this policy can be directed to us via our contact
          form or by phone.
        </p>
      </section>
    </PolicyLayout>
  );
}
