import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Food Safety & Quality Policy",
  description: "How Ngwenyama Poultry Farm approaches food safety and egg quality.",
};

export default function FoodSafetyPolicyPage() {
  return (
    <PolicyLayout title="Food Safety & Quality Policy" lastUpdated="8 September 2026">
      <p>
        Ngwenyama Poultry Farm is committed to producing eggs that are safe,
        healthy, and consistent in quality. This page outlines our general
        approach — it is a summary for customers, not a full technical or
        regulatory document.
      </p>

      <section>
        <h2>1. Flock health</h2>
        <ul>
          <li>Hens are checked daily for signs of illness or distress.</li>
          <li>Coops are cleaned regularly to maintain sanitary living conditions.</li>
          <li>Feed and clean water are provided consistently to support healthy laying.</li>
        </ul>
      </section>

      <section>
        <h2>2. Egg collection and handling</h2>
        <ul>
          <li>Eggs are collected at least once daily to maintain freshness.</li>
          <li>Each batch is visually checked for cracks, shell quality, and size before packing.</li>
          <li>Eggs are stored in a clean, cool area away from direct sunlight and strong odours.</li>
        </ul>
      </section>

      <section>
        <h2>3. Packing and transport</h2>
        <ul>
          <li>Eggs are packed into clean trays suited to the quantity requested.</li>
          <li>We recommend customers refrigerate eggs promptly after collection to preserve freshness.</li>
        </ul>
      </section>

      <section>
        <h2>4. Customer guidance</h2>
        <p>
          For the best quality at home, we recommend keeping eggs
          refrigerated, using them within a few weeks of collection, and
          cooking eggs thoroughly, particularly for children, pregnant
          individuals, the elderly, or anyone with a compromised immune
          system.
        </p>
      </section>

      <section>
        <h2>5. Concerns or feedback</h2>
        <p>
          If you ever receive eggs that don&apos;t meet the quality you expect,
          please contact us directly on 072 662 9295 or 067 615 6699, or via
          our contact form, so we can look into it and make things right.
        </p>
      </section>

      <p className="text-xs text-ink-500">
        This page is a general summary intended for customers and does not
        replace applicable food safety regulations or formal certification
        requirements. We recommend consulting the relevant local agricultural
        and food safety authorities to confirm full regulatory compliance
        for your operations.
      </p>
    </PolicyLayout>
  );
}
