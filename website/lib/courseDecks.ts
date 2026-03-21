import path from 'node:path';
import { getModuleGuide } from './moduleGuides.ts';

export const COURSE_DECK_AUDIENCES = ['student', 'tutor'] as const;

export type CourseDeckAudience = (typeof COURSE_DECK_AUDIENCES)[number];

const GENERATED_COURSE_DECKS_DIR = path.join(process.cwd(), 'data', 'generated', 'course-decks');

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function normalizeCourseModuleId(value: number | string): number | null {
  const moduleId = typeof value === 'string' ? Number(value) : value;
  if (!Number.isInteger(moduleId) || moduleId < 1 || moduleId > 50) return null;
  return moduleId;
}

export function isCourseDeckAudience(value: string): value is CourseDeckAudience {
  return (COURSE_DECK_AUDIENCES as readonly string[]).includes(value);
}

export function getCourseDeckAudienceLabel(audience: CourseDeckAudience): string {
  return audience === 'tutor' ? 'Tutor Deck' : 'Student Deck';
}

export function getCourseDeckFilename(moduleId: number, audience: CourseDeckAudience): string {
  const guide = getModuleGuide(moduleId);
  const topicSlug = slugify(guide?.topic ?? `module-${moduleId}`);
  const suffix = audience === 'tutor' ? 'tutor-deck' : 'student-deck';
  return `mmh-module-${String(moduleId).padStart(2, '0')}-${topicSlug}-${suffix}.pptx`;
}

export function getCourseDeckAbsolutePath(moduleId: number, audience: CourseDeckAudience): string {
  return path.join(GENERATED_COURSE_DECKS_DIR, audience, getCourseDeckFilename(moduleId, audience));
}

export function getCourseDeckDownloadPath(moduleId: number, audience: CourseDeckAudience): string {
  return `/api/course-materials/${audience}/${moduleId}`;
}
