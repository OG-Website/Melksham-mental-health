import type { ModuleGuide, SessionSegment } from './moduleGuides.ts';

type Slide = { title: string; bullets: string[]; notes: string[] };
type Definition = Omit<ModuleGuide, 'slideOutline' | 'deliveryScript'> & { slides: Slide[] };

const TIMES = ['0-10 min', '10-25 min', '25-40 min', '40-60 min', '60-80 min', '80-100 min', '100-120 min'];

function buildSessionBreakdown(labels: string[]): SessionSegment[] {
  return TIMES.map((time, index) => ({ time, label: labels[index] ?? labels[labels.length - 1] ?? 'Module delivery' }));
}

function buildDeliveryScript(slides: Slide[]): string {
  return slides.map((slide, index) => `SLIDE ${index + 1} - ${slide.title}\n\n${slide.notes.join('\n\n')}`).join('\n\n');
}

function guide(definition: Definition): ModuleGuide {
  const { slides, ...rest } = definition;
  return { ...rest, slideOutline: slides.map(({ title, bullets }) => ({ title, bullets })), deliveryScript: buildDeliveryScript(slides) };
}

function resource(label: string, url: string) {
  return { label, url };
}

export const AUTHORED_MODULE_GUIDES_BATCH_16_20: Record<number, ModuleGuide> = {
  16: guide({
    id: 16,
    topic: 'Anxiety Disorders: OCD and Related Conditions',
    summary: 'Bespoke OCD teaching on intrusive thoughts, compulsions, BDD, hoarding and ERP.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and normalising intrusive thoughts',
      'OCD, obsession-compulsion cycle and hidden distress',
      'Body dysmorphic disorder and hoarding',
      'Assessment, support and ERP',
      'Activity: map the OCD cycle',
      'Discussion on shame and reassurance',
      'Wrap-up and next steps',
    ]),
    slides: [
      {
        title: 'What OCD Is',
        bullets: [
          'Intrusive obsessions plus compulsions to reduce distress.',
          'Content may involve contamination, harm, religion, sexuality or symmetry.',
          'OCD is not the same as being tidy or careful.',
          'The thoughts feel alien and distressing to the person.',
        ],
        notes: [
          'Remove the stereotype of OCD as neatness.',
          'Name intrusive thoughts as common, but explain that OCD turns them into a rigid loop.',
        ],
      },
      {
        title: 'The OCD Cycle',
        bullets: [
          'Intrusion triggers anxiety.',
          'Compulsion gives short-term relief.',
          'Relief reinforces the cycle.',
          'Avoidance keeps fear alive.',
        ],
        notes: [
          'This is the core model for the module.',
          'The person is not choosing the pattern; they are trapped in it.',
        ],
      },
      {
        title: 'Related Conditions',
        bullets: [
          'BDD is distress about perceived appearance flaws.',
          'Hoarding involves difficulty discarding possessions.',
          'Both can be serious and hidden.',
          'Shame often delays help-seeking.',
        ],
        notes: [
          'Teach BDD and hoarding as real conditions, not quirks.',
          'Name risk, impairment and distress clearly.',
        ],
      },
      {
        title: 'Assessment and Support',
        bullets: [
          'Assessment should explore hidden rituals, reassurance and avoidance.',
          'CBT with ERP is a key evidence-based treatment.',
          'Family accommodation can maintain symptoms.',
          'Medication may help when symptoms are severe.',
        ],
        notes: [
          'Explain ERP in simple language.',
          'Stress that reassurance can accidentally feed the cycle.',
        ],
      },
      {
        title: 'Recovery',
        bullets: [
          'Recovery means more freedom and less fear.',
          'Progress is usually gradual.',
          'Support often needs to be shared.',
          'Hope works best with a clear plan.',
        ],
        notes: [
          'Keep recovery concrete and realistic.',
          'Do not promise quick fixes.',
        ],
      },
    ],
    activity: `ACTIVITY - Map the OCD Cycle\n\nUse a short fictional scenario. Ask the group to identify the obsession, anxiety trigger, compulsion and short-term relief, then propose one ERP-style intervention.`,
    discussionPrompts: [
      'Why do reassurance and accommodation backfire?',
      'How do we reduce shame around intrusive thoughts?',
      'Why are BDD and hoarding often missed?',
      'How should families support recovery?',
    ],
    resources: [
      resource('NHS - OCD symptoms and help', 'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/symptoms/'),
      resource('NHS - Body dysmorphic disorder', 'https://www.nhs.uk/mental-health/conditions/body-dysmorphia/'),
      resource('NHS - Hoarding disorder', 'https://www.nhs.uk/mental-health/conditions/hoarding-disorder/'),
      resource('NICE - Obsessive-compulsive disorder and body dysmorphic disorder: treatment', 'https://www.nice.org.uk/guidance/cg31'),
    ],
    tutorNotes: 'Keep the tone non-judgemental. Normalise intrusive thoughts without minimising distress.',
    powerPoint: 'Use plain diagrams for the OCD cycle and ERP. Avoid clutter.',
  }),
  17: guide({
    id: 17,
    topic: 'Dissociative and Somatic Disorders',
    summary: 'Bespoke teaching on dissociation, depersonalisation, derealisation, functional neurological symptoms and persistent physical symptoms.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and grounding',
      'What dissociation is and why it happens',
      'Depersonalisation, derealisation and amnesia',
      'Functional neurological symptoms and persistent symptoms',
      'Activity: build a grounding plan',
      'Discussion on mind-body language and stigma',
      'Wrap-up and review',
    ]),
    slides: [
      {
        title: 'What Dissociation Is',
        bullets: [
          'A disconnection in memory, identity, body awareness or emotion.',
          'Mild forms can be common.',
          'Severe forms need support.',
          'It is a real change in integration, not fabrication.',
        ],
        notes: [
          'Make the concept plain and non-sensational.',
          'Normalise mild dissociation without minimising severe symptoms.',
        ],
      },
      {
        title: 'Depersonalisation and Derealisation',
        bullets: [
          'Depersonalisation can feel like detachment from the self.',
          'Derealisation can feel like the world is unreal or distant.',
          'Reality testing is usually preserved.',
          'Stress, panic and trauma can contribute.',
        ],
        notes: [
          'Use simple examples and distinguish from psychosis.',
          'These symptoms can be terrifying even when reality testing remains intact.',
        ],
      },
      {
        title: 'Functional and Persistent Physical Symptoms',
        bullets: [
          'Functional neurological symptoms are real and disabling.',
          'Persistent pain, fatigue or dizziness still need respect.',
          'Inconclusive tests do not mean fake symptoms.',
          'Physical and psychological assessment may both be needed.',
        ],
        notes: [
          'Reject dismissal and over-medicalising equally.',
          'Teach respectful curiosity and combined assessment.',
        ],
      },
      {
        title: 'Grounding and Regulation',
        bullets: [
          'Grounding can help when dissociation rises.',
          'Pacing, safety and predictability reduce overwhelm.',
          'A trusted person can help without crowding.',
          'Track patterns over time.',
        ],
        notes: [
          'Give the group practical skills, not just theory.',
          'Consent and pacing matter.',
        ],
      },
      {
        title: 'Support and Stigma',
        bullets: [
          'People are often misread as attention-seeking or fabricated.',
          'That increases shame and delays care.',
          'Validation and clear explanation help.',
          'Trauma-informed support improves trust.',
        ],
        notes: [
          'Name stigma directly.',
          'Belief and explanation are part of care.',
        ],
      },
    ],
    activity: `ACTIVITY - Build a Grounding Plan\n\nUse a fictional scenario. Ask the group to design an early-sign plan, an in-the-moment response and an escalation threshold.`,
    discussionPrompts: [
      'Why are dissociative and functional symptoms often dismissed?',
      'How do we explain them without implying they are imaginary?',
      'What helps somebody stay present?',
      'How should services balance physical and psychological understanding?',
    ],
    resources: [
      resource('NHS - Medically unexplained symptoms', 'https://www.nhs.uk/conditions/medically-unexplained-symptoms/'),
      resource('NHS - Mental health conditions', 'https://www.nhs.uk/mental-health/conditions/'),
      resource('NHS - Mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/'),
      resource('NICE - Rehabilitation for chronic neurological disorders including functional neurological disorders', 'https://www.nice.org.uk/news/articles/tackling-variation-in-rehab-for-people-with-neurological-conditions'),
    ],
    tutorNotes: 'Keep the tone grounding and non-dismissive.',
    powerPoint: 'Use clean explanatory diagrams and avoid sensational labels.',
  }),
  18: guide({
    id: 18,
    topic: 'Eating Disorders and Body Image',
    summary: 'A recovery-focused module on anorexia, bulimia, binge eating disorder, ARFID, body image pressure and safe support.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and safety framing',
      'What eating disorders are and why they matter',
      'Anorexia, bulimia, binge eating and ARFID',
      'Body image, social pressure and medical risk',
      'Activity: challenge unhelpful food and body scripts',
      'Discussion on shame, support and social media',
      'Wrap-up, support routes and next steps',
    ]),
    slides: [
      {
        title: 'Eating Disorders Are Serious',
        bullets: [
          'Not a choice, fad, or vanity problem.',
          'Can affect anyone, any body size, any gender.',
          'Food control often becomes a coping strategy.',
          'Medical risk and psychological distress both matter.',
        ],
        notes: [
          'Start by stripping away blame.',
          'Explain that the eating behaviour is usually carrying a wider emotional or control function.',
        ],
      },
      {
        title: 'Main Types',
        bullets: [
          'Anorexia: restriction and fear around weight gain or control.',
          'Bulimia: bingeing and compensatory behaviours.',
          'Binge eating disorder: recurrent binges without regular compensation.',
          'ARFID: avoidant or restricted eating not driven by shape concerns.',
        ],
        notes: [
          'Teach the categories clearly but keep the focus on patterns and risk, not memorisation.',
        ],
      },
      {
        title: 'Why Risk Matters',
        bullets: [
          'Restriction can damage heart, bone, hormone and brain function.',
          'People may look determined or high-functioning while risk rises.',
          'Ambivalence is common.',
          'Early intervention is safer than waiting for collapse.',
        ],
        notes: [
          'Keep the medical risk concrete.',
          'Do not wait for a dramatic crisis before taking concern seriously.',
        ],
      },
      {
        title: 'Assessment and Treatment',
        bullets: [
          'Assess physical risk, eating behaviour, beliefs and support needs.',
          'Family and carers often matter, especially for younger people.',
          'Early specialist support improves outcomes.',
          'Recovery is usually multidisciplinary.',
        ],
        notes: [
          'Use a broad assessment frame.',
          'Stress that shame reduction is part of effective care.',
        ],
      },
      {
        title: 'Supporting Recovery',
        bullets: [
          'Do not make every conversation about calories or weight.',
          'Use curiosity about coping, needs and emotions.',
          'Meal support and structure may be part of treatment.',
          'Recovery is not linear.',
        ],
        notes: [
          'Keep the conversation wider than the disorder.',
          'Do not let the support space become a ritual or control battle.',
        ],
      },
    ],
    activity: 'ACTIVITY - Rewrite the Script: rewrite common food and body comments into safer, less shaming language.',
    discussionPrompts: [
      'Why do eating disorders stay hidden for so long?',
      'How does shame stop people asking for help?',
      'What does recovery look like when food is the main coping strategy?',
      'How should services talk about body image without moralising food or weight?',
    ],
    resources: [
      resource('NHS - Eating disorders overview', 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/'),
      resource('NICE - Eating disorders: recognition and treatment', 'https://www.nice.org.uk/guidance/ng69'),
      resource('NHS England - Children and young people eating disorders', 'https://www.england.nhs.uk/mental-health/cyp/eating-disorders/'),
      resource('Beat National Helpline', 'https://www.nhs.uk/services/service-directory/beat-national-helpline-head-office/N10954074'),
    ],
    tutorNotes: 'Watch for diet talk and body-shaming. Bring the group back to shame reduction and support.',
    powerPoint: 'Use calm visuals and avoid weight-loss imagery.',
  }),
  19: guide({
    id: 19,
    topic: 'Sleep and Circadian Rhythm Disorders',
    summary: 'A practical sleep module on insomnia, sleep apnoea, narcolepsy, circadian disruption and CBT-I.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and why sleep is central',
      'Sleep, circadian rhythm and mental health',
      'Insomnia, sleep apnoea and narcolepsy',
      'Parasomnias, shift work and practical risks',
      'Activity: redesign a sleep plan that people can actually use',
      'Discussion on habits, myths and access to help',
      'Wrap-up, CBT-I and next steps',
    ]),
    slides: [
      {
        title: 'Sleep Matters',
        bullets: [
          'Poor sleep raises anxiety, low mood and reactivity.',
          'Sleep problems worsen concentration and coping.',
          'Sleep is a core health process, not optional self-care.',
          'Regular sleep-wake patterns matter.',
        ],
        notes: [
          'Open with sleep as a mental health foundation.',
        ],
      },
      {
        title: 'Insomnia',
        bullets: [
          'Difficulty falling asleep, staying asleep or getting restorative sleep.',
          'Short-term insomnia can follow stress.',
          'Long-term insomnia needs specific treatment.',
          'Sleep hygiene helps, but is not always enough.',
        ],
        notes: [
          'Make the difference between short-term and long-term insomnia clear.',
        ],
      },
      {
        title: 'Sleep Apnoea and Narcolepsy',
        bullets: [
          'Sleep apnoea stops and starts breathing during sleep.',
          'Narcolepsy causes excessive daytime sleepiness and sudden sleep attacks.',
          'These are medical sleep disorders, not laziness.',
          'Referral matters when symptoms suggest more than insomnia.',
        ],
        notes: [
          'Teach the differential clearly.',
          'Name the functional impact directly.',
        ],
      },
      {
        title: 'Circadian and Safety Issues',
        bullets: [
          'Shift work and irregular routines disrupt circadian rhythm.',
          'Parasomnias can include sleepwalking or night terrors.',
          'Sleep timing affects mood and alertness.',
          'Tiredness can create safety risks at work and on the road.',
        ],
        notes: [
          'Bring sleep into everyday life and safety.',
        ],
      },
      {
        title: 'CBT-I and Realistic Plans',
        bullets: [
          'CBT-I is the main route for chronic insomnia.',
          'Good plans are specific and realistic.',
          'Medication is not the whole answer.',
          'Small changes maintained consistently beat perfectionism.',
        ],
        notes: [
          'Teach CBT-I as the evidence-based centre of gravity for chronic insomnia.',
        ],
      },
    ],
    activity: 'ACTIVITY - Make the Plan Real: build a sleep plan that fits an ordinary busy week, then simplify it twice.',
    discussionPrompts: [
      'Why do people blame themselves for sleep problems?',
      'When is sleep hygiene enough and when does someone need assessment or CBT-I?',
      'How do work patterns and caring responsibilities change good sleep advice?',
      'What is the smallest sleep change that would matter this week?',
    ],
    resources: [
      resource('NHS - Insomnia', 'https://www.nhs.uk/conditions/insomnia/'),
      resource('NHS - Sleep problems', 'https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/'),
      resource('NHS - Sleep apnoea', 'https://www.nhs.uk/conditions/sleep-apnoea/'),
      resource('NHS - Narcolepsy', 'https://www.nhs.uk/conditions/narcolepsy/'),
    ],
    tutorNotes: 'Keep the pacing steady. Many people in the room may already be sleep deprived.',
    powerPoint: 'Use simple timeline and circadian visuals.',
  }),
  20: guide({
    id: 20,
    topic: 'Impulse-Control and Disruptive Disorders',
    summary: 'A module on impulsivity, anger, disruptive behaviour, conduct problems and support that looks beyond moral judgement.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome back and reframing difficult behaviour',
      'What impulse-control and disruptive disorders are',
      'Anger, aggression, conduct problems and ODD-style patterns',
      'Development, trauma, ADHD and comorbidity',
      'Activity: behaviour as communication map',
      'Discussion on consequences, boundaries and support',
      'Wrap-up, family and service routes',
    ]),
    slides: [
      {
        title: 'Impulse Control Is a Regulation Problem',
        bullets: [
          'Difficulty pausing, weighing consequences and choosing another action.',
          'Anger and aggression may be responses to threat or overwhelm.',
          'A clinical lens asks why the behaviour is happening.',
          'Shame alone does not teach regulation.',
        ],
        notes: [
          'Remove the moral verdict and replace it with a regulation frame.',
        ],
      },
      {
        title: 'Disruptive Behaviour Has Patterns',
        bullets: [
          'Arguing, defiance, aggression, lying, theft or property damage can cluster into patterns.',
          'Triggers may include frustration, trauma, boredom or inconsistent boundaries.',
          'The same behaviour can mean different things in different contexts.',
          'Assessment should look for function, not just the surface event.',
        ],
        notes: [
          'Teach pattern recognition rather than single-incident judgement.',
        ],
      },
      {
        title: 'Children, Young People and Adults',
        bullets: [
          'Conduct disorder is a childhood and adolescent diagnosis.',
          'Adult presentations may be framed differently.',
          'The earlier the pattern is recognised, the better the chance to help.',
          'School, family and social environments matter.',
        ],
        notes: [
          'Keep terminology age-appropriate and careful.',
        ],
      },
      {
        title: 'Drivers and Boundaries',
        bullets: [
          'ADHD, trauma, autism, learning disability and substance use can overlap.',
          'Sleep deprivation and stress also increase risk.',
          'Clear limits work better when they are predictable and calm.',
          'Consequences should be proportionate and linked to repair.',
        ],
        notes: [
          'Do not assume one cause or one fix.',
        ],
      },
      {
        title: 'Skills Can Be Taught',
        bullets: [
          'Emotion regulation, problem-solving and delay can be practised.',
          'Families and schools can use the same language and expectations.',
          'Positive experiences strengthen self-control over time.',
          'The goal is safer behaviour, not simply compliance.',
        ],
        notes: [
          'The hopeful message is that regulation is teachable.',
        ],
      },
    ],
    activity: 'ACTIVITY - Behaviour as Communication Map: map trigger, behaviour, function and likely consequence, then redesign the adult response.',
    discussionPrompts: [
      'Why do families and schools get stuck in escalation cycles?',
      'How can consequences be firm without being humiliating?',
      'What underlying factors are most often missed when behaviour looks oppositional?',
      'How should services balance safety, family wellbeing and developmental support?',
    ],
    resources: [
      resource('NICE - Conduct disorders in children and young people', 'https://www.nice.org.uk/guidance/cg158'),
      resource('NHS - Helping your child with anger issues', 'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/help-your-child-with-anger-issues/'),
      resource('NHS - Teen aggression and arguments', 'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/teen-aggression-and-arguments/'),
      resource('NHS - Get help with anger', 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anger/'),
    ],
    tutorNotes: 'Keep the discussion tied to evidence and child development.',
    powerPoint: 'Use clear behaviour-function diagrams and avoid dramatic imagery.',
  }),
};
