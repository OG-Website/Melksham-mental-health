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

export const AUTHORED_MODULE_RESEARCH_BATCH_26_30: Record<number, ModuleResearch> = {
  26: reviewed(
    'This module has been rebuilt around the reciprocal relationship between chronic physical illness and mental health. Current NHS and NICE guidance supports joining up pain, fatigue, disability, depression and practical adjustment rather than treating them as separate silos.',
    [
      'Teach the physical and psychological load of long-term conditions as intertwined.',
      'Keep pain, fatigue, identity change and grief visible in the session.',
      'Emphasise coordination, accessible care and reasonable adjustments.',
      'Avoid framing chronic symptoms as either purely physical or purely psychological.',
    ],
    [
      source('NICE - Depression in adults with a chronic physical health problem', 'https://www.nice.org.uk/guidance/cg91', 'guideline'),
      source('NHS - Long-term conditions and mental health', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/long-term-physical-health-condition-and-mental-health/', 'service'),
      source('NHS - Health conditions and mental health', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/health-conditions-and-mental-health/', 'service'),
      source('NHS England - Improving the physical health of people living with severe mental illness', 'https://www.england.nhs.uk/long-read/improving-the-physical-health-of-people-living-with-severe-mental-illness/', 'policy'),
    ],
  ),
  27: reviewed(
    'This workplace module has been rebuilt around HSE stress guidance and NHS workplace mental health material, with stronger emphasis on workload, control, recovery and organisational responsibility rather than reducing burnout to personal coping style.',
    [
      'Teach burnout as a system and job-design issue, not only an individual one.',
      'Link workload, support, role clarity and recovery time to mental health outcomes.',
      'Make manager responsibilities and graded return to work explicit.',
      'Keep HSE-aligned prevention and signposting visible.',
    ],
    [
      source('HSE - Stress and mental health at work', 'https://www.hse.gov.uk/stress/', 'guideline'),
      source('HSE - Managing home workers\' health and safety: stress and mental health', 'https://www.hse.gov.uk/home-working/employer/stress-and-mental-health.htm', 'guideline'),
      source('HSE - Stress Indicator Tool', 'https://books.hse.gov.uk/Stress-Indicator-Tool/', 'service'),
      source('NHS - Work, stress and mental health', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/work-stress-and-mental-health/', 'service'),
    ],
  ),
  28: reviewed(
    'This loneliness module has been rebuilt around the difference between loneliness and social isolation, the health impact of disconnection, and practical ways services and communities can create repeated, low-pressure opportunities for belonging.',
    [
      'Teach loneliness as a real health concern, not just a social inconvenience.',
      'Differentiate feeling lonely from being socially isolated.',
      'Emphasise repetition, familiarity and low-friction connection steps.',
      'Keep stigma, exclusion and structural risk factors visible.',
    ],
    [
      source('NHS - Loneliness', 'https://www.nhs.uk/every-mind-matters/lifes-challenges/loneliness/', 'service'),
      source('GOV.UK - Government\'s work on tackling loneliness', 'https://www.gov.uk/guidance/governments-work-on-tackling-loneliness', 'policy'),
      source('NHS England - Loneliness and Social Isolation', 'https://www.hee.nhs.uk/our-work/population-health/our-resources-hub/loneliness-social-isolation', 'service'),
      source('HSE - Lone working and stress', 'https://www.hse.gov.uk/lone-working/employer/stress-other-factors.htm', 'guideline'),
    ],
  ),
  29: reviewed(
    'This financial stress module has been rebuilt around the mental health impact of money worries, debt, insecurity and shame, with emphasis on practical advice routes and dignity-preserving support.',
    [
      'Teach money stress as mental health stress, not just a budgeting problem.',
      'Reduce shame and avoidance by using respectful language about debt and insecurity.',
      'Keep practical advice routes and immediate stabilisation steps visible.',
      'Link financial strain to sleep, anxiety, relationships and self-worth.',
    ],
    [
      source('NHS - Mental health and money worries', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/money-worries-and-mental-health/', 'service'),
      source('Citizens Advice', 'https://www.citizensadvice.org.uk', 'service'),
      source('StepChange Debt Charity', 'https://www.stepchange.org', 'service'),
      source('MoneyHelper', 'https://www.moneyhelper.org.uk', 'service'),
    ],
  ),
  30: reviewed(
    'This relationships and attachment module has been rebuilt to explain how early attachment patterns shape adult relationships without implying destiny, and to centre repair, boundaries, trust and relational safety as teachable skills.',
    [
      'Teach attachment as a pattern that can change, not a fixed verdict.',
      'Use conflict, repair and boundaries as practical relationship skills.',
      'Keep coercive control and safeguarding clearly separate from ordinary attachment difficulty.',
      'Balance theory with everyday examples of trust and communication.',
    ],
    [
      source('NHS - Relationships and mental health', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/relationships-and-mental-health/', 'service'),
      source('Relate', 'https://www.relate.org.uk', 'service'),
      source('Mind - Relationships and mental health', 'https://www.mind.org.uk/information-support/your-story/relationships-and-mental-health/', 'service'),
      source('NHS - Support for adults experiencing relationship problems', 'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/relationships-and-mental-health/', 'service'),
    ],
  ),
};
