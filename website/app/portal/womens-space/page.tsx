import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaArrowLeft, FaBaby, FaExclamationTriangle, FaHeart, FaShieldAlt, FaTint } from 'react-icons/fa';
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
    <div className="page-content women-space-page">
      <div className="flex items-center gap-3 mb-2">
        <Link href="/portal" className="text-pink-100 hover:text-white transition-colors">
          <FaArrowLeft />
        </Link>
        <p className="women-space-kicker">Women&apos;s Support Space</p>
      </div>

      <div className="women-space-hero text-left">
        <h1 className="women-space-title">Women&apos;s Support Space</h1>
        <p className="women-space-copy">
          A dedicated area for women dealing with safety concerns, stalking, domestic abuse, pregnancy,
          periods, child-maintenance stress, sexual assault when younger, school-based abuse,
          sexting and image-based harm.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/portal/report-him" className="women-space-button">
            <FaShieldAlt /> Report Him
          </Link>
          <Link href="/portal/pregnancy-support" className="women-space-button women-space-button--ghost">
            <FaBaby /> Pregnancy Support
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3 text-left">
        {[
          {
            icon: <FaShieldAlt />,
            title: 'Safety first',
            body: 'Use the Report Him tool to capture screenshots, messages, school incidents, timelines and a police-ready support pack.',
          },
          {
            icon: <FaTint />,
            title: 'Women\'s health',
            body: 'Periods, pain, heavy bleeding and hormonal health all affect mental wellbeing and deserve direct support.',
          },
          {
            icon: <FaHeart />,
            title: 'Practical support',
            body: 'Clare\'s Law, child maintenance, abuse support and urgent links are in one place so people can act quickly.',
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
  );
}
