import Section from './ui/Section.jsx';
import Reveal from './ui/Reveal.jsx';
import { experience } from '../data/content.js';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've spent my time."
      lead="A timeline of internships and research roles. Each one taught me something I couldn't have read in a paper."
    >
      <ol className="relative border-l border-white/10 pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <li key={`${item.org}-${item.period}`} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[33px] sm:-left-[37px] top-2 grid h-4 w-4 place-items-center rounded-full border border-accent/40 bg-ink-950">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <Reveal delay={i * 0.05}>
              <div className="surface surface-hover p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-zinc-50">
                    {item.roleUrl ? (
                      <a
                        href={item.roleUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline"
                      >
                        {item.role}
                      </a>
                    ) : (
                      item.role
                    )}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">{item.period}</span>
                </div>
                <p className="text-sm text-accent">
                  {item.orgUrl ? (
                    <a
                      href={item.orgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{item.location}</p>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{item.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
