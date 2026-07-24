import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "採用情報 | Lincqord",
  description:
    "Lincqordの採用情報。CQ（文化知性）を軸に、違いをチカラに変える組織づくりに共に挑む仲間を募集しています",
};

export default function CareersPage() {
  return (
    <main className="flex-1">
      <PageHero eyebrow="CAREERS"
        title="採用情報"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <div className="rounded-2xl border border-border bg-surface px-8 py-14 lg:py-16">
            <h2 className="text-xl lg:text-2xl font-700 tracking-tight">
              現在、募集中のポジションはありません
            </h2>
            <p className="mt-5 text-sm lg:text-base leading-relaxed text-muted">
              新たな募集が開始された際に、こちらのページでお知らせします。
              <br className="hidden sm:block" />
              Lincqordの活動やCQ（文化知性）にご関心のある方は、お気軽にお問い合わせください
            </p>
            <Link href="/contact"
              className="inline-block mt-8 btn-primary font-medium px-8 py-3.5 rounded-2xl"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
