import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "ニュース・コラム | Lincqord",
  description:
    "Lincqordのニュース・コラム・セミナー情報。CQ（文化知性）や組織開発に関する発信をお届けします。",
};

// TODO: 実記事 or CMS / 外部ブログ連携に差し替え
const NEWS = [
  { date: "2026.06.01", category: "お知らせ", title: "コーポレートサイトをリニューアルしました" },
  { date: "2026.05.20", category: "コラム", title: "CQ（文化知性）が組織にもたらす3つの変化とは" },
  { date: "2026.05.08", category: "セミナー", title: "【無料ウェビナー】多様性を成果に変える組織づくり" },
  { date: "2026.04.15", category: "コラム", title: "DE&Iが「定着しない」本当の理由" },
  { date: "2026.03.30", category: "お知らせ", title: "新メンバーが加わりました" },
];

export default function NewsPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="INSIGHTS"
        title="知見・ノウハウ"
        lead="お知らせ、組織開発やCQ（文化知性）に関するコラム、セミナー情報をお届けします。"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ul className="divide-y divide-border border-t border-border">
            {NEWS.map((n) => (
              <li key={n.title}>
                <a
                  href="#"
                  className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 hover:bg-surface -mx-4 px-4 rounded-lg transition-colors"
                >
                  <time className="text-sm text-muted font-display tracking-wide shrink-0">
                    {n.date}
                  </time>
                  <span className="text-xs font-500 text-brand-orange border border-brand-orange/30 rounded-full px-3 py-0.5 shrink-0 w-fit">
                    {n.category}
                  </span>
                  <span className="text-base font-500 group-hover:text-brand-teal transition-colors">
                    {n.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
