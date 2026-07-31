import { createFileRoute } from "@tanstack/react-router";

import { PolicyList, PolicyPage, PolicySection } from "@/components/PolicyPage";

const SITE_URL = "https://gak-coastal-portal.lovable.app";
const TITLE = "Return & Refund Policy — GAK Creations";
const DESCRIPTION =
  "GAK Creations return and refund policy: defective or damaged fine art prints are replaced free of charge when reported within 30 days of delivery.";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: SITE_URL + "/returns" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/returns" }],
  }),
  component: ReturnsPage,
});

function ReturnsPage() {
  return (
    <PolicyPage
      eyebrow="Customer care"
      title="Return & Refund Policy"
      intro="Every GAK Creations print is made to order by Printify's fulfilment partners. Because each piece is produced individually for you, our policy focuses on making defective or damaged orders right, quickly and at no cost to you."
    >
      <PolicySection heading="Defective or damaged items">
        <PolicyList
          items={[
            "Defective or damaged items are replaced at no cost to you — replacement print and shipping included.",
            "Return shipping for defective items is covered in full by GAK Creations.",
            "Send a photo of the item and the packaging to gakcreationsx@gmail.com so we can arrange the replacement immediately.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Reporting window">
        <PolicyList
          items={[
            "Issues must be reported within 30 days of delivery.",
            "Claims received after 30 days cannot be processed.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Non-defective returns">
        <PolicyList
          items={[
            "Non-defective returns are not accepted, because all products are custom-made to order.",
            "Exchanges are allowed only for defective or damaged items.",
            "Please check size, framing and finish options carefully before ordering.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Cancellations">
        <PolicyList
          items={[
            "Order cancellations are allowed within 12 hours of purchase.",
            "After 12 hours production has begun and the order can no longer be cancelled.",
            "To cancel, email gakcreationsx@gmail.com with your order number.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Refunds">
        <PolicyList
          items={[
            "Approved refunds are issued to the original payment method.",
            "Refunds are processed once the defect or damage has been confirmed, normally within 5 business days.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Contact">
        <p>
          GAK Creations · Fuerteventura, Canary Islands, Spain ·{" "}
          <a className="underline underline-offset-4" href="mailto:gakcreationsx@gmail.com">
            gakcreationsx@gmail.com
          </a>
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
