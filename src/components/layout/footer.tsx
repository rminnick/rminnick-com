import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      <p>&copy; {new Date().getFullYear()} Ryan Minnick. All rights reserved.</p>
      <p className="mt-2">
        <a href={`mailto:${CONTACT.email}`} className="text-accent hover:text-accent-hover transition-colors">
          {CONTACT.email}
        </a>
      </p>
    </footer>
  );
}
