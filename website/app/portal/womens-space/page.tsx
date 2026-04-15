import { redirect } from 'next/navigation';
import { FaExclamationTriangle, FaHeart, FaShieldAlt, FaTint } from 'react-icons/fa';
import SupportPortalShell from '@/components/SupportPortalShell';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { hasWomenSupportAccess } from '@/lib/portalFocus';
import { urgentSupportLinks, womensSupportSections } from '@/lib/supportSpaces';

export const metadata = {
  title: 'Women\'s Support Space | Melksham Mental Health',
  description: 'Women-only support for safety, evidence capture, practical help and mental health recovery.',
};

const WHY_THIS_EXISTS = [
  'Over the years I have seen too many things done to women that have been treated as normal, laughed off, or hidden behind closed doors. I also need to own my own past. When I was drinking heavily, I behaved badly, crossed lines, spoke about women in vile ways and failed to show the respect women deserved. I am not excusing that. I am admitting it.',
  'Part of why this space exists is because I do not want to stay the man I used to be. I want to build something that helps protect women, backs them up and makes it harder for abuse, coercion, intimidation, manipulation and sexual harassment to stay hidden.',
  'In the last few months especially, I have spoken to women who have been subjected to some of the worst emotional abuse, physical abuse, coercive control, stalking, unsolicited sexual content and manipulation imaginable. Too many have been pushed into believing it is normal. Too many have hidden it to protect the perpetrator.',
  'What I keep hearing is distrust. Women do not feel heard. They do not trust the justice system to take them seriously. They do not believe anyone will actually step in. This part of Melksham Mental Health exists to change that on our side.',
  'This is a women-only support space. It gives you somewhere to document what is happening, use your mental health journal, upload screenshots or evidence, and create a clear record while somebody is actually paying attention. If you need help, you should know there is somebody behind you, reading it properly and ready to help you act.',
  'If you are being bombarded with unsolicited messages, explicit images, pressure, threats or harassment, capture it. Names, usernames, screenshots, dates, messages, photos, patterns of behaviour: put it here. If a platform ignores it, that does not mean it should be ignored.',
  'I cannot undo what has already happened to women. I cannot rewrite the past. What I can do is help make sure you are not left to carry it on your own, and help you stop it happening again if we can.',
  'You are not here to keep him comfortable. You are not here to hide what he is doing. You are not here to make yourself smaller so somebody else can keep control. If you need help, ask for it. If you are in danger, call 999. If you cannot do that safely, we will help you take the next step.',
];

const WOMENS_PORTAL_PROMISES = [
  {
    icon: <FaShieldAlt />,
    title: 'Document it properly',
    body: 'Use this space to record what is happening, how it is affecting you mentally, and the pattern behind it.',
  },
  {
    icon: <FaTint />,
    title: 'Build evidence that can be used',
    body: 'Upload screenshots, names, usernames, dates, messages and images so there is a real trail instead of another ignored incident.',
  },
  {
    icon: <FaHeart />,
    title: 'Stop protecting the perpetrator',
    body: 'You do not need to hide what he is doing to keep the peace. This space exists to back you up, not to excuse him.',
  },
];

const HOW_THIS_WORKS = [
  'Use your journal to track how the situation is affecting your mental health.',
  'Use Report Him to log messages, screenshots, images, names, timelines and patterns of behaviour.',
  'Use the practical links below for Clare\'s Law, abuse support, women\'s health, pregnancy help and emergency routes.',
  'Contact us if you need somebody to read what you have uploaded and help you decide the next step.',
];

export default async function WomensSpacePage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/womens-space');
  }
  if (!hasWomenSupportAccess(user)) {
    redirect('/portal');
  }

  return (
    <SupportPortalShell
      theme="women"
      activeHref="/portal/womens-space"
      kicker="Women's Support Space"
      title="A women-only space to document what happened and get backed up"
      description="This part of Melksham Mental Health exists because too many women have been expected to absorb abuse, coercion, stalking, harassment and humiliation in silence. This portal is here to help you record it, organise it and get support around it."
      backHref="/portal"
      backLabel="Back to main portal"
      actions={[
        { href: '/portal/report-him', label: 'Open Report Him' },
        { href: '/portal/diary', label: 'Open Journal' },
        { href: '/portal/pregnancy-support', label: 'Pregnancy support', variant: 'secondary' },
      ]}
      aside={(
        <div className="women-portal-side-list">
          <p className="women-portal-side-title">Inside this portal</p>
          <ul className="women-portal-side-items">
            <li>A private place to document what is happening and how it is affecting you</li>
            <li>Structured reporting for screenshots, names, messages, images and timelines</li>
            <li>Practical links for Clare&apos;s Law, abuse support, pregnancy and urgent safety routes</li>
            <li>Direct support from somebody who will actually read what you submit</li>
          </ul>
        </div>
      )}
    >
      <div className="women-space-page">
        <div className="grid gap-4 md:grid-cols-3 text-left">
          {WOMENS_PORTAL_PROMISES.map((item) => (
            <div key={item.title} className="women-space-panel">
              <div className="women-space-panel-icon">{item.icon}</div>
              <h2 className="women-space-panel-title">{item.title}</h2>
              <p className="women-space-panel-copy">{item.body}</p>
            </div>
          ))}
        </div>

        <section className="women-space-section mt-10 text-left">
          <h2 className="women-space-section-title">Why this space exists</h2>
          <div className="space-y-4">
            {WHY_THIS_EXISTS.map((paragraph) => (
              <p key={paragraph} className="women-space-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="women-space-section mt-10 text-left">
          <h2 className="women-space-section-title">How to use this portal</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {HOW_THIS_WORKS.map((item) => (
              <div key={item} className="women-space-link-card">
                <p className="women-space-link-copy">{item}</p>
              </div>
            ))}
          </div>
        </section>

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
    </SupportPortalShell>
  );
}
