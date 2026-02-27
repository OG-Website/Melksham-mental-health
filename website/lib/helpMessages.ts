import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

export interface HelpMessage {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  subject: string;
  message: string;
  createdAt: string;
  /** ISO timestamp when admin responded, or undefined if not yet responded */
  respondedAt?: string;
  /** Admin reply text */
  adminReply?: string;
}

function getHelpFilePath(): string {
  if (process.env.HELP_DATA_PATH) return process.env.HELP_DATA_PATH;
  if (process.env.NODE_ENV === 'production') return '/tmp/mmh-help.json';
  return path.join(process.cwd(), 'data', 'help-messages.json');
}

function readAllMessages(): HelpMessage[] {
  try {
    const filePath = getHelpFilePath();
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as HelpMessage[];
  } catch {
    return [];
  }
}

function writeAllMessages(messages: HelpMessage[]): void {
  const filePath = getHelpFilePath();
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf-8');
}

/** Get all help messages for a specific user, newest first. */
export function getUserMessages(userId: string): HelpMessage[] {
  return readAllMessages()
    .filter((m) => m.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Get all help messages (admin only), newest first. */
export function getAllMessages(): HelpMessage[] {
  return readAllMessages()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Create a new help message. */
export function createHelpMessage(
  userId: string,
  userName: string,
  userEmail: string,
  subject: string,
  message: string,
): HelpMessage {
  const msg: HelpMessage = {
    id: randomUUID(),
    userId,
    userName,
    userEmail,
    subject: subject.trim().slice(0, 200),
    message: message.trim().slice(0, 5000),
    createdAt: new Date().toISOString(),
  };
  const all = readAllMessages();
  all.push(msg);
  writeAllMessages(all);
  return msg;
}

/** Admin replies to a help message. */
export function replyToMessage(messageId: string, adminReply: string): boolean {
  const all = readAllMessages();
  const idx = all.findIndex((m) => m.id === messageId);
  if (idx === -1) return false;
  all[idx].adminReply = adminReply.trim().slice(0, 5000);
  all[idx].respondedAt = new Date().toISOString();
  writeAllMessages(all);
  return true;
}
