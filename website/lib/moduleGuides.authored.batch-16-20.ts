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
};
