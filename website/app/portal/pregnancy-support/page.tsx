import { redirect } from 'next/navigation';
import { FaBaby, FaHeart, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import SupportPortalShell from '@/components/SupportPortalShell';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { hasWomenSupportAccess } from '@/lib/portalFocus';
import { pregnancySupportSections } from '@/lib/supportSpaces';

export const metadata = {
  title: 'Pregnancy Support | Melksham Mental Health',
  description: 'Pregnancy support for planned, unplanned, safe and unsafe situations, with local maternity routes.',
};

export default async function PregnancySupportPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/pregnancy-support');
  }
  if (!hasWomenSupportAccess(user)) {
    redirect('/portal');
  }

  return (
    <SupportPortalShell
      theme="women"
      activeHref="/portal/pregnancy-support"
      kicker="Pregnancy Support"
      title="Pregnancy support without losing the rest of the site"
      description="Planned or unplanned, single or in a relationship, safe or unsafe: this space keeps practical next steps, maternity routes and abuse support together while still leaving the wider Melksham site available."
      backHref="/portal/womens-space"
      backLabel="Back to women's portal"
      actions={[
        { href: '/courses', label: 'Courses' },
        { href: '/portal/report-him', label: 'Report Him' },
        { href: '/portal/womens-space', label: 'Women\'s home', variant: 'secondary' },
      ]}
      aside={(
        <div className="women-portal-side-list">
          <p className="women-portal-side-title">What this covers</p>
          <ul className="women-portal-side-items">
            <li>First NHS steps and counselling support</li>
            <li>Unplanned pregnancy and decision support</li>
            <li>Wiltshire maternity routes and local contacts</li>
            <li>Safety planning where a partner increases risk</li>
          </ul>
        </div>
      )}
    >
      <div className="women-space-page">
        <div className="grid gap-4 md:grid-cols-3 text-left">
          {[
            {
              icon: <FaBaby />,
              title: 'Planned or unplanned',
              body: 'The page includes NHS first steps plus counselling and options support if you are unsure what to do.',
            },
            {
              icon: <FaHeart />,
              title: 'Single or in a relationship',
              body: 'Use the practical support links even if the relationship feels unstable, controlling or financially unsafe.',
            },
            {
              icon: <FaShieldAlt />,
              title: 'Safety first',
              body: 'If pregnancy has increased risk from a partner or ex-partner, use the abuse and Clare\'s Law links immediately.',
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
          {pregnancySupportSections.map((section) => (
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
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="women-space-link-title">{link.title}</p>
                        <p className="women-space-link-copy">{link.description}</p>
                        {link.phone ? <p className="women-space-link-meta">Phone: {link.phone}</p> : null}
                      </div>
                      {section.title.toLowerCase().includes('maternity') ? <FaMapMarkerAlt className="text-pink-100 flex-shrink-0 mt-1" /> : null}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SupportPortalShell>
  );
}
