import fs from 'fs';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
  FaArrowLeft,
  FaBook,
  FaCheckCircle,
  FaComments,
  FaDatabase,
  FaEnvelope,
  FaExclamationTriangle,
  FaFileAlt,
  FaHandHoldingHeart,
  FaHeart,
  FaInfoCircle,
  FaLock,
  FaMars,
  FaPencilAlt,
  FaQuestionCircle,
  FaShieldAlt,
  FaSitemap,
  FaTimesCircle,
  FaUserShield,
  FaUsers,
  FaVenus,
} from 'react-icons/fa';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { getPortalUsersStorageDetails } from '@/lib/portalConfig';
import { getPortalUsersTableStats, getWomenSupportTableStats } from '@/lib/portalDb';
import { getAllMembers } from '@/lib/users';
import { getAllMessages } from '@/lib/helpMessages';
import { CONTACT_EMAIL } from '@/lib/constants';

export const metadata = {
  title: 'Site Overview | Melksham Mental Health Admin',
  description: 'Admin-only overview of the portal structure, storage layout, support spaces and safety reporting.',
};

function bytesToHuman(bytes: number): string {
  if (bytes === 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getFileInfo(filePath: string): { exists: boolean; sizeBytes: number; entries: number } {
  try {
    if (!fs.existsSync(filePath)) return { exists: false, sizeBytes: 0, entries: 0 };
    const stat = fs.statSync(filePath);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw) as unknown[];
    return { exists: true, sizeBytes: stat.size, entries: Array.isArray(parsed) ? parsed.length : 0 };
  } catch {
    return { exists: false, sizeBytes: 0, entries: 0 };
  }
}

const SITE_TREE = [
  {
    section: 'Public Pages',
    routes: [
      { path: '/', label: 'Home', desc: 'Landing page with introduction, support signposting and portal entry points.' },
      { path: '/about', label: 'About', desc: 'Organisation background, mission and founder context.' },
      { path: '/resources', label: 'Resources', desc: 'Public mental health resource hub.' },
      { path: '/resources/crisis', label: 'Crisis Resources', desc: 'Public emergency and urgent support information.' },
      { path: '/community', label: 'Community', desc: 'Public community overview page.' },
      { path: '/community/stories', label: 'Community Stories', desc: 'Shared lived-experience stories.' },
      { path: '/blog', label: 'Blog', desc: 'Public written content and updates.' },
      { path: '/contact', label: 'Contact', desc: `Contact route sending to ${CONTACT_EMAIL}.` },
      { path: '/courses', label: 'Courses', desc: '50-module programme browser and course-interest entry point.' },
      { path: '/privacy', label: 'Privacy Policy', desc: 'Data and privacy information.' },
      { path: '/terms', label: 'Terms', desc: 'Terms of service.' },
    ],
  },
  {
    section: 'Portal Routes',
    routes: [
      { path: '/portal/register', label: 'Register', desc: 'Member registration with portal-space selection: general, women or men.' },
      { path: '/portal/login', label: 'Login', desc: 'Member and admin login with redirect based on support-space selection.' },
      { path: '/portal', label: 'Portal Dashboard', desc: 'Main logged-in dashboard. Admin sees members, reports, broadcasts and operational queues.' },
      { path: '/portal/womens-space', label: 'Women\'s Support Space', desc: 'Women-specific support area with safety, health and practical links.' },
      { path: '/portal/report-him', label: 'Report Him', desc: 'Structured abuse and stalking reporting with evidence upload and police-ready pack generation.' },
      { path: '/portal/pregnancy-support', label: 'Pregnancy Support', desc: 'Pregnancy, maternity and safety support for planned or unplanned situations.' },
      { path: '/portal/mens-space', label: 'Men\'s Support Space', desc: 'Men-specific talking therapy, fatherhood, abuse and practical support links.' },
      { path: '/portal/diary', label: 'My Diary', desc: 'Private diary entries for the logged-in member.' },
      { path: '/portal/my-story', label: 'My Story', desc: 'Private lived-experience story saved against the member account.' },
      { path: '/portal/wall', label: 'Community Wall', desc: 'Shared member wall with optional anonymous posting.' },
      { path: '/portal/help', label: 'Help & Questions', desc: 'Member-to-admin support requests and replies.' },
      { path: '/portal/self-referral', label: 'Self-Referral Links', desc: 'Curated referral and support directory.' },
      { path: '/portal/change-password', label: 'Change Password', desc: 'Password change route for members.' },
      { path: '/portal/admin', label: 'Site Overview', desc: 'Admin-only operational overview of the system.' },
    ],
  },
  {
    section: 'Portal API',
    routes: [
      { path: '/api/auth/register', label: 'POST register', desc: 'Creates account, stores selected portal focus, starts session and sends welcome email.' },
      { path: '/api/auth/login', label: 'POST login', desc: 'Validates credentials and returns user profile including portal focus.' },
      { path: '/api/auth/me', label: 'GET current user', desc: 'Returns the current session user with support-space metadata.' },
      { path: '/api/portal/report-him', label: 'POST women report', desc: 'Creates a women-safety report with uploaded evidence files.' },
      { path: '/api/portal/report-him/[reportId]', label: 'PATCH women report', desc: 'Admin-only status, notes and police reference updates.' },
      { path: '/api/portal/report-him/[reportId]/attachments/[attachmentId]', label: 'GET women report evidence', desc: 'Owner or admin-only attachment download.' },
      { path: '/api/portal/admin/broadcast', label: 'POST admin broadcast', desc: 'Sends an email and saves a note to all registered members.' },
      { path: '/api/portal/admin/stats', label: 'GET admin stats', desc: 'Storage, capacity and durability overview for the admin dashboard.' },
      { path: '/api/portal/diary', label: 'Diary CRUD', desc: 'Create, list and delete diary entries.' },
      { path: '/api/portal/wall', label: 'Wall CRUD', desc: 'Create, list and delete community wall posts.' },
      { path: '/api/portal/help', label: 'Help messages', desc: 'Create and list member help messages and admin replies.' },
      { path: '/api/portal/interest', label: 'Course interest', desc: 'Toggle requested course modules.' },
      { path: '/api/portal/course-access', label: 'Course access', desc: 'Apply for or approve course access.' },
      { path: '/api/portal/change-password', label: 'Password change', desc: 'Change member password.' },
    ],
  },
];

const ACCOUNT_FIELDS = [
  { field: 'id', type: 'string', desc: 'UUID for the member account.' },
  { field: 'email', type: 'string', desc: 'Lower-case login email.' },
  { field: 'passwordHash', type: 'string', desc: 'bcrypt hash only. Plain-text password is never stored.' },
  { field: 'name', type: 'string', desc: 'Display name used throughout the portal.' },
  { field: 'portalFocus', type: 'general | women | men', desc: 'Selected support space used for post-login routing and gated sections.' },
  { field: 'gdprConsent', type: 'boolean', desc: 'Registration consent flag.' },
  { field: 'gdprConsentDate', type: 'ISO 8601 string', desc: 'Timestamp of consent capture.' },
  { field: 'createdAt', type: 'ISO 8601 string', desc: 'Timestamp of account creation.' },
  { field: 'interests', type: 'number[]', desc: 'Requested course module IDs.' },
  { field: 'courseAccess', type: 'boolean', desc: 'Admin-approved course access flag.' },
  { field: 'courseAccessApplied', type: 'boolean', desc: 'Whether the member has applied for course access.' },
  { field: 'story', type: 'string?', desc: 'Optional private lived-experience text.' },
  { field: 'loginCount', type: 'number', desc: 'Successful login counter.' },
  { field: 'lastLoginAt', type: 'ISO 8601 string?', desc: 'Timestamp of the last successful login.' },
];

const WOMEN_REPORT_FIELDS = [
  { field: 'incidentType', type: 'string', desc: 'Core category such as stalking, harassment or coercive control.' },
  { field: 'summary', type: 'string', desc: 'Primary chronology of what happened.' },
  { field: 'messageExcerpt', type: 'string?', desc: 'Quoted or pasted wording from messages or threats.' },
  { field: 'incidentDateText', type: 'string?', desc: 'Free-text date, time or timeframe.' },
  { field: 'incidentLocation', type: 'string?', desc: 'Location where the incident happened.' },
  { field: 'platformOrChannel', type: 'string?', desc: 'Where the conduct took place, for example WhatsApp or in person.' },
  { field: 'relationshipContext', type: 'string?', desc: 'Relationship to the person being reported.' },
  { field: 'suspectName', type: 'string?', desc: 'Name or handle of the person being reported.' },
  { field: 'suspectContact', type: 'string?', desc: 'Known usernames, phone numbers or identifying details.' },
  { field: 'impactStatement', type: 'string?', desc: 'Impact on safety, children, work, sleep or wellbeing.' },
  { field: 'desiredSupport', type: 'string?', desc: 'What help the member wants from the portal/admin team.' },
  { field: 'anonymousToPolice', type: 'boolean', desc: 'Whether the user requested an anonymous police-ready pack where possible.' },
  { field: 'immediateDanger', type: 'boolean', desc: 'Immediate-risk flag for urgent safeguarding.' },
  { field: 'status', type: 'submitted | reviewing | ready', desc: 'Admin workflow status.' },
  { field: 'policeReference', type: 'string?', desc: 'Optional police or safeguarding reference recorded by admin.' },
  { field: 'adminNotes', type: 'string?', desc: 'Internal admin notes for handling and follow-up.' },
  { field: 'attachments', type: 'file[]', desc: 'Uploaded images or PDFs stored in Postgres.' },
  { field: 'generatedPack', type: 'derived text', desc: 'Police-ready export text assembled from the submitted report.' },
];

export default async function AdminOverviewPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user || !user.isAdmin) {
    redirect('/portal');
  }

  const isProduction = process.env.NODE_ENV === 'production';
  const usersStorage = getPortalUsersStorageDetails();
  const diaryPath = process.env.DIARY_DATA_PATH ?? (isProduction ? '/tmp/mmh-diary.json' : 'data/diary.json');
  const wallPath = process.env.WALL_DATA_PATH ?? (isProduction ? '/tmp/mmh-wall.json' : 'data/wall.json');
  const helpPath = process.env.HELP_DATA_PATH ?? (isProduction ? '/tmp/mmh-help.json' : 'data/help-messages.json');

  const usersInfo = usersStorage.mode === 'database'
    ? { exists: true, ...(await getPortalUsersTableStats()) }
    : getFileInfo(usersStorage.location);
  const womenSupportInfo = usersStorage.mode === 'database'
    ? { exists: true, ...(await getWomenSupportTableStats()) }
    : { exists: false, reportEntries: 0, attachmentEntries: 0, sizeBytes: 0 };
  const diaryInfo = getFileInfo(diaryPath);
  const wallInfo = getFileInfo(wallPath);
  const helpInfo = getFileInfo(helpPath);

  const members = await getAllMembers();
  const helpMessages = getAllMessages();
  const pendingHelp = helpMessages.filter((message) => !message.respondedAt).length;
  const pendingCourseApps = members.filter((member) => member.courseAccessApplied && !member.courseAccess).length;
  const totalInterests = members.reduce((acc, member) => acc + member.interests.length, 0);
  const womenMembers = members.filter((member) => member.portalFocus === 'women').length;
  const menMembers = members.filter((member) => member.portalFocus === 'men').length;
  const generalMembers = members.filter((member) => member.portalFocus === 'general').length;
  const totalStorageBytes =
    usersInfo.sizeBytes +
    womenSupportInfo.sizeBytes +
    diaryInfo.sizeBytes +
    wallInfo.sizeBytes +
    helpInfo.sizeBytes;

  const storageItems = [
    {
      label: 'Member Accounts',
      path: usersStorage.location,
      exists: usersInfo.exists,
      entries: `${usersInfo.entries} member records`,
      size: bytesToHuman(usersInfo.sizeBytes),
      durable: usersStorage.mode === 'database',
      note: usersStorage.mode === 'database'
        ? 'Durable Postgres storage for registered members.'
        : 'File fallback for local development only.',
      icon: <FaUsers className="text-orange-400" />,
    },
    {
      label: 'Women Safety Reports',
      path: usersStorage.mode === 'database'
        ? 'portal_women_reports + portal_women_report_attachments'
        : 'Unavailable without DATABASE_URL',
      exists: womenSupportInfo.exists,
      entries: `${womenSupportInfo.reportEntries} reports / ${womenSupportInfo.attachmentEntries} evidence files`,
      size: bytesToHuman(womenSupportInfo.sizeBytes),
      durable: usersStorage.mode === 'database',
      note: usersStorage.mode === 'database'
        ? 'Durable Postgres storage for reports and uploaded evidence.'
        : 'Women safety reporting is intended for the database-backed setup.',
      icon: <FaShieldAlt className="text-pink-300" />,
    },
    {
      label: 'Diary Entries',
      path: diaryPath,
      exists: diaryInfo.exists,
      entries: `${diaryInfo.entries} diary entries`,
      size: bytesToHuman(diaryInfo.sizeBytes),
      durable: false,
      note: 'Still file-based JSON.',
      icon: <FaPencilAlt className="text-orange-400" />,
    },
    {
      label: 'Community Wall',
      path: wallPath,
      exists: wallInfo.exists,
      entries: `${wallInfo.entries} wall posts`,
      size: bytesToHuman(wallInfo.sizeBytes),
      durable: false,
      note: 'Still file-based JSON.',
      icon: <FaComments className="text-orange-400" />,
    },
    {
      label: 'Help Messages',
      path: helpPath,
      exists: helpInfo.exists,
      entries: `${helpInfo.entries} help threads`,
      size: bytesToHuman(helpInfo.sizeBytes),
      durable: false,
      note: 'Still file-based JSON.',
      icon: <FaQuestionCircle className="text-orange-400" />,
    },
  ];

  return (
    <div className="page-content">
      <div className="flex items-center gap-3 mb-2">
        <Link href="/portal" className="text-zinc-400 hover:text-orange-400 transition-colors">
          <FaArrowLeft />
        </Link>
        <p className="section-kicker">Admin Only</p>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-2 normal-case tracking-normal">
        Site Overview and Portal Operations
      </h1>
      <p className="text-zinc-400 text-sm mb-10">
        Current portal structure, storage layout, support-space routing and safety-report handling.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaUsers className="inline mr-2 text-orange-400" />
          Live Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Registered Members', value: members.length, icon: <FaUsers className="text-orange-400" /> },
            { label: 'Women Space', value: womenMembers, icon: <FaVenus className="text-pink-300" /> },
            { label: 'Men Space', value: menMembers, icon: <FaMars className="text-sky-300" /> },
            { label: 'General Space', value: generalMembers, icon: <FaUserShield className="text-zinc-300" /> },
            { label: 'Women Reports', value: womenSupportInfo.reportEntries, icon: <FaShieldAlt className="text-pink-300" /> },
            { label: 'Evidence Files', value: womenSupportInfo.attachmentEntries, icon: <FaFileAlt className="text-pink-300" /> },
            { label: 'Unread Help', value: pendingHelp, icon: <FaEnvelope className="text-red-400" /> },
            { label: 'Course Applications', value: pendingCourseApps, icon: <FaBook className="text-orange-400" /> },
            { label: 'Diary Entries', value: diaryInfo.entries, icon: <FaPencilAlt className="text-orange-400" /> },
            { label: 'Wall Posts', value: wallInfo.entries, icon: <FaComments className="text-orange-400" /> },
            { label: 'Course Requests', value: totalInterests, icon: <FaHeart className="text-orange-400" /> },
            { label: 'Total Stored Data', value: bytesToHuman(totalStorageBytes), icon: <FaDatabase className="text-orange-400" /> },
          ].map((card) => (
            <div key={card.label} className="border border-zinc-700 rounded-lg px-4 py-3 text-left">
              <div className="flex items-center gap-2 mb-1">
                {card.icon}
                <span className="text-zinc-400 text-xs">{card.label}</span>
              </div>
              <p className="text-white font-black text-2xl">{card.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaDatabase className="inline mr-2 text-orange-400" />
          Storage Layout
        </h2>

        {isProduction && (
          <div className="bg-red-900/20 border border-red-500/40 rounded-lg px-4 py-3 mb-4 flex items-start gap-3 text-sm">
            <FaExclamationTriangle className="text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-200 font-semibold mb-1">Production durability note</p>
              <p className="text-red-300">
                Member accounts and women safety reports are durable in Postgres. Diary entries, wall posts
                and help messages are still file-based and can be lost on redeploy or cold-start changes until
                they are migrated as well.
              </p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {storageItems.map((item) => (
            <div key={item.label} className="border border-zinc-700 rounded-lg px-4 py-3 text-left text-sm">
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <span className="text-white font-semibold">{item.label}</span>
                {item.exists ? (
                  <span className="inline-flex items-center gap-1 text-green-400 text-xs ml-auto">
                    <FaCheckCircle /> Ready
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-zinc-500 text-xs ml-auto">
                    <FaTimesCircle /> Not initialised
                  </span>
                )}
              </div>
              <p className="text-zinc-400 font-mono text-xs mb-1">{item.path}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-zinc-300 text-xs mb-1">
                <span>{item.entries}</span>
                <span>{item.size}</span>
                <span>{item.durable ? 'Durable' : 'Not durable in production'}</span>
              </div>
              <p className="text-zinc-500 text-xs">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaUserShield className="inline mr-2 text-orange-400" />
          Portal Spaces and Safety Flow
        </h2>
        <div className="space-y-4 text-sm text-left">
          {[
            {
              title: 'Registration and routing',
              icon: <FaUsers className="text-orange-400" />,
              body:
                'Registration now captures portalFocus. Women accounts are routed into the women\'s space, men into the men\'s space, and general members into the standard portal/course flow.',
            },
            {
              title: 'Women\'s support space',
              icon: <FaVenus className="text-pink-300" />,
              body:
                'Women members get a separate pink support area covering periods, stalking, domestic abuse, Clare\'s Law, child-maintenance pressure and direct links into pregnancy support and the Report Him workflow.',
            },
            {
              title: 'Report Him workflow',
              icon: <FaShieldAlt className="text-pink-300" />,
              body:
                'The report form captures chronology, message excerpts, risk level, requested support and evidence uploads. The portal stores the raw report plus a generated police-ready pack. Admin can review, add notes and track status.',
            },
            {
              title: 'Pregnancy support',
              icon: <FaHandHoldingHeart className="text-pink-300" />,
              body:
                'Pregnancy support gives routes for planned and unplanned pregnancy, local maternity services, unsafe relationships and abuse escalation during pregnancy.',
            },
            {
              title: 'Men\'s support space',
              icon: <FaMars className="text-sky-300" />,
              body:
                'Men members get a separate blue support area focused on talking therapies, crisis support, fatherhood, family pressure and abuse support for men.',
            },
          ].map((item) => (
            <div key={item.title} className="border border-zinc-700 rounded-lg px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <span className="text-white font-semibold">{item.title}</span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaDatabase className="inline mr-2 text-orange-400" />
          Data Structure
        </h2>

        <p className="text-zinc-400 text-xs mb-3">
          Member accounts are stored in <code className="bg-black/40 px-1 rounded">portal_users</code> when
          <code className="bg-black/40 px-1 rounded ml-1">DATABASE_URL</code> is configured.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-zinc-700 text-zinc-400 text-xs uppercase tracking-wider">
                <th className="py-2 pr-4 font-semibold">Field</th>
                <th className="py-2 pr-4 font-semibold">Type</th>
                <th className="py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {ACCOUNT_FIELDS.map((field) => (
                <tr key={field.field} className="text-zinc-300">
                  <td className="py-2 pr-4 font-mono text-orange-300 align-top">{field.field}</td>
                  <td className="py-2 pr-4 text-zinc-400 align-top whitespace-nowrap">{field.type}</td>
                  <td className="py-2 align-top">{field.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-zinc-400 text-xs mb-3">
          Women safety reporting is stored across <code className="bg-black/40 px-1 rounded">portal_women_reports</code> and
          <code className="bg-black/40 px-1 rounded ml-1">portal_women_report_attachments</code>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-zinc-700 text-zinc-400 text-xs uppercase tracking-wider">
                <th className="py-2 pr-4 font-semibold">Field</th>
                <th className="py-2 pr-4 font-semibold">Type</th>
                <th className="py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {WOMEN_REPORT_FIELDS.map((field) => (
                <tr key={field.field} className="text-zinc-300">
                  <td className="py-2 pr-4 font-mono text-pink-300 align-top">{field.field}</td>
                  <td className="py-2 pr-4 text-zinc-400 align-top whitespace-nowrap">{field.type}</td>
                  <td className="py-2 align-top">{field.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaSitemap className="inline mr-2 text-orange-400" />
          Route Map
        </h2>
        <div className="space-y-8 text-left">
          {SITE_TREE.map((section) => (
            <div key={section.section}>
              <h3 className="text-base font-black text-orange-300 mb-3 normal-case">{section.section}</h3>
              <div className="space-y-2">
                {section.routes.map((route) => (
                  <div key={route.path} className="border border-zinc-800 rounded-lg px-4 py-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <code className="text-orange-300 font-mono text-xs">{route.path}</code>
                      <span className="text-white text-xs font-semibold">{route.label}</span>
                    </div>
                    <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed">{route.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaInfoCircle className="inline mr-2 text-orange-400" />
          Privacy and Operational Notes
        </h2>
        <div className="border border-zinc-700 rounded-lg px-4 py-3 text-xs text-zinc-300 space-y-2 text-left">
          <p><strong className="text-white">Admin account:</strong> Kept outside the member table and loaded from environment variables.</p>
          <p><strong className="text-white">Passwords:</strong> Stored only as bcrypt hashes.</p>
          <p><strong className="text-white">Welcome email:</strong> Sent automatically after successful registration and tailored by selected portal space.</p>
          <p><strong className="text-white">Police handling:</strong> The portal produces a structured support pack. It does not directly submit evidence to police systems.</p>
          <p><strong className="text-white">Remaining migration gap:</strong> Diary, wall and help data still need moving into Postgres if full durability is required.</p>
          <p><strong className="text-white">Support contact:</strong> {CONTACT_EMAIL}</p>
          <p><strong className="text-white">Admin password changes:</strong> Admin password remains environment-backed and is not changed through the member password route.</p>
          <p><strong className="text-white">Course gating:</strong> Course-access approval is still controlled by admin from the main portal dashboard.</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaLock className="inline mr-2 text-orange-400" />
          Current technical position
        </h2>
        <div className="border border-zinc-700 rounded-lg px-4 py-3 text-sm text-left">
          <p className="text-zinc-300">
            The portal now has segmented women and men spaces, a database-backed women safety reporting flow with
            evidence uploads, pregnancy support routes and admin-side visibility for those reports. The remaining
            storage risk is limited to diary, wall and help content, which are still on JSON files.
          </p>
        </div>
      </section>
    </div>
  );
}
