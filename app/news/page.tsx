import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "知見・ノウハウ | Lincqord",
  description:
    "CQ（文化知性）の基礎知識、組織開発・ダイバーシティに関するコラム、お知らせ、セミナー情報。Lincqordが毎週発信する知見をお届けします",
};

type Post = {
  date: string;
  category: "CQの基礎知識" | "コラム" | "お知らせ" | "セミナー";
  title: string;
};

// TODO: 公開済みブログ(約30本)を実データ/CMS連携で差し替え。日付は公開日(毎週金曜)。
const POSTS: Post[] = [
  { date: "2026.06.19", category: "CQの基礎知識", title: "CQ Drive：異文化に踏み出す“動機”をどう高めるか" },
  { date: "2026.06.12", category: "CQの基礎知識", title: "CQ Knowledge：自己バイアスに気づくための第一歩" },
  { date: "2026.06.05", category: "コラム", title: "DE&Iが「定着しない」本当の理由" },
  { date: "2026.05.29", category: "CQの基礎知識", title: "CQ Strategy：異文化接点を“設計”する視点" },
  { date: "2026.05.22", category: "CQの基礎知識", title: "CQ Action：理解を成果に変える行動の積み重ね" },
  { date: "2026.05.15", category: "セミナー", title: "【無料ウェビナー】多様性を成果に変える組織づくり" },
  { date: "2026.05.08", category: "CQの基礎知識", title: "文化対応力の5段階モデルとは？" },
  { date: "2026.05.01", category: "コラム", title: "ホフステードの6次元で読み解く“すれ違い”" },
  { date: "2026.04.24", category: "お知らせ", title: "コーポレートサイトをリニューアルしました" },
];

const CATEGORIES = ["すべて", "CQの基礎知識", "コラム", "セミナー", "お知らせ"];

const CATEGORY_COLOR: Record<Post["category"], string> = {
  "CQの基礎知識": "from-brand-teal/20 to-brand-teal/5",
  コラム: "from-brand-orange/20 to-brand-orange/5",
  セミナー: "from-brand-teal/15 to-brand-orange/15",
  お知らせ: "from-foreground/10 to-foreground/5",
};

export default function NewsPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="INSIGHTS"
        title="知見・ノウハウ"
        lead="CQ（文化知性）の基礎知識を中心に、組織開発やダイバーシティに関するコラム・セミナー情報を、毎週発信しています"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* category filter (表示のみ・後でフィルタ機能を実装) */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c, i) => (
              <span
                key={c}
                className={`text-sm rounded-full px-4 py-1.5 border transition-colors cursor-default ${
                  i === 0
                    ? "bg-brand-teal text-white border-brand-teal"
                    : "border-border text-foreground/70 hover:border-brand-teal"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* card grid */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* thumbnail placeholder (キャッチ画像は後で差し替え可) */}
                <div
                  className={`h-40 bg-gradient-to-br ${CATEGORY_COLOR[p.category]} flex items-center justify-center`}
                >
                  <span className="font-display tracking-widest text-foreground/40 text-sm">
                    Lincqord
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3">
                    <time className="text-xs text-muted font-display tracking-wide">
                      {p.date}
                    </time>
                    <span className="text-xs font-500 text-brand-teal border border-brand-teal/30 rounded-full px-2.5 py-0.5">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-700 leading-snug group-hover:text-brand-teal transition-colors">
                    {p.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              className="btn-outline font-medium px-8 py-3 rounded-full"
            >
              もっと見る
            </button>
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
