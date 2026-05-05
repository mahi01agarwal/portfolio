import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import Section from './ui/Section.jsx';
import Reveal from './ui/Reveal.jsx';
import { profile } from '../data/content.js';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'GitHub', value: 'github.com/mahi01agarwal', href: profile.socials.github, Icon: Github },
  { label: 'LinkedIn', value: 'linkedin.com/in/agarwalmahima01', href: profile.socials.linkedin, Icon: Linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <Reveal>
        <div className="surface relative overflow-hidden p-8 sm:p-12">
          <div className="absolute inset-0 -z-10 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
                Let's build something thoughtful.
              </h2>
              <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
                I'm currently open to research collaborations, internships and
                full-time roles starting mid-2026. The fastest way to reach me is
                email; the rest of my links are below.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#08090c] transition hover:bg-accent-soft"
              >
                <Mail size={15} /> {profile.email}
              </a>
            </div>

            <ul className="grid gap-3">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-ink-850/60 p-4 transition hover:border-accent/30 hover:bg-ink-850"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-zinc-300 transition group-hover:bg-accent/15 group-hover:text-accent">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                          {label}
                        </p>
                        <p className="text-sm text-zinc-200">{value}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
