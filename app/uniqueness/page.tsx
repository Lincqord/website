import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "CQ（文化知性）とは | Lincqord",
  description:
    "CQ（文化的知性）とは、文化背景の異なる人々と協働し、成果を出す力。社名Lincqordに込めた思い、Difference（違い）の考え方、CQを高める4つの要素（Drive・Knowledge・Strategy・Action）をご紹介します",
};

export default function CQPage() {
  return (
    <main className="flex-1">
      <PageHero eyebrow="UNIQUENESS" title="CQ（文化知性）とは" />

      {/* 社名に込めた思い */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
            Lincqordという社名に込めた思い
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            リンクォード／Lincqordという社名は、Linkage、CQ、Chordという3つの言葉を重ね合わせたものです。私たちは、CQの知恵によって多様な文化的バックグラウンドを持つ人々の心（Chord）をつなぎます（Linkage）。複数色のロゴは“違い：Difference”を尊重するLincqordの理念を表現したものです
          </p>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* Differenceとはなにか */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            Differenceとはなにか
          </h2>
          <p className="mt-5 mx-auto max-w-3xl text-base lg:text-lg leading-relaxed text-muted">
            ひとりひとりの人生で得た属性や経験がDifference、つまり文化を創る。組織とは私たちのDifferenceのぶつかり合い
          </p>
          <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6 lg:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/difference-circles.png"
              alt="Differenceとは何か — あなた自身を中心に、内向きな側面・外向きの側面・組織的な側面が重なり合う同心円"
              width={1200}
              height={1234}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      {/* Differenceをチカラにする組織 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            Differenceをチカラにする組織
          </h2>
          <div className="mt-10 rounded-2xl border border-border bg-white p-6 lg:p-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/difference-organization.png"
              alt="Differenceをチカラにする組織 — 組織の視点と個人の視点、Logicの世界とMentalityの世界の4象限"
              width={1536}
              height={946}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* CQとはなにか */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
            CQ：文化知性とはなにか？
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            CQ（文化的知性）とは文化背景の異なる人々と協働し、成果を出す力のことです。グローバル経営が浸透する現代においては、多くの組織のリーダーに求められる思考と行動のフレームワークであり、方法論です
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
            CQは誰でも開発・改善できるケイパビリティであり、様々な企業が4要素を伸ばす取り組みを進めています。Lincqordは文化の専門家集団としてCQの4つのコンピテンシーであるDrive／Knowledge／Strategy／Actionを起点にした組織・人材開発のためのコンサルティング・サービスを提供します
          </p>
          <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6 lg:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cq-four-elements.png"
              alt="CQを高める4つの要素 — Drive（動機）・Knowledge（知識）・Strategy（戦略）・Action（行動）"
              width={1200}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
