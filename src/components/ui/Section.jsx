import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || lead) && (
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
                {lead}
              </p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
