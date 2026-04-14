import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  FaBook,
  FaCheckCircle,
  FaClock,
  FaComments,
  FaEnvelope,
  FaExclamationTriangle,
  FaHandHoldingHeart,
  FaHeart,
  FaLock,
  FaMars,
  FaPencilAlt,
  FaQuestionCircle,
  FaRobot,
  FaShieldAlt,
  FaSitemap,
  FaUsers,
  FaVenus,
} from 'react-icons/fa';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { getAllMembers } from '@/lib/users';
import LogoutButton from '@/components/LogoutButton';
import { AdminApproveButton } from '@/components/CourseAccessApplyButton';
import { getAllMessages } from '@/lib/helpMessages';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/constants';
import { AdminHelpReplyForm } from '@/components/AdminHelpReplyForm';
import { getAdminBroadcastNotes } from '@/lib/adminBroadcasts';
import { AdminBroadcastForm } from '@/components/AdminBroadcastForm';
import { listWomenSupportReportsForAdmin } from '@/lib/womenSupport';

export const metadata = {
  title: 'Member Portal | Melksham Mental Health',
  description: 'Your Melksham Mental Health member dashboard.',
};

const MODULE_TOPICS: Record<number, string> = {
  1: 'Foundations of Mental Health',
  2: 'Introduction to Mental Health Disorders',
  3: 'Neurodevelopmental: Autism Spectrum',
  4: 'Neurodevelopmental: ADHD',
  5: 'Neurodevelopmental: Intellectual & Learning Disabilities',
  6: 'Trauma & Stress: Acute Stress',
  7: 'Trauma & Stress: PTSD and Complex PTSD',
  8: 'Trauma & Stress: Domestic & Intimate Partner Violence',
  9: 'Trauma & Stress: Childhood Trauma & ACEs',
  10: 'Trauma & Stress: Self-harm & Suicide Prevention',
  11: 'Mood Disorders: Major Depression',
  12: 'Mood Disorders: Bipolar Disorder',
  13: 'Mood Disorders: Seasonal & Persistent Depression',
  14: 'Anxiety Disorders: Generalised Anxiety',
  15: 'Anxiety Disorders: Phobias & Panic Disorder',
  16: 'Anxiety Disorders: OCD & Related Conditions',
  17: 'Dissociative & Somatic Disorders',
  18: 'Eating Disorders & Body Image',
  19: 'Sleep & Circadian Rhythm Disorders',
  20: 'Impulse-Control & Disruptive Disorders',
  21: 'Substance Use & Addiction',
  22: 'Psychotic Disorders: Schizophrenia',
  23: 'Personality Disorders: Cluster A & B',
  24: 'Personality Disorders: Cluster C & Others',
  25: 'Neurocognitive Disorders',
  26: 'Mental Health & Chronic Physical Conditions',
  27: 'Workplace Mental Health & Burnout',
  28: 'Social Isolation & Loneliness',
  29: 'Financial Stress & Mental Health',
  30: 'Relationships & Attachment',
  31: 'Parenting Stress & Paternal Mental Health',
  32: 'Maternal Mental Health & Perinatal Disorders',
  33: 'Child & Adolescent Mental Health',
  34: 'Older Adult Mental Health',
  35: 'LGBTQIA+ Mental Health',
  36: 'Racism, Discrimination & Intersectionality',
  37: 'Gender & Sexuality',
  38: 'Sexual Violence & Trauma',
  39: 'Grief, Loss & Bereavement',
  40: 'Chronic Pain & Pain Management',
  41: 'Sleep Hygiene & Circadian Health',
  42: 'Nutrition, Exercise & Mental Health',
  43: 'Mindfulness, Meditation & Breathwork',
  44: 'Creative Arts & Expressive Therapies',
  45: 'Technology & Mental Health',
  46: 'Climate Anxiety & Eco-distress',
  47: 'Spirituality & Meaning',
  48: "Men's Mental Health & Masculinity",
  49: 'Military & Veteran Mental Health',
  50: 'Prison, Legal System & Mental Health',
};

function describePortalFocus(portalFocus: 'general' | 'women' | 'men'): string {
  if (portalFocus === 'women') return 'Women';
  if (portalFocus === 'men') return 'Men';
  return 'General';
}

export default async function PortalPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login');
  }

  const members = user.isAdmin ? await getAllMembers() : null;
  const helpMessages = user.isAdmin ? getAllMessages() : null;
  const broadcastNotes = user.isAdmin ? getAdminBroadcastNotes(12) : null;
  const womenReports = user.isAdmin ? await listWomenSupportReportsForAdmin(8) : [];

  const interestCount: Record<number, number> = {};
  if (members) {
    for (const member of members) {
      for (const id of member.interests) {
        interestCount[id] = (interestCount[id] ?? 0) + 1;
      }
    }
  }

  const topInterests = Object.entries(interestCount)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 10);

  return (
    <div className="page-content">
      <p className="section-kicker">Members Portal</p>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-2 normal-case tracking-normal">
        Welcome back, {user.name}
      </h1>

      {user.isAdmin ? (
        <span className="inline-block bg-orange-600/30 border border-orange-500/50 text-orange-300 text-xs font-bold px-3 py-1 rounded-full mb-6">
          Founder - Rob Johnston
        </span>
      ) : user.portalFocus === 'women' ? (
        <span className="inline-flex items-center gap-2 bg-pink-600/20 border border-pink-400/50 text-pink-100 text-xs font-bold px-3 py-1 rounded-full mb-6">
          <FaVenus /> Women&apos;s Support Space Enabled
        </span>
      ) : user.portalFocus === 'men' ? (
        <span className="inline-flex items-center gap-2 bg-sky-600/20 border border-sky-400/50 text-sky-100 text-xs font-bold px-3 py-1 rounded-full mb-6">
          <FaMars /> Men&apos;s Support Space Enabled
        </span>
      ) : null}

      <p className="text-zinc-300 text-sm mb-10">
        Signed in as <span className="text-zinc-100 font-semibold">{user.email}</span>
      </p>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <Link href="/courses" className="metal-button metal-button--small">
          <FaBook /> {user.courseAccess ? 'My Courses' : 'Course Programme'}
        </Link>
        <Link href="/portal/diary" className="metal-button metal-button--small">
          <FaPencilAlt /> My Diary
        </Link>
        {!user.isAdmin && (
          <Link href="/portal/my-story" className="metal-button metal-button--small">
            <FaHeart /> My Story
          </Link>
        )}
        <Link href="/portal/wall" className="metal-button metal-button--small">
          <FaComments /> Community Wall
        </Link>
        <Link href="/portal/self-referral" className="metal-button metal-button--small">
          <FaHandHoldingHeart /> Self-Referral Links
        </Link>
        {!user.isAdmin && (
          <Link href="/portal/help" className="metal-button metal-button--small">
            <FaQuestionCircle /> Help &amp; Questions
          </Link>
        )}
        <Link href="/portal/change-password" className="metal-button metal-button--small">
          <FaLock /> Change Password
        </Link>

        {!user.isAdmin && user.portalFocus === 'women' && (
          <>
            <Link
              href="/portal/womens-space"
              className="metal-button metal-button--small"
              style={{ background: 'linear-gradient(180deg,#ff66b7 0%,#ff4b95 100%)', borderColor: '#ff82c2' }}
            >
              <FaVenus /> Women&apos;s Space
            </Link>
            <Link
              href="/portal/report-him"
              className="metal-button metal-button--small"
              style={{ background: 'linear-gradient(180deg,#ff66b7 0%,#ff4b95 100%)', borderColor: '#ff82c2' }}
            >
              <FaShieldAlt /> Report Him
            </Link>
            <Link
              href="/portal/pregnancy-support"
              className="metal-button metal-button--small"
              style={{ background: 'linear-gradient(180deg,#ff66b7 0%,#ff4b95 100%)', borderColor: '#ff82c2' }}
            >
              <FaHandHoldingHeart /> Pregnancy Support
            </Link>
          </>
        )}

        {!user.isAdmin && user.portalFocus === 'men' && (
          <Link
            href="/portal/mens-space"
            className="metal-button metal-button--small"
            style={{ background: 'linear-gradient(180deg,#34a7ff 0%,#2375ff 100%)', borderColor: '#79c6ff' }}
          >
            <FaMars /> Men&apos;s Space
          </Link>
        )}

        {user.isAdmin && (
          <>
            <Link
              href="/portal/womens-space"
              className="metal-button metal-button--small"
              style={{ background: 'linear-gradient(180deg,#ff66b7 0%,#ff4b95 100%)', borderColor: '#ff82c2' }}
            >
              <FaVenus /> Women&apos;s Space
            </Link>
            <Link
              href="/portal/report-him"
              className="metal-button metal-button--small"
              style={{ background: 'linear-gradient(180deg,#ff66b7 0%,#ff4b95 100%)', borderColor: '#ff82c2' }}
            >
              <FaShieldAlt /> Report Him
            </Link>
            <Link
              href="/portal/pregnancy-support"
              className="metal-button metal-button--small"
              style={{ background: 'linear-gradient(180deg,#ff66b7 0%,#ff4b95 100%)', borderColor: '#ff82c2' }}
            >
              <FaHandHoldingHeart /> Pregnancy Support
            </Link>
            <Link
              href="/portal/mens-space"
              className="metal-button metal-button--small"
              style={{ background: 'linear-gradient(180deg,#34a7ff 0%,#2375ff 100%)', borderColor: '#79c6ff' }}
            >
              <FaMars /> Men&apos;s Space
            </Link>
            <Link href="/portal/admin" className="metal-button metal-button--small">
              <FaSitemap /> Site Overview
            </Link>
          </>
        )}

        <LogoutButton />
      </div>

      {!user.isAdmin && user.portalFocus === 'women' && (
        <div className="mb-12 border border-pink-400/40 rounded-lg px-5 py-5 text-left bg-pink-950/20">
          <h2 className="text-white font-black text-base mb-2 normal-case tracking-normal">
            <FaVenus className="inline mr-2 text-pink-300" />Your Women&apos;s Support Space
          </h2>
          <p className="text-zinc-200 text-sm mb-4">
            Your account includes extra support for periods, pregnancy, stalking, Clare&apos;s Law,
            domestic abuse, child maintenance pressure and structured reporting.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/portal/womens-space" className="inline-flex items-center gap-2 text-sm font-bold text-pink-100 border border-pink-300/60 px-3 py-1.5 rounded-full hover:bg-pink-600/20 transition-colors">
              Open Women&apos;s Space
            </Link>
            <Link href="/portal/report-him" className="inline-flex items-center gap-2 text-sm font-bold text-pink-100 border border-pink-300/60 px-3 py-1.5 rounded-full hover:bg-pink-600/20 transition-colors">
              Create Safety Report
            </Link>
          </div>
        </div>
      )}

      {!user.isAdmin && user.portalFocus === 'men' && (
        <div className="mb-12 border border-sky-400/40 rounded-lg px-5 py-5 text-left bg-sky-950/20">
          <h2 className="text-white font-black text-base mb-2 normal-case tracking-normal">
            <FaMars className="inline mr-2 text-sky-300" />Your Men&apos;s Support Space
          </h2>
          <p className="text-zinc-200 text-sm mb-4">
            Your account includes extra support for talking therapies, fatherhood, men&apos;s wellbeing,
            abuse support and practical family guidance.
          </p>
          <Link href="/portal/mens-space" className="inline-flex items-center gap-2 text-sm font-bold text-sky-100 border border-sky-300/60 px-3 py-1.5 rounded-full hover:bg-sky-600/20 transition-colors">
            Open Men&apos;s Space
          </Link>
        </div>
      )}

      {user.isAdmin && (
        <>
          <div className="mb-12 border border-pink-400/40 rounded-lg px-5 py-5 text-left bg-pink-950/20">
            <h2 className="text-white font-black text-base mb-2 normal-case tracking-normal">
              <FaVenus className="inline mr-2 text-pink-300" />Women&apos;s Portal Audit View
            </h2>
            <p className="text-zinc-200 text-sm mb-4">
              Open the live women&apos;s portal, the reporting flow, pregnancy support and the pink theme exactly as members see it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/portal/womens-space" className="inline-flex items-center gap-2 text-sm font-bold text-pink-100 border border-pink-300/60 px-3 py-1.5 rounded-full hover:bg-pink-600/20 transition-colors">
                Open Women&apos;s Space
              </Link>
              <Link href="/portal/report-him" className="inline-flex items-center gap-2 text-sm font-bold text-pink-100 border border-pink-300/60 px-3 py-1.5 rounded-full hover:bg-pink-600/20 transition-colors">
                Open Report Him
              </Link>
              <Link href="/portal/pregnancy-support" className="inline-flex items-center gap-2 text-sm font-bold text-pink-100 border border-pink-300/60 px-3 py-1.5 rounded-full hover:bg-pink-600/20 transition-colors">
                Open Pregnancy Support
              </Link>
            </div>
          </div>

          <div className="mb-12 border border-sky-400/40 rounded-lg px-5 py-5 text-left bg-sky-950/20">
            <h2 className="text-white font-black text-base mb-2 normal-case tracking-normal">
              <FaMars className="inline mr-2 text-sky-300" />Men&apos;s Portal Audit View
            </h2>
            <p className="text-zinc-200 text-sm mb-4">
              Open the live men&apos;s support portal and check the tailored men&apos;s routes and resources.
            </p>
            <Link href="/portal/mens-space" className="inline-flex items-center gap-2 text-sm font-bold text-sky-100 border border-sky-300/60 px-3 py-1.5 rounded-full hover:bg-sky-600/20 transition-colors">
              Open Men&apos;s Space
            </Link>
          </div>
        </>
      )}

      {!user.isAdmin && !user.courseAccess && (
        <div className="mb-12 border border-orange-500/40 rounded-lg px-5 py-5 text-left">
          <h2 className="text-white font-black text-base mb-2 normal-case tracking-normal">
            {user.courseAccessApplied ? (
              <>
                <FaClock className="inline mr-2 text-orange-400" />
                Your Course Access Application
              </>
            ) : (
              <>
                <FaBook className="inline mr-2 text-orange-400" />
                Apply for Course Access
              </>
            )}
          </h2>
          {user.courseAccessApplied ? (
            <p className="text-zinc-300 text-sm">
              Your application has been submitted and is being reviewed. You&apos;ll be notified once approved.
              Live sessions are hosted in the portal.
            </p>
          ) : (
            <>
              <p className="text-zinc-300 text-sm mb-4">
                Our 50-module mental health programme is delivered as live, facilitated sessions.
                Apply below to request access - we review every application personally.
              </p>
              <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-orange-300 border border-orange-500/60 px-3 py-1.5 rounded-full hover:bg-orange-600/20 transition-colors">
                Apply for access
              </Link>
            </>
          )}
        </div>
      )}

      {!user.isAdmin && (
        <div className="mb-12">
          <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
            Your Course Requests
          </h2>
          {user.interests.length === 0 ? (
            <p className="text-zinc-400 text-sm">
              You have not requested any courses yet. <Link href="/courses" className="text-orange-400 underline">Browse courses</Link> and request the modules you want to attend.
            </p>
          ) : (
            <ul className="space-y-2 text-left">
              {user.interests.map((id) => (
                <li key={id} className="flex items-center gap-3 text-zinc-200 text-sm">
                  <FaHeart className="text-orange-500 flex-shrink-0" />
                  <span>
                    <span className="text-orange-400 font-bold">Module {String(id).padStart(2, '0')}</span>
                    {' - '}
                    {MODULE_TOPICS[id] ?? `Module ${id}`}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {user.isAdmin && members && (
        <>
          {womenReports.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-pink-500/40 pb-2">
                <FaShieldAlt className="inline mr-2 text-pink-300" />
                Women&apos;s Safety Reports ({womenReports.length})
              </h2>
              <div className="space-y-3">
                {womenReports.map((report) => (
                  <div key={report.id} className="border border-zinc-700 rounded-lg px-4 py-3 text-left">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <p className="text-white font-semibold text-sm">{report.userName}</p>
                      <a href={`mailto:${report.userEmail}`} className="text-pink-300 text-xs hover:underline">{report.userEmail}</a>
                      <span className="text-zinc-500 text-xs">{new Date(report.createdAt).toLocaleString('en-GB')}</span>
                    </div>
                    <p className="text-pink-200 text-sm">{report.incidentType}</p>
                    <p className="text-zinc-400 text-xs mt-1">
                      Status: {report.status} | Evidence files: {report.attachments.length} | Anonymous pack: {report.anonymousToPolice ? 'Yes' : 'No'}
                    </p>
                    <Link href="/portal/report-him" className="inline-flex items-center gap-2 text-xs text-pink-300 underline mt-2">
                      Open full report review
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(() => {
            const pending = members.filter((member) => member.courseAccessApplied && !member.courseAccess);
            return pending.length > 0 ? (
              <div className="mb-12">
                <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-orange-500/50 pb-2">
                  <FaClock className="inline mr-2 text-orange-400" />
                  Course Access Applications ({pending.length})
                </h2>
                <div className="space-y-3">
                  {pending.map((member) => (
                    <div key={member.id} className="flex flex-wrap items-center gap-4 border border-zinc-700 rounded-lg px-4 py-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm">{member.name}</p>
                        <a href={`mailto:${member.email}`} className="text-orange-400 text-xs hover:underline">{member.email}</a>
                        {member.courseAccessAppliedAt ? (
                          <p className="text-zinc-500 text-xs mt-0.5">
                            Applied {new Date(member.courseAccessAppliedAt).toLocaleDateString('en-GB')}
                          </p>
                        ) : null}
                      </div>
                      <AdminApproveButton userId={member.id} currentAccess={member.courseAccess} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null;
          })()}

          <div className="mb-12">
            <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
              <FaUsers className="inline mr-2 text-orange-400" />
              Registered Members ({members.length})
            </h2>
            {members.length === 0 ? (
              <p className="text-zinc-400 text-sm">No members have registered yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-zinc-700 text-zinc-400 text-xs uppercase tracking-wider">
                      <th className="py-2 pr-4 font-semibold">Name</th>
                      <th className="py-2 pr-4 font-semibold">Email</th>
                      <th className="py-2 pr-4 font-semibold">Portal Space</th>
                      <th className="py-2 pr-4 font-semibold">Joined</th>
                      <th className="py-2 pr-4 font-semibold">Course Access</th>
                      <th className="py-2 font-semibold">Course Requests</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {members.map((member) => (
                      <tr key={member.id} className="text-zinc-300">
                        <td className="py-2 pr-4 font-semibold text-white">{member.name}</td>
                        <td className="py-2 pr-4">
                          <a href={`mailto:${member.email}`} className="text-orange-400 hover:underline">
                            {member.email}
                          </a>
                        </td>
                        <td className="py-2 pr-4 text-xs text-zinc-400">
                          {describePortalFocus(member.portalFocus)}
                        </td>
                        <td className="py-2 pr-4 text-zinc-500 text-xs">
                          {new Date(member.createdAt).toLocaleDateString('en-GB')}
                        </td>
                        <td className="py-2 pr-4">
                          {member.courseAccess ? (
                            <span className="inline-flex items-center gap-1 text-green-400 text-xs font-semibold">
                              <FaCheckCircle /> Approved
                            </span>
                          ) : member.courseAccessApplied ? (
                            <AdminApproveButton userId={member.id} currentAccess={false} />
                          ) : (
                            <span className="text-zinc-600 text-xs">Not applied</span>
                          )}
                        </td>
                        <td className="py-2">
                          {member.interests.length === 0
                            ? <span className="text-zinc-600">None yet</span>
                            : member.interests.map((id) => (
                                <span key={id} className="inline-block bg-orange-900/40 text-orange-300 text-xs px-2 py-0.5 rounded mr-1 mb-1">
                                  M{id}
                                </span>
                              ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
              <FaEnvelope className="inline mr-2 text-orange-400" />
              Send Email &amp; Notes To All Members
            </h2>
            <AdminBroadcastForm memberCount={members.length} />
            <div className="mt-4 border border-zinc-700 rounded-lg p-4 text-left">
              <p className="text-zinc-300 text-xs font-semibold mb-2">Recent admin broadcasts</p>
              {!broadcastNotes || broadcastNotes.length === 0 ? (
                <p className="text-zinc-500 text-xs">No broadcasts have been sent yet.</p>
              ) : (
                <div className="space-y-3">
                  {broadcastNotes.map((note) => (
                    <div key={note.id} className="border border-zinc-800 rounded-lg p-3">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                        <p className="text-white text-sm font-semibold">{note.subject}</p>
                        <span className="text-zinc-500 text-xs">
                          {new Date(note.createdAt).toLocaleString('en-GB')}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-xs mb-2">
                        From {note.sentByName} ({note.sentByEmail}) | Recipients: {note.totalRecipients} | Sent: {note.sentCount} | Failed: {note.failedCount}
                      </p>
                      <p className="text-zinc-300 text-sm whitespace-pre-wrap">{note.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
              Most Requested Modules
            </h2>
            {topInterests.length === 0 ? (
              <p className="text-zinc-400 text-sm">No course interests recorded yet.</p>
            ) : (
              <ul className="space-y-2 text-left">
                {topInterests.map(([id, count]) => (
                  <li key={id} className="flex items-center gap-3 text-sm">
                    <span className="text-orange-400 font-black min-w-[2rem] text-right">
                      {String(count)}x
                    </span>
                    <span className="text-zinc-200">
                      <span className="text-orange-400 font-bold">Module {String(id).padStart(2, '0')}</span>
                      {' - '}
                      {MODULE_TOPICS[Number(id)] ?? `Module ${id}`}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {helpMessages && (
            <div className="mb-12">
              <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
                <FaEnvelope className="inline mr-2 text-orange-400" />
                Member Help &amp; Questions ({helpMessages.filter((message) => !message.respondedAt).length} unread)
              </h2>
              {helpMessages.length === 0 ? (
                <p className="text-zinc-500 text-sm">No help messages received yet.</p>
              ) : (
                <div className="space-y-4">
                  {helpMessages.map((message) => (
                    <div key={message.id} className={`border rounded-lg px-5 py-4 text-left ${message.respondedAt ? 'border-zinc-700' : 'border-orange-500/50'}`}>
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div>
                          <p className="text-white font-semibold text-sm">{message.userName}</p>
                          <a href={`mailto:${encodeURIComponent(message.userEmail)}`} className="text-orange-400 text-xs hover:underline">{message.userEmail}</a>
                        </div>
                        <span className="text-zinc-500 text-xs flex-shrink-0">
                          {new Date(message.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <p className="text-orange-300 font-semibold text-sm mt-2">{message.subject}</p>
                      <p className="text-zinc-300 text-sm leading-relaxed mt-1 whitespace-pre-wrap">{message.message}</p>
                      {message.adminReply ? (
                        <div className="mt-3 bg-orange-900/20 border border-orange-500/30 rounded px-3 py-2">
                          <p className="text-orange-300 text-xs font-semibold mb-1">Your reply:</p>
                          <p className="text-zinc-200 text-sm">{message.adminReply}</p>
                        </div>
                      ) : (
                        <AdminHelpReplyForm
                          messageId={message.id}
                          userEmail={message.userEmail}
                          userSubject={message.subject}
                          hasReply={Boolean(message.adminReply)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {(() => {
            const withStories = members.filter((member) => member.story && member.story.trim().length > 0);
            return withStories.length > 0 ? (
              <div className="mb-12">
                <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
                  <FaHeart className="inline mr-2 text-orange-400" />
                  Member Stories ({withStories.length})
                </h2>
                <div className="space-y-4">
                  {withStories.map((member) => (
                    <div key={member.id} className="border border-zinc-700 rounded-lg px-5 py-4 text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-white font-semibold text-sm">{member.name}</p>
                        <a href={`mailto:${member.email}`} className="text-orange-400 text-xs hover:underline">{member.email}</a>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap line-clamp-4">{member.story}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null;
          })()}
        </>
      )}

      <div className="mt-8 border border-zinc-700 rounded-lg p-5 text-left">
        <div className="flex items-center gap-3 mb-3">
          <FaRobot className="text-orange-400 text-xl" />
          <h3 className="text-white font-black text-base normal-case tracking-normal" style={{ textShadow: 'none', filter: 'none' }}>
            Virtual Facilitator - Coming Soon
          </h3>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          An AI-powered virtual facilitator modelled on lived experience will guide you through
          each course module at your own pace. Fully interactive, compassionate, and available
          whenever you need it. We&apos;re working on it.
        </p>
      </div>

      <div className="mt-10 pt-8 border-t-4 border-error/70 text-left">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-2">
          <FaExclamationTriangle className="text-error" /> Crisis &amp; Urgent Support
        </h2>
        <p className="text-zinc-300 text-sm mb-3">
          If you are in crisis at any time, please reach out to one of the following services immediately.
          They are free, confidential, and available 24/7.
        </p>
        <div className="space-y-2 text-sm text-zinc-200 mb-4">
          <p><strong>Emergency:</strong> Call <a href="tel:999" className="text-orange-400 underline font-semibold">999</a></p>
          <p><strong>Samaritans:</strong> <a href="tel:116123" className="text-orange-400 underline font-semibold">116 123</a> (24/7, free)</p>
          <p><strong>NHS 111:</strong> <a href="tel:111" className="text-orange-400 underline font-semibold">111</a> - select the mental health option (24/7)</p>
          <p>
            <strong>Shout:</strong> Text <a href="sms:85258" className="text-orange-400 underline font-semibold">SHOUT to 85258</a> on your mobile (24/7)
          </p>
          <p><strong>Wiltshire Crisis Line:</strong> <a href="tel:08009530110" className="text-orange-400 underline font-semibold">0800 953 0110</a> (24/7, free)</p>
          <p>
            <strong>Melksham Mental Health:</strong>{' '}
            <a href={CONTACT_EMAIL_HREF} className="text-orange-400 underline font-semibold">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <p className="text-zinc-500 text-xs">
          This portal provides peer support only and does not replace emergency services or professional care.
        </p>
      </div>
    </div>
  );
}
