import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Writing } from "@/components/sections/writing";
import { Speaking } from "@/components/sections/speaking";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <Header />
      <main>
        <Hero />
        <About />
        <Writing />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
