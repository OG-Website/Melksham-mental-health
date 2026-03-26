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

export const AUTHORED_MODULE_GUIDES_BATCH_36_40: Record<number, ModuleGuide> = {
  36: guide({
    id: 36,
    topic: 'Racism, Discrimination and Intersectionality',
    summary:
      'A bespoke anti-racist module on how racism, discrimination and overlapping identities shape mental health, access to care, trust in services and recovery. The teaching is grounded in UK equality duties, NHS race equality work and practical inclusive practice.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome, language and safety',
      'What racism and intersectionality mean',
      'Mental health impact and help-seeking',
      'Discrimination in services, school and work',
      'Protective factors, belonging and allyship',
      'Activity: map an inclusive service journey',
      'Wrap-up, rights and support routes',
    ]),
    slides: [
      {
        title: 'Racism and Discrimination Affect Mental Health',
        bullets: [
          'Racism is a mental health issue as well as a social justice issue.',
          'Repeated discrimination can create stress, hypervigilance, exhaustion and mistrust.',
          'People may delay help-seeking if they expect to be dismissed or stereotyped.',
          'Mental health support should recognise the reality of unequal treatment.',
        ],
        notes: [
          'Open by naming racism clearly. This module should not frame discrimination as an abstract concept when it is a daily lived experience for many people.',
          'Make it explicit that mental health services, schools and workplaces all have a role in reducing harm.',
        ],
      },
      {
        title: 'Intersectionality Explains Overlapping Pressure',
        bullets: [
          'Intersectionality means different protected characteristics can combine and change experience.',
          'Race, faith, gender, sexuality, disability, migration status and class can all interact.',
          'Two people can face racism in different ways and still both be harmed by it.',
          'Good support asks, "What else is shaping this person\'s reality?"',
        ],
        notes: [
          'Use simple examples: a Black autistic woman, a refugee man, or a young LGBTQ+ person from a minoritised background may face layered pressures that cannot be separated neatly.',
          'Encourage learners to avoid one-size-fits-all assumptions about resilience or access.',
        ],
      },
      {
        title: 'Racism Affects Stress, Belonging and Trust',
        bullets: [
          'Chronic stress can build when people must constantly anticipate bias.',
          'Belonging and identity safety are protective factors for mental health.',
          'Invalidation and microaggressions can make symptoms worse.',
          'Trust in services is often shaped by previous experiences of racism.',
        ],
        notes: [
          'This is where the emotional and physiological side of discrimination should be linked to the practical side of service use.',
          'Keep the focus on impact rather than asking learners to debate whether the experience "really" counted as racism.',
        ],
      },
      {
        title: 'Services, Schools and Workplaces Can Reproduce Harm',
        bullets: [
          'Bias can show up in diagnosis, interpretation of behaviour and access to help.',
          'Schools may punish distress when they do not understand cultural context.',
          'Workplaces can intensify harm through tokenism, exclusion and unequal progression.',
          'Small structural changes can reduce barriers quickly.',
        ],
        notes: [
          'Use concrete service examples: waiting rooms, forms, assessments, interpreter use, safeguarding concerns, and assumptions about family roles.',
          'The aim is not blame for its own sake but visible improvement in practice.',
        ],
      },
      {
        title: 'Protective Factors Include Pride, Community and Representation',
        bullets: [
          'Cultural identity, community connection and role models can support wellbeing.',
          'Representation in staff, leadership and materials matters.',
          'People often recover better when they feel understood and respected.',
          'Anti-racist practice is active, not just well-meaning.',
        ],
        notes: [
          'Talk about dignity, not perfection. Good practice includes curiosity, accountability and a willingness to change.',
          'This slide can also introduce allyship as listening, learning and acting rather than speaking over the people affected.',
        ],
      },
      {
        title: 'Activity: Map a Service Through an Anti-Racist Lens',
        bullets: [
          'Trace a typical journey from referral to review.',
          'Identify where bias, delay or exclusion could appear.',
          'Spot one immediate improvement and one longer-term change.',
          'Test the journey against lived experience, not just policy wording.',
        ],
        notes: [
          'Invite the group to look at forms, language, waiting lists, interpreter access and who gets believed when distress is expressed in different ways.',
          'Keep the exercise practical so it leads to action rather than only reflection.',
        ],
      },
      {
        title: 'Rights, Routes and Commitments',
        bullets: [
          'Equality law and NHS duties are part of safe care.',
          'People should be able to raise concerns without retaliation.',
          'Signposting should include advocacy, complaints routes and local community support.',
          'The goal is not only awareness but better outcomes.',
        ],
        notes: [
          'Close by linking equality rights to everyday practice. The room should leave with a clearer sense that anti-racist work is part of health work.',
          'Encourage a written commitment: one thing to stop, start and continue.',
        ],
      },
    ],
    activity:
      'In pairs, map one real or fictional support journey and identify where racism, stereotyping or exclusion could affect the outcome. Then agree one practical change to make the journey safer and more dignified.',
    discussionPrompts: [
      'Where does discrimination most often show up in everyday mental health support?',
      'How can a service show that it is safe to talk about racism without putting the burden back on the person affected?',
      'What does intersectionality change about how we understand risk and recovery?',
    ],
    resources: [
      resource(
        'NHS England - Patient and carer race equality framework',
        'https://www.england.nhs.uk/long-read/patient-and-carer-race-equality-framework/',
      ),
      resource(
        'GOV.UK - Discrimination: your rights',
        'https://www.gov.uk/discrimination-your-rights',
      ),
      resource(
        'NHS England - Tackling inequalities in healthcare access, experience and outcomes',
        'https://www.england.nhs.uk/publication/tackling-inequalities-in-healthcare-access-experience-and-outcomes/',
      ),
      resource(
        'NHS England - Request for action on racism including antisemitism',
        'https://www.england.nhs.uk/long-read/request-for-action-on-racism-including-antisemitism/',
      ),
      resource(
        'NHS England - Equality and Health Inequalities Hub',
        'https://www.england.nhs.uk/about/equality/equality-hub/',
      ),
    ],
    tutorNotes:
      'This module works best when the tutor models plain language, curiosity and accountability. Avoid asking learners from minoritised backgrounds to educate the room or recount painful experiences unless they volunteer to do so. Keep the emphasis on how systems create or remove harm and on what practical anti-racist action looks like in a charity setting.',
  }),
  37: guide({
    id: 37,
    topic: 'Gender, Sexuality and Mental Health',
    summary:
      'A bespoke inclusive module on the relationship between gender identity, sexuality, discrimination and mental health. It supports affirming language, safer conversations, and practical signposting for LGBTQ+ people and anyone questioning identity or orientation.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome, pronouns and content safety',
      'Gender identity, sexuality and mental health',
      'Minority stress, concealment and rejection',
      'Family, school, work and faith contexts',
      'Supporting gender dysphoria and distress',
      'Activity: build an affirming conversation plan',
      'Wrap-up, rights and support routes',
    ]),
    slides: [
      {
        title: 'Inclusive Practice Starts With Language',
        bullets: [
          'Use the name and pronouns a person asks for.',
          'Gender identity and sexual orientation are related but not the same.',
          'People may be questioning, exploring or not want a label yet.',
          'A calm, non-judgemental tone improves safety immediately.',
        ],
        notes: [
          'Start by making the room safe. Explain that the module is about support, not debate, and that respectful language is expected throughout.',
          'Use examples that include trans, non-binary, lesbian, gay, bisexual and questioning people without flattening them into one experience.',
        ],
      },
      {
        title: 'Minority Stress Can Shape Mental Health',
        bullets: [
          'Stigma, concealment and fear of rejection can be exhausting.',
          'People may have learned to scan for danger before they speak.',
          'Isolation is often made worse by family or community pressure.',
          'Mental health problems are not caused by identity itself.',
        ],
        notes: [
          'Explain minority stress in a simple way: repeated stress from being judged, excluded or unsafe can affect mood, sleep and confidence.',
          'Be careful not to imply that being LGBTQ+ is the problem. Discrimination is the problem.',
        ],
      },
      {
        title: 'Different Experiences Need Different Questions',
        bullets: [
          'A young person questioning sexuality may need privacy and reassurance.',
          'A trans adult may need help with dysphoria, hostility or service access.',
          'A bisexual person may face erasure as well as homophobia.',
          'Intersectionality changes the barriers people face and the support they need.',
        ],
        notes: [
          'This slide should help learners notice the risk of assuming that one support script fits everyone.',
          'Invite the group to think about how age, faith, culture, disability and family circumstances can alter disclosure and help-seeking.',
        ],
      },
      {
        title: 'Gender Dysphoria and Mental Health Support',
        bullets: [
          'Gender dysphoria can cause distress, anxiety, low mood and social withdrawal.',
          'Support should be person-centred, careful and non-shaming.',
          'Practical steps may include GP support, talking therapy and specialist advice.',
          'Affirming care reduces friction and can improve engagement.',
        ],
        notes: [
          'Avoid treating gender dysphoria as something to "fix" quickly or dismissively. The learning point is how to support the person safely and respectfully.',
          'Be clear that not everyone experiences the same intensity of dysphoria and that some people prefer to talk about gender incongruence or distress in broader terms.',
        ],
      },
      {
        title: 'Family, School, Faith and Work Responses Matter',
        bullets: [
          'Acceptance reduces distress; rejection can intensify it.',
          'Some people need help with disclosure planning and safety.',
          'Workplaces and services can reduce harm with simple inclusive adjustments.',
          'Faith and culture can be sources of support as well as conflict.',
        ],
        notes: [
          'Keep this balanced. The goal is not to stereotype families or communities but to recognise that support and risk are shaped by the reactions people receive.',
          'If the group raises values conflicts, return to dignity, safety and practical help.',
        ],
      },
      {
        title: 'Activity: Write an Affirming Response Plan',
        bullets: [
          'Practise one opening sentence that feels safe and respectful.',
          'List three questions that support choice and control.',
          'Identify one barrier the person might face and one way to reduce it.',
          'Include a clear plan for signposting if specialist support is needed.',
        ],
        notes: [
          'Ask participants to draft a short conversation plan they could actually use with a real person. Keep it grounded and specific.',
          'Check that the plan does not over-focus on diagnosis or gatekeeping.',
        ],
      },
      {
        title: 'Support Routes and Rights',
        bullets: [
          'People have a right to fair, respectful treatment.',
          'National and local support routes can reduce isolation and delay.',
          'Confidentiality, consent and safety need to be explained clearly.',
          'Good practice means the person leaves feeling more understood.',
        ],
        notes: [
          'Finish with practical routes and a reminder that inclusive care is part of quality care, not an optional extra.',
          'Encourage the room to reflect on one piece of language they will change immediately.',
        ],
      },
    ],
    activity:
      'In small groups, draft a first response to a person who says they are questioning their gender or sexuality and are struggling with anxiety. Include the opening line, three follow-up questions and a signposting route.',
    discussionPrompts: [
      'What helps a conversation feel affirming from the first sentence?',
      'How do minority stress and concealment show up in mental health presentation?',
      'What is the difference between support, curiosity and pressure to disclose?',
    ],
    resources: [
      resource(
        'NHS - Mental health support if you are lesbian, gay, bisexual or trans (LGBTQ+)',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/mental-health-support-if-you-are-gay-lesbian-bisexual-lgbtq/',
      ),
      resource(
        'NHS - Gender dysphoria',
        'https://www.nhs.uk/conditions/gender-dysphoria/',
      ),
      resource(
        'NHS - How to get help and support for gender dysphoria',
        'https://www.nhs.uk/conditions/gender-dysphoria/how-get-help-and-support/',
      ),
      resource(
        'GOV.UK - Discrimination: your rights',
        'https://www.gov.uk/discrimination-your-rights',
      ),
      resource(
        'NHS England - Improving LGBT+ equality across the NHS',
        'https://www.england.nhs.uk/wp-content/uploads/2015/11/edc1-lgbt-equal-pap-20-10-15.pdf',
      ),
    ],
    tutorNotes:
      'Keep the room focused on dignity, privacy and practical support. Avoid using identity as a discussion point for entertainment or debate. If people are unsure about terminology, model calm correction and move on. The tutor should also be prepared to explain that affirmation is not the same as agreement with every life choice; it is about treating people safely and respectfully while they seek help.',
  }),
  38: guide({
    id: 38,
    topic: 'Sexual Violence and Trauma',
    summary:
      'A trauma-informed module on the mental health impact of sexual violence, the importance of survivor choice and control, and the UK support routes available after assault or abuse. The content is designed to be careful, non-graphic and psychologically safe.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome, safety and content boundaries',
      'What trauma can do to the mind and body',
      'Why sexual violence affects trust and sleep',
      'Immediate support, consent and control',
      'NHS routes: SARCs, GP and urgent help',
      'Activity: practise a trauma-informed response',
      'Recovery, rights and signposting',
    ]),
    slides: [
      {
        title: 'This Module Uses a Trauma-Informed Approach',
        bullets: [
          'Content should never be graphic or sensational.',
          'Survivors must keep choice, control and privacy.',
          'No one should be asked to share more than they want to.',
          'The focus is on support, not on the details of the abuse.',
        ],
        notes: [
          'State the ground rules clearly at the start. Give permission to step out, pause or pass without explanation.',
          'This module should feel steady and respectful rather than emotionally intense for its own sake.',
        ],
      },
      {
        title: 'Sexual Violence Can Affect Many Areas of Life',
        bullets: [
          'Trauma can affect sleep, concentration, mood and memory.',
          'Shame and fear may stop people seeking help quickly.',
          'People can look calm while still being deeply affected.',
          'Different people respond in different ways and at different times.',
        ],
        notes: [
          'Explain that there is no single "correct" trauma response. Some people become very quiet, others anxious or angry, and some may feel numb.',
          'Avoid language that sounds like a checklist of symptoms detached from the person\'s experience.',
        ],
      },
      {
        title: 'Trauma Can Change How the Body Feels Safe',
        bullets: [
          'The body may stay on alert long after the event has passed.',
          'Triggers can be linked to sound, smell, place or touch.',
          'People may avoid reminders without fully understanding why.',
          'Feeling "on edge" is often a survival response, not a weakness.',
        ],
        notes: [
          'Keep the explanation simple and normalising. The aim is to reduce self-blame and increase understanding.',
          'Make sure the group hears that trauma responses are adaptive, even when they are distressing.',
        ],
      },
      {
        title: 'Support Must Prioritise Safety, Choice and Control',
        bullets: [
          'Offer choices wherever possible and explain what will happen next.',
          'Use consent-based language and avoid pressure.',
          'Support may include a trusted person, a quiet space or a slower pace.',
          'Immediate needs come before long-term planning.',
        ],
        notes: [
          'This slide is the heart of the module. Reassure learners that listening well can be more helpful than trying to fix everything immediately.',
          'If people ask what to say, model short, steady phrases: "I am glad you told me", "What would help right now?" and "You do not have to decide everything today".',
        ],
      },
      {
        title: 'NHS Routes Can Help After Assault or Abuse',
        bullets: [
          'SARCs provide specialist support for people after sexual assault.',
          'GPs, 111 and emergency services can help with urgent medical needs.',
          'People can ask for support even if they are not ready to report to police.',
          'Early support can reduce isolation and uncertainty.',
        ],
        notes: [
          'Be careful to explain the options without implying that one route is mandatory. The person should choose the route that feels safest where possible.',
          'If the topic of reporting arises, keep the focus on choice and support rather than on pressure or timelines.',
        ],
      },
      {
        title: 'Activity: Practise a Trauma-Informed First Response',
        bullets: [
          'Practise one opening response that is calm and non-judgemental.',
          'List questions that preserve choice and avoid interrogation.',
          'Identify what would reduce overwhelm in the next ten minutes.',
          'Draft a signposting plan that can be followed later if needed.',
        ],
        notes: [
          'Use short role-play or written practice and keep the scenario simple. The point is to practise tone and control, not to simulate trauma.',
          'Invite the group to notice which words increase safety and which words sound pressurising.',
        ],
      },
      {
        title: 'Recovery Is Individual and Non-Linear',
        bullets: [
          'Some people improve quickly and others need long-term support.',
          'Symptoms can change over time and resurface around anniversaries or reminders.',
          'Healing often includes routine, safety, connection and specialist care.',
          'The survivor sets the pace wherever possible.',
        ],
        notes: [
          'Close by reminding the room that recovery does not mean forgetting. It means regaining safety, agency and support.',
          'Signpost that silence, shock or mixed feelings after sexual violence are common and deserve care rather than judgement.',
        ],
      },
    ],
    activity:
      'Practise a short first response to a disclosure that preserves choice and control. Then map the next three practical steps, including how to offer NHS support without pressure.',
    discussionPrompts: [
      'What makes a response feel safe after someone discloses sexual violence?',
      'How can we explain trauma responses in a way that reduces shame?',
      'What should a service do to avoid adding more harm after an assault?',
    ],
    resources: [
      resource(
        'NHS - Sexual Assault Referral Centres (SARCs)',
        'https://www.nhs.uk/SARCs',
      ),
      resource(
        'NHS - Find a rape and sexual assault referral centre',
        'https://www.nhs.uk/service-search/sexual-health-services/find-a-rape-and-sexual-assault-referral-centre',
      ),
      resource(
        'NHS - Post-traumatic stress disorder (PTSD) overview',
        'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/',
      ),
      resource(
        'NICE - Post-traumatic stress disorder (NG116)',
        'https://www.nice.org.uk/guidance/ng116',
      ),
      resource(
        'NHS England - Trauma-informed and harm-aware care',
        'https://www.england.nhs.uk/long-read/trauma-informed-and-harm-aware-care/',
      ),
    ],
    tutorNotes:
      'This module needs a calm, survivor-centred delivery. Do not invite graphic disclosure or ask learners to compare experiences. Provide content notes, a chance to step out and a quiet return route. The tutor should model language that preserves dignity and avoids blame, while also being ready to signpost urgent medical or safeguarding help if the conversation surfaces immediate risk.',
  }),
  39: guide({
    id: 39,
    topic: 'Grief, Loss and Bereavement',
    summary:
      'A compassionate module on bereavement, grief and loss, including the wide range of normal responses, support for children and families, and how to distinguish grief from depression or crisis. The teaching is gentle, practical and grounded in NHS-facing guidance.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome, care and language choices',
      'What grief is and how it can vary',
      'Bodies, emotions and everyday functioning',
      'Children, families and culture',
      'When grief needs extra support',
      'Activity: build a practical support plan',
      'Wrap-up, remembrance and signposting',
    ]),
    slides: [
      {
        title: 'Grief Is a Human Response to Loss',
        bullets: [
          'Grief can follow a death, but also other major losses.',
          'There is no single timetable for grieving.',
          'Strong feelings, numbness and mixed emotions can all be normal.',
          'People do not grieve in the same way or in the same order.',
        ],
        notes: [
          'Introduce the module gently and avoid implying that grief should be "resolved" quickly. This is about support, not speed.',
          'Use language that allows for difference: some people talk, some act, some withdraw, and some need time before they can speak.',
        ],
      },
      {
        title: 'Bereavement Can Affect the Whole Person',
        bullets: [
          'People may notice sleep disruption, poor concentration or appetite changes.',
          'Shock, guilt, anger and relief can all be part of grief.',
          'Physical sensations and fatigue are common, especially early on.',
          'Grief can make ordinary tasks feel unusually hard.',
        ],
        notes: [
          'This slide helps learners see grief as whole-person experience rather than only an emotional state.',
          'Avoid pathologising ordinary responses while still naming that support may be needed if the person becomes stuck, unsafe or overwhelmed.',
        ],
      },
      {
        title: 'Different Kinds of Loss Need Sensitive Recognition',
        bullets: [
          'Bereavement can involve family, friends, partners or community members.',
          'Loss after illness, care transitions or estrangement may be complicated.',
          'Culture, faith and ritual can shape how grief is expressed.',
          'Some losses are not publicly recognised, which can increase isolation.',
        ],
        notes: [
          'Discuss disenfranchised grief in plain language: when the loss is not fully acknowledged by others, grief can become lonelier and harder to carry.',
          'Invite examples of respectful support that do not assume one cultural script.',
        ],
      },
      {
        title: 'Children and Young People Need Honest, Age-Appropriate Support',
        bullets: [
          'Children may grieve in bursts rather than in one sustained way.',
          'Routine, simple explanations and reassurance help them feel safe.',
          'Avoid euphemisms that create confusion.',
          'Schools and carers can play a major protective role.',
        ],
        notes: [
          'Explain that children often return to grief again and again as they grow. That does not mean they are doing grief "wrong".',
          'Keep the emphasis on truthfulness, warmth and predictable support.',
        ],
      },
      {
        title: 'When Grief Needs Extra Support',
        bullets: [
          'Look for signs of risk, despair, severe withdrawal or inability to function over time.',
          'Depression and grief can overlap but are not the same thing.',
          'People may need help if they feel unable to keep themselves safe.',
          'Support should be compassionate, not rushed or dismissive.',
        ],
        notes: [
          'Do not create a rigid checklist for "normal" grief. Instead, highlight the need to listen carefully, watch for risk and offer help when the person asks or when safety is a concern.',
          'If someone is suicidal, urgent escalation should always take precedence over any educational framing.',
        ],
      },
      {
        title: 'Activity: Build a Practical Support Plan',
        bullets: [
          'Identify who could offer practical help in the first few days.',
          'Choose one routine that could make the day easier.',
          'List one ritual, memory or act of remembrance that feels meaningful.',
          'Agree how to check in without overwhelming the bereaved person.',
        ],
        notes: [
          'Make the activity concrete. Grief support often becomes more manageable when the practical burden is shared.',
          'The exercise should help participants think about listening, food, sleep, transport, children and quiet companionship.',
        ],
      },
      {
        title: 'Support Routes and Remembrance',
        bullets: [
          'Bereavement support can include family, community, GP and specialist help.',
          'There are separate needs for adults, children and carers.',
          'Remembrance and continuing bonds are common and healthy.',
          'People should be told that asking for help is allowed.',
        ],
        notes: [
          'End on a hopeful, respectful note. The goal is not to tidy grief away but to show that care, time and connection help people carry it.',
          'Invite the room to think about one phrase they can use that is more helpful than "at least" or "you should be over it by now".',
        ],
      },
    ],
    activity:
      'Create a simple support plan for a bereaved adult, including practical help, emotional check-ins, one reminder of choice and one route for urgent support if needed.',
    discussionPrompts: [
      'What phrases help someone feel heard after a bereavement?',
      'How can we avoid turning grief into a problem to be fixed too quickly?',
      'What changes when the person grieving is a child or young person?',
    ],
    resources: [
      resource(
        'NHS - Bereavement',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/bereavement/',
      ),
      resource(
        'NHS - Get help with grief after bereavement or loss',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/get-help-with-grief-after-bereavement-or-loss/',
      ),
      resource(
        'NHS - Bereavement and young people',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/bereavement-and-young-people/',
      ),
      resource(
        'NHS - Children and bereavement',
        'https://www.nhs.uk/conditions/childrens-death-bereavement/',
      ),
      resource(
        'GOV.UK - What to do after a death',
        'https://www.gov.uk/after-a-death',
      ),
    ],
    tutorNotes:
      'Deliver this module slowly and with warmth. Grief content can land differently for people depending on recent losses, anniversaries and unresolved bereavements. Keep the room psychologically safe by avoiding pressure to share personal stories. Focus instead on language, practical support and how to spot when grief may have become unsafe or unmanageable.',
  }),
  40: guide({
    id: 40,
    topic: 'Chronic Pain and Mental Health',
    summary:
      'A whole-person module on chronic pain, fatigue, mood, sleep, coping and support. It shows how pain and mental health influence each other and uses NHS and NICE guidance to support realistic, compassionate self-management and help-seeking.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome, language and pain myths',
      'How chronic pain affects everyday life',
      'Pain, mood, sleep and the stress cycle',
      'Assessment, pacing and treatment planning',
      'Self-management and psychological support',
      'Activity: map a pain-and-wellbeing cycle',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Chronic Pain Is Real and Multi-Factorial',
        bullets: [
          'Pain can continue even after the original cause is unclear or has changed.',
          'Stress, sleep and mood can all influence pain levels.',
          'People can be significantly limited even when scans do not fully explain the pain.',
          'The person\'s experience matters more than whether the pain is easy to label.',
        ],
        notes: [
          'Avoid any hint that pain is "just in the mind". The module should show that pain is real, complex and deserving of care.',
          'Use language that validates the person while also explaining that emotional wellbeing and pain can affect one another.',
        ],
      },
      {
        title: 'Pain Can Affect Mood, Identity and Daily Life',
        bullets: [
          'Long-term pain may affect work, movement, relationships and confidence.',
          'People may grieve old routines or physical abilities.',
          'Low mood and anxiety often increase when pain is unpredictable.',
          'Isolation can make coping harder.',
        ],
        notes: [
          'This slide helps the group see the loss that often sits inside chronic pain: independence, spontaneity, sleep and social life may all change.',
          'Keep the tone compassionate and realistic. The goal is not to promise quick fixes but to support meaningful improvement.',
        ],
      },
      {
        title: 'Stress, Fear and Avoidance Can Create a Pain Loop',
        bullets: [
          'Fear of pain may lead to less movement and more stiffness.',
          'Poor sleep can lower coping and make symptoms feel worse.',
          'Worry and hypervigilance can increase muscle tension and distress.',
          'A good plan aims to interrupt the loop gently, not force recovery.',
        ],
        notes: [
          'Explain the loop in everyday language. Many people do better when they understand why symptoms can become self-reinforcing.',
          'Do not present avoidance as laziness; it is usually an understandable attempt to stay safe.',
        ],
      },
      {
        title: 'Assessment Should Be Holistic and Person-Centred',
        bullets: [
          'Ask about pain, mood, sleep, movement, medication and daily function together.',
          'Look for depression, anxiety and trauma as well as physical symptoms.',
          'Pacing and realistic goals are usually more helpful than all-or-nothing thinking.',
          'Shared decisions improve trust and adherence.',
        ],
        notes: [
          'This slide should reinforce that chronic pain care is not only about medicines. Listening, pacing and goal-setting matter too.',
          'Encourage the room to think about how appointments can be made more accessible and less exhausting for the person.',
        ],
      },
      {
        title: 'Self-Management Does Not Mean Self-Blame',
        bullets: [
          'Self-management includes rest, pacing, movement and support.',
          'Talking therapies can help people manage the emotional impact of pain.',
          'Support from family, work and services makes self-management more realistic.',
          'People should not be told to cope alone.',
        ],
        notes: [
          'The phrase "self-management" can sound harsh if it is not explained carefully. Make it clear that good self-management happens with support, not instead of support.',
          'If the group discusses medication, keep the message balanced and defer to clinical advice where needed.',
        ],
      },
      {
        title: 'Activity: Map the Pain-and-Wellbeing Cycle',
        bullets: [
          'Draw one cycle showing pain, mood, sleep and activity.',
          'Mark one point where the cycle can be softened.',
          'Choose one small change that feels realistic this week.',
          'Add one support person or service to the map.',
        ],
        notes: [
          'Keep the activity practical and non-judgemental. The aim is to help people see that even small changes can reduce pressure on the whole system.',
          'Encourage goals that are specific and achievable, not heroic.',
        ],
      },
      {
        title: 'Support Routes and When to Seek Help',
        bullets: [
          'NHS pain services, talking therapies and GP care can work together.',
          'Worsening mood, low function or suicidal thoughts need prompt attention.',
          'People should ask for help early if pain is taking over daily life.',
          'Recovery may mean better management rather than complete pain removal.',
        ],
        notes: [
          'Close by setting realistic expectations. For many people, progress means improved function, confidence and quality of life rather than pain disappearing overnight.',
          'End with the message that pain and mental health should be treated together, not separately.',
        ],
      },
    ],
    activity:
      'Ask the group to map a chronic pain cycle for a fictional person and identify one point where pace, sleep, movement, talking support or social support could reduce pressure.',
    discussionPrompts: [
      'How do you explain chronic pain without suggesting that it is "all psychological"?',
      'What makes pacing easier to understand and use in real life?',
      'When should pain, low mood and isolation be treated together rather than separately?',
    ],
    resources: [
      resource(
        'NICE - Chronic pain (primary and secondary) in over 16s: assessment of all chronic pain and management of chronic primary pain (NG193)',
        'https://www.nice.org.uk/guidance/ng193',
      ),
      resource(
        'NHS - How to get help for your pain',
        'https://www.nhs.uk/conditions/chronic-pain/',
      ),
      resource(
        'NHS - Long-term physical health condition and mental health',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/long-term-physical-health-condition-and-mental-health/',
      ),
      resource(
        'NHS - Find an NHS talking therapies service',
        'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service/',
      ),
      resource(
        'NHS England - Reducing long term opioid use',
        'https://www.england.nhs.uk/long-read/reducing-long-term-opioid-use/',
      ),
    ],
    tutorNotes:
      'Keep the module reassuring and practical. People living with chronic pain often arrive already tired, frustrated or dismissed by previous services, so validation matters. The tutor should avoid a cure narrative and instead emphasise holistic care, pacing, support, and small improvements that make daily life safer and more manageable.',
  }),
};
