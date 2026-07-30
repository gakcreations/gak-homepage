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
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <a href="/" className="font-heading text-sm font-medium tracking-[0.2em] uppercase">
            GAK Creations
          </a>
          <nav className="flex items-center gap-8">
            <a
              href="#works"
              className="hidden font-heading text-xs tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Works
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

      {/* Hero — full-bleed gallery statement */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Coastal village at golden hour, Atlantic shoreline"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Artist-led studio
          </p>
          <h1 className="mt-6 font-heading text-6xl font-light leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
            GAK
            <br />
            Creations
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-primary/60" />
          <p className="mx-auto mt-8 max-w-lg text-base font-light leading-relaxed text-foreground/80 md:text-lg">
            Fine art prints shaped by architecture, travel, and the quiet poetry of coastal life.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <a
            href="#works"
            className="flex flex-col items-center gap-2 font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Explore</span>
            <span className="block h-8 w-px bg-current" />
          </a>
        </div>
      </section>

      {/* About / statement */}
      <section id="about" className="px-6 py-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Philosophy
          </p>
          <p className="mt-8 font-heading text-2xl font-light leading-relaxed md:text-4xl lg:text-5xl">
            My work blends sketches, mixed-media, photography, and abstract impressions into prints
            that carry stories of France, Spain, the Bahamas, and the Canary Islands.
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Each piece is a threshold — a moment where light, structure, and landscape meet. I draw from
            the geometry of old towns, the rhythm of tides, and the sensory memory of place.
          </p>
        </div>
      </section>

      {/* Gallery wall */}
      <section id="works" className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Selected works
              </p>
              <h2 className="mt-3 font-heading text-3xl font-light tracking-tight md:text-4xl">
                Gallery
              </h2>
            </div>
            <a
              href={PRINTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              View all prints →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            {/* First piece — large */}
            <article className="group md:col-span-7">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={artworks[0].image}
                  alt={`${artworks[0].title} — ${artworks[0].medium}`}
                  width={800}
                  height={1008}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-lg font-medium tracking-tight">{artworks[0].title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{artworks[0].medium}</p>
                </div>
                <p className="font-heading text-xs uppercase tracking-widest text-muted-foreground">
                  {artworks[0].location}
                </p>
              </div>
            </article>

            {/* Second piece — tall, offset */}
            <article className="group md:col-span-5 md:mt-24">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={artworks[1].image}
                  alt={`${artworks[1].title} — ${artworks[1].medium}`}
                  width={800}
                  height={1008}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-lg font-medium tracking-tight">{artworks[1].title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{artworks[1].medium}</p>
                </div>
                <p className="font-heading text-xs uppercase tracking-widest text-muted-foreground">
                  {artworks[1].location}
                </p>
              </div>
            </article>

            {/* Third piece — wide, full width */}
            <article className="group md:col-span-8 md:col-start-3">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={artworks[2].image}
                  alt={`${artworks[2].title} — ${artworks[2].medium}`}
                  width={800}
                  height={1008}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-lg font-medium tracking-tight">{artworks[2].title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{artworks[2].medium}</p>
                </div>
                <p className="font-heading text-xs uppercase tracking-widest text-muted-foreground">
                  {artworks[2].location}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Full-bleed CTA */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Coastal light and shoreline texture"
            width={1920}
            height={1088}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-12">
          <h2 className="font-heading text-4xl font-light tracking-tight md:text-6xl lg:text-7xl">
            Bring the coast home
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Archival-quality prints, made on demand and shipped directly to your door through Printify.
          </p>
          <a
            href={PRINTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center border border-foreground bg-transparent px-10 py-4 font-heading text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            Shop prints on Printify
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <p className="font-heading text-sm font-medium tracking-[0.2em] uppercase">GAK Creations</p>
          <div className="flex items-center gap-10">
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
              href="mailto:hello@gakcreations.com"
              className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
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
