import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.js';

// A pill-style switch that slides a thumb between sun and moon icons.
// Lives in the navbar; persists choice to localStorage via useTheme.
export default function ThemeToggle({ className = '' }) {
  const [theme, toggle] = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      className={`relative inline-flex h-8 w-[58px] shrink-0 items-center rounded-full border border-white/10 bg-ink-850/80 backdrop-blur transition-colors hover:border-accent/30 ${className}`}
    >
      <span className="absolute inset-0 flex items-center justify-between px-1.5 text-zinc-400">
        <Sun size={13} className={isDark ? 'opacity-40' : 'opacity-100 text-accent'} />
        <Moon size={13} className={isDark ? 'opacity-100 text-accent' : 'opacity-40'} />
      </span>
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="relative z-10 ml-1 grid h-6 w-6 place-items-center rounded-full bg-zinc-50 shadow-md shadow-black/30"
        style={{ marginLeft: isDark ? 'calc(100% - 28px)' : '4px' }}
      >
        {isDark ? (
          <Moon size={12} className="text-ink-900" />
        ) : (
          <Sun size={12} className="text-ink-900" />
        )}
      </motion.span>
    </button>
  );
}
