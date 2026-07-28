import fs from "node:fs";
import path from "node:path";

// content/posts/{id}.json を読み込むヘルパー（Server Component / ビルド時専用）

export type Post = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  html: string;
  excerpt: string;
  oldPath: string;
  image: string | null;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cache) return cache;
  cache = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = JSON.parse(
        fs.readFileSync(path.join(POSTS_DIR, f), "utf8"),
      ) as Omit<Post, "id">;
      return { id: f.replace(/\.json$/, ""), ...raw };
    })
    // 日付降順（同日は記事ID降順）
    .sort((a, b) =>
      a.date === b.date
        ? Number(b.id) - Number(a.id)
        : a.date < b.date
          ? 1
          : -1,
    );
  return cache;
}

export function getPost(id: string): Post | undefined {
  return getAllPosts().find((p) => p.id === id);
}

// 表示用: タイトル先頭の「BLOG:」「BLOG：」「BLOG 」等の接頭辞を除去（データは原文保持）
export function displayTitle(title: string): string {
  return title.replace(/^[\s　 ]*BLOG[\s　 ]*[:：]?[\s　 ]*/i, "").trim();
}

// 表示用: 2026-06-26 -> 2026.06.26
export function formatDate(date: string): string {
  return date.replaceAll("-", ".");
}
