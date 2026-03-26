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
  18: reviewed(
    'This eating-disorders module has been rebuilt around current NHS and NICE guidance, with clearer teaching on medical risk, ARFID, body image pressure, family involvement and recovery-focused support.',
    [
      'Teach eating disorders as serious mental health conditions, not lifestyle choices.',
      'Cover anorexia, bulimia, binge eating disorder and ARFID as distinct patterns.',
      'Keep medical risk visible alongside psychological distress.',
      'Treat shame reduction and early specialist support as part of good care.',
    ],
    [
      source('NHS - Eating disorders overview', 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/', 'service'),
      source('NICE - Eating disorders: recognition and treatment', 'https://www.nice.org.uk/guidance/ng69', 'guideline'),
      source('NHS England - Children and young people eating disorders', 'https://www.england.nhs.uk/mental-health/cyp/eating-disorders/', 'policy'),
      source('Beat national helpline', 'https://www.nhs.uk/services/service-directory/beat-national-helpline-head-office/N10954074', 'service'),
    ],
  ),
  19: reviewed(
    'This sleep module has been rebuilt to keep insomnia, sleep apnoea, narcolepsy and circadian disruption grounded in practical care, with CBT-I treated as the main evidence-based route for chronic insomnia.',
    [
      'Teach sleep as a core mental health process, not optional self-care.',
      'Separate insomnia from other sleep disorders that need medical assessment.',
      'Cover circadian disruption, shift work and safety issues clearly.',
      'Keep sleep advice realistic and specific rather than generic or perfectionistic.',
    ],
    [
      source('NHS - Insomnia', 'https://www.nhs.uk/conditions/insomnia/', 'service'),
      source('NHS - Sleep problems', 'https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/', 'service'),
      source('NHS - Sleep apnoea', 'https://www.nhs.uk/conditions/sleep-apnoea/', 'service'),
      source('NHS - Narcolepsy', 'https://www.nhs.uk/conditions/narcolepsy/', 'service'),
    ],
  ),
  20: reviewed(
    'This impulse-control and disruptive-behaviour module has been rebuilt around NICE conduct-disorder guidance, NHS anger resources and a behaviour-as-communication lens that keeps trauma, ADHD and environment in view.',
    [
      'Frame impulse control as a regulation issue rather than a moral verdict.',
      'Teach behaviour patterns, functions and triggers instead of isolated incidents.',
      'Keep developmental stage, trauma, ADHD and family environment visible.',
      'Show that boundaries and skills can be taught consistently.',
    ],
    [
      source('NICE - Conduct disorders in children and young people', 'https://www.nice.org.uk/guidance/cg158', 'guideline'),
      source('NHS - Helping your child with anger issues', 'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/help-your-child-with-anger-issues/', 'service'),
      source('NHS - Teen aggression and arguments', 'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/teen-aggression-and-arguments/', 'service'),
      source('NHS - Get help with anger', 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anger/', 'service'),
    ],
  ),
};
