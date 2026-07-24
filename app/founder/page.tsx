import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "代表紹介 | Lincqord",
  description:
    "株式会社リンクォード（Lincqord）代表取締役・石井由香梨の紹介。CQ（文化知性）を軸に、経営チームの対話・女性活躍の風土改革・リーダーシップ開発など、組織の「内なる多様性」に向き合う変革に伴走しています",
};

export default function FounderPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="FOUNDER"
        title="代表紹介"
      />

      {/* Profile */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* TODO: 代表写真・詳細経歴（書籍・登壇・資格等）に差し替え */}
          <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start max-w-5xl">
            <div className="aspect-square w-60 lg:w-full rounded-2xl bg-gradient-to-br from-brand-teal/15 to-brand-orange/15" />
            <div>
              <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
                石井 由香梨
              </h2>
              <p className="mt-2 text-sm lg:text-base text-brand-teal">
                代表取締役 / Founder
              </p>
              <p className="mt-6 text-sm lg:text-base leading-relaxed text-muted">
                Lincqord創業者。CQ（文化知性）を軸に、多様性を組織のチカラへ変える組織・人材開発をリードする。
                経営チームの対話、女性活躍の風土改革、リーダーシップ開発など、
                国内組織の「内なる多様性」に向き合う変革の現場に伴走している
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGEセクションは公開時は一旦割愛（後日掲載の可能性あり。復元はgit履歴参照） */}

      <PageCTA />
    </main>
  );
}
