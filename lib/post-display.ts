/** WPの実カテゴリ→サイト表示名（データは原文保持、表示のみ変換。クライアント/サーバー両用） */
const CATEGORY_DISPLAY: Record<string, string> = {
  未分類: "BLOG",
  news: "お知らせ",
  "news-en": "お知らせ",
};

export function displayCategory(raw: string): string {
  return CATEGORY_DISPLAY[raw] ?? raw;
}
