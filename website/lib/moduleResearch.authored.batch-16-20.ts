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

export const AUTHORED_MODULE_RESEARCH_BATCH_16_20: Record<number, ModuleResearch> = {
  16: reviewed(
    'This OCD module has been rebuilt around current NHS and NICE guidance, with a stronger emphasis on the obsession-compulsion cycle, the shame attached to intrusive thoughts, and evidence-based support such as CBT with ERP.',
    [
      'Teach OCD as a cycle of intrusive thoughts, distress and ritualised relief rather than as a personality quirk.',
      'Include body dysmorphic disorder and hoarding as serious related conditions that are often missed.',
      'Make reassurance-seeking, family accommodation and avoidance visible as maintaining factors.',
      'Keep UK treatment routes and family support practical and explicit.',
    ],
    [
      source('NHS - OCD symptoms and help', 'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/symptoms/', 'service'),
      source('NHS - Body dysmorphic disorder', 'https://www.nhs.uk/mental-health/conditions/body-dysmorphia/', 'service'),
      source('NHS - Hoarding disorder', 'https://www.nhs.uk/mental-health/conditions/hoarding-disorder/', 'service'),
      source('NICE - Obsessive-compulsive disorder and body dysmorphic disorder: treatment', 'https://www.nice.org.uk/guidance/cg31', 'guideline'),
    ],
  ),
  17: reviewed(
    'This dissociative and somatic module has been rebuilt to keep dissociation, depersonalisation, functional neurological symptoms and persistent physical symptoms grounded in trauma-informed, non-dismissive practice.',
    [
      'Teach dissociation as a disconnection in experience that can be mild or severely disabling.',
      'Explain depersonalisation, derealisation and amnesia clearly while avoiding confusion with psychosis.',
      'Treat functional neurological symptoms and persistent physical symptoms as real and deserving of careful care.',
      'Keep grounding, validation and combined physical and psychological assessment central.',
    ],
    [
      source('NHS - Medically unexplained symptoms', 'https://www.nhs.uk/conditions/medically-unexplained-symptoms/', 'service'),
      source('NHS - Mental health conditions', 'https://www.nhs.uk/mental-health/conditions/', 'service'),
      source('NHS - Mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/', 'service'),
      source('NICE - Rehabilitation for chronic neurological disorders including functional neurological disorders', 'https://www.nice.org.uk/news/articles/tackling-variation-in-rehab-for-people-with-neurological-conditions', 'guideline'),
    ],
  ),
};
