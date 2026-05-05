import Section from './ui/Section.jsx';
import Reveal from './ui/Reveal.jsx';
import { about } from '../data/content.js';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Research-leaning, product-shaped." lead={null}>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-zinc-300 leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-base sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4">
          {about.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.1 + i * 0.08}>
              <div className="surface surface-hover p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-zinc-100">{pillar.title}</h3>
                  <span className="font-mono text-xs text-accent/80">0{i + 1}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{pillar.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
