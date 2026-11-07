import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Complete message backup',
    body: 'Public channels, private channels, DMs, group DMs, threaded replies, and emoji reactions — captured and preserved from your workspace.',
  },
  {
    title: 'Files & media storage',
    body: 'Every shared file gets a record in your archive. File copies, when switched on, sit at a public, hard-to-guess link on our file storage, not in your own storage.',
  },
  {
    title: 'Instant full-text search',
    body: 'Search across every backed-up message, file, and channel, with filters by date, channel, and user — often faster than Slack’s own search.',
  },
  {
    title: 'Export to JSON, CSV, HTML, Markdown',
    body: 'Export a channel or your whole archive as structured JSON, tabular CSV, or readable HTML and Markdown conversation logs.',
  },
  {
    title: 'Your data, your control',
    body: 'Messages are stored in your own Firebase project, never on a SlackVault server. Delete them anytime.',
  },
  {
    title: 'Zero ongoing cost',
    body: 'Runs entirely on free tiers: Firebase free tier, a Cloudflare Worker for OAuth, and a browser extension that syncs locally.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started/quick-start"
          >
            Quick Start — 5 min
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/intro"
          >
            Read the docs
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://slackvault.aoneahsan.com"
          >
            Open the app
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div key={f.title} className="col col--4" style={{ marginBottom: '1.5rem' }}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link href="https://www.npmjs.com/~aoneahsan">npm</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Slack backup & archive`}
      description="Documentation for SlackVault: connect a Slack workspace via OAuth, sync messages, channels, threads, and files to your own Firebase, then search and export your archive — at zero cost."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
