import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero.jpg";
import abbayeArt from "@/assets/Abbaye_Aux_Dames_Saintes_France.jpg.asset.json";
import pantheonArt from "@/assets/Dancing_Jazz_In_The_Pantheon.jpg.asset.json";
import banosArt from "@/assets/Chruch_of_San_Juan_Bautista_de_Banos_Spain.jpg.asset.json";
import guggenheimArt from "@/assets/Guggenheim_Museum_Bilba_Spain.jpg.asset.json";
import coastalArt from "@/assets/Coastal_Narratives.jpg.asset.json";
import boatArt from "@/assets/The_Boat_That_Dreams_Of_Sea.jpg.asset.json";
import volcanicArt from "@/assets/Volcanic_Landscape_of_Fuerteventura.jpg.asset.json";
import sketchbookAsset from "@/assets/sketchbook.jpg.asset.json";
import logoAsset from "@/assets/gak-logo.png.asset.json";

const SITE_URL = "https://gak-coastal-portal.lovable.app";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/50bc382e-12ee-4554-8780-eb7b944b5344";
const PAGE_TITLE = "GAK Creations — Fine Art Prints of Coastal Architecture";
const PAGE_DESCRIPTION =
  "Fine art prints by GAK Creations: sketches, collages, and mixed-media works inspired by architecture, travel, and coastal life in France, Spain, the Bahamas, and the Canary Islands.";

const LOVABLE_ASSET_ORIGIN = "https://gak-coastal-portal.lovable.app";

function resolveAssetUrl(url: string) {
  return url.startsWith("/__l5e/") ? `${LOVABLE_ASSET_ORIGIN}${url}` : url;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": SITE_URL + "/#website",
              url: SITE_URL + "/",
              name: "GAK Creations",
              description: PAGE_DESCRIPTION,
              inLanguage: "en",
            },
            {
              "@type": "VisualArtsBusiness",
              "@id": SITE_URL + "/#studio",
              name: "GAK Creations",
              url: SITE_URL + "/",
              image: OG_IMAGE,
              description:
                "Artist-led studio creating fine art prints from architectural sketches, collages, and mixed-media works.",
              sameAs: ["https://gak-creations.printify.me/"],
              areaServed: ["France", "Spain", "Bahamas", "Canary Islands"],
            },
            {
              "@type": "ImageGallery",
              "@id": SITE_URL + "/#gallery",
              name: "Curated collections by place",
              isPartOf: { "@id": SITE_URL + "/#website" },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const PRINTIFY_URL = "https://gak-creations.printify.me/";

const collections = [
  {
    id: "france",
    country: "France",
    title: "Stone & Light",
    statement:
      "Romanesque geometry, measured lines, and the music that lives inside old French architecture.",
    prints: "France collection",
    works: [
      {
        title: "Abbaye aux Dames, Saintes",
        medium: "Ink drawing & watercolour wash",
        image: resolveAssetUrl(abbayeArt.url),
        aspect: "aspect-[4/5]",
      },
      {
        title: "Dancing Jazz in the Pantheon",
        medium: "Chalk line drawing & collage",
        image: resolveAssetUrl(pantheonArt.url),
        aspect: "aspect-[4/5]",
      },
    ],
  },
  {
    id: "spain",
    country: "Spain",
    title: "Arches & Curves",
    statement:
      "From Visigothic arches to Bilbao's titanium waves — Spain drawn between memory and invention.",
    prints: "Spain collection",
    works: [
      {
        title: "San Juan Bautista de Baños",
        medium: "Pen sketch & mixed-media collage",
        image: resolveAssetUrl(banosArt.url),
        aspect: "aspect-[4/5]",
      },
      {
        title: "Guggenheim Museum, Bilbao",
        medium: "Graphite, wash & collage",
        image: resolveAssetUrl(guggenheimArt.url),
        aspect: "aspect-[4/5]",
      },
    ],
  },
  {
    id: "bahamas",
    country: "The Bahamas",
    title: "Coastal Narratives",
    statement: "Horizons where salt air dissolves the edge between sky, sea, and sand.",
    prints: "Bahamas collection",
    works: [
      {
        title: "Coastal Narratives",
        medium: "Etching & hand-tinted wash",
        image: resolveAssetUrl(coastalArt.url),
        aspect: "aspect-[4/5]",
      },
      {
        title: "The Boat That Dreams of Sea",
        medium: "Watercolour & mixed-media",
        image: resolveAssetUrl(boatArt.url),
        aspect: "aspect-[4/5]",
      },
    ],
  },
  {
    id: "canary-islands",
    country: "Canary Islands",
    title: "Volcanic Quiet",
    statement: "Volcanic ridges, weathered stone, and a single white house holding the silence.",
    prints: "Canary Islands collection",
    works: [
      {
        title: "Volcanic Landscape of Fuerteventura",
        medium: "Coloured pencil & watercolour",
        image: resolveAssetUrl(volcanicArt.url),
        aspect: "aspect-[4/5]",
      },
    ],
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background font-body text-foreground">
      {/* Minimal gallery header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" className="font-heading text-sm font-light tracking-[0.2em] uppercase">
            GAK Creations
          </Link>
          <nav className="flex items-center gap-8">
            <a
              href="#collections"
              className="hidden font-heading text-xs tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Collections
            </a>
            <a
              href="#about"
              className="hidden font-heading text-xs tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              About
            </a>
            <a
              href={PRINTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xs tracking-[0.15em] uppercase text-foreground transition-colors hover:text-primary"
            >
              Printify
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — quiet gallery threshold */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Coastal village at golden hour, Atlantic shoreline"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-background/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Artist-led studio
          </p>
          <h1 className="mt-8 font-heading text-7xl font-light leading-[0.95] tracking-tight md:text-9xl lg:text-[11rem]">
            GAK
          </h1>
          <p className="mt-4 font-heading text-lg tracking-[0.25em] uppercase text-muted-foreground md:text-xl">
            Creations
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-primary/60" />
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-3 font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Enter</span>
            <span className="block h-10 w-px bg-current" />
          </a>
        </div>
      </section>

      {/* About / statement */}
      <section id="about" className="px-6 py-36 md:px-12 lg:px-20 lg:py-48">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Philosophy
          </p>
          <p className="mt-10 font-heading text-2xl font-light leading-relaxed md:text-4xl lg:text-5xl">
            My work blends architecture, travel, and coastal life into expressive sketches,
            collages, and mixed-media pieces.
          </p>
          <p className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Each piece is a threshold — a moment where light, structure, and landscape meet. I draw
            from the geometry of old towns, the rhythm of tides, and the sensory memory of place.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="px-6 pb-40 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 border-b border-border pb-8">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Curated collections
            </p>
            <h2 className="mt-4 font-heading text-3xl font-light tracking-tight md:text-4xl">
              Prints by place
            </h2>
          </div>

          <div className="space-y-32 md:space-y-40">
            {collections.map((collection, index) => (
              <article
                key={collection.id}
                className="grid gap-12 border-b border-border pb-32 md:grid-cols-12 md:gap-16 md:pb-40"
              >
                {/* Collection text */}
                <div className={`md:col-span-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {collection.country}
                  </p>
                  <h3 className="mt-4 font-heading text-3xl font-light tracking-tight md:text-4xl">
                    {collection.title}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {collection.statement}
                  </p>
                  <a
                    href={PRINTIFY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 font-heading text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
                  >
                    <span className="h-px w-8 bg-current" />
                    Shop {collection.prints}
                  </a>
                </div>

                {/* Gallery grid */}
                <div className={`md:col-span-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {collection.works.map((work) => (
                      <figure key={work.title} className="group">
                        <div className={`overflow-hidden bg-muted ${work.aspect}`}>
                          <img
                            src={work.image}
                            alt={`${work.title} — ${work.medium}`}
                            width={1024}
                            height={1280}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                          />
                        </div>
                        <figcaption className="mt-5">
                          <h4 className="font-heading text-xl font-light tracking-tight md:text-2xl">
                            {work.title}
                          </h4>
                          <p className="mt-1 text-sm text-muted-foreground md:text-base">
                            {work.medium}
                          </p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet CTA */}
      <section className="flex min-h-[60vh] items-center justify-center border-t border-border px-6 py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Prints
          </p>
          <h2 className="mt-6 font-heading text-4xl font-light tracking-tight md:text-6xl">
            Bring the coast home
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Archival-quality prints, made on demand and shipped directly to your door through
            Printify.
          </p>
          <a
            href={PRINTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center border border-foreground bg-transparent px-12 py-4 font-heading text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            Shop all prints on Printify
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center md:px-12">
          <figure className="order-2 md:order-1">
            <div className="overflow-hidden bg-muted">
              <img
                src={resolveAssetUrl(sketchbookAsset.url)}
                alt="Artist's sketchbook with ink drawings, fountain pens, and ink pots on a linen surface"
                width={1920}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-5 text-sm text-muted-foreground">
              From the studio — Long Island, Bahamas · Barcelona, 2021
            </figcaption>
          </figure>

          <div className="order-1 flex flex-col items-start gap-8 md:order-2 md:pl-12">
            <img
              src={resolveAssetUrl(logoAsset.url)}
              alt="GAK Creations logo"
              width={280}
              height={155}
              loading="lazy"
              className="w-40 md:w-48"
            />
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Every print begins here — in ink, paper, and the quiet notation of a place.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <a
                href={PRINTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Printify
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="mailto:gakcreationsx@gmail.com"
                className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Policies & business details */}
        <div className="border-t border-border/60">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-12">
            <nav aria-label="Customer policies">
              <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
                Customer information
              </h2>
              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                    to="/returns"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Return &amp; Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact Information
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
                Contact
              </h2>
              <address className="mt-5 space-y-1 text-sm not-italic text-muted-foreground">
                <p>GAK Creations</p>
                <p>Fuerteventura, Canary Islands, Spain</p>
                <p>
                  <a
                    href="mailto:gakcreationsx@gmail.com"
                    className="transition-colors hover:text-foreground"
                  >
                    gakcreationsx@gmail.com
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
                Orders
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Prints are made to order and fulfilled through Printify. Production takes 2–5
                business days before shipping.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 px-6 py-8 md:px-12">
          <p className="mx-auto max-w-7xl text-xs text-muted-foreground">
            © {new Date().getFullYear()} GAK Creations · Fuerteventura, Canary Islands, Spain
          </p>
        </div>
      </footer>
    </main>
  );
}
