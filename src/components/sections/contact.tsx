import { CONTACT } from "@/lib/constants";

export function Contact() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        I love getting emails.
      </h2>
      <p className="text-muted max-w-lg mx-auto mb-8">
        Whether it&apos;s about government technology, a project idea, or just
        to say hello — drop me a line.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Email Me
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
        <a
          href={CONTACT.keybase}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground no-underline transition-colors hover:bg-card"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10.446 21.371c0 .528-.428.957-.957.957s-.957-.428-.957-.957.428-.957.957-.957.957.429.957.957zm5.922-.957a.957.957 0 100 1.914.957.957 0 000-1.914zm-3.132-2.162a.957.957 0 100 1.914.957.957 0 000-1.914zM20.4 12c0 4.636-3.764 8.4-8.4 8.4S3.6 16.636 3.6 12 7.364 3.6 12 3.6s8.4 3.764 8.4 8.4zm1.2 0C21.6 5.703 16.297.4 10 .4S.4 5.703.4 12 5.703 23.6 12 23.6 23.6 18.297 23.6 12zm-9.6-4.8a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0zm4.8 0a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z" />
          </svg>
          Keybase
        </a>
      </div>
    </section>
  );
}
