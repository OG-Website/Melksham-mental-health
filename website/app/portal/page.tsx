import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { FaBook, FaLock, FaUsers, FaHeart, FaRobot, FaClock, FaCheckCircle, FaPencilAlt, FaHandHoldingHeart, FaComments } from 'react-icons/fa';
import { sessionOptions, type SessionData } from '@/lib/session';
import { findUserById, getAllMembers } from '@/lib/users';
import LogoutButton from '@/components/LogoutButton';
import { AdminApproveButton } from '@/components/CourseAccessApplyButton';

export const metadata = {
  title: 'Member Portal | Melksham Mental Health',
  description: 'Your Melksham Mental Health member dashboard.',
};

// Module topics (abbreviated for display)
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

export default async function PortalPage() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn || !session.userId) {
    redirect('/portal/login');
  }

  const user = findUserById(session.userId);
  if (!user) {
    redirect('/portal/login');
  }

  // Admin gets a view of all members and their interests
  const members = user.isAdmin ? getAllMembers() : null;

  // Build interest summary for admin: moduleId → count
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
      {user.isAdmin && (
        <span className="inline-block bg-orange-600/30 border border-orange-500/50 text-orange-300 text-xs font-bold px-3 py-1 rounded-full mb-6">
          Founder — Rob Johnston
        </span>
      )}
      <p className="text-zinc-300 text-sm mb-10">
        Signed in as <span className="text-zinc-100 font-semibold">{user.email}</span>
      </p>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <Link href="/courses" className="metal-button metal-button--small">
          <FaBook /> {user.courseAccess ? 'My Courses' : 'Course Programme'}
        </Link>
        <Link href="/portal/diary" className="metal-button metal-button--small">
          <FaPencilAlt /> My Diary
        </Link>
        <Link href="/portal/wall" className="metal-button metal-button--small">
          <FaComments /> Community Wall
        </Link>
        <Link href="/portal/self-referral" className="metal-button metal-button--small">
          <FaHandHoldingHeart /> Self-Referral Links
        </Link>
        <Link href="/portal/change-password" className="metal-button metal-button--small">
          <FaLock /> Change Password
        </Link>
        <LogoutButton />
      </div>

      {/* Course access status banner for regular users */}
      {!user.isAdmin && !user.courseAccess && (
        <div className="mb-12 border border-orange-500/40 rounded-lg px-5 py-5 text-left">
          <h2 className="text-white font-black text-base mb-2 normal-case tracking-normal">
            {user.courseAccessApplied ? (
              <><FaClock className="inline mr-2 text-orange-400" />Your Course Access Application</>
            ) : (
              <><FaBook className="inline mr-2 text-orange-400" />Apply for Course Access</>
            )}
          </h2>
          {user.courseAccessApplied ? (
            <p className="text-zinc-300 text-sm">
              Your application has been submitted and is being reviewed. You&apos;ll be notified once approved.
              Live sessions will be hosted on our secure portal.
            </p>
          ) : (
            <>
              <p className="text-zinc-300 text-sm mb-4">
                Our 50-module mental health programme is delivered as live, facilitated sessions.
                Apply below to request access — we review every application personally.
              </p>
              <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-orange-300 border border-orange-500/60 px-3 py-1.5 rounded-full hover:bg-orange-600/20 transition-colors">
                Apply for Access →
              </Link>
            </>
          )}
        </div>
      )}

      {/* Member's own course interests */}
      {!user.isAdmin && (
        <div className="mb-12">
          <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
            Your Course Interests
          </h2>
          {user.interests.length === 0 ? (
            <p className="text-zinc-400 text-sm">
              You haven&apos;t expressed interest in any courses yet.{' '}
              <Link href="/courses" className="text-orange-400 underline">Browse courses</Link> and
              click &ldquo;I&apos;m Interested&rdquo; on any module you&apos;d like to attend.
            </p>
          ) : (
            <ul className="space-y-2 text-left">
              {user.interests.map((id) => (
                <li key={id} className="flex items-center gap-3 text-zinc-200 text-sm">
                  <FaHeart className="text-orange-500 flex-shrink-0" />
                  <span>
                    <span className="text-orange-400 font-bold">Module {String(id).padStart(2, '0')}</span>
                    {' — '}
                    {MODULE_TOPICS[id] ?? `Module ${id}`}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Admin dashboard */}
      {user.isAdmin && members && (
        <>
          {/* Course access applications */}
          {(() => {
            const pending = members.filter((m) => m.courseAccessApplied && !m.courseAccess);
            return pending.length > 0 ? (
              <div className="mb-12">
                <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-orange-500/50 pb-2">
                  <FaClock className="inline mr-2 text-orange-400" />
                  Course Access Applications ({pending.length})
                </h2>
                <div className="space-y-3">
                  {pending.map((m) => (
                    <div key={m.id} className="flex flex-wrap items-center gap-4 border border-zinc-700 rounded-lg px-4 py-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm">{m.name}</p>
                        <a href={`mailto:${m.email}`} className="text-orange-400 text-xs hover:underline">{m.email}</a>
                        {m.courseAccessAppliedAt && (
                          <p className="text-zinc-500 text-xs mt-0.5">
                            Applied {new Date(m.courseAccessAppliedAt).toLocaleDateString('en-GB')}
                          </p>
                        )}
                      </div>
                      <AdminApproveButton userId={m.id} currentAccess={m.courseAccess} />
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
                      <th className="py-2 pr-4 font-semibold">Joined</th>
                      <th className="py-2 pr-4 font-semibold">Course Access</th>
                      <th className="py-2 font-semibold">Interested In</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {members.map((m) => (
                      <tr key={m.id} className="text-zinc-300">
                        <td className="py-2 pr-4 font-semibold text-white">{m.name}</td>
                        <td className="py-2 pr-4">
                          <a href={`mailto:${m.email}`} className="text-orange-400 hover:underline">
                            {m.email}
                          </a>
                        </td>
                        <td className="py-2 pr-4 text-zinc-500 text-xs">
                          {new Date(m.createdAt).toLocaleDateString('en-GB')}
                        </td>
                        <td className="py-2 pr-4">
                          {m.courseAccess ? (
                            <span className="inline-flex items-center gap-1 text-green-400 text-xs font-semibold">
                              <FaCheckCircle /> Approved
                            </span>
                          ) : m.courseAccessApplied ? (
                            <AdminApproveButton userId={m.id} currentAccess={false} />
                          ) : (
                            <span className="text-zinc-600 text-xs">Not applied</span>
                          )}
                        </td>
                        <td className="py-2">
                          {m.interests.length === 0
                            ? <span className="text-zinc-600">None yet</span>
                            : m.interests.map((id) => (
                                <span key={id} className="inline-block bg-orange-900/40 text-orange-300 text-xs px-2 py-0.5 rounded mr-1 mb-1">
                                  M{id}
                                </span>
                              ))
                          }
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
              Most Popular Modules (by Interest)
            </h2>
            {topInterests.length === 0 ? (
              <p className="text-zinc-400 text-sm">No course interests recorded yet.</p>
            ) : (
              <ul className="space-y-2 text-left">
                {topInterests.map(([id, count]) => (
                  <li key={id} className="flex items-center gap-3 text-sm">
                    <span className="text-orange-400 font-black min-w-[2rem] text-right">
                      {String(count)}×
                    </span>
                    <span className="text-zinc-200">
                      <span className="text-orange-400 font-bold">Module {String(id).padStart(2, '0')}</span>
                      {' — '}
                      {MODULE_TOPICS[Number(id)] ?? `Module ${id}`}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}

      {/* Virtual facilitator teaser */}
      <div className="mt-8 border border-zinc-700 rounded-lg p-5 text-left">
        <div className="flex items-center gap-3 mb-3">
          <FaRobot className="text-orange-400 text-xl" />
          <h3 className="text-white font-black text-base normal-case tracking-normal" style={{ textShadow: 'none', filter: 'none' }}>
            Virtual Facilitator — Coming Soon
          </h3>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          An AI-powered virtual facilitator modelled on lived experience will guide you through
          each course module at your own pace. Fully interactive, compassionate, and available
          whenever you need it. We&apos;re working on it.
        </p>
      </div>
    </div>
  );
}
