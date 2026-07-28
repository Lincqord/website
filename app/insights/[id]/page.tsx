import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageCTA from "../../components/PageCTA";
import WaveDivider from "../../components/WaveDivider";
import { getAllPosts, getPost, displayTitle, formatDate } from "@/lib/posts";
import { displayCategory } from "@/lib/post-display";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = getPost(id);
  if (!post) return {};
  return {
    title: `${displayTitle(post.title)} | Lincqord`,
    description: post.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) notFound();

  return (
    <main className="flex-1">
      {/* article header */}
      <section className="relative overflow-hidden bg-surface pt-16 lg:pt-20">
        <div className="relative mx-auto max-w-3xl w-full px-5 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-500 text-brand-teal border border-brand-teal/30 rounded-full px-2.5 py-0.5">
              {displayCategory(post.category)}
            </span>
            <time className="text-sm text-muted font-display tracking-wide">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="mt-5 text-2xl lg:text-4xl font-900 leading-snug tracking-tight">
            {displayTitle(post.title)}
          </h1>
        </div>
      </section>
      <WaveDivider from="surface" to="white" />

      {/* article body */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          {post.image && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={post.image}
              alt=""
              width={1200}
              height={630}
              className="w-full h-auto max-h-[420px] object-cover rounded-2xl mb-10"
            />
          )}
          <div className="article-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-14 pt-8 border-t border-border">
            <Link href="/insights"
              className="text-sm font-500 text-brand-teal hover:underline"
            >
              ← 知見・ノウハウ一覧へ戻る
            </Link>
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
