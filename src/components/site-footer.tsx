import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-4">
          {profile.socials.map((social) => (
            <li key={social.href}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
