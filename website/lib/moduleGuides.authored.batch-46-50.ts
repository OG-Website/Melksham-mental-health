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

export const AUTHORED_MODULE_GUIDES_BATCH_46_50: Record<number, ModuleGuide> = {
  46: guide({
    id: 46,
    topic: 'Climate Anxiety and Eco-distress',
    summary:
      'A UK-focused module on climate anxiety, eco-distress, grief, anger, overwhelm and practical coping that treats climate concern as a real emotional response rather than a pathology by default.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and emotional safety framing',
      'What climate anxiety and eco-distress are',
      'Grief, anger, guilt and helplessness',
      'When distress becomes impairment or crisis',
      'Activity: map concern into action and support',
      'Discussion on hope, action and burnout',
      'Wrap-up, resources and next steps',
    ]),
    slides: [
      {
        title: 'Climate Distress Is a Rational Response to a Real Threat',
        bullets: [
          'Climate anxiety and eco-distress can arise from exposure to climate news, lived experience of extreme weather or concern for the future.',
          'A strong emotional response does not automatically mean a disorder.',
          'The question is whether distress is becoming overwhelming, disabling or unsafe.',
          'Concern can be adaptive as well as painful.',
        ],
        notes: [
          'Open by validating the reality of the threat. The teaching should not pathologise care about the climate.',
          'Keep the distinction clear between a normal response to a difficult situation and distress that has become impairing.',
        ],
      },
      {
        title: 'Climate Anxiety Often Includes Mixed Emotions',
        bullets: [
          'People may feel fear, grief, anger, guilt, shame or helplessness at the same time.',
          'Flooding, heat and local environmental loss can make the issue feel immediate.',
          'Children and young people may be especially affected by future-focused worry.',
          'The emotional mix is often difficult to organise into words.',
        ],
        notes: [
          'This slide helps learners recognise that climate distress is not just "worry" in a narrow sense. It can include mourning, moral pain and frustration.',
          'Link the emotional response to specific experiences, not to vague sensitivity.',
        ],
      },
      {
        title: 'Information Overload Can Make Things Worse',
        bullets: [
          'Constant exposure to catastrophic content can intensify distress and paralysis.',
          'Avoidance can reduce distress short term but increase helplessness long term.',
          'Rumination without action can deepen despair.',
          'Boundaries around media and conversation can help.',
        ],
        notes: [
          'Explain the cycle: information, overwhelm, avoidance or panic, then more overwhelm.',
          'This makes it easier to teach media boundaries without seeming dismissive.',
        ],
      },
      {
        title: 'Action Can Protect Mental Health',
        bullets: [
          'Small, realistic action can reduce helplessness.',
          'Community involvement, volunteering and local adaptation work may help some people.',
          'Action is not a cure-all, but it can restore agency.',
          'People need options that match their capacity and values.',
        ],
        notes: [
          'A key teaching move is to move from global concern to concrete agency. That may be activism, practical household change, or simply better boundaries and support.',
          'Do not imply everyone should become an activist. The point is meaningful action, not pressure.',
        ],
      },
      {
        title: 'Eco-Grief and Loss Need Space',
        bullets: [
          'People may grieve species loss, landscape change or the future they expected to have.',
          'Grief can be private, communal or mixed with anger.',
          'Normalising grief can reduce shame and isolation.',
          'Supportive conversation should allow loss without rushing to fix it.',
        ],
        notes: [
          'This slide makes room for mourning. The topic is not only about fear; it is also about loss.',
          'Avoid overcorrecting with positivity. That can make people feel unseen.',
        ],
      },
      {
        title: 'When It Becomes a Mental Health Problem',
        bullets: [
          'Escalate concern when distress causes sleep loss, panic, hopelessness, avoidance or inability to function.',
          'People with existing anxiety, depression or trauma may be more vulnerable to eco-distress.',
          'Risk assessment should still consider self-harm and safety when needed.',
          'Support may need to cover both climate concern and broader mental health needs.',
        ],
        notes: [
          'This slide keeps the module clinically responsible. The issue is not climate concern itself but the point at which it becomes clinically impairing.',
          'Keep the assessment lens broad enough to include pre-existing vulnerabilities.',
        ],
      },
      {
        title: 'A Balanced Response: Meaning, Action and Rest',
        bullets: [
          'A healthy response usually needs meaning, rest and realistic action.',
          'Burnout can happen when care becomes constant crisis exposure.',
          'Values-based action works better than guilt-based pressure.',
          'Community support can reduce isolation.',
        ],
        notes: [
          'Close by emphasising balance. People need permission to care without becoming consumed.',
          'That balance is the real anti-burnout message in this module.',
        ],
      },
      {
        title: 'Support Routes and Signposting',
        bullets: [
          'GP, NHS talking therapies and local mental health services can help when distress is persistent or impairing.',
          'UKHSA and NHS sources can support understanding of climate-related mental health impacts.',
          'If the person is in crisis, urgent mental health routes should be used.',
          'No one should be told their distress is silly or overreactive.',
        ],
        notes: [
          'End with a practical route map. Climate distress should be met with respect and, where needed, proper mental health support.',
          'That keeps the module grounded and useful.',
        ],
      },
    ],
    activity: `ACTIVITY - From Overwhelm to Agency (20 minutes)

Tutor steps:
1. Ask participants to identify one climate-related worry that feels overwhelming.
2. In pairs, map the worry into three columns: what is out of my control, what is within my influence and what support I need.
3. Ask each pair to choose one rest strategy and one action strategy.
4. Debrief by comparing what reduces helplessness without pretending the problem is small.`,
    discussionPrompts: [
      'When does climate concern become a form of helplessness rather than useful care?',
      'How do people protect themselves from doomscrolling without becoming disconnected?',
      'What kinds of action restore agency without burning people out?',
      'How should services respond when climate grief is entwined with depression or anxiety?',
    ],
    resources: [
      resource('GOV.UK - Climate change and mental health collection', 'https://www.gov.uk/government/collections/climate-change-and-mental-health'),
      resource('GOV.UK - Climate change and mental health report', 'https://www.gov.uk/government/publications/climate-change-and-mental-health-report'),
      resource('GOV.UK - Overview of the climate change and mental health report', 'https://www.gov.uk/guidance/overview-of-the-climate-change-and-mental-health-report'),
      resource('WHO - Why mental health is a priority for action on climate change', 'https://www.who.int/news/item/03-06-2022-why-mental-health-is-a-priority-for-action-on-climate-change'),
      resource('NHS England - 4th Health and climate adaptation report', 'https://www.england.nhs.uk/long-read/4th-health-and-climate-adaptation-report/'),
    ],
    tutorNotes: `Facilitation:
Validate the reality of climate distress. Do not imply the concern is irrational or trendy.

Safeguarding:
If the discussion moves toward hopelessness, self-harm or severe functional decline, pause and respond clinically.

Delivery caution:
Do not turn the module into a debate on climate politics. Keep it on emotional response, coping and support.`,
    powerPoint: `Tutor deck notes:
- Use restrained visuals and avoid apocalyptic imagery.
- Student slides should make the action vs overwhelm distinction obvious.
- Tutor notes should hold the nuance on grief, agency and crisis thresholds.`,
  }),
  47: guide({
    id: 47,
    topic: 'Spirituality and Meaning',
    summary:
      'A module on meaning, spirituality, religion, chaplaincy and values-based support that treats faith and non-faith perspectives with equal respect and keeps clear boundaries around care and proselytising.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and definitions',
      'Meaning, purpose and spirituality',
      'Religion, faith, doubt and change',
      'Crisis, bereavement and chaplaincy support',
      'Activity: values and meaning mapping',
      'Discussion on boundaries and inclusion',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Spirituality Is Broader Than Religion',
        bullets: [
          'Spirituality can include meaning, purpose, connection, hope and values.',
          'Religion may be one expression of spirituality, but not the only one.',
          'People can be spiritual, religious, both or neither.',
          'Good practice asks what matters to the person.',
        ],
        notes: [
          'Open by separating spirituality from religion so the module feels inclusive from the start.',
          'The point is not to define people into categories, but to understand what gives them meaning and steadiness.',
        ],
      },
      {
        title: 'Meaning Can Protect Mental Health',
        bullets: [
          'A sense of purpose and belonging can buffer distress.',
          'Meaning may come from family, community, faith, work, creativity or service.',
          'Loss of meaning can increase hopelessness.',
          'People often recover better when values are visible in care.',
        ],
        notes: [
          'Teach meaning as a real psychological support, not as an abstract idea.',
          'This slide helps the room see that spiritual care is often about what keeps people going, especially in long illness or bereavement.',
        ],
      },
      {
        title: 'Religion Can Be a Source of Support and Strain',
        bullets: [
          'Faith can offer comfort, community and structure.',
          'It can also be a source of conflict, guilt or exclusion when beliefs are weaponised.',
          'Doubt, change and spiritual distress are normal human experiences.',
          'The right support is patient and non-judgemental.',
        ],
        notes: [
          'Keep the module balanced. Religion is not automatically positive or negative for mental health.',
          'The goal is to avoid simplification and listen carefully to what the person actually experiences.',
        ],
      },
      {
        title: 'Crisis and Loss Often Raise Spiritual Questions',
        bullets: [
          'Bereavement, trauma, psychosis, illness and fear of death can raise questions of meaning, guilt and hope.',
          'People may want prayer, ritual, quiet or simply a listening ear.',
          'Spiritual questions should not be dismissed as "not clinical".',
          'The response should be gentle and person-led.',
        ],
        notes: [
          'This slide makes spiritual care feel clinically relevant. In crisis, questions of meaning often become very active.',
          'Keep the focus on listening and matching support to the person, not on supplying fixed answers.',
        ],
      },
      {
        title: 'Chaplaincy Can Support All Beliefs',
        bullets: [
          'NHS chaplaincy supports people of faith and people of no faith.',
          'It can help with listening, ritual, prayer, quiet space and support around difficult questions.',
          'Chaplaincy works alongside clinical care, not instead of it.',
          'Referral should be offered, not imposed.',
        ],
        notes: [
          'Explain chaplaincy clearly so staff know it is not only for one religion or for end-of-life care.',
          'This helps normalise spiritual support as part of whole-person care.',
        ],
      },
      {
        title: 'Boundaries Matter',
        bullets: [
          'Care should never become proselytising or coercive.',
          'Staff should ask permission before exploring spiritual topics in depth.',
          'Religion and spirituality should not be assumed from appearance or background.',
          'The person sets the pace.',
        ],
        notes: [
          'This is a vital safety and professionalism slide. Spiritual care should be offered respectfully and with consent.',
          'Clear boundaries keep the module ethical and inclusive.',
        ],
      },
      {
        title: 'Meaning-Based Support Can Be Practical',
        bullets: [
          'Values, gratitude, service, ritual, nature and creativity can all be grounding.',
          'People may find meaning in helping others, routine or reflective practice.',
          'The right approach differs by person.',
          'The aim is steadiness, not ideology.',
        ],
        notes: [
          'This slide helps translate spirituality into everyday supports.',
          'Do not present any one meaning-making practice as universally superior.',
        ],
      },
      {
        title: 'Signposting and Inclusion',
        bullets: [
          'Offer chaplaincy, faith-specific support or non-religious values-based support when useful.',
          'Respect names, beliefs, rituals and privacy.',
          'Do not assume people with mental illness are less spiritual or less able to reflect.',
          'Whole-person care includes meaning.',
        ],
        notes: [
          'Close by reinforcing that spiritual care is a legitimate part of whole-person mental health support.',
          'That gives the module a practical ending rather than an abstract one.',
        ],
      },
    ],
    activity: `ACTIVITY - Values and Meaning Map (20 minutes)

Tutor steps:
1. Ask participants to identify three things that give a person meaning in difficult times.
2. In pairs, map how those sources of meaning can be supported during illness, grief or crisis.
3. Ask what the service should not assume about religion, belief or spirituality.
4. Debrief by comparing what good spiritual care looks like in practice.`,
    discussionPrompts: [
      'Why does meaning matter so much when people are ill, grieving or in crisis?',
      'How can staff explore spirituality respectfully without imposing their own beliefs?',
      'What is the difference between spiritual care and proselytising?',
      'How should services support both religious and non-religious people well?',
    ],
    resources: [
      resource('NHS England - NHS Chaplaincy Programme', 'https://www.england.nhs.uk/chaplaincy/'),
      resource('Lincolnshire Partnership NHS Trust - Chaplaincy and spiritual care', 'https://www.lpft.nhs.uk/contact-us/support/chaplaincy-and-spiritual-care'),
      resource('NELFT NHS Foundation Trust - Spiritual and pastoral care', 'https://www.nelft.nhs.uk/spiritual-and-pastoral-care/'),
      resource('Avon and Wiltshire Mental Health Partnership NHS Trust - Pastoral, religious and spiritual care', 'https://www.awp.nhs.uk/patients-and-carers/pastoral-religious-and-spiritual-care'),
      resource('Tees Esk and Wear Valleys NHS Foundation Trust - Spirituality', 'https://www.tewv.nhs.uk/about-your-care/health-wellbeing/spirituality/'),
    ],
    tutorNotes: `Facilitation:
Use inclusive language and do not assume religious belief from culture, family background or appearance.

Safeguarding:
If spiritual content surfaces delusions, self-harm or coercive abuse, respond clinically and do not stay in abstract meaning-making.

Delivery caution:
Do not let the module drift into theology. Keep it about meaning, values, care and boundaries.`,
    powerPoint: `Tutor deck notes:
- Use calm, reflective visuals and avoid religious symbolism that could alienate people.
- Student slides should define spirituality broadly and inclusively.
- Tutor notes should hold the boundary between support and proselytising.`,
  }),
  48: guide({
    id: 48,
    topic: "Men's Mental Health and Masculinity",
    summary:
      'A male-focused module on masculinity, stigma, loneliness, suicide risk, substance use, relationships and practical help-seeking that uses current UK policy and NHS access routes rather than stereotypes.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and non-judgemental framing',
      'Masculinity, silence and help-seeking',
      'Isolation, stress, relationships and substance use',
      'Suicide risk and practical support routes',
      'Activity: build a low-friction help route',
      'Discussion on identity, shame and change',
      'Wrap-up, resources and next steps',
    ]),
    slides: [
      {
        title: 'Men\'s Mental Health Is a Real Health Issue',
        bullets: [
          'Men can experience depression, anxiety, trauma, substance use problems and suicidal distress.',
          'Problems are often under-recognised because men may present differently.',
          'The issue is not men themselves; it is the combination of pressure, silence and stigma.',
          'Men need support that is practical, accessible and non-judgemental.',
        ],
        notes: [
          'Open by moving away from caricatures. The purpose is not to blame masculinity, but to understand how norms and expectations shape help-seeking.',
          'Make the point that men often do seek help, but too often later than they need to.',
        ],
      },
      {
        title: 'Silence Can Look Like Coping',
        bullets: [
          'Men may hide distress through work, humour, irritability, drinking or withdrawal.',
          'Help-seeking can feel like failure or weakness if the culture around them says so.',
          'Some men only disclose when the pressure is already severe.',
          'Low-friction support routes matter.',
        ],
        notes: [
          'This slide helps participants recognise disguised distress. Workaholism, anger or drinking can all function as concealment.',
          'Keep the tone curious rather than accusatory.',
        ],
      },
      {
        title: 'Isolation, Relationships and Life Pressure',
        bullets: [
          'Loneliness, breakup, fatherhood stress, unemployment and financial pressure can all increase risk.',
          'Men may have fewer emotionally open contacts than they need.',
          'Relationship breakdown can be a major trigger for crisis.',
          'Practical support often opens the door to emotional support.',
        ],
        notes: [
          'Use this slide to connect mental health with ordinary life transitions.',
          'It should feel concrete and relatable rather than clinical and abstract.',
        ],
      },
      {
        title: 'Substance Use Often Sits in the Picture',
        bullets: [
          'Alcohol and drugs can be used to reduce stress, numb shame or maintain social connection.',
          'Use can become part of the coping strategy even when it causes harm.',
          'Men are more likely to have substance-related risk alongside mental health issues.',
          'Shame makes honest discussion harder.',
        ],
        notes: [
          'Tie this slide back to earlier substance-use teaching, but keep the focus on masculine coping and its costs.',
          'Avoid moralising. The question is what the substance is doing for the person and what it is costing them.',
        ],
      },
      {
        title: 'Suicide Prevention Needs Action, Not Platitudes',
        bullets: [
          'Men account for the majority of suicide deaths in England.',
          'Direct, calm questions about suicidal thoughts can save lives.',
          'Safety planning and urgent routes matter when risk is high.',
          'Delayed help should never be treated as normal or inevitable.',
        ],
        notes: [
          'This slide should be explicit and grounded. Suicide risk is a core reason this module matters.',
          'Do not use fear to motivate; use clarity and practical action.',
        ],
      },
      {
        title: 'Low-Friction Help-Seeking Works Better',
        bullets: [
          'GPs, NHS talking therapies, crisis lines and local community support can all be starting points.',
          'People may need a trusted person to help them take the first step.',
          'Short, practical language often works better than abstract encouragement.',
          'The route should fit the person\'s real life.',
        ],
        notes: [
          'This is the practical access slide. Men often respond better when the route is concrete, specific and fast.',
          'The goal is to reduce friction, not to force a dramatic emotional reveal.',
        ],
      },
      {
        title: 'Culture, Identity and Change',
        bullets: [
          'Masculinity is cultural and changeable, not fixed.',
          'Some men benefit from peer groups, sport, work-based support or father-focused settings.',
          'Respect and competence improve engagement.',
          'Help-seeking can be framed as responsibility rather than weakness.',
        ],
        notes: [
          'Keep the module hopeful. The aim is to expand what strength can look like, not to shame people for having learned a narrow version of it.',
          'Different men need different entry points.',
        ],
      },
      {
        title: 'Support Should Be Specific and Direct',
        bullets: [
          'Ask what is going on, what support is needed and what would make taking action easier.',
          'Offer one next step rather than a long list.',
          'Keep follow-up and safety visible.',
          'Stigma drops when the first conversation is practical and respectful.',
        ],
        notes: [
          'Close by turning theory into action. This module should leave people with a better first conversation, not just better language.',
          'That is what makes it usable in real settings.',
        ],
      },
    ],
    activity: `ACTIVITY - Low-Friction Help Route (20 minutes)

Tutor steps:
1. Give participants a case involving a man who is drinking more, sleeping badly and withdrawing after a relationship breakdown.
2. Ask them to design a first-step help route that would be realistic for that person.
3. Ask what would make the route easier to use if he is ashamed or sceptical.
4. Debrief by comparing routes that are practical, specific and non-threatening.`,
    discussionPrompts: [
      'Why do some men only talk when they are already close to crisis?',
      'How can we make help-seeking feel like responsibility rather than failure?',
      'Which settings make it easier for men to talk: GP, peer group, family, work or online?',
      'What would a culturally realistic men\'s mental health response look like locally?',
    ],
    resources: [
      resource('GOV.UK - Men\'s Health Strategy for England', 'https://www.gov.uk/government/publications/mens-health-strategy-for-england'),
      resource('GOV.UK - Men\'s health: a strategic vision for England (accessible version)', 'https://www.gov.uk/government/publications/mens-health-strategy-for-england/mens-health-a-strategic-vision-for-england-accessible-version'),
      resource('NHS - How to find local mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/how-to-find-local-mental-health-services/'),
      resource('NHS England - Stay Alive', 'https://www.england.nhs.uk/supporting-our-nhs-people/support-now/wellbeing-apps/stayalive/'),
      resource('NHS England - New suicide prevention training rolled out for NHS mental health staff', 'https://www.england.nhs.uk/2025/09/new-suicide-prevention-training-rolled-out-nhs-mental-health-staff/'),
    ],
    tutorNotes: `Facilitation:
Keep the tone respectful and non-preachy. The session should broaden ideas of strength rather than attack masculinity.

Safeguarding:
If suicidal thoughts, heavy substance use or severe hopelessness are disclosed, pause and move to support and urgent signposting.

Delivery caution:
Do not turn the module into a lecture on men failing to talk. Keep it on barriers, routes and practical help.`,
    powerPoint: `Tutor deck notes:
- Use direct language and a clean, practical visual style.
- Student slides should make the first-step support route obvious.
- Tutor notes should hold the nuance on masculinity, suicide risk and substance use.`,
  }),
  49: guide({
    id: 49,
    topic: 'Military and Veteran Mental Health',
    summary:
      'A bespoke module on military culture, transition, moral injury, trauma, pain, substance use, family impact and the UK veteran support routes that matter most in practice.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and military-culture framing',
      'Transition, identity and help-seeking',
      'Trauma, moral injury and sleep/pain overlap',
      'Substance use, anger and family strain',
      'Activity: map the veteran support route',
      'Discussion on stigma, duty and recovery',
      'Wrap-up, Op COURAGE and next steps',
    ]),
    slides: [
      {
        title: 'Military Culture Shapes How Distress Is Expressed',
        bullets: [
          'Service culture can reward endurance, stoicism and self-reliance.',
          'Those strengths can become barriers to help-seeking after discharge.',
          'Transition out of service can unsettle identity, routine and belonging.',
          'Veteran mental health is not the same as civilian mental health without context.',
        ],
        notes: [
          'Open by respecting military culture rather than romanticising or criticising it.',
          'The key teaching point is that identity and routine change sharply during transition, and that transition itself is a risk period.',
        ],
      },
      {
        title: 'Transition Can Be a Shock',
        bullets: [
          'Leaving service can mean loss of structure, status, comradeship and purpose.',
          'Civilian systems may feel slow, fragmented or unfamiliar.',
          'Delayed help-seeking is common during and after transition.',
          'A veteran may need time to translate military language into civilian support.',
        ],
        notes: [
          'This slide explains why veterans may not present in the same way as other groups.',
          'Use it to normalise the difficulty of moving from a highly structured environment to a less defined one.',
        ],
      },
      {
        title: 'Trauma and Moral Injury Can Coexist',
        bullets: [
          'Some veterans experience PTSD; others experience moral injury, grief or anger after morally difficult events.',
          'Trauma can show up as sleep problems, hypervigilance, irritability or avoidance.',
          'Moral injury may involve guilt, shame or loss of trust.',
          'The response should not reduce everything to combat trauma alone.',
        ],
        notes: [
          'Make room for moral injury and not just trauma symptoms. That keeps the module more accurate and more humane.',
          'Veterans may struggle with meaning as much as with fear.',
        ],
      },
      {
        title: 'Pain, Sleep and Substance Use Often Overlap',
        bullets: [
          'Chronic pain, alcohol use, sleep disruption and mental health distress often reinforce each other.',
          'Physical injuries and service-related wear can make recovery harder.',
          'Alcohol may be used to manage sleep or arousal.',
          'Integrated care is usually better than isolated symptom treatment.',
        ],
        notes: [
          'This slide keeps the module practical. Veterans often present with a bundle of issues rather than one clean diagnosis.',
          'Acknowledge pain and physical health as part of the picture, not separate from it.',
        ],
      },
      {
        title: 'Family and Relationship Strain Matters',
        bullets: [
          'Partners and family members may also be affected by the transition and by stress-related changes.',
          'Emotional shutdown can look like distance or anger at home.',
          'Practical strain may be hidden under competence.',
          'Support that includes family can improve outcomes.',
        ],
        notes: [
          'This slide helps the room see the wider system around the veteran, not just the individual.',
          'Family support is often part of stabilisation and not an optional extra.',
        ],
      },
      {
        title: 'Op COURAGE and Other Routes Matter',
        bullets: [
          'Op COURAGE provides specialist NHS mental health support for veterans, service leavers and reservists in England.',
          'Self-referral is available in many areas.',
          'Other support may include GP, NHS talking therapies, crisis routes and veteran charities.',
          'Tell the service that you have served so the right pathway is used.',
        ],
        notes: [
          'Make the route map concrete. Many veterans need direct, specialist pathways rather than generic advice.',
          'This slide is about actionability: where to go and how to start.',
        ],
      },
      {
        title: 'Help-Seeking Is a Sign of Responsibility',
        bullets: [
          'Getting help can protect family, work and future wellbeing.',
          'Seeking support does not cancel out service identity or honour.',
          'Peer support and trusted veteran-facing services can lower the barrier.',
          'Recovery is compatible with respect for military values.',
        ],
        notes: [
          'This is the stigma-reduction slide. It reframes help-seeking as responsible rather than weak.',
          'Use it to reduce shame while respecting the values many veterans hold.',
        ],
      },
      {
        title: 'Good Support Is Coordinated and Practical',
        bullets: [
          'The best response usually links mental health, physical health, family and social support.',
          'Transition, housing, employment and meaning may all need attention.',
          'Follow-up matters because trust may take time.',
          'Hope is strongest when the pathway is clear.',
        ],
        notes: [
          'Close by reinforcing that good veteran care is joined-up care.',
          'That keeps the module practical rather than symbolic.',
        ],
      },
    ],
    activity: `ACTIVITY - Veteran Support Route Map (20 minutes)

Tutor steps:
1. Give groups a case involving a recently discharged veteran with insomnia, anger and increased drinking.
2. Ask them to map the first three support steps and what information should be shared at each step.
3. Ask what role family, GP and Op COURAGE might each play.
4. Debrief by comparing routes that reduce friction and preserve dignity.`,
    discussionPrompts: [
      'What makes transition out of service psychologically difficult?',
      'How do trauma, moral injury and identity loss differ in practice?',
      'What helps veterans feel understood by civilian services?',
      'How should families support recovery without trying to "fix" military culture?',
    ],
    resources: [
      resource('NHS England - Op COURAGE veterans mental health service', 'https://www.england.nhs.uk/mental-health/veterans/'),
      resource('GOV.UK - Mental health support for the UK armed forces', 'https://www.gov.uk/guidance/mental-health-support-for-the-uk-armed-forces'),
      resource('Armed Forces Covenant - Help in a crisis', 'https://www.armedforcescovenant.gov.uk/crisis-contacts/'),
      resource('NHS England - NHS expands mental health support for veterans', 'https://www.england.nhs.uk/2024/01/nhs-expands-mental-health-support-for-veterans-with-more-than-half-saying-its-hard-to-speak-up/'),
      resource('Armed Forces Covenant - Healthcare support for service leavers and veterans', 'https://www.armedforcescovenant.gov.uk/armed-forces-community/service-leavers-and-veterans/healthcare/'),
    ],
    tutorNotes: `Facilitation:
Do not oversimplify military culture or assume every veteran has combat trauma.

Safeguarding:
If current risk, self-harm or severe substance use is disclosed, move to support and urgent signposting.

Delivery caution:
Keep the session veteran-specific and practical, not a generic trauma module.`,
    powerPoint: `Tutor deck notes:
- Use military-aware but non-jingoistic visuals.
- Student slides should make Op COURAGE and local routes obvious.
- Tutor notes should hold the nuance on transition, moral injury and family strain.`,
  }),
  50: guide({
    id: 50,
    topic: 'Prison, the Legal System and Mental Health',
    summary:
      'A justice-system module on prison mental health, sentencing, liaison and diversion, continuity of care, self-harm, substance use, release planning and the practical link between custody and community support.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and systems framing',
      'Mental health in custody and at court',
      'Self-harm, psychosis, substance use and risk',
      'Liaison, diversion and treatment routes',
      'Activity: map release and continuity of care',
      'Discussion on stigma, rights and safety',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Prison Is a Major Mental Health Context',
        bullets: [
          'People in contact with the criminal justice system often have complex mental health, substance use and trauma histories.',
          'Custody can intensify distress through loss of control, isolation and uncertainty.',
          'Mental health support should not stop at the prison gate.',
          'Release planning is part of care.',
        ],
        notes: [
          'Open by treating prison as a mental health setting as well as a justice setting.',
          'This helps the group see why continuity and coordination matter so much.',
        ],
      },
      {
        title: 'Risk Is High at Multiple Points',
        bullets: [
          'Reception, remand, court, segregation and release can all be high-risk points.',
          'Self-harm, suicide, withdrawal, psychosis and withdrawal from treatment may all need attention.',
          'People can deteriorate quickly when routines collapse.',
          'Risk assessment should be active and repeated.',
        ],
        notes: [
          'This slide teaches that risk is not one moment; it is a pattern across the justice pathway.',
          'Make the message concrete: transitions are the danger zones.',
        ],
      },
      {
        title: 'Liaison and Diversion Matter',
        bullets: [
          'Liaison and diversion can identify mental health needs at first contact with the justice system.',
          'They can help route people toward treatment instead of unnecessary escalation where appropriate.',
          'Early identification reduces missed need.',
          'The aim is better care, not avoiding accountability.',
        ],
        notes: [
          'Teach liaison and diversion as a practical route that sits between police, courts and health services.',
          'It helps the room understand the value of first-contact assessment.',
        ],
      },
      {
        title: 'Mental Health in Prison Includes More Than Diagnosis',
        bullets: [
          'Depression, anxiety, PTSD, psychosis, personality disorder, substance use and neurodevelopmental needs may all be present.',
          'Physical health, sleep and medication access are part of the picture.',
          'Segregation and isolation can worsen symptoms.',
          'Clinical and custodial staff need to work together.',
        ],
        notes: [
          'This slide keeps the module from becoming diagnosis-only. The prison environment itself is part of the formulation.',
          'That means staffing, environment and routine all matter clinically.',
        ],
      },
      {
        title: 'Continuity of Care at Release Is Critical',
        bullets: [
          'Release planning should include medication, appointments, housing, benefits and support contacts.',
          'The first days after release are a high-risk period.',
          'Leaving custody without care continuity increases relapse and reoffending risk.',
          'The person should know where to go and who knows they are coming.',
        ],
        notes: [
          'This is the most important practical slide in the module. Release is not an ending; it is a transition that needs active planning.',
          'Make the connections between housing, benefits and health services explicit.',
        ],
      },
      {
        title: 'Support Needs to Be Person-Centred and Rights-Aware',
        bullets: [
          'People in custody still need dignity, privacy and humane care.',
          'Mental health support should not be used as punishment.',
          'Trauma-informed communication reduces escalation.',
          'The person\'s voice should stay central where possible.',
        ],
        notes: [
          'Teach rights and dignity clearly. A prison context does not cancel person-centred care.',
          'This keeps the module ethically grounded.',
        ],
      },
      {
        title: 'Substance Use, Trauma and Self-Harm Often Co-Exist',
        bullets: [
          'Many people in custody are managing multiple overlapping needs.',
          'Withdrawal, shame and uncertainty can heighten risk.',
          'Integrated support is better than siloed responses.',
          'Family contact and community support can be protective.',
        ],
        notes: [
          'This slide helps learners see the overlapping formulation rather than a list of isolated problems.',
          'It is also where you can note the importance of family and community links where safe and appropriate.',
        ],
      },
      {
        title: 'Prison and Community Must Join Up',
        bullets: [
          'Prison healthcare, probation, courts, NHS services and community organisations need aligned plans.',
          'Problem handover can lead to missed medication, lost appointments and crisis.',
          'Good practice starts before release and continues after it.',
          'Recovery and reintegration are linked.',
        ],
        notes: [
          'Close by emphasising systems thinking. The person experiences one journey, not separate departments.',
          'The goal is to leave with an actionable, joined-up picture of care.',
        ],
      },
    ],
    activity: `ACTIVITY - Release Continuity Plan (20 minutes)

Tutor steps:
1. Give the group a case involving a prison release in two weeks with depression, substance use and unstable housing.
2. Ask them to map what must happen before release, on release day and in the first week after release.
3. Ask them to identify the biggest continuity risks and how to reduce them.
4. Debrief by comparing plans that keep healthcare, housing and probation aligned.`,
    discussionPrompts: [
      'Why is release such a high-risk transition point?',
      'What does humane, rights-aware mental health care look like in custody?',
      'How should services respond to self-harm, psychosis or withdrawal inside prison?',
      'What would a genuinely joined-up custody-to-community pathway look like?',
    ],
    resources: [
      resource('NICE - Mental health of adults in contact with the criminal justice system', 'https://www.nice.org.uk/guidance/ng66'),
      resource('NHS England - Health and justice', 'https://www.england.nhs.uk/health-and-justice/'),
      resource('NHS England - Integrated care and health and justice', 'https://www.england.nhs.uk/health-and-justice/integrated-care-and-health-and-justice/'),
      resource('GOV.UK - Mental health support in prison', 'https://www.gov.uk/life-in-prison/mental-health-support'),
      resource('NHS England - Prison healthcare', 'https://www.england.nhs.uk/commissioning/health-and-justice/prisons/'),
    ],
    tutorNotes: `Facilitation:
Keep the tone practical and rights-aware. Many participants will have strong opinions about punishment; keep the focus on mental health and continuity.

Safeguarding:
If current risk, self-harm, withdrawal or psychosis emerges, follow the appropriate urgent process.

Delivery caution:
Do not collapse prison, probation, courts and police into one system. The teaching should show where each part matters.`,
    powerPoint: `Tutor deck notes:
- Use a custody-to-community pathway diagram.
- Student slides should make release planning and liaison/diversion clear.
- Tutor notes should hold the nuance on rights, continuity and high-risk transitions.`,
  }),
};
