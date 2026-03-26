type ModuleResearchSourceType = 'guideline' | 'service' | 'statistics' | 'policy' | 'evidence';

type ModuleResearchSource = {
  label: string;
  url: string;
  type: ModuleResearchSourceType;
};

type ModuleResearch = {
  reviewedOn: string;
  summary: string;
  teachingPriorities: string[];
  sources: ModuleResearchSource[];
};

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

export const AUTHORED_MODULE_RESEARCH_BATCH_11_15: Record<number, ModuleResearch> = {
  11: reviewed(
    'This depression module has been rebuilt around current NHS and NICE guidance, with stronger attention to severity, function, relapse planning and the difference between ordinary sadness, grief and clinical depression.',
    [
      'Teach depression as a whole-life impairment, not only a mood state.',
      'Separate ordinary distress, grief and depressive disorder clearly.',
      'Match treatment intensity to severity, function and risk.',
      'Keep relapse prevention and urgent help routes explicit.',
    ],
    [
      source('NHS - Depression in adults', 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/', 'service'),
      source('NHS - Symptoms of depression in adults', 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/symptoms/', 'service'),
      source('NICE - Depression in adults: treatment and management', 'https://www.nice.org.uk/guidance/ng222', 'guideline'),
      source('NHS - Urgent help for mental health', 'https://www.nhs.uk/mental-health/urgent-help-for-mental-health/', 'service'),
    ],
  ),
  12: reviewed(
    'This bipolar module has been rebuilt to emphasise episode patterns, differential diagnosis, risk linked to sleep and judgement changes, and the practical reality that people often present with depression before hypomania or mania is recognised.',
    [
      'Teach bipolar disorder as a pattern of episodes rather than a single mood state.',
      'Clarify mania, hypomania and depression without using caricature or stereotype.',
      'Make relapse prevention, sleep and crisis planning central to the session.',
      'Explain why diagnosis often takes time and longitudinal assessment matters.',
    ],
    [
      source('NHS - Bipolar disorder', 'https://www.nhs.uk/mental-health/conditions/bipolar-disorder/', 'service'),
      source('NICE - Bipolar disorder: assessment and management', 'https://www.nice.org.uk/guidance/cg185', 'guideline'),
      source('NHS - Annual health check for people with severe mental health conditions', 'https://www.nhs.uk/mental-health/social-care-and-your-rights/annual-health-check-smi/', 'service'),
      source('Bipolar UK', 'https://www.bipolaruk.org', 'service'),
    ],
  ),
  13: reviewed(
    'This module has been rebuilt to distinguish seasonal affective disorder from persistent depressive disorder and to show how chronic low mood can become invisible when it feels normal to the person. The evidence points toward pattern-based assessment, combined treatment and advance planning for seasonal recurrence.',
    [
      'Teach seasonal pattern, chronicity and baseline comparison clearly.',
      'Avoid treating long-term depression as a personality trait or fixed state.',
      'Use light, routine and psychotherapy as contextually useful supports without overselling any one tool.',
      'Keep relapse prevention and early review visible in the delivery.',
    ],
    [
      source('NHS - Seasonal affective disorder (SAD)', 'https://www.nhs.uk/mental-health/conditions/seasonal-affective-disorder-sad/diagnosis/', 'service'),
      source('NHS - Depression in adults', 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/', 'service'),
      source('NICE - Depression in adults: treatment and management', 'https://www.nice.org.uk/guidance/ng222', 'guideline'),
      source('NHS - Urgent help for mental health', 'https://www.nhs.uk/mental-health/urgent-help-for-mental-health/', 'service'),
    ],
  ),
  14: reviewed(
    'This generalised anxiety module has been rebuilt around persistent worry loops, bodily symptoms, differential diagnosis and evidence-based UK treatment options. The strongest teaching point is that anxiety becomes self-reinforcing through reassurance seeking, avoidance and chronic hypervigilance.',
    [
      'Teach GAD as persistent, hard-to-control worry across multiple domains.',
      'Explain body symptoms, worry loops and reassurance seeking as part of the same cycle.',
      'Keep assessment, CBT-based support and symptom management practically grounded.',
      'Normalise that anxiety can be severe even when the person still appears functional.',
    ],
    [
      source('NHS - Generalised anxiety disorder (GAD)', 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/diagnosis/', 'service'),
      source('NICE - Generalised anxiety disorder and panic disorder in adults: management', 'https://www.nice.org.uk/guidance/cg113', 'guideline'),
      source('NHS England - NHS Talking Therapies', 'https://www.england.nhs.uk/mental-health/adults/nhs-talking-therapies/', 'service'),
      source('NHS - Urgent help for mental health', 'https://www.nhs.uk/mental-health/urgent-help-for-mental-health/', 'service'),
    ],
  ),
  15: reviewed(
    'This phobia and panic module has been rebuilt to distinguish specific fear disorders from generalised anxiety, to explain panic attacks and panic disorder clearly, and to frame exposure-based treatment as a safe, gradual and collaborative process.',
    [
      'Separate phobias, panic attacks and panic disorder with concrete examples.',
      'Teach avoidance and anticipatory anxiety as the mechanisms that keep fear alive.',
      'Make exposure planning structured, graded and choice-based.',
      'Keep emergency medical assessment and urgent mental health escalation clearly separate where appropriate.',
    ],
    [
      source('NHS - Phobias', 'https://www.nhs.uk/mental-health/conditions/phobias/overview/', 'service'),
      source('NHS - Panic disorder', 'https://www.nhs.uk/mental-health/conditions/panic-disorder/', 'service'),
      source('NICE - Generalised anxiety disorder and panic disorder in adults: management', 'https://www.nice.org.uk/guidance/cg113', 'guideline'),
      source('NHS - Talking therapies', 'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service', 'service'),
    ],
  ),
};
