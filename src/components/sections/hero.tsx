import Image from "next/image";
import { HERO, CONTACT } from "@/lib/constants";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {HERO.headline}
          </h1>
          <p className="mt-4 text-lg text-accent font-medium">
            {HERO.subtitle}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted max-w-xl">
            {HERO.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
            >
              Get in Touch
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground no-underline transition-colors hover:bg-card"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src="/images/ryan-profile.png"
            alt="Ryan Minnick"
            width={280}
            height={280}
            priority
            className="rounded-full border-4 border-card shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
