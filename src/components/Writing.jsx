import { ArrowUpRight } from 'lucide-react';
import Section from './ui/Section.jsx';
import Reveal from './ui/Reveal.jsx';
import { writing, profile } from '../data/content.js';

// To wire this up to Medium dynamically later, fetch
//   https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@<your-handle>
// in a useEffect and map `data.items` into the same shape used below.
export default function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Notes from the bench."
      lead="Long-form writeups of research projects and the small detours that ended up mattering."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {writing.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06}>
            <a
              href={w.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-white/5 bg-ink-900/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-ink-850/90"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="badge badge-accent">{w.tag}</span>
                <span className="font-mono text-zinc-500">{w.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-zinc-50 transition-colors group-hover:text-accent">
                {w.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{w.preview}</p>
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 transition-colors group-hover:text-accent">
                  Read on Medium
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <a
          href={profile.socials.medium}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-sm"
        >
          See everything on Medium →
        </a>
      </Reveal>
    </Section>
  );
}
