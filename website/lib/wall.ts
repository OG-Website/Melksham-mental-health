import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

export interface WallPost {
  id: string;
  userId: string;
  userName: string;
  content: string;
  isAnonymous: boolean;
  createdAt: string;
}

function getWallFilePath(): string {
  if (process.env.WALL_DATA_PATH) return process.env.WALL_DATA_PATH;
  if (process.env.NODE_ENV === 'production') return '/tmp/mmh-wall.json';
  return path.join(process.cwd(), 'data', 'wall.json');
}

function readAllPosts(): WallPost[] {
  try {
    const filePath = getWallFilePath();
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as WallPost[];
  } catch {
    return [];
  }
}

function writeAllPosts(posts: WallPost[]): void {
  const filePath = getWallFilePath();
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf-8');
}

/** Get recent wall posts, newest first. */
export function getRecentPosts(limit = 100): WallPost[] {
  return readAllPosts()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit);
}

/** Create a new wall post. Returns the new post. */
export function createPost(
  userId: string,
  userName: string,
  content: string,
  isAnonymous: boolean,
): WallPost {
  const post: WallPost = {
    id: randomUUID(),
    userId,
    userName,
    content: content.trim().slice(0, 1000),
    isAnonymous,
    createdAt: new Date().toISOString(),
  };
  const all = readAllPosts();
  all.push(post);
  writeAllPosts(all);
  return post;
}

/** Delete a wall post. Only the author or an admin can delete. Returns true if removed. */
export function deletePost(requesterId: string, postId: string, isAdmin: boolean): boolean {
  const all = readAllPosts();
  const idx = all.findIndex(
    (p) => p.id === postId && (p.userId === requesterId || isAdmin),
  );
  if (idx === -1) return false;
  all.splice(idx, 1);
  writeAllPosts(all);
  return true;
}
