import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { profile } from '../data/content.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container-x">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]"
        >
          <div>
            <motion.span variants={item} className="eyebrow">
              {profile.location} · open to research & SWE roles
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]"
            >
              {profile.name.split(' ')[0]}{' '}
              <span className="text-zinc-400">{profile.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300 leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-2xl text-zinc-400 leading-relaxed"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#08090c] transition hover:bg-accent-soft"
              >
                See selected work
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
              >
                <FileText size={15} /> Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-4 text-zinc-400">
              <a
                aria-label="GitHub"
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-zinc-100"
              >
                <Github size={18} />
              </a>
              <a
                aria-label="LinkedIn"
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-zinc-100"
              >
                <Linkedin size={18} />
              </a>
              <a
                aria-label="Email"
                href={`mailto:${profile.email}`}
                className="transition hover:text-zinc-100"
              >
                <Mail size={18} />
              </a>
              <span className="ml-2 font-mono text-xs text-zinc-500">
                {profile.email}
              </span>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto lg:ml-auto">
            <PhotoFrame />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PhotoFrame() {
  return (
    <div className="relative">
      <motion.div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-accent/15 blur-3xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        whileHover={{ rotate: 0, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        className="relative aspect-square w-64 sm:w-72 lg:w-80 rotate-[-2deg]"
      >
        <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-ink-900/70 p-2 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
            <img
              src={profile.photoUrl}
              alt={`${profile.name} portrait`}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.classList.add('bg-photo-fallback');
              }}
            />
            <div className="absolute inset-0 hidden bg-photo-fallback bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 [.bg-photo-fallback_&]:flex items-center justify-center">
              <span className="font-display text-5xl text-accent/70">M</span>
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[1.6rem]" />
          </div>
        </div>

        <motion.div
          className="absolute -bottom-3 -right-3 surface px-3 py-2 text-xs font-mono text-zinc-300 shadow-lg shadow-black/40"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="text-accent">●</span> currently researching
        </motion.div>
      </motion.div>
    </div>
  );
}
