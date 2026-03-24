import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

export interface AdminBroadcastNote {
  id: string;
  subject: string;
  message: string;
  createdAt: string;
  sentByName: string;
  sentByEmail: string;
  totalRecipients: number;
  sentCount: number;
  failedCount: number;
}

interface CreateAdminBroadcastNoteInput {
  subject: string;
  message: string;
  sentByName: string;
  sentByEmail: string;
  totalRecipients: number;
  sentCount: number;
  failedCount: number;
}

function getAdminBroadcastFilePath(): string {
  if (process.env.ADMIN_BROADCASTS_DATA_PATH) return process.env.ADMIN_BROADCASTS_DATA_PATH;
  if (process.env.NODE_ENV === 'production') return '/tmp/mmh-admin-broadcasts.json';
  return path.join(process.cwd(), 'data', 'admin-broadcasts.json');
}

function readAllBroadcastNotes(): AdminBroadcastNote[] {
  try {
    const filePath = getAdminBroadcastFilePath();
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw) as AdminBroadcastNote[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAllBroadcastNotes(notes: AdminBroadcastNote[]): void {
  const filePath = getAdminBroadcastFilePath();
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2), 'utf-8');
}

export function getAdminBroadcastNotes(limit = 20): AdminBroadcastNote[] {
  return readAllBroadcastNotes()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, Math.max(1, limit));
}

export function createAdminBroadcastNote(input: CreateAdminBroadcastNoteInput): AdminBroadcastNote {
  const note: AdminBroadcastNote = {
    id: randomUUID(),
    subject: input.subject.trim().slice(0, 200),
    message: input.message.trim().slice(0, 20000),
    createdAt: new Date().toISOString(),
    sentByName: input.sentByName.trim().slice(0, 200),
    sentByEmail: input.sentByEmail.toLowerCase().trim(),
    totalRecipients: Math.max(0, Math.floor(input.totalRecipients)),
    sentCount: Math.max(0, Math.floor(input.sentCount)),
    failedCount: Math.max(0, Math.floor(input.failedCount)),
  };

  const all = readAllBroadcastNotes();
  all.push(note);
  writeAllBroadcastNotes(all);
  return note;
}
