import Link from "next/link";
import { profile } from "@/content/profile";

const NAV_ITEMS = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>
        <ul className="flex gap-4 text-sm text-muted sm:gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
