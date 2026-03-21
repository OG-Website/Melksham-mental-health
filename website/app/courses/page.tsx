import Link from 'next/link';
import { FaExclamationTriangle, FaBookOpen, FaUsers, FaClock, FaChalkboardTeacher, FaUserPlus } from 'react-icons/fa';
import { loadOptionalSessionUser } from '@/lib/portalAuth';
import CourseInterestButton from '@/components/CourseInterestButton';
import CourseAccessApplyButton from '@/components/CourseAccessApplyButton';
export const metadata = {
  title: 'Mental Health Courses | Melksham Mental Health',
  description: 'A comprehensive 50-module mental health course covering every major condition, social issue, and life-stage challenge. Evidence-based, peer-informed, and built for real people.',
};

const modules = [
  { id: 1, topic: 'Foundations of Mental Health', summary: 'Define mental health and mental illness; prevalence (970 million people with mental disorders), economic burden, stigma, self-care and social connections.' },
  { id: 2, topic: 'Introduction to Mental-Health Disorders', summary: 'Overview of DSM-5 categories: mood, anxiety, trauma-related, neurodevelopmental, neurocognitive, psychotic, personality, somatic, dissociative, eating, sleep, impulse-control and substance-use disorders.' },
  { id: 3, topic: 'Neurodevelopmental Disorders: Autism Spectrum', summary: 'Autism as a spectrum of brain development differences; early signs, therapies to support communication and social skills; empathy and inclusive language exercises.' },
  { id: 4, topic: 'Neurodevelopmental Disorders: ADHD', summary: 'Attention-deficit hyperactivity disorder; common symptoms (daydreaming, forgetfulness, hyperactivity, impulsive decisions); treatment strategies and coping techniques for adults.' },
  { id: 5, topic: 'Neurodevelopmental Disorders: Intellectual & Learning Disabilities', summary: 'Intellectual disability, global developmental delay, dyslexia and other learning disorders; early intervention and inclusive education.' },
  { id: 6, topic: 'Trauma & Stress: Acute Stress and Adjustment Disorders', summary: 'Acute stress disorder and adjustment disorders; how major life changes (job loss, divorce) trigger anxiety, irritability and depressed mood; coping strategies and trauma-informed listening.' },
  { id: 7, topic: 'Trauma & Stress: PTSD and Complex PTSD', summary: 'PTSD symptoms (re-experiencing, avoidance, hypervigilance); complex PTSD from prolonged trauma; cognitive processing therapy and prolonged exposure treatments.' },
  { id: 8, topic: 'Trauma & Stress: Domestic & Intimate Partner Violence', summary: 'Prevalence of domestic violence; types of abuse (physical, sexual, psychological); risk factors; mental-health consequences (PTSD, depression, anxiety); safety planning and referral resources.' },
  { id: 9, topic: 'Trauma & Stress: Childhood Trauma & ACEs', summary: 'Adverse childhood experiences (ACEs): abuse, neglect and household dysfunction; how early trauma affects brain development; resilience and protective factors.' },
  { id: 10, topic: 'Trauma & Stress: Self-harm & Suicide Prevention', summary: 'Reasons for self-harm (relief of distress, self-punishment); harm-reduction strategies; crisis resources; safety planning and how to support someone in crisis.' },
  { id: 11, topic: 'Mood Disorders: Major Depression', summary: 'Symptoms (sad mood, loss of interest, fatigue, guilt, suicidal thoughts), causes, and treatments (antidepressants, psychotherapy, lifestyle changes). How depression manifests across cultures and genders.' },
  { id: 12, topic: 'Mood Disorders: Bipolar Disorder', summary: 'Bipolar I and II disorders; manic episodes (elevated mood, impulsivity) and depressive episodes; medication adherence and early warning signs.' },
  { id: 13, topic: 'Mood Disorders: Seasonal & Persistent Depressive Disorders', summary: 'Seasonal affective disorder, dysthymia and cyclothymia; light therapy and behavioural activation techniques.' },
  { id: 14, topic: 'Anxiety Disorders: Generalised Anxiety Disorder', summary: 'Excessive worry, restlessness, concentration problems and muscle tension; cognitive behavioural therapy, mindfulness and medication.' },
  { id: 15, topic: 'Anxiety Disorders: Phobias & Panic Disorder', summary: 'Specific phobias, social anxiety and panic disorder; exposure therapy and relaxation exercises.' },
  { id: 16, topic: 'Anxiety Disorders: OCD & Related Conditions', summary: 'Obsessive-compulsive disorder, body dysmorphic disorder, hoarding and trichotillomania; exposure and response prevention therapy.' },
  { id: 17, topic: 'Dissociative & Somatic Disorders', summary: 'Dissociative amnesia, dissociative identity disorder and depersonalisation; somatic symptom disorder and illness anxiety; trauma-focused approaches.' },
  { id: 18, topic: 'Eating Disorders & Body Image', summary: 'Anorexia nervosa, bulimia nervosa, binge eating disorder and ARFID; body image, social media influences and recovery options.' },
  { id: 19, topic: 'Sleep & Circadian Rhythm Disorders', summary: 'Insomnia, hypersomnolence, narcolepsy, sleep apnea, parasomnias and restless legs syndrome; sleep hygiene and CBT for insomnia.' },
  { id: 20, topic: 'Impulse-Control & Disruptive Disorders', summary: 'Intermittent explosive disorder, conduct disorder, oppositional defiant disorder, kleptomania and pyromania; behavioural interventions and family therapy.' },
  { id: 21, topic: 'Substance Use & Addiction', summary: 'Substance use disorder criteria, brain changes, withdrawal and cravings; alcohol, opioids, stimulants, cannabis and gambling disorders; harm-reduction strategies including overdose prevention.' },
  { id: 22, topic: 'Psychotic Disorders: Schizophrenia & Related Conditions', summary: 'Positive and negative symptoms (hallucinations, delusions, flat affect); early intervention and antipsychotic medications.' },
  { id: 23, topic: 'Personality Disorders: Cluster A & B', summary: 'Paranoid, schizoid, schizotypal, antisocial, borderline and histrionic personality disorders; stigma, dialectical behaviour therapy and mentalisation-based treatment.' },
  { id: 24, topic: 'Personality Disorders: Cluster C & Others', summary: 'Narcissistic, avoidant, dependent and obsessive-compulsive personality disorders; cognitive and interpersonal therapies.' },
  { id: 25, topic: 'Neurocognitive Disorders', summary: 'Delirium, major and mild neurocognitive disorders due to Alzheimer\'s, Parkinson\'s and other diseases; caregiver support and advance care planning.' },
  { id: 26, topic: 'Mental Health & Chronic Physical Conditions', summary: 'How chronic illness (diabetes, arthritis, cancer) increases risk of depression and anxiety; people with long-term conditions are more than twice as likely to develop mental ill-health; coping strategies and support groups.' },
  { id: 27, topic: 'Workplace Mental Health & Burnout', summary: 'Poor working environments (discrimination, excessive workloads, low control, job insecurity) as mental health risks; strategies for employers and employees to prevent burnout and promote well-being.' },
  { id: 28, topic: 'Social Isolation & Loneliness', summary: 'Loneliness vs social isolation; loneliness doubles risk of depression and increases anxiety, self-harm and suicide; interventions to strengthen social connections.' },
  { id: 29, topic: 'Financial Stress & Mental Health', summary: 'How mental health issues lead to overspending, avoidance of bills, reduced income and social isolation; how money problems trigger anxiety and panic; budgeting tools and benefits advice.' },
  { id: 30, topic: 'Relationships & Attachment', summary: 'Healthy relationship skills (communication, empathy, boundaries); codependency and attachment styles; how trauma and mental illness affect partnerships.' },
  { id: 31, topic: 'Parenting Stress & Paternal Mental Health', summary: 'Mental-health impacts of parenting; about one in ten dads experience postpartum depression; 5–15% develop anxiety disorders; coping strategies and support for parents.' },
  { id: 32, topic: 'Maternal Mental Health & Perinatal Disorders', summary: 'Postpartum depression, anxiety, OCD and psychosis; risk factors; postpartum depression rates doubled between 2010 and 2021; screening and support.' },
  { id: 33, topic: 'Child & Adolescent Mental Health', summary: 'Anxiety, depression, self-harm, behavioural disorders and autism in young people; risk factors (bullying, academic pressure, social media) and early intervention.' },
  { id: 34, topic: 'Older Adult Mental Health', summary: '14.1% of adults aged 70+ have a mental disorder; about one sixth of suicide deaths occur in this age group; risk factors: bereavement, declining health, social isolation and elder abuse.' },
  { id: 35, topic: 'LGBTQIA+ Mental Health', summary: 'Mental health problems are more common in LGBTQIA+ people due to discrimination, homophobia, transphobia and rejection — not because of identity. Affirmative therapy and community support.' },
  { id: 36, topic: 'Racism, Discrimination & Intersectionality', summary: 'Racism as a mental-health issue causing trauma and ill-health; compounded effects of racism, sexism, ableism and other discrimination; resilience and healing in marginalised communities.' },
  { id: 37, topic: 'Gender & Sexuality', summary: 'How gender identity and expectations influence mental health; gender dysphoria, sexism and gender-based violence; inclusive language and allyship training.' },
  { id: 38, topic: 'Sexual Violence & Trauma', summary: 'PTSD, anxiety and depression in sexual assault survivors; hypervigilance, emotional dysregulation, flashbacks, nightmares and self-blame; trauma-focused therapies and support resources.' },
  { id: 39, topic: 'Grief, Loss & Bereavement', summary: 'Stages of grief (denial, anger, bargaining, depression, acceptance); complicated grief, ambiguous loss, pet loss and disenfranchised grief; rituals and support groups.' },
  { id: 40, topic: 'Chronic Pain & Pain Management', summary: 'Interplay between chronic pain and mental health; increased risk of depression and anxiety; CBT for pain, pacing and mindfulness.' },
  { id: 41, topic: 'Sleep Hygiene & Circadian Health', summary: 'Healthy sleep patterns; impact of shift work and screen time on circadian rhythms; melatonin, sleep restriction therapy and relaxation exercises.' },
  { id: 42, topic: 'Nutrition, Exercise & Mental Health', summary: 'How regular physical activity, balanced diet and hydration improve mood and cognitive function; nutritional deficiencies (omega-3, vitamin D) and their links to mental health.' },
  { id: 43, topic: 'Mindfulness, Meditation & Breathwork', summary: 'Mindfulness-based stress reduction, breathing techniques, yoga and meditation; evidence for reducing anxiety and enhancing emotional regulation.' },
  { id: 44, topic: 'Creative Arts & Expressive Therapies', summary: 'Art therapy, music therapy, dance/movement therapy and writing as tools to process emotions and trauma; hands-on creative exercises.' },
  { id: 45, topic: 'Technology & Mental Health: Screen Time, Gaming & Social Media', summary: 'Effects of excessive smartphone use, gaming disorder and social media comparison on anxiety, depression and sleep; digital detox strategies and guidelines for healthy online engagement.' },
  { id: 46, topic: 'Climate Anxiety & Eco-distress', summary: 'Mental-health impacts of climate change (fear, grief, helplessness); activism, community resilience and eco-therapy as coping mechanisms.' },
  { id: 47, topic: 'Spirituality & Meaning', summary: 'How spirituality, religion and personal meaning can support mental health; spiritual abuse; supporting clients with diverse beliefs.' },
  { id: 48, topic: "Men's Mental Health & Masculinity", summary: 'How traditional masculinity norms hinder help-seeking; anger, substance use and suicide in men; gender-sensitive outreach strategies.' },
  { id: 49, topic: 'Military & Veteran Mental Health', summary: 'Combat-related PTSD, moral injury, traumatic brain injury, substance use and reintegration challenges; veteran support services.' },
  { id: 50, topic: 'Prison, Legal System & Mental Health', summary: 'Mental-health challenges faced by incarcerated individuals, those on probation and people with criminal records; impact of solitary confinement, stigma and reentry support.' },
];

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
  // Check session — page is PUBLIC but logged-in users get extra features
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
          Designed for real people — whether you&apos;re seeking to understand your own experiences, support someone you care about, or build professional knowledge.
        </p>

        {/* Apply banner for logged-in non-admin members */}
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
                  ✓ Your programme application has been submitted — we&apos;ll be in touch soon.
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

        {/* Course stats */}
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

        {/* Session structure */}
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

        {/* Module list grouped by category */}
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
                        </div>
                        <div className="flex items-center gap-2 mb-2 text-orange-400 text-xs font-semibold">
                          <FaClock className="text-xs" />
                          <span>2 hours · Facilitated group session</span>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-2">
                          {mod.summary}
                        </p>
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

        {/* CTA for non-logged-in visitors */}
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

        {/* CTA */}
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

        {/* Crisis footer */}
        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-2xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> Need Immediate Support?
          </h2>
          <p className="text-zinc-100 mb-4">
            If you are in crisis while engaging with this course material, please reach out now:
          </p>
          <div className="space-y-2 text-zinc-100 mb-6">
            <p>• Call <a href="tel:999" className="underline font-semibold">999</a> for immediate danger</p>
            <p>• Call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a> (24/7, free)</p>
            <p>• Call <a href="tel:111" className="underline font-semibold">NHS 111</a> and select mental health option (24/7)</p>
            <p>• Text <a href="sms:85258" className="underline font-semibold">SHOUT to 85258</a> for 24/7 text support</p>
            <p>• In Wiltshire: <a href="tel:08009530110" className="underline font-semibold">0800 953 0110</a> (24/7 crisis line)</p>
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
