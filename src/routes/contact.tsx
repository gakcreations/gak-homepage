import { createFileRoute } from "@tanstack/react-router";

import { PolicyPage, PolicySection } from "@/components/PolicyPage";

const SITE_URL = "https://gak-coastal-portal.lovable.app";
const TITLE = "Contact GAK Creations — Fuerteventura, Canary Islands";
const DESCRIPTION =
  "Contact GAK Creations: an artist-led fine art print studio based in Fuerteventura, Canary Islands, Spain. Email gakcreationsx@gmail.com for orders and enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VisualArtsBusiness",
          name: "GAK Creations",
          url: SITE_URL + "/",
          email: "gakcreationsx@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Fuerteventura",
            addressRegion: "Canary Islands",
            addressCountry: "ES",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PolicyPage
      eyebrow="Get in touch"
      title="Contact"
      intro="For orders, print enquiries, commissions or questions about a delivery, write to the studio directly — every message is read and answered personally."
    >
      <PolicySection heading="Business details">
        <dl className="space-y-4">
          <div>
            <dt className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
              Business name
            </dt>
            <dd className="mt-1">GAK Creations</dd>
          </div>
          <div>
            <dt className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
              Location
            </dt>
            <dd className="mt-1">Fuerteventura, Canary Islands, Spain</dd>
          </div>
          <div>
            <dt className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
              Email
            </dt>
            <dd className="mt-1">
              <a className="underline underline-offset-4" href="mailto:gakcreationsx@gmail.com">
                gakcreationsx@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </PolicySection>

      <PolicySection heading="Response times">
        <p>
          Emails are answered within 2 business days. For order issues, include your order number
          and, if the item arrived damaged, a photo of the print and its packaging.
        </p>
      </PolicySection>

      <PolicySection heading="Orders and fulfilment">
        <p>
          Prints are sold and shipped through the GAK Creations Printify store. Please see the{" "}
          <a className="underline underline-offset-4" href="/shipping">
            Shipping Policy
          </a>{" "}
          and{" "}
          <a className="underline underline-offset-4" href="/returns">
            Return &amp; Refund Policy
          </a>{" "}
          for delivery estimates and replacement terms.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
