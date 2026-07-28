import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "CQ（文化知性）とは | Lincqord",
  description:
    "CQ（文化的知性）とは、文化背景の異なる人々と協働し、成果を出す力。文化＝「私たちのやり方」という考え方、CQを高める4つの要素（Drive・Knowledge・Strategy・Action）、組織の現在地がわかる5段階モデルを解説します",
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

export default function CQPage() {
  return (
    <main className="flex-1">
      <PageHero eyebrow="WHAT IS CQ" title="CQ（文化知性）とは" />

      {/* 定義 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
            文化背景の異なる人々と協働し、成果を出す力
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            CQ（Cultural Intelligence／文化的知性）とは、文化背景の異なる人々と協働し、成果を出す力のことです。グローバル経営が浸透する現代においては、多くの組織のリーダーに求められる思考と行動のフレームワークであり、方法論です
          </p>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted">
            CQは生まれ持った才能ではありません。誰でも開発・改善できるケイパビリティです
          </p>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* 文化＝私たちのやり方 */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
            文化とは、「私たちのやり方」のこと
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            文化と聞くと、国や民族の話に思えるかもしれません。しかし文化とは、もっと身近な「私たちのやり方」のこと。部門には部門の、世代には世代の、会社には会社の「当たり前」があります
          </p>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted">
            組織とは、この「私たちのやり方」同士のぶつかり合いです。部門間の壁、世代のギャップ、施策が現場に根づかない——多くの組織課題の裏には、この違いをうまく扱えていないという共通の構造があります。CQは、その違いを対立の火種ではなく、成果の源泉に変えるチカラです
          </p>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      {/* CQを高める4つの要素 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            CQを高める4つの要素
          </h2>
          <p className="mt-5 mx-auto max-w-3xl text-base lg:text-lg leading-relaxed text-muted">
            Lincqordは文化の専門家集団として、CQの4つのコンピテンシーであるDrive／Knowledge／Strategy／Actionを起点にした組織・人材開発のためのコンサルティング・サービスを提供します
          </p>
          <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6 lg:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cq-four-elements.png"
              alt="CQを高める4つの要素 — Drive（動機）・Knowledge（知識）・Strategy（戦略）・Action（行動）"
              width={1280}
              height={1280}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* 5段階モデル */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
            組織の現在地がわかる、5段階モデル
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-center text-muted leading-relaxed">
            違いへの向き合い方には、5つの発達段階があります。組織がいまどの段階にいるかがわかると、次に打つべき手も見えてきます
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STAGES.map((s, i) => (
              <div
                key={s.en}
                className="relative rounded-2xl border border-border bg-white p-6"
              >
                <span className="font-display text-sm text-muted">0{i + 1}</span>
                <h3 className="mt-1 text-lg font-700">{s.name}</h3>
                <p className="font-display text-xs tracking-widest text-brand-teal">
                  {s.en}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
                {s.tag && (
                  <span className="mt-3 inline-block rounded-full bg-[#FFF2E5] border border-brand-orange/30 px-2.5 py-0.5 text-[11px] text-brand-orange">
                    {s.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-between text-xs text-muted">
            <span>← 違いに気づかない</span>
            <span>違いをチカラに変える →</span>
          </div>

          <p className="mt-12 text-center text-xs leading-relaxed text-muted/80">
            ※ CQはEarley &amp; Angらによって提唱されたCultural Intelligence研究に、5段階モデルはIDI（Intercultural Development Inventory）等の異文化発達研究に基づくフレームワークです
          </p>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      <PageCTA />
    </main>
  );
}
