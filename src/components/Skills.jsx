import { motion } from 'framer-motion';
import Section from './ui/Section.jsx';
import Reveal from './ui/Reveal.jsx';
import { skills } from '../data/content.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills, grouped by where they live in my brain."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05}>
            <div className="surface surface-hover h-full p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  {group.group}
                </h3>
                <span className="font-mono text-xs text-zinc-600">{group.items.length}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s, j) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.02 * j, duration: 0.3 }}
                    className="badge transition hover:border-accent/40 hover:text-accent"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
