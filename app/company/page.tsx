import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "会社概要 | Lincqord",
  description:
    "株式会社リンクォード（Lincqord）の会社概要。ミッション・ビジョン、Difference（違い）の考え方、社名の由来、会社情報。CQ（文化知性）を軸に“違い”をチカラにする組織づくりを支援します",
};

const COMPANY = [
  ["会社名", "株式会社リンクォード（Lincqord Inc.）"],
  ["代表取締役", "石井 由香梨"],
  ["設立", "2022年1月"],
  ["事業内容", "人材・組織開発に関わるコンサルティング、コーチング、研修"],
  ["資本金", "878万円（利益剰余金含む）"],
  ["本社所在地", "〒104-0041 東京都中央区新富1-7-8 イタクラビル7F"],
  ["適格請求書発行事業者", "T3010001223851"],
  ["URL", "https://lincqord.com/"],
];

export default function CompanyPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="COMPANY"
        title="会社概要"
        lead="Lincqordは、CQ（文化知性）の知恵を用いるカルチャーの専門家集団。それぞれの個性を保ったまま協働できる“第三の組織文化”づくりを支援します"
      />

      {/* Mission / Vision */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-surface p-9 lg:p-11">
            <p className="font-display tracking-[0.2em] text-brand-teal text-sm">
              MISSION
            </p>
            <h2 className="mt-4 text-2xl font-700 leading-snug">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/difference-is-power.png"
                alt="Difference Is Power"
                width={2083}
                height={237}
                className="w-full max-w-[22rem] h-auto"
              />
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              違いは、チカラだ。同じような空間で、同じように考え、同じように働くだけでは、もう何も生まれません。
              現代のビジネスに必要なのは、異なる発想・異なる仕組み・異なる空気——つまり
              “Difference”。組織に必要な“Difference”を築く。それが私たちの使命です
            </p>
          </div>

          <div className="rounded-2xl bg-surface p-9 lg:p-11">
            <p className="font-display tracking-[0.2em] text-brand-orange text-sm">
              VISION
            </p>
            <h2 className="mt-4 text-2xl font-700 leading-snug">
              “違い”をチカラにする組織をつくる
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              国籍・ジェンダー・年代・学歴・部門——違いのある社員の個性が、
              「面倒なもの」として扱われていないか。その声は十分に生かされているか。Lincqordは、
              CQの知恵でその課題に答えを見つけ、全ての社員が力を発揮できる組織づくりを支援します
            </p>
            <Link
              href="/uniqueness"
              className="mt-4 inline-block text-sm font-500 text-brand-teal hover:text-brand-teal-deep underline underline-offset-4"
            >
              CQ（文化知性）とは →
            </Link>
          </div>
        </div>
      </section>

      {/* Differenceをチカラにする組織 */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="rounded-2xl border border-border bg-white p-7 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
              Differenceをチカラにする組織
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/difference-organization.png"
              alt="Differenceをチカラにする組織 — 組織の視点と個人の視点、Logicの世界とMentalityの世界の4象限"
              width={1536}
              height={946}
              className="mt-8 w-full h-auto"
            />
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* Difference */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            Difference（違い）とは何か
          </h2>
          <p className="mt-5 max-w-3xl text-base lg:text-lg leading-relaxed text-muted">
            ひとりひとりが人生で得た属性や経験が&ldquo;Difference&rdquo;、つまり文化を創ります。
            組織とは、私たちのDifferenceのぶつかり合い。&ldquo;あなた自身&rdquo;を中心に、
            違いは幾重もの層で重なり合っています
          </p>

          <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6 lg:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/what-is-difference.jpg"
              alt="Differenceとは何か — あなた自身を中心に、内向きな側面・外向きの側面・組織的な側面が重なり合う同心円"
              width={768}
              height={763}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      {/* Name origin */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            社名「Lincqord」に込めた思い
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            リンクォード／Lincqordという社名は、
            <strong className="text-foreground font-500">Linkage</strong>・
            <strong className="text-foreground font-500">CQ</strong>・
            <strong className="text-foreground font-500">Chord</strong>という
            3つの言葉を重ね合わせたものです。私たちは、CQの知恵によって、
            多様な文化的バックグラウンドを持つ人々の心（Chord）をつなぎます（Linkage）。
            複数色のロゴは、&ldquo;違い：Difference&rdquo;を尊重するLincqordの理念を表しています
          </p>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* Company profile */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">会社情報</h2>
          <dl className="mt-8 border-t border-border">
            {COMPANY.map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-5 border-b border-border"
              >
                <dt className="sm:w-56 shrink-0 text-sm font-700 text-foreground/80">
                  {k}
                </dt>
                <dd className="text-sm text-muted leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-muted">
            代表のプロフィールは
            <Link
              href="/founder"
              className="mx-1 text-brand-teal hover:text-brand-teal-deep underline underline-offset-4"
            >
              代表紹介
            </Link>
            をご覧ください
          </p>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
