import type {
  ModuleResearch,
  ModuleResearchSource,
  ModuleResearchSourceType,
} from './moduleResearch.ts';
import { AUTHORED_MODULE_RESEARCH_BATCH_11_15 } from './moduleResearch.authored.batch-11-15.ts';
import { AUTHORED_MODULE_RESEARCH_BATCH_16_20 } from './moduleResearch.authored.batch-16-20.ts';
import { AUTHORED_MODULE_RESEARCH_BATCH_21_25 } from './moduleResearch.authored.batch-21-25.ts';

function source(
  label: string,
  url: string,
  type: ModuleResearchSourceType,
): ModuleResearchSource {
  return { label, url, type };
}

function reviewed(
  summary: string,
  teachingPriorities: string[],
  sources: ModuleResearchSource[],
): ModuleResearch {
  return {
    reviewedOn: '2026-03-26',
    summary,
    teachingPriorities,
    sources,
  };
}

export const AUTHORED_MODULE_RESEARCH: Record<number, ModuleResearch> = {
  1: reviewed(
    'This foundation module has been rebuilt around current public-health framing: mental health exists on a continuum, life context matters, early support is protective, and participants need concrete UK help-seeking routes rather than awareness slogans alone.',
    [
      'Teach mental health as part of ordinary health, not a niche topic that begins only in crisis.',
      'Keep social determinants, stigma and inequality visible throughout the session.',
      'Finish with practical routines, warning signs and UK support pathways that learners can actually use.',
      'Use evidence to anchor the session, but prioritise understanding and action over statistics-heavy delivery.',
    ],
    [
      source('WHO - Mental disorders fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders', 'evidence'),
      source('WHO - ICD-11 update for mental, behavioural and neurodevelopmental disorders', 'https://www.who.int/news/item/08-03-2024-new-manual-released-to-support-diagnosis-of-mental--behavioural-and-neurodevelopmental-disorders-added-in-icd-11', 'guideline'),
      source('NHS - How to find local mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/how-to-find-local-mental-health-services/', 'service'),
      source('NHS - Five steps to mental wellbeing', 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/', 'service'),
    ],
  ),
  2: reviewed(
    'This introductory disorders module has been rebuilt to explain diagnosis, formulation, overlap and recovery without teaching labels as destiny. ICD-11, NHS pathways and person-centred assessment remain the safest current anchors for UK-facing teaching.',
    [
      'Separate diagnosis, formulation and identity clearly so participants do not reduce people to labels.',
      'Teach symptom clusters, duration, impairment and risk together rather than as disconnected facts.',
      'Be explicit that comorbidity, differential diagnosis and culture all affect assessment quality.',
      'Keep treatment planning wider than medication-only or willpower-only narratives.',
    ],
    [
      source('WHO - ICD-11 update for mental, behavioural and neurodevelopmental disorders', 'https://www.who.int/news/item/08-03-2024-new-manual-released-to-support-diagnosis-of-mental--behavioural-and-neurodevelopmental-disorders-added-in-icd-11', 'guideline'),
      source('WHO - Mental disorders fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders', 'evidence'),
      source('NHS - Mental health conditions', 'https://www.nhs.uk/mental-health/conditions/', 'service'),
      source('NHS - How to find local mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/how-to-find-local-mental-health-services/', 'service'),
    ],
  ),
  3: reviewed(
    'This autism module has been rebuilt around neuro-affirming UK practice. Current NHS and NICE material supports teaching autism as a neurodevelopmental difference, explaining masking and sensory load clearly, and linking reasonable adjustments with mental health protection.',
    [
      'Teach autism as a varied neurodevelopmental difference rather than a deficit-only condition.',
      'Explain masking, sensory overload and communication mismatch in concrete terms.',
      'Keep assessment pathways and interim support practical and UK-specific.',
      'Address mental health risk without teaching poor mental health as inevitable.',
    ],
    [
      source('NHS - Autism overview', 'https://www.nhs.uk/conditions/autism/', 'service'),
      source('NHS - Signs of autism in adults', 'https://www.nhs.uk/conditions/autism/signs/adults/', 'service'),
      source('NHS - Where to get autism support', 'https://www.nhs.uk/conditions/autism/support/', 'service'),
      source('NICE - Autism spectrum disorder in adults: diagnosis and management', 'https://www.nice.org.uk/guidance/cg142', 'guideline'),
    ],
  ),
  4: reviewed(
    'This ADHD module has been rebuilt around current NHS and NICE guidance, with stronger emphasis on executive function, under-recognised adult presentations, multimodal treatment and practical adjustment rather than stereotype-driven teaching.',
    [
      'Explain ADHD through impairment in attention regulation and executive function, not through laziness myths.',
      'Teach adult presentation, late recognition and under-identification in girls and women clearly.',
      'Cover comorbidity, assessment quality and NHS pathway pressure without drifting into misinformation.',
      'Keep treatment planning broader than medication-only or self-help-only narratives.',
    ],
    [
      source('NHS - Attention deficit hyperactivity disorder (ADHD)', 'https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/', 'service'),
      source('NHS England - ADHD taskforce and programme work', 'https://www.england.nhs.uk/mental-health/adhd/', 'policy'),
      source('NICE - Attention deficit hyperactivity disorder: diagnosis and management', 'https://www.nice.org.uk/guidance/ng87', 'guideline'),
      source('NHS - Talking therapies', 'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service', 'service'),
    ],
  ),
  5: reviewed(
    'This module has been rebuilt around current UK terminology, learning-disability health inequality, accessible communication and rights-based support. NICE guidance continues to support person-centred assessment, communication adjustments and understanding behaviour that challenges through need and context.',
    [
      'Use precise UK terminology and distinguish learning disability from specific learning differences clearly.',
      'Keep diagnostic overshadowing central to the mental-health teaching.',
      'Treat accessible communication and supported decision-making as safety and rights issues.',
      'Link inclusive practice to ordinary service design, not only specialist settings.',
    ],
    [
      source('NHS - Learning disabilities overview', 'https://www.nhs.uk/conditions/learning-disabilities/', 'service'),
      source('NHS England - Find out about the Learning Disability Register', 'https://www.england.nhs.uk/long-read/find-out-about-the-learning-disability-register/', 'service'),
      source('NICE - Mental health problems in people with learning disabilities: prevention, assessment and management', 'https://www.nice.org.uk/guidance/ng54', 'guideline'),
      source('NICE - Challenging behaviour and learning disabilities', 'https://www.nice.org.uk/guidance/ng11', 'guideline'),
    ],
  ),
  6: reviewed(
    'This module has been rebuilt to distinguish normal post-stressor reactions from acute stress and adjustment disorder, with clearer teaching on stabilisation, functional impact, red flags and early UK help-seeking routes.',
    [
      'Do not over-diagnose ordinary distress, but do not minimise severe impairment either.',
      'Teach timing, duration, functional impact and risk as the main decision anchors.',
      'Prioritise stabilisation, safety and practical support before detailed trauma processing.',
      'Keep UK help-seeking routes and urgent escalation points explicit.',
    ],
    [
      source('NICE - Post-traumatic stress disorder', 'https://www.nice.org.uk/guidance/ng116', 'guideline'),
      source('NHS - PTSD overview', 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/', 'service'),
      source('NHS - Talking therapies', 'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service', 'service'),
      source('NHS - Urgent help for mental health', 'https://www.nhs.uk/mental-health/urgent-help-for-mental-health/', 'service'),
    ],
  ),
  7: reviewed(
    'This PTSD module has been rebuilt around NICE and NHS guidance, with stronger distinction between PTSD and complex PTSD, greater emphasis on trauma-informed pacing, and clearer teaching on treatment, triggers and day-to-day support.',
    [
      'Teach re-experiencing, avoidance and persistent threat clearly and without sensationalism.',
      'Explain complex PTSD as more than symptom severity alone, especially around identity, relationships and regulation.',
      'Keep trauma-informed care grounded in safety, choice, pacing and non-coercive support.',
      'Pair hope with realistic recovery expectations and good signposting.',
    ],
    [
      source('NICE - Post-traumatic stress disorder', 'https://www.nice.org.uk/guidance/ng116', 'guideline'),
      source('NHS - PTSD overview', 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/', 'service'),
      source('NHS - PTSD treatment', 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/treatment/', 'service'),
      source('NHS - Talking therapies', 'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service', 'service'),
    ],
  ),
  8: reviewed(
    'This domestic abuse module has been rebuilt around coercive control, mental health impact, disclosure, safety planning and multi-agency response. Current UK guidance supports clear naming of abuse, survivor-centred support and early safeguarding action where risk is high.',
    [
      'Teach domestic abuse as a pattern of control, not just isolated physical assaults.',
      'Keep mental health impact tied to fear, isolation and coercion rather than abstract symptom lists.',
      'Make first-response language, safeguarding and safety planning practical and explicit.',
      'Avoid victim-blaming language and avoid inviting autobiographical disclosure in teaching.',
    ],
    [
      source('GOV.UK - Domestic abuse: how to get help', 'https://www.gov.uk/guidance/domestic-violence-and-abuse', 'service'),
      source('NICE - Domestic violence and abuse: multi-agency working', 'https://www.nice.org.uk/guidance/ph50', 'guideline'),
      source('WHO - Violence against women fact sheet', 'https://www.who.int/news-room/fact-sheets/violence-against-women', 'evidence'),
      source('NHS - Sexual assault referral centres (SARCs)', 'https://www.nhs.uk/SARCs', 'service'),
    ],
  ),
  9: reviewed(
    'This childhood trauma and ACEs module has been rebuilt to explain developmental impact without determinism. Current evidence supports using ACEs as a risk lens, centring protective relationships, and combining trauma-informed care with clear safeguarding and follow-up.',
    [
      'Teach ACEs as population-level indicators, not destiny scores for individuals.',
      'Explain developmental and mental health impact in practical terms such as regulation, learning, trust and behaviour.',
      'Keep protective relationships and trauma-informed environments central to the recovery message.',
      'Make safeguarding thresholds explicit when current abuse or neglect may still be present.',
    ],
    [
      source('UKHSA - National household survey of adverse childhood experiences in England', 'https://researchportal.ukhsa.gov.uk/en/publications/national-household-survey-of-adverse-childhood-experiences-and-th/', 'evidence'),
      source('NICE - Post-traumatic stress disorder', 'https://www.nice.org.uk/guidance/ng116', 'guideline'),
      source('NHS - Talking therapies', 'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service', 'service'),
      source('NHS - Mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/', 'service'),
    ],
  ),
  10: reviewed(
    'This self-harm and suicide-prevention module has been rebuilt around direct risk recognition, compassionate response, safety planning and urgent UK escalation routes. Current guidance supports asking clearly about suicidal thoughts, treating self-harm seriously and making crisis pathways explicit.',
    [
      'Teach self-harm and suicidal distress as serious, with overlap but not complete equivalence.',
      'Correct the myth that asking directly about suicide creates suicidal thoughts.',
      'Make emergency thresholds, urgent routes and safety planning concrete and operational.',
      'Avoid graphic detail and keep the module firmly safeguarding-led.',
    ],
    [
      source('NICE - Self-harm: assessment, management and preventing recurrence', 'https://www.nice.org.uk/guidance/ng225', 'guideline'),
      source('NHS - Self-harm', 'https://www.nhs.uk/mental-health/conditions/self-harm/', 'service'),
      source('NHS - Urgent help for mental health', 'https://www.nhs.uk/mental-health/urgent-help-for-mental-health/', 'service'),
      source('Samaritans - 116 123 and online support', 'https://www.samaritans.org', 'service'),
    ],
  ),
  ...AUTHORED_MODULE_RESEARCH_BATCH_11_15,
  ...AUTHORED_MODULE_RESEARCH_BATCH_16_20,
  ...AUTHORED_MODULE_RESEARCH_BATCH_21_25,
};
