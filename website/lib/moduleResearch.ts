import { normalizeModuleResearchText } from './courseCopy.ts';
import { AUTHORED_MODULE_RESEARCH } from './moduleResearch.authored.ts';

export type ModuleResearchSourceType =
  | 'guideline'
  | 'service'
  | 'statistics'
  | 'policy'
  | 'evidence';

export interface ModuleResearchSource {
  label: string;
  url: string;
  type: ModuleResearchSourceType;
}

export interface ModuleResearch {
  reviewedOn: string;
  summary: string;
  teachingPriorities: string[];
  sources: ModuleResearchSource[];
}

const REVIEW_DATE = '2026-03-21';

function s(
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
    reviewedOn: REVIEW_DATE,
    summary,
    teachingPriorities,
    sources,
  };
}

const WHO_MENTAL_DISORDERS = s(
  'WHO - Mental disorders fact sheet',
  'https://www.who.int/news-room/fact-sheets/detail/mental-disorders',
  'evidence',
);
const WHO_ICD11 = s(
  'WHO - ICD-11 mental, behavioural and neurodevelopmental disorders manual release',
  'https://www.who.int/news/item/08-03-2024-new-manual-released-to-support-diagnosis-of-mental--behavioural-and-neurodevelopmental-disorders-added-in-icd-11',
  'guideline',
);
const NHS_MH_SERVICES = s(
  'NHS - How to find local mental health services',
  'https://www.nhs.uk/nhs-services/mental-health-services/how-to-find-local-mental-health-services/',
  'service',
);
const NHS_TALKING_THERAPIES = s(
  'NHS - Find talking therapies for anxiety and depression',
  'https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service',
  'service',
);
const NHS_AUTISM_ADULTS = s(
  'NHS - Signs of autism in adults',
  'https://www.nhs.uk/conditions/autism/signs/adults/',
  'service',
);
const NHS_AUTISM_SUPPORT = s(
  'NHS - Where to get autism support',
  'https://www.nhs.uk/conditions/autism/support/',
  'service',
);
const NICE_AUTISM_ADULTS = s(
  'NICE - Autism spectrum disorder in adults: diagnosis and management',
  'https://www.nice.org.uk/guidance/CG142',
  'guideline',
);
const NICE_AUTISM_CHILD_DIAGNOSIS = s(
  'NICE - Autism spectrum disorder in under 19s: recognition, referral and diagnosis',
  'https://www.nice.org.uk/Guidance/CG128',
  'guideline',
);
const NICE_AUTISM_CHILD_SUPPORT = s(
  'NICE - Autism spectrum disorder in under 19s: support and management',
  'https://www.nice.org.uk/Guidance/CG170',
  'guideline',
);
const NHS_ADHD_TASKFORCE = s(
  'NHS England - ADHD taskforce',
  'https://www.england.nhs.uk/mental-health/adhd/',
  'policy',
);
const NICE_ADHD = s(
  'NICE - Attention deficit hyperactivity disorder: diagnosis and management',
  'https://www.nice.org.uk/guidance/ng87/',
  'guideline',
);
const NICE_PTSD = s(
  'NICE - Post-traumatic stress disorder',
  'https://www.nice.org.uk/guidance/NG116',
  'guideline',
);
const WHO_VIOLENCE_AGAINST_WOMEN = s(
  'WHO - Violence against women fact sheet',
  'https://www.who.int/en/news-room/fact-sheets/detail/violence-against-women',
  'evidence',
);
const NHS_SARCS = s(
  'NHS - Help after rape and sexual assault',
  'https://www.nhs.uk/SARCs',
  'service',
);
const UKHSA_ACE_STUDY = s(
  'UKHSA Research Portal - National household survey of adverse childhood experiences in England',
  'https://researchportal.ukhsa.gov.uk/en/publications/national-household-survey-of-adverse-childhood-experiences-and-th/',
  'evidence',
);
const NICE_ATTACHMENT = s(
  'NICE - Children’s attachment',
  'https://www.nice.org.uk/guidance/ng26',
  'guideline',
);
const NHS_CHILD_FEELINGS = s(
  'NHS - Talking to your child about feelings',
  'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/talk-to-children-about-feelings/',
  'service',
);
const NHS_SELF_HARM = s(
  'NHS - Where to get help for self-harm',
  'https://www.nhs.uk/conditions/self-harm/',
  'service',
);
const ONS_SUICIDE_2024 = s(
  'ONS - Suicides in England and Wales: 1981 to 2024',
  'https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/bulletins/suicidesintheunitedkingdom/2024registrations',
  'statistics',
);
const GOV_SUICIDE_STRATEGY = s(
  'GOV.UK - Suicide prevention strategy for England: 2023 to 2028',
  'https://www.gov.uk/government/publications/suicide-prevention-strategy-for-england-2023-to-2028',
  'policy',
);
const NHS_DEPRESSION = s(
  'NHS - Depression in adults',
  'https://www.nhs.uk/mental-health/conditions/depression-in-adults/',
  'service',
);
const NICE_DEPRESSION = s(
  'NICE - Depression in adults: treatment and management',
  'https://www.nice.org.uk/guidance/ng222',
  'guideline',
);
const NHS_BIPOLAR = s(
  'NHS - Bipolar disorder',
  'https://www.nhs.uk/conditions/bipolar-disorder/',
  'service',
);
const NICE_BIPOLAR = s(
  'NICE - Bipolar disorder: assessment and management',
  'https://www.nice.org.uk/guidance/cg185/',
  'guideline',
);
const NICE_GAD_PANIC = s(
  'NICE - Generalised anxiety disorder and panic disorder in adults: management',
  'https://www.nice.org.uk/guidance/cg113',
  'guideline',
);
const NHS_PANIC = s(
  'NHS - Panic disorder',
  'https://www.nhs.uk/mental-health/conditions/panic-disorder/',
  'service',
);
const NHS_PHOBIAS = s(
  'NHS - Phobias overview',
  'https://www.nhs.uk/mental-health/conditions/phobias/overview/',
  'service',
);
const NICE_OCD = s(
  'NICE - Obsessive-compulsive disorder and body dysmorphic disorder: treatment',
  'https://www.nice.org.uk/Guidance/CG31',
  'guideline',
);
const NHS_OCD = s(
  'NHS - OCD treatment',
  'https://www.nhs.uk/conditions/obsessive-compulsive-disorder-ocd/treatment/',
  'service',
);
const MIND_DISSOCIATIVE = s(
  'Mind - Dissociation and dissociative disorders',
  'https://www.mind.org.uk/information-support/types-of-mental-health-problems/dissociation-and-dissociative-disorders/',
  'evidence',
);
const NICE_EATING = s(
  'NICE - Eating disorders: recognition and treatment',
  'https://www.nice.org.uk/guidance/ng69',
  'guideline',
);
const BEAT_SUPPORT = s(
  'Beat - Eating disorder support',
  'https://www.beateatingdisorders.org.uk/get-information-and-support/get-help-for-myself/',
  'service',
);
const NHS_INSOMNIA = s(
  'NHS - Insomnia',
  'https://www.nhs.uk/conditions/insomnia',
  'service',
);
const NHS_SLEEP_TIPS = s(
  'NHS Every Mind Matters - Sleep problems',
  'https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/',
  'service',
);
const NICE_ALCOHOL = s(
  'NICE - Alcohol-use disorders: diagnosis, assessment and management',
  'https://www.nice.org.uk/guidance/CG115',
  'guideline',
);
const NHS_ALCOHOL_SUPPORT = s(
  'NHS - Find alcohol addiction support services',
  'https://www.nhs.uk/nhs-services/find-alcohol-addiction-support-services/',
  'service',
);
const NICE_PSYCHOSIS = s(
  'NICE - Psychosis and schizophrenia in adults: prevention and management',
  'https://www.nice.org.uk/Guidance/CG178',
  'guideline',
);
const NHS_SMI_CHECK = s(
  'NHS - Annual health check for people with severe mental health conditions',
  'https://www.nhs.uk/mental-health/social-care-and-your-rights/annual-health-check-smi/',
  'service',
);
const NICE_BPD = s(
  'NICE - Borderline personality disorder: recognition and management',
  'https://www.nice.org.uk/Guidance/CG78/NiceGuidance/doc/English',
  'guideline',
);
const NHS_BPD = s(
  'NHS - Borderline personality disorder diagnosis',
  'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/diagnosis/',
  'service',
);
const NICE_DEMENTIA = s(
  'NICE - Dementia: assessment, management and support',
  'https://www.nice.org.uk/guidance/ng97',
  'guideline',
);
const NHS_DEMENTIA = s(
  'NHS - What is dementia?',
  'https://www.nhs.uk/conditions/dementia/about-dementia/what-is-dementia/',
  'service',
);
const NICE_CHRONIC_PHYSICAL = s(
  'NICE - Depression in adults with a chronic physical health problem',
  'https://www.nice.org.uk/Guidance/CG91',
  'guideline',
);
const NICE_CHRONIC_PAIN = s(
  'NICE - Chronic pain (primary and secondary) in over 16s',
  'https://www.nice.org.uk/guidance/ng193',
  'guideline',
);
const HSE_KEY_FIGURES = s(
  'HSE - Key figures for Great Britain 2024 to 2025',
  'https://www.hse.gov.uk/statistics/overview.htm',
  'statistics',
);
const HSE_DAYS_LOST = s(
  'HSE - Working days lost in Great Britain',
  'https://www.hse.gov.uk/statistics/dayslost.htm',
  'statistics',
);
const GOV_LONELINESS = s(
  'GOV.UK - Community Life Survey 2024/25: Loneliness and support networks',
  'https://www.gov.uk/government/statistics/community-life-survey-202425-annual-publication/community-life-survey-202425-loneliness-and-support-networks',
  'statistics',
);
const NHS_LONELINESS_LEARNING = s(
  'NHS England - Loneliness and social isolation learning resources',
  'https://www.hee.nhs.uk/our-work/population-health/our-resources-hub/loneliness-social-isolation',
  'service',
);
const MONEY_AND_MENTAL_HEALTH = s(
  'Money and Mental Health Policy Institute - Research and policy updates',
  'https://www.moneyandmentalhealth.org/press-release/forced-to-share-pins-left-open-to-fraud-vulnerable-people-at-risk-of-financial-abuse-due-to-lack-of-banking-tools-for-sharing-money-management-with-friends-and-family/',
  'evidence',
);
const NHS_COUNSELLING = s(
  'NHS - Counselling',
  'https://www.nhs.uk/tests-and-treatments/counselling/',
  'service',
);
const NHS_START_FOR_LIFE = s(
  'NHS Start for Life - Your mental health',
  'https://www.nhs.uk/start-for-life/baby/your-mental-health/',
  'service',
);
const NHS_POSTNATAL = s(
  'NHS - Postnatal depression',
  'https://www.nhs.uk/baby/support-and-services/feeling-depressed-after-childbirth/',
  'service',
);
const DPT_DADS = s(
  'Devon Partnership NHS Trust - Dads and co-parents',
  'https://www.dpt.nhs.uk/our-services/pregnant-women-and-new-mothers/dads-and-co-parents',
  'service',
);
const NICE_PERINATAL = s(
  'NICE - Antenatal and postnatal mental health',
  'https://www.nice.org.uk/guidance/cg192',
  'guideline',
);
const NHS_POSTPARTUM_PSYCHOSIS = s(
  'NHS - Postpartum psychosis',
  'https://www.nhs.uk/mental-health/conditions/post-partum-psychosis/',
  'service',
);
const NHS_CAMHS = s(
  'Avon and Wiltshire NHS - What is CAMHS?',
  'https://www.awp.nhs.uk/camhs/things-you-need-know/what-camhs',
  'service',
);
const NHS_CYP_SERVICES = s(
  'NHS England - Children and young people mental health, learning disability and autism services',
  'https://www.england.nhs.uk/commissioning/spec-services/npc-crg/group-c/camhs/',
  'policy',
);
const WHO_OLDER_ADULTS = s(
  'WHO - Mental health of older adults',
  'https://www.who.int/news-room/fact-sheets/detail/mental-health-of-older-adults',
  'evidence',
);
const NHS_LGBT_REVIEW = s(
  'NHS England - LGBT+ health evidence review',
  'https://www.england.nhs.uk/about/equality/equality-hub/patient-equalities-programme/lgbt-health/lgbt-health-evidence-review/',
  'policy',
);
const NHS_GENDER_DYSPHORIA = s(
  'NHS - Gender dysphoria',
  'https://www.nhs.uk/conditions/gender-dysphoria/',
  'service',
);
const NHS_RHO_MENTAL_HEALTH = s(
  'NHS Race and Health Observatory - Mental Health Working Group',
  'https://nhsrho.org/what-we-do/advisory-groups/mental-health-working-group/',
  'policy',
);
const NHS_RHO_HARP = s(
  'NHS Race and Health Observatory - Health Action Resource Platform',
  'https://nhsrho.org/implementation/action-resource-centre/',
  'evidence',
);
const NHS_SARCS_REFERRALS = s(
  'NHS England - Referrals to NHS sexual assault centres rise by 18% in 2 years',
  'https://www.england.nhs.uk/2025/03/referrals-to-nhs-sexual-assault-centres-rise-by-18-in-2-years/',
  'statistics',
);
const CRUSE_GRIEF = s(
  'Cruse Bereavement Support - Understanding grief',
  'https://www.cruse.org.uk/understanding-grief/',
  'service',
);
const WHO_PHYSICAL_ACTIVITY = s(
  'WHO - Physical activity fact sheet',
  'https://www.who.int/news-room/fact-sheets/detail/physical-activity%E2%80%AF',
  'evidence',
);
const NHS_BE_ACTIVE = s(
  'NHS Every Mind Matters - Be active for your mental health',
  'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/be-active-for-your-mental-health/',
  'service',
);
const NHS_EXERCISE_DEPRESSION = s(
  'NHS - Exercise for depression',
  'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/exercise-for-depression/',
  'service',
);
const NHS_EATWELL = s(
  'NHS - The Eatwell Guide',
  'https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/',
  'service',
);
const NHS_MINDFULNESS = s(
  'NHS Every Mind Matters - What is mindfulness?',
  'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/what-is-mindfulness/',
  'service',
);
const WHO_SOCIAL_PRESCRIBING = s(
  'WHO - A toolkit on how to implement social prescribing',
  'https://www.who.int/publications/i/item/9789290619765',
  'evidence',
);
const CNWL_ARTS = s(
  'CNWL NHS - Arts Psychotherapies Service',
  'https://www.cnwl.nhs.uk/professionals/cnwl-arts-psychotherapies-service',
  'service',
);
const NICE_ARTS_PSYCHOSIS = s(
  'NICE - Arts therapies in psychosis and schizophrenia in children and young people',
  'https://www.nice.org.uk/guidance/cg155/chapter/1-recommendations',
  'guideline',
);
const WHO_GAMING = s(
  'WHO - Gaming disorder Q&A',
  'https://www.who.int/features/qa/gaming-disorder/en/',
  'evidence',
);
const WHO_TEENS_SCREENS = s(
  'WHO Europe - Teens, screens and mental health',
  'https://www.who.int/europe/news/item/25-09-2024-teens--screens-and-mental-health',
  'statistics',
);
const WHO_CLIMATE_HEALTH = s(
  'WHO - Climate change and health fact sheet',
  'https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health',
  'evidence',
);
const WHO_CLIMATE_MENTAL_HEALTH = s(
  'WHO - Why mental health is a priority for action on climate change',
  'https://www.who.int/news/item/03-06-2022-why-mental-health-is-a-priority-for-action-on-climate-change',
  'policy',
);
const NHS_CHAPLAINCY = s(
  'NHS England - NHS Chaplaincy Programme',
  'https://www.england.nhs.uk/chaplaincy/',
  'service',
);
const NHS_CHAPLAINCY_GUIDELINES = s(
  'NHS England - Chaplaincy guidelines for NHS managers',
  'https://www.england.nhs.uk/long-read/nhs-chaplaincy-guidelines-for-nhs-managers-on-pastoral-spiritual-and-religious-care/',
  'guideline',
);
const MHF_MEN_BODY_IMAGE = s(
  'Mental Health Foundation - Millions of men in the UK affected by body image issues',
  'https://www.mentalhealth.org.uk/about-us/news/millions-men-uk-affected-body-image-issues-mental-health-foundation-survey',
  'statistics',
);
const GOV_OP_COURAGE = s(
  'GOV.UK - NHS launches Op COURAGE veterans’ mental health service',
  'https://www.gov.uk/government/news/nhs-launches-op-courage-veterans-mental-health-service',
  'policy',
);
const ARMED_FORCES_COVENANT_OP_COURAGE = s(
  'Armed Forces Covenant - Op COURAGE case study',
  'https://www.armedforcescovenant.gov.uk/case-study/op-courage/',
  'service',
);
const NHS_RECONNECT = s(
  'NHS England - RECONNECT',
  'https://www.england.nhs.uk/commissioning/health-just/reconnect/',
  'service',
);
const NHS_OPD = s(
  'NHS England - Offender Personality Disorder pathway strategy',
  'https://www.england.nhs.uk/long-read/the-offender-personality-disorder-pathway/',
  'policy',
);

export const moduleResearch: Record<number, ModuleResearch> = {
  1: reviewed(
    'This foundation module has been refreshed around current public-health framing: mental health is a spectrum, prevention matters, and access remains uneven. Tutors should ground the session in stigma reduction, everyday protective factors and realistic help-seeking routes.',
    [
      'Teach mental health as something everyone has, not as a simple illness/wellness split.',
      'Use current population-level evidence carefully without turning the session into a statistics dump.',
      'End with practical protective habits and clear NHS support routes, not just awareness messaging.',
    ],
    [WHO_MENTAL_DISORDERS, WHO_ICD11, NHS_MH_SERVICES],
  ),
  2: reviewed(
    'The introduction-to-diagnosis module should explain why diagnostic systems are useful while stressing that categories evolve and do not define a person. ICD-11 and NICE remain the safest current anchors for UK-facing delivery.',
    [
      'Separate diagnosis, formulation and identity so labels are not taught as destiny.',
      'Explain overlap, comorbidity and functional impact rather than presenting disorders as isolated boxes.',
      'Use person-first language consistently across the whole programme.',
    ],
    [WHO_ICD11, WHO_MENTAL_DISORDERS, NHS_MH_SERVICES],
  ),
  3: reviewed(
    'Autism teaching needs to stay neuro-affirming and practical. Current NHS and NICE material supports a clear distinction between recognising traits, accessing assessment, and building support without framing autistic people as broken.',
    [
      'Teach autism as a neurodevelopmental difference with varied presentations across gender, age and support need.',
      'Avoid deficit-only language and explain masking, sensory load and communication differences.',
      'Be clear about NHS assessment and support pathways for adults, children and families.',
    ],
    [NHS_AUTISM_ADULTS, NHS_AUTISM_SUPPORT, NICE_AUTISM_ADULTS],
  ),
  4: reviewed(
    'ADHD content needs to reflect current NHS pressure on assessment pathways and the importance of support before and after diagnosis. The evidence base still supports multimodal care rather than medication-only narratives.',
    [
      'Explain ADHD as persistent impairment in attention regulation and or hyperactivity-impulsivity, not laziness or poor discipline.',
      'Acknowledge long waits and the current NHS taskforce context without turning frustration into misinformation.',
      'Cover environmental adjustments, coaching, psychoeducation and medication as part of a wider support plan.',
    ],
    [NHS_ADHD_TASKFORCE, NICE_ADHD, NHS_TALKING_THERAPIES],
  ),
  5: reviewed(
    'This module needs a rights-based and dignity-first approach. Current autism and attachment guidance both reinforce the need for support plans that match communication needs, cognition, and safeguarding risk rather than generic behaviour management.',
    [
      'Use respectful language about intellectual disability and learning disability, and distinguish them clearly from specific learning differences.',
      'Emphasise reasonable adjustments, accessible communication and supported decision-making.',
      'Teach that distress, trauma and exclusion often get misread as behavioural problems.',
    ],
    [NICE_AUTISM_CHILD_DIAGNOSIS, NICE_AUTISM_CHILD_SUPPORT, NICE_ATTACHMENT],
  ),
  6: reviewed(
    'Acute stress and adjustment disorder teaching should focus on timing, context and functional impact. Not every stress reaction is a disorder, but persistent impairment deserves assessment and support.',
    [
      'Normalise short-term stress reactions after major events while teaching when symptoms are becoming clinically significant.',
      'Avoid over-diagnosing normal distress or minimising severe impairment.',
      'Teach grounding, stabilisation and follow-up pathways before jumping to trauma narratives.',
    ],
    [NICE_PTSD, WHO_MENTAL_DISORDERS, NHS_TALKING_THERAPIES],
  ),
  7: reviewed(
    'PTSD and complex PTSD material should reflect current NICE guidance: trauma-focused psychological treatment remains central, and complex presentations require pacing, safety and formulation rather than a simplistic “retell the trauma” model.',
    [
      'Differentiate trauma exposure, PTSD symptoms and complex trauma patterns clearly.',
      'Teach stabilisation, safety and consent before any trauma processing discussion.',
      'Signpost to evidence-based trauma therapy and crisis help without promising quick fixes.',
    ],
    [NICE_PTSD, WHO_MENTAL_DISORDERS, NHS_TALKING_THERAPIES],
  ),
  8: reviewed(
    'Domestic and intimate partner violence must be taught as a health and safeguarding issue, not a relationship conflict. Current WHO and NHS material reinforces the mental, physical and reproductive harms alongside the need for confidential support routes.',
    [
      'Frame coercive control, fear and repeated patterning as central features, not just physical injury.',
      'Be explicit that anyone can be affected, while also naming the gendered pattern seen in population data.',
      'Give clear routes to confidential support, including SARCs and emergency help where risk is immediate.',
    ],
    [WHO_VIOLENCE_AGAINST_WOMEN, NHS_SARCS, GOV_SUICIDE_STRATEGY],
  ),
  9: reviewed(
    'Childhood trauma and ACEs teaching should avoid deterministic messages. The current evidence supports strong links with later health risk, but protective relationships, trauma-informed systems and early intervention still matter enormously.',
    [
      'Explain ACEs as risk amplifiers, not life sentences.',
      'Link trauma exposure to stress regulation, attachment, learning and later coping patterns.',
      'Teach trauma-informed responses that increase safety, choice, collaboration and consistency.',
    ],
    [UKHSA_ACE_STUDY, NICE_ATTACHMENT, NHS_CHILD_FEELINGS],
  ),
  10: reviewed(
    'This module has already had its headline statistics refreshed against the latest ONS bulletin. Delivery should stay firmly on warning signs, compassionate response, immediate safety and post-crisis follow-up rather than graphic detail.',
    [
      'Separate self-harm from suicidal intent while acknowledging that risk can change quickly.',
      'Use current UK suicide data responsibly and never sensationalise methods.',
      'Prioritise direct help-seeking, crisis contacts and safe language throughout the session.',
    ],
    [ONS_SUICIDE_2024, NHS_SELF_HARM, GOV_SUICIDE_STRATEGY],
  ),
  11: reviewed(
    'Major depression teaching should reflect the current NHS and NICE emphasis on severity, functioning, shared decision-making and relapse prevention. Depression is common, treatable and often entwined with life events, illness and isolation.',
    [
      'Teach symptom range, duration and functional impact rather than reducing depression to sadness.',
      'Show how treatment choice shifts with severity, preference and previous response.',
      'Include relapse warning signs, social factors and self-harm risk assessment.',
    ],
    [NHS_DEPRESSION, NICE_DEPRESSION, NHS_TALKING_THERAPIES],
  ),
  12: reviewed(
    'Bipolar teaching should keep the distinction between depression, hypomania, mania and psychosis very clear. Current NICE guidance also requires careful attention to medication safety, especially around valproate.',
    [
      'Differentiate bipolar disorder from ordinary mood swings and from unipolar depression.',
      'Teach risk, sleep disruption and early-warning-sign monitoring as core relapse prevention skills.',
      'Be careful with medication discussion and reflect current NICE and MHRA caution on valproate.',
    ],
    [NHS_BIPOLAR, NICE_BIPOLAR, NHS_SMI_CHECK],
  ),
  13: reviewed(
    'Seasonal and persistent depressive disorders should be taught as valid depressive presentations that can still produce marked impairment even when they look “milder” or more cyclical. The safest current evidence base remains mainstream depression guidance plus good assessment.',
    [
      'Explain chronicity, recurrence and seasonality without minimising impact.',
      'Teach routine-building, sleep and light patterns, and relapse planning alongside formal treatment options.',
      'Watch for suicidality, substance use and comorbid anxiety in longer-running low mood.',
    ],
    [NICE_DEPRESSION, NHS_DEPRESSION, NHS_TALKING_THERAPIES],
  ),
  14: reviewed(
    'GAD teaching should reflect the current stepped-care model: psychoeducation and low-intensity support matter, but persistent uncontrolled worry and functional decline need proper intervention.',
    [
      'Teach uncontrollable worry, muscle tension, poor concentration and sleep disturbance as a pattern.',
      'Differentiate GAD from situational stress, health anxiety and panic.',
      'Cover stepped care clearly, from self-help and CBT-informed tools to formal treatment.',
    ],
    [NICE_GAD_PANIC, NHS_TALKING_THERAPIES, NHS_DEPRESSION],
  ),
  15: reviewed(
    'Phobias and panic disorder are highly treatable, but avoidance keeps them going. Current NHS and NICE guidance still supports psychoeducation, CBT and graded exposure as core responses.',
    [
      'Explain the fear-avoidance cycle in plain language.',
      'Distinguish panic attacks from panic disorder and from medical emergencies that need urgent assessment.',
      'Teach exposure-based recovery carefully, collaboratively and without shaming avoidance.',
    ],
    [NICE_GAD_PANIC, NHS_PANIC, NHS_PHOBIAS],
  ),
  16: reviewed(
    'OCD teaching needs to stay away from stereotypes about cleanliness and orderliness. Current NHS and NICE material keeps exposure and response prevention central and recognises the shame, avoidance and time-cost many people carry silently.',
    [
      'Teach obsessions, distress and compulsions as a cycle rather than a personality quirk.',
      'Cover taboo thoughts and mental rituals to reduce shame and under-recognition.',
      'Explain ERP clearly and avoid reinforcing reassurance-seeking in the room.',
    ],
    [NICE_OCD, NHS_OCD, NHS_TALKING_THERAPIES],
  ),
  17: reviewed(
    'Dissociative and somatic presentations need careful, non-dismissive teaching. Current good practice is to validate distress, rule out physical causes, and avoid implying that symptoms are invented or “all in the mind”.',
    [
      'Teach dissociation as a real altered state of awareness or connection, often linked to overwhelm or trauma.',
      'Avoid dismissive language about medically unexplained or functional symptoms.',
      'Emphasise paced assessment, grounding, formulation and coordinated support.',
    ],
    [MIND_DISSOCIATIVE, WHO_ICD11, NHS_MH_SERVICES],
  ),
  18: reviewed(
    'Eating-disorder delivery must keep medical risk and body-image culture in view at the same time. Current NICE guidance supports early recognition, multidisciplinary care and non-judgemental communication.',
    [
      'Teach that eating disorders affect all genders, bodies and ages, and are not defined by appearance alone.',
      'Make medical and suicide risk visible without using triggering detail.',
      'Stress early referral, family and system involvement where appropriate, and respectful body-image conversations.',
    ],
    [NICE_EATING, BEAT_SUPPORT, NHS_MH_SERVICES],
  ),
  19: reviewed(
    'Sleep and circadian disorder teaching should reflect the strong two-way relationship between sleep disruption and mental health. Current NHS advice still supports routine, sleep environment and assessment for underlying causes rather than blanket sleeping-pill messages.',
    [
      'Separate insomnia symptoms, circadian disruption and other sleep disorders such as apnoea or narcolepsy.',
      'Teach sleep as a treatment target, not just a symptom to tolerate.',
      'Challenge catch-up-sleep myths and heavy reliance on alcohol or sedatives.',
    ],
    [NHS_INSOMNIA, NHS_SLEEP_TIPS, NHS_MH_SERVICES],
  ),
  20: reviewed(
    'Impulse-control and disruptive-behaviour teaching works best when it moves beyond blame. Attachment, trauma, neurodevelopment and environment all affect behaviour, and effective support balances accountability with formulation.',
    [
      'Avoid moral framing that labels people as simply bad, manipulative or dangerous.',
      'Teach triggers, reward loops, stress, attachment and neurodevelopmental overlap.',
      'Focus on safety plans, consistent boundaries and early support routes.',
    ],
    [NICE_ATTACHMENT, NHS_CHILD_FEELINGS, NHS_MH_SERVICES],
  ),
  21: reviewed(
    'Substance use and addiction teaching should reflect current NICE and NHS messaging: harm reduction, dependence, co-occurring mental health problems and recovery support all matter. Shame-based teaching is counterproductive.',
    [
      'Differentiate use, misuse, harmful use and dependence.',
      'Teach addiction as a biopsychosocial pattern with relapse risk, not a simple choice-failure.',
      'Cover alcohol, drugs, behaviour, withdrawal risk and routes into specialist support.',
    ],
    [NICE_ALCOHOL, NHS_ALCOHOL_SUPPORT, GOV_SUICIDE_STRATEGY],
  ),
  22: reviewed(
    'Psychosis and schizophrenia teaching should foreground early intervention, physical-health inequality and recovery. Current NICE guidance strongly supports family work, CBTp and coordinated community care.',
    [
      'Teach psychosis symptoms carefully and avoid equating psychosis with violence.',
      'Include physical-health monitoring and the major mortality gap as part of whole-person care.',
      'Make early intervention, family support and recovery-oriented practice visible.',
    ],
    [NICE_PSYCHOSIS, NHS_SMI_CHECK, WHO_MENTAL_DISORDERS],
  ),
  23: reviewed(
    'Cluster A and B personality teaching needs updating in tone even where older guideline language remains on source pages. Current best practice is formulation-led, trauma-aware, relational and clear about risk without writing people off.',
    [
      'Explain that personality patterns are enduring ways of coping and relating, not fixed character flaws.',
      'Name the shift toward broader ICD-11 personality-disorder framing while acknowledging legacy labels people may still encounter.',
      'Teach boundaries, validation, crisis planning and consistent support responses.',
    ],
    [NICE_BPD, NHS_BPD, WHO_ICD11],
  ),
  24: reviewed(
    'Cluster C and other personality-pattern teaching should show that anxiety-driven, avoidant and dependent patterns can be deeply impairing even when less dramatic than crisis-led presentations.',
    [
      'Do not let lower visibility be mistaken for lower need.',
      'Teach avoidance, shame, reassurance dependence and perfectionism as maintainers of distress.',
      'Use collaborative formulation and relational safety rather than confrontation-heavy approaches.',
    ],
    [NICE_BPD, WHO_ICD11, NHS_TALKING_THERAPIES],
  ),
  25: reviewed(
    'Neurocognitive-disorder teaching should stay anchored in assessment, support and carer impact. Current NHS and NICE materials emphasise that dementia is a syndrome with different causes, not a single disease.',
    [
      'Teach early warning signs, subtype differences and the value of timely assessment.',
      'Include mood, delirium, grief and carer stress in the clinical picture.',
      'Avoid infantilising language and keep autonomy, communication and planning central.',
    ],
    [NICE_DEMENTIA, NHS_DEMENTIA, WHO_OLDER_ADULTS],
  ),
  26: reviewed(
    'This module should reflect the strong current evidence that chronic physical illness and mental health affect each other in both directions. Depression, pain, treatment burden and health inequality all need explicit coverage.',
    [
      'Teach bidirectional impact: long-term illness raises mental-health risk, and poor mental health affects adherence, pain and recovery.',
      'Use whole-person care language rather than splitting mental and physical health into separate silos.',
      'Cover fatigue, pain, identity loss and practical treatment burden as real clinical issues.',
    ],
    [NICE_CHRONIC_PHYSICAL, NICE_CHRONIC_PAIN, NHS_DEPRESSION],
  ),
  27: reviewed(
    'Workplace mental health and burnout content should be grounded in current HSE figures and practical prevention. Burnout is not solved by resilience talk alone when workload, role clarity and culture are the drivers.',
    [
      'Separate normal stress, prolonged strain, burnout and clinical mental illness.',
      'Teach organisational responsibility alongside individual coping tools.',
      'Use current HSE data to show scale without normalising harmful work cultures.',
    ],
    [HSE_KEY_FIGURES, HSE_DAYS_LOST, NHS_TALKING_THERAPIES],
  ),
  28: reviewed(
    'Social isolation and loneliness remain major public-health concerns, especially where shame stops people from naming them. Current government data supports combining connection-building, practical access and stigma reduction.',
    [
      'Teach loneliness as a risk factor, not a personal failure.',
      'Cover both objective isolation and subjective loneliness because they do not always overlap.',
      'Build in community, befriending and routine-based connection strategies.',
    ],
    [GOV_LONELINESS, NHS_LONELINESS_LEARNING, NHS_MH_SERVICES],
  ),
  29: reviewed(
    'Financial stress should be taught as a mental-health risk factor in its own right, not just a background issue. Current policy and specialist research both show links with crisis, shame, avoidance and difficulty using services.',
    [
      'Name debt, insecure income and poverty as clinically relevant stressors.',
      'Teach practical signposting and budgeting support alongside emotional support.',
      'Avoid implying that better mindset alone can solve structural financial strain.',
    ],
    [MONEY_AND_MENTAL_HEALTH, GOV_SUICIDE_STRATEGY, NHS_TALKING_THERAPIES],
  ),
  30: reviewed(
    'Relationships and attachment teaching should connect adult patterns back to early experience without becoming reductive. Secure connection, rupture repair and emotional literacy matter more than pop-psychology attachment labels.',
    [
      'Teach attachment as a framework for understanding safety, closeness and regulation.',
      'Avoid simplistic “you are an anxious attachment” identity language.',
      'Link relationship stress to boundaries, communication, conflict repair and help-seeking.',
    ],
    [NICE_ATTACHMENT, NHS_COUNSELLING, NHS_CHILD_FEELINGS],
  ),
  31: reviewed(
    'Parenting stress and paternal mental health need stronger emphasis than they usually receive. Current NHS-facing material recognises that dads and non-birthing partners can also experience depression, anxiety, overwhelm and disconnection.',
    [
      'Make fathers and partners visible rather than treating them as bystanders.',
      'Teach sleep loss, financial strain, role change and relationship strain as common pressure points.',
      'Include practical support, peer connection and direct signposting for partners as well as mothers.',
    ],
    [NHS_START_FOR_LIFE, NHS_POSTNATAL, DPT_DADS],
  ),
  32: reviewed(
    'Perinatal teaching should stay alert to depression, anxiety, OCD, trauma and postpartum psychosis. Current NICE and NHS guidance strongly supports early recognition, specialist assessment and family-inclusive safety planning.',
    [
      'Differentiate baby blues, postnatal depression and postpartum psychosis clearly.',
      'Teach risk assessment and urgent escalation when severe symptoms or psychosis emerge.',
      'Include pregnancy as well as the first postnatal year, not just after birth.',
    ],
    [NICE_PERINATAL, NHS_POSTNATAL, NHS_POSTPARTUM_PSYCHOSIS],
  ),
  33: reviewed(
    'Child and adolescent mental-health teaching should balance developmental context with early intervention. NHS services are under pressure, so tutors need to set realistic expectations while still signposting clearly.',
    [
      'Teach behaviour, withdrawal, school avoidance, self-harm and somatic complaints as possible distress signals.',
      'Involve families, schools and wider systems in the formulation rather than individualising everything.',
      'Explain CAMHS pathways honestly, including thresholds and local variation.',
    ],
    [NHS_CAMHS, NHS_CYP_SERVICES, NHS_CHILD_FEELINGS],
  ),
  34: reviewed(
    'Older-adult mental health needs to go beyond dementia. Current WHO evidence highlights the roles of loneliness, abuse, bereavement, chronic illness and ageism alongside depression and anxiety in later life.',
    [
      'Challenge the myth that low mood, fear or withdrawal are normal parts of ageing.',
      'Teach sensory loss, carer burden, grief, pain and isolation as key contributors.',
      'Keep dementia, depression and delirium separate in teaching and response planning.',
    ],
    [WHO_OLDER_ADULTS, NICE_DEMENTIA, GOV_LONELINESS],
  ),
  35: reviewed(
    'LGBTQIA+ mental-health delivery should focus on minority stress, service barriers and affirming support. Current NHS England work confirms persistent inequalities in access, experience and outcomes.',
    [
      'Teach that higher distress rates are linked to discrimination, rejection and unsafe systems, not identity itself.',
      'Use inclusive language and avoid forcing disclosure or explanation from participants.',
      'Make affirming local support and mainstream NHS routes visible together.',
    ],
    [NHS_LGBT_REVIEW, NHS_MH_SERVICES, NHS_TALKING_THERAPIES],
  ),
  36: reviewed(
    'This module should treat racism and discrimination as health issues, not optional awareness topics. NHS evidence work continues to show serious inequalities in access, detention, diagnosis and outcomes.',
    [
      'Teach structural racism, cumulative stress and mistrust as relevant to mental-health outcomes.',
      'Avoid collapsing all communities into one experience or asking participants to educate the room.',
      'Link discrimination to practical change in services, language, data and accountability.',
    ],
    [NHS_RHO_MENTAL_HEALTH, NHS_RHO_HARP, GOV_SUICIDE_STRATEGY],
  ),
  37: reviewed(
    'Gender and sexuality content should stay affirming, precise and clinically safe. Current NHS material distinguishes gender dysphoria from mental illness while recognising that stigma and barriers can drive distress.',
    [
      'Separate identity, orientation, dysphoria and discrimination rather than conflating them.',
      'Avoid pathologising diverse identities while still teaching about distress and support pathways.',
      'Use accurate signposting and respectful terminology throughout.',
    ],
    [NHS_GENDER_DYSPHORIA, NHS_LGBT_REVIEW, NHS_MH_SERVICES],
  ),
  38: reviewed(
    'Sexual violence and trauma material should centre consent, choice, dignity and post-assault care. Current NHS evidence makes clear that survivors need options for medical, forensic and emotional support whether or not they report to police.',
    [
      'Teach immediate safety, confidentiality and choice in post-assault support.',
      'Avoid details that sensationalise or re-traumatise.',
      'Make SARCs and trauma-informed follow-up support explicit in every delivery.',
    ],
    [NHS_SARCS, NHS_SARCS_REFERRALS, WHO_VIOLENCE_AGAINST_WOMEN],
  ),
  39: reviewed(
    'Grief, loss and bereavement should be taught with compassion and nuance. Most grief is not a disorder, but grief can become prolonged, traumatic, isolating or risk-laden, especially after sudden or suicide-related death.',
    [
      'Normalise broad variation in grief responses across time, culture and relationship context.',
      'Differentiate grief support, counselling and crisis intervention when risk is present.',
      'Include bereavement after suicide, trauma or caregiving strain as higher-need contexts.',
    ],
    [CRUSE_GRIEF, NHS_COUNSELLING, GOV_SUICIDE_STRATEGY],
  ),
  40: reviewed(
    'Chronic pain teaching should reflect current NICE thinking: pain is real, often multifactorial, and best managed through integrated support rather than mind-body false choices.',
    [
      'Validate pain without oversimplifying cause or promising cure.',
      'Teach pacing, function, sleep, mood and fear-avoidance as linked treatment targets.',
      'Avoid stigmatising people whose pain has no clear structural explanation.',
    ],
    [NICE_CHRONIC_PAIN, NICE_CHRONIC_PHYSICAL, NHS_MH_SERVICES],
  ),
  41: reviewed(
    'Sleep hygiene and circadian-health teaching should be practical and behavioural. Current NHS guidance still supports routine, environment, caffeine control, light exposure and assessment of underlying causes.',
    [
      'Turn sleep advice into concrete routines people can actually try.',
      'Teach circadian disruption, shift work and screen habits, not only insomnia symptoms.',
      'Link sleep improvement to mood, cognition, stress tolerance and relapse prevention.',
    ],
    [NHS_INSOMNIA, NHS_SLEEP_TIPS, NHS_BE_ACTIVE],
  ),
  42: reviewed(
    'Nutrition and exercise teaching should stay evidence-based and realistic. Current NHS and WHO material strongly supports movement for mood and wellbeing, while healthy eating is best taught as pattern and routine rather than perfection.',
    [
      'Avoid moral language about food, weight or body size.',
      'Teach movement as flexible, accessible and mood-supportive rather than punishment.',
      'Link eating patterns, energy, mood, sleep and concentration in a practical way.',
    ],
    [WHO_PHYSICAL_ACTIVITY, NHS_EXERCISE_DEPRESSION, NHS_EATWELL],
  ),
  43: reviewed(
    'Mindfulness, meditation and breathwork should be taught as optional skills, not universal cures. Current NHS guidance supports their use for some people while also acknowledging that they are not right for everyone.',
    [
      'Offer grounding and breathing as invitational tools rather than mandatory exercises.',
      'Teach the difference between mindfulness, meditation, relaxation and avoidance.',
      'Name when practices may need adapting for trauma, panic or dissociation.',
    ],
    [NHS_MINDFULNESS, NHS_TALKING_THERAPIES, NHS_SLEEP_TIPS],
  ),
  44: reviewed(
    'Creative-arts and expressive-therapy teaching should present these approaches as valid clinical or community tools rather than decorative extras. Current NHS service examples and WHO social-prescribing material support their role in connection, expression and engagement.',
    [
      'Explain that arts therapies are structured therapeutic interventions, not just hobbies.',
      'Highlight their usefulness where words are hard, shame is high or isolation is entrenched.',
      'Avoid over-claiming evidence while still showing where these approaches fit well.',
    ],
    [WHO_SOCIAL_PRESCRIBING, CNWL_ARTS, NICE_ARTS_PSYCHOSIS],
  ),
  45: reviewed(
    'Technology and mental-health teaching needs balance. Current WHO material supports concern about problematic social-media use and gaming in some young people, but the goal is healthier habits and risk-awareness rather than blanket demonisation.',
    [
      'Separate ordinary digital use from compulsive, impairing or risky patterns.',
      'Teach sleep disruption, comparison, cyberbullying and reward-loop design as key mechanisms.',
      'Include digital positives such as access, peer support and practical help when used safely.',
    ],
    [WHO_GAMING, WHO_TEENS_SCREENS, NHS_SLEEP_TIPS],
  ),
  46: reviewed(
    'Climate-anxiety and eco-distress content should validate distress while supporting agency and community connection. Current WHO work makes clear that climate harms affect both mental wellbeing and wider social determinants of health.',
    [
      'Treat eco-distress as understandable and often proportionate to real threat exposure.',
      'Avoid presenting action as the only route to emotional safety, because exhaustion and guilt can worsen distress.',
      'Use community, meaning and practical coping strategies to reduce helplessness.',
    ],
    [WHO_CLIMATE_HEALTH, WHO_CLIMATE_MENTAL_HEALTH, NHS_MINDFULNESS],
  ),
  47: reviewed(
    'Spirituality and meaning should be handled as part of whole-person care, not as a replacement for treatment. Current NHS chaplaincy guidance supports spiritual care for people of any faith, many faiths or no faith.',
    [
      'Invite reflection on values, meaning and hope without assuming religion.',
      'Explain chaplaincy as pastoral and spiritual support, not proselytising.',
      'Keep clear boundaries between spiritual exploration and clinical risk response.',
    ],
    [NHS_CHAPLAINCY, NHS_CHAPLAINCY_GUIDELINES, NHS_COUNSELLING],
  ),
  48: reviewed(
    'Men’s mental-health teaching should move beyond slogans and into actual barriers to help-seeking. Current suicide data and policy continue to show middle-aged men as a priority group, with shame and social expectations playing a major role.',
    [
      'Teach masculinity as context, not as something inherently harmful.',
      'Cover silence, emotional restriction, body image, substance use and relationship breakdown as common themes.',
      'Make practical, low-friction help routes highly visible.',
    ],
    [ONS_SUICIDE_2024, GOV_SUICIDE_STRATEGY, MHF_MEN_BODY_IMAGE],
  ),
  49: reviewed(
    'Military and veteran mental-health teaching should cover transition, moral injury, PTSD, sleep, substance use and identity loss without reducing all veteran experience to trauma. Current Op COURAGE materials support a joined-up pathway approach.',
    [
      'Teach military culture, transition stress and delayed help-seeking as key context.',
      'Include trauma, anger, alcohol, pain and relationship strain together rather than as separate issues.',
      'Signpost directly to veteran-specific routes such as Op COURAGE.',
    ],
    [GOV_OP_COURAGE, ARMED_FORCES_COVENANT_OP_COURAGE, NHS_TALKING_THERAPIES],
  ),
  50: reviewed(
    'Prison and legal-system mental health teaching should highlight continuity of care, trauma, neurodevelopment, substance use and personality-related complexity. Current NHS England material supports transition planning and integrated pathways before and after custody.',
    [
      'Teach imprisonment as a major mental-health context, not just a justice issue.',
      'Include release transitions, suicide risk, substance use and housing instability in the formulation.',
      'Show where prison, probation, NHS and community support need to link up better.',
    ],
    [NHS_RECONNECT, NHS_OPD, GOV_SUICIDE_STRATEGY],
  ),
};

export function getModuleResearch(moduleId: number): ModuleResearch | undefined {
  const authoredResearch = AUTHORED_MODULE_RESEARCH[moduleId];
  if (authoredResearch) {
    return normalizeModuleResearchText(authoredResearch);
  }

  const research = moduleResearch[moduleId];
  return research ? normalizeModuleResearchText(research) : undefined;
}
