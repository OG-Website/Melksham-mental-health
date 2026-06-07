import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/constants';

interface SupportPortalAction {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

interface SupportPortalLink {
  href: string;
  label: string;
}

interface SupportPortalThemeConfig {
  brandTitle: string;
  strapline: string;
  emergencyCopy: ReactNode;
  footerCopy: string;
  headerSrc: string;
  footerSrc: string;
  bannerAlt: string;
  spaceLinks: SupportPortalLink[];
}

interface SupportPortalShellProps {
  theme: 'women' | 'men';
  activeHref: string;
  kicker: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  actions?: SupportPortalAction[];
  aside?: ReactNode;
  children: ReactNode;
}

const SITE_LINKS: SupportPortalLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'My Story' },
  { href: '/app/support', label: 'Get Support' },
  { href: '/resources', label: 'Resources' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources/crisis', label: 'Crisis Help' },
  { href: '/contact', label: 'Contact' },
];

const PORTAL_LINKS: SupportPortalLink[] = [
  { href: '/portal', label: 'Portal Home' },
  { href: '/portal/diary', label: 'Diary' },
  { href: '/portal/wall', label: 'Community Wall' },
  { href: '/portal/self-referral', label: 'Self-Referral' },
  { href: '/portal/help', label: 'Help' },
];

const THEME_CONFIG: Record<'women' | 'men', SupportPortalThemeConfig> = {
  women: {
    brandTitle: "Melksham Women's Portal",
    strapline: 'Same Melksham site access, with women-specific coverage layered on top.',
    emergencyCopy: (
      <>
        If you are in immediate danger, call <a href="tel:999">999</a>. For confidential domestic abuse support call{' '}
        <a href="tel:08082000247">0808 2000 247</a>.
      </>
    ),
    footerCopy:
      'Women-specific safeguarding, pregnancy, health and reporting support inside the wider Melksham Mental Health site.',
    headerSrc: '/portals/women/header.png',
    footerSrc: '/portals/women/footer.png',
    bannerAlt: "Melksham Women's Portal banner art",
    spaceLinks: [
      { href: '/portal/womens-space', label: "Women's Home" },
      { href: '/portal/report-him', label: 'Report Him' },
      { href: '/portal/pregnancy-support', label: 'Pregnancy Support' },
    ] satisfies SupportPortalLink[],
  },
  men: {
    brandTitle: "Melksham Men's Portal",
    strapline: 'Same Melksham site access, with men-specific coverage and practical support layered on top.',
    emergencyCopy: (
      <>
        If you are in immediate danger, call <a href="tel:999">999</a>. For urgent emotional support call{' '}
        <a href="tel:116123">116 123</a>.
      </>
    ),
    footerCopy:
      'Men-specific mental health, fatherhood, abuse and recovery support inside the wider Melksham Mental Health site.',
    headerSrc: '/portals/men/header.png',
    footerSrc: '/portals/men/footer.png',
    bannerAlt: "Melksham Men's Portal banner art",
    spaceLinks: [{ href: '/portal/mens-space', label: "Men's Home" }] satisfies SupportPortalLink[],
  },
};

function navLinkClass(active: boolean): string {
  return `support-portal-nav-link${active ? ' support-portal-nav-link--active' : ''}`;
}

export default function SupportPortalShell({
  theme,
  activeHref,
  kicker,
  title,
  description,
  backHref,
  backLabel,
  actions = [],
  aside,
  children,
}: SupportPortalShellProps) {
  const config = THEME_CONFIG[theme];
  const portalLinks = [...PORTAL_LINKS, ...config.spaceLinks];

  return (
    <div className={`support-portal-shell support-portal-shell--${theme}`}>
      <header className="support-portal-header">
        <div className="support-portal-banner support-portal-banner--header">
          <Image
            src={config.headerSrc}
            alt={config.bannerAlt}
            width={1504}
            height={254}
            className="support-portal-banner-image"
            priority
          />
          <div className="support-portal-banner-mask support-portal-banner-mask--header" aria-hidden="true" />
        </div>

        <div className="support-portal-shell-copyline">
          <p className="support-portal-brandlabel">{config.brandTitle}</p>
          <p className="support-portal-brandstrap">{config.strapline}</p>
        </div>

        <nav className="support-portal-nav support-portal-nav--site" aria-label="Main site links">
          {SITE_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(activeHref === item.href)}
              aria-current={activeHref === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="support-portal-toolbar">
          <Link href="/resources/crisis" className="support-portal-helpbutton">
            Need Help Now?
          </Link>

          <nav className="support-portal-toolbar-links" aria-label="Portal links">
            {portalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`support-portal-toolbutton${activeHref === item.href ? ' support-portal-toolbutton--active' : ''}`}
                aria-current={activeHref === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="support-portal-alert-strip">{config.emergencyCopy}</div>
      </header>

      <section className="support-portal-hero">
        <div className="support-portal-hero-backrow">
          <Link href={backHref} className="support-portal-backlink">
            <FaArrowLeft />
            <span>{backLabel}</span>
          </Link>
          <p className="support-portal-kicker">{kicker}</p>
        </div>

        <div className="support-portal-hero-grid">
          <div className="support-portal-herocopy">
            <h1 className="support-portal-title">{title}</h1>
            <p className="support-portal-description">{description}</p>

            {actions.length > 0 ? (
              <div className="support-portal-actions">
                {actions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={`support-portal-action${action.variant === 'secondary' ? ' support-portal-action--secondary' : ''}`}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="support-portal-sidepanel">
            <div className="support-portal-sidepanelcontent">{aside}</div>
          </aside>
        </div>
      </section>

      <div className="support-portal-content">{children}</div>

      <footer className="support-portal-footer">
        <div className="support-portal-banner support-portal-banner--footer">
          <Image
            src={config.footerSrc}
            alt={`${config.bannerAlt} footer art`}
            width={1434}
            height={289}
            className="support-portal-banner-image"
          />
          <div className="support-portal-banner-mask support-portal-banner-mask--footer" aria-hidden="true" />
        </div>

        <div className="support-portal-footerbar">
          <div className="support-portal-footercopywrap">
            <p className="support-portal-footertitle">{config.brandTitle}</p>
            <p className="support-portal-footercopy">{config.footerCopy}</p>
          </div>

          <nav className="support-portal-footerlinks" aria-label="Footer links">
            {SITE_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="support-portal-footerlink">
                {item.label}
              </Link>
            ))}
            {portalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="support-portal-footerlink">
                {item.label}
              </Link>
            ))}
            <a href={CONTACT_EMAIL_HREF} className="support-portal-footerlink">
              {CONTACT_EMAIL}
            </a>
            <Link href="/privacy" className="support-portal-footerlink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="support-portal-footerlink">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
