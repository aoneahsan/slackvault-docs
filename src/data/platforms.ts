/**
 * Every place SlackVault is released — the ONLY place a store or surface URL lives in this docs site
 * (standard aoneahsan-cccs-platform-links). Each surface passed its release proof on `verified`:
 * the web app and this site answered 200.
 */
export type PlatformId = 'web' | 'docs';

export interface Platform {
  id: PlatformId;
  /** Store or surface name (a proper name, not copy). */
  name: string;
  href: string;
  /** What this surface is for, in SlackVault's words. */
  title: string;
  text: string;
  cta: string;
  primary?: boolean;
  verified: string;
}

export const PLATFORMS: readonly Platform[] = [
  {id: 'web', name: 'SlackVault web app', href: 'https://slackvault.aoneahsan.com', title: 'In your browser', text: 'Connect your Slack workspace, keep its history, and search it from the web app.', cta: 'Open SlackVault', primary: true, verified: '2026-11-20'},
  {id: 'docs', name: 'Documentation', href: 'https://slackvault-docs.aoneahsan.com', title: 'These docs', text: 'Installation, a quick start, and how the archive works.', cta: 'Read the docs', verified: '2026-11-20'},
];

export const APPS_PAGE = {
  title: 'Get SlackVault',
  description: 'Every place SlackVault is released: the web app and these docs.',
  lead: 'Run your archive from the web app, and keep these docs a tab away.',
} as const;

/** This site is the docs surface. */
export const CURRENT_SURFACE: PlatformId = 'docs';
export const OTHER_PLATFORMS: readonly Platform[] = PLATFORMS.filter((platform) => platform.id !== CURRENT_SURFACE);
export const PRIMARY_PLATFORM: Platform = PLATFORMS.find((platform) => platform.primary) ?? PLATFORMS[0];
export function platformHref(id: PlatformId): string {
  const found = PLATFORMS.find((platform) => platform.id === id);
  if (!found) throw new Error(`Unknown platform: ${id}`);
  return found.href;
}
/** `/apps` changes only when this list does: its sitemap date is the newest proof date. */
export const APPS_LASTMOD: string = PLATFORMS.map((platform) => platform.verified).sort().at(-1) ?? '2026-11-20';
