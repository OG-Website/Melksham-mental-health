import type {
  ModuleResearch,
  ModuleResearchSource,
  ModuleResearchSourceType,
} from './moduleResearch.ts';

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

export const AUTHORED_MODULE_RESEARCH_BATCH_21_25: Record<number, ModuleResearch> = {
  21: reviewed(
    'This substance-use module has been rebuilt around harm reduction, dual diagnosis and the reality that substance use usually serves a function before it becomes a crisis. Current NHS and NICE material supports a non-judgemental response that includes withdrawal risk, psychosocial treatment and practical recovery routes.',
    [
      'Teach use, misuse, dependence and addiction as related but distinct ideas.',
      'Keep the function of use, withdrawal risk and dual diagnosis central.',
      'Use harm reduction as a legitimate evidence-based intervention rather than a fallback.',
      'Make the UK treatment route map concrete and localisable.',
    ],
    [
      source('NHS - Alcohol misuse', 'https://www.nhs.uk/conditions/alcohol-misuse/', 'service'),
      source('NHS - Drug addiction: getting help', 'https://www.nhs.uk/live-well/drugs/Pages/Drugtreatment.aspx', 'service'),
      source('NHS - Find alcohol addiction support services', 'https://www.nhs.uk/nhs-services/find-alcohol-addiction-support-services/', 'service'),
      source('NICE - Alcohol-use disorders: diagnosis, assessment and management', 'https://www.nice.org.uk/guidance/cg115', 'guideline'),
      source('NICE - Drug misuse: psychosocial interventions', 'https://www.nice.org.uk/guidance/cg51', 'guideline'),
    ],
  ),
  22: reviewed(
    'This psychosis module has been rebuilt around early recognition, differential diagnosis, support in first episode psychosis, relapse prevention and the need for physical health monitoring. Current NHS, NICE and WHO material supports a calm, practical and hopeful teaching frame.',
    [
      'Teach psychosis as a symptom pattern that can have multiple causes, not as a single diagnosis.',
      'Keep differential diagnosis, early intervention and physical health support visible throughout.',
      'Model the kind of response that reduces fear, arousal and confrontation.',
      'Use recovery-oriented language that is accurate and not falsely optimistic.',
    ],
    [
      source('NHS - Psychosis overview', 'https://www.nhs.uk/conditions/psychosis/', 'service'),
      source('NHS - Diagnosis of psychosis', 'https://www.nhs.uk/mental-health/conditions/psychosis/diagnosis/', 'service'),
      source('NHS - Schizophrenia treatment', 'https://www.nhs.uk/mental-health/conditions/schizophrenia/treatment/', 'service'),
      source('NICE - Psychosis and schizophrenia in adults: prevention and management', 'https://www.nice.org.uk/guidance/cg178', 'guideline'),
      source('WHO - Schizophrenia fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/schizophrenia', 'evidence'),
    ],
  ),
  23: reviewed(
    'This personality-disorder module has been rebuilt to keep Cluster A and Cluster B separate, avoid pejorative language and centre formulation, trauma, boundaries and structured treatment. NHS and NICE guidance supports a recovery-oriented approach with clear risk management and anti-stigma teaching.',
    [
      'Teach personality disorder as enduring patterns that are shaped by history and context.',
      'Keep Cluster A and Cluster B distinct so the room does not collapse the material into one stereotype.',
      'Treat boundaries and consistency as treatment tools, not rejection.',
      'Make stigma reduction and formulation language part of the evidence base, not an optional extra.',
    ],
    [
      source('NHS - Borderline personality disorder overview', 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/', 'service'),
      source('NHS - Borderline personality disorder treatment', 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/treatment/', 'service'),
      source('NICE - Borderline personality disorder: recognition and management', 'https://www.nice.org.uk/guidance/cg78', 'guideline'),
      source('NICE - Antisocial personality disorder: prevention and management', 'https://www.nice.org.uk/guidance/cg77', 'guideline'),
      source('NHS England - Offender personality disorder pathway', 'https://www.england.nhs.uk/long-read/the-offender-personality-disorder-pathway/', 'policy'),
    ],
  ),
  24: reviewed(
    'This Cluster C module has been rebuilt around anxiety, shame, perfectionism and fear-based coping. The current guidance landscape supports a careful distinction between avoidant, dependent and obsessive-compulsive personality features, plus a collaboration-first approach to treatment.',
    [
      'Teach Cluster C as fear-driven coping rather than simple awkwardness or fussiness.',
      'Keep the difference between OCD and obsessive-compulsive personality features explicit.',
      'Show how treatment works by reducing shame and increasing flexibility over time.',
      'Link the teaching to ordinary life, work and relationships rather than abstract psychology alone.',
    ],
    [
      source('NHS - Borderline personality disorder overview', 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/', 'service'),
      source('NICE - Borderline personality disorder: recognition and management', 'https://www.nice.org.uk/guidance/cg78', 'guideline'),
      source('NICE - Antisocial personality disorder: prevention and management', 'https://www.nice.org.uk/guidance/cg77', 'guideline'),
      source('NHS England - Offender personality disorder pathway', 'https://www.england.nhs.uk/long-read/the-offender-personality-disorder-pathway/', 'policy'),
    ],
  ),
  25: reviewed(
    'This neurocognitive module has been rebuilt around dementia, delirium, mild cognitive impairment, capacity and carer support. Current NICE, NHS and WHO sources support teaching that distinguishes normal ageing from cognitive decline and treats sudden confusion as a medical red flag.',
    [
      'Teach dementia, mild cognitive impairment and delirium as separate but related ideas.',
      'Keep reversible causes and urgent escalation visible so the session is useful in real practice.',
      'Teach dignity, capacity and carer support alongside the clinical content.',
      'Emphasise that early assessment can identify treatable causes and improve planning.',
    ],
    [
      source('NHS - What is dementia?', 'https://www.nhs.uk/conditions/dementia/about-dementia/what-is-dementia/', 'service'),
      source('NHS - Memory loss (amnesia)', 'https://www.nhs.uk/conditions/memory-loss-amnesia/', 'service'),
      source('NHS - Dementia prevention', 'https://www.nhs.uk/conditions/dementia/dementia-prevention/', 'service'),
      source('NICE - Dementia: assessment, management and support for people living with dementia and their carers', 'https://www.nice.org.uk/guidance/ng97', 'guideline'),
      source('NICE - Delirium: prevention, diagnosis and management', 'https://www.nice.org.uk/guidance/cg103', 'guideline'),
      source('WHO - Dementia fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/dementia', 'evidence'),
    ],
  ),
};
