"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="text-xl font-bold tracking-tight text-foreground no-underline hover:text-accent transition-colors">
        Ryan Minnick
      </Link>
      <ThemeToggle />
    </header>
  );
}
