import { redirect } from 'next/navigation';
import { FaHandsHelping, FaMale, FaUserFriends } from 'react-icons/fa';
import SupportPortalShell from '@/components/SupportPortalShell';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { hasMenSupportAccess } from '@/lib/portalFocus';
import { mensSupportSections, urgentSupportLinks } from '@/lib/supportSpaces';

export const metadata = {
  title: 'Men\'s Support Space | Melksham Mental Health',
  description: 'Men-specific mental health, talking therapy, fatherhood and abuse support resources.',
};

export default async function MensSpacePage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/mens-space');
  }
  if (!hasMenSupportAccess(user)) {
    redirect('/portal');
  }

  return (
    <SupportPortalShell
      theme="men"
      activeHref="/portal/mens-space"
      kicker="Men's Support Space"
      title="Men's portal with the full site still intact"
      description="This portal keeps Melksham's main site access in place and adds men-specific coverage for talking therapies, fatherhood, family strain, abuse support and practical help."
      backHref="/portal"
      backLabel="Back to main portal"
      actions={[
        { href: '/courses', label: 'Courses' },
        { href: '/portal', label: 'Portal home', variant: 'secondary' },
      ]}
      aside={(
        <div className="women-portal-side-list">
          <p className="women-portal-side-title">Inside this portal</p>
          <ul className="women-portal-side-items">
            <li>Talking therapies and crisis routes for men</li>
            <li>Fatherhood, family pressure and maintenance guidance</li>
            <li>Abuse, coercive control and practical support pathways</li>
            <li>Full access to courses, blog, resources and main portal tools</li>
          </ul>
        </div>
      )}
    >
      <div className="mens-space-page">
        <div className="mt-2 grid gap-4 md:grid-cols-3 text-left">
          {[
            {
              icon: <FaMale />,
              title: 'Men-specific support',
              body: 'Straight routes into talking therapies, crisis help and support that does not assume men will ask twice.',
            },
            {
              icon: <FaUserFriends />,
              title: 'Fatherhood and family',
              body: 'Practical guidance for pregnancy support, parenting pressure and separated-family issues.',
            },
            {
              icon: <FaHandsHelping />,
              title: 'Abuse support matters too',
              body: 'Male victims of abuse and coercive control need visible, direct support pathways as well.',
            },
          ].map((item) => (
            <div key={item.title} className="mens-space-panel">
              <div className="mens-space-panel-icon">{item.icon}</div>
              <h2 className="mens-space-panel-title">{item.title}</h2>
              <p className="mens-space-panel-copy">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-8 text-left">
          {mensSupportSections.map((section) => (
            <section key={section.title} className="mens-space-section">
              <h2 className="mens-space-section-title">{section.title}</h2>
              {section.description ? <p className="mens-space-copy mb-4">{section.description}</p> : null}
              <div className="grid gap-3">
                {section.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mens-space-link-card"
                  >
                    <p className="mens-space-link-title">{link.title}</p>
                    <p className="mens-space-link-copy">{link.description}</p>
                    {link.phone ? <p className="mens-space-link-meta">Phone: {link.phone}</p> : null}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mens-space-section mt-10 text-left">
          <h2 className="mens-space-section-title">Urgent help now</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {urgentSupportLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="mens-space-link-card"
              >
                <p className="mens-space-link-title">{link.title}</p>
                <p className="mens-space-link-copy">{link.description}</p>
                {link.phone ? <p className="mens-space-link-meta">Phone: {link.phone}</p> : null}
              </a>
            ))}
          </div>
        </section>
      </div>
    </SupportPortalShell>
  );
}
