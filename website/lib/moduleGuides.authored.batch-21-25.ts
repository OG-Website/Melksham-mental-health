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

export const AUTHORED_MODULE_GUIDES_BATCH_21_25: Record<number, ModuleGuide> = {
  21: guide({
    id: 21,
    topic: 'Substance Use and Addiction',
    summary:
      'A UK-focused module on alcohol and drug use, dependence, harm reduction, dual diagnosis, withdrawal risk, relapse and recovery pathways that avoids moralising or simplistic abstinence-only teaching.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome, boundaries and non-judgemental framing',
      'Use, misuse, dependence and addiction',
      'Why people use substances and what keeps use going',
      'Health, mental health and withdrawal risks',
      'Activity: map a harm-reduction response',
      'Discussion on stigma, relapse and recovery',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Substance Use Exists on a Spectrum',
        bullets: [
          'Not all use is harmful and not all harm looks dramatic.',
          'Alcohol, prescribed medication and illicit drugs can all become part of the same support conversation.',
          'The key questions are function, control, harm and risk.',
          'People deserve accurate information rather than shame-based messaging.',
        ],
        notes: [
          'Open by removing the binary "user versus non-user" framing. In practice, the work is about recognising risk, harm and dependence early enough to respond well.',
          'Be explicit that the session is not about approving or condemning use. It is about understanding what a person is getting from the substance and what it is costing them.',
        ],
      },
      {
        title: 'Dependence and Addiction Are Different From Moral Failure',
        bullets: [
          'Dependence includes tolerance, craving and withdrawal.',
          'Addiction is often maintained by both brain-based reinforcement and life stress.',
          'Loss of control is part of the condition, not proof of weak character.',
          'Shame often delays help-seeking and increases risk.',
        ],
        notes: [
          'Teach the biology carefully, but do not reduce the person to a brain explanation alone. Social context, trauma and stress all matter too.',
          'People commonly know the risks already. The issue is often not ignorance but the ability to cope without the substance at that moment.',
        ],
      },
      {
        title: 'Why People Use Substances',
        bullets: [
          'People may use substances to reduce pain, improve sleep, feel social, manage trauma or escape distress.',
          'Some use becomes self-medication; some becomes part of culture or routine.',
          'Losses, loneliness and untreated mental health problems can drive escalation.',
          'A useful assessment asks what function the substance is serving.',
        ],
        notes: [
          'This slide keeps the room from falling into blame. If the function is understood, support can be targeted much more effectively.',
          'It also helps explain why recovery often needs more than stopping the substance. The underlying need still has to be met another way.',
        ],
      },
      {
        title: 'Health, Safety and Withdrawal',
        bullets: [
          'Alcohol and drug use can affect sleep, mood, physical health, memory, relationships and safety.',
          'Withdrawal can be uncomfortable, dangerous or life-threatening depending on the substance and level of dependence.',
          'Not all withdrawal can be managed safely at home.',
          'Urgent medical review may be needed, especially for alcohol, benzodiazepines or polysubstance use.',
        ],
        notes: [
          'This is the safety anchor for the module. Learners need to understand that abrupt change can be medically risky and should not always be treated as a motivational challenge.',
          'Where local services have detox or community withdrawal support, this is a useful place to signpost them.',
        ],
      },
      {
        title: 'Dual Diagnosis Is the Norm, Not the Exception',
        bullets: [
          'Substance use commonly overlaps with depression, anxiety, trauma, psychosis and personality difficulties.',
          'Treating only the substance or only the mental health problem is often incomplete.',
          'People may need coordinated, integrated support.',
          'Assessment should include mental health, physical health and social needs together.',
        ],
        notes: [
          'Name dual diagnosis clearly because many participants will have seen services work in silos.',
          'The teaching point is integration: the person is not separate problems stacked on top of each other.',
        ],
      },
      {
        title: 'Harm Reduction Is Evidence-Based Care',
        bullets: [
          'Harm reduction can include safer-use advice, naloxone, needle exchange, medication review and planned reduction.',
          'It is not the same as giving up on recovery.',
          'Some people need non-judgemental steps before they can work toward abstinence.',
          'The immediate aim is to reduce death, disease and instability.',
        ],
        notes: [
          'Be clear that harm reduction and recovery are not opposites. For many people, harm reduction is the route by which recovery becomes possible.',
          'Avoid all-or-nothing language. It usually blocks engagement.',
        ],
      },
      {
        title: 'Treatment and Recovery Routes in the UK',
        bullets: [
          'GPs, local drug and alcohol services, NHS support, counselling and peer support may all be part of care.',
          'Alcohol dependence and drug dependence often need a planned treatment approach.',
          'Relapse can be part of recovery and should trigger review, not shame.',
          'Practical support around housing, money and relationships often matters as much as clinical input.',
        ],
        notes: [
          'Make the route map concrete. People need to know where help starts, what happens next and when a medical detox or specialist referral is needed.',
          'Recovery plans should combine clinical care with everyday stability, not treat them as separate tracks.',
        ],
      },
      {
        title: 'Supporting Someone Without Collusion or Punishment',
        bullets: [
          'Stay calm, name the concern, ask what support would help and set clear boundaries.',
          'Do not lecture, threaten or shame.',
          'Plan around triggers, high-risk times and practical barriers.',
          'If there is immediate overdose or withdrawal risk, seek urgent medical help.',
        ],
        notes: [
          'The helper role is steady, honest and non-panicked. That keeps the relationship safer and usually more effective.',
          'Close by reminding the group that behaviour change usually happens in the context of trust, not humiliation.',
        ],
      },
    ],
    activity: `ACTIVITY - Harm-Reduction Plan Mapping (20 minutes)

Tutor steps:
1. Give groups a fictional case involving alcohol or drug use plus anxiety, poor sleep and missed work.
2. Ask them to identify what the person is using the substance for, what the immediate risks are and what the next safest step could be.
3. Ask each group to produce one harm-reduction step, one clinical step and one social-support step.
4. Debrief by comparing how different routes reduce harm without demanding perfection first.`,
    discussionPrompts: [
      'Why does shame so often make substance use worse rather than better?',
      'What is the difference between enabling and supporting someone safely?',
      'Which matters more in practice: abstinence, harm reduction or both together?',
      'How should services respond when a person has both substance use and mental health needs?',
    ],
    resources: [
      resource('NHS - Alcohol misuse', 'https://www.nhs.uk/conditions/alcohol-misuse/'),
      resource('NHS - Drug addiction: getting help', 'https://www.nhs.uk/live-well/drugs/Pages/Drugtreatment.aspx'),
      resource('NHS - Find alcohol addiction support services', 'https://www.nhs.uk/nhs-services/find-alcohol-addiction-support-services/'),
      resource('NICE - Alcohol-use disorders: diagnosis, assessment and management', 'https://www.nice.org.uk/guidance/cg115'),
      resource('NICE - Drug misuse: psychosocial interventions', 'https://www.nice.org.uk/guidance/cg51'),
    ],
    tutorNotes: `Facilitation:
Many participants will have direct or indirect experience of alcohol or drug use. Keep the tone non-judgemental and avoid moral narratives.

Safeguarding:
If there is overdose risk, dangerous withdrawal or severe intoxication, move to urgent medical response rather than continuing the teaching session.

Delivery caution:
Do not let the session become a debate about legal status. Keep it on health, function, harm and support.`,
    powerPoint: `Tutor deck notes:
- Use a clear spectrum diagram for use, harm, dependence and addiction.
- Keep the student version practical and stigma-free.
- Tutor notes should hold the difference between harm reduction, planned reduction and abstinence-based treatment.`,
  }),
  22: guide({
    id: 22,
    topic: 'Psychotic Disorders: Schizophrenia and Related Conditions',
    summary:
      'A bespoke module on psychosis, schizophrenia and related presentations with emphasis on early recognition, differential diagnosis, treatment routes, relapse prevention and compassionate response.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and psychologically safe framing',
      'What psychosis is and is not',
      'Delusions, hallucinations and disorganised thinking',
      'Causes, differentials and first episode support',
      'Activity: supportive response and route mapping',
      'Discussion on stigma, recovery and risk',
      'Wrap-up, annual health checks and next steps',
    ]),
    slides: [
      {
        title: 'Psychosis Is a Loss of Shared Reality Testing',
        bullets: [
          'Psychosis can involve hallucinations, delusions, disturbed thinking and changes in behaviour.',
          'It is a symptom pattern, not a complete explanation by itself.',
          'Psychosis can occur in schizophrenia, mood disorders, substance-related states or physical illness.',
          'Early help improves outcomes.',
        ],
        notes: [
          'Begin by separating psychosis from the broader diagnosis of schizophrenia. That distinction helps learners understand the range of possible causes and responses.',
          'Keep the tone calm. People experiencing psychosis need clarity and safety, not sensationalism.',
        ],
      },
      {
        title: 'How Psychosis Can Look in Real Life',
        bullets: [
          'A person may hear or see things others do not, become convinced of unusual beliefs or struggle to organise speech.',
          'Some people also show social withdrawal, flattened emotion or reduced motivation.',
          'The experience can feel completely real to the person.',
          'Fear and confusion are common.',
        ],
        notes: [
          'Explain the internal experience rather than just the outward behaviour. That makes compassionate support easier to understand.',
          'Include negative symptoms because they are often missed and can be mistaken for laziness or depression.',
        ],
      },
      {
        title: 'Causes and Differential Diagnosis',
        bullets: [
          'Psychosis can be linked to schizophrenia, bipolar disorder, severe depression, trauma, substance use or physical causes.',
          'Sleep deprivation and drugs can worsen or trigger symptoms.',
          'Assessment should include physical health checks and substance history.',
          'A first episode is not automatically schizophrenia.',
        ],
        notes: [
          'This slide is about disciplined thinking. Do not assume a label before assessment has ruled out other causes.',
          'The NHS and NICE both emphasise early assessment because delay can make recovery harder.',
        ],
      },
      {
        title: 'Schizophrenia Is Treatable',
        bullets: [
          'Schizophrenia usually needs an individually tailored combination of medication, therapy and support.',
          'Treatment often includes family work, relapse planning and functional recovery.',
          'Many people improve substantially and some recover fully.',
          'Stigma and poor physical health support worsen outcomes.',
        ],
        notes: [
          'Do not frame schizophrenia as a hopeless or uniformly deteriorating condition. That is inaccurate and harmful.',
          'The message should be realism plus recovery: serious, but treatable and often manageable.',
        ],
      },
      {
        title: 'Early Intervention Matters',
        bullets: [
          'First episode psychosis should be assessed promptly.',
          'Early intervention teams aim to reduce relapse, promote recovery and support education, work and relationships.',
          'Delayed support can increase distress, risk and disruption.',
          'Practical help is as important as symptoms management.',
        ],
        notes: [
          'This is where the module becomes operational. Learners need to know that early intervention is not merely a slogan but a service route with real value.',
          'Emphasise that sleep, drugs, stress and isolation often need attention alongside medication.',
        ],
      },
      {
        title: 'Responding to a Person Who May Be Psychotic',
        bullets: [
          'Stay calm, avoid arguing about beliefs, and focus on immediate safety and distress.',
          'Use short, clear sentences and reduce stimulation where possible.',
          'If there is immediate danger, self-harm risk or inability to care for self, escalate urgently.',
          'Do not leave the person alone if safety is compromised.',
        ],
        notes: [
          'Teach the helper role in a practical way. The aim is not to prove delusions wrong, but to reduce distress and keep the person safe.',
          'People often respond better to simple, respectful, non-confrontational communication.',
        ],
      },
      {
        title: 'Recovery, Relapse Prevention and Physical Health',
        bullets: [
          'Relapse plans should include sleep, stress, substance use, medication adherence and early warning signs.',
          'Annual health checks are important for people with schizophrenia, bipolar disorder or psychosis.',
          'Physical health monitoring matters because side effects and cardiometabolic risk are common.',
          'Recovery includes meaning, work, housing and community connection.',
        ],
        notes: [
          'This slide brings together care and dignity. Good psychosis care is not only about symptom suppression; it is about helping a person live a life again.',
          'Annual health checks are an important UK point because physical health inequality is a real issue in this group.',
        ],
      },
      {
        title: 'Stigma, Hope and Good Support',
        bullets: [
          'Stigma often assumes violence, hopelessness or permanent incapacity.',
          'Those assumptions are wrong and damaging.',
          'Many people live meaningful lives with psychosis histories.',
          'Hope improves when support is steady, skilled and respectful.',
        ],
        notes: [
          'Close by rejecting the common myths directly. People with psychosis are far more likely to be isolated and neglected than violent.',
          'That keeps the tone accurate and humane.',
        ],
      },
    ],
    activity: `ACTIVITY - Supportive Response and Pathway Map (20 minutes)

Tutor steps:
1. Give a short case vignette involving voices, sleeplessness, fear and increasing social withdrawal.
2. Ask groups to map what would be said in the first conversation, what needs urgent review and which route would be most appropriate next.
3. Ask them to separate what is supportive from what is unhelpful confrontation.
4. Debrief by identifying which services can help first episode psychosis in the local area.`,
    discussionPrompts: [
      'Why is psychosis often misunderstood as permanent or dangerous when many people improve with treatment?',
      'What is the best way to respond when somebody describes hearing voices or unusual beliefs?',
      'Why do sleep loss and substance use matter so much in psychosis assessment?',
      'What should recovery look like beyond symptom reduction?',
    ],
    resources: [
      resource('NHS - Psychosis overview', 'https://www.nhs.uk/conditions/psychosis/'),
      resource('NHS - Diagnosis of psychosis', 'https://www.nhs.uk/mental-health/conditions/psychosis/diagnosis/'),
      resource('NHS - Schizophrenia treatment', 'https://www.nhs.uk/mental-health/conditions/schizophrenia/treatment/'),
      resource('NICE - Psychosis and schizophrenia in adults: prevention and management', 'https://www.nice.org.uk/guidance/cg178'),
      resource('WHO - Schizophrenia fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/schizophrenia'),
    ],
    tutorNotes: `Facilitation:
Keep the conversation calm and concrete. If someone in the room has a psychosis history, the subject may be personal even if not disclosed.

Safeguarding:
If you hear signs of immediate risk, severe distress or inability to maintain safety, stop and escalate appropriately.

Delivery caution:
Do not over-focus on violence or fear. Most of the clinical work is about recognition, safety, continuity and recovery.`,
    powerPoint: `Tutor deck notes:
- Keep contrast high and imagery non-threatening.
- Student slides should make symptoms, causes and support routes easy to retain.
- Tutor notes should hold the nuance on differential diagnosis, annual health checks and relapse prevention.`,
  }),
  23: guide({
    id: 23,
    topic: 'Personality Disorders: Cluster A and Cluster B',
    summary:
      'A clinically careful module on personality disorder patterns, with emphasis on Cluster A and Cluster B presentations, trauma, stigma, boundaries, risk and treatment that does not reduce people to labels.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and language guardrails',
      'What personality disorder means in modern practice',
      'Cluster A patterns and social mistrust',
      'Cluster B patterns, instability and risk',
      'Activity: from label to formulation',
      'Discussion on stigma, treatment and boundaries',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Personality Pattern, Not Personal Flaw',
        bullets: [
          'Personality disorder refers to enduring patterns of thinking, feeling and relating that cause distress or difficulty.',
          'The label should never be used as an insult or shorthand for difficult behaviour.',
          'Trauma, attachment and environment often shape the picture.',
          'Assessment should stay curious and person-centred.',
        ],
        notes: [
          'Set ground rules around language immediately. The module must not reinforce the idea that people with personality disorder are simply manipulative or bad.',
          'Explain that these patterns are usually long-standing and context-shaped, not random character defects.',
        ],
      },
      {
        title: 'Cluster A: Odd, Eccentric and Suspicious Patterns',
        bullets: [
          'Paranoid, schizoid and schizotypal patterns can involve mistrust, social distance and unusual thinking styles.',
          'These patterns may be mistaken for psychosis or social withdrawal alone.',
          'Safety and trust build slowly.',
          'The response should be steady rather than intrusive.',
        ],
        notes: [
          'Teach Cluster A with caution because people can be easily misread. Mistrust is often understandable if the person has repeatedly been let down.',
          'Use the slide to show that odd or withdrawn presentation does not equal danger.',
        ],
      },
      {
        title: 'Cluster B: Emotion, Impulsivity and Instability',
        bullets: [
          'Borderline, antisocial, histrionic and narcissistic features can involve intensity, risk, conflict and unstable relationships.',
          'Symptoms may include fear of abandonment, impulsivity, anger, shifting self-image or disregard for others\' rights.',
          'These are patterns, not excuses and not moral verdicts.',
          'Need and risk can coexist.',
        ],
        notes: [
          'Use balanced language. Cluster B presentations often trigger strong reactions in staff and family members, so the teaching must stay grounded and non-shaming.',
          'Make clear that the goal is understanding function and risk, not excusing harm.',
        ],
      },
      {
        title: 'BPD Is the Most Commonly Recognised Pattern',
        bullets: [
          'Borderline personality disorder is associated with emotional instability, unstable relationships, identity disturbance and impulsivity.',
          'Self-harm and suicidal crisis can occur.',
          'Many people improve with structured psychological treatment.',
          'The prognosis is more hopeful than many people assume.',
        ],
        notes: [
          'This slide gives the group the most familiar Cluster B pattern without collapsing all personality disorder into one condition.',
          'Keep hope visible. Recovery and sustained improvement are common with the right treatment.',
        ],
      },
      {
        title: 'Assessment Should Look Beyond the Label',
        bullets: [
          'Diagnosis should consider trauma, substance use, mood disorder, psychosis, autism and ADHD where relevant.',
          'Risk assessment and support needs matter as much as the category.',
          'People often need stable relationships with services before they can engage deeply.',
          'Different services may need to work together.',
        ],
        notes: [
          'This slide prevents diagnostic tunnel vision. The same behaviour can reflect trauma, mood, neurodevelopmental difference or a personality pattern.',
          'Good assessment stays open rather than rushing to a fixed explanation.',
        ],
      },
      {
        title: 'Treatment Can Work, but It Needs Structure',
        bullets: [
          'Psychological treatment, usually delivered by trained clinicians, is often the main support.',
          'Treatment may take time and may need to be consistent and relational.',
          'Crisis-only care often fails to address the underlying pattern.',
          'Boundaries and reliability are part of treatment, not signs of coldness.',
        ],
        notes: [
          'Be explicit that this group often needs longer-term, consistent work rather than brief reassurance alone.',
          'The module should normalise structure, boundaries and patience.',
        ],
      },
      {
        title: 'Boundaries Help, They Do Not Reject',
        bullets: [
          'Clear boundaries reduce chaos and improve trust when they are explained calmly.',
          'Inconsistency can trigger conflict or distress.',
          'Helpers should avoid over-involvement, rescuing or threats that cannot be kept.',
          'The most useful response is steady, respectful and predictable.',
        ],
        notes: [
          'This is a vital practice slide. Many teams burn out because they confuse compassion with unlimited availability.',
          'Healthy boundaries can feel safer than vague emotional closeness.',
        ],
      },
      {
        title: 'Stigma and Recovery',
        bullets: [
          'Stigma around personality disorder is intense and often makes treatment access worse.',
          'People are often described as manipulative when they are distressed, frightened or in need of help.',
          'Recovery improves when services are skilled, consistent and non-judgemental.',
          'Hope should be realistic, not sentimental.',
        ],
        notes: [
          'Close by naming the stigma directly. The label itself often does more harm than the behaviour it is supposed to describe.',
          'That gives the module a clear ethical line: understanding before judgement.',
        ],
      },
    ],
    activity: `ACTIVITY - From Label to Formulation (20 minutes)

Tutor steps:
1. Present a brief fictional case involving mistrust, conflict, self-harm or unstable relationships.
2. Ask the group to rewrite the case in formulation terms: triggers, patterns, needs, risks and strengths.
3. Ask what would be lost if the person were reduced to a label alone.
4. Debrief by identifying one treatment or support principle that would help the person engage better.`,
    discussionPrompts: [
      'Why do personality disorder labels attract so much stigma in services and the public?',
      'How can teams stay compassionate without becoming chaotic or boundaryless?',
      'Which matters more: diagnosis, formulation or treatment relationship?',
      'What helps people with Cluster B patterns stay engaged with support?',
    ],
    resources: [
      resource('NHS - Borderline personality disorder overview', 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/'),
      resource('NHS - Borderline personality disorder diagnosis', 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/diagnosis/'),
      resource('NHS - Borderline personality disorder treatment', 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/treatment/'),
      resource('NICE - Borderline personality disorder: recognition and management', 'https://www.nice.org.uk/guidance/cg78'),
      resource('NICE - Antisocial personality disorder: prevention and management', 'https://www.nice.org.uk/guidance/cg77'),
    ],
    tutorNotes: `Facilitation:
Language matters sharply in this module. Avoid using diagnosis as a synonym for dangerous or difficult.

Safeguarding:
If the discussion reveals current self-harm, violence or immediate risk, move to safety procedures and do not stay in abstract teaching.

Delivery caution:
Do not collapse all personality disorder into BPD. Cluster A and B need separate teaching so the group does not lose nuance.`,
    powerPoint: `Tutor deck notes:
- Keep the student version focused on patterns, support and treatment rather than labels alone.
- Use a formulation diagram to show how context, trauma and behaviour interact.
- Tutor notes should hold the nuance around boundaries, crisis work and stigma.`,
  }),
  24: guide({
    id: 24,
    topic: 'Personality Disorders: Cluster C and Related Presentations',
    summary:
      'A bespoke module on anxious, fearful and controlling personality patterns, including avoidant, dependent and obsessive-compulsive personality features, with emphasis on shame, perfectionism, safety and treatment.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and language guardrails',
      'Cluster C patterns and anxiety-based coping',
      'Perfectionism, control and avoidance',
      'Relationships, work and hidden distress',
      'Activity: identify the function behind the pattern',
      'Discussion on treatment and support',
      'Wrap-up, signposting and next steps',
    ]),
    slides: [
      {
        title: 'Cluster C Patterns Are Driven by Fear',
        bullets: [
          'Avoidant, dependent and obsessive-compulsive personality features often involve anxiety, shame or fear of being judged.',
          'The behaviour can look rigid, passive or perfectionistic.',
          'The pattern usually has a protective purpose.',
          'Understanding the purpose helps support change.',
        ],
        notes: [
          'Open by naming the fear underneath the behaviour. That helps the group move away from seeing Cluster C as simply awkward or difficult.',
          'The pattern often makes sense once you understand what the person is trying to prevent.',
        ],
      },
      {
        title: 'Avoidant Patterns Can Hide Deep Distress',
        bullets: [
          'Avoidance may protect against shame, criticism or rejection.',
          'The person may want connection but fear exposure.',
          'Social, educational and work opportunities can shrink over time.',
          'Withdrawal is often a safety strategy, not a preference for isolation.',
        ],
        notes: [
          'This slide helps the room see how a person can appear quiet, compliant or unproblematic while becoming increasingly limited in life.',
          'Use examples of missed opportunities, not just emotional language.',
        ],
      },
      {
        title: 'Dependent Patterns and Fear of Separation',
        bullets: [
          'Dependent features can involve difficulty making decisions without reassurance and fear of being left to cope alone.',
          'This can create relationships that feel both comforting and constraining.',
          'Overprotection by others can keep the pattern going.',
          'Support should build confidence, not dependency on the service.',
        ],
        notes: [
          'Teach this carefully to avoid infantilising people. Dependency features are about fear and confidence, not a childlike personality.',
          'The aim is to increase capacity for independent choice in a paced way.',
        ],
      },
      {
        title: 'Obsessive-Compulsive Personality Features',
        bullets: [
          'Perfectionism, control, rigidity and an over-focus on rules or detail are common features.',
          'The person may be highly conscientious but exhausted by standards they cannot relax.',
          'Performance can suffer when flexibility is impossible.',
          'This is not the same as OCD.',
        ],
        notes: [
          'Make the distinction from OCD explicit, because learners often mix them up. This pattern is about personality style and control, not intrusive obsessions and compulsions in the same sense.',
          'The person may sincerely believe rigidity is the only route to safety or success.',
        ],
      },
      {
        title: 'Shame, Criticism and Hidden Exhaustion',
        bullets: [
          'Cluster C patterns often look competent from the outside.',
          'Inside, the person may be exhausted by self-criticism and constant vigilance.',
          'Burnout can occur when perfectionism or avoidance becomes unsustainable.',
          'Support should not treat the person as simply "fine".',
        ],
        notes: [
          'This slide matters because hidden distress is easy to miss. High functioning does not mean low need.',
          'The teaching point is to notice strain beneath apparent control.',
        ],
      },
      {
        title: 'Treatment Works Best When It Is Collaborative',
        bullets: [
          'Psychological treatment can help people test assumptions, reduce avoidance and build flexibility.',
          'Progress is often slow and sensitive to shame.',
          'Therapy should not be abrupt or shaming.',
          'Support may also involve social anxiety, trauma or low mood.',
        ],
        notes: [
          'Keep the treatment message practical. The person often needs a safe, non-shaming relationship before they can attempt change.',
          'Progress is usually gradual because the behaviour has often been serving a protective function for years.',
        ],
      },
      {
        title: 'Support in Work, Relationships and Services',
        bullets: [
          'Clear expectations, paced change and predictable communication help.',
          'Overly vague reassurance can increase anxiety.',
          'Helpers should avoid becoming rescuers or validators of perfectionism.',
          'Support should increase flexibility without forcing risk-taking too quickly.',
        ],
        notes: [
          'The practical work here is about reducing shame and uncertainty while avoiding over-accommodation of unhelpful fear-based habits.',
          'That balance is useful for workplaces, families and services alike.',
        ],
      },
      {
        title: 'Recovery Means More Freedom, Not No Anxiety Ever',
        bullets: [
          'Recovery may mean more choice, more flexibility and less fear-driven avoidance.',
          'The goal is not to remove every caution or preference for order.',
          'People can keep strengths like reliability and care while loosening self-punishment.',
          'Hope comes from function, not perfection.',
        ],
        notes: [
          'Close by defining recovery in functional terms. People do not need to become careless to become well.',
          'That framing avoids both moralising and false promises.',
        ],
      },
    ],
    activity: `ACTIVITY - Pattern and Function Mapping (20 minutes)

Tutor steps:
1. Give groups a fictional case involving perfectionism, avoidance or dependency.
2. Ask them to map what the behaviour protects the person from, what it costs and what support might reduce the fear enough to allow change.
3. Ask them to identify one behaviour that is understandable but now limiting life.
4. Debrief by comparing collaborative, shame-free interventions.`,
    discussionPrompts: [
      'Why are anxious personality patterns often mistaken for simple shyness or conscientiousness?',
      'How do shame and fear keep Cluster C patterns going?',
      'What is the difference between being careful and being trapped by control?',
      'How can services support change without shaming the coping style?',
    ],
    resources: [
      resource('NHS - Borderline personality disorder overview', 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/'),
      resource('NICE - Borderline personality disorder: recognition and management', 'https://www.nice.org.uk/guidance/cg78'),
      resource('NICE - Antisocial personality disorder: prevention and management', 'https://www.nice.org.uk/guidance/cg77'),
      resource('NHS England - Offender personality disorder pathway', 'https://www.england.nhs.uk/long-read/the-offender-personality-disorder-pathway/'),
    ],
    tutorNotes: `Facilitation:
Keep the tone calm and non-pathologising. These patterns often hide behind competence or politeness.

Safeguarding:
If the discussion surfaces acute distress or self-harm, move to support rather than staying with the teaching content.

Delivery caution:
Make the distinction between OCD and obsessive-compulsive personality features explicit and repeat it if needed.`,
    powerPoint: `Tutor deck notes:
- Use a fear-to-behaviour-to-cost diagram.
- Student slides should make the difference between avoidant, dependent and perfectionistic patterns easy to compare.
- Tutor notes should hold the nuance around shame, burnout and paced treatment.`,
  }),
  25: guide({
    id: 25,
    topic: 'Neurocognitive Disorders',
    summary:
      'A bespoke module on dementia, delirium, mild cognitive impairment, memory assessment, capacity, carer support and the difference between normal ageing and neurocognitive decline.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and framing around memory and ageing',
      'What neurocognitive disorders are',
      'Dementia, mild cognitive impairment and delirium',
      'Assessment, reversible causes and support routes',
      'Activity: create a cognitive-support plan',
      'Discussion on carers, dignity and access',
      'Wrap-up, signposting and next steps',
    ]),
    slides: [
      {
        title: 'Memory Problems Are Not Always Dementia',
        bullets: [
          'Memory loss can be caused by stress, depression, sleep problems, medication, delirium or dementia.',
          'Not every change is a normal part of ageing.',
          'Persistent or worsening cognitive problems should be checked.',
          'Early assessment can help identify treatable causes.',
        ],
        notes: [
          'Open by separating ordinary forgetfulness from cognitive decline and from medical emergencies such as delirium.',
          'The teaching aim is to encourage early GP review rather than self-diagnosis or dismissing the problem as "just ageing".',
        ],
      },
      {
        title: 'Dementia Is a Syndrome With Many Causes',
        bullets: [
          'Dementia affects memory, thinking, behaviour and daily function.',
          'Alzheimer\'s disease is the most common cause, but not the only one.',
          'Symptoms usually worsen over time.',
          'Dementia is not a normal part of ageing.',
        ],
        notes: [
          'Teach the syndrome model clearly. That helps learners understand why diagnosis and support need careful assessment rather than assumptions.',
          'Reinforce that age is a risk factor, not a destiny.',
        ],
      },
      {
        title: 'Mild Cognitive Impairment and Early Change',
        bullets: [
          'Mild cognitive impairment can involve measurable change without full dementia.',
          'Some people remain stable and some progress.',
          'It is a useful point for monitoring, prevention and planning.',
          'Support should not wait for a crisis.',
        ],
        notes: [
          'This slide helps the group understand the grey zone between normal ageing and dementia.',
          'People often need reassurance plus follow-up when symptoms are present but diagnosis is not yet clear.',
        ],
      },
      {
        title: 'Delirium Is Acute and Potentially Serious',
        bullets: [
          'Delirium is a sudden change in attention, awareness and cognition.',
          'It often has a medical cause such as infection, medication, dehydration or organ failure.',
          'It can look like confusion, agitation, withdrawal or hallucinations.',
          'Delirium needs urgent medical attention.',
        ],
        notes: [
          'This slide is critical because delirium is frequently mistaken for dementia or a psychiatric problem.',
          'The key teaching point is speed: sudden change is a medical red flag.',
        ],
      },
      {
        title: 'Assessment Should Look for Reversible Causes',
        bullets: [
          'Assess medications, alcohol, infection, sleep, mood and physical health.',
          'Memory problems can be caused by depression or anxiety as well as neurological disease.',
          'A GP may refer for memory clinic assessment and scans if needed.',
          'The sooner the cause is found, the better.',
        ],
        notes: [
          'Make this practical. Many memory complaints have treatable components, and the module should keep that hope visible.',
          'Include the value of bringing a family member or friend to appointments if helpful.',
        ],
      },
      {
        title: 'Support, Carers and Daily Living',
        bullets: [
          'Routine, orientation, familiar cues and simplified environments can help.',
          'Carers need information, breaks and support too.',
          'Communication should stay respectful even when cognition changes.',
          'Advance planning helps with future decision-making.',
        ],
        notes: [
          'Teach care as relationship-based and dignity-preserving. People with dementia are often talked about instead of to.',
          'The module should challenge that directly.',
        ],
      },
      {
        title: 'Capacity, Safety and Planning Ahead',
        bullets: [
          'Capacity may change over time and depends on the decision in question.',
          'Planning early can reduce distress later.',
          'Wandering, falls, medication errors and driving safety may need review.',
          'Support should protect autonomy while reducing harm.',
        ],
        notes: [
          'This is where the legal and practical side comes in without becoming a law lecture.',
          'Advance planning and clear communication make later care much easier.',
        ],
      },
      {
        title: 'Dignity and Meaning Remain Important',
        bullets: [
          'A person is more than their diagnosis or memory loss.',
          'Meaningful activity, relationships and familiarity support wellbeing.',
          'Stigma can be reduced through inclusion, not just information.',
          'Care should protect identity as well as safety.',
        ],
        notes: [
          'End with a dignity-centred frame. Neurocognitive disorders affect function, but the person remains the same person and deserves the same respect.',
          'That gives the module a humane closing rather than a purely clinical one.',
        ],
      },
    ],
    activity: `ACTIVITY - Cognitive Support Plan (20 minutes)

Tutor steps:
1. Provide a fictional scenario of an older adult with memory change, confusion and concern from family.
2. Ask groups to plan the safest next steps under four headings: urgent concern, assessment, daily support and longer-term planning.
3. Ask them to separate dementia features from delirium red flags and from potentially reversible causes.
4. Debrief by comparing how to support both the person and the carer.`,
    discussionPrompts: [
      'Why is sudden confusion treated differently from gradual memory decline?',
      'What helps families notice cognitive change without jumping straight to worst-case assumptions?',
      'How can services protect dignity when memory and decision-making are changing?',
      'What support do carers need in parallel with the person they are supporting?',
    ],
    resources: [
      resource('NHS - What is dementia?', 'https://www.nhs.uk/conditions/dementia/about-dementia/what-is-dementia/'),
      resource('NHS - Memory loss (amnesia)', 'https://www.nhs.uk/conditions/memory-loss-amnesia/'),
      resource('NHS - Dementia prevention', 'https://www.nhs.uk/conditions/dementia/dementia-prevention/'),
      resource('NICE - Dementia: assessment, management and support for people living with dementia and their carers', 'https://www.nice.org.uk/guidance/ng97'),
      resource('NICE - Delirium: prevention, diagnosis and management', 'https://www.nice.org.uk/guidance/cg103'),
      resource('WHO - Dementia fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/dementia'),
    ],
    tutorNotes: `Facilitation:
Avoid treating dementia as an inevitable loss of personhood. The person still deserves autonomy, routines and respect.

Safeguarding:
Sudden confusion, falls, infection or inability to care for self can be urgent medical issues. Escalate as needed.

Delivery caution:
Make the distinction between delirium and dementia explicit and repeat it if the group starts blending them together.`,
    powerPoint: `Tutor deck notes:
- Use simple timelines for gradual decline versus sudden delirium.
- Student slides should emphasise recognition, assessment and dignity.
- Tutor notes should hold the nuance on capacity, reversible causes and carer support.`,
  }),
};
