import type {
  ModuleResearch,
  ModuleResearchSource,
  ModuleResearchSourceType,
} from './moduleResearch.ts';

function source(label: string, url: string, type: ModuleResearchSourceType): ModuleResearchSource {
  return { label, url, type };
}

function reviewed(summary: string, teachingPriorities: string[], sources: ModuleResearchSource[]): ModuleResearch {
  return {
    reviewedOn: '2026-03-26',
    summary,
    teachingPriorities,
    sources,
  };
}

export const AUTHORED_MODULE_RESEARCH_BATCH_41_45: Record<number, ModuleResearch> = {
  41: reviewed(
    'This sleep module is anchored in NHS Every Mind Matters, NHS sleep guidance and current sleep-medicine framing: sleep hygiene helps, but persistent insomnia and other sleep disorders need structured assessment and, where appropriate, CBT-I or medical review.',
    [
      'Teach sleep as a core part of mental health rather than a lifestyle extra.',
      'Separate insomnia from sleep apnoea, narcolepsy and circadian disruption.',
      'Keep advice realistic, specific and suitable for real lives with shift work or caring duties.',
      'Use short practical routines rather than perfectionistic sleep rules.',
    ],
    [
      source('NHS - Sleep problems', 'https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/', 'service'),
      source('NHS - Insomnia', 'https://www.nhs.uk/conditions/insomnia/', 'service'),
      source('NHS - Sleep apnoea', 'https://www.nhs.uk/conditions/sleep-apnoea/', 'service'),
      source('NHS - Narcolepsy', 'https://www.nhs.uk/conditions/narcolepsy/', 'service'),
    ],
  ),
  42: reviewed(
    'This nutrition-and-exercise module is grounded in NHS guidance showing that regular physical activity can improve mood and sleep, while balanced food routines support energy and concentration. The key teaching point is moderation, access and sustainability rather than diet-culture extremes.',
    [
      'Teach food and movement as supports for stability, energy and mood.',
      'Use the NHS framing that any amount of activity is better than none if it suits the person.',
      'Avoid moralising diet, weight or exercise habits.',
      'Keep structural barriers such as pain, finances, time and disability in view.',
    ],
    [
      source('NHS - Be active for your mental health', 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/be-active-for-your-mental-health/', 'service'),
      source('NHS - Exercise for depression', 'https://www.nhs.uk/conditions/stress-anxiety-depression/exercise-for-depression/', 'service'),
      source('NHS - Eat well', 'https://www.nhs.uk/live-well/eat-well/', 'service'),
      source('NHS - Every Mind Matters', 'https://www.nhs.uk/every-mind-matters/', 'service'),
    ],
  ),
  43: reviewed(
    'This mindfulness module is best taught as a practical regulation skill, not a cure-all. NHS resources support breathing exercises, short meditation practices and bed-time relaxation, while also making it clear that not every person benefits from inward-focus techniques in the same way.',
    [
      'Define mindfulness simply as paying attention on purpose, in the present moment.',
      'Keep breathwork short, gentle and optional rather than forced.',
      'Explain when grounding, movement or social support may be a better fit than meditation.',
      'Make access, culture and personal preference explicit.',
    ],
    [
      source('NHS - Breathing exercises for stress', 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/', 'service'),
      source('NHS - How can meditation help with sleep?', 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/how-can-meditation-help-with-sleep/', 'service'),
      source('NHS - Bedtime meditation video', 'https://www.nhs.uk/live-well/sleep-and-tiredness/bedtime-meditation/', 'service'),
      source("Guy's and St Thomas' NHS - MBSR exercises", 'https://www.guysandstthomas.nhs.uk/health-information/mindfulness-based-stress-reduction-mbsr/mbsr-exercises', 'service'),
    ],
  ),
  44: reviewed(
    'This creative-therapies module is supported by NHS Health Careers and NHS trust service pages describing art, music, drama and dance-movement psychotherapy as structured therapeutic approaches that support expression, communication and recovery.',
    [
      'Teach creative therapies as real therapeutic work, not entertainment or performance.',
      'Explain that the process matters more than artistic skill.',
      'Keep consent, pacing and emotional safety central.',
      'Show that creative therapies can support people who struggle to find words.',
    ],
    [
      source('NHS Health Careers - Art therapist/art psychotherapist', 'https://www.healthcareers.nhs.uk/explore-roles/allied-health-professionals/roles-allied-health-professions/art-therapistart-psychotherapist', 'service'),
      source('CNWL - Arts Psychotherapies Service', 'https://www.cnwl.nhs.uk/professionals/cnwl-arts-psychotherapies-service', 'service'),
      source('CNWL - Arts in Health', 'https://www.cnwl.nhs.uk/cnwl-arts-health', 'service'),
      source('Great Ormond Street Hospital - Music therapy', 'https://www.gosh.nhs.uk/patients-and-families/support-services/music-therapy/about-music-therapy/', 'service'),
    ],
  ),
  45: reviewed(
    'This technology module is grounded in NHS England digital-inclusion guidance, NHS Every Mind Matters and NHS gaming-disorder service information. The evidence supports a balanced message: tech can help connection and access, but habit loops, gaming disorder, sleep disruption and poor boundaries can worsen mental health.',
    [
      'Teach technology as neither inherently harmful nor inherently harmless.',
      'Separate healthy use from overuse or functionally impairing use.',
      'Keep sleep disruption and digital boundaries visible.',
      'Use practical language about notification, scrolling and gaming habit loops.',
    ],
    [
      source('NHS England - Social media', 'https://www.england.nhs.uk/long-read/social-media/', 'policy'),
      source('NHS England - Health equalities and digital inclusion', 'https://www.england.nhs.uk/long-read/health-equalities-and-digital-inclusion/', 'policy'),
      source('NHS England - NHS treats hundreds with gaming disorders', 'https://www.england.nhs.uk/2023/03/nhs-treats-hundreds-with-gaming-disorders/', 'policy'),
      source('NHS - Every Mind Matters', 'https://www.nhs.uk/every-mind-matters/', 'service'),
    ],
  ),
};
