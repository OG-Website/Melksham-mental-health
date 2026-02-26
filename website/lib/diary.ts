import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

export interface DiaryEntry {
  id: string;
  userId: string;
  createdAt: string;
  date: string; // YYYY-MM-DD
  mood: number; // 1–5
  title: string;
  body: string;
  symptoms: string;
  triggers: string;
  positives: string;
}

function getDiaryFilePath(): string {
  if (process.env.DIARY_DATA_PATH) return process.env.DIARY_DATA_PATH;
  if (process.env.NODE_ENV === 'production') return '/tmp/mmh-diary.json';
  return path.join(process.cwd(), 'data', 'diary.json');
}

function readAllEntries(): DiaryEntry[] {
  try {
    const filePath = getDiaryFilePath();
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as DiaryEntry[];
  } catch {
    return [];
  }
}

function writeAllEntries(entries: DiaryEntry[]): void {
  const filePath = getDiaryFilePath();
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2), 'utf-8');
}

/** Get all diary entries for a specific user, newest first. */
export function getUserEntries(userId: string): DiaryEntry[] {
  return readAllEntries()
    .filter((e) => e.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Create a new diary entry. Returns the new entry. */
export function createEntry(
  userId: string,
  data: Omit<DiaryEntry, 'id' | 'userId' | 'createdAt'>,
): DiaryEntry {
  const entry: DiaryEntry = {
    id: randomUUID(),
    userId,
    createdAt: new Date().toISOString(),
    ...data,
  };
  const all = readAllEntries();
  all.push(entry);
  writeAllEntries(all);
  return entry;
}

/** Delete a diary entry. Returns true if found and removed. */
export function deleteEntry(userId: string, entryId: string): boolean {
  const all = readAllEntries();
  const idx = all.findIndex((e) => e.id === entryId && e.userId === userId);
  if (idx === -1) return false;
  all.splice(idx, 1);
  writeAllEntries(all);
  return true;
}
