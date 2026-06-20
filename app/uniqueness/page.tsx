import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "CQ（文化知性）とは | Lincqord",
  description:
    "CQ（Cultural Intelligence／文化知性）とは、文化背景の異なる人々と協働し成果を出す力。CQの4つのコンピテンシー、文化対応力の5段階モデル、国民文化を読み解くホフステードの6次元モデルを解説します。",
};

const COMPETENCIES = [
  {
    label: "CQ Drive",
    title: "動機",
    body: "異文化人材との協業意欲の有無。異なる文化に関わろうとする関心と自信。",
  },
  {
    label: "CQ Knowledge",
    title: "知識",
    body: "異文化に関する知識・自己バイアスの理解。文化の違いを捉える土台。",
  },
  {
    label: "CQ Strategy",
    title: "戦略",
    body: "異文化接点に関する設計力の獲得。状況を観察し、計画し、適応する力。",
  },
  {
    label: "CQ Action",
    title: "行動",
    body: "異文化協業の実践と積み重ね。理解を成果ある行動へと変える力。",
  },
];

const STAGES = [
  { no: "01", name: "拒否", en: "Denial", body: "違いを認識しない" },
  { no: "02", name: "二極化", en: "Polarization", body: "違いを良し悪しで判断する" },
  { no: "03", name: "最小化", en: "Minimization", body: "違いを過小評価する" },
  { no: "04", name: "受容", en: "Acceptance", body: "違いを深く理解する" },
  { no: "05", name: "適応", en: "Adaptation", body: "違いに橋をかける" },
];

const DIMENSIONS = [
  { title: "権力格差", body: "権力の不平等を、組織や社会がどの程度受け入れるか。" },
  { title: "集団主義 / 個人主義", body: "個人と集団、どちらの利益を優先する傾向があるか。" },
  { title: "女性性 / 男性性", body: "協調・生活の質を重視するか、競争・達成を重視するか。" },
  { title: "不確実性の回避", body: "曖昧さや不確実な状況を、どの程度許容できるか。" },
  { title: "短期志向 / 長期志向", body: "現在や伝統を重視するか、将来の成果を重視するか。" },
  { title: "抑制 / 放縦", body: "欲求の充足に対して抑制的か、寛容か。" },
];

export default function CQPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="WHAT IS CQ"
        title="CQ（文化知性）とは"
        lead="Lincqord最大の強みであり、すべての起点。CQ（Cultural Intelligence）は、文化背景の異なる人々と協働し、成果を出す力です。"
      />

      {/* CQ definition */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            文化背景の違いを越えて、成果を出す力
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            CQ（文化的知性）とは、文化背景の異なる人々と協働し、成果を出す力のこと。
            グローバル経営が浸透する現代において、多くの組織のリーダーに求められる
            思考と行動のフレームワークであり、方法論です。CQは生まれ持った才能ではなく、
            誰もが開発・改善できるケイパビリティです。
          </p>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* 4 competencies */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            CQを高める4つのコンピテンシー
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            Lincqordは、Drive・Knowledge・Strategy・Action の4要素を起点に、
            組織・人材開発のためのコンサルティングを提供します。
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMPETENCIES.map((c, i) => (
              <div key={c.label} className="rounded-2xl border border-border bg-white p-7">
                <span
                  className={`font-display text-xs tracking-widest ${
                    i % 2 === 0 ? "text-brand-teal" : "text-brand-orange"
                  }`}
                >
                  {c.label}
                </span>
                <h3 className="mt-2 text-lg font-700">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      {/* 5-stage model */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            文化対応力の5段階モデル
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            違いへの向き合い方は、5つの段階で捉えられます。CQが低い「単一のメガネ」から、
            CQが高い「複数のメガネ」へ——組織と個人の成熟を後押しします。
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STAGES.map((s, i) => (
              <div
                key={s.no}
                className="relative rounded-2xl border border-border p-6"
                style={{
                  background: `linear-gradient(135deg, rgba(0,127,137,${0.04 + i * 0.02}) 0%, rgba(255,127,0,${0.02 + i * 0.03}) 100%)`,
                }}
              >
                <span className="font-display text-sm text-muted">{s.no}</span>
                <h3 className="mt-1 text-lg font-700">{s.name}</h3>
                <p className="font-display text-xs tracking-widest text-brand-teal">
                  {s.en}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-between text-xs text-muted font-500">
            <span>← CQが低い（シンプル / 一つのメガネ）</span>
            <span>CQが高い（複雑 / 複数のメガネ）→</span>
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* Hofstede 6 dimensions */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            国民文化を読み解く、ホフステードの6次元モデル
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            文化の違いは、6つの次元で定量的に捉えることができます。
            相互理解の共通言語として、多文化マネジメントの土台になります。
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIMENSIONS.map((d, i) => (
              <div key={d.title} className="rounded-2xl border border-border bg-white p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xl font-700 text-brand-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-700">{d.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      <PageCTA />
    </main>
  );
}
