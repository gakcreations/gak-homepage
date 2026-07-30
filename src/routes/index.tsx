import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero.jpg";
import franceArtwork from "@/assets/artwork-france.jpg";
import bahamasArtwork from "@/assets/artwork-bahamas.jpg";
import canaryArtwork from "@/assets/artwork-canary.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GAK Creations — Art prints from architecture, travel, and coastal life" },
      {
        name: "description",
        content:
          "GAK Creations is an artist-led studio where sketches, mixed-media, and photography become fine art prints inspired by France, Spain, the Bahamas, and the Canary Islands.",
      },
      { property: "og:title", content: "GAK Creations — Art prints from architecture, travel, and coastal life" },
      {
        property: "og:description",
        content:
          "GAK Creations is an artist-led studio where sketches, mixed-media, and photography become fine art prints inspired by France, Spain, the Bahamas, and the Canary Islands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PRINTIFY_URL = "https://gakcreations.printify.me/";

const artworks = [
  {
    title: "Côte d'Azur",
    location: "France",
    medium: "Ink & watercolor sketch",
    image: franceArtwork,
  },
  {
    title: "Bahamas Horizon",
    location: "The Bahamas",
    medium: "Mixed-media seascape",
    image: bahamasArtwork,
  },
  {
    title: "Isla Fuego",
    location: "Canary Islands",
    medium: "Layered paper & acrylic",
    image: canaryArtwork,
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background font-body text-foreground">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Coastal village at golden hour, Atlantic shoreline"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/90" />
        </div>

        <div className="relative z-10 w-full px-6 pb-20 pt-32 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-foreground/80">
              Artist-led studio
            </p>
            <h1 className="mt-4 font-heading text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              GAK
              <br />
              Creations
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">
              Fine art prints shaped by architecture, travel, and the quiet poetry of coastal life.
            </p>
            <div className="mt-8">
              <a
                href={PRINTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 font-heading text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Visit the Printify store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Artist statement */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-heading text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Philosophy
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-heading text-2xl font-light leading-relaxed md:text-3xl lg:text-4xl">
              My work blends sketches, mixed-media, photography, and abstract impressions into
              prints that carry stories of France, Spain, the Bahamas, and the Canary Islands.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Each piece is a threshold — a moment where light, structure, and landscape meet. I draw
              from the geometry of old towns, the rhythm of tides, and the sensory memory of place.
              These are not souvenirs; they are quiet invitations to slow down and look closer.
            </p>
          </div>
        </div>
      </section>

      {/* Collections preview */}
      <section className="bg-secondary px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-heading text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Selected works
              </h2>
              <p className="mt-3 font-heading text-3xl font-light tracking-tight md:text-4xl">
                Collections & prints
              </p>
            </div>
            <a
              href={PRINTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-sm uppercase tracking-widest text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
            >
              View all prints
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {artworks.map((artwork) => (
              <article
                key={artwork.title}
                className="group overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={`${artwork.title} — ${artwork.medium}`}
                    width={800}
                    height={1008}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="font-heading text-xs uppercase tracking-widest text-muted-foreground">
                    {artwork.location}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-medium tracking-tight">
                    {artwork.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{artwork.medium}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
            Bring the coast home
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Archival-quality prints, shipped through Printify. Each order is made on demand and sent
            directly to your door.
          </p>
          <div className="mt-10">
            <a
              href={PRINTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-heading text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Shop prints on Printify
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-heading text-sm font-medium tracking-wide">GAK Creations</p>
          <div className="flex items-center gap-6">
            <a
              href={PRINTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Printify Store
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@gakcreations.com"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} GAK Creations</p>
        </div>
      </footer>
    </main>
  );
}
