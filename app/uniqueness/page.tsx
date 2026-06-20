import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "私たちの強み・CQ（文化知性）とは | Lincqord",
  description:
    "Lincqordの独自性。社名の由来、Difference（違い）の考え方、CQ（文化知性／Cultural Intelligence）の定義と、CQを構成する4つの要素（Drive・Knowledge・Strategy・Action）を解説します。",
};

const CQ_ELEMENTS = [
  { label: "CQ Drive", title: "動機", body: "異なる文化や価値観に関わろうとする意欲・関心・自信。多文化環境に踏み出す原動力。" },
  { label: "CQ Knowledge", title: "知識", body: "文化による考え方や行動の違いを理解する知識基盤。価値観や規範の差を捉える土台。" },
  { label: "CQ Strategy", title: "戦略", body: "状況を観察し、計画し、適応するメタ認知の力。場面を読み、打ち手を組み立てる。" },
  { label: "CQ Action", title: "行動", body: "場面に応じて言動を適切に調整して実践する力。理解を成果ある行動へ変える。" },
];

export default function UniquenessPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="UNIQUENESS"
        title="私たちの強み"
        lead="Lincqordの起点にあるのは、CQ（文化知性）。違いを“対立の火種”ではなく“成果の源泉”へと変える、その考え方をご紹介します。"
      />

      {/* 社名の由来 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            社名「Lincqord」に込めた思い
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            Lincqordは、<strong className="text-foreground font-500">Linkage（つながり）</strong>・
            <strong className="text-foreground font-500">CQ（文化知性）</strong>・
            <strong className="text-foreground font-500">Chord（調和）</strong>の3つを組み合わせた造語です。
            「CQの知恵によって、多様な文化的バックグラウンドを持つ人々の心をつなぐ」ことを理念としています。
            複数色のロゴは、私たちが「違い（Difference）」を尊重する姿勢を表現しています。
          </p>
        </div>
      </section>

      {/* Difference */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            Difference（違い）とは何か
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            ひとりひとりが人生で得た属性や経験が&ldquo;Difference&rdquo;、つまり文化を創ります。
            私たちは組織を「Differenceのぶつかり合い」と捉えています。
            似た空間で似た考えのまま働いても、新しいものは生まれません。
            現代のビジネスに必要なのは、異なるアイデア・異なる仕組み・異なる空気——すなわち
            &ldquo;Difference&rdquo;であり、それは多様な人々の調和から生まれます。
          </p>
        </div>
      </section>

      {/* CQ definition + 4 elements */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
              CQ（文化知性）とは何か
            </h2>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
              CQ（Cultural Intelligence／文化知性）とは、「文化背景の異なる人々と協働し、
              成果を出す力」。グローバル時代のリーダーに必須のフレームワークとして、
              世界中の研究で注目されています。Lincqordは、このCQを体系的に高めるメソッドで、
              組織・人材開発を支援します。
            </p>
          </div>

          <p className="mt-12 text-sm font-700 text-foreground/70">
            CQを構成する4つの要素
          </p>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CQ_ELEMENTS.map((el, i) => (
              <div
                key={el.label}
                className="rounded-2xl border border-border p-7"
              >
                <span
                  className={`font-display text-xs tracking-widest ${
                    i % 2 === 0 ? "text-brand-teal" : "text-brand-orange"
                  }`}
                >
                  {el.label}
                </span>
                <h3 className="mt-2 text-lg font-700">{el.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {el.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
