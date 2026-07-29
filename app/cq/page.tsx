import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "CQ（文化知性）とは | Lincqord",
  description:
    "CQ（文化的知性）とは、文化背景の異なる人々と協働し、成果を出す力。CQを高める4つの要素（Drive・Knowledge・Strategy・Action）と、組織の現在地がわかる5段階モデルを解説します",
};

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

      {/* 5段階モデル */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            <span className="inline-block">組織の現在地がわかる、</span>
            <span className="inline-block">5段階モデル</span>
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-muted leading-relaxed">
            違いへの向き合い方には、5つの発達段階があります。組織がいまどの段階にいるかがわかると、次に打つべき手も見えてきます
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cq-five-stages.jpg"
            alt="CQの5段階モデル — 拒否・二極化・最小化・受容・適応の段階を上がるほどCQが高い"
            width={1188}
            height={566}
            className="mt-10 mx-auto w-full h-auto"
          />
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cq-four-elements.png"
            alt="CQを高める4つの要素 — Drive（動機）・Knowledge（知識）・Strategy（戦略）・Action（行動）"
            width={1280}
            height={1280}
            className="mt-10 mx-auto w-full max-w-3xl h-auto"
          />
          <p className="mt-12 text-xs leading-relaxed text-muted/80">
            ※ CQはEarley &amp; Angらによって提唱されたCultural Intelligence研究に、5段階モデルはIDI（Intercultural Development Inventory）等の異文化発達研究に基づくフレームワークです
          </p>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
