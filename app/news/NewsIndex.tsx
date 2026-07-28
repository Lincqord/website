"use client";

import { useState } from "react";
import { displayCategory } from "@/lib/post-display";
import Link from "next/link";

export type NewsCard = {
  id: string;
  title: string; // 表示用（BLOG: 接頭辞除去済み）
  date: string; // 表示用（YYYY.MM.DD）
  category: string;
  image: string | null;
};

const PAGE_SIZE = 12;

// カテゴリごとのサムネイル代替グラデーション（画像なし記事用）
const CATEGORY_COLOR: Record<string, string> = {
  BLOG: "from-brand-teal/20 to-brand-teal/5",
  news: "from-brand-orange/20 to-brand-orange/5",
  "news-en": "from-brand-teal/15 to-brand-orange/15",
};
const DEFAULT_COLOR = "from-foreground/10 to-foreground/5";

export default function NewsIndex({ posts }: { posts: NewsCard[] }) {
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = Array.from(new Set(posts.map((p) => displayCategory(p.category))));
  const filtered = category
    ? posts.filter((p) => displayCategory(p.category) === category)
    : posts;
  const shown = filtered.slice(0, visible);

  const select = (c: string | null) => {
    setCategory(c);
    setVisible(PAGE_SIZE);
  };

  return (
    <div>
      {/* category filter */}
      <div className="flex flex-wrap gap-2">
        <FilterChip label="すべて"
          active={category === null}
          onClick={() => select(null)}
        />
        {categories.map((c) => (
          <FilterChip key={c}
            label={c}
            active={category === c}
            onClick={() => select(category === c ? null : c)}
          />
        ))}
      </div>

      {/* card grid */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {shown.map((p) => (
          <article key={p.id}
            className="group rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
          >
            <Link href={`/news/${p.id}`} className="flex flex-col flex-1">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image}
                  alt=""
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className={`h-40 bg-gradient-to-br ${
                    CATEGORY_COLOR[displayCategory(p.category)] ?? DEFAULT_COLOR
                  } flex items-center justify-center`}
                >
                  <span className="font-display tracking-widest text-foreground/40 text-sm">
                    Lincqord
                  </span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3">
                  <time className="text-xs text-muted font-display tracking-wide">
                    {p.date}
                  </time>
                  <span className="text-xs font-500 text-brand-teal border border-brand-teal/30 rounded-full px-2.5 py-0.5">
                    {displayCategory(p.category)}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-700 leading-snug group-hover:text-brand-teal transition-colors">
                  {p.title}
                </h3>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {filtered.length > visible && (
        <div className="mt-12 text-center">
          <button type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-outline font-medium px-8 py-3 rounded-2xl"
          >
            もっと見る
          </button>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button type="button"
      onClick={onClick}
      className={`text-sm rounded-full px-4 py-1.5 border transition-colors ${
        active
          ? "bg-brand-teal text-white border-brand-teal"
          : "border-border text-foreground/70 hover:border-brand-teal"
      }`}
    >
      {label}
    </button>
  );
}
