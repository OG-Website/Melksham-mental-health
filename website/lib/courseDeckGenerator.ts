import fs from 'node:fs/promises';
import path from 'node:path';
import PptxGenJS from 'pptxgenjs';
import {
  getModuleGuide,
  type ModuleGuide,
  type SessionSegment,
  type Slide as ModuleSlide,
} from './moduleGuides.ts';
import {
  getModuleResearch,
  type ModuleResearch,
} from './moduleResearch.ts';
import {
  COURSE_DECK_AUDIENCES,
  getCourseDeckAbsolutePath,
  type CourseDeckAudience,
} from './courseDecks.ts';

const COLORS = {
  background: '0A0A0A',
  backgroundAlt: '141414',
  primary: 'F97316',
  primaryDark: 'C2410C',
  text: 'F8FAFC',
  textMuted: 'CBD5E1',
  border: '3F3F46',
};

const SOURCE_PATHS = [
  path.join(process.cwd(), 'lib', 'moduleGuides.ts'),
  path.join(process.cwd(), 'lib', 'moduleResearch.ts'),
  path.join(process.cwd(), 'lib', 'courseDeckGenerator.ts'),
  path.join(process.cwd(), 'lib', 'courseDecks.ts'),
];

const LOGO_PATH = path.join(process.cwd(), 'public', 'logo.png');
const DECK_MIME_TYPE = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';

type SlideScriptMap = Map<number, string[]>;

function normalizeText(value: string): string {
  return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}

function chunkArray<T>(items: T[], chunkSize: number): T[][] {
  if (items.length === 0) return [[]];
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += chunkSize) {
    chunks.push(items.slice(index, index + chunkSize));
  }
  return chunks;
}

function paginateText(text: string, maxChars: number): string[] {
  const paragraphs = normalizeText(text)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) return [''];

  const pages: string[] = [];
  let current = '';

  for (const paragraph of paragraphs) {
    const candidate = current ? `${current}\n\n${paragraph}` : paragraph;
    if (current && candidate.length > maxChars) {
      pages.push(current);
      current = paragraph;
    } else {
      current = candidate;
    }
  }

  if (current) {
    pages.push(current);
  }

  return pages;
}

function splitBulletsForSlides(slide: ModuleSlide): string[][] {
  const bullets = slide.bullets.map((bullet) => bullet.trim()).filter(Boolean);
  const longBullet = bullets.some((bullet) => bullet.length > 110);
  const chunkSize = longBullet ? 4 : 5;
  return chunkArray(bullets, chunkSize);
}

function safeDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function parseSlideNumberToken(token: string): number[] {
  const cleaned = token.replace(/\band\b/gi, '&').replace(/[–—]/g, '-');
  const numbers = new Set<number>();

  for (const rawPart of cleaned.split(/[,&]/)) {
    const part = rawPart.trim();
    if (!part) continue;

    const rangeMatch = part.match(/^(\d+)\s*-\s*(\d+)$/);
    if (rangeMatch) {
      const start = Number(rangeMatch[1]);
      const end = Number(rangeMatch[2]);
      const lower = Math.min(start, end);
      const upper = Math.max(start, end);
      for (let value = lower; value <= upper; value += 1) {
        numbers.add(value);
      }
      continue;
    }

    const numeric = Number(part);
    if (Number.isInteger(numeric)) {
      numbers.add(numeric);
    }
  }

  return Array.from(numbers).sort((left, right) => left - right);
}

function buildSlideScriptMap(deliveryScript: string): SlideScriptMap {
  const notesBySlide = new Map<number, string[]>();
  const script = normalizeText(deliveryScript);
  const sectionPattern = /(?:^|\n)SLIDE(?:S)?\s+([0-9,&\-\s]+)\s+[—-]\s*(.+?)\n([\s\S]*?)(?=\nSLIDE(?:S)?\s+[0-9]|\s*$)/g;
  let match = sectionPattern.exec(script);

  while (match) {
    const slideNumbers = parseSlideNumberToken(match[1]);
    const noteTitle = match[2].trim();
    const noteBody = match[3].trim();
    const note = `${noteTitle}\n\n${noteBody}`.trim();

    for (const slideNumber of slideNumbers) {
      const existing = notesBySlide.get(slideNumber) ?? [];
      existing.push(note);
      notesBySlide.set(slideNumber, existing);
    }

    match = sectionPattern.exec(script);
  }

  if (notesBySlide.size === 0 && script) {
    notesBySlide.set(1, [script]);
  }

  return notesBySlide;
}

function buildAgendaBullets(sessionBreakdown: SessionSegment[]): string[] {
  return sessionBreakdown.map((segment) => `${segment.time}: ${segment.label}`);
}

function buildLearningFocusBullets(guide: ModuleGuide): string[] {
  const headlineSlides = guide.slideOutline.slice(0, 4).map((slide) => slide.title);
  const focusBullets = headlineSlides.map((title) => `Explore ${title}`);
  focusBullets.push('Apply the module activity in a practical, structured way');
  focusBullets.push('Leave with UK support and signposting options');
  return focusBullets.slice(0, 6);
}

function formatReviewDate(reviewedOn: string): string {
  const parsed = new Date(`${reviewedOn}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return reviewedOn;

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parsed);
}

function buildResearchSummaryText(research: ModuleResearch): string {
  return [
    `Reviewed on: ${formatReviewDate(research.reviewedOn)}`,
    '',
    'Evidence summary',
    research.summary,
    '',
    'Teaching priorities',
    ...research.teachingPriorities.map((priority, index) => `${index + 1}. ${priority}`),
  ].join('\n');
}

function buildResearchSourceBullets(research: ModuleResearch): string[] {
  return research.sources.map((source) => `${source.label} (${safeDomain(source.url)})`);
}

function buildResearchNotes(research: ModuleResearch): string[] {
  return [
    `Reviewed on\n${formatReviewDate(research.reviewedOn)}`,
    `Evidence summary\n${research.summary}`,
    `Teaching priorities\n${research.teachingPriorities.join('\n')}`,
    `Reviewed sources\n${research.sources.map((source) => `${source.label}\n${source.url}`).join('\n\n')}`,
  ];
}

function buildActivityPreview(activity: string): string[] {
  const lines = normalizeText(activity)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^materials:/i.test(line) && !/^instructions to read aloud:/i.test(line));

  const bulletCandidates = lines
    .filter((line) => !/^ACTIVITY/i.test(line))
    .slice(0, 5)
    .map((line) => line.replace(/^[-*]\s*/, '').replace(/^\d+\.\s*/, ''));

  return bulletCandidates.length > 0
    ? bulletCandidates
    : ['Reflect privately', 'Follow the facilitator prompts', 'Share only if you feel comfortable'];
}

function getActivityTitle(activity: string): string {
  const firstLine = normalizeText(activity).split('\n')[0]?.trim() ?? 'Interactive Activity';
  return firstLine.replace(/^ACTIVITY\s+[—-]\s*/i, '') || 'Interactive Activity';
}

function buildTutorBriefText(guide: ModuleGuide): string {
  const parts = [
    `Summary\n${guide.summary}`,
    `Session flow\n${buildAgendaBullets(guide.sessionBreakdown).join('\n')}`,
    `Facilitation priorities\n${guide.tutorNotes}`,
  ];

  if (guide.powerPoint) {
    parts.push(`Module-specific slide brief\n${guide.powerPoint}`);
  }

  return parts.join('\n\n');
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getLatestSourceTimestamp(): Promise<number> {
  const timestamps = await Promise.all(
    SOURCE_PATHS.map(async (sourcePath) => {
      try {
        const stat = await fs.stat(sourcePath);
        return stat.mtimeMs;
      } catch {
        return 0;
      }
    }),
  );

  return Math.max(...timestamps, 0);
}

async function shouldRegenerateDeck(filePath: string): Promise<boolean> {
  try {
    const [deckStat, latestSourceTimestamp] = await Promise.all([
      fs.stat(filePath),
      getLatestSourceTimestamp(),
    ]);
    return deckStat.mtimeMs < latestSourceTimestamp;
  } catch {
    return true;
  }
}

async function resolveLogoPath(): Promise<string | null> {
  return (await fileExists(LOGO_PATH)) ? LOGO_PATH : null;
}

function createPresentation(guide: ModuleGuide, audience: CourseDeckAudience): PptxGenJS {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Melksham Mental Health';
  pptx.company = 'Melksham Mental Health';
  pptx.subject = `${guide.topic} (${audience})`;
  pptx.title = `${guide.topic} ${audience === 'tutor' ? 'Tutor Deck' : 'Student Deck'}`;
  pptx.theme = {
    headFontFace: 'Aptos Display',
    bodyFontFace: 'Aptos',
  };
  return pptx;
}

function addBaseSlideChrome(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  guide: ModuleGuide,
  audience: CourseDeckAudience,
  title: string,
): void {
  slide.background = { color: COLORS.background };

  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.18,
    line: { color: COLORS.primary },
    fill: { color: COLORS.primary },
  });

  slide.addText(`Module ${String(guide.id).padStart(2, '0')}`, {
    x: 0.6,
    y: 0.28,
    w: 2.1,
    h: 0.22,
    fontSize: 11,
    bold: true,
    color: COLORS.primary,
    margin: 0,
  });

  slide.addText(title, {
    x: 0.6,
    y: 0.48,
    w: 9.4,
    h: 0.5,
    fontSize: 22,
    bold: true,
    color: COLORS.text,
    margin: 0,
    fit: 'shrink',
  });

  slide.addText(audience === 'tutor' ? 'Admin Tutor Deck' : 'Student Slide Deck', {
    x: 10.45,
    y: 0.46,
    w: 1.95,
    h: 0.34,
    fontSize: 10,
    align: 'center',
    bold: true,
    color: COLORS.text,
    margin: 0.02,
    fill: { color: audience === 'tutor' ? COLORS.primaryDark : COLORS.primary },
    line: { color: audience === 'tutor' ? COLORS.primaryDark : COLORS.primary },
  });

  slide.addShape(pptx.ShapeType.line, {
    x: 0.6,
    y: 1.02,
    w: 12.1,
    h: 0,
    line: { color: COLORS.border, pt: 1.2 },
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 7.08,
    w: 13.333,
    h: 0.42,
    line: { color: COLORS.backgroundAlt },
    fill: { color: COLORS.backgroundAlt },
  });

  slide.addText('Crisis support: Samaritans 116 123 | NHS 111 | Emergency 999', {
    x: 0.55,
    y: 7.17,
    w: 7.2,
    h: 0.12,
    fontSize: 8.5,
    color: COLORS.textMuted,
    margin: 0,
  });

  slide.addText('Melksham Mental Health | Licensed training materials', {
    x: 7.75,
    y: 7.17,
    w: 5.0,
    h: 0.12,
    fontSize: 8.5,
    color: COLORS.textMuted,
    margin: 0,
    align: 'right',
  });
}

function addLogoToSlide(slide: PptxGenJS.Slide, logoPath: string | null): void {
  if (!logoPath) return;

  slide.addImage({
    path: logoPath,
    x: 11.75,
    y: 0.88,
    w: 0.9,
    h: 0.9,
    transparency: 2,
  });
}

function addBulletSlide(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  guide: ModuleGuide,
  audience: CourseDeckAudience,
  title: string,
  bullets: string[],
  logoPath: string | null,
): void {
  addBaseSlideChrome(pptx, slide, guide, audience, title);
  addLogoToSlide(slide, logoPath);

  const runs = bullets.flatMap((bullet) => [
    { text: bullet, options: { bullet: { indent: 18 } } },
    { text: '\n' },
  ]);

  slide.addText(runs.length > 0 ? runs : [{ text: ' ' }], {
    x: 0.85,
    y: 1.35,
    w: 11.3,
    h: 5.3,
    fontSize: bullets.some((bullet) => bullet.length > 110) ? 16 : 18,
    color: COLORS.text,
    margin: 0.06,
    breakLine: false,
    valign: 'top',
    fit: 'shrink',
  });
}

function addTextSlide(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  guide: ModuleGuide,
  audience: CourseDeckAudience,
  title: string,
  body: string,
  logoPath: string | null,
  options?: { fontSize?: number; columnNote?: string },
): void {
  addBaseSlideChrome(pptx, slide, guide, audience, title);
  addLogoToSlide(slide, logoPath);

  slide.addText(body, {
    x: 0.85,
    y: 1.32,
    w: options?.columnNote ? 8.25 : 11.2,
    h: 5.42,
    fontSize: options?.fontSize ?? 15.5,
    color: COLORS.text,
    margin: 0.06,
    breakLine: false,
    valign: 'top',
    fit: 'shrink',
  });

  if (options?.columnNote) {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 9.4,
      y: 1.45,
      w: 2.85,
      h: 4.9,
      rectRadius: 0.08,
      line: { color: COLORS.border, pt: 1.1 },
      fill: { color: COLORS.backgroundAlt, transparency: 4 },
    });

    slide.addText(options.columnNote, {
      x: 9.65,
      y: 1.72,
      w: 2.35,
      h: 4.35,
      fontSize: 12.5,
      color: COLORS.textMuted,
      margin: 0,
      breakLine: false,
      valign: 'top',
      fit: 'shrink',
    });
  }
}

function addTitleSlide(
  pptx: PptxGenJS,
  guide: ModuleGuide,
  audience: CourseDeckAudience,
  logoPath: string | null,
): PptxGenJS.Slide {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.background };

  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 1.15,
    line: { color: COLORS.primary },
    fill: { color: COLORS.primary },
  });

  slide.addText(`Module ${String(guide.id).padStart(2, '0')}`, {
    x: 0.7,
    y: 0.22,
    w: 2.4,
    h: 0.35,
    fontSize: 18,
    bold: true,
    color: COLORS.background,
    margin: 0,
  });

  slide.addText(guide.topic, {
    x: 0.78,
    y: 1.55,
    w: 9.8,
    h: 1.25,
    fontSize: 28,
    bold: true,
    color: COLORS.text,
    margin: 0,
    fit: 'shrink',
  });

  slide.addText(guide.summary, {
    x: 0.8,
    y: 2.95,
    w: 8.6,
    h: 1.5,
    fontSize: 16.5,
    color: COLORS.textMuted,
    margin: 0,
    fit: 'shrink',
  });

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8,
    y: 4.95,
    w: 3.35,
    h: 0.58,
    rectRadius: 0.08,
    line: { color: COLORS.primaryDark },
    fill: { color: COLORS.primaryDark },
  });

  slide.addText(audience === 'tutor' ? 'Tutor Delivery Deck' : 'Student Slide Deck', {
    x: 0.98,
    y: 5.1,
    w: 3.0,
    h: 0.18,
    fontSize: 14,
    bold: true,
    color: COLORS.text,
    margin: 0,
    align: 'center',
  });

  slide.addText('Two-hour facilitated session | Module-specific notes and signposting', {
    x: 0.82,
    y: 5.82,
    w: 6.4,
    h: 0.18,
    fontSize: 12.5,
    color: COLORS.textMuted,
    margin: 0,
  });

  if (logoPath) {
    slide.addImage({
      path: logoPath,
      x: 10.0,
      y: 1.55,
      w: 2.25,
      h: 2.25,
    });
  }

  slide.addShape(pptx.ShapeType.line, {
    x: 0.8,
    y: 6.45,
    w: 11.7,
    h: 0,
    line: { color: COLORS.border, pt: 1.1 },
  });

  slide.addText('Melksham Mental Health | Crisis support: Samaritans 116 123 | Emergency 999', {
    x: 0.8,
    y: 6.72,
    w: 11.8,
    h: 0.15,
    fontSize: 9.5,
    color: COLORS.textMuted,
    margin: 0,
  });

  return slide;
}

function addTutorNotes(slide: PptxGenJS.Slide, notes: string[]): void {
  const cleaned = notes.map((note) => normalizeText(note)).filter(Boolean);
  if (cleaned.length === 0) return;
  slide.addNotes(cleaned.join('\n\n---\n\n'));
}

async function buildDeck(moduleId: number, audience: CourseDeckAudience, outputPath: string): Promise<void> {
  const guide = getModuleGuide(moduleId);
  if (!guide) {
    throw new Error(`Module ${moduleId} was not found in moduleGuides.ts`);
  }
  const research = getModuleResearch(moduleId);

  const pptx = createPresentation(guide, audience);
  const logoPath = await resolveLogoPath();
  const slideScripts = buildSlideScriptMap(guide.deliveryScript);

  if (audience === 'tutor') {
    const tutorBriefPages = paginateText(buildTutorBriefText(guide), 1550);
    tutorBriefPages.forEach((page, pageIndex) => {
      const slide = pptx.addSlide();
      addTextSlide(
        pptx,
        slide,
        guide,
        audience,
        pageIndex === 0 ? 'Tutor Delivery Brief' : `Tutor Delivery Brief (Part ${pageIndex + 1})`,
        page,
        logoPath,
        {
          fontSize: 14.2,
          columnNote: 'Use this deck for delivery support only.\n\nThe student deck removes tutor-only scripting, safeguarding prompts and design instructions.',
        },
      );
      addTutorNotes(slide, [guide.tutorNotes, guide.powerPoint ?? '']);
    });
  }

  const titleSlide = addTitleSlide(pptx, guide, audience, logoPath);
  addTutorNotes(titleSlide, [
    guide.summary,
    ...(research ? buildResearchNotes(research).slice(0, 2) : []),
    slideScripts.get(1)?.join('\n\n') ?? guide.deliveryScript,
  ]);

  const overviewSlide = pptx.addSlide();
  addBulletSlide(
    pptx,
    overviewSlide,
    guide,
    audience,
    'Learning Focus',
    buildLearningFocusBullets(guide),
    logoPath,
  );
  addTutorNotes(overviewSlide, [
    `Session overview\n${buildAgendaBullets(guide.sessionBreakdown).join('\n')}`,
    guide.summary,
  ]);

  if (research) {
    const researchSlide = pptx.addSlide();
    if (audience === 'tutor') {
      addTextSlide(
        pptx,
        researchSlide,
        guide,
        audience,
        'Current Evidence Review',
        buildResearchSummaryText(research),
        logoPath,
        {
          fontSize: 14.1,
          columnNote: `Reviewed ${formatReviewDate(research.reviewedOn)}\n\nUse this as the delivery frame for the session.\nKeep language person-centred and signposting practical.`,
        },
      );
    } else {
      addBulletSlide(
        pptx,
        researchSlide,
        guide,
        audience,
        'Key Evidence and Practice Points',
        research.teachingPriorities,
        logoPath,
      );
    }
    addTutorNotes(researchSlide, buildResearchNotes(research));

    if (audience === 'tutor') {
      const sourceSlide = pptx.addSlide();
      addBulletSlide(
        pptx,
        sourceSlide,
        guide,
        audience,
        'Reviewed Source Set',
        buildResearchSourceBullets(research),
        logoPath,
      );
      addTutorNotes(sourceSlide, buildResearchNotes(research));
    }
  }

  const timetableSlide = pptx.addSlide();
  addBulletSlide(
    pptx,
    timetableSlide,
    guide,
    audience,
    'Session Timetable',
    buildAgendaBullets(guide.sessionBreakdown),
    logoPath,
  );
  addTutorNotes(timetableSlide, [guide.tutorNotes]);

  guide.slideOutline.forEach((outlineSlide, index) => {
    const bulletGroups = splitBulletsForSlides(outlineSlide);
    bulletGroups.forEach((bullets, groupIndex) => {
      const slide = pptx.addSlide();
      const title =
        groupIndex === 0 ? outlineSlide.title : `${outlineSlide.title} (Continued)`;
      addBulletSlide(pptx, slide, guide, audience, title, bullets, logoPath);
      addTutorNotes(slide, slideScripts.get(index + 1) ?? []);
    });
  });

  const activityPages = paginateText(guide.activity, audience === 'tutor' ? 1500 : 900);
  activityPages.forEach((page, pageIndex) => {
    const slide = pptx.addSlide();
    if (audience === 'tutor') {
      addTextSlide(
        pptx,
        slide,
        guide,
        audience,
        pageIndex === 0 ? getActivityTitle(guide.activity) : `${getActivityTitle(guide.activity)} (Part ${pageIndex + 1})`,
        page,
        logoPath,
        {
          fontSize: 14.4,
          columnNote: 'Tutor prompts\n\nKeep the invitation gentle.\nRemind participants they can pass.\nBuild in a short grounding pause before debrief.',
        },
      );
      addTutorNotes(slide, [guide.activity, guide.tutorNotes]);
    } else {
      addBulletSlide(
        pptx,
        slide,
        guide,
        audience,
        pageIndex === 0 ? getActivityTitle(guide.activity) : `${getActivityTitle(guide.activity)} (Part ${pageIndex + 1})`,
        pageIndex === 0 ? buildActivityPreview(guide.activity) : [page],
        logoPath,
      );
    }
  });

  const discussionSlide = pptx.addSlide();
  addBulletSlide(
    pptx,
    discussionSlide,
    guide,
    audience,
    'Discussion and Reflection',
    guide.discussionPrompts,
    logoPath,
  );
  addTutorNotes(discussionSlide, [
    `Discussion prompts\n${guide.discussionPrompts.join('\n')}`,
    'Facilitator note\nInvite reflection without pressure. Normalise passing and redirect if discussion becomes personal or unsafe.',
  ]);

  if (audience === 'tutor' && guide.videos && guide.videos.length > 0) {
    const videoSlide = pptx.addSlide();
    addBulletSlide(
      pptx,
      videoSlide,
      guide,
      audience,
      'Optional Video Support',
      guide.videos.map((video) => `${video.label} (${safeDomain(video.url)})`),
      logoPath,
    );
    addTutorNotes(
      videoSlide,
      guide.videos.map((video) => `${video.label}\n${video.url}`),
    );
  }

  const resourceSlide = pptx.addSlide();
  addBulletSlide(
    pptx,
    resourceSlide,
    guide,
    audience,
    'Resources and Signposting',
    guide.resources.map((resource) => `${resource.label} (${safeDomain(resource.url)})`),
    logoPath,
  );
  addTutorNotes(
    resourceSlide,
    guide.resources.map((resource) => `${resource.label}\n${resource.url}`),
  );

  if (audience === 'tutor' && guide.powerPoint) {
    const powerPointSpecPages = paginateText(guide.powerPoint, 1550);
    powerPointSpecPages.forEach((page, pageIndex) => {
      const slide = pptx.addSlide();
      addTextSlide(
        pptx,
        slide,
        guide,
        audience,
        pageIndex === 0 ? 'Module-Specific Deck Notes' : `Module-Specific Deck Notes (Part ${pageIndex + 1})`,
        page,
        logoPath,
        { fontSize: 14.1 },
      );
      addTutorNotes(slide, guide.powerPoint ? [guide.powerPoint] : []);
    });
  }

  const parentDir = path.dirname(outputPath);
  await fs.mkdir(parentDir, { recursive: true });
  await pptx.writeFile({ fileName: outputPath, compression: true });
}

export async function ensureCourseDeckGenerated(
  moduleId: number,
  audience: CourseDeckAudience,
): Promise<string> {
  const outputPath = getCourseDeckAbsolutePath(moduleId, audience);
  if (await shouldRegenerateDeck(outputPath)) {
    await buildDeck(moduleId, audience, outputPath);
  }
  return outputPath;
}

export async function generateAllCourseDecks(moduleIds?: number[]): Promise<string[]> {
  const ids = moduleIds && moduleIds.length > 0
    ? moduleIds
    : Array.from({ length: 50 }, (_, index) => index + 1);

  const generatedFiles: string[] = [];

  for (const moduleId of ids) {
    for (const audience of COURSE_DECK_AUDIENCES) {
      const filePath = getCourseDeckAbsolutePath(moduleId, audience);
      await buildDeck(moduleId, audience, filePath);
      generatedFiles.push(filePath);
    }
  }

  return generatedFiles;
}

export { DECK_MIME_TYPE };
