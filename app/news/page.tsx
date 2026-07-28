import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import NewsIndex from "./NewsIndex";
import { getAllPosts, displayTitle, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "知見・ノウハウ | Lincqord",
  description:
    "CQ（文化知性）の基礎知識、組織開発・ダイバーシティに関するコラム、お知らせ、セミナー情報。Lincqordが毎週発信する知見をお届けします",
};

export default function NewsPage() {
  const posts = getAllPosts().map((p) => ({
    id: p.id,
    title: displayTitle(p.title),
    date: formatDate(p.date),
    category: p.category,
    image: p.image,
  }));

  return (
    <main className="flex-1">
      <PageHero eyebrow="INSIGHTS"
        title="知見・ノウハウ"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <NewsIndex posts={posts} />
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
