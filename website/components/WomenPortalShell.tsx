import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaArrowLeft, FaBaby, FaHeart, FaHome, FaShieldAlt } from 'react-icons/fa';

interface WomenPortalAction {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

interface WomenPortalShellProps {
  activeHref: string;
  kicker: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  actions?: WomenPortalAction[];
  aside?: ReactNode;
  children: ReactNode;
}

const NAV_ITEMS = [
  { href: '/portal/womens-space', label: 'Women\'s Home', icon: <FaHeart /> },
  { href: '/portal/report-him', label: 'Report Him', icon: <FaShieldAlt /> },
  { href: '/portal/pregnancy-support', label: 'Pregnancy', icon: <FaBaby /> },
  { href: '/portal', label: 'Portal Home', icon: <FaHome /> },
];

export default function WomenPortalShell({
  activeHref,
  kicker,
  title,
  description,
  backHref,
  backLabel,
  actions = [],
  aside,
  children,
}: WomenPortalShellProps) {
  return (
    <div className="women-portal-shell">
      <header className="women-portal-header">
        <div className="women-portal-header-art" aria-hidden="true" />

        <div className="women-portal-header-lower">
          <p className="women-portal-header-label">Melksham Women&apos;s Portal</p>

          <nav className="women-portal-nav" aria-label="Women portal">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === activeHref;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`women-portal-nav-link${isActive ? ' women-portal-nav-link--active' : ''}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="women-portal-alert-strip">
          If you are in immediate danger, call <a href="tel:999">999</a>. For confidential support call{' '}
          <a href="tel:08082000247">0808 2000 247</a>.
        </div>
      </header>

      <section className="women-portal-hero">
        <div className="women-portal-hero-overlay" />

        <div className="women-portal-hero-back-row">
          <Link href={backHref} className="women-portal-back-link">
            <FaArrowLeft />
            <span>{backLabel}</span>
          </Link>
          <p className="women-portal-kicker">{kicker}</p>
        </div>

        <div className="women-portal-hero-grid">
          <div className="women-portal-hero-copy">
            <h1 className="women-portal-title">{title}</h1>
            <p className="women-portal-description">{description}</p>

            {actions.length > 0 ? (
              <div className="women-portal-actions">
                {actions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={`women-portal-action${action.variant === 'secondary' ? ' women-portal-action--secondary' : ''}`}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="women-portal-side-panel">
            <div className="women-portal-side-panel-content">{aside}</div>
          </aside>
        </div>
      </section>

      <div className="women-portal-content">{children}</div>

      <footer className="women-portal-footer">
        <div className="women-portal-footer-art" aria-hidden="true" />
        <div className="women-portal-footer-copywrap">
          <p className="women-portal-footer-title">Melksham Women&apos;s Portal</p>
          <p className="women-portal-footer-copy">
            A separate support space for women facing abuse, stalking, pregnancy pressure, sexual harm,
            coercive control and mental health strain.
          </p>
        </div>
      </footer>
    </div>
  );
}
