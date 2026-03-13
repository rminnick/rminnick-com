import { WRITING } from "@/lib/constants";

export function Writing() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-foreground mb-8">
        Recent Writing & Projects
      </h2>
      <div className="space-y-4">
        {WRITING.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl bg-card p-5 border border-border no-underline transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-base font-semibold text-card-foreground group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{item.source}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
