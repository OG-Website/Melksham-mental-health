import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaChalkboardTeacher,
  FaClock,
  FaDownload,
  FaExclamationTriangle,
  FaLink,
  FaListUl,
  FaPenFancy,
  FaStickyNote,
  FaUsers,
} from 'react-icons/fa';
import { getModuleGuide, getModulePptxPath, SESSION_BREAKDOWN } from '@/lib/moduleGuides';
import { loadCurrentSessionUser } from '@/lib/portalAuth';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const guide = getModuleGuide(Number(id));
  if (!guide) return { title: 'Module Not Found | Melksham Mental Health' };
  return {
    title: `Module ${guide.id}: ${guide.topic} | MMH Courses`,
    description: guide.summary,
  };
}

export default async function ModuleGuidePage({ params }: Props) {
  const { id } = await params;
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect(`/portal/login?next=/courses/${id}`);
  }
  if (!user.isAdmin) {
    redirect('/courses');
  }

  const moduleId = Number(id);
  if (!Number.isInteger(moduleId) || moduleId < 1 || moduleId > 50) notFound();

  const guide = getModuleGuide(moduleId);
  if (!guide) notFound();

  const pptxPath = getModulePptxPath(moduleId);
  const prevId = moduleId > 1 ? moduleId - 1 : null;
  const nextId = moduleId < 50 ? moduleId + 1 : null;

  return (
    <div className="page-content text-left">
      <div className="mb-6">
        <Link href="/courses" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
          <FaArrowLeft className="text-xs" /> Back to All Courses
        </Link>
      </div>

      <div className="mb-10">
        <p className="section-kicker">Module {String(guide.id).padStart(2, '0')} of 50</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3 normal-case tracking-normal">
          {guide.topic}
        </h1>
        <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">{guide.summary}</p>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
            <FaClock className="text-xs" />
            <span>2-hour session · Evidence-based · Facilitated group programme</span>
          </div>
          {pptxPath && (
            <a
              href={pptxPath}
              download
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/60 text-orange-300 hover:bg-orange-600/20 transition-colors"
            >
              <FaDownload className="text-xs" /> Download PowerPoint
            </a>
          )}
        </div>
      </div>

      <section className="mb-12">
        <h2 className="section-heading flex items-center gap-2 mb-4">
          <FaClock className="text-orange-400" /> Session Timetable
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SESSION_BREAKDOWN.map((segment) => (
            <div key={segment.label} className="border border-zinc-700 rounded-lg px-4 py-3">
              <div className="text-orange-400 font-black text-sm">{segment.time}</div>
              <div className="text-zinc-200 text-sm font-semibold mt-0.5">{segment.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading flex items-center gap-2 mb-4">
          <FaListUl className="text-orange-400" /> Slide Outline
        </h2>
        <p className="text-zinc-400 text-sm mb-5 italic">
          Use these slide titles and bullet points to build your PowerPoint/Keynote deck. Add current UK statistics before each delivery.
        </p>
        <div className="space-y-4">
          {guide.slideOutline.map((slide, index) => (
            <div key={index} className="border border-zinc-700 rounded-lg px-5 py-4">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-orange-400 font-black text-sm min-w-[1.5rem]">S{index + 1}</span>
                <h3 className="text-white font-black text-sm normal-case tracking-normal" style={{ textShadow: 'none', filter: 'none' }}>
                  {slide.title}
                </h3>
              </div>
              <ul className="space-y-1 ml-8">
                {slide.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-zinc-300 text-sm flex gap-2">
                    <span className="text-orange-500 mt-1.5 flex-shrink-0 text-xs">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading flex items-center gap-2 mb-4">
          <FaChalkboardTeacher className="text-orange-400" /> Tutor Delivery Script
        </h2>
        <p className="text-zinc-400 text-sm mb-5 italic">
          These are verbatim tutor notes - your words, section by section. Adapt to your style; the key messages are marked in bold in the notes.
        </p>
        <div className="bg-black/40 border border-zinc-700 rounded-lg px-6 py-5">
          <pre className="text-zinc-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {guide.deliveryScript}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading flex items-center gap-2 mb-4">
          <FaPenFancy className="text-orange-400" /> Interactive Activity
        </h2>
        <div className="bg-black/40 border border-orange-500/30 rounded-lg px-6 py-5">
          <pre className="text-zinc-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {guide.activity}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading flex items-center gap-2 mb-4">
          <FaUsers className="text-orange-400" /> Group Discussion Prompts
        </h2>
        <ol className="space-y-3">
          {guide.discussionPrompts.map((prompt, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-orange-400 font-black text-sm min-w-[1.5rem] mt-0.5">{index + 1}.</span>
              <span className="text-zinc-200 text-sm leading-relaxed">{prompt}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="section-heading flex items-center gap-2 mb-4">
          <FaLink className="text-orange-400" /> UK Resources & Signposting
        </h2>
        <ul className="space-y-2">
          {guide.resources.map((resource) => (
            <li key={resource.url}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold underline-offset-2 hover:underline transition-colors"
              >
                {resource.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="section-heading flex items-center gap-2 mb-4">
          <FaStickyNote className="text-orange-400" /> Tutor Notes & Safeguarding
        </h2>
        <div className="bg-black/40 border border-yellow-500/30 rounded-lg px-6 py-5">
          <pre className="text-zinc-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {guide.tutorNotes}
          </pre>
        </div>
      </section>

      <div className="mt-8 pt-6 border-t-2 border-red-700/50 mb-8">
        <p className="text-red-400 text-sm font-semibold flex items-center gap-2 mb-2">
          <FaExclamationTriangle /> If a participant needs immediate support during this session:
        </p>
        <div className="text-zinc-300 text-sm space-y-1">
          <p>• <strong>Emergency:</strong> Call <a href="tel:999" className="text-orange-400 underline">999</a></p>
          <p>• <strong>Samaritans</strong> (24/7 free): <a href="tel:116123" className="text-orange-400 underline">116 123</a></p>
          <p>• <strong>NHS 111</strong> mental health option: <a href="tel:111" className="text-orange-400 underline">111</a></p>
          <p>• <strong>Shout:</strong> Text SHOUT to <a href="sms:85258" className="text-orange-400 underline">85258</a> (24/7)</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-6 border-t border-zinc-800">
        {prevId ? (
          <Link href={`/courses/${prevId}`} className="metal-button metal-button--small">
            ← Module {String(prevId).padStart(2, '0')}
          </Link>
        ) : <div />}
        {nextId ? (
          <Link href={`/courses/${nextId}`} className="metal-button metal-button--small">
            Module {String(nextId).padStart(2, '0')} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
