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

export const AUTHORED_MODULE_GUIDES_BATCH_31_35: Record<number, ModuleGuide> = {
  31: guide({
    id: 31,
    topic: 'Parenting Stress and Paternal Mental Health',
    summary:
      'A father-inclusive module on parenting stress, paternal depression, identity change, sleep deprivation, relationship strain and help-seeking routes for fathers and co-parents.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome, language and parent-inclusive framing',
      'What parenting stress and paternal mental health look like',
      'Sleep loss, identity change and relationship strain',
      'Bonding, attachment and the wider family system',
      'Activity: build a low-friction support plan',
      'Discussion on stigma, masculinity and help-seeking',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Parenting Stress Affects Fathers Too',
        bullets: [
          'New fathers and co-parents can experience low mood, anxiety, irritability and overwhelm.',
          'Parenting stress is not limited to the birth parent.',
          'Sleep loss, money pressure and role change can accumulate quickly.',
          'People often struggle in silence because they think they should be coping.',
        ],
        notes: [
          'Open by naming fathers and co-parents explicitly. The module should not treat paternal mental health as secondary or surprising.',
          'Use the slide to normalise that parenting can be intense and disorientating even when the baby is wanted and loved.',
        ],
      },
      {
        title: 'Fatherhood Changes Identity and Routine',
        bullets: [
          'A new baby can affect work, relationships, exercise, privacy and sense of self.',
          'Some men feel pressure to be the stable one while hiding their own distress.',
          'Grief for previous freedom or confidence can sit alongside love for the baby.',
          'Identity change can be healthy and painful at the same time.',
        ],
        notes: [
          'This slide helps the room move beyond "be grateful" narratives. Becoming a parent can be meaningful and destabilising simultaneously.',
          'Acknowledge that some fathers feel left out of maternity-focused support systems, which can reduce engagement.',
        ],
      },
      {
        title: 'Sleep Deprivation Makes Everything Harder',
        bullets: [
          'Broken sleep worsens mood, concentration, patience and coping.',
          'Exhaustion can increase arguments, withdrawal or substance use.',
          'Night-time care and work demands can make recovery difficult.',
          'Small changes to rest and support can have big effects.',
        ],
        notes: [
          'Make sleep a practical issue, not a side note. Parenting stress often becomes much more manageable when the sleep problem is named directly.',
          'This is also where you can encourage sharing of night tasks and realistic expectations.',
        ],
      },
      {
        title: 'Bonding and Attachment Are Family Issues',
        bullets: [
          'Bonding may not feel instant for every parent.',
          'The relationship between parents can affect the relationship with the baby.',
          'Support should not shame a parent for finding attachment slow or difficult.',
          'The wider family system matters, not just individual feelings.',
        ],
        notes: [
          'Keep the tone reassuring and practical. Parents can love their child and still feel awkward, anxious or disconnected at times.',
          'Avoid making attachment sound like a test of morality.',
        ],
      },
      {
        title: 'When Distress Becomes a Mental Health Problem',
        bullets: [
          'Low mood, anxiety, anger, panic, intrusive thoughts or alcohol and drug use may signal more than ordinary adjustment.',
          'Persistent distress deserves assessment, not dismissal.',
          'Depression can affect fathers and partners as well as mothers.',
          'Early support reduces the risk of long-term strain on the family.',
        ],
        notes: [
          'Teach the difference between normal adjustment and a pattern that is becoming harder to manage.',
          'Be explicit that paternal postnatal depression exists and can be missed because symptoms may look like irritability or workaholism rather than tearfulness.',
        ],
      },
      {
        title: 'Support Should Be Easy to Access',
        bullets: [
          'Talk to a GP, health visitor, midwife or perinatal service if concerns persist.',
          'NHS talking therapies may help with anxiety, depression or panic.',
          'Support for the whole couple or family can be useful when conflict is growing.',
          'Practical help matters as much as emotional support.',
        ],
        notes: [
          'Make the route map concrete and parent-inclusive. Fathers often need permission and a clear entry point rather than a generic "seek help".',
          'Point out that many perinatal services and family supports can involve partners when needed.',
        ],
      },
      {
        title: 'Stigma Keeps Men Silent',
        bullets: [
          'Some men fear appearing weak, needy or incapable.',
          'Cultural ideas about masculinity can make help-seeking feel risky.',
          'Silence can become a coping strategy until the stress spills over.',
          'A non-judgemental conversation often opens the door.',
        ],
        notes: [
          'The help-seeking barrier is often shame, not lack of awareness. This slide should make that visible.',
          'Use language that allows men to seek support without feeling they have failed the parenting role.',
        ],
      },
      {
        title: 'A Low-Friction Support Plan',
        bullets: [
          'Pick one person to speak to, one small routine to protect and one thing to stop doing for a week.',
          'Use shared calendars, tag-team rest and practical check-ins.',
          'Keep expectations realistic while the baby is small.',
          'Review the plan rather than hoping the strain will simply disappear.',
        ],
        notes: [
          'Close with a simple plan that can work in real life. Parenting support is most useful when it is concrete and repeatable.',
          'That makes the session immediately practical for new fathers and co-parents.',
        ],
      },
    ],
    activity: `ACTIVITY - Low-Friction Support Plan (20 minutes)

Tutor steps:
1. Ask participants to imagine a new father who is sleeping badly, withdrawing from friends and snapping at his partner.
2. In pairs, build a support plan using three headings: rest, support contact and one practical change at home.
3. Ask pairs to identify what makes help-seeking hard for fathers and how to lower that barrier.
4. Debrief by comparing plans that protect both the parent and the relationship.`,
    discussionPrompts: [
      'Why is paternal distress often missed in maternity and early-years systems?',
      'What does "being the strong one" cost people when it stops them asking for help?',
      'How can services support fathers without sidelining mothers or the baby?',
      'Which practical change would most reduce stress in the first weeks after birth?',
    ],
    resources: [
      resource('NHS - Postnatal depression overview', 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/'),
      resource('NHS - Find care for your mental health before, during and after pregnancy', 'https://www.nhs.uk/nhs-services/mental-health-services/find-care-for-your-mental-health-before-during-and-after-pregnancy/'),
      resource('NHS England - Perinatal mental health', 'https://www.england.nhs.uk/mental-health/perinatal/'),
      resource('NHS England - Supporting partners and other family members in specialist perinatal mental health services', 'https://www.england.nhs.uk/mental-health/perinatal/perinatal-mental-health-resources/involving-and-supporting-partners-and-other-family-members-in-specialist-perinatal-mental-health-services-good-practice-guide/'),
      resource('NHS - Your mental health - Best Start in Life', 'https://www.nhs.uk/start-for-life/baby/your-mental-health/'),
    ],
    tutorNotes: `Facilitation:
Keep the conversation father-inclusive and parent-inclusive without implying that one parent is more important than another.

Safeguarding:
If the discussion reveals current risk, severe depression, substance use or thoughts of self-harm, move to support and signposting immediately.

Delivery caution:
Avoid framing the module as a masculinity lecture. Keep it on stress, support and practical help-seeking.`,
    powerPoint: `Tutor deck notes:
- Use partner-inclusive visuals, not only mother-and-baby imagery.
- Student slides should focus on practical stress management and support routes.
- Tutor notes should hold the nuance on paternal depression, sleep loss and family dynamics.`,
  }),
  32: guide({
    id: 32,
    topic: 'Maternal Mental Health and Perinatal Disorders',
    summary:
      'A bespoke perinatal module on maternal mental health, antenatal and postnatal depression, anxiety, OCD, psychosis, specialist pathways and the importance of early detection and family support.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and perinatal framing',
      'What perinatal mental health means',
      'Antenatal and postnatal disorders',
      'Risk, assessment and specialist routes',
      'Activity: build a perinatal care map',
      'Discussion on stigma, safety and bonding',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Perinatal Mental Health Is Time-Limited but High Impact',
        bullets: [
          'Perinatal mental health problems can occur during pregnancy and up to a year after birth.',
          'They include depression, anxiety, OCD, trauma, psychosis and relapse of severe mental illness.',
          'Early support protects the parent, baby and wider family.',
          'Mental health care in this period is an NHS priority.',
        ],
        notes: [
          'Open by defining the perinatal period clearly. The session should feel practical and important, not vague or overly medical.',
          'Make clear that the mental health of the parent matters because it shapes recovery, bonding and everyday family life.',
        ],
      },
      {
        title: 'Antenatal Distress Deserves Attention',
        bullets: [
          'Pregnancy can bring anxiety, depression, panic, trauma triggers or worsening pre-existing conditions.',
          'Fear about birth, finances, relationships or previous loss can intensify distress.',
          'People may hide symptoms because they think they should be happy.',
          'Assessment should start early rather than waiting for the postnatal period.',
        ],
        notes: [
          'This slide corrects the assumption that the postnatal period is the only time perinatal mental health matters.',
          'Normalise the fact that pregnancy can be emotionally complex and sometimes frightening.',
        ],
      },
      {
        title: 'Postnatal Depression and Anxiety Are Common',
        bullets: [
          'Postnatal depression can affect mothers, fathers and partners.',
          'Anxiety may show up as intrusive worry, panic, restlessness or checking behaviour.',
          'Baby blues are not the same as postnatal depression.',
          'Symptoms that persist or worsen need support.',
        ],
        notes: [
          'Be clear about the difference between short-lived baby blues and a depressive or anxious disorder.',
          'Use parent-inclusive language, but keep the primary focus on the person who is pregnant or has recently given birth.',
        ],
      },
      {
        title: 'Severe Perinatal Illness Needs Urgent Care',
        bullets: [
          'Postpartum psychosis, severe depression and relapse of bipolar disorder can be emergencies.',
          'Rapid change in sleep, thought, mood or behaviour after birth should be treated seriously.',
          'Some people need specialist perinatal mental health services or a mother and baby unit.',
          'Safety of parent and baby always comes first.',
        ],
        notes: [
          'This slide should be unequivocal about urgency. Severe perinatal illness is not something to watch passively.',
          'Name the care pathways so learners understand that specialist help exists and can be life-saving.',
        ],
      },
      {
        title: 'Assessment Should Be Active and Early',
        bullets: [
          'Ask about previous mental health history, trauma, current support and current safety.',
          'Review medication carefully in pregnancy and after birth.',
          'Do not assume low mood is "just hormones".',
          'If there is risk, escalation should be prompt and coordinated.',
        ],
        notes: [
          'Teach assessment as active, structured and timely. Waiting for things to get worse is not good perinatal care.',
          'Medication and treatment decisions should be reviewed in line with pregnancy and breastfeeding needs.',
        ],
      },
      {
        title: 'Bonding and Relationship Support Matter',
        bullets: [
          'Perinatal illness can affect bonding, confidence and family relationships.',
          'Support should include the wider family where appropriate.',
          'Parents should not be shamed for finding the first months overwhelming.',
          'Protecting sleep and practical help can improve wellbeing quickly.',
        ],
        notes: [
          'This slide keeps the module family-centred. The baby, partner and wider support system matter in perinatal care.',
          'Avoid implying that difficult feelings make somebody a bad parent.',
        ],
      },
      {
        title: 'Support Routes Are Specific and Real',
        bullets: [
          'Talk to a midwife, health visitor or GP if concerns arise.',
          'Specialist community perinatal mental health teams may provide assessment and treatment.',
          'Mother and baby units can support severe illness while keeping parent and baby together where needed.',
          'NHS talking therapies and local support can help milder or moderate problems.',
        ],
        notes: [
          'Make the route map concrete and specific. People should leave knowing who to contact first and what specialist pathways exist.',
          'This is a good place to remind learners that local pathways vary, but the core access points are similar.',
        ],
      },
      {
        title: 'Good Care Protects Dignity and Hope',
        bullets: [
          'Perinatal support should be person-centred, not judgemental.',
          'Early help reduces suffering and can improve outcomes for the whole family.',
          'Recovery is compatible with good parenting and bonding.',
          'Hope is strongest when treatment is timely and practical.',
        ],
        notes: [
          'Close with a hopeful, concrete message. The point is not perfection, but safer, better-supported family life.',
          'That closing helps reduce shame and supports early disclosure.',
        ],
      },
    ],
    activity: `ACTIVITY - Perinatal Care Map (20 minutes)

Tutor steps:
1. Give the group a short scenario involving pregnancy, low mood, sleep loss and fear about birth.
2. Ask them to map the first, second and specialist support steps in the local pathway.
3. Ask what information is essential to share with a midwife, GP or health visitor.
4. Debrief by comparing what helps early support happen quickly.`,
    discussionPrompts: [
      'Why are perinatal mental health problems missed when people assume pregnancy should feel joyful?',
      'How can services protect the parent-baby relationship while treating serious illness?',
      'What helps people disclose mental health problems earlier in pregnancy or after birth?',
      'What should happen differently when symptoms become severe or psychotic?',
    ],
    resources: [
      resource('NHS England - Perinatal mental health', 'https://www.england.nhs.uk/mental-health/perinatal/'),
      resource('NICE - Antenatal and postnatal mental health: clinical management and service guidance', 'https://www.nice.org.uk/guidance/cg192'),
      resource('NHS - Find care for your mental health before, during and after pregnancy', 'https://www.nhs.uk/nhs-services/mental-health-services/find-care-for-your-mental-health-before-during-and-after-pregnancy/'),
      resource('NHS - Postnatal depression overview', 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/'),
      resource('NHS England - Perinatal mental health resources', 'https://www.england.nhs.uk/mental-health/perinatal/perinatal-mental-health-resources/'),
    ],
    tutorNotes: `Facilitation:
Keep the discussion parent-centred and family-centred. Perinatal distress is common enough that the room may include lived experience.

Safeguarding:
Any sign of postpartum psychosis, suicidal thinking or inability to care for self or baby should trigger urgent action.

Delivery caution:
Avoid overusing "maternal instinct" language. Keep the teaching clinically respectful and practical.`,
    powerPoint: `Tutor deck notes:
- Use clear perinatal pathway visuals and avoid overwhelming slide density.
- Student slides should show the pathway from GP or midwife to specialist support.
- Tutor notes should hold the nuance on medication, breastfeeding and urgent escalation.`,
  }),
  33: guide({
    id: 33,
    topic: 'Child and Adolescent Mental Health',
    summary:
      'A child and adolescent module on development, anxiety, depression, self-harm, neurodevelopmental overlap, family support, school context and when to escalate to CAMHS or urgent help.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and developmental framing',
      'What mental health looks like in children and teens',
      'Anxiety, depression and self-harm',
      'Family, school and developmental context',
      'Activity: build a CAMHS support plan',
      'Discussion on thresholds, safeguarding and hope',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Children and Young People Present Differently',
        bullets: [
          'Children may show distress through behaviour, sleep, school refusal, irritability, physical complaints or withdrawal.',
          'Teenagers may show risk-taking, low mood, conflict or secrecy.',
          'The same diagnosis can look very different at different ages.',
          'Developmental stage matters.',
        ],
        notes: [
          'Open by reminding the group that young people are not small adults. Symptoms often present through behaviour and relationships as much as through verbal description.',
          'This slide helps parents, teachers and volunteers avoid misreading distress as simply "bad behaviour".',
        ],
      },
      {
        title: 'Anxiety Is Often the First Sign',
        bullets: [
          'Anxiety in young people may show up as worry, avoidance, school refusal, reassurance-seeking or physical symptoms.',
          'Panic and trauma responses can also appear.',
          'Avoidance can accidentally make anxiety grow.',
          'Early support can prevent school and social withdrawal from hardening.',
        ],
        notes: [
          'Teach anxiety in concrete terms. The pattern often begins before the child can explain it well.',
          'Make the role of school attendance and routine visible without sounding punitive.',
        ],
      },
      {
        title: 'Low Mood, Depression and Self-Harm',
        bullets: [
          'Depression may present as irritability, tearfulness, sleep change, loss of interest or withdrawal.',
          'Self-harm should always be taken seriously.',
          'Some young people self-harm to cope with overwhelming emotion, not to die.',
          'Suicidal thoughts still require urgent attention.',
        ],
        notes: [
          'This slide needs to be direct and safety-oriented. The room should leave knowing that self-harm is not "attention seeking" and should always be responded to carefully.',
          'Keep the distinction between self-harm and suicide clear without minimising either.',
        ],
      },
      {
        title: 'Family Context Matters',
        bullets: [
          'Children and teens are shaped by family stress, attachment, abuse, conflict and wider instability.',
          'Parental mental health, money stress and housing problems can all affect a young person.',
          'Support should involve the family when safe and appropriate.',
          'The child is not the cause of every problem around them.',
        ],
        notes: [
          'Use a systems lens. Young people live inside families, schools and communities that strongly shape wellbeing.',
          'Be careful not to blame parents while still naming safeguarding concerns when they exist.',
        ],
      },
      {
        title: 'School Can Be Protective or Stressful',
        bullets: [
          'School environment, relationships and workload can either support or intensify distress.',
          'Attendance concerns may reflect anxiety, bullying, learning needs or neurodevelopmental difference.',
          'Good school support can reduce escalation.',
          'Poor responses can make problems much worse.',
        ],
        notes: [
          'This slide helps bridge mental health and education. School staff often need to think about access, consistency and early support rather than only behaviour management.',
          'Bullying, exclusion and academic overwhelm are common drivers of distress.',
        ],
      },
      {
        title: 'CAMHS and Other Routes',
        bullets: [
          'GPs, school staff, health visitors and local services may all be entry points.',
          'CAMHS provides specialist assessment and treatment for some children and young people.',
          'Urgent help is needed if there is immediate risk or rapid deterioration.',
          'The pathway may differ by local area, but escalation should never be vague.',
        ],
        notes: [
          'Make the route map concrete and realistic. Families often struggle to know where to go and how the system fits together.',
          'This slide should reduce confusion rather than add to it.',
        ],
      },
      {
        title: 'Neurodevelopmental Overlap Is Common',
        bullets: [
          'Autism, ADHD, learning difficulties and trauma can overlap with anxiety, depression and behavioural difficulties.',
          'Diagnostic overshadowing can happen in both directions.',
          'Assessment should consider development, school context and family history.',
          'A young person needs a whole-picture response.',
        ],
        notes: [
          'Teach overlap so the group does not reduce young people to one label.',
          'The whole-picture response is especially important in CAMHS because presentations often span school, home and health services.',
        ],
      },
      {
        title: 'Hope Comes From Early, Joined-Up Help',
        bullets: [
          'Most young people improve when support is timely and coordinated.',
          'The goal is not to pathologise normal development.',
          'The goal is to notice problems early enough to reduce harm.',
          'A caring adult relationship can change outcomes significantly.',
        ],
        notes: [
          'Close with hope but keep it grounded. Early help really does matter, especially when adults around the child stay connected and responsive.',
          'That gives the module a clear and practical ending.',
        ],
      },
    ],
    activity: `ACTIVITY - CAMHS Support Plan (20 minutes)

Tutor steps:
1. Give the group a brief case involving school refusal, sleep disruption and low mood in a teenager.
2. Ask them to plan support under four headings: immediate safety, home support, school support and referral route.
3. Ask what would make the difference between watchful support and urgent escalation.
4. Debrief by comparing the role of the family, school and health services.`,
    discussionPrompts: [
      'Why do children and teenagers often show distress through behaviour rather than words?',
      'What is the difference between normal developmental change and a mental health problem?',
      'How should schools respond when anxiety or self-harm is affecting attendance?',
      'What helps a young person feel heard when adults are worried about them?',
    ],
    resources: [
      resource('NHS - Children and young people mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/children-and-young-peoples-mental-health-services-cypmhs/'),
      resource('NHS - Self-harm', 'https://www.nhs.uk/mental-health/conditions/self-harm/'),
      resource('NICE - Depression in children and young people: identification and management', 'https://www.nice.org.uk/guidance/ng134'),
      resource('NICE - Self-harm: assessment, management and preventing recurrence', 'https://www.nice.org.uk/guidance/ng225'),
      resource('NHS - Mental health support for children and young people', 'https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/'),
    ],
    tutorNotes: `Facilitation:
Use a child-centred, family-aware tone. Young people may be present, as may parents and professionals.

Safeguarding:
Any concern about immediate risk, abuse or severe deterioration should be escalated without delay.

Delivery caution:
Do not over-pathologise ordinary adolescence. Focus on impairment, duration and functional impact.`,
    powerPoint: `Tutor deck notes:
- Use age-appropriate, low-clutter slides.
- Student slides should keep the route map simple and the warning signs clear.
- Tutor notes should hold the nuance around family context, school support and safeguarding.`,
  }),
  34: guide({
    id: 34,
    topic: 'Older Adult Mental Health',
    summary:
      'A later-life module on depression, anxiety, dementia, delirium, loneliness, bereavement, physical health overlap and practical support for older adults and carers.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and later-life framing',
      'What older adult mental health looks like',
      'Depression, anxiety and loneliness',
      'Dementia, delirium and physical health overlap',
      'Activity: design a later-life support plan',
      'Discussion on dignity, carers and access',
      'Wrap-up, signposting and next steps',
    ]),
    slides: [
      {
        title: 'Mental Health Does Not Stop in Later Life',
        bullets: [
          'Older adults can experience depression, anxiety, grief, trauma, psychosis and cognitive decline.',
          'Physical illness, pain and isolation can affect mood and thinking.',
          'Symptoms are often missed because people assume they are "just ageing".',
          'Late-life distress deserves proper assessment.',
        ],
        notes: [
          'Open by challenging the ageist assumption that emotional distress is expected and therefore less important in later life.',
          'Teach that older adults often present with a combination of health, social and mental health needs.',
        ],
      },
      {
        title: 'Depression Can Look Different in Older Adults',
        bullets: [
          'Depression may show as withdrawal, apathy, sleep change, pain, poor appetite or loss of interest.',
          'Bereavement, retirement and physical illness can contribute.',
          'Depression is not an inevitable part of ageing.',
          'Treatment can help at any age.',
        ],
        notes: [
          'Explain that low mood may be expressed less as sadness and more as loss of energy or enjoyment.',
          'This is important because late-life depression is frequently under-recognised.',
        ],
      },
      {
        title: 'Loneliness and Bereavement Matter',
        bullets: [
          'Loneliness can intensify depression, anxiety and physical decline.',
          'Bereavement is common and can be deeply destabilising.',
          'Social connection protects mental health.',
          'Grief support may be as important as clinical treatment.',
        ],
        notes: [
          'This slide helps the group see that mental health in later life is often shaped by loss of people, roles and routines.',
          'Keep the response practical and compassionate rather than sentimental.',
        ],
      },
      {
        title: 'Dementia and Delirium Need Clear Distinction',
        bullets: [
          'Dementia is usually gradual and progressive.',
          'Delirium is sudden and often medically caused.',
          'Sudden confusion, changes in attention or agitation need urgent review.',
          'Not every memory problem is dementia, and not every confusion is psychiatric.',
        ],
        notes: [
          'This slide is essential because older adults are often misdiagnosed when acute medical issues are mistaken for psychiatric ones.',
          'Repeat the key rule: sudden change equals urgent assessment.',
        ],
      },
      {
        title: 'Physical Health and Medication Reviews Matter',
        bullets: [
          'Pain, hearing loss, sight loss, medication side effects and infection can affect mental health.',
          'Regular medication review can prevent avoidable harm.',
          'Sleep, hydration and mobility also matter.',
          'Holistic assessment works better than symptom-only thinking.',
        ],
        notes: [
          'Use this slide to show how tightly physical and mental health are linked in later life.',
          'Avoid treating older adults as if they are only a cognitive or mood problem.',
        ],
      },
      {
        title: 'Carers Need Support Too',
        bullets: [
          'Family carers often carry large practical and emotional burdens.',
          'Carers may need respite, information and planning support.',
          'Respecting the older person does not mean ignoring the carer.',
          'Good communication helps everyone.',
        ],
        notes: [
          'This slide should keep the balance: carers matter, but the older adult remains the central person.',
          'Support should reduce strain without taking away autonomy unnecessarily.',
        ],
      },
      {
        title: 'Access and Dignity in Older Age',
        bullets: [
          'Older adults may face barriers such as transport, digital exclusion and ageism.',
          'Clear communication and slower pacing can help.',
          'Community, routine and meaningful activity support wellbeing.',
          'Services should not assume low expectations.',
        ],
        notes: [
          'Highlight practical access barriers. Older adults often need slower, clearer and more respectful support, not simplified assumptions.',
          'Ageism can hide serious need, so it should be named directly.',
        ],
      },
      {
        title: 'Hope, Meaning and Function',
        bullets: [
          'Later life can still include growth, recovery and connection.',
          'Meaningful activity protects mental health.',
          'Support works best when it preserves dignity and independence.',
          'Hope should be realistic and age-inclusive.',
        ],
        notes: [
          'Close with a respectful recovery frame. Later life care should never imply that quality of life no longer matters.',
          'That gives the module a strong ending for carers and professionals alike.',
        ],
      },
    ],
    activity: `ACTIVITY - Later-Life Support Plan (20 minutes)

Tutor steps:
1. Give the group a case involving loneliness, falls, memory concern and low mood in an older adult.
2. Ask them to plan support under four headings: medical review, daily support, social connection and carer support.
3. Ask what would make delirium a more urgent concern than depression or dementia.
4. Debrief by identifying one dignity-preserving change the service could make.`,
    discussionPrompts: [
      'Why is depression in older adults missed so often?',
      'How can we separate normal ageing from a treatable mental health problem?',
      'What supports reduce loneliness without making assumptions about what older adults want?',
      'How should services involve carers while protecting autonomy and dignity?',
    ],
    resources: [
      resource('NHS - Depression in adults', 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/'),
      resource('NHS - What is dementia?', 'https://www.nhs.uk/conditions/dementia/about-dementia/what-is-dementia/'),
      resource('NHS - Memory loss (amnesia)', 'https://www.nhs.uk/conditions/memory-loss-amnesia/'),
      resource('NICE - Dementia: assessment, management and support for people living with dementia and their carers', 'https://www.nice.org.uk/guidance/ng97'),
      resource('NICE - Depression in adults: treatment and management', 'https://www.nice.org.uk/guidance/ng222'),
      resource('NICE - Delirium: prevention, diagnosis and management', 'https://www.nice.org.uk/guidance/cg103'),
    ],
    tutorNotes: `Facilitation:
Avoid ageist assumptions and speak directly to the older adult in the room as a full participant.

Safeguarding:
Sudden confusion, falls or inability to self-care may require urgent medical escalation.

Delivery caution:
Do not frame loneliness or grief as minor just because they are common.`,
    powerPoint: `Tutor deck notes:
- Use clean contrast and larger text for accessibility.
- Student slides should prioritise clear distinctions between depression, dementia and delirium.
- Tutor notes should hold the nuance on carers, medication review and ageism.`,
  }),
  35: guide({
    id: 35,
    topic: 'LGBTQIA+ Mental Health',
    summary:
      'A minority-stress-informed module on LGBTQIA+ mental health, coming out, family response, discrimination, identity safety, community support and inclusive practice in UK services.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and inclusive language',
      'Minority stress and mental health',
      'Coming out, family response and safety',
      'Discrimination, healthcare and school/work experiences',
      'Activity: build an inclusive support response',
      'Discussion on affirmation, community and resilience',
      'Wrap-up, signposting and next steps',
    ]),
    slides: [
      {
        title: 'LGBTQIA+ Mental Health Is Shaped by Context',
        bullets: [
          'Identity itself is not the problem; stigma and exclusion are.',
          'Minority stress can build over time through rejection, concealment and discrimination.',
          'People may need support with both identity-related stress and ordinary mental health concerns.',
          'Inclusive care improves safety and engagement.',
        ],
        notes: [
          'Open by separating identity from harm. The module should not imply that being LGBTQIA+ causes distress; stigma and social pressure do.',
          'That framing is important for keeping the teaching accurate and affirming.',
        ],
      },
      {
        title: 'Minority Stress Can Be Chronic',
        bullets: [
          'Repeated microaggressions, exclusion and fear of rejection can erode wellbeing.',
          'Concealment may protect safety in the short term but can increase stress.',
          'People can experience anxiety, depression, shame or isolation without obvious single events.',
          'The pressure may accumulate across home, school, work and healthcare.',
        ],
        notes: [
          'Teach minority stress as a cumulative burden. This helps the group understand why problems may appear without one dramatic trigger.',
          'Use examples that feel ordinary and recognisable, not only extreme hate-crime narratives.',
        ],
      },
      {
        title: 'Coming Out Is Not One Event',
        bullets: [
          'Coming out can be repeated, selective and context-dependent.',
          'Safety, timing and family response matter greatly.',
          'Some people need support to assess whether disclosure is safe.',
          'A bad response can have long-lasting mental health effects.',
        ],
        notes: [
          'This slide keeps the discussion grounded in safety rather than a simple "be brave" narrative.',
          'It also helps the room understand why disclosure is often strategic and cautious.',
        ],
      },
      {
        title: 'Family, School and Work Responses Matter',
        bullets: [
          'Affirming responses protect mental health.',
          'Rejection, bullying or forced concealment increase risk.',
          'Schools, employers and services should not assume everyone is heterosexual or cisgender.',
          'The first response often sets the tone for later wellbeing.',
        ],
        notes: [
          'Teach the social environment as a key mental health factor. The same identity can be protected or harmed depending on the surrounding response.',
          'Avoid blaming families without also naming where support can improve.',
        ],
      },
      {
        title: 'Healthcare Must Be Safe and Competent',
        bullets: [
          'Assumptions, misgendering and dismissive responses can deter people from seeking help.',
          'Inclusive records, pronouns and confidentiality matter.',
          'Mental health care should be person-centred and identity-aware.',
          'Trauma from previous healthcare encounters is common and relevant.',
        ],
        notes: [
          'Make the healthcare angle practical. Small changes in language and process can have a big impact on engagement.',
          'The teaching should feel respectful and specific rather than generic diversity messaging.',
        ],
      },
      {
        title: 'Community Connection Can Be Protective',
        bullets: [
          'Peer support, chosen family and community spaces can buffer stress.',
          'Some people benefit from LGBTQIA+ specific support services.',
          'Identity affirmation is protective, not optional fluff.',
          'The right support depends on the person and their context.',
        ],
        notes: [
          'This slide keeps the module from becoming only about harm. Community connection and affirmation are major protective factors.',
          'Be careful not to imply one community route suits everyone.',
        ],
      },
      {
        title: 'Intersectionality Changes the Picture',
        bullets: [
          'Race, disability, faith, class, age and migration status can change the experience of stigma.',
          'Some people face multiple forms of exclusion at once.',
          'A single-identity lens misses real barriers.',
          'Support needs to stay specific and intersectional.',
        ],
        notes: [
          'The module should recognise that no one lives one identity at a time.',
          'This helps avoid oversimplifying the mental health impact of discrimination.',
        ],
      },
      {
        title: 'Inclusive Practice Is Concrete',
        bullets: [
          'Ask, do not assume, and respect names and pronouns.',
          'Keep confidentiality clear.',
          'Challenge stigma directly when it appears.',
          'Offer affirmation, safety and practical routes to support.',
        ],
        notes: [
          'Close with practical actions. Inclusion should feel like a behaviour set, not just a value statement.',
          'That makes the module useful for services, schools, workplaces and peer groups alike.',
        ],
      },
    ],
    activity: `ACTIVITY - Inclusive Support Response (20 minutes)

Tutor steps:
1. Give the group a scenario involving a young person or adult who is anxious about disclosure at home or work.
2. Ask them to design a first response that protects safety, respects identity and offers practical support.
3. Ask them to identify one language change and one process change that would make services safer.
4. Debrief by comparing what affirmation looks like in practice.`,
    discussionPrompts: [
      'Why does concealment sometimes feel safer than disclosure?',
      'What does an affirming service do differently from a merely tolerant one?',
      'How can families support someone without making identity the focus of every conversation?',
      'Which part of the system most needs to change: language, policy, confidentiality or access?',
    ],
    resources: [
      resource('NHS - Mental health support for LGBTQIA+ people', 'https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/mental-health-support-for-lgbtq-people/'),
      resource('NHS - LGBTQ+ health', 'https://www.nhs.uk/nhs-services/mental-health-services/mental-health-support-for-lgbtq-people/'),
      resource('NHS England - LGBT+ health', 'https://www.england.nhs.uk/about/equality/equality-hub/nhs-people-plan-and-workforce-race-equality-standard/nhs-lgbt-health/'),
      resource('NHS - Mental health support for children and young people', 'https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/'),
    ],
    tutorNotes: `Facilitation:
Use inclusive language, respect confidentiality and do not assume everyone in the room is straight or cisgender.

Safeguarding:
If the discussion reveals family rejection, self-harm risk or immediate safety issues, move into support rather than abstract discussion.

Delivery caution:
Keep the module affirming without turning it into a culture-war debate. The purpose is safety, access and mental health support.`,
    powerPoint: `Tutor deck notes:
- Use inclusive but calm visuals with no tokenism.
- Student slides should emphasise minority stress, safety and support routes.
- Tutor notes should hold the nuance on disclosure, family response and intersectionality.`,
  }),
};
