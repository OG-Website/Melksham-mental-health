import type { ModuleGuide, SessionSegment, Slide } from './moduleGuides.ts';
import type { ModuleResearch, ModuleResearchSource } from './moduleResearch.ts';

const MOJIBAKE_MARKER_PATTERN = /[ÃÂâ€�€™œž]/;

const UK_SPELLING_RULES: Array<[RegExp, string]> = [
  [/\bbehavioral\b/gi, 'behavioural'],
  [/\bbehaviorally\b/gi, 'behaviourally'],
  [/\bbehavior\b/gi, 'behaviour'],
  [/\bbehaviors\b/gi, 'behaviours'],
  [/\bcounseling\b/gi, 'counselling'],
  [/\bcounselor\b/gi, 'counsellor'],
  [/\bcounselors\b/gi, 'counsellors'],
  [/\borganize\b/gi, 'organise'],
  [/\borganized\b/gi, 'organised'],
  [/\borganizing\b/gi, 'organising'],
  [/\borganization\b/gi, 'organisation'],
  [/\borganizations\b/gi, 'organisations'],
  [/\bprogram\b/gi, 'programme'],
  [/\bprograms\b/gi, 'programmes'],
  [/\bcenter\b/gi, 'centre'],
  [/\bcenters\b/gi, 'centres'],
  [/\bmodeling\b/gi, 'modelling'],
  [/\bmodeled\b/gi, 'modelled'],
];

function preserveCase(source: string, target: string): string {
  if (source.toUpperCase() === source) return target.toUpperCase();
  if (source[0] && source[0] === source[0].toUpperCase()) {
    return target[0].toUpperCase() + target.slice(1);
  }
  return target;
}

function mojibakeScore(value: string): number {
  return (value.match(MOJIBAKE_MARKER_PATTERN) ?? []).length;
}

export function repairMojibake(value: string): string {
  if (!value || !MOJIBAKE_MARKER_PATTERN.test(value)) return value;

  try {
    const repaired = Buffer.from(value, 'latin1').toString('utf8');
    return mojibakeScore(repaired) < mojibakeScore(value) ? repaired : value;
  } catch {
    return value;
  }
}

export function toUkEnglish(value: string): string {
  let result = repairMojibake(value);
  for (const [pattern, replacement] of UK_SPELLING_RULES) {
    result = result.replace(pattern, (match) => preserveCase(match, replacement));
  }
  return result;
}

export function normaliseCourseCopy(value: string): string {
  return toUkEnglish(value).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

function normaliseStringArray(values: string[]): string[] {
  return values.map((value) => normaliseCourseCopy(value));
}

function normaliseResources<T extends { label: string; url: string }>(values: T[]): T[] {
  return values.map((value) => ({
    ...value,
    label: normaliseCourseCopy(value.label),
    url: normaliseCourseCopy(value.url),
  }));
}

function normaliseSessionBreakdown(values: SessionSegment[]): SessionSegment[] {
  return values.map((value) => ({
    time: normaliseCourseCopy(value.time),
    label: normaliseCourseCopy(value.label),
  }));
}

function normaliseSlideOutline(values: Slide[]): Slide[] {
  return values.map((value) => ({
    title: normaliseCourseCopy(value.title),
    bullets: normaliseStringArray(value.bullets),
  }));
}

export function normalizeModuleGuideText(guide: ModuleGuide): ModuleGuide {
  return {
    ...guide,
    topic: normaliseCourseCopy(guide.topic),
    summary: normaliseCourseCopy(guide.summary),
    sessionBreakdown: normaliseSessionBreakdown(guide.sessionBreakdown),
    slideOutline: normaliseSlideOutline(guide.slideOutline),
    deliveryScript: normaliseCourseCopy(guide.deliveryScript),
    activity: normaliseCourseCopy(guide.activity),
    discussionPrompts: normaliseStringArray(guide.discussionPrompts),
    resources: normaliseResources(guide.resources),
    tutorNotes: normaliseCourseCopy(guide.tutorNotes),
    ...(guide.powerPoint ? { powerPoint: normaliseCourseCopy(guide.powerPoint) } : {}),
    ...(guide.videos ? { videos: normaliseResources(guide.videos) } : {}),
  };
}

export function normalizeModuleResearchText(research: ModuleResearch): ModuleResearch {
  return {
    ...research,
    reviewedOn: research.reviewedOn,
    summary: normaliseCourseCopy(research.summary),
    teachingPriorities: normaliseStringArray(research.teachingPriorities),
    sources: normaliseResources<ModuleResearchSource>(research.sources),
  };
}
