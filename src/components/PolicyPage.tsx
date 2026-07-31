import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const PRINTIFY_URL = "https://gak-creations.printify.me/";

export function PolicyPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background font-body text-foreground">
      <header className="border-b border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" className="font-heading text-sm font-light tracking-[0.2em] uppercase">
            GAK Creations
          </Link>
          <a
            href={PRINTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-xs tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Printify
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-24 md:px-12 md:py-32">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-heading text-4xl font-light tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
        <div className="mt-16 space-y-14">{children}</div>

        <div className="mt-20 border-t border-border pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 font-heading text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
          >
            <span className="h-px w-8 bg-current" />
            Back to the gallery
          </Link>
        </div>
      </article>
    </main>
  );
}

export function PolicySection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-2xl font-light tracking-tight md:text-3xl">{heading}</h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        {children}
      </div>
    </section>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span className="mt-3 h-px w-4 shrink-0 bg-border" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
