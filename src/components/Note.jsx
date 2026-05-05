import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import Section from './ui/Section.jsx';
import { profile } from '../data/content.js';

// Submission is simulated by default. To wire to EmailJS, replace
// `simulateSubmit` with a call to emailjs.send() — the form shape below
// already matches a typical { name, email, message } template.
async function simulateSubmit(payload) {
  await new Promise((r) => setTimeout(r, 900));
  // eslint-disable-next-line no-console
  console.info('[Note] would send:', payload);
  return { ok: true };
}

const initial = { name: '', email: '', message: '' };

export default function Note() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [error, setError] = useState('');

  const update = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError('');

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError('All three fields are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError('That email address looks off — mind double-checking?');
      return;
    }

    setStatus('sending');
    try {
      const res = await simulateSubmit(values);
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      setValues(initial);
    } catch {
      setStatus('error');
      setError('Something went wrong on my end. Try emailing me directly?');
    }
  };

  return (
    <Section
      id="note"
      eyebrow="Leave a note"
      title="Send me a thought, a link, or a hello."
      lead="Whether it's a research collaboration, a job, or just an idea you want to test against someone — I read everything."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <p className="text-zinc-300 leading-relaxed">
            I'm especially interested in messages about machine-learning systems,
            applied cryptography, and any project where research has to land in
            real software.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Prefer email? You can also reach me at{' '}
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
              {profile.email}
            </a>
            .
          </p>

          <div className="surface mt-6 p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Response time
            </p>
            <p className="mt-2 text-zinc-200">
              Usually within 48 hours. I read every note that isn't a recruiter
              spray; the others I read too, just slower.
            </p>
          </div>
        </div>

        <form onSubmit={submit} noValidate className="surface p-6 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-zinc-400">
                Your name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Ada Lovelace"
                className="input"
                value={values.name}
                onChange={update('name')}
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-zinc-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="ada@analyticalengine.org"
                className="input"
                value={values.email}
                onChange={update('email')}
                disabled={status === 'sending'}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-zinc-400">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell me what you're working on, or just say hi."
              className="input resize-y"
              value={values.message}
              onChange={update('message')}
              disabled={status === 'sending'}
            />
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                key="err"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-sm text-rose-300"
              >
                {error}
              </motion.p>
            )}
            {status === 'sent' && (
              <motion.p
                key="sent"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 inline-flex items-center gap-2 text-sm text-accent"
              >
                <CheckCircle2 size={16} /> Got it — thanks for writing in.
              </motion.p>
            )}
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-zinc-500">
              Your details stay between us — no list, no newsletter.
            </p>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#08090c] transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send note
                  <Send
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
