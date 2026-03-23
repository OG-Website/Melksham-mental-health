import Link from 'next/link';
import { FaExclamationTriangle, FaBookOpen, FaUsers, FaClock, FaChalkboardTeacher, FaUserPlus } from 'react-icons/fa';
import { loadOptionalSessionUser } from '@/lib/portalAuth';
import CourseInterestButton from '@/components/CourseInterestButton';
import CourseAccessApplyButton from '@/components/CourseAccessApplyButton';
import { moduleGuides } from '@/lib/moduleGuides';
import { getModuleResearch } from '@/lib/moduleResearch';

export const metadata = {
  title: 'Mental Health Courses | Melksham Mental Health',
  description: 'A comprehensive 50-module mental health course covering every major condition, social issue and life-stage challenge. Evidence-based, peer-informed and built for real people.',
};

const modules = moduleGuides.map((guide) => {
  const research = getModuleResearch(guide.id);

  return {
    id: guide.id,
    topic: guide.topic,
    summary: guide.summary,
    learningFocus: guide.slideOutline.slice(0, 3).map((slide) => slide.title),
    reviewedOn: research?.reviewedOn,
  };
});

const categories = [
  { label: 'Foundations', range: [1, 2] },
  { label: 'Neurodevelopmental', range: [3, 5] },
  { label: 'Trauma & Stress', range: [6, 10] },
  { label: 'Mood Disorders', range: [11, 13] },
  { label: 'Anxiety Disorders', range: [14, 16] },
  { label: 'Clinical Disorders', range: [17, 25] },
  { label: 'Social & Life Factors', range: [26, 32] },
  { label: 'Life Stages & Identity', range: [33, 38] },
  { label: 'Loss, Pain & Wellbeing', range: [39, 44] },
  { label: 'Modern Life & Meaning', range: [45, 50] },
];

export default async function CoursesPage() {
  // Check session - page is public but logged-in users get extra features.
  const { user } = await loadOptionalSessionUser();
  const isLoggedIn = !!user;
  const userInterests = new Set(user?.interests ?? []);
  const isAdmin = user?.isAdmin ?? false;
  const alreadyApplied = user?.courseAccessApplied ?? false;

  return (
    <div>
      <div className="page-content">
        <p className="section-kicker">Course Programme</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 normal-case tracking-normal">
          Comprehensive Mental Health Course
        </h1>
        <p className="text-lg text-zinc-100 mb-4 max-w-3xl mx-auto">
          50 evidence-based modules covering every major mental health condition, social issue and life-stage challenge.
          Each session is two hours long and includes facilitated group discussion.
        </p>
        <p className="text-zinc-300 mb-12 max-w-2xl mx-auto">
          Designed for real people - whether you&apos;re seeking to understand your own experiences, support someone you care about, or build professional knowledge.
        </p>

        {isLoggedIn && !isAdmin && (
          <div className="mb-12 border border-orange-500/40 rounded-lg px-6 py-5 text-left max-w-2xl mx-auto">
            <h2 className="text-white font-black text-base mb-2 normal-case tracking-normal">
              Request to Join a Course
            </h2>
            <p className="text-zinc-300 text-sm mb-4">
              Browse the modules below and click <strong className="text-orange-300">Request to Join</strong> on any you&apos;d
              like to attend. Our team will contact you to confirm your place.
              {alreadyApplied && (
                <span className="block mt-2 text-orange-300 font-semibold">
                  Your programme application has been submitted - we&apos;ll be in touch soon.
                </span>
              )}
            </p>
            {!alreadyApplied && (
              <div className="flex flex-wrap items-center gap-4">
                <CourseAccessApplyButton alreadyApplied={alreadyApplied} />
                <span className="text-zinc-500 text-xs">or apply for the full programme above</span>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[
            { icon: <FaBookOpen />, value: '50', label: 'Modules' },
            { icon: <FaClock />, value: '2 hrs', label: 'Per Session' },
            { icon: <FaUsers />, value: 'Group', label: 'Discussion' },
            { icon: <FaChalkboardTeacher />, value: 'Live', label: 'Facilitated' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-primary text-2xl">{stat.icon}</span>
              <span className="text-white font-black text-2xl">{stat.value}</span>
              <span className="text-zinc-400 text-sm font-semibold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 normal-case tracking-normal">How Each Session Works</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { time: '15 min', label: 'Introduction & Objectives' },
              { time: '45 min', label: 'Evidence-Based Content' },
              { time: '30 min', label: 'Interactive Activity' },
              { time: '30 min', label: 'Group Discussion' },
              { time: '15 min', label: 'Wrap-up & Resources' },
            ].map((step) => (
              <div key={step.label} className="border border-primary/40 rounded px-4 py-3 text-center min-w-[140px]">
                <div className="text-primary font-black text-base">{step.time}</div>
                <div className="text-zinc-200 font-semibold text-xs mt-1">{step.label}</div>
              </div>
            ))}
          </div>
        </div>

        {categories.map((cat) => {
          const catModules = modules.filter((m) => m.id >= cat.range[0] && m.id <= cat.range[1]);
          return (
            <div key={cat.label} className="mb-14">
              <h2 className="text-xl md:text-2xl font-black text-white mb-6 normal-case tracking-normal border-b-2 border-primary/50 pb-2">
                {cat.label}
              </h2>
              <div className="space-y-4 text-left">
                {catModules.map((mod) => (
                  <div key={mod.id} className="border border-zinc-700 rounded-lg px-5 py-4 hover:border-primary/60 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="text-primary font-black text-lg min-w-[2.5rem] text-right leading-tight pt-0.5">
                        {String(mod.id).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-black text-base normal-case tracking-normal" style={{ textShadow: 'none', filter: 'none' }}>
                            {mod.topic}
                          </h3>
                          {mod.reviewedOn && (
                            <span className="inline-flex items-center rounded-full border border-zinc-600 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                              Reviewed {mod.reviewedOn}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2 text-orange-400 text-xs font-semibold">
                          <FaClock className="text-xs" />
                          <span>2 hours - Facilitated group session</span>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-2">
                          {mod.summary}
                        </p>
                        <ul className="text-xs text-zinc-400 mb-3 space-y-1">
                          {mod.learningFocus.map((focus) => (
                            <li key={`${mod.id}-${focus}`}>- {focus}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          {isAdmin && (
                            <Link
                              href={`/courses/${mod.id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/60 text-orange-300 hover:bg-orange-600/20 transition-colors"
                            >
                              <FaChalkboardTeacher className="text-xs" /> Open Module
                            </Link>
                          )}
                          {isLoggedIn && !isAdmin ? (
                            <CourseInterestButton
                              moduleId={mod.id}
                              initialInterested={userInterests.has(mod.id)}
                              isAdmin={isAdmin}
                            />
                          ) : !isLoggedIn ? (
                            <Link
                              href="/portal/register"
                              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-zinc-600 text-zinc-400 hover:border-orange-500/60 hover:text-orange-400 transition-colors"
                            >
                              <FaUserPlus className="text-xs" /> Register to Apply
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {!isLoggedIn && (
          <div className="mb-12 border border-orange-500/40 rounded-lg px-5 py-5 text-center">
            <h2 className="text-white font-black text-base mb-2 normal-case tracking-normal">
              Want to Attend These Sessions?
            </h2>
            <p className="text-zinc-300 text-sm mb-4">
              Create a free account to register your interest and apply for live course access.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/portal/register" className="metal-button metal-button--small">
                <FaUserPlus /> Create Free Account
              </Link>
              <Link href="/portal/login?next=/courses" className="metal-button metal-button--small" style={{ background: 'linear-gradient(180deg,#4a4a4a 0%,#2a2a2a 100%)', borderColor: '#666' }}>
                Sign In
              </Link>
            </div>
          </div>
        )}

        <div className="mt-16 mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Interested in the Course?</h2>
          <p className="text-zinc-100 text-lg mb-8 max-w-xl mx-auto">
            Sessions run online in a secure digital classroom. Participants remain anonymous to each other and are supported throughout by a facilitator.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="metal-button metal-button--small">
              Get in Touch
            </Link>
            <Link href="/community" className="metal-button metal-button--small">
              Join the Community
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-2xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> Need Immediate Support?
          </h2>
          <p className="text-zinc-100 mb-4">
            If you are in crisis while engaging with this course material, please reach out now:
          </p>
          <div className="space-y-2 text-zinc-100 mb-6">
            <p>- Call <a href="tel:999" className="underline font-semibold">999</a> for immediate danger</p>
            <p>- Call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a> (24/7, free)</p>
            <p>- Call <a href="tel:111" className="underline font-semibold">NHS 111</a> and select mental health option (24/7)</p>
            <p>- Text <a href="sms:85258" className="underline font-semibold">SHOUT to 85258</a> for 24/7 text support</p>
            <p>- In Wiltshire: <a href="tel:08009530110" className="underline font-semibold">0800 953 0110</a> (24/7 crisis line)</p>
          </div>
          <p className="text-sm text-zinc-200">
            Course content is evidence-based and educational. It does not replace professional diagnosis, treatment or emergency care.{' '}
            <Link href="/resources/crisis" className="underline font-semibold">See our Crisis Help page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
