import {
  SPEAKING,
  SPEAKING_INTRO,
  SPEAKING_FTA,
  SPEAKING_CTA,
  CONTACT,
} from "@/lib/constants";

export function Speaking() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-foreground mb-4">Speaking</h2>
      <p className="text-muted mb-2">{SPEAKING_INTRO}</p>
      <p className="text-muted mb-8">
        {SPEAKING_FTA.text}{" "}
        <a
          href={SPEAKING_FTA.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
        >
          {SPEAKING_FTA.linkText} &rarr;
        </a>
      </p>
      <div className="space-y-4">
        {SPEAKING.map((item) => {
          const inner = (
            <>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  {item.event}
                </h3>
                <span className="text-sm text-muted whitespace-nowrap">
                  {item.date}
                </span>
              </div>
              <p className="mt-1 text-sm text-card-foreground">{item.topic}</p>
              <p className="mt-0.5 text-sm text-muted">{item.location}</p>
            </>
          );

          return item.url ? (
            <a
              key={item.event}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl bg-card p-5 border border-border no-underline transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {inner}
            </a>
          ) : (
            <div
              key={item.event}
              className="group rounded-xl bg-card p-5 border border-border"
            >
              {inner}
            </div>
          );
        })}
      </div>

      {/* Speaking CTA */}
      <div className="mt-10 rounded-xl bg-card border border-border p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground">
          {SPEAKING_CTA.headline}
        </h3>
        <p className="mt-2 text-sm text-muted max-w-xl mx-auto">
          {SPEAKING_CTA.description}
        </p>
        <a
          href={`mailto:${CONTACT.email}?subject=Speaking%20Inquiry`}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-accent-hover"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          {SPEAKING_CTA.emailLabel}
        </a>
      </div>
    </section>
  );
}
