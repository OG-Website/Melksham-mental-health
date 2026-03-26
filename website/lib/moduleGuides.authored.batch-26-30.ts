type SessionSegment = {
  time: string;
  label: string;
};

type Slide = {
  title: string;
  bullets: string[];
};

type ModuleGuide = {
  id: number;
  topic: string;
  summary: string;
  sessionBreakdown: SessionSegment[];
  slideOutline: Slide[];
  deliveryScript: string;
  activity: string;
  discussionPrompts: string[];
  resources: { label: string; url: string }[];
  tutorNotes: string;
  powerPoint?: string;
  videos?: { label: string; url: string }[];
};

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

export const AUTHORED_MODULE_GUIDES_BATCH_26_30: Record<number, ModuleGuide> = {
  26: guide({
    id: 26,
    topic: 'Mental Health & Chronic Physical Conditions',
    summary:
      'A bespoke module on how chronic physical illness and mental health interact, including depression, pain, fatigue, disability, long-term condition self-management and joined-up UK care.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and framing long-term condition care',
      'How physical illness and mental health affect each other',
      'Pain, fatigue, disability and function',
      'Assessment, treatment and practical support',
      'Activity: build a joined-up care map',
      'Discussion on identity, loss and resilience',
      'Wrap-up, signposting and next steps',
    ]),
    slides: [
      {
        title: 'Physical and Mental Health Affect Each Other',
        bullets: [
          'Living with a chronic physical condition can increase stress, low mood and anxiety.',
          'Poor mental health can also make self-management harder.',
          'Symptoms are often intertwined rather than separate.',
          'Good care has to look at both sides together.',
        ],
        notes: [
          'Open by rejecting the idea that mental health is "secondary" to physical illness.',
          'The central teaching point is reciprocity: body and mind affect each other in both directions.',
        ],
      },
      {
        title: 'Chronic Illness Can Create Real Psychological Load',
        bullets: [
          'Pain, fatigue, medication burden, uncertainty and disruption can wear people down.',
          'Repeated appointments and investigations can be exhausting.',
          'Loss of role, identity or independence may trigger grief as well as anxiety or depression.',
          'People can look "coping" while privately struggling to keep up.',
        ],
        notes: [
          'This slide helps participants see why long-term illness often has emotional consequences.',
          'Make it clear that frustration, grief and low mood can all be understandable responses to ongoing strain.',
        ],
      },
      {
        title: 'Symptoms Overlap and Get Missed',
        bullets: [
          'Fatigue, sleep change, concentration problems and appetite change may come from the illness, the medication or depression.',
          'Distress can be mistaken for "just coping badly".',
          'Pain and low mood may reinforce each other.',
          'A careful history is needed before assumptions are made.',
        ],
        notes: [
          'Teach overlap so learners stop assuming every symptom belongs to one diagnosis.',
          'This is where the module becomes clinically useful: identify what is physical, what is psychological and what may be both.',
        ],
      },
      {
        title: 'Long-Term Conditions Often Change Identity',
        bullets: [
          'People may grieve the life they had before illness or disability.',
          'Roles at work, in parenting or in relationships can shift.',
          'Loss of control can affect confidence and hope.',
          'Support should respect identity and autonomy, not just symptoms.',
        ],
        notes: [
          'This slide gives emotional depth to the topic. Chronic illness is often a story of ongoing adaptation and loss as well as survival.',
          'Avoid framing resilience as simply "being positive".',
        ],
      },
      {
        title: 'Treatment Must Be Joined Up',
        bullets: [
          'Physical treatment, mental health support, pain management and practical adjustments should be coordinated where possible.',
          'If depression or anxiety is present, it should not be dismissed as inevitable.',
          'Self-management plans work better when they are realistic and tailored.',
          'Communication between services matters.',
        ],
        notes: [
          'Highlight the gap between what good care should look like and what people often actually experience.',
          'The point is not perfection, but coordination and respect.',
        ],
      },
      {
        title: 'Pain, Fatigue and Disability Need Real Recognition',
        bullets: [
          'Pain and fatigue can reduce participation long before they show up clearly on tests.',
          'Invisible symptoms may attract disbelief or stigma.',
          'Reasonable adjustments can reduce harm and support function.',
          'Belief and validation are part of good care.',
        ],
        notes: [
          'Teach that invisible symptoms are still real symptoms.',
          'This slide is useful for helping participants stop asking "but they don\'t look unwell".',
        ],
      },
      {
        title: 'Mental Health Support Should Be Accessible',
        bullets: [
          'Appointments, pacing, format and language may need adaptation.',
          'People with physical conditions may need therapy that understands pain, fatigue or mobility restrictions.',
          'Social support and self-management are easier when services are realistic.',
          'The aim is sustainable care, not heroic coping.',
        ],
        notes: [
          'Accessibility is a care issue, not a bonus feature.',
          'The goal is to make support workable within the limits of chronic illness and fluctuating capacity.',
        ],
      },
      {
        title: 'Recovery May Mean Living Well With Ongoing Condition',
        bullets: [
          'Recovery does not always mean curing the physical illness.',
          'It may mean better adjustment, less distress and more control over daily life.',
          'Hope can coexist with ongoing symptoms.',
          'People need plans that work on bad days as well as good ones.',
        ],
        notes: [
          'Close by making recovery realistic and dignified.',
          'This is often the most credible hope message for people living with chronic illness.',
        ],
      },
    ],
    activity: `ACTIVITY - Joined-Up Care Map (20 minutes)

Tutor steps:
1. Give a vignette of someone with a chronic physical condition, worsening low mood and poor attendance at follow-up.
2. Ask groups to map the care needs across physical health, mental health, pain/fatigue, social support and practical adjustments.
3. Ask them to identify one point where communication between services could prevent deterioration.
4. Debrief by comparing what the person needs versus what the service system usually provides.

Tutor reminder:
Keep the exercise realistic and avoid turning it into complaint-only territory.`,
    discussionPrompts: [
      'Why are chronic physical conditions so often treated separately from mental health in practice?',
      'What is the difference between reasonable adjustment and "special treatment"?',
      'How can services better recognise depression when symptoms overlap with pain or fatigue?',
      'What helps people keep some sense of identity when illness changes daily life?',
    ],
    resources: [
      resource('NICE - Depression in adults with a chronic physical health problem: recognition and management', 'https://www.nice.org.uk/guidance/cg91'),
      resource('NHS England - Improving the physical health of people living with severe mental illness', 'https://www.england.nhs.uk/long-read/improving-the-physical-health-of-people-living-with-severe-mental-illness/'),
      resource('NHS - Long-term conditions and mental health', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/long-term-physical-health-condition-and-mental-health/'),
      resource('NHS - Health conditions and mental health', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/health-conditions-and-mental-health/'),
    ],
    tutorNotes: `Facilitation:
People may hear their own chronic illness experiences in the material. Keep the tone respectful, practical and non-patronising.

Safeguarding:
If the discussion reveals severe distress, hopelessness or possible medical deterioration, follow the appropriate support route and do not continue as if nothing happened.`,
    powerPoint: `Tutor deck notes:
- Use a simple overlap diagram for pain, fatigue, mood and function.
- Student slides should make the reciprocal relationship clear.
- Tutor notes should hold the nuance around adjustment, loss and service coordination.`,
  }),
  27: guide({
    id: 27,
    topic: 'Workplace Mental Health and Burnout',
    summary:
      'A bespoke module on workplace stress, burnout, organisational risk, home and hybrid working, manager responsibilities and practical prevention in UK settings.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and workplace framing',
      'What stress and burnout are',
      'Risk factors in job design and culture',
      'Boundaries, support and recovery',
      'Activity: redesign a stressful workday',
      'Discussion on managers, colleagues and boundaries',
      'Wrap-up, HSE signposting and next steps',
    ]),
    slides: [
      {
        title: 'Stress at Work Is a Health and Safety Issue',
        bullets: [
          'Work-related stress can contribute to anxiety, low mood and burnout.',
          'It is not just a personal weakness or a problem to push through.',
          'Employers have a duty to assess and manage work-related stress risks.',
          'Prevention is part of good management.',
        ],
        notes: [
          'Open by framing stress as a work design issue as well as an individual experience.',
          'That shift matters because it moves the focus from blame to risk reduction.',
        ],
      },
      {
        title: 'Burnout Is More Than Being Tired',
        bullets: [
          'Burnout can involve emotional exhaustion, cynicism and reduced effectiveness.',
          'It often builds after prolonged pressure, low control and insufficient recovery.',
          'People may stop caring because they are overloaded, not because they are lazy.',
          'Burnout can coexist with depression or anxiety.',
        ],
        notes: [
          'Teach burnout as a pattern that includes mind, body and behaviour.',
          'Use this slide to separate ordinary fatigue from a sustained collapse in capacity.',
        ],
      },
      {
        title: 'Risk Factors Often Sit in Job Design',
        bullets: [
          'High demand, low control, poor support, unclear roles and conflict all increase risk.',
          'Lone working and home working can intensify isolation if support is weak.',
          'Poorly managed change and chronic understaffing also matter.',
          'The problem is often the system rather than the person.',
        ],
        notes: [
          'This slide makes the occupational-health point clearly.',
          'People are more likely to thrive when job demands and support are balanced.',
        ],
      },
      {
        title: 'Boundaries Help Prevent Burnout',
        bullets: [
          'Clear working hours, breaks and recovery time matter.',
          'Saying no, escalating overload and asking for support are protective behaviours.',
          'Being always available is usually not sustainable.',
          'A healthy culture makes boundaries normal.',
        ],
        notes: [
          'Burnout prevention often comes down to whether boundaries are allowed and respected.',
          'This slide is especially useful for people who work in helping professions.',
        ],
      },
      {
        title: 'Managers Have a Real Role',
        bullets: [
          'Good managers notice workload, stress signs and pattern changes early.',
          'Regular check-ins and practical adjustments can reduce risk.',
          'Performance problems may be a signal of overload rather than poor attitude.',
          'Support should be specific, not vague reassurance.',
        ],
        notes: [
          'Teach management as an active part of prevention.',
          'The best managers are not only sympathetic; they change work conditions where possible.',
        ],
      },
      {
        title: 'Recovery May Need Time Away and Rebuild',
        bullets: [
          'People may need rest, reduced workload, adjusted duties or leave.',
          'Recovery works better when the return plan is realistic.',
          'Trying to resume at full intensity too soon can trigger relapse.',
          'A graded return is often safer than a sudden restart.',
        ],
        notes: [
          'This slide gives a practical recovery message.',
          'Burnout recovery is often about pacing and reducing re-exposure to the same pressures.',
        ],
      },
      {
        title: 'Culture Shapes Mental Health',
        bullets: [
          'Culture, leadership and communication norms affect whether people speak up.',
          'If people fear punishment or humiliation, they hide symptoms longer.',
          'Psychological safety is part of organisational health.',
          'Good culture prevents problems earlier than individual support alone.',
        ],
        notes: [
          'This slide helps learners see that mental health in the workplace is not only an employee issue.',
          'Culture is a prevention tool.',
        ],
      },
      {
        title: 'A Sustainable Work Life Is Built, Not Hoped For',
        bullets: [
          'Healthy work needs workload, autonomy, recovery and support in balance.',
          'People do better when expectations are clear and realistic.',
          'The goal is sustainable contribution, not chronic overextension.',
          'Burnout prevention protects both people and services.',
        ],
        notes: [
          'Close by making sustainability the real objective.',
          'That is more honest than asking people to cope indefinitely with poor systems.',
        ],
      },
    ],
    activity: `ACTIVITY - Redesign a Workday (20 minutes)

Tutor steps:
1. Give groups a fictional workday with heavy demands, interruptions, no breaks and poor support.
2. Ask them to redesign it with three goals: reduce overload, improve recovery and increase clarity.
3. Ask which changes belong to the individual, the manager and the organisation.
4. Debrief by identifying one change that could happen immediately and one that needs policy change.

Tutor reminder:
Keep the discussion practical and avoid turning it into a vent session.`,
    discussionPrompts: [
      'What is the difference between a demanding job and a harmful one?',
      'How do home and hybrid working change stress and support?',
      'What should a manager do when a team member is showing clear burnout signs?',
      'How can workers protect themselves without normalising impossible workloads?',
    ],
    resources: [
      resource('HSE - Stress and mental health at work', 'https://www.hse.gov.uk/stress/'),
      resource('HSE - Managing home workers\' health and safety: stress and mental health', 'https://www.hse.gov.uk/home-working/employer/stress-and-mental-health.htm'),
      resource('HSE - Stress Indicator Tool', 'https://books.hse.gov.uk/Stress-Indicator-Tool/'),
      resource('NHS - Work, stress and mental health', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/work-stress-and-mental-health/'),
    ],
    tutorNotes: `Facilitation:
Some participants may be staff, managers or volunteers feeling overloaded right now. Keep the tone practical, not preachy.

Safeguarding:
If the conversation reveals severe burnout, panic or inability to cope safely, signpost appropriately and do not keep pushing through the content.`,
    powerPoint: `Tutor deck notes:
- Use a job-design diagram showing demand, control, support and recovery.
- Student slides should keep the prevention message simple.
- Tutor notes should emphasise HSE responsibilities and realistic workplace changes.`,
  }),
  28: guide({
    id: 28,
    topic: 'Social Isolation and Loneliness',
    summary:
      'A bespoke module on loneliness, social isolation, belonging, risk factors, protective connections and how communities and services can reduce disconnection in practical ways.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and belonging framing',
      'Loneliness versus social isolation',
      'Health impacts and risk factors',
      'Building connection and community',
      'Activity: map a connection plan',
      'Discussion on stigma and inclusion',
      'Wrap-up, local signposting and next steps',
    ]),
    slides: [
      {
        title: 'Loneliness and Isolation Are Not the Same',
        bullets: [
          'Loneliness is the painful feeling of being disconnected.',
          'Social isolation is a lack of social contact or network.',
          'People can be surrounded by others and still feel lonely.',
          'Both can affect mental and physical health.',
        ],
        notes: [
          'Start by separating feeling from structure.',
          'This distinction helps the group see why a person can look socially active and still be deeply lonely.',
        ],
      },
      {
        title: 'Loneliness Has Health Consequences',
        bullets: [
          'Loneliness can increase stress, low mood, anxiety and hopelessness.',
          'Long-term loneliness may also affect physical health.',
          'It can make people withdraw further and expect rejection.',
          'The cycle can become self-reinforcing.',
        ],
        notes: [
          'Teach loneliness as a real health issue, not a soft social concern.',
          'Use the slide to explain why disconnection can become more than just sadness about being alone.',
        ],
      },
      {
        title: 'Who Is Most at Risk',
        bullets: [
          'Risk can rise with bereavement, disability, caring, poor health, unemployment, migration, stigma or major life transitions.',
          'Older adults, people living alone and people with low income may face extra barriers.',
          'Home or lone working can also increase disconnection.',
          'Belonging is affected by both personal and structural factors.',
        ],
        notes: [
          'This slide keeps the issue from becoming individualised.',
          'The main message is that loneliness is shaped by circumstances as well as personality.',
        ],
      },
      {
        title: 'Why Reaching Out Can Feel Hard',
        bullets: [
          'People may fear rejection, burdening others or feeling awkward.',
          'Shame can stop them saying they are lonely.',
          'Missing social confidence can be a consequence of isolation, not the cause.',
          'Low-stakes contact is often easier than "making friends" as a goal.',
        ],
        notes: [
          'This slide helps participants avoid simplistic advice like "just join a club".',
          'The point is to reduce the psychological barrier to connection.',
        ],
      },
      {
        title: 'Connection Is Built Through Repetition',
        bullets: [
          'Regular contact matters more than one-off gestures.',
          'Routines, shared activities and local spaces can create belonging.',
          'People need places where they are expected and remembered.',
          'Connection often grows from familiarity.',
        ],
        notes: [
          'Make connection practical and repeated rather than grand and occasional.',
          'This slide is especially useful for community or peer-based work.',
        ],
      },
      {
        title: 'Services and Communities Can Reduce Loneliness',
        bullets: [
          'Accessible groups, transport, digital options and welcoming spaces all help.',
          'Services should notice who is missing and who may be becoming isolated.',
          'Community action can be as important as clinical support.',
          'Belonging is preventative care.',
        ],
        notes: [
          'Teach the role of communities as part of the solution.',
          'Prevention works best when there are low-friction routes into contact.',
        ],
      },
      {
        title: 'Stigma Makes Isolation Worse',
        bullets: [
          'People may be lonely because of illness, disability, identity or poverty and then feel ashamed of that loneliness.',
          'Shame closes people off further.',
          'Respectful, non-pitying connection is more effective than pressure.',
          'Belonging should never require pretending to be someone else.',
        ],
        notes: [
          'End this slide by naming stigma directly.',
          'People stay connected more easily when they feel safe being themselves.',
        ],
      },
      {
        title: 'Small Connections Matter',
        bullets: [
          'A hello, a routine check-in or a shared task can be meaningful.',
          'The goal is to increase contact and belonging gradually.',
          'Tiny steps are often more sustainable than big social goals.',
          'Connection plans should fit the person\'s energy and confidence.',
        ],
        notes: [
          'Close with realism. Large social leaps are not always necessary or helpful.',
          'Small, repeatable connections are often what change the pattern.',
        ],
      },
    ],
    activity: `ACTIVITY - Connection Plan (20 minutes)

Tutor steps:
1. Ask participants to map a fictional person\'s current connections, weak spots and barriers to contact.
2. Have them identify one daily, one weekly and one community-based connection step.
3. Ask what makes each step realistic and low-pressure.
4. Debrief by comparing which barriers are practical and which are emotional.

Tutor reminder:
Keep the exercise gentle and avoid putting anybody on the spot.`,
    discussionPrompts: [
      'What is the difference between being alone and feeling lonely?',
      'How can services notice and respond to isolation earlier?',
      'What makes connection feel safe rather than forced?',
      'Which small change would make the biggest difference to belonging in your community?',
    ],
    resources: [
      resource('NHS - Loneliness', 'https://www.nhs.uk/every-mind-matters/lifes-challenges/loneliness/'),
      resource('GOV.UK - Government\'s work on tackling loneliness', 'https://www.gov.uk/guidance/governments-work-on-tackling-loneliness'),
      resource('NHS England - Loneliness and Social Isolation', 'https://www.hee.nhs.uk/our-work/population-health/our-resources-hub/loneliness-social-isolation'),
      resource('HSE - Lone working and stress', 'https://www.hse.gov.uk/lone-working/employer/stress-other-factors.htm'),
    ],
    tutorNotes: `Facilitation:
Loneliness can be sensitive, especially if people are grieving, caring, disabled or living alone. Keep the room non-judgemental.

Safeguarding:
If loneliness is linked with severe depression, self-harm or risk of exploitation, escalate and signpost appropriately.`,
    powerPoint: `Tutor deck notes:
- Use a simple network map and a low-friction connection ladder.
- Student slides should stress belonging and repetition over grand gestures.
- Tutor notes should keep the stigma and risk discussion grounded.`,
  }),
  29: guide({
    id: 29,
    topic: 'Financial Stress and Mental Health',
    summary:
      'A bespoke module on money worries, debt, insecurity, benefits, shame and the mental health impact of financial stress, with practical signposting and realistic coping strategies.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and financial safety framing',
      'How money stress affects mental health',
      'Debt, insecurity and shame',
      'Benefits, budgeting and practical support',
      'Activity: build a financial coping plan',
      'Discussion on dignity, systems and stigma',
      'Wrap-up, debt advice routes and next steps',
    ]),
    slides: [
      {
        title: 'Money Stress Is Mental Health Stress',
        bullets: [
          'Financial pressure can trigger anxiety, low mood, conflict and sleep loss.',
          'Constant money worry can occupy the mind all day.',
          'The impact is real even when the issue looks "practical".',
          'Shame often makes people hide the problem.',
        ],
        notes: [
          'Open by naming money as a mental health issue, not just a budgeting issue.',
          'The point is to make the psychological load visible and legitimate.',
        ],
      },
      {
        title: 'Insecurity Creates Constant Alertness',
        bullets: [
          'Unstable income, debt, housing costs and unexpected bills keep people on edge.',
          'Short-term survival mode can become chronic.',
          'Sleep, concentration and relationships often suffer.',
          'The body stays braced for the next problem.',
        ],
        notes: [
          'Teach the body and mind impact of constant insecurity.',
          'This is a useful place to explain why people in financial stress can look distracted, irritable or withdrawn.',
        ],
      },
      {
        title: 'Debt Often Comes With Shame',
        bullets: [
          'People may avoid opening letters, answering calls or checking accounts.',
          'Shame can delay support and make the situation worse.',
          'Avoidance gives short relief but keeps the problem growing.',
          'Being in debt is not the same as being irresponsible.',
        ],
        notes: [
          'Address shame directly and reject moralising language.',
          'Learners should understand that avoidance is often a fear response, not laziness.',
        ],
      },
      {
        title: 'Benefits and Practical Support Matter',
        bullets: [
          'People may need advice on benefits, debts, food, housing or energy costs.',
          'Small practical wins can reduce distress quickly.',
          'It helps to have one place to start rather than many confusing options.',
          'Financial support is part of mental health support.',
        ],
        notes: [
          'This slide should feel practical and low-friction.',
          'The goal is to reduce overwhelm and get people connected to the right advice early.',
        ],
      },
      {
        title: 'Money Stress Affects Relationships',
        bullets: [
          'Arguments, secrecy and withdrawal often increase when money is tight.',
          'People may feel like a burden to family or partners.',
          'Shared stress can intensify conflict and guilt.',
          'Clear communication reduces hidden pressure.',
        ],
        notes: [
          'This slide makes the relational impact visible.',
          'Money stress rarely stays in one lane; it affects households and confidence too.',
        ],
      },
      {
        title: 'Support Should Be Dignified',
        bullets: [
          'Advice should be respectful, not judgemental or patronising.',
          'People need realistic steps they can manage while stressed.',
          'Small changes are better than impossible plans.',
          'Dignity reduces avoidance and increases follow-through.',
        ],
        notes: [
          'Teach dignity as a practical engagement tool.',
          'People are more likely to respond when they feel respected rather than assessed.',
        ],
      },
      {
        title: 'Know the Routes to Help',
        bullets: [
          'Debt advice, benefits support, housing support and food support may all be relevant.',
          'Mental health support should sit alongside practical help.',
          'The earlier someone gets advice, the better the options usually are.',
          'Support should continue long enough to be useful.',
        ],
        notes: [
          'Make signposting concrete rather than vague.',
          'This is a good place to remind participants that practical help is often emotionally stabilising too.',
        ],
      },
      {
        title: 'Recovery Means More Control and Less Shame',
        bullets: [
          'Financial recovery often means more stability, more choice and less fear.',
          'People should not be blamed for struggling in an expensive system.',
          'Confidence returns when the problem is named and a plan exists.',
          'The goal is sustainable management, not perfection.',
        ],
        notes: [
          'Close by connecting money, dignity and mental health.',
          'This keeps the module grounded and hopeful.',
        ],
      },
    ],
    activity: `ACTIVITY - Financial Coping Plan (20 minutes)

Tutor steps:
1. Give groups a fictional person with bills, debt letters and rising anxiety.
2. Ask them to build a plan with three layers: immediate stabilisation, practical advice and longer-term prevention.
3. Ask what should be done first and what should wait.
4. Debrief by identifying where shame or avoidance would block progress.

Tutor reminder:
Keep the activity practical and avoid asking anybody to disclose personal finances.`,
    discussionPrompts: [
      'Why is financial stress so closely linked to anxiety and low mood?',
      'What makes money problems feel especially shameful?',
      'Which practical support reduces distress fastest: debt advice, benefits advice, budgeting or social support?',
      'How can services keep dignity central when discussing money?',
    ],
    resources: [
      resource('Citizens Advice', 'https://www.citizensadvice.org.uk'),
      resource('StepChange Debt Charity', 'https://www.stepchange.org'),
      resource('MoneyHelper', 'https://www.moneyhelper.org.uk'),
      resource('NHS - Mental health and money worries', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/money-worries-and-mental-health/'),
    ],
    tutorNotes: `Facilitation:
Money can be a painful and private topic. Keep the tone non-judgemental and practical.

Safeguarding:
If there is severe distress, risk of self-harm or immediate hardship, do not let the topic drift; signpost and escalate appropriately.`,
    powerPoint: `Tutor deck notes:
- Use a simple money-stress cycle and a practical signposting slide.
- Student slides should keep the language respectful and direct.
- Tutor notes should emphasise shame reduction and immediate support routes.`,
  }),
  30: guide({
    id: 30,
    topic: 'Relationships and Attachment',
    summary:
      'A bespoke module on attachment, relational security, communication patterns, conflict, repair and the way early relationships can shape adult mental health and support needs.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and relationship framing',
      'What attachment means',
      'Secure, anxious, avoidant and disorganised patterns',
      'Conflict, repair and communication',
      'Activity: map a relationship pattern',
      'Discussion on trust, boundaries and support',
      'Wrap-up, next steps and signposting',
    ]),
    slides: [
      {
        title: 'Attachment Shapes How We Connect',
        bullets: [
          'Attachment describes how people learn to seek safety, comfort and closeness.',
          'Early relationships can shape expectations about trust and support.',
          'Attachment is not destiny, but it does influence later patterns.',
          'Adult relationships can change and repair old expectations.',
        ],
        notes: [
          'Begin with a simple definition and keep it non-deterministic.',
          'The key idea is that relationships teach the nervous system what to expect from other people.',
        ],
      },
      {
        title: 'Different Patterns Can Show Up in Adulthood',
        bullets: [
          'Some people move toward closeness easily, others expect rejection or loss of control.',
          'People may cling, withdraw, test or avoid depending on what feels safe.',
          'These patterns often make sense when viewed through earlier experience.',
          'No pattern is a moral failing.',
        ],
        notes: [
          'Teach patterns without labelling people as damaged.',
          'Use the slide to normalise that many adult relationship habits are learned survival strategies.',
        ],
      },
      {
        title: 'Conflict Often Reflects Protection',
        bullets: [
          'Arguments can be about fear, not just disagreement.',
          'People may protect themselves by shutting down, escalating or becoming controlling.',
          'The same behaviour can mean different things in different relationships.',
          'Repair matters more than pretending conflict never happened.',
        ],
        notes: [
          'This slide helps participants move from blame to curiosity.',
          'The goal is not to excuse harmful behaviour, but to understand how protection can turn into conflict.',
        ],
      },
      {
        title: 'Trust Builds Through Reliability',
        bullets: [
          'Clear communication, consistency and follow-through make relationships safer.',
          'Tiny repairs matter when something goes wrong.',
          'Boundaries are part of trust, not a threat to it.',
          'Healthy relationships allow both closeness and space.',
        ],
        notes: [
          'Teach trust as something built through repeated experience.',
          'This is a practical slide for anyone thinking about parenting, partnerships or support work.',
        ],
      },
      {
        title: 'Attachment and Mental Health Interact',
        bullets: [
          'Unstable relationships can increase anxiety, low mood and shame.',
          'Fear of abandonment or engulfment can drive distress.',
          'Supportive relationships can be protective and stabilising.',
          'The quality of connection matters as much as the number of contacts.',
        ],
        notes: [
          'Keep the relationship between attachment and mental health visible without making it overly clinical.',
          'Supportive connection is often a real protective factor.',
        ],
      },
      {
        title: 'Repair Is a Skill',
        bullets: [
          'Good repair includes naming what happened, taking responsibility and making a change.',
          'Avoiding repair often leaves people stuck in the same pattern.',
          'Small apologies and follow-through can matter a lot.',
          'Repair is how relationships survive stress.',
        ],
        notes: [
          'This slide gives the group something concrete to use in real relationships.',
          'It keeps the module from becoming a theory-only discussion.',
        ],
      },
      {
        title: 'Boundaries Make Connection Safer',
        bullets: [
          'Boundaries reduce confusion and resentment.',
          'Clear limits help people know what to expect.',
          'Healthy boundaries are compatible with warmth and care.',
          'No relationship should require losing yourself.',
        ],
        notes: [
          'This slide helps participants understand that boundaries are relational support, not rejection.',
          'It is especially useful where people confuse closeness with over-availability.',
        ],
      },
      {
        title: 'Relationships Can Heal, Not Only Harm',
        bullets: [
          'Relational safety can change patterns over time.',
          'Good relationships do not erase the past, but they can reduce its power.',
          'People can learn new ways of connecting at any stage of life.',
          'Hope is realistic when relationships are steady and respectful.',
        ],
        notes: [
          'Close with the idea that attachment patterns can be repaired and updated.',
          'That gives the module a clear hopeful ending without overstating how easy change is.',
        ],
      },
    ],
    activity: `ACTIVITY - Relationship Pattern Map (20 minutes)

Tutor steps:
1. Give a fictional scenario involving conflict, withdrawal, pursuit and repair difficulty.
2. Ask groups to identify the attachment pattern they think is operating and what fear might be underneath it.
3. Ask them to propose one communication change and one boundary change that might improve the situation.
4. Debrief by discussing which changes help both safety and closeness.

Tutor reminder:
Keep the activity case-based and avoid asking people to analyse their own relationships publicly.`,
    discussionPrompts: [
      'How do early experiences shape what feels safe in adult relationships?',
      'What is the difference between a boundary and a wall?',
      'Why is repair sometimes more important than "winning" an argument?',
      'How can support relationships be steady without becoming over-involved?',
    ],
    resources: [
      resource('NHS - Relationships and mental health', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/relationships-and-mental-health/'),
      resource('Relate', 'https://www.relate.org.uk'),
      resource('Mind - Relationships and mental health', 'https://www.mind.org.uk/information-support/your-story/relationships-and-mental-health/'),
      resource('NHS - Support for adults experiencing relationship problems', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/relationships-and-mental-health/'),
    ],
    tutorNotes: `Facilitation:
Relationships can touch people\'s deepest wounds. Keep the room respectful and avoid making attachment theory feel like a verdict.

Safeguarding:
If the discussion reveals coercive control, abuse or current risk, move into safeguarding and appropriate signposting.`,
    powerPoint: `Tutor deck notes:
- Use a simple relationship cycle and repair ladder.
- Student slides should focus on communication, safety and repair.
- Tutor notes should keep the attachment nuance clear and non-deterministic.`,
  }),
};
