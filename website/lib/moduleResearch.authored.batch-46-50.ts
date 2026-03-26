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

export const AUTHORED_MODULE_RESEARCH_BATCH_46_50: Record<number, ModuleResearch> = {
  46: reviewed(
    'This climate-anxiety module has been rebuilt around the reality of climate and ecological threat, the difference between concern and impairment, and the need to balance agency with rest. Current UK and WHO material supports a response that validates distress while avoiding pathologising ordinary concern.',
    [
      'Treat climate distress as a legitimate response that can become impairing without becoming pathological by default.',
      'Keep grief, helplessness, burnout and agency in the same frame.',
      'Use action, rest and boundaries as coping tools rather than simplistic reassurance.',
      'Make UK climate-and-mental-health sources visible so the teaching stays credible.',
    ],
    [
      source('GOV.UK - Climate change and mental health collection', 'https://www.gov.uk/government/collections/climate-change-and-mental-health', 'policy'),
      source('GOV.UK - Climate change and mental health report', 'https://www.gov.uk/government/publications/climate-change-and-mental-health-report', 'evidence'),
      source('GOV.UK - Overview of the climate change and mental health report', 'https://www.gov.uk/guidance/overview-of-the-climate-change-and-mental-health-report', 'policy'),
      source('WHO - Why mental health is a priority for action on climate change', 'https://www.who.int/news/item/03-06-2022-why-mental-health-is-a-priority-for-action-on-climate-change', 'evidence'),
      source('NHS England - 4th Health and climate adaptation report', 'https://www.england.nhs.uk/long-read/4th-health-and-climate-adaptation-report/', 'policy'),
    ],
  ),
  47: reviewed(
    'This spirituality and meaning module has been rebuilt around inclusive whole-person care. NHS chaplaincy and spiritual-care sources support the idea that meaning, faith, doubt and values can be central to coping, while also requiring clear consent and boundaries from staff.',
    [
      'Teach spirituality broadly as meaning, purpose, values and connection, not just religion.',
      'Keep chaplaincy and spiritual care inclusive of belief and non-belief.',
      'Make consent, boundaries and non-proselytising practice explicit.',
      'Link spiritual care to crisis, grief and reflection without turning it into theology.',
    ],
    [
      source('NHS England - NHS Chaplaincy Programme', 'https://www.england.nhs.uk/chaplaincy/', 'policy'),
      source('Lincolnshire Partnership NHS Trust - Chaplaincy and spiritual care', 'https://www.lpft.nhs.uk/contact-us/support/chaplaincy-and-spiritual-care', 'service'),
      source('NELFT NHS Foundation Trust - Spiritual and pastoral care', 'https://www.nelft.nhs.uk/spiritual-and-pastoral-care/', 'service'),
      source('Avon and Wiltshire Mental Health Partnership NHS Trust - Pastoral, religious and spiritual care', 'https://www.awp.nhs.uk/patients-and-carers/pastoral-religious-and-spiritual-care', 'service'),
      source('Tees Esk and Wear Valleys NHS Foundation Trust - Spirituality', 'https://www.tewv.nhs.uk/about-your-care/health-wellbeing/spirituality/', 'service'),
    ],
  ),
  48: reviewed(
    'This men\'s mental health module has been rebuilt around the current English men\'s health strategy and suicide-prevention emphasis on high-risk groups. The teaching should challenge silence and stigma without turning masculinity into a simple cause of harm.',
    [
      'Teach help-seeking barriers as practical and cultural, not as personal failure.',
      'Keep suicide risk, loneliness and substance use central to the module.',
      'Make support routes low-friction and concrete.',
      'Frame strength in ways that include talking, planning and asking for help.',
    ],
    [
      source('GOV.UK - Men\'s Health Strategy for England', 'https://www.gov.uk/government/publications/mens-health-strategy-for-england', 'policy'),
      source('GOV.UK - Men\'s health: a strategic vision for England (accessible version)', 'https://www.gov.uk/government/publications/mens-health-strategy-for-england/mens-health-a-strategic-vision-for-england-accessible-version', 'policy'),
      source('NHS - How to find local mental health services', 'https://www.nhs.uk/nhs-services/mental-health-services/how-to-find-local-mental-health-services/', 'service'),
      source('NHS England - Stay Alive', 'https://www.england.nhs.uk/supporting-our-nhs-people/support-now/wellbeing-apps/stayalive/', 'service'),
      source('NHS England - New suicide prevention training rolled out for NHS mental health staff', 'https://www.england.nhs.uk/2025/09/new-suicide-prevention-training-rolled-out-nhs-mental-health-staff/', 'policy'),
    ],
  ),
  49: reviewed(
    'This military and veteran mental health module has been rebuilt around transition, identity, moral injury, sleep, pain and substance use. NHS England, GOV.UK and Armed Forces Covenant sources support a specialist pathway model that respects service culture and makes help-seeking easier to access.',
    [
      'Teach transition out of service as a key mental health risk point.',
      'Keep moral injury, trauma, pain and substance use in the same formulation.',
      'Use veteran-specific routes such as Op COURAGE clearly.',
      'Treat family strain and identity loss as part of the picture, not side issues.',
    ],
    [
      source('NHS England - Op COURAGE veterans mental health service', 'https://www.england.nhs.uk/mental-health/veterans/', 'service'),
      source('GOV.UK - Mental health support for the UK armed forces', 'https://www.gov.uk/guidance/mental-health-support-for-the-uk-armed-forces', 'policy'),
      source('Armed Forces Covenant - Help in a crisis', 'https://www.armedforcescovenant.gov.uk/crisis-contacts/', 'service'),
      source('NHS England - NHS expands mental health support for veterans', 'https://www.england.nhs.uk/2024/01/nhs-expands-mental-health-support-for-veterans-with-more-than-half-saying-its-hard-to-speak-up/', 'policy'),
      source('Armed Forces Covenant - Healthcare support for service leavers and veterans', 'https://www.armedforcescovenant.gov.uk/armed-forces-community/service-leavers-and-veterans/healthcare/', 'policy'),
    ],
  ),
  50: reviewed(
    'This prison and legal-system module has been rebuilt around continuity of care, liaison and diversion, custody transitions and human rights-aware mental health support. NICE, NHS England and GOV.UK material supports a formulation that treats prison as a major mental health context and release as a high-risk transition.',
    [
      'Teach prison as a mental-health setting with multiple high-risk transitions.',
      'Keep release planning, continuity and coordinated handover central.',
      'Make liaison and diversion a real route rather than a theoretical idea.',
      'Treat rights, dignity and safe escalation as core clinical standards.',
    ],
    [
      source('NICE - Mental health of adults in contact with the criminal justice system', 'https://www.nice.org.uk/guidance/ng66', 'guideline'),
      source('NHS England - Health and justice', 'https://www.england.nhs.uk/health-and-justice/', 'service'),
      source('NHS England - Integrated care and health and justice', 'https://www.england.nhs.uk/health-and-justice/integrated-care-and-health-and-justice/', 'service'),
      source('GOV.UK - Mental health support in prison', 'https://www.gov.uk/life-in-prison/mental-health-support', 'service'),
      source('NHS England - Prison healthcare', 'https://www.england.nhs.uk/commissioning/health-and-justice/prisons/', 'service'),
    ],
  ),
};
