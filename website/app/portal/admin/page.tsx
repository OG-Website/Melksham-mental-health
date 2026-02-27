import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import {
  FaArrowLeft,
  FaDatabase,
  FaExclamationTriangle,
  FaServer,
  FaSitemap,
  FaUserShield,
  FaUsers,
  FaBook,
  FaPencilAlt,
  FaComments,
  FaQuestionCircle,
  FaHeart,
  FaHandHoldingHeart,
  FaLock,
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import { sessionOptions, type SessionData } from '@/lib/session';
import { getAllMembers } from '@/lib/users';
import { getAllMessages } from '@/lib/helpMessages';

export const metadata = {
  title: 'Site Overview | Melksham Mental Health Admin',
  description: 'Admin-only system overview: site tree, data storage, user capacity and member portal structure.',
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
      { path: '/', label: 'Home', desc: 'Landing page — personal story, CTA for support and portal, crisis info' },
      { path: '/about', label: 'About', desc: 'About Melksham Mental Health — background, mission, and founder story' },
      { path: '/resources', label: 'Resources', desc: 'Mental health resources hub' },
      { path: '/resources/crisis', label: 'Crisis Resources', desc: 'Emergency and crisis contact info — always accessible without login' },
      { path: '/community', label: 'Community', desc: 'Community overview page' },
      { path: '/community/stories', label: 'Community Stories', desc: 'Anonymised lived-experience stories shared by the community' },
      { path: '/blog', label: 'Blog', desc: 'Articles and mental health content' },
      { path: '/contact', label: 'Contact', desc: 'Contact form — emails to Melksham-mental-health@outlook.com' },
      { path: '/courses', label: 'Courses', desc: '50-module mental health course listing — members can browse and request to join modules' },
      { path: '/privacy', label: 'Privacy Policy', desc: 'Data policy and GDPR information' },
      { path: '/terms', label: 'Terms', desc: 'Terms of service' },
      { path: '/license', label: 'License', desc: 'Desktop app license page (Stripe integration)' },
      { path: '/promo', label: 'Promo', desc: 'Promotional page for the course programme' },
      { path: '/app/support', label: 'App Support', desc: 'Support page for the desktop app' },
    ],
  },
  {
    section: 'Members Portal (Authentication Required)',
    routes: [
      { path: '/portal/register', label: 'Register', desc: 'New member registration — name, email, password, GDPR consent checkbox' },
      { path: '/portal/login', label: 'Login', desc: 'Member login — email + password, bcrypt verification, iron-session cookie' },
      { path: '/portal', label: 'Portal Dashboard', desc: 'Main member dashboard — shows course access status, course requests, quick actions. Admin sees all members, help messages, course applications and stories' },
      { path: '/portal/diary', label: 'My Diary', desc: 'Private personal diary — entries include date, mood (1–5), title, body, symptoms, triggers, positives. Only the logged-in member sees their own entries' },
      { path: '/portal/my-story', label: 'My Story', desc: 'Member personal story — private text saved against the user account. Admin can view all stories' },
      { path: '/portal/wall', label: 'Community Wall', desc: 'Shared community message board — posts shown to all logged-in members. Can post anonymously. Admin can delete any post' },
      { path: '/portal/help', label: 'Help & Questions', desc: 'Member sends a question to the admin. Admin replies from the portal. Thread visible to both member and admin' },
      { path: '/portal/self-referral', label: 'Self-Referral Links', desc: 'Curated directory of NHS, ADHD, crisis, addiction, autism and other self-referral services (no login required to view, but gated for members)' },
      { path: '/portal/change-password', label: 'Change Password', desc: 'Update member password — verifies current password first. Admin must update via env var instead' },
      { path: '/portal/admin', label: 'Site Overview (Admin)', desc: 'This page — admin-only system dashboard showing site tree, storage stats and user capacity' },
    ],
  },
  {
    section: 'Course Detail Pages (Admin Only)',
    routes: [
      { path: '/courses/[id]', label: 'Course Module Detail', desc: 'Full module guide, PPTX download, and content. Gated to admin only. 50 modules (IDs 1–50)' },
    ],
  },
  {
    section: 'API Routes',
    routes: [
      { path: '/api/auth/login', label: 'POST /api/auth/login', desc: 'Verify credentials, create iron-session cookie' },
      { path: '/api/auth/logout', label: 'POST /api/auth/logout', desc: 'Destroy session cookie' },
      { path: '/api/auth/me', label: 'GET /api/auth/me', desc: 'Return current session user or 401' },
      { path: '/api/auth/register', label: 'POST /api/auth/register', desc: 'Register new member (name, email, password, gdprConsent)' },
      { path: '/api/portal/diary', label: 'GET/POST/DELETE /api/portal/diary', desc: 'Diary CRUD — create entry, list entries, delete entry' },
      { path: '/api/portal/wall', label: 'GET/POST/DELETE /api/portal/wall', desc: 'Community wall CRUD — post, list, delete' },
      { path: '/api/portal/help', label: 'GET/POST /api/portal/help', desc: 'Send help message (member) or reply (admin)' },
      { path: '/api/portal/interest', label: 'POST /api/portal/interest', desc: 'Toggle course module interest (Request to Join)' },
      { path: '/api/portal/my-story', label: 'GET/POST /api/portal/my-story', desc: 'Save or retrieve member personal story' },
      { path: '/api/portal/course-access', label: 'POST /api/portal/course-access', desc: 'Apply for course access (member) or approve/revoke (admin)' },
      { path: '/api/portal/change-password', label: 'POST /api/portal/change-password', desc: 'Change member password' },
      { path: '/api/portal/admin/stats', label: 'GET /api/portal/admin/stats', desc: 'Admin-only: live file sizes, entry counts, storage paths, Vercel limits' },
    ],
  },
];

const USER_FIELDS = [
  { field: 'id', type: 'string (UUID)', desc: 'Unique identifier — randomUUID() at registration' },
  { field: 'email', type: 'string', desc: 'Lowercase trimmed email — used as login credential' },
  { field: 'passwordHash', type: 'string (bcrypt)', desc: 'bcrypt hash (cost factor 12) — plain-text password is never stored' },
  { field: 'name', type: 'string', desc: 'Full name as provided at registration' },
  { field: 'isAdmin', type: 'boolean', desc: 'Always false for registered members — admin is configured via env vars' },
  { field: 'gdprConsent', type: 'boolean', desc: 'true = member checked the data policy consent box at registration' },
  { field: 'gdprConsentDate', type: 'ISO 8601 string', desc: 'UTC timestamp when GDPR consent was given' },
  { field: 'createdAt', type: 'ISO 8601 string', desc: 'UTC timestamp of account creation' },
  { field: 'interests', type: 'number[]', desc: 'Array of module IDs (1–50) the member has clicked "Request to Join"' },
  { field: 'courseAccess', type: 'boolean', desc: 'true = admin has approved this member for full course access' },
  { field: 'courseAccessApplied', type: 'boolean', desc: 'true = member has submitted an application for course access' },
  { field: 'courseAccessAppliedAt', type: 'ISO 8601 string (optional)', desc: 'UTC timestamp when the course access application was submitted' },
  { field: 'story', type: 'string (optional, max 10 000 chars)', desc: "Member's personal story — private, visible only to the member and admin" },
];

const DIARY_FIELDS = [
  { field: 'id', type: 'string (UUID)', desc: 'Unique entry identifier' },
  { field: 'userId', type: 'string', desc: 'ID of the member who created the entry' },
  { field: 'createdAt', type: 'ISO 8601 string', desc: 'UTC timestamp of creation' },
  { field: 'date', type: 'YYYY-MM-DD string', desc: 'Date the member recorded the entry for (can differ from createdAt)' },
  { field: 'mood', type: 'number (1–5)', desc: '1 = Very low, 2 = Low, 3 = Okay, 4 = Good, 5 = Great' },
  { field: 'title', type: 'string', desc: 'Short title for the diary entry' },
  { field: 'body', type: 'string', desc: 'Main diary text (free-form)' },
  { field: 'symptoms', type: 'string', desc: 'Physical or mental symptoms noted' },
  { field: 'triggers', type: 'string', desc: 'Events or situations that affected mood' },
  { field: 'positives', type: 'string', desc: 'Positive things noticed during the day' },
];

export default async function AdminOverviewPage() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn || !session.isAdmin) {
    redirect('/portal');
  }

  const isProduction = process.env.NODE_ENV === 'production';

  const usersPath = process.env.USERS_DATA_PATH ?? (isProduction ? '/tmp/mmh-users.json' : 'data/portal-users.json');
  const diaryPath = process.env.DIARY_DATA_PATH ?? (isProduction ? '/tmp/mmh-diary.json' : 'data/diary.json');
  const wallPath = process.env.WALL_DATA_PATH ?? (isProduction ? '/tmp/mmh-wall.json' : 'data/wall.json');
  const helpPath = process.env.HELP_DATA_PATH ?? (isProduction ? '/tmp/mmh-help.json' : 'data/help-messages.json');

  const usersInfo = getFileInfo(usersPath);
  const diaryInfo = getFileInfo(diaryPath);
  const wallInfo = getFileInfo(wallPath);
  const helpInfo = getFileInfo(helpPath);

  const members = getAllMembers();
  const helpMessages = getAllMessages();
  const pendingHelp = helpMessages.filter((m) => !m.respondedAt).length;
  const pendingCourseApps = members.filter((m) => m.courseAccessApplied && !m.courseAccess).length;
  const totalInterests = members.reduce((acc, m) => acc + m.interests.length, 0);

  const totalStorageBytes = usersInfo.sizeBytes + diaryInfo.sizeBytes + wallInfo.sizeBytes + helpInfo.sizeBytes;

  return (
    <div className="page-content">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Link href="/portal" className="text-zinc-400 hover:text-orange-400 transition-colors">
          <FaArrowLeft />
        </Link>
        <p className="section-kicker">Admin Only</p>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-2 normal-case tracking-normal">
        Site Overview &amp; System Info
      </h1>
      <p className="text-zinc-400 text-sm mb-10">
        Full site tree, data storage details, user capacity and member portal structure.
      </p>

      {/* Live Stats Cards */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaUsers className="inline mr-2 text-orange-400" />
          Live Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Registered Members', value: members.length, icon: <FaUsers className="text-orange-400" /> },
            { label: 'Diary Entries', value: diaryInfo.entries, icon: <FaPencilAlt className="text-orange-400" /> },
            { label: 'Wall Posts', value: wallInfo.entries, icon: <FaComments className="text-orange-400" /> },
            { label: 'Help Messages', value: helpInfo.entries, icon: <FaQuestionCircle className="text-orange-400" /> },
            { label: 'Unread Help', value: pendingHelp, icon: <FaQuestionCircle className="text-red-400" /> },
            { label: 'Course Applications', value: pendingCourseApps, icon: <FaBook className="text-orange-400" /> },
            { label: 'Course Requests (total)', value: totalInterests, icon: <FaHeart className="text-orange-400" /> },
            { label: 'Total Storage Used', value: bytesToHuman(totalStorageBytes), icon: <FaDatabase className="text-orange-400" /> },
          ].map((card) => (
            <div key={card.label} className="border border-zinc-700 rounded-lg px-4 py-3 text-left">
              <div className="flex items-center gap-2 mb-1">{card.icon}<span className="text-zinc-400 text-xs">{card.label}</span></div>
              <p className="text-white font-black text-2xl">{card.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Storage Info */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaDatabase className="inline mr-2 text-orange-400" />
          Data Storage
        </h2>

        {isProduction && (
          <div className="bg-red-900/20 border border-red-500/40 rounded-lg px-4 py-3 mb-4 flex items-start gap-3 text-sm">
            <FaExclamationTriangle className="text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-200 font-semibold mb-1">⚠️ Ephemeral Storage Warning</p>
              <p className="text-red-300">
                All data files are stored in Vercel&apos;s <code className="bg-black/40 px-1 rounded">/tmp</code> directory.
                This storage is <strong>ephemeral</strong> — it is wiped whenever a new deployment is made or a new serverless
                function instance spins up. <strong>Member accounts, diary entries, wall posts and help messages will be lost on each deployment.</strong>
              </p>
              <p className="text-red-300 mt-2">
                To persist data across deployments without MongoDB or Railway, consider:
                <strong className="text-white"> Vercel KV</strong> (free Redis, 256 MB),
                <strong className="text-white"> Vercel Postgres</strong> (free, 256 MB),
                <strong className="text-white"> Turso</strong> (free SQLite, 500 MB), or
                <strong className="text-white"> Upstash Redis</strong> (free tier available).
              </p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {[
            { label: 'Member Accounts', path: usersPath, info: usersInfo, icon: <FaUsers className="text-orange-400" /> },
            { label: 'Diary Entries', path: diaryPath, info: diaryInfo, icon: <FaPencilAlt className="text-orange-400" /> },
            { label: 'Community Wall Posts', path: wallPath, info: wallInfo, icon: <FaComments className="text-orange-400" /> },
            { label: 'Help Messages', path: helpPath, info: helpInfo, icon: <FaQuestionCircle className="text-orange-400" /> },
          ].map((item) => (
            <div key={item.label} className="border border-zinc-700 rounded-lg px-4 py-3 text-left text-sm">
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <span className="text-white font-semibold">{item.label}</span>
                {item.info.exists ? (
                  <span className="inline-flex items-center gap-1 text-green-400 text-xs ml-auto">
                    <FaCheckCircle /> File exists
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-zinc-500 text-xs ml-auto">
                    <FaTimesCircle /> Not yet created
                  </span>
                )}
              </div>
              <p className="text-zinc-400 font-mono text-xs mb-1">{item.path}</p>
              <div className="flex gap-4 text-zinc-300 text-xs">
                <span><strong className="text-white">{item.info.entries}</strong> entries</span>
                <span><strong className="text-white">{bytesToHuman(item.info.sizeBytes)}</strong> on disk</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-left">
          <p className="text-zinc-300 font-semibold mb-2">Vercel /tmp Limits</p>
          <ul className="space-y-1 text-zinc-400 text-xs">
            <li>• <strong className="text-white">/tmp size limit:</strong> 512 MB total (shared across all active function instances)</li>
            <li>• <strong className="text-white">Data persistence:</strong> Within a single serverless instance warm invocation only</li>
            <li>• <strong className="text-white">Data loss trigger:</strong> Any new deployment wipes /tmp on the next cold start</li>
            <li>• <strong className="text-white">Admin account:</strong> Always persists — configured via ADMIN_EMAIL / ADMIN_PASSWORD_HASH env vars (never stored in /tmp)</li>
            <li>• <strong className="text-white">Estimated capacity:</strong> ~1 user record ≈ 500 bytes → ~1 million records in 512 MB, but do not rely on this in production</li>
          </ul>
        </div>
      </section>

      {/* User Capacity */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaServer className="inline mr-2 text-orange-400" />
          User Capacity &amp; Platform Limits
        </h2>
        <div className="space-y-3 text-sm text-left">
          <div className="border border-zinc-700 rounded-lg px-4 py-3">
            <p className="text-white font-semibold mb-2">Vercel Hosting (Current Setup)</p>
            <ul className="space-y-1 text-zinc-300 text-xs">
              <li>• <strong className="text-white">Platform:</strong> Vercel Serverless (Next.js)</li>
              <li>• <strong className="text-white">Storage:</strong> /tmp JSON files — ephemeral, resets on deployment</li>
              <li>• <strong className="text-white">Bandwidth (Hobby):</strong> 100 GB / month</li>
              <li>• <strong className="text-white">Bandwidth (Pro):</strong> 1 TB / month</li>
              <li>• <strong className="text-white">Concurrent requests:</strong> Auto-scaled — no fixed limit</li>
              <li>• <strong className="text-white">Serverless function timeout:</strong> 10 s (Hobby) / 60 s (Pro)</li>
              <li>• <strong className="text-white">Practical user limit (current storage):</strong> Unlimited while under 512 MB — but data is lost on redeploy</li>
            </ul>
          </div>
          <div className="border border-orange-500/40 rounded-lg px-4 py-3 bg-orange-900/10">
            <p className="text-orange-300 font-semibold mb-2">Persistent Storage Options (No MongoDB / Railway Required)</p>
            <ul className="space-y-1 text-zinc-300 text-xs">
              <li>• <strong className="text-white">Vercel KV</strong> — Redis key-value store, free tier: 256 MB, 30,000 commands/day. No extra service needed — add from Vercel dashboard.</li>
              <li>• <strong className="text-white">Vercel Postgres</strong> — Managed PostgreSQL, free tier: 256 MB. Add from Vercel dashboard.</li>
              <li>• <strong className="text-white">Turso</strong> — SQLite at the edge, free tier: 500 MB + 1 billion row reads/month.</li>
              <li>• <strong className="text-white">Upstash Redis</strong> — Serverless Redis, free tier: 10,000 commands/day.</li>
              <li>• <strong className="text-white">PlanetScale</strong> — Serverless MySQL, free tier available.</li>
              <li>• <strong className="text-white">ngrok</strong> — Your ngrok premium account can tunnel to a local server running the Next.js app (with file-based storage on your local disk, which DOES persist). Run <code className="bg-black/40 px-1 rounded">npm run dev</code> locally, then <code className="bg-black/40 px-1 rounded">ngrok http 3000</code> to get a public HTTPS URL tonight.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ngrok / Local Tunnelling Guide */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaServer className="inline mr-2 text-orange-400" />
          Running Locally with a Public URL (ngrok / Tunnel)
        </h2>
        <div className="border border-zinc-700 rounded-lg px-4 py-4 text-sm text-left space-y-3">
          <p className="text-zinc-300">
            If an ngrok account (or any HTTP tunnel) is available, the site can be run locally and exposed at a public HTTPS URL.
            Local file-based storage persists across restarts because there are no Vercel deployments to wipe <code className="bg-black/40 px-1 rounded">/tmp</code>:
          </p>
          <ol className="space-y-2 text-zinc-300 text-xs list-decimal list-inside">
            <li>
              Clone the repo locally and run:{' '}
              <code className="bg-black/40 px-1 py-0.5 rounded font-mono">cd website &amp;&amp; npm install &amp;&amp; npm run build &amp;&amp; npm start</code>
            </li>
            <li>
              Create a <code className="bg-black/40 px-1 py-0.5 rounded font-mono">website/.env.local</code> file and set:{' '}
              <code className="bg-black/40 px-1 py-0.5 rounded font-mono">SESSION_SECRET</code>,{' '}
              <code className="bg-black/40 px-1 py-0.5 rounded font-mono">ADMIN_EMAIL</code>,{' '}
              <code className="bg-black/40 px-1 py-0.5 rounded font-mono">ADMIN_PASSWORD_HASH</code>
            </li>
            <li>
              In a second terminal, start the tunnel:{' '}
              <code className="bg-black/40 px-1 py-0.5 rounded font-mono">ngrok http 3000</code>
            </li>
            <li>
              The tunnel provides a public HTTPS URL (e.g.{' '}
              <code className="bg-black/40 px-1 py-0.5 rounded font-mono">https://abc123.ngrok.io</code>) that can be shared with members.
            </li>
            <li>
              Data is saved to <code className="bg-black/40 px-1 py-0.5 rounded font-mono">website/data/*.json</code> on the local machine and persists across restarts.
            </li>
          </ol>
          <p className="text-zinc-500 text-xs">
            ngrok premium accounts support custom subdomains (e.g.{' '}
            <code className="bg-black/40 px-1 rounded">ngrok http --subdomain=melksham 3000</code>).
          </p>
        </div>
      </section>

      {/* Members Portal Flow */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaUserShield className="inline mr-2 text-orange-400" />
          Members Portal — Registration &amp; Flow
        </h2>
        <div className="space-y-4 text-sm text-left">
          {[
            {
              step: '1. Registration',
              path: '/portal/register',
              icon: <FaUsers className="text-orange-400 flex-shrink-0" />,
              desc: 'Visitor fills in: Full Name, Email, Password (min 8 chars), Confirm Password. Must tick the GDPR data consent checkbox. On submit, POST /api/auth/register validates inputs, hashes password with bcrypt (cost 12), stores user in /tmp/mmh-users.json (prod) or data/portal-users.json (dev), creates an iron-session cookie and redirects to /courses.',
            },
            {
              step: '2. Login',
              path: '/portal/login',
              icon: <FaLock className="text-orange-400 flex-shrink-0" />,
              desc: 'Member enters email + password. POST /api/auth/login calls verifyCredentials() — bcrypt.compare() is always called (even for unknown users) to prevent timing-based email enumeration. On success, iron-session cookie is set containing userId, email, name, isAdmin. Session is a browser-session cookie (no maxAge — expires on tab close).',
            },
            {
              step: '3. Portal Dashboard',
              path: '/portal',
              icon: <FaUserShield className="text-orange-400 flex-shrink-0" />,
              desc: 'Server-side page reads the session cookie. If not logged in, redirects to /portal/login. Shows: quick-action buttons, course access status banner, own course requests (module interests). Admin additionally sees: all members table, course access applications, help messages (unread highlighted), member stories.',
            },
            {
              step: '4. My Diary',
              path: '/portal/diary',
              icon: <FaPencilAlt className="text-orange-400 flex-shrink-0" />,
              desc: 'Private diary — member creates entries with date, mood (1–5), title, main body, symptoms, triggers, positives. Entries shown newest-first. DELETE removes an entry. All entries are filtered by userId — members only ever see their own data.',
            },
            {
              step: '5. My Story',
              path: '/portal/my-story',
              icon: <FaHeart className="text-orange-400 flex-shrink-0" />,
              desc: "Free-text personal story stored against the user record (max 10,000 chars). Visible only to the member and admin. Admin sees all members' stories in the portal dashboard.",
            },
            {
              step: '6. Community Wall',
              path: '/portal/wall',
              icon: <FaComments className="text-orange-400 flex-shrink-0" />,
              desc: 'Shared message board visible to all logged-in members. Posts (max 1,000 chars) can be submitted as named or anonymous. Members can delete their own posts; admin can delete any post. Posts stored in mmh-wall.json.',
            },
            {
              step: '7. Help & Questions',
              path: '/portal/help',
              icon: <FaQuestionCircle className="text-orange-400 flex-shrink-0" />,
              desc: 'Member submits a question with subject (max 200 chars) and message (max 5,000 chars). Stored in mmh-help.json. Admin sees all messages in the portal dashboard with inline reply form. Admin reply is saved back against the message record.',
            },
            {
              step: '8. Self-Referral Links',
              path: '/portal/self-referral',
              icon: <FaHandHoldingHeart className="text-orange-400 flex-shrink-0" />,
              desc: 'Curated directory of NHS, ADHD, crisis, addiction, autism, domestic abuse and young people self-referral services. Static content — no database. Requires login.',
            },
            {
              step: '9. Course Interest / Request to Join',
              path: '/courses',
              icon: <FaBook className="text-orange-400 flex-shrink-0" />,
              desc: 'On the /courses page, each of the 50 modules has a "Request to Join" button. POST /api/portal/interest toggles the module ID in the user\'s interests[] array. The portal dashboard shows all a member\'s requested modules. Admin sees interest counts per module.',
            },
            {
              step: '10. Course Access Application',
              path: '/courses',
              icon: <FaBook className="text-orange-400 flex-shrink-0" />,
              desc: 'Member applies for full course access via POST /api/portal/course-access. Sets courseAccessApplied=true. Admin approves via the portal dashboard (AdminApproveButton), which sets courseAccess=true. Approved members see course module detail pages at /courses/[id].',
            },
          ].map((item) => (
            <div key={item.step} className="border border-zinc-700 rounded-lg px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <span className="text-white font-semibold">{item.step}</span>
                <Link href={item.path} className="text-orange-400 text-xs hover:underline ml-auto">{item.path}</Link>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Data Structure */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaDatabase className="inline mr-2 text-orange-400" />
          User Data Structure
        </h2>
        <p className="text-zinc-400 text-xs mb-3">
          Each member account in <code className="bg-black/40 px-1 rounded">mmh-users.json</code> contains the following fields:
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
              {USER_FIELDS.map((f) => (
                <tr key={f.field} className="text-zinc-300">
                  <td className="py-2 pr-4 font-mono text-orange-300 align-top">{f.field}</td>
                  <td className="py-2 pr-4 text-zinc-400 align-top whitespace-nowrap">{f.type}</td>
                  <td className="py-2 align-top">{f.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-zinc-400 text-xs mt-6 mb-3">
          Diary entries in <code className="bg-black/40 px-1 rounded">mmh-diary.json</code>:
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
              {DIARY_FIELDS.map((f) => (
                <tr key={f.field} className="text-zinc-300">
                  <td className="py-2 pr-4 font-mono text-orange-300 align-top">{f.field}</td>
                  <td className="py-2 pr-4 text-zinc-400 align-top whitespace-nowrap">{f.type}</td>
                  <td className="py-2 align-top">{f.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 border border-zinc-700 rounded-lg px-4 py-3 text-xs text-left space-y-1">
          <p className="text-zinc-300 font-semibold">Other stored data</p>
          <p className="text-zinc-400">
            <strong className="text-white">Wall posts</strong> (mmh-wall.json): id, userId, userName, content (max 1,000 chars), isAnonymous, createdAt
          </p>
          <p className="text-zinc-400">
            <strong className="text-white">Help messages</strong> (mmh-help.json): id, userId, userName, userEmail, subject (max 200 chars), message (max 5,000 chars), createdAt, respondedAt?, adminReply?
          </p>
          <p className="text-zinc-400">
            <strong className="text-white">Admin account</strong>: NOT stored in JSON files — read from ADMIN_EMAIL / ADMIN_PASSWORD_HASH / ADMIN_NAME environment variables on every request. Always persists across deployments.
          </p>
        </div>
      </section>

      {/* Full Site Tree */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaSitemap className="inline mr-2 text-orange-400" />
          Full Site Tree
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

      {/* GDPR / Data Privacy */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          <FaInfoCircle className="inline mr-2 text-orange-400" />
          Data Privacy &amp; GDPR Compliance
        </h2>
        <div className="space-y-3 text-sm text-left">
          <div className="border border-zinc-700 rounded-lg px-4 py-3 text-xs text-zinc-300 space-y-2">
            <p><strong className="text-white">Data collected at registration:</strong> Full name, email address, hashed password, GDPR consent flag + timestamp, account creation date.</p>
            <p><strong className="text-white">Data never stored:</strong> Plain-text passwords (bcrypt hashed with cost 12 only), payment card details.</p>
            <p><strong className="text-white">Data shared with third parties:</strong> Never — no analytics, no advertising, no data sale.</p>
            <p><strong className="text-white">Member data access:</strong> Each member can only access their own diary, story and help messages. Admin can access all member data for operational purposes.</p>
            <p><strong className="text-white">Data deletion:</strong> Members can request account deletion by emailing Melksham-mental-health@outlook.com. Admin manually removes the user record from the JSON file.</p>
            <p><strong className="text-white">Data retention:</strong> Data is retained while the member account is active. On Vercel (production), data in /tmp may be wiped on each deployment regardless.</p>
            <p><strong className="text-white">Security:</strong> All pages served over HTTPS (Vercel automatic SSL). Session tokens encrypted with iron-session (AES-256). Passwords hashed with bcrypt (cost 12). Dummy bcrypt compare on unknown email to prevent timing attacks.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
