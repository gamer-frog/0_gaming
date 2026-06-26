'use client';

import { useState, useEffect } from 'react';

/**
 * Detects the user's OS and returns the appropriate modifier key label
 * for displaying keyboard shortcuts (e.g., "⌘K" on Mac, "Ctrl+K" on Windows/Linux).
 *
 * Uses `navigator.platform` (widely supported) and `navigator.userAgent` as fallback.
 */
export function useModKey(): { modSymbol: string; modLabel: string; isMac: boolean } {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // navigator.platform is the most reliable client-side signal
    // It returns strings like "MacIntel", "MacPPC", "Mac68K" for macOS
    const platform = navigator.platform ?? '';
    const ua = navigator.userAgent ?? '';
    const mac =
      platform.startsWith('Mac') ||
      ua.includes('Macintosh') ||
      ua.includes('Mac OS');
    setIsMac(mac);
  }, []);

  return {
    isMac,
    modSymbol: isMac ? '\u2318' : 'Ctrl',   // ⌘ or Ctrl
    modLabel:  isMac ? '\u2318K' : 'Ctrl+K',  // ⌘K or Ctrl+K
  };
}
