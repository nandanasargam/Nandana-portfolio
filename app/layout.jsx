import "./globals.css";
import { profile } from "@/data/content";

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: `${profile.headline}. ${profile.positioning}`,
};

// Runs before paint so the page never flashes the wrong theme.
const themeScript = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
