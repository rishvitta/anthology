'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Matches `section[id] { scroll-margin-top }` in globals.css (fixed nav height). */
const NAV_OFFSET = 88;

/** How long to keep re-asserting the target position after arrival. */
const SETTLE_MS = 1200;

/**
 * Scrolls to the #fragment when a page is opened at one.
 *
 * Three things defeat the browser's native fragment scroll here:
 *   1. `scroll-behavior: smooth` on <html> makes browsers skip it on load.
 *   2. Next's router resets scroll to the top after hydration, which undoes a
 *      single early jump.
 *   3. The hash can arrive after mount on a history navigation.
 *
 * So: re-assert the position for a short window, listen for later hash changes,
 * and bail out as soon as the reader takes over.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let teardown: (() => void) | undefined;

    const run = () => {
      teardown?.();
      teardown = scrollToHash();
    };

    run();
    window.addEventListener('hashchange', run);

    return () => {
      teardown?.();
      window.removeEventListener('hashchange', run);
    };
  }, [pathname]);

  return null;
}

function scrollToHash(): (() => void) | undefined {
  const { hash } = window.location;
  if (!hash) return;

  const id = decodeURIComponent(hash.slice(1));
  let cancelled = false;
  const start = performance.now();

  // Any deliberate scroll input wins over us.
  const stop = () => {
    cancelled = true;
  };
  const opts = { passive: true, once: true } as const;
  window.addEventListener('wheel', stop, opts);
  window.addEventListener('touchstart', stop, opts);
  window.addEventListener('keydown', stop, opts);

  let timer: ReturnType<typeof setTimeout> | undefined;

  const settle = () => {
    if (cancelled) return;

    const el = document.getElementById(id);
    if (el && Math.abs(el.getBoundingClientRect().top - NAV_OFFSET) > 4) {
      el.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
    }

    // setTimeout rather than requestAnimationFrame: rAF never fires while the
    // tab is hidden, which would leave a backgrounded tab at the wrong offset.
    if (performance.now() - start < SETTLE_MS) timer = setTimeout(settle, 16);
  };
  settle();

  return () => {
    cancelled = true;
    if (timer) clearTimeout(timer);
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
    window.removeEventListener('keydown', stop);
  };
}
