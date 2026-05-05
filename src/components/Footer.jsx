import { profile } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5">
      <div className="container-x flex flex-col items-start justify-between gap-3 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}. Built with React, Tailwind and a lot of
          coffee.
        </p>
        <p className="font-mono">
          <span className="text-accent">●</span> last updated · {year}
        </p>
      </div>
    </footer>
  );
}
