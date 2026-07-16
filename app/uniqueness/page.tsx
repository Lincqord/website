import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "CQ（文化知性）とは | Lincqord",
  description:
    "CQ（Cultural Intelligence／文化知性）とは、文化背景の異なる人々と協働し成果を出す力。「文化＝私たちのやり方」という考え方、組織の状態を表す5段階モデル、CQを構成する4つの力をわかりやすく解説します",
};

const STAGES = [
  {
    name: "無知・無関心",
    en: "Denial",
    body: "違いに気づいていない。同質的なメンバーで固まり、違いが話題に上らない",
  },
  {
    name: "二極化",
    en: "Polarization",
    body: "違いを善悪で裁く。「私たち vs 彼ら」の対立や陰口が生まれている",
  },
  {
    name: "最小化",
    en: "Minimization",
    body: "「みんな同じ」で済ませる。多数派のやり方が「標準」のまま残っている",
    tag: "多くの企業がここで停滞",
  },
  {
    name: "受容",
    en: "Acceptance",
    body: "違いを深く理解する。異なる意見が安心して出せるようになっている",
  },
  {
    name: "適応",
    en: "Adaptation",
    body: "違いに橋を架け、チカラに変える。違いが成果の源泉になっている",
    tag: "ゴール",
  },
];

const POWERS = [
  {
    plain: "違いに向き合う意欲",
    formal: "動機",
    body: "違いを避けたり面倒がったりせず、「向き合ってみよう」と思える心のエネルギー。すべての出発点です",
  },
  {
    plain: "違いを知る知識",
    formal: "知識",
    body: "何が・なぜ違うのかを知っていること。「あの人の問題」ではなく「文化の違い」として捉え直す土台になります",
  },
  {
    plain: "自分を俯瞰し調整する力",
    formal: "戦略",
    body: "「今、自分の当たり前で判断していないか？」と一歩引いて考え、その場でやり方を見直す力です",
  },
  {
    plain: "行動を変える力",
    formal: "行動",
    body: "理解を行動に移す力。相手や状況に合わせて、伝え方や進め方を柔軟に変えられることです",
  },
];

export default function CQPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="WHAT IS CQ"
        title="CQ（文化知性）とは"
        lead="CQ（Cultural Intelligence）は、文化背景の異なる人々と協働し、成果を出す力。Lincqordのすべての支援の土台にある考え方です"
      />

      {/* 文化＝私たちのやり方 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            文化とは、「私たちのやり方」のこと
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            文化と聞くと、国や民族の話に思えるかもしれません。しかし文化とは、
            もっと身近な「私たちのやり方」のこと。部門には部門の、世代には世代の、
            会社には会社の「当たり前」があります
          </p>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted">
            組織とは、この「私たちのやり方」同士のぶつかり合いです。
            部門間の壁、世代のギャップ、施策が現場に根づかない——
            多くの組織課題の裏には、このぶつかり合いをうまく扱えていないという共通の構造があります
          </p>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted">
            CQ（文化知性）は、その違いを対立の火種ではなく成果の源泉に変える力。
            生まれ持った才能ではなく、誰もが伸ばせる能力です
          </p>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* 5段階モデル */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            組織の現在地がわかる、5段階モデル
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            違いへの向き合い方には、5つの段階があります。
            組織が今どの段階にいるかがわかると、打つべき手も見えてきます。
            多くの企業は3つめの「最小化」——制度は整えたのに実態が変わらない段階——で停滞しています
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STAGES.map((s, i) => (
              <div
                key={s.en}
                className="relative rounded-2xl border border-border p-6"
                style={{
                  background: `linear-gradient(135deg, rgba(0,127,137,${0.04 + i * 0.02}) 0%, rgba(255,127,0,${0.02 + i * 0.03}) 100%)`,
                }}
              >
                <span className="font-display text-sm text-muted">
                  0{i + 1}
                </span>
                <h3 className="mt-1 text-lg font-700">{s.name}</h3>
                <p className="font-display text-xs tracking-widest text-brand-teal">
                  {s.en}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
                {s.tag && (
                  <span className="mt-3 inline-block text-[11px] font-700 text-brand-orange bg-brand-orange/10 border border-brand-orange/30 rounded-full px-2.5 py-0.5">
                    {s.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-between text-xs text-muted font-500">
            <span>← 違いに気づかない</span>
            <span>違いをチカラに変える →</span>
          </div>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      {/* 4つの力 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            CQを構成する、4つの力
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            CQは、4つの力の組み合わせで成り立ちます。
            どれか1つ欠けても、行動は変わりません。
            知識を学ぶ研修だけで組織が変わらないのは、このためです
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {POWERS.map((c, i) => (
              <div
                key={c.plain}
                className="rounded-2xl border border-border bg-white p-7"
              >
                <span
                  className={`font-display text-xs tracking-widest ${
                    i % 2 === 0 ? "text-brand-teal" : "text-brand-orange"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-700 leading-snug">{c.plain}</h3>
                <p className="text-xs text-muted mt-1">（{c.formal}）</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
            Lincqordの支援は、この4つを一気通貫で扱います。知識のインプットに、
            コーチングによる意欲づけ、自分を俯瞰するフレームワーク、行動の実践と振り返りを組み合わせ、
            「学んだのに変わらない」を乗り越えます
          </p>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* 出典注記 */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <p className="text-xs leading-relaxed text-muted/80">
            ※ CQは Earley &amp; Ang らの Cultural Intelligence 研究、5段階モデルは
            IDI（Intercultural Development Inventory）等の異文化発達研究に基づくフレームワークです。
            文化の違いを読み解く際には、国民文化を6つの次元で捉えるホフステードのモデルも活用します
          </p>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      <PageCTA />
    </main>
  );
}
