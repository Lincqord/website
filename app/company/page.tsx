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
      <PageHero eyebrow="COMPANY"
        title="会社概要"
      />

      {/* Mission / Vision */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-surface p-9 lg:p-11">
            <p className="font-display tracking-[0.2em] text-brand-teal text-lg">
              MISSION
            </p>
            <h2 className="mt-4 text-2xl font-700 leading-snug">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/difference-is-power.png"
                alt="Difference Is Power"
                width={2083}
                height={237}
                className="w-full max-w-[22rem] h-auto"
              />
            </h2>
            <p className="mt-6 text-lg text-foreground">組織は、違いの集合体だ。</p>
            <p className="mt-5 text-lg leading-relaxed text-foreground">
              リンクォードは、個人と組織の文化知性（CQ）を高め、違いを新たな価値や成果へとつなげることを、一人ひとりと、一社一社と、共に実現します。
            </p>
            <p className="mt-6 text-lg text-foreground">違いを、力に。</p>
          </div>

          <div className="rounded-2xl bg-surface p-9 lg:p-11">
            <p className="font-display tracking-[0.2em] text-brand-orange text-lg">
              VISION
            </p>
            <h2 className="mt-4 text-2xl font-700 leading-snug">
              個人と組織が、互いの真価を引き出す社会へ。
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground">
              個人は組織に新しい視点をもたらし、組織は個人の強みを引き出す。互いに影響を与え合うことで、個人も組織も、共に成長していく。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              リンクォードが描くのは、この活かし合う関係があらゆる組織に息づき、個人と組織が共に未来を創る社会です。
            </p>
          </div>
        </div>
        <Link href="/uniqueness"
          className="mt-8 inline-block text-sm font-500 text-brand-teal hover:text-brand-teal-deep underline underline-offset-4"
        >
          CQ（文化知性）とは →
        </Link>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* Lincqordの4つの視点 */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="rounded-2xl border border-border bg-white p-7 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
              Lincqordは4つの視点を持って、クライアントと向き合います
            </h2>
            <div className="relative mt-12 sm:px-14 lg:px-20 sm:py-8">
              {/* 軸と中心点 */}
              <div aria-hidden className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-teal/30" />
              <div aria-hidden className="hidden sm:block absolute top-1/2 left-4 right-4 h-px bg-brand-teal/30" />
              <div aria-hidden className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-orange" />
              {/* 4隅ラベル */}
              <span className="hidden sm:block absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-[#FFF2E5] border border-brand-orange/30 px-7 py-1.5 text-[16px] text-brand-orange tracking-[0.1em]">組織</span>
              <span className="hidden sm:block absolute left-1/2 -bottom-4 -translate-x-1/2 rounded-full bg-[#FFF2E5] border border-brand-orange/30 px-7 py-1.5 text-[16px] text-brand-orange tracking-[0.1em]">個人</span>
              <span className="hidden sm:block absolute -left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#FFF2E5] border border-brand-orange/30 px-7 py-1.5 text-[16px] text-brand-orange tracking-[0.1em]">論理</span>
              <span className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#FFF2E5] border border-brand-orange/30 px-7 py-1.5 text-[16px] text-brand-orange tracking-[0.1em]">心理</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-14 sm:gap-y-12">
                {[
                  [
                    "激変する外部環境は、事業にどんな影響を与えているか？",
                    "経営戦略・組織戦略は、その変化に応えられているか？",
                  ],
                  [
                    "今の組織文化は事業を推進させているか？阻害しているか？",
                    "未来を見据えた時に、どのような組織文化が必要なのか？",
                  ],
                  [
                    "事業を推進する力は、いま十分に備わっているか？",
                    "これからの事業に、どんな能力が必要になるのか？",
                  ],
                  [
                    "リーダーシップの発揮を阻む思い込みはなにか？",
                    "どんな価値観や経験が、その人の判断とリーダーシップを形づくっているか？",
                  ],
                ].map((qs, i) => (
                  <div key={i}
                    className="rounded-xl border border-border bg-white p-6 shadow-[0_4px_16px_rgba(3,52,55,0.05)]"
                  >
                    {qs.map((q) => (
                      <p key={q} className="text-sm leading-loose text-foreground [&+&]:mt-3 mt-3 first:mt-0">
                        {q}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-10 text-center text-sm text-muted">
              Lincqordは、この4つの視点を行き来しながら、課題の本質を捉えます
            </p>
          </div>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      {/* Difference */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            Difference（違い）とは何か
          </h2>
          <p className="mt-5 mx-auto max-w-3xl text-base lg:text-lg leading-relaxed text-muted">
            ひとりひとりが人生で得た属性や経験が&ldquo;Difference&rdquo;、つまり文化を創ります。組織とは、私たちのDifferenceのぶつかり合い。&ldquo;あなた自身&rdquo;を中心に、違いは幾重もの層で重なり合っています
          </p>

          <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6 lg:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/difference-circles.png"
              alt="Differenceとは何か — あなた自身を中心に、内向きな側面・外向きの側面・組織的な側面が重なり合う同心円"
              width={1200}
              height={1234}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* Name origin */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
            社名「Lincqord」に込めた思い
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
            リンクォード／Lincqordという社名は、
            <strong className="text-foreground font-500">Linkage</strong>・
            <strong className="text-foreground font-500">CQ</strong>・
            <strong className="text-foreground font-500">Chord</strong>という3つの言葉を重ね合わせたものです。私たちは、CQの知恵によって、多様な文化的バックグラウンドを持つ人々の心（Chord）をつなぎます（Linkage）。複数色のロゴは、&ldquo;違い：Difference&rdquo;を尊重するLincqordの理念を表しています
          </p>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      {/* Company profile */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">会社情報</h2>
          <dl className="mt-8 border-t border-border">
            {COMPANY.map(([k, v]) => (
              <div key={k}
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
            <Link href="/founder"
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
