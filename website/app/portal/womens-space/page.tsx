import { redirect } from 'next/navigation';
import { FaExclamationTriangle, FaHeart, FaShieldAlt, FaTint } from 'react-icons/fa';
import WomenPortalShell from '@/components/WomenPortalShell';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { hasWomenSupportAccess } from '@/lib/portalFocus';
import { urgentSupportLinks, womensSupportSections } from '@/lib/supportSpaces';

export const metadata = {
  title: 'Women\'s Support Space | Melksham Mental Health',
  description: 'Women-specific mental health, safety, pregnancy and practical support resources.',
};

export default async function WomensSpacePage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/womens-space');
  }
  if (!hasWomenSupportAccess(user)) {
    redirect('/portal');
  }

  return (
    <WomenPortalShell
      activeHref="/portal/womens-space"
      kicker="Women's Support Space"
      title="A separate women's portal, not the orange site in disguise"
      description="This area is built for women dealing with stalking, domestic abuse, periods, school assault, sexting, child-maintenance pressure, image-based harm and pregnancy-related strain."
      backHref="/portal"
      backLabel="Back to main portal"
      actions={[
        { href: '/portal/report-him', label: 'Open Report Him' },
        { href: '/portal/pregnancy-support', label: 'Pregnancy support', variant: 'secondary' },
      ]}
      aside={(
        <div className="women-portal-side-list">
          <p className="women-portal-side-title">Inside this portal</p>
          <ul className="women-portal-side-items">
            <li>Stalking, coercive control and Clare&apos;s Law support</li>
            <li>Periods, hormonal strain and women&apos;s health signposting</li>
            <li>Historic abuse, school assault, sexting and image-based harm</li>
            <li>Pregnancy routes, maternity support and emergency contacts</li>
          </ul>
        </div>
      )}
    >
      <div className="women-space-page">
        <div className="grid gap-4 md:grid-cols-3 text-left">
          {[
            {
              icon: <FaShieldAlt />,
              title: 'Safety first',
              body: 'Use Report Him to capture screenshots, messages, school incidents, timelines and a police-ready support pack.',
            },
            {
              icon: <FaTint />,
              title: 'Women\'s health',
              body: 'Periods, pain, heavy bleeding and hormonal health all affect mental wellbeing and deserve direct support.',
            },
            {
              icon: <FaHeart />,
              title: 'Practical support',
              body: 'Clare\'s Law, child maintenance, abuse support and urgent links are kept together so action is immediate.',
            },
          ].map((item) => (
            <div key={item.title} className="women-space-panel">
              <div className="women-space-panel-icon">{item.icon}</div>
              <h2 className="women-space-panel-title">{item.title}</h2>
              <p className="women-space-panel-copy">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-8 text-left">
          {womensSupportSections.map((section) => (
            <section key={section.title} className="women-space-section">
              <h2 className="women-space-section-title">{section.title}</h2>
              {section.description ? <p className="women-space-copy mb-4">{section.description}</p> : null}
              <div className="grid gap-3">
                {section.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="women-space-link-card"
                  >
                    <p className="women-space-link-title">{link.title}</p>
                    <p className="women-space-link-copy">{link.description}</p>
                    {link.phone ? <p className="women-space-link-meta">Phone: {link.phone}</p> : null}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="women-space-alert mt-10 text-left">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle className="mt-1 text-pink-100 flex-shrink-0" />
            <div>
              <h2 className="women-space-section-title !mb-2">Urgent help now</h2>
              <div className="grid gap-3 md:grid-cols-3">
                {urgentSupportLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="women-space-link-card"
                  >
                    <p className="women-space-link-title">{link.title}</p>
                    <p className="women-space-link-copy">{link.description}</p>
                    {link.phone ? <p className="women-space-link-meta">Phone: {link.phone}</p> : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </WomenPortalShell>
  );
}
