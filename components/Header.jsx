import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/content";

const links = [
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight">{profile.name}</a>
        <nav className="flex items-center gap-5 text-sm">
          <ul className="hidden gap-5 md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-muted transition-colors hover:text-accent">{label}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
