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

export const AUTHORED_MODULE_RESEARCH_BATCH_36_40: Record<number, ModuleResearch> = {
  36: reviewed(
    'This module has been rebuilt around NHS England race-equality policy, equality law and the practical realities of discrimination in mental health care. The teaching frames racism as a health issue, not only a social issue, and keeps intersectionality visible throughout.',
    [
      'Teach racism as a structural determinant of mental health and access to care.',
      'Keep intersectionality visible so the session does not flatten different lived experiences.',
      'Link anti-racist practice to concrete service changes, not only values statements.',
      'Use the NHS race equality framework and equality duties as practical anchors.',
    ],
    [
      source(
        'NHS England - Patient and carer race equality framework',
        'https://www.england.nhs.uk/publication/patient-and-carer-race-equality-framework/',
        'policy',
      ),
      source(
        'GOV.UK - Discrimination: your rights',
        'https://www.gov.uk/discrimination-your-rights',
        'policy',
      ),
      source(
        'NHS England - Tackling inequalities in healthcare access, experience and outcomes',
        'https://www.england.nhs.uk/publication/tackling-inequalities-in-healthcare-access-experience-and-outcomes/',
        'policy',
      ),
      source(
        'NHS England - Request for action on racism including antisemitism',
        'https://www.england.nhs.uk/long-read/request-for-action-on-racism-including-antisemitism/',
        'policy',
      ),
      source(
        'NHS England - Equality and Health Inequalities Hub',
        'https://www.england.nhs.uk/about/equality/equality-hub/',
        'policy',
      ),
    ],
  ),
  37: reviewed(
    'This module has been rebuilt to separate gender identity and sexual orientation clearly while keeping minority stress, disclosure and family or community response central. NHS and GOV.UK sources support affirming language, fair treatment and practical routes into help.',
    [
      'Teach gender identity and sexuality as distinct but sometimes overlapping experiences.',
      'Keep minority stress, concealment and rejection visible as drivers of distress.',
      'Use affirming, non-gatekeeping language throughout the module.',
      'Signpost NHS routes clearly for both gender-related and LGBTQ+ mental health support.',
    ],
    [
      source(
        'NHS - Mental health support if you are lesbian, gay, bisexual or trans (LGBTQ+)',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/mental-health-support-if-you-are-gay-lesbian-bisexual-lgbtq/',
        'service',
      ),
      source(
        'NHS - Gender dysphoria',
        'https://www.nhs.uk/conditions/gender-dysphoria/',
        'service',
      ),
      source(
        'NHS - How to get help and support for gender dysphoria',
        'https://www.nhs.uk/conditions/gender-dysphoria/how-get-help-and-support/',
        'service',
      ),
      source(
        'GOV.UK - Discrimination: your rights',
        'https://www.gov.uk/discrimination-your-rights',
        'policy',
      ),
      source(
        'NHS England - Improving LGBT+ equality across the NHS',
        'https://www.england.nhs.uk/wp-content/uploads/2015/11/edc1-lgbt-equal-pap-20-10-15.pdf',
        'policy',
      ),
    ],
  ),
  38: reviewed(
    'This module has been rebuilt around trauma-informed, survivor-centred teaching. Current NHS and NICE sources support a clear emphasis on choice, control, privacy and access to specialist routes after sexual assault or trauma.',
    [
      'Keep the teaching non-graphic and avoid any pressure to disclose personal experience.',
      'Frame sexual violence support around safety, choice, control and pacing.',
      'Use NHS SARCs and PTSD guidance as concrete routes and anchors.',
      'Hold a trauma-informed tone from start to finish so learners model it in practice.',
    ],
    [
      source(
        'NHS - Sexual Assault Referral Centres (SARCs)',
        'https://www.nhs.uk/SARCs',
        'service',
      ),
      source(
        'NHS - Find a rape and sexual assault referral centre',
        'https://www.nhs.uk/service-search/sexual-health-services/find-a-rape-and-sexual-assault-referral-centre',
        'service',
      ),
      source(
        'NHS - Post-traumatic stress disorder (PTSD) overview',
        'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/',
        'service',
      ),
      source(
        'NICE - Post-traumatic stress disorder (NG116)',
        'https://www.nice.org.uk/guidance/ng116',
        'guideline',
      ),
      source(
        'NHS England - Trauma-informed and harm-aware care',
        'https://www.england.nhs.uk/long-read/trauma-informed-and-harm-aware-care/',
        'policy',
      ),
    ],
  ),
  39: reviewed(
    'This module has been rebuilt to present grief as a normal human response to loss while still naming the signs that extra support or crisis help may be needed. The session uses NHS and GOV.UK material to support practical, age-appropriate and family-aware teaching.',
    [
      'Normalise a wide range of grief responses without forcing a timetable.',
      'Differentiate bereavement, grief and depression carefully when discussing risk.',
      'Keep children, young people and family systems visible in the explanation.',
      'Use practical NHS and GOV.UK routes for support after a death or loss.',
    ],
    [
      source(
        'NHS - Bereavement',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/bereavement/',
        'service',
      ),
      source(
        'NHS - Get help with grief after bereavement or loss',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/get-help-with-grief-after-bereavement-or-loss/',
        'service',
      ),
      source(
        'NHS - Bereavement and young people',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/bereavement-and-young-people/',
        'service',
      ),
      source(
        'NHS - Children and bereavement',
        'https://www.nhs.uk/conditions/childrens-death-bereavement/',
        'service',
      ),
      source(
        'GOV.UK - What to do after a death',
        'https://www.gov.uk/after-a-death',
        'policy',
      ),
    ],
  ),
  40: reviewed(
    'This module has been rebuilt around NICE chronic pain guidance and NHS information on pain, long-term conditions and talking therapies. The teaching frames pain as real, multi-factorial and closely linked with sleep, mood, fear and daily function.',
    [
      'Teach chronic pain as a whole-person issue rather than a simple symptom.',
      'Keep the pain, mood, sleep and avoidance cycle visible and understandable.',
      'Promote pacing, shared decisions and realistic self-management with support.',
      'Signpost NHS pain and talking therapy routes alongside primary care.',
    ],
    [
      source(
        'NICE - Chronic pain (primary and secondary) in over 16s: assessment of all chronic pain and management of chronic primary pain (NG193)',
        'https://www.nice.org.uk/guidance/ng193',
        'guideline',
      ),
      source(
        'NHS - How to get help for your pain',
        'https://www.nhs.uk/conditions/chronic-pain/',
        'service',
      ),
      source(
        'NHS - Long-term physical health condition and mental health',
        'https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/long-term-physical-health-condition-and-mental-health/',
        'service',
      ),
      source(
        'NHS - Find an NHS talking therapies service',
        'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service/',
        'service',
      ),
      source(
        'NHS England - Reducing long term opioid use',
        'https://www.england.nhs.uk/long-read/reducing-long-term-opioid-use/',
        'policy',
      ),
    ],
  ),
};
