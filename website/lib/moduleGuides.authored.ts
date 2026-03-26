import type { ModuleGuide, SessionSegment } from './moduleGuides.ts';

type AuthoredSlide = {
  title: string;
  bullets: string[];
  notes: string[];
};

type AuthoredGuideDefinition = Omit<ModuleGuide, 'slideOutline' | 'deliveryScript'> & {
  slides: AuthoredSlide[];
};

const SESSION_TIMES = [
  '0-10 min',
  '10-25 min',
  '25-40 min',
  '40-60 min',
  '60-80 min',
  '80-100 min',
  '100-120 min',
];

function buildSessionBreakdown(labels: string[]): SessionSegment[] {
  return SESSION_TIMES.map((time, index) => ({
    time,
    label: labels[index] ?? labels[labels.length - 1] ?? 'Module delivery',
  }));
}

function buildDeliveryScript(slides: AuthoredSlide[]): string {
  return slides
    .map((slide, index) => [`SLIDE ${index + 1} - ${slide.title}`, ...slide.notes].join('\n\n'))
    .join('\n\n');
}

function guide(definition: AuthoredGuideDefinition): ModuleGuide {
  const { slides, ...guideData } = definition;

  return {
    ...guideData,
    slideOutline: slides.map(({ title, bullets }) => ({ title, bullets })),
    deliveryScript: buildDeliveryScript(slides),
  };
}

function resource(label: string, url: string): { label: string; url: string } {
  return { label, url };
}

export const AUTHORED_MODULE_GUIDES: Record<number, ModuleGuide> = {
  1: guide({
    id: 1,
    topic: 'Foundations of Mental Health',
    summary:
      'A bespoke opening module on what mental health is, what shapes it, how stigma and inequality affect outcomes, and how participants can recognise concerns and use real UK support routes.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome, group safety and course expectations',
      'Mental health, mental wellbeing and the continuum',
      'Determinants, risk factors and protective factors',
      'Stigma, inequality and help-seeking barriers',
      'Activity: build a personal wellbeing and warning-sign plan',
      'Discussion, reflection and practical signposting',
      'Wrap-up, next steps and support after the session',
    ]),
    slides: [
      {
        title: 'Mental Health Is Part of Everyone\'s Health',
        bullets: [
          'Mental health sits on a continuum and changes over time.',
          'Wellbeing includes coping, relationships, purpose and day-to-day functioning.',
          'A person can be distressed and still have strengths, values and protective factors.',
          'The aim is understanding and support, not forcing people into labels.',
        ],
        notes: [
          'Open by setting the tone: this session is educational, not diagnostic, and no one is expected to disclose personal material. Name confidentiality, boundaries and the route for support after the session if somebody becomes distressed.',
          'Frame mental health as an ordinary part of health. The key shift for participants is to stop seeing mental health as something that only matters once somebody is in crisis.',
        ],
      },
      {
        title: 'Mental Health Is Shaped by Life Context',
        bullets: [
          'Housing, money, work, discrimination and safety all affect mental health.',
          'Physical health, pain, hormones and sleep can intensify psychological distress.',
          'Culture, identity and community shape how people make sense of symptoms.',
          'Mental health is not just about willpower or positive thinking.',
        ],
        notes: [
          'Teach the social determinants clearly. If someone is unsafe at home, under financial strain or living with chronic pain, it is not enough to tell them to be more resilient.',
          'This is where the course should sound grounded in reality: distress often makes sense in context, and support works better when that context is understood.',
        ],
      },
      {
        title: 'Risk Factors Do Not Guarantee Illness',
        bullets: [
          'Trauma, bereavement, loneliness, substance use and chronic stress can stack up.',
          'Family history may increase vulnerability without deciding a person\'s future.',
          'Risk rises when protective routines, safety and support begin to fall away.',
          'Early support can reduce escalation even when circumstances stay difficult.',
        ],
        notes: [
          'Explain cumulative risk. Participants should leave understanding that mental health problems rarely appear out of nowhere; they usually build from a combination of pressures, vulnerability and reduced support.',
          'Keep language non-deterministic. We do not teach that adversity means inevitable illness; we teach that risk is modifiable and support matters.',
        ],
      },
      {
        title: 'Protective Factors Can Be Built',
        bullets: [
          'Supportive relationships are one of the strongest protective factors.',
          'Sleep, movement, structure and reduced alcohol or drug use improve resilience.',
          'Meaning, faith, culture, creativity and volunteering can strengthen recovery.',
          'Protective factors are practical habits and environments, not motivational slogans.',
        ],
        notes: [
          'Move from theory into action. Protective factors should sound tangible: regular meals, predictable routines, calmer environments, social connection, access to help and a sense of purpose.',
          'It helps to remind the group that protective factors do not remove every problem, but they increase capacity to cope and reduce the chance of crisis.',
        ],
      },
      {
        title: 'Stigma Changes Outcomes',
        bullets: [
          'Self-stigma can delay help-seeking and increase shame.',
          'Public stigma affects school, work, healthcare and family responses.',
          'Structural stigma shows up in waiting times, exclusion and unequal treatment.',
          'Person-centred language makes engagement safer and more respectful.',
        ],
        notes: [
          'This slide matters because stigma is often the reason support is delayed. Ask participants to think about the phrases people hear: "pull yourself together", "everyone gets stressed", "do not make a fuss".',
          'Link stigma to outcomes. Shame increases isolation, and isolation often worsens symptoms.',
        ],
      },
      {
        title: 'Knowing When to Step Up Support',
        bullets: [
          'Watch for changes in sleep, appetite, concentration, energy and functioning.',
          'Longer duration, rising distress and reduced daily functioning need attention.',
          'Immediate risk, suicidal thinking or inability to stay safe needs urgent action.',
          'Concerns should be taken seriously even when a person seems outwardly fine.',
        ],
        notes: [
          'Teach the difference between ordinary ups and downs and a pattern that is becoming harder to manage. Duration, intensity, impairment and risk are the anchors.',
          'Make clear that immediate safety always overrides the teaching plan. If someone cannot stay safe, urgent support is the correct response.',
        ],
      },
      {
        title: 'A Practical UK Help-Seeking Ladder',
        bullets: [
          'Start with trusted people, self-help tools and safer routines where appropriate.',
          'Use GP, NHS talking therapies and voluntary-sector services for structured support.',
          'Use 111, local crisis routes, A&E or 999 when risk is immediate or escalating.',
          'Follow-up and review matter; support should not stop at first contact.',
        ],
        notes: [
          'Participants need a realistic map, not a vague message to "reach out". Walk through what each route is for, including when self-help is enough and when it is not.',
          'Keep the explanation UK-specific so learners understand how NHS access usually starts and what crisis escalation looks like in practice.',
        ],
      },
      {
        title: 'Recovery Is Not a Straight Line',
        bullets: [
          'Recovery may mean symptom reduction, better functioning or living well alongside symptoms.',
          'Progress usually includes setbacks, review points and adjustments to the plan.',
          'A recovery plan should reflect the person\'s goals, identity and support network.',
          'Relapse prevention is part of good care, not a sign of failure.',
        ],
        notes: [
          'Correct the idea that recovery means returning to a previous version of yourself. For many people, recovery is about building a workable, meaningful life with better insight and support.',
          'This also helps reduce shame when people experience relapse, burnout or recurring symptoms.',
        ],
      },
      {
        title: 'Belonging and Community Are Protective',
        bullets: [
          'Peer support, family, neighbourhood groups and faith or cultural communities can buffer distress.',
          'Belonging reduces isolation and increases the chance that somebody will notice a change early.',
          'The right support is personal; what helps one person may not suit another.',
          'Community support complements clinical care rather than replacing it.',
        ],
        notes: [
          'Avoid presenting support as professional-only. Many participants will benefit from understanding how community and identity protect mental health.',
          'At the same time, do not romanticise community if relationships are unsafe or shaming. Good support is supportive in practice, not just in name.',
        ],
      },
      {
        title: 'Build a Personal Wellbeing Plan',
        bullets: [
          'Notice your early warning signs and common stress triggers.',
          'Write down the routines, people and places that help you stay steady.',
          'Choose one next step you can take in the next 48 hours.',
          'Keep emergency and routine support options somewhere easy to find.',
        ],
        notes: [
          'Close with action. The module should end with participants writing something useful, not just nodding at information.',
          'If the group includes people with current distress, remind them they can keep their plan private and that support after the session is available.',
        ],
      },
    ],
    activity: `ACTIVITY - Personal Wellbeing and Warning-Sign Plan (20 minutes)

Purpose:
Help participants translate the module into one practical, personalised plan they can actually use.

Tutor steps:
1. Give each participant a one-page template with four headings: "Early warning signs", "What helps me", "Who I can contact", and "What I will do first if things worsen".
2. Invite five minutes of quiet completion. Make clear that this is private unless they choose to share.
3. Ask participants to circle one realistic action they can take within the next 48 hours.
4. Offer an optional paired discussion using the prompt: "What helps you notice that your mental health is starting to dip?"
5. Debrief by reinforcing that small, repeatable actions are more useful than unrealistic overhaul plans.

Tutor reminder:
Do not pressure anyone to share personal details. If somebody becomes upset, move into support and signposting rather than continuing to probe.`,
    discussionPrompts: [
      'What makes it easier or harder for people to admit they are struggling before they reach crisis point?',
      'Which protective factor is most under-valued in everyday life: sleep, connection, meaning, routine or something else?',
      'How should communities respond when somebody needs help but does not yet meet the threshold for specialist services?',
      'What language around mental health do you hear locally that helps, and what language clearly harms?',
    ],
    resources: [
      resource('WHO - Mental disorders fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders'),
      resource('NHS - Mental health services and urgent help', 'https://www.nhs.uk/nhs-services/mental-health-services/'),
      resource('NHS - Five steps to mental wellbeing', 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/'),
      resource('Samaritans - 116 123 and online support', 'https://www.samaritans.org'),
    ],
    tutorNotes: `Safeguarding:
This is an introductory session, so disclosures often surface here. If somebody describes current risk, move out of teaching mode and follow the organisation's safeguarding process.

Facilitation priorities:
Keep the language plain, non-clinical and non-judgemental. This session should reduce shame, increase confidence and make support routes concrete.

Delivery caution:
Avoid turning the module into a statistics lecture. Use evidence to frame the topic, then focus on what participants can recognise and do.`,
    powerPoint: `Tutor deck notes:
- Use Melksham Mental Health branding consistently, with calm high-contrast slides and no stock imagery that sensationalises distress.
- Student slides should stay uncluttered; reserve fuller explanation for tutor notes.
- Keep helpline and urgent support details visible on the closing slides.
- Use diagrams for the continuum, determinants and help-seeking ladder so participants can remember the structure after the session.`,
  }),
  2: guide({
    id: 2,
    topic: 'Introduction to Mental Health Disorders',
    summary:
      'A bespoke overview of how diagnostic categories are used, where they help, where they fall short, and how person-centred assessment, formulation and treatment planning work in UK practice.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and recap from module 1',
      'Diagnosis, formulation and why categories exist',
      'Diagnostic clusters, overlap and impairment',
      'Assessment pathways and treatment planning',
      'Activity: person-centred formulation exercise',
      'Discussion on language, bias and recovery',
      'Key takeaways, signposting and reflection',
    ]),
    slides: [
      {
        title: 'Diagnosis, Formulation and Identity Are Not the Same Thing',
        bullets: [
          'A diagnosis describes a recognised pattern; it is not the whole person.',
          'Formulation asks what has happened, what is keeping distress going and what may help.',
          'Identity is larger than any label and should stay visible in care planning.',
          'Good teaching separates clinical language from personal worth.',
        ],
        notes: [
          'Start by undoing a common mistake: people often treat diagnosis as destiny. A diagnosis can guide treatment and communication, but it never replaces the full story of the person.',
          'Introduce formulation early because it keeps the course grounded in context, triggers, strengths and patterns rather than labels alone.',
        ],
      },
      {
        title: 'Why Diagnostic Systems Exist',
        bullets: [
          'Diagnostic systems create a shared language for clinicians, services and research.',
          'ICD-11 is the international classification framework used in UK practice.',
          'NICE guidance supports decisions about evidence-based assessment and treatment.',
          'Categories change over time as evidence and social understanding evolve.',
        ],
        notes: [
          'Explain ICD-11 and NICE as tools, not absolute truth. That distinction matters because participants need confidence in mental health care without being taught that classifications are beyond challenge.',
          'Use this slide to model balanced thinking: structure is useful, but medicine also learns and changes.',
        ],
      },
      {
        title: 'Major Diagnostic Clusters',
        bullets: [
          'Neurodevelopmental, mood, anxiety, psychotic, personality, eating, sleep and substance-related conditions are common clusters.',
          'Clusters help organise learning, but real lives rarely fit into clean boxes.',
          'Symptoms from different clusters can appear together.',
          'The person\'s level of distress and impairment matters as much as the label.',
        ],
        notes: [
          'Map the terrain without turning the module into a memorisation exercise. The goal is orientation, not encyclopaedic coverage.',
          'This prepares learners for the next modules by giving them a framework for where each topic sits.',
        ],
      },
      {
        title: 'Severity, Duration, Impairment and Risk',
        bullets: [
          'Clinicians look at how long symptoms have lasted and how severe they are.',
          'Functional impact at home, work, study and relationships matters greatly.',
          'Risk assessment includes self-harm, suicide, safeguarding and deterioration.',
          'Diagnosis should never be made from one symptom in isolation.',
        ],
        notes: [
          'Participants often know symptom names but not how clinicians think. This slide should make clear that mental health assessment is about patterns, persistence, impact and safety.',
          'Keep repeating that distress deserves attention even when a person looks high-functioning from the outside.',
        ],
      },
      {
        title: 'Overlap, Comorbidity and Differential Diagnosis',
        bullets: [
          'Anxiety and low mood often co-occur with other conditions.',
          'Trauma, sleep problems, substance use and physical illness can change the picture.',
          'Different diagnoses can look similar at first presentation.',
          'Good assessment avoids both over-labelling and minimising distress.',
        ],
        notes: [
          'Teach overlap carefully because it helps learners avoid black-and-white thinking. The same outward behaviour can have very different meanings depending on context.',
          'This is also where you can name the limits of self-diagnosis from social media clips or symptom lists.',
        ],
      },
      {
        title: 'How Assessment Usually Works in UK Practice',
        bullets: [
          'Assessment may involve GPs, mental health teams, psychologists, psychiatrists and support workers.',
          'Good assessment includes symptoms, history, strengths, risk, goals and context.',
          'Carers or family may contribute if the person agrees and it is appropriate.',
          'Review is important because formulation and needs can change over time.',
        ],
        notes: [
          'Make the pathway concrete. Learners should understand that mental health assessment is usually staged and collaborative rather than a single dramatic event.',
          'If your local area has known access bottlenecks, note them honestly without turning the session into a service rant.',
        ],
      },
      {
        title: 'Treatment Planning Should Be Wider Than Medication',
        bullets: [
          'Evidence-based care may include talking therapy, medication, social support and practical adjustments.',
          'Sleep, housing, finances, trauma and relationships may all need attention.',
          'Shared decision-making improves engagement and long-term outcomes.',
          'Treatment should fit the person, not just the category.',
        ],
        notes: [
          'This is a good place to correct common myths. Medication helps some people a great deal, but it is not the whole of mental health care.',
          'Equally, avoid the opposite myth that people can think their way out of severe symptoms without structured treatment.',
        ],
      },
      {
        title: 'Recovery, Review and Relapse Prevention',
        bullets: [
          'Recovery can be full remission, better functioning or improved stability.',
          'Many conditions improve with treatment and support, especially when addressed early.',
          'Warning signs, coping plans and follow-up reduce relapse risk.',
          'People deserve hope without false promises.',
        ],
        notes: [
          'Use hopeful but defensible language. Recovery is real, but it is not identical for every condition or every person.',
          'This slide should leave the group with a balanced understanding: mental health disorders are serious, yet support and improvement are common.',
        ],
      },
      {
        title: 'Language, Culture and Bias Matter',
        bullets: [
          'Bias can affect who gets assessed, believed and offered the right support.',
          'Culture influences how distress is described and understood.',
          'Person-centred and trauma-informed language improves safety and trust.',
          'Labels should never be used to dismiss, mock or reduce somebody.',
        ],
        notes: [
          'This is where you explicitly address stigma in diagnosis. Some people are over-pathologised, some are missed, and both problems are shaped by bias and access.',
          'Model respectful language all the way through the discussion. The tutor tone matters as much as the slide content here.',
        ],
      },
      {
        title: 'A Person-Centred Formulation Lens',
        bullets: [
          'Ask what happened, what matters to the person and what keeps the pattern going.',
          'Include strengths, coping, supports and barriers alongside symptoms.',
          'Use formulation to guide action when a label alone is not enough.',
          'People engage better when they recognise themselves in the explanation.',
        ],
        notes: [
          'End the teaching section with formulation because it gives participants something practical and humane to hold onto.',
          'If the course is used by volunteers or peer supporters, this slide helps them stay useful without drifting into pseudo-diagnosis.',
        ],
      },
    ],
    activity: `ACTIVITY - Person-Centred Formulation Exercise (20 minutes)

Purpose:
Help learners practise moving beyond labels into a more useful understanding of context, patterns and support needs.

Case vignette:
"Aisha is 29, has stopped sleeping properly for three weeks, is missing work, feels constantly on edge, and has started avoiding friends. She also has chronic pain and recently went through a relationship breakdown."

Tutor steps:
1. In small groups, ask participants to sort information into four columns: "What is happening?", "What might be contributing?", "What strengths or supports are present?", and "What help might be useful now?".
2. Give groups seven minutes to build a short formulation.
3. Debrief with the whole room and ask what would be lost if Aisha were reduced to one label with no context.
4. Close by reinforcing that formulation complements diagnosis; it does not replace evidence-based care.`,
    discussionPrompts: [
      'When does a diagnosis feel helpful, and when can it become limiting or stigmatising?',
      'Why do you think some people are quick to adopt diagnostic labels while others avoid them completely?',
      'How can services use structured categories without losing sight of trauma, culture and social context?',
      'What should people know before they start searching symptoms online and trying to diagnose themselves?',
    ],
    resources: [
      resource('WHO - ICD-11 mental, behavioural and neurodevelopmental disorders update', 'https://www.who.int/news/item/08-03-2024-new-manual-released-to-support-diagnosis-of-mental--behavioural-and-neurodevelopmental-disorders-added-in-icd-11'),
      resource('WHO - Mental disorders fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders'),
      resource('NHS - Mental health conditions', 'https://www.nhs.uk/mental-health/conditions/'),
      resource('NHS - How to find local mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/how-to-find-local-mental-health-services/'),
    ],
    tutorNotes: `Facilitation:
Participants may have strong feelings about diagnosis based on personal experience. Hold the room in a balanced way: diagnosis can be relieving, upsetting, useful, stigmatising or all of those at once.

Teaching standard:
Stay person-centred and avoid presenting any single diagnosis as an identity or moral category.

Safeguarding:
If the conversation moves into active risk or clear personal crisis, pause the teaching content and follow support procedures.`,
    powerPoint: `Tutor deck notes:
- Keep the visual flow structured: diagnosis, assessment, formulation, treatment, recovery.
- Use clean comparison diagrams rather than dense tables.
- Student slides should teach concepts simply; tutor notes should hold the nuance around overlap, bias and differential diagnosis.
- Keep UK terminology and NHS pathways visible throughout.`,
  }),
  3: guide({
    id: 3,
    topic: 'Autism: Neurodevelopment, Identity and Support',
    summary:
      'A neuro-affirming autism module using current UK guidance on presentation, masking, sensory needs, assessment pathways, reasonable adjustments and mental health support.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and module framing',
      'Autism as a neurodevelopmental difference',
      'Masking, sensory load and communication',
      'Assessment routes and mental health needs',
      'Activity: autism-friendly environment audit',
      'Discussion on inclusion and adjustments',
      'Wrap-up, signposting and next steps',
    ]),
    slides: [
      {
        title: 'Autism Is a Neurodevelopmental Difference',
        bullets: [
          'Autism affects how people process information, social communication, change and sensory input.',
          'It is lifelong and should not be taught as a defect in character.',
          'Autistic people vary widely in support need, communication and strengths.',
          'Good teaching explains difference and support together.',
        ],
        notes: [
          'Open with a neuro-affirming frame. The goal is not to deny difficulty, but to stop teaching autism as if autistic people are broken versions of everybody else.',
          'Make clear that there is no single autistic presentation. Support must fit the person in front of you.',
        ],
      },
      {
        title: 'Presentation Is Varied and Often Missed',
        bullets: [
          'Presentation can differ across age, gender, culture and stress level.',
          'Support need is more useful than outdated functioning labels.',
          'Some autistic people appear socially fluent but rely on exhausting compensation.',
          'Recognition is often delayed when people mask well.',
        ],
        notes: [
          'Teach that short interactions can be misleading. A person may sound articulate and still be expending huge effort to cope.',
          'Avoid high-functioning and low-functioning labels because they often erase either need or strength.',
        ],
      },
      {
        title: 'Masking and Camouflaging Carry a Cost',
        bullets: [
          'Masking means hiding autistic traits to meet social expectations.',
          'It can delay recognition and increase anxiety, burnout and shame.',
          'Girls, women and some non-binary people are often missed because of masking.',
          'Late recognition can bring both relief and grief.',
        ],
        notes: [
          'Link masking directly to mental health. The problem is not only whether somebody can mask, but what it costs them to do it all day.',
          'This slide helps explain why adults may present after years of being misunderstood.',
        ],
      },
      {
        title: 'Sensory Load and Communication Matter',
        bullets: [
          'Light, sound, touch, smell, movement and unpredictability can all overload the nervous system.',
          'Shutdown or meltdown is often a response to overload, not wilful behaviour.',
          'Literal, clear language and written follow-up can improve understanding.',
          'Reasonable adjustments reduce stress quickly.',
        ],
        notes: [
          'Teach sensory access as a real access issue. Busy rooms, sudden changes and layered instructions can make participation much harder.',
          'Communication differences are two-way. Services need to adapt, not just expect the autistic person to decode everything.',
        ],
      },
      {
        title: 'Autism and Mental Health Often Interact',
        bullets: [
          'Anxiety, depression, trauma, loneliness and autistic burnout can co-occur.',
          'Distress may appear through withdrawal, overload, irritability or loss of routine.',
          'Needs can be missed when distress is dismissed as "just autism".',
          'Support should address access needs and mental health together.',
        ],
        notes: [
          'Do not frame poor mental health as inevitable, but explain why it is common when people are repeatedly misunderstood or overloaded.',
          'This is also the place to name diagnostic overshadowing in autism-informed terms.',
        ],
      },
      {
        title: 'Assessment and Support Pathways in the UK',
        bullets: [
          'Assessment may begin through GP, school or local referral routes.',
          'Waiting times can be long, so interim adjustments still matter.',
          'Developmental history, current presentation and context should all be considered.',
          'Support should not wait for perfection in the paperwork.',
        ],
        notes: [
          'Be honest about pathway pressure, but keep the lesson practical. Assessment matters, and adjustments often should start before the final report arrives.',
          'Remind the group that adults, children and families may enter different pathways.',
        ],
      },
      {
        title: 'Reasonable Adjustments Improve Access',
        bullets: [
          'Useful adjustments include quiet spaces, clearer agendas, written instructions and warning of change.',
          'Predictability often increases participation and reduces distress.',
          'Adjustments are access supports, not special treatment.',
          'Small environmental changes can have large effects.',
        ],
        notes: [
          'Push the group to think practically. What would change tomorrow if appointments, groups or workplaces assumed sensory and communication needs were common?',
          'Barrier removal should be the core mindset here.',
        ],
      },
      {
        title: 'Identity, Strengths and Community Support',
        bullets: [
          'Autistic people may describe strengths in focus, honesty, creativity or pattern recognition.',
          'Identity and autonomy matter alongside support need.',
          'Community, peer support and autism-informed services reduce isolation.',
          'The goal is belonging and good quality of life, not forced normality.',
        ],
        notes: [
          'End the teaching section with dignity. Strength-based teaching should stay honest, but it must still describe whole people rather than only deficits.',
          'Autistic voices should shape what good support looks like.',
        ],
      },
    ],
    activity: `ACTIVITY - Autism-Friendly Environment Audit (20 minutes)

Tutor steps:
1. Ask pairs to review the current room, service or workplace using four headings: sensory load, communication, predictability and recovery space.
2. Have them list barriers an autistic person might meet before the activity or appointment even begins.
3. Ask each pair to propose three practical adjustments and one longer-term service improvement.
4. Debrief by identifying one change the organisation could make immediately.`,
    discussionPrompts: [
      'Why are autistic people still recognised late, especially those who mask heavily?',
      'What is the difference between helping somebody participate and pushing them to appear non-autistic?',
      'Which reasonable adjustment makes the biggest difference in your setting?',
      'How can services include autistic voices without assuming everyone wants the same thing?',
    ],
    resources: [
      resource('NHS - Autism overview', 'https://www.nhs.uk/conditions/autism/'),
      resource('NHS - Signs of autism in adults', 'https://www.nhs.uk/conditions/autism/signs/adults/'),
      resource('NHS - Where to get autism support', 'https://www.nhs.uk/conditions/autism/support/'),
      resource('NICE - Autism spectrum disorder in adults: diagnosis and management', 'https://www.nice.org.uk/guidance/cg142'),
    ],
    tutorNotes: `Facilitation:
Avoid talking about autistic people as if they are absent from the room. Keep the language specific, respectful and practical.

Safeguarding:
If somebody discloses significant burnout, distress or current risk, move into support and signposting rather than staying in teaching mode.`,
    powerPoint: `Tutor deck notes:
- Keep slides uncluttered and sensory-friendly.
- Use simple diagrams for masking, sensory load and reasonable adjustments.
- Student slides should stay concrete; tutor notes should hold the nuance on pathways, burnout and mental health risk.`,
  }),
  4: guide({
    id: 4,
    topic: 'ADHD: Executive Function, Impairment and Support',
    summary:
      'A bespoke ADHD module covering presentation across the lifespan, executive function, repeated shame, NICE-aligned treatment options and practical adjustments for work, study and daily life.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and module framing',
      'ADHD across presentation and lifespan',
      'Executive function, emotional load and impairment',
      'Assessment, treatment and support planning',
      'Activity: redesign a task for an ADHD brain',
      'Discussion on adjustments and late diagnosis',
      'Wrap-up, signposting and next steps',
    ]),
    slides: [
      {
        title: 'What ADHD Is and What It Is Not',
        bullets: [
          'ADHD is a neurodevelopmental condition affecting attention regulation, impulse control and activity level.',
          'It is not a problem of intelligence, laziness or weak character.',
          'Executive function gives a better explanation than stereotypes alone.',
          'Shame-based narratives delay support and worsen outcomes.',
        ],
        notes: [
          'Start by removing the lazy-character story. Learners need a coherent explanation of neurodevelopment and impairment, not a morality tale.',
          'Keep the tone precise: ADHD is common, real and treatable, but still widely misunderstood.',
        ],
      },
      {
        title: 'Presentation Changes Across the Lifespan',
        bullets: [
          'ADHD may be predominantly inattentive, predominantly hyperactive-impulsive or combined.',
          'Adults may show inner restlessness, disorganisation and chronic lateness rather than visible hyperactivity.',
          'Girls and women are often missed when symptoms look quieter or more masked.',
          'Environment and coping strategies can change how ADHD appears.',
        ],
        notes: [
          'This slide helps explain why so many adults are recognised late. Hyperactivity may become less visible while impairment stays high.',
          'Use examples people recognise: unfinished tasks, lost items, missed deadlines, overwhelm and inconsistent follow-through.',
        ],
      },
      {
        title: 'Executive Function and Time Blindness',
        bullets: [
          'ADHD often affects planning, task initiation, working memory and self-monitoring.',
          'Time blindness can make future tasks feel unreal until urgency becomes extreme.',
          'People may know what to do and still struggle to begin.',
          'Support often needs to externalise structure rather than repeat instructions.',
        ],
        notes: [
          'Executive function is the core teaching frame. It explains why good intentions do not reliably produce organised behaviour.',
          'Give everyday examples so participants can see impairment in ordinary life rather than only in clinics.',
        ],
      },
      {
        title: 'Emotional Regulation and Repeated Shame',
        bullets: [
          'Many people with ADHD describe strong frustration, sensitivity to criticism and years of negative feedback.',
          'Repeated failure experiences can drive anxiety, low mood and avoidance.',
          'Conflict at home, school or work may reflect unsupported impairment.',
          'Support should reduce shame as well as symptoms.',
        ],
        notes: [
          'Keep the language careful here. Do not overstate internet shorthand, but do explain that emotional strain is common and often clinically relevant.',
          'The key message is that criticism often becomes part of the problem.',
        ],
      },
      {
        title: 'The ADHD Tax and Functional Impairment',
        bullets: [
          'ADHD can create real costs through late fees, job strain, unsafe driving, lost items and missed appointments.',
          'Impairment often appears in routines, relationships and self-management.',
          'High ability can hide high effort and high exhaustion.',
          'Support planning should focus on function, not just symptom labels.',
        ],
        notes: [
          'Teach impairment in practical terms. That makes the condition legible without sensationalising it.',
          'Challenge the idea that somebody is doing fine simply because they sometimes perform well.',
        ],
      },
      {
        title: 'Assessment, Comorbidity and Differential Diagnosis',
        bullets: [
          'Assessment should include developmental history, current impairment and context.',
          'Anxiety, depression, trauma, sleep problems and autism can overlap with ADHD.',
          'Good assessment looks across settings, not one-off behaviour.',
          'A diagnosis should clarify support, not close down curiosity.',
        ],
        notes: [
          'This prevents simplistic self-diagnosis and simplistic dismissal. ADHD can be both missed and over-assumed if overlap is ignored.',
          'Name pathway pressures honestly, but keep the teaching focused on what good assessment contains.',
        ],
      },
      {
        title: 'NICE-Aligned Treatment and Practical Support',
        bullets: [
          'Psychoeducation, medication, environmental support and coaching strategies often work best together.',
          'Medication can help many people when assessment and monitoring are appropriate.',
          'Reminders, body doubling, chunking and visual planning reduce friction.',
          'Support should be reviewed over time rather than treated as one fixed answer.',
        ],
        notes: [
          'Keep the framing balanced. Medication matters for many people, but it is not the whole model of care. Equally, structure alone is not enough for everyone.',
          'The strongest message is multimodal support: explanation, treatment, practical adaptation and review.',
        ],
      },
      {
        title: 'Adjustments and a Realistic Support Plan',
        bullets: [
          'Useful adjustments include written follow-up, clearer deadlines, lower-distraction spaces and shorter task chunks.',
          'Choose one tool for planning, one for remembering and one for getting started.',
          'Reasonable adjustments improve consistency rather than giving unfair advantage.',
          'Plans should be simple enough to use on a bad day, not just a good day.',
        ],
        notes: [
          'End with action and practicality. Many people with ADHD have seen endless productivity tips; what they need is a small plan that can survive ordinary life.',
          'Keep reminding the group that support must be individual rather than trendy.',
        ],
      },
    ],
    activity: `ACTIVITY - Redesign a Task for an ADHD Brain (20 minutes)

Tutor steps:
1. Give each pair a common task such as paying a bill, preparing for an appointment or completing an online form.
2. Ask them to map where the task breaks down: remembering, starting, sequencing, time estimation, distraction or emotional avoidance.
3. Have them redesign the task using chunking, prompts, checklists, timers, accountability or simplified environments.
4. Debrief by comparing which changes reduce the most friction.`,
    discussionPrompts: [
      'Why are adults with ADHD still so often dismissed as disorganised rather than recognised as impaired?',
      'Which adjustment matters most in work or study settings: time structure, written communication, reduced distraction or accountability support?',
      'How can services talk about ADHD without trivialising it and without over-labelling every difficulty?',
      'What changes when shame is replaced with explanation and practical support?',
    ],
    resources: [
      resource('NHS - Attention deficit hyperactivity disorder (ADHD)', 'https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/'),
      resource('NHS England - ADHD taskforce and programme work', 'https://www.england.nhs.uk/mental-health/adhd/'),
      resource('NICE - Attention deficit hyperactivity disorder: diagnosis and management', 'https://www.nice.org.uk/guidance/ng87'),
      resource('ADHD UK - practical information and support', 'https://adhduk.co.uk'),
    ],
    tutorNotes: `Facilitation:
Adults who suspect ADHD may identify strongly with the material even without formal diagnosis. Keep the room grounded, respectful and practical.

Safeguarding:
If learners disclose severe burnout, risk or inability to cope, move into support and signposting rather than continuing as normal.`,
    powerPoint: `Tutor deck notes:
- Use clean process diagrams for executive function, task breakdown and support planning.
- Student slides should emphasise impairment and practical support, not stereotypes.
- Tutor notes should hold the nuance on waiting lists, comorbidity and late-diagnosis grief.`,
  }),
  5: guide({
    id: 5,
    topic: 'Learning Disability, Intellectual Disability and Specific Learning Differences',
    summary:
      'A bespoke UK-focused module on terminology, mental health inequality, accessible communication, supported decision-making and inclusive practice for people with learning disabilities and specific learning differences.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and language check-in',
      'UK terminology, support need and access',
      'Mental health inequality and diagnostic overshadowing',
      'Communication, rights and inclusive support',
      'Activity: rewrite a service message accessibly',
      'Discussion on inclusion and family support',
      'Wrap-up, signposting and practical next steps',
    ]),
    slides: [
      {
        title: 'Use the Right UK Terms',
        bullets: [
          'In UK usage, learning disability usually refers to significant lifelong impairment in intellectual and adaptive functioning.',
          'Specific learning differences such as dyslexia or dyspraxia are different from learning disability.',
          'Clear terminology improves dignity and access to the right support.',
          'Respectful, precise language is the baseline for good practice.',
        ],
        notes: [
          'Start with terminology because the wrong language causes confusion through the rest of the module. In UK settings, learning disability and learning difficulty are not interchangeable.',
          'Precision here is not pedantry. It affects assessment, entitlement, communication and dignity.',
        ],
      },
      {
        title: 'Support Need and Adaptive Functioning Matter',
        bullets: [
          'Assessment considers everyday functioning as well as cognitive ability.',
          'Support needs may affect communication, daily living, safety and managing change.',
          'People vary widely in profile, independence and preferred support.',
          'Support should be built around the person rather than a stereotype.',
        ],
        notes: [
          'Keep the focus on real life: what somebody needs in order to understand, decide, participate and stay safe.',
          'Avoid reducing people to IQ. Adaptive functioning and context are far more useful for inclusive practice.',
        ],
      },
      {
        title: 'Specific Learning Differences Need Different Support',
        bullets: [
          'Dyslexia, dyscalculia, dyspraxia and related differences affect particular areas of processing or coordination.',
          'These differences do not mean low intelligence.',
          'Support often involves accessible materials, alternative formats and realistic pacing.',
          'Unrecognised learning differences are often misread as laziness or lack of effort.',
        ],
        notes: [
          'This slide stops the module collapsing every learning need into one category. Support has to match the actual difficulty.',
          'Use examples from education, forms, appointments or workplace systems where information demands are hidden but significant.',
        ],
      },
      {
        title: 'Mental Health Inequality and Diagnostic Overshadowing',
        bullets: [
          'People with learning disabilities experience poorer health outcomes and unequal access to support.',
          'Distress may be missed when others wrongly assume "that is just the disability".',
          'Communication barriers can hide anxiety, depression, trauma or pain.',
          'The correct response is better assessment, not lower expectations.',
        ],
        notes: [
          'Diagnostic overshadowing is the central mental health teaching point in this module. It explains why people can be visibly unwell yet still not receive the same standard of investigation.',
          'Keep linking back to dignity: people with learning disabilities deserve the same curiosity and response to distress as everybody else.',
        ],
      },
      {
        title: 'Accessible Communication Is a Safety Issue',
        bullets: [
          'Easy Read, short sentences, visual cues and checking understanding improve access.',
          'Accessible communication supports consent, appointments, medication and crisis planning.',
          'Talking only to carers can exclude the person from their own care.',
          'The service has a duty to communicate accessibly.',
        ],
        notes: [
          'Teach accessible communication as essential, not optional. If someone cannot understand the information, they cannot participate meaningfully in decisions.',
          'Model accessible teaching in the room through pacing, simpler phrasing and one point at a time.',
        ],
      },
      {
        title: 'Capacity, Rights and Supported Decision-Making',
        bullets: [
          'People should be supported to make decisions wherever possible.',
          'Capacity is decision-specific and can be affected by the support offered.',
          'Best-interest processes are safeguards, not shortcuts to exclusion.',
          'Respect, patience and accessible information improve real participation.',
        ],
        notes: [
          'Do not turn this into a law lecture, but do teach the principle clearly: support decision-making first and avoid paternalism.',
          'This slide matters because people are often talked over when services are rushed.',
        ],
      },
      {
        title: 'Behaviour That Challenges Is Often Communication',
        bullets: [
          'Distress, pain, sensory overload, fear or unmet need may sit behind challenging behaviour.',
          'Punitive responses can escalate fear and reduce trust.',
          'Assessment should ask what the behaviour is communicating and what conditions are making it worse.',
          'Support plans work better when they reduce triggers and increase understanding.',
        ],
        notes: [
          'Frame behaviour that challenges as information, not moral failure. This helps participants look for pain, mismatch or overload rather than simply demanding compliance.',
          'The key shift is from control to understanding and safer support.',
        ],
      },
      {
        title: 'Health Checks, Transitions and Community Inclusion',
        bullets: [
          'Transitions between school, adult services, housing and support can increase risk.',
          'Annual health checks and the learning disability register can improve access to care.',
          'Family advocacy often fills gaps when systems are fragmented.',
          'Belonging, meaningful activity and safe relationships protect mental health.',
        ],
        notes: [
          'Keep this rooted in service reality. People often deteriorate at transition points because systems become less coordinated or less accessible.',
          'End with inclusion in ordinary life, not just service access. The aim is participation, dignity and safety.',
        ],
      },
    ],
    activity: `ACTIVITY - Accessible Information Redesign (20 minutes)

Tutor steps:
1. Provide a short piece of standard service language such as an appointment letter or consent paragraph.
2. Ask small groups to rewrite it using shorter sentences, one idea at a time, clearer structure and visual signposting.
3. Ask what additional support a person might still need beyond the rewritten text, such as pictures, more time or verbal explanation.
4. Debrief by identifying one concrete change the organisation could make this month.`,
    discussionPrompts: [
      'Where do services most often fail people with learning disabilities: language, pace, assumptions, physical access or something else?',
      'How do we include carers well without talking over the person whose life is being discussed?',
      'What would reduce diagnostic overshadowing in everyday practice?',
      'Which one change would make your local environment more genuinely inclusive this month?',
    ],
    resources: [
      resource('NHS - Learning disabilities overview', 'https://www.nhs.uk/conditions/learning-disabilities/'),
      resource('NHS England - Find out about the Learning Disability Register', 'https://www.england.nhs.uk/long-read/find-out-about-the-learning-disability-register/'),
      resource('NICE - Mental health problems in people with learning disabilities: prevention, assessment and management', 'https://www.nice.org.uk/guidance/ng54'),
      resource('NICE - Challenging behaviour and learning disabilities', 'https://www.nice.org.uk/guidance/ng11'),
    ],
    tutorNotes: `Facilitation:
Use precise UK terminology from the start and explain it plainly. Many learners will have heard conflicting language and need the distinction made clearly.

Safeguarding:
If participants disclose neglect, abuse or unmanaged risk involving a person with a learning disability, follow safeguarding procedures promptly.`,
    powerPoint: `Tutor deck notes:
- Use clear comparison visuals to distinguish learning disability, learning difficulty and specific learning difference.
- Keep student slides uncluttered and accessible in their own design.
- Tutor notes should emphasise diagnostic overshadowing, accessible communication and supported decision-making.`,
  }),
};
