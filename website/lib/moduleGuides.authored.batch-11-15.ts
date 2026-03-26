type AuthoredSlide = {
  title: string;
  bullets: string[];
  notes: string[];
};

type SessionSegment = {
  time: string;
  label: string;
};

type ModuleGuide = {
  id: number;
  topic: string;
  summary: string;
  sessionBreakdown: SessionSegment[];
  slideOutline: { title: string; bullets: string[] }[];
  deliveryScript: string;
  activity: string;
  discussionPrompts: string[];
  resources: { label: string; url: string }[];
  tutorNotes: string;
  powerPoint?: string;
  videos?: { label: string; url: string }[];
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

export const AUTHORED_MODULE_GUIDES_BATCH_11_15: Record<number, ModuleGuide> = {
  11: guide({
    id: 11,
    topic: 'Mood Disorders: Major Depression',
    summary:
      'A bespoke UK-focused module on recognising major depression, separating grief and low mood from disorder, explaining severity and risk, and using evidence-based treatment routes with practical support.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and emotional safety framing',
      'What depression is and what it is not',
      'Symptoms, severity and functional impact',
      'Causes, risk factors and maintaining factors',
      'Activity: build a depression formulation',
      'Discussion on treatment, stigma and relapse',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'What Major Depression Is',
        bullets: [
          'Depression is more than feeling sad for a bad day or a rough week.',
          'Major depression affects mood, thinking, body and daily functioning together.',
          'Low mood, loss of interest and reduced energy are core features.',
          'The person is still the person; the disorder is part of their experience, not their identity.',
        ],
        notes: [
          'Open with a clear distinction between ordinary distress and a depressive episode.',
          'Keep the language person-centred and practical so the group can recognise when low mood becomes a clinical problem.',
        ],
      },
      {
        title: 'Symptoms Show Up in More Than Mood',
        bullets: [
          'Symptoms can include sleep change, appetite change, poor concentration, guilt, hopelessness and slowed movement.',
          'People may become withdrawn, indecisive or noticeably less effective in daily life.',
          'Some people show irritability rather than obvious sadness.',
          'Suicidal thoughts can occur and must always be taken seriously.',
        ],
        notes: [
          'This slide helps participants see depression as whole-body and whole-life, not only emotional.',
          'Name risk directly but calmly so suicidal thinking is not treated as a side issue.',
        ],
      },
      {
        title: 'Severity and Function Matter',
        bullets: [
          'Clinicians look at symptom number, duration and how much the person is impaired.',
          'Someone can mask depression at work and still be struggling badly.',
          'Mild, moderate and severe depression may need different levels of response.',
          'Severity is not just about how dramatic the presentation looks from outside.',
        ],
        notes: [
          'Teach severity in practical terms: functioning, risk, duration and distress.',
          'Remind participants that high effort and outward competence do not rule out significant depression.',
        ],
      },
      {
        title: 'What Can Contribute to Depression',
        bullets: [
          'Triggers may include bereavement, relationship breakdown, job loss, conflict, chronic illness or pain.',
          'Biology, stress, loneliness, trauma and substance use can all interact.',
          'Some people develop depression without a clear single trigger.',
          'Risk is shaped by both vulnerability and environment.',
        ],
        notes: [
          'Depression often emerges from multiple pressures, not one neat explanation.',
          'Link risk to context so people stop hearing depression as a weakness of character or a lack of resilience.',
        ],
      },
      {
        title: 'Assessment in UK Practice',
        bullets: [
          'GPs usually ask about symptoms, function, triggers, risk and medical causes.',
          'Blood tests or physical checks may be used to rule out other contributors.',
          'A diagnosis can help guide treatment, but formulation matters too.',
          'Repeat review is important because mood and risk can change quickly.',
        ],
        notes: [
          'Make assessment feel real and relatable. Many learners know the shape of a GP appointment but not what good depression assessment actually contains.',
          'Stress that physical health problems, medication effects and depression can overlap.',
        ],
      },
      {
        title: 'Evidence-Based Treatment and Support',
        bullets: [
          'Mild depression may improve with watchful waiting, guided self-help or lifestyle changes.',
          'Moderate to severe depression often needs talking therapy, medication or both.',
          'Social support, sleep and reduced alcohol use often matter as well.',
          'Treatment should be matched to severity and reviewed over time.',
        ],
        notes: [
          'Not every case needs medication, but serious depression should not be reduced to advice alone.',
          'The key is matching intensity of support to the level of impairment and risk.',
        ],
      },
      {
        title: 'Relapse Prevention and Recovery',
        bullets: [
          'Recovery may include better mood, better functioning or a more stable life with fewer relapses.',
          'Early warning signs, routines and support contacts help reduce relapse risk.',
          'People often need a plan for the hard days, not just the good ones.',
          'Recovery is usually uneven rather than instant.',
        ],
        notes: [
          'Close the teaching section with realism and hope. Learners should leave understanding that depression can recur, but that planning and support matter.',
          'Normalise setbacks without making relapse sound inevitable.',
        ],
      },
      {
        title: 'Depression and Stigma',
        bullets: [
          'Stigma can stop people speaking up until symptoms are severe.',
          'Shame often tells people they should just get on with it.',
          'Helpful responses are calm, specific and non-judgemental.',
          'Asking early is kinder than waiting for crisis.',
        ],
        notes: [
          'End by anchoring the module in practical compassion.',
          'The more direct and normal the language, the safer the route to support becomes.',
        ],
      },
    ],
    activity: `ACTIVITY - Depression Formulation and Response Plan (20 minutes)

Tutor steps:
1. Give groups a short vignette involving low mood, reduced sleep, withdrawal and falling performance.
2. Ask them to sort information into four headings: symptoms, contributing factors, protective factors and support needed now.
3. Ask each group to decide whether the example fits mild, moderate or severe depression and why.
4. Debrief by comparing responses and identifying any risk indicators that would change the plan.

Tutor reminder:
Keep the activity structured and low-pressure.`,
    discussionPrompts: [
      'Why do so many people try to hide depression until it becomes severe?',
      'What is the difference between kindness, encouragement and minimising somebody\'s symptoms?',
      'Which protective factor matters most in depression: sleep, routine, social support, purpose or treatment access?',
      'How should services respond to someone who can still function outwardly but is clearly struggling?',
    ],
    resources: [
      resource('NHS - Depression in adults', 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/'),
      resource('NHS - Symptoms of depression in adults', 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/symptoms/'),
      resource('NICE - Depression in adults: treatment and management', 'https://www.nice.org.uk/guidance/ng222'),
      resource('NHS - Urgent help for mental health', 'https://www.nhs.uk/mental-health/urgent-help-for-mental-health/'),
    ],
    tutorNotes: `Facilitation:
This session can surface current low mood in the room. Stay steady, avoid pushing disclosure and keep the route to support visible.

Safeguarding:
If there is current suicidal thinking, severe hopelessness or inability to stay safe, stop the educational flow and follow urgent support procedures.`,
    powerPoint: `Tutor deck notes:
- Use simple mood and function diagrams rather than heavy text blocks.
- Student slides should focus on recognition, support and relapse prevention.
- Tutor notes should hold the nuance around risk, severity and treatment matching.`,
  }),
  12: guide({
    id: 12,
    topic: 'Mood Disorders: Bipolar Disorder',
    summary:
      'A bespoke bipolar module explaining manic, hypomanic and depressive episodes, common misinterpretations, treatment principles, relapse prevention and the practical realities of living with bipolar disorder.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and safety framing',
      'What bipolar disorder is and is not',
      'Mania, hypomania and depression',
      'Assessment, diagnosis and differential diagnosis',
      'Activity: compare mood states and warning signs',
      'Discussion on treatment, risk and identity',
      'Wrap-up, crisis routes and next steps',
    ]),
    slides: [
      {
        title: 'Bipolar Disorder Is a Pattern of Episodes',
        bullets: [
          'Bipolar disorder involves episodes of depression and elevated mood states such as mania or hypomania.',
          'The condition is about mood regulation, energy, sleep, thinking and behaviour changing over time.',
          'It is not the same as normal mood swings.',
          'The pattern matters more than any single symptom in isolation.',
        ],
        notes: [
          'Separate everyday mood variation from a bipolar pattern.',
          'Keep the explanation episode-based so it is easier to understand what clinicians look for.',
        ],
      },
      {
        title: 'Mania and Hypomania Look Different',
        bullets: [
          'Mania may involve little sleep, racing thoughts, inflated confidence, risky behaviour and loss of judgement.',
          'Hypomania can look like increased energy, productivity or sociability but still marks a change from baseline.',
          'What feels good in the short term may become dangerous or disruptive quickly.',
          'The person may not see the change themselves at first.',
        ],
        notes: [
          'Teach the difference between excitement and illness carefully.',
          'The central point is loss of balance: sleep, judgement and continuity of functioning all begin to shift.',
        ],
      },
      {
        title: 'Depressive Episodes Can Be Severe',
        bullets: [
          'Bipolar depression may look like depression in other conditions but can be harder to treat and more risky.',
          'Low mood, slowed thinking, hopelessness and suicidal thoughts can all occur.',
          'Episodes can alternate with periods of apparent high energy.',
          'Risk often rises when sleep is disrupted or treatment is inconsistent.',
        ],
        notes: [
          'The depressive phase can be the most disabling and risky part of the illness.',
          'Sudden or repeated changes in sleep and functioning matter a great deal.',
        ],
      },
      {
        title: 'Assessment and Differential Diagnosis',
        bullets: [
          'Assessment looks for episode history, family history, sleep change, psychosis and substance use.',
          'Bipolar disorder can be mistaken for depression, ADHD, personality difficulty or substance effects.',
          'A careful timeline is often more useful than one snapshot.',
          'Shared history from family or carers can help if the person agrees.',
        ],
        notes: [
          'Explain why diagnosis can take time.',
          'Many people present during depression and do not describe hypomania unless asked specifically.',
        ],
      },
      {
        title: 'Treatment and Monitoring',
        bullets: [
          'Mood stabilising medication and specialist review are often central parts of care.',
          'Sleep routines, reducing triggers and regular follow-up can help prevent relapse.',
          'Antidepressant treatment needs careful management in bipolar disorder.',
          'People should understand early warning signs and what to do if they appear.',
        ],
        notes: [
          'Bipolar disorder usually needs structured psychiatric care, but non-medication support still matters.',
          'Treatment plans are often personalised and reviewed repeatedly.',
        ],
      },
      {
        title: 'Living With Bipolar Disorder',
        bullets: [
          'People may need support with work, relationships, stigma, sleep and routine.',
          'Relapse prevention plans should include warning signs, contacts and safe steps.',
          'Recovery can include stability, insight and meaningful life roles, not just symptom suppression.',
          'Identity may shift after diagnosis, especially after repeated episode-related disruption.',
        ],
        notes: [
          'Move beyond the clinical frame into lived experience.',
          'Keep the tone hopeful without being simplistic.',
        ],
      },
      {
        title: 'Risk, Crisis and Safety',
        bullets: [
          'Risk can rise with insomnia, psychosis, impulsivity, substance use or depression.',
          'If someone is unable to stay safe, immediate support is needed.',
          'Family and carers may need guidance on what changes to watch for.',
          'Crisis plans should be clear and agreed in advance where possible.',
        ],
        notes: [
          'Bipolar disorder can become urgent quickly when sleep and judgement collapse.',
          'Good crisis planning reduces panic and delays in response.',
        ],
      },
      {
        title: 'Respect the Person, Not the Stereotype',
        bullets: [
          'Bipolar disorder is often caricatured in media and conversation.',
          'People are more than their worst episode.',
          'Language that is precise, respectful and non-sensational is essential.',
          'Hope is strongest when it is backed by real support and follow-up.',
        ],
        notes: [
          'Push back on stereotype. Many people with bipolar disorder live well when support is appropriate and stable.',
          'Keep dignity visible alongside the seriousness of the condition.',
        ],
      },
    ],
    activity: `ACTIVITY - Mood State Comparison (20 minutes)

Tutor steps:
1. Give groups three short descriptions: depression, hypomania and mania.
2. Ask them to compare sleep, mood, energy, judgement, risk and insight across the three states.
3. Ask them to identify one early warning sign for each and one safe response.
4. Debrief by discussing why bipolar disorder is often missed during depression-only presentation.

Tutor reminder:
Keep the comparison concrete. The purpose is recognition, not a diagnostic quiz.`,
    discussionPrompts: [
      'Why is bipolar disorder so often first seen as depression?',
      'What does a good relapse prevention plan need to include?',
      'How should families and friends respond when mood or sleep begins to change quickly?',
      'What helps reduce stigma without underplaying the seriousness of the condition?',
    ],
    resources: [
      resource('NHS - Bipolar disorder', 'https://www.nhs.uk/mental-health/conditions/bipolar-disorder/'),
      resource('NICE - Bipolar disorder: assessment and management', 'https://www.nice.org.uk/guidance/cg185'),
      resource('NHS - Annual health check for people with severe mental health conditions', 'https://www.nhs.uk/mental-health/social-care-and-your-rights/annual-health-check-smi/'),
      resource('Bipolar UK', 'https://www.bipolaruk.org'),
    ],
    tutorNotes: `Facilitation:
This module can be personal for participants who have lived with major mood swings or been around someone with bipolar disorder. Keep the tone calm and grounded.

Safeguarding:
Escalate immediately if the discussion reveals active mania with risk, psychosis, severe depression or unsafe behaviour.`,
    powerPoint: `Tutor deck notes:
- Use side-by-side visuals for depression, hypomania and mania.
- Student slides should teach patterns, warning signs and support routes.
- Tutor notes should hold the complexity around diagnosis, monitoring and crisis response.`,
  }),
  13: guide({
    id: 13,
    topic: 'Mood Disorders: Seasonal and Persistent Depressive Disorders',
    summary:
      'A bespoke module on seasonal affective disorder and persistent depressive disorder, including circadian rhythms, chronic low mood, treatment options and how long-term depression can hide in plain sight.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and framing chronic and seasonal depression',
      'Seasonal patterns and circadian rhythm',
      'Persistent low mood and long-term impairment',
      'Assessment, treatment and self-management',
      'Activity: map seasonal and persistent triggers',
      'Discussion on light, routine and hope',
      'Wrap-up, resources and next steps',
    ]),
    slides: [
      {
        title: 'Two Common But Different Patterns',
        bullets: [
          'Seasonal affective disorder usually follows a seasonal pattern, often in winter.',
          'Persistent depressive disorder involves a long-lasting depressed mood that may feel normal to the person because it has gone on for so long.',
          'Both can be missed because the person looks like they are "just how they have always been".',
          'Duration and pattern are critical clues.',
        ],
        notes: [
          'Open by distinguishing seasonal from persistent depression.',
          'This helps learners understand that chronic distress can become invisible through familiarity.',
        ],
      },
      {
        title: 'Seasonal Affective Disorder and Circadian Rhythm',
        bullets: [
          'SAD often involves low mood, fatigue, oversleeping and reduced motivation during darker months.',
          'Light exposure and body clock changes can play a role.',
          'Symptoms may improve when seasons change, then return the following year.',
          'A recurring pattern over several years is a key clue.',
        ],
        notes: [
          'Connect mood with daylight, sleep and routine.',
          'People can still need formal treatment even when the pattern is seasonal.',
        ],
      },
      {
        title: 'Persistent Depressive Disorder Can Look Like Personality',
        bullets: [
          'Persistent low mood may stretch across years and feel like the person\'s normal state.',
          'People may be described as gloomy, flat or unmotivated when they are actually chronically depressed.',
          'Hopelessness and low self-worth can become deeply embedded.',
          'The person may not remember feeling differently.',
        ],
        notes: [
          'Persistent depression is frequently misread as personality, attitude or laziness.',
          'The key message is that chronic suffering can be so familiar that neither the person nor those around them recognise the disorder.',
        ],
      },
      {
        title: 'What to Ask in Assessment',
        bullets: [
          'Ask when symptoms began, whether they recur seasonally and how long they have lasted.',
          'Ask about sleep, energy, motivation, concentration, appetite and functioning.',
          'Ask whether the mood problem is different from the person\'s usual baseline.',
          'Consider physical health, pain and substance use as part of the picture.',
        ],
        notes: [
          'Pattern, duration and baseline comparison are the most important ideas to carry forward.',
        ],
      },
      {
        title: 'Treatment and Support Can Be Combined',
        bullets: [
          'Talking therapy, medication, lifestyle changes and structured routine can all help.',
          'For seasonal depression, light exposure and routine may be part of the plan.',
          'For chronic depression, longer-term psychological support may be needed.',
          'Treatment should be reviewed because needs can change over time.',
        ],
        notes: [
          'Do not oversell any one intervention, especially for long-term depression.',
          'The idea of combined support is the safest message for learners.',
        ],
      },
      {
        title: 'Long-Term Depression Can Be Exhausting',
        bullets: [
          'Persistent depression can affect work, relationships, identity and self-confidence over years.',
          'People may stop expecting improvement and reduce help-seeking.',
          'Shame can build when the low mood is misread as a fixed personality trait.',
          'Hope often returns when the pattern is named accurately.',
        ],
        notes: [
          'Bring the emotional weight of chronic depression into view.',
          'Naming the pattern can be validating because it reduces self-blame and opens a path to treatment.',
        ],
      },
      {
        title: 'Seasonal Planning and Relapse Prevention',
        bullets: [
          'People with SAD often benefit from planning before the darker months arrive.',
          'Sleep, daylight, movement and social contact are especially important.',
          'A seasonal warning-sign plan can prevent each winter from becoming a crisis.',
          'Good review starts before symptoms are severe.',
        ],
        notes: [
          'Planning in advance can make a real difference for recurrent seasonal depression.',
          'It encourages participants to think ahead rather than waiting for the pattern to repeat.',
        ],
      },
      {
        title: 'Recovery Means More Than "Cheering Up"',
        bullets: [
          'Recovery may be gradual and may require repeated adjustment of support.',
          'The aim is better functioning, better mood and more confidence in help-seeking.',
          'People should not be blamed for not recovering quickly from chronic distress.',
          'Support can be long-term and still be effective.',
        ],
        notes: [
          'Close with a realistic recovery message.',
          'The point is not to minimise duration, but to show that change is possible.',
        ],
      },
    ],
    activity: `ACTIVITY - Pattern Mapping (20 minutes)

Tutor steps:
1. Ask participants to map a fictional person's low mood across a calendar year and across several years.
2. Have them identify seasonal cues, persistent cues, and the point where low mood becomes clinically important.
3. Ask groups to propose one treatment idea and one self-management idea for each pattern.
4. Debrief by comparing what changes for seasonal versus chronic depression.

Tutor reminder:
Keep the activity practical and avoid turning it into a personal disclosure exercise.`,
    discussionPrompts: [
      'Why are chronic low mood and seasonal depression so easy to miss?',
      'What is the difference between a bad winter and seasonal affective disorder?',
      'How can people plan ahead for repeated depressive patterns?',
      'What support is most useful when depression has lasted for years?',
    ],
    resources: [
      resource('NHS - Seasonal affective disorder (SAD)', 'https://www.nhs.uk/mental-health/conditions/seasonal-affective-disorder-sad/diagnosis/'),
      resource('NICE - Depression in adults: treatment and management', 'https://www.nice.org.uk/guidance/ng222'),
      resource('NHS - Depression in adults', 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/'),
      resource('NHS - Urgent help for mental health', 'https://www.nhs.uk/mental-health/urgent-help-for-mental-health/'),
    ],
    tutorNotes: `Facilitation:
Keep the focus on pattern recognition and practical support. People with long-term depression can feel dismissed if the session sounds too optimistic or too simplistic.

Safeguarding:
If a participant mentions hopelessness, suicidal thoughts or inability to cope, move into support and follow the organisation's procedure.`,
    powerPoint: `Tutor deck notes:
- Use a clean seasonal calendar and a long-term mood line diagram.
- Student slides should make the pattern differences obvious.
- Tutor notes should support the nuance around chronicity, recurrence and review.`,
  }),
  14: guide({
    id: 14,
    topic: 'Anxiety Disorders: Generalised Anxiety Disorder',
    summary:
      'A bespoke module on generalised anxiety disorder, worry loops, physical symptoms, chronic hyperarousal, assessment and evidence-based treatment in UK practice.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and framing anxiety',
      'What GAD is and how it feels',
      'Body symptoms, worry loops and avoidance',
      'Assessment, treatment and self-help',
      'Activity: map a worry cycle',
      'Discussion on reassurance, safety and support',
      'Wrap-up, resources and next steps',
    ]),
    slides: [
      {
        title: 'Generalised Anxiety Is Persistent and Widespread',
        bullets: [
          'GAD is about excessive worry across many areas of life, not one single fear.',
          'Worry feels hard to control and can run for months.',
          'The problem is not caring too much; it is being stuck in constant threat scanning.',
          'Anxiety can be exhausting even when nothing obvious is happening.',
        ],
        notes: [
          'Clarify that GAD is not the same as normal concern or a temporary stressful period.',
          'Separate GAD from the more focused fear patterns used in phobias and panic disorder.',
        ],
      },
      {
        title: 'Anxiety Shows Up in Mind and Body',
        bullets: [
          'Symptoms may include restlessness, tension, fatigue, irritability, palpitations, stomach problems and poor sleep.',
          'Concentration often worsens because attention keeps returning to threat.',
          'People may seek reassurance repeatedly and still not feel settled.',
          'The body can feel "always on".',
        ],
        notes: [
          'Many people think anxiety is purely mental until they see how physical it can be.',
          'The repeated reassurance cycle is worth naming because it helps people understand why short-term relief may not last.',
        ],
      },
      {
        title: 'Worry Loops Keep Anxiety Going',
        bullets: [
          'A trigger starts a prediction of danger.',
          'The person seeks certainty, reassurance or avoidance to reduce distress.',
          'Short-term relief reinforces the worry cycle.',
          'Over time the person trusts worry more and more.',
        ],
        notes: [
          'If learners understand the loop, they can understand why anxiety persists and why reassurance alone is often not enough.',
          'Use a simple cycle diagram in the deck if possible.',
        ],
      },
      {
        title: 'Assessment in Primary Care',
        bullets: [
          'Assessment asks about duration, control, physical symptoms, function and comorbidity.',
          'GAD often overlaps with depression, trauma, sleep problems or substance use.',
          'A careful history is more useful than a single scary moment.',
          'Clinical questions should be open, calm and specific.',
        ],
        notes: [
          'This gives the group a practical picture of what good assessment looks like.',
          'Anxiety can be both common and still significant enough to need treatment.',
        ],
      },
      {
        title: 'Evidence-Based Treatment',
        bullets: [
          'NHS talking therapies, especially CBT-based approaches, are core treatments.',
          'Medication may help when indicated and agreed with the person.',
          'Self-help, behavioural changes, routine and sleep support are often useful additions.',
          'Treatment should be matched to severity and reviewed.',
        ],
        notes: [
          'Talking therapy is not the only route, but it is a major evidence-based option.',
          'Avoid suggesting people should simply think differently without support.',
        ],
      },
      {
        title: 'Reassurance and Avoidance Can Become Traps',
        bullets: [
          'Repeated checking or reassurance may feel necessary but can keep the cycle alive.',
          'Avoidance reduces anxiety briefly but often makes fear broader.',
          'People may start organising life around not feeling anxious.',
          'The goal is not zero anxiety but better tolerance and function.',
        ],
        notes: [
          'This slide helps participants understand why anxiety often spreads instead of shrinking.',
          'It prepares the ground for later work on phobias and panic.',
        ],
      },
      {
        title: 'Practical Self-Management Supports',
        bullets: [
          'Breathing, grounding, routines and graded exposure may help when used sensibly.',
          'Reducing caffeine, alcohol and sleep disruption can improve symptoms.',
          'Noticing patterns in worry can help people plan responses earlier.',
          'Support should be realistic, not perfectionistic.',
        ],
        notes: [
          'Teach self-management as supportive rather than as a substitute for treatment in every case.',
          'The point is to reduce spirals and create more room for choice.',
        ],
      },
      {
        title: 'Living Well With Anxiety',
        bullets: [
          'Many people learn to live well with anxiety when support matches the problem.',
          'Recovery may mean less distress, fewer avoidance habits and more confidence.',
          'Progress is often gradual.',
          'Hope works best when it is specific and practical.',
        ],
        notes: [
          'Anxiety may not disappear overnight, but it can become much more manageable.',
          'Remind participants that everyday life can improve with the right treatment mix.',
        ],
      },
    ],
    activity: `ACTIVITY - Worry Cycle Mapping (20 minutes)

Tutor steps:
1. Ask participants to map a fictional person's worry cycle from trigger to thought to feeling to behaviour.
2. Have groups identify one place where the cycle could be interrupted.
3. Ask them to choose one treatment support and one self-management support for the example.
4. Debrief by comparing where reassurance helps and where it reinforces the problem.

Tutor reminder:
Keep the exercise grounded in daily life, not theory alone.`,
    discussionPrompts: [
      'Why does anxiety often keep growing even when nothing bad seems to happen?',
      'What is the difference between reassurance and dependency on reassurance?',
      'Which practical support has the biggest effect on anxiety: sleep, movement, CBT, medication or routine?',
      'How can we help without accidentally feeding the worry loop?',
    ],
    resources: [
      resource('NHS - Generalised anxiety disorder (GAD)', 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/diagnosis/'),
      resource('NICE - Generalised anxiety disorder and panic disorder in adults: management', 'https://www.nice.org.uk/guidance/cg113'),
      resource('NHS England - NHS Talking Therapies', 'https://www.england.nhs.uk/mental-health/adults/nhs-talking-therapies/'),
      resource('NHS - Urgent help for mental health', 'https://www.nhs.uk/mental-health/urgent-help-for-mental-health/'),
    ],
    tutorNotes: `Facilitation:
This module can feel familiar because many people experience significant anxiety without a formal diagnosis. Keep the tone affirming but not overbroad.

Safeguarding:
If anxiety is linked to panic, risk, trauma or inability to function safely, pause and signpost accordingly.`,
    powerPoint: `Tutor deck notes:
- Use a simple worry-cycle diagram and body-symptom visual.
- Student slides should stay concrete and non-clinical where possible.
- Tutor notes should carry the nuance around comorbidity, self-reassurance and CBT style support.`,
  }),
  15: guide({
    id: 15,
    topic: 'Anxiety Disorders: Phobias and Panic Disorder',
    summary:
      'A bespoke module on phobias, panic attacks and panic disorder, how avoidance maintains fear, how panic differs from general anxiety, and how exposure-based treatment works safely.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and framing fear disorders',
      'Phobias, panic attacks and panic disorder',
      'Avoidance, anticipatory anxiety and agoraphobia',
      'Assessment, treatment and safe exposure',
      'Activity: design a graded exposure ladder',
      'Discussion on fear, safety and control',
      'Wrap-up, resources and next steps',
    ]),
    slides: [
      {
        title: 'Phobias Are Intense and Specific',
        bullets: [
          'A phobia is an overwhelming fear of a specific object, situation, place, feeling or animal.',
          'The fear is more intense than the actual danger warrants.',
          'People often reorganise life around avoidance.',
          'The more a phobia shapes behaviour, the more limiting it becomes.',
        ],
        notes: [
          'Start with specificity. A phobia is not just general nervousness; it is a focused fear that can dominate choices.',
          'Use examples people recognise, but keep the teaching grounded in function and distress.',
        ],
      },
      {
        title: 'Panic Attacks and Panic Disorder',
        bullets: [
          'A panic attack is a sudden surge of intense fear with strong physical symptoms.',
          'Panic disorder involves recurring attacks and fear of having more attacks.',
          'Chest tightness, dizziness, shortness of breath and shaking are common and frightening.',
          'The fear of the panic itself can become part of the problem.',
        ],
        notes: [
          'Separate the attack from the disorder.',
          'Keep the physical symptoms clear because many people first seek medical help thinking they have a physical emergency.',
        ],
      },
      {
        title: 'Avoidance and Anticipatory Anxiety',
        bullets: [
          'Avoidance gives short-term relief but protects the phobia from being challenged.',
          'Anticipatory anxiety can begin long before the person faces the feared object or situation.',
          'Agoraphobia can develop when escape feels difficult or impossible.',
          'Lives can become smaller around fear.',
        ],
        notes: [
          'Avoidance feels sensible in the moment but makes the problem more entrenched.',
          'The phrase "lives can become smaller" helps the human impact land without melodrama.',
        ],
      },
      {
        title: 'Assessment and Differential Diagnosis',
        bullets: [
          'Assessment asks what is feared, what is avoided and how often it affects life.',
          'Panic can overlap with GAD, depression, trauma or physical health conditions.',
          'Good assessment checks for context, onset and triggers.',
          'Not every panic attack means panic disorder.',
        ],
        notes: [
          'Teach the difference between an isolated panic attack and a diagnosed panic disorder.',
          'Panic-like symptoms can come from physical conditions, so sensible assessment matters.',
        ],
      },
      {
        title: 'Treatment Often Uses Gradual Exposure',
        bullets: [
          'Phobias are often treated successfully with gradual exposure or CBT-based approaches.',
          'The pace should be planned and safe, not forced.',
          'Panic disorder treatment can include talking therapy and medicine.',
          'People should understand the logic of treatment so it feels collaborative.',
        ],
        notes: [
          'Explain exposure carefully so it does not sound like the tutor is promoting distress for its own sake.',
          'Controlled, repeated contact can reduce fear over time when the person is supported.',
        ],
      },
      {
        title: 'What Makes Exposure Safe and Useful',
        bullets: [
          'Exposure works best when it is graded, planned and reviewed.',
          'People need choice, predictability and enough support.',
          'The goal is to reduce avoidance, not to overwhelm the person.',
          'Small wins matter.',
        ],
        notes: [
          'Treatment is structured, not random.',
          'Rushed confrontation is not good therapy.',
        ],
      },
      {
        title: 'Living With Panic or Phobia',
        bullets: [
          'Shame and embarrassment often make people hide symptoms.',
          'Fear can spread into work, travel, school and relationships.',
          'Supportive explanation reduces fear of the fear.',
          'Recovery often involves practice, patience and repetition.',
        ],
        notes: [
          'Fear disorders often seem small to outsiders but can dominate a person\'s life completely.',
          'This is common, treatable and serious enough to deserve proper care.',
        ],
      },
      {
        title: 'When Urgent Help Is Needed',
        bullets: [
          'If panic or fear is linked to self-harm, severe avoidance, collapse or inability to stay safe, escalate.',
          'If the person has chest pain or a possible physical emergency, emergency medical assessment is appropriate.',
          'Urgent help routes should be clear before a crisis starts.',
          'You do not need to wait for perfect certainty to act.',
        ],
        notes: [
          'Panic can feel medical and terrifying, and it should be assessed sensibly when needed.',
          'Keep the module clinically grounded and safe.',
        ],
      },
    ],
    activity: `ACTIVITY - Graded Exposure Ladder (20 minutes)

Tutor steps:
1. Give groups a fictional phobia, such as fear of lifts, spiders or public speaking.
2. Ask them to design a five-step exposure ladder from easiest to hardest.
3. For each step, ask them to identify what support, check-in or safety measure would make it workable.
4. Debrief by comparing ladders and discussing how avoidance keeps fear alive.

Tutor reminder:
Keep the exercise concrete and non-shaming.`,
    discussionPrompts: [
      'Why does avoidance feel so useful even when it makes the fear worse later?',
      'How is panic disorder different from having an occasional panic attack?',
      'What makes exposure safe rather than overwhelming?',
      'How can supporters avoid reinforcing phobia cycles while still being kind?',
    ],
    resources: [
      resource('NHS - Phobias', 'https://www.nhs.uk/mental-health/conditions/phobias/overview/'),
      resource('NHS - Panic disorder', 'https://www.nhs.uk/mental-health/conditions/panic-disorder/'),
      resource('NICE - Generalised anxiety disorder and panic disorder in adults: management', 'https://www.nice.org.uk/guidance/cg113'),
      resource('NHS - Talking therapies', 'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service'),
    ],
    tutorNotes: `Facilitation:
Fear disorders can be very personal and very common. Keep the tone serious, practical and non-dismissive.

Safeguarding:
If panic symptoms could be a physical emergency or the discussion reveals severe risk, move to urgent support pathways immediately.`,
    powerPoint: `Tutor deck notes:
- Use a clear ladder graphic for exposure and a simple panic-cycle diagram.
- Student slides should teach recognition, avoidance and treatment without clutter.
- Tutor notes should hold the pace and safety requirements around exposure.`,
  }),
};
