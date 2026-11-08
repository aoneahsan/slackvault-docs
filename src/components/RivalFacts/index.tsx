import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import facts from '@site/src/data/compare-facts.json';
import styles from './styles.module.css';

/**
 * The dated fact tables on the "Moving to SlackVault" guides.
 *
 * Reads `src/data/compare-facts.json`, a copy of the product site's comparison
 * record with its source and check date on every row. The product repository's
 * contract test fails if the two disagree.
 */
const THIRD_PARTY_REL = 'noopener noreferrer nofollow';
const NOT_STATED = 'Not stated on the pages we checked';
const STATUS_LABELS: Record<string, string> = {
  yes: 'Yes',
  no: 'No',
  partial: 'Partly',
  'not-stated': NOT_STATED,
};
const PERIODS: Record<string, string> = { month: 'month', year: 'year', 'one-time': 'one time' };

interface Feature {
  status: string;
  source?: string;
  note?: string;
}

interface Price {
  plan: string;
  amount: number | null;
  period: string;
  note?: string;
  source: string;
}

interface Rival {
  slug: string;
  name: string;
  officialUrl: string;
  lastChecked: string;
  prices: Price[];
  features: Record<string, Feature>;
  strongerThere: string;
  strongerHere: string;
}

const RIVALS = facts.rivals as unknown as Rival[];

/** `2026-11-07` as `November 7, 2026`, in UTC so the date never shifts. */
function longDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}

function priceLabel(price: Price): string {
  if (price.amount === null) return 'No listed price';
  const amount = Number.isInteger(price.amount) ? String(price.amount) : price.amount.toFixed(2);
  return `$${amount} / ${PERIODS[price.period] ?? price.period}`;
}

/** A link to a site we do not run. */
export function Out({ href, children }: { href: string; children: ReactNode }): ReactNode {
  return (
    <a href={href} target="_blank" rel={THIRD_PARTY_REL}>
      {children}
    </a>
  );
}

/** Every rival's guide, for the index page. */
export function RivalList(): ReactNode {
  return (
    <ul>
      {RIVALS.map((rival) => (
        <li key={rival.slug}>
          <Link to={`/compare/${rival.slug}`}>{rival.name}</Link>
        </li>
      ))}
    </ul>
  );
}

/** What SlackVault does not do, shared by the index and every guide. */
export function OurLimits(): ReactNode {
  return (
    <ul className={styles.limits}>
      {facts.limits.map((limit) => (
        <li key={limit}>{limit}</li>
      ))}
    </ul>
  );
}

export function LastChecked(): ReactNode {
  return <strong>Last checked {longDate(facts.lastChecked)}.</strong>;
}

/**
 * One rival's dated tables. `hideNotStated` drops the side-by-side rows their pages did not state;
 * the guide then says once which those were. `verdict={false}` drops "Which one suits you" for a
 * guide whose own opening already says who each product is for.
 */
export default function RivalFacts({
  slug,
  hideNotStated = false,
  verdict = true,
}: {
  slug: string;
  hideNotStated?: boolean;
  verdict?: boolean;
}): ReactNode {
  const rival = RIVALS.find((candidate) => candidate.slug === slug);
  if (!rival) throw new Error(`RivalFacts: no record for "${slug}"`);

  return (
    <>
      <p>
        <strong>Last checked {longDate(rival.lastChecked)}.</strong>{' '}
        <Out href={rival.officialUrl}>Check {rival.name} for yourself</Out>. {facts.affiliation}
      </p>

      {verdict ? (
        <>
          <h2>Which one suits you</h2>
          <p>{rival.strongerThere}</p>
          <p>{rival.strongerHere}</p>
        </>
      ) : null}

      <h2>Prices</h2>
      {rival.prices.length === 0 ? (
        <p>No price is stated on the pages we checked.</p>
      ) : (
        <div className={styles.wrap}>
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Price</th>
                <th>Terms as listed</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {rival.prices.map((price) => (
                <tr key={price.plan}>
                  <td>{price.plan}</td>
                  <td>{priceLabel(price)}</td>
                  <td>{price.note}</td>
                  <td>
                    <Out href={price.source}>Their page</Out>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2>Side by side</h2>
      <div className={styles.wrap}>
        <table>
          <thead>
            <tr>
              <th>What you need</th>
              <th>SlackVault</th>
              <th>{rival.name}</th>
            </tr>
          </thead>
          <tbody>
            {facts.features
              .filter((feature) => !hideNotStated || rival.features[feature.key].status !== 'not-stated')
              .map((feature) => {
              const theirs = rival.features[feature.key];
              return (
                <tr key={feature.key}>
                  <td>{feature.label}</td>
                  <td>
                    <strong>{feature.ours}</strong>
                    {feature.oursNote ? `: ${feature.oursNote}` : null}
                  </td>
                  <td>
                    <strong>{STATUS_LABELS[theirs.status]}</strong>
                    {theirs.note ? `: ${theirs.note}` : null}{' '}
                    {theirs.source ? <Out href={theirs.source}>Their page</Out> : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2>What SlackVault does not do</h2>
      <OurLimits />
    </>
  );
}
