import { createFileRoute } from "@tanstack/react-router";

import { PolicyList, PolicyPage, PolicySection } from "@/components/PolicyPage";

const SITE_URL = "https://gak-coastal-portal.lovable.app";
const TITLE = "Shipping Policy — GAK Creations";
const DESCRIPTION =
  "Shipping policy for GAK Creations fine art prints: production takes 2–5 business days, with worldwide delivery through Printify's fulfilment partners and tracking where available.";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: SITE_URL + "/shipping" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/shipping" }],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <PolicyPage
      eyebrow="Delivery"
      title="Shipping Policy"
      intro="All GAK Creations products are produced on demand and shipped by Printify's fulfilment partners, from the production facility closest to your delivery address."
    >
      <PolicySection heading="Production time">
        <PolicyList
          items={[
            "Standard production time is 2–5 business days before an order leaves the facility.",
            "Production time is additional to the transit time shown below.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Delivery estimates">
        <PolicyList
          items={[
            "USA: typically 3–7 business days after production.",
            "European Union (including Spain and the Canary Islands): typically 4–10 business days after production.",
            "International: typically 10–30 business days after production, depending on destination and customs.",
            "Shipping times vary by destination and are estimates, not guarantees.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Tracking">
        <PolicyList
          items={[
            "Tracking information is provided by email when available for your shipping method and destination.",
            "Some economy services to remote destinations do not offer end-to-end tracking.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Carrier delays and restrictions">
        <PolicyList
          items={[
            "GAK Creations does not control carrier delays, customs processing or weather-related disruption.",
            "Duties and import taxes, where applicable, are the responsibility of the recipient.",
            "We do not ship hazardous or restricted items.",
            "Incorrect or incomplete addresses may cause delays or returned parcels; please check your address at checkout.",
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
