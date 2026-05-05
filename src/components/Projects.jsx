import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import Section from './ui/Section.jsx';
import { projects } from '../data/content.js';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects from research, open source, and side benches."
      lead="A handful of things I've built recently. The throughline: I'd rather ship a smaller system that's fully understood than a big one that isn't."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-ink-900/70 p-6 transition-colors duration-300 hover:border-accent/30 hover:bg-ink-850/90"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), rgba(163,230,53,0.08), transparent 40%)',
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
        }}
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="badge badge-accent">{project.tag}</span>
          <h3 className="mt-3 text-xl font-semibold leading-snug text-zinc-50 transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-zinc-500">{project.org}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-zinc-400">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="rounded-md p-1.5 transition hover:bg-white/5 hover:text-zinc-100"
            >
              <Github size={16} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="rounded-md p-1.5 transition hover:bg-white/5 hover:text-zinc-100"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{project.blurb}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-zinc-400">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 leading-relaxed">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
        {project.stack.map((s) => (
          <span key={s} className="badge font-mono text-[11px]">
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
