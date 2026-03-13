import { BIO } from "@/lib/constants";

export function About() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-foreground mb-8">About</h2>
      <div className="space-y-5">
        {BIO.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
