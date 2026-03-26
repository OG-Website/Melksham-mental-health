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

export const AUTHORED_MODULE_RESEARCH_BATCH_31_35: Record<number, ModuleResearch> = {
  31: reviewed(
    'This paternal mental health module has been rebuilt to keep fathers and co-parents visible in early-parenting support. Current NHS and NHS England guidance supports partner-inclusive perinatal care, attention to postnatal depression in fathers and practical help-seeking routes that lower stigma and friction.',
    [
      'Teach paternal stress as a real perinatal issue rather than a secondary concern.',
      'Keep sleep loss, role change and relationship strain central to the explanation.',
      'Use parent-inclusive help routes and practical support planning.',
      'Name stigma and masculine norms as barriers without making them the whole story.',
    ],
    [
      source('NHS - Postnatal depression overview', 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/', 'service'),
      source('NHS - Find care for your mental health before, during and after pregnancy', 'https://www.nhs.uk/nhs-services/mental-health-services/find-care-for-your-mental-health-before-during-and-after-pregnancy/', 'service'),
      source('NHS England - Perinatal mental health', 'https://www.england.nhs.uk/mental-health/perinatal/', 'policy'),
      source('NHS England - Supporting partners and other family members in specialist perinatal mental health services', 'https://www.england.nhs.uk/mental-health/perinatal/perinatal-mental-health-resources/involving-and-supporting-partners-and-other-family-members-in-specialist-perinatal-mental-health-services-good-practice-guide/', 'policy'),
      source('NHS - Your mental health - Best Start in Life', 'https://www.nhs.uk/start-for-life/baby/your-mental-health/', 'service'),
    ],
  ),
  32: reviewed(
    'This perinatal module has been rebuilt around current NHS England and NICE guidance on antenatal and postnatal mental health, specialist perinatal pathways and urgent care for severe illness. The emphasis is on early assessment, family support, and protecting both parent and baby.',
    [
      'Teach the full perinatal window, not just the postnatal period.',
      'Keep severe illness pathways, urgent escalation and specialist support visible.',
      'Treat bonding, sleep and practical support as part of care, not extras.',
      'Use person-centred, family-inclusive language throughout.',
    ],
    [
      source('NHS England - Perinatal mental health', 'https://www.england.nhs.uk/mental-health/perinatal/', 'policy'),
      source('NHS England - Perinatal mental health resources', 'https://www.england.nhs.uk/mental-health/perinatal/perinatal-mental-health-resources/', 'policy'),
      source('NICE - Antenatal and postnatal mental health: clinical management and service guidance', 'https://www.nice.org.uk/guidance/cg192', 'guideline'),
      source('NHS - Find care for your mental health before, during and after pregnancy', 'https://www.nhs.uk/nhs-services/mental-health-services/find-care-for-your-mental-health-before-during-and-after-pregnancy/', 'service'),
      source('NHS - Postnatal depression overview', 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/', 'service'),
    ],
  ),
  33: reviewed(
    'This child and adolescent mental health module has been rebuilt to emphasise developmental presentation, family and school context, self-harm and the CAMHS route. Current NICE and NHS guidance supports early support, clear safeguarding and careful distinction between normal development and mental health disorder.',
    [
      'Teach age-appropriate presentation and avoid treating young people like small adults.',
      'Keep self-harm, school context and family system factors visible.',
      'Use escalation routes that are concrete and family-friendly.',
      'Hold hope while still taking risk and safeguarding seriously.',
    ],
    [
      source('NHS - Children and young people mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/children-and-young-peoples-mental-health-services-cypmhs/', 'service'),
      source('NHS - Mental health support for children and young people', 'https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/', 'service'),
      source('NICE - Depression in children and young people: identification and management', 'https://www.nice.org.uk/guidance/ng134', 'guideline'),
      source('NICE - Self-harm: assessment, management and preventing recurrence', 'https://www.nice.org.uk/guidance/ng225', 'guideline'),
      source('NHS - Self-harm', 'https://www.nhs.uk/mental-health/conditions/self-harm/', 'service'),
    ],
  ),
  34: reviewed(
    'This older adult mental health module has been rebuilt around depression, loneliness, bereavement, dementia and delirium. NICE, NHS and WHO material supports a dignity-first approach that separates normal ageing from treatable mental health problems and recognises the role of carers and physical health.',
    [
      'Teach older-adult mental health as a full mental health area, not an age afterthought.',
      'Keep the distinction between depression, dementia and delirium explicit.',
      'Link mental health with physical health, pain, sensory loss and medication review.',
      'Treat carers, loneliness and access barriers as core factors, not background noise.',
    ],
    [
      source('NHS - Depression in adults', 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/', 'service'),
      source('NHS - What is dementia?', 'https://www.nhs.uk/conditions/dementia/about-dementia/what-is-dementia/', 'service'),
      source('NHS - Memory loss (amnesia)', 'https://www.nhs.uk/conditions/memory-loss-amnesia/', 'service'),
      source('NICE - Dementia: assessment, management and support for people living with dementia and their carers', 'https://www.nice.org.uk/guidance/ng97', 'guideline'),
      source('NICE - Delirium: prevention, diagnosis and management', 'https://www.nice.org.uk/guidance/cg103', 'guideline'),
      source('NICE - Depression in adults: treatment and management', 'https://www.nice.org.uk/guidance/ng222', 'guideline'),
    ],
  ),
  35: reviewed(
    'This LGBTQIA+ mental health module has been rebuilt around minority stress, disclosure, family response and inclusive services. NHS-facing guidance supports the use of affirming language, safer access routes and attention to discrimination as a real mental health determinant rather than an identity problem.',
    [
      'Teach minority stress, concealment and discrimination as the drivers of distress.',
      'Keep healthcare, school and work responses concrete and actionable.',
      'Make intersectionality visible so the teaching does not flatten different experiences.',
      'Use inclusive practice as a set of behaviours, not just a value statement.',
    ],
    [
      source('NHS - Mental health support for LGBTQIA+ people', 'https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/mental-health-support-for-lgbtq-people/', 'service'),
      source('NHS England - LGBT+ health', 'https://www.england.nhs.uk/about/equality/equality-hub/nhs-people-plan-and-workforce-race-equality-standard/nhs-lgbt-health/', 'policy'),
      source('NHS - Mental health support for children and young people', 'https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/', 'service'),
      source('NHS - Mental health support for LGBTQIA+ people', 'https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/mental-health-support-for-lgbtq-people/', 'service'),
    ],
  ),
};
