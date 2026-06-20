import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "会社概要・私たちについて | Lincqord",
  description:
    "株式会社リンクォード（Lincqord）について。ミッション・ビジョンと会社概要。CQ（文化知性）を軸に、違いをチカラにする組織づくりを支援するカルチャーの専門家集団です。",
};

const COMPANY = [
  ["会社名", "株式会社リンクォード（Lincqord Inc.）"],
  ["代表取締役", "石井 由香梨"],
  ["設立", "2022年1月"],
  ["事業内容", "人材・組織開発コンサルティング、コーチング、研修"],
  ["資本金", "878万円（利益剰余金含む）"],
  ["本社所在地", "〒104-0041 東京都中央区新富1-7-8 イタクラビル7F"],
  ["適格請求書発行事業者", "T3010001223851"],
  ["URL", "https://lincqord.com/"],
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="ABOUT"
        title="私たちについて"
        lead="Lincqordは、CQ（文化知性）の原則を実践するカルチャーの専門家集団。異なる人々やグループが、どちらかに同化するのではなく、それぞれの個性を保ったまま協働できる“第三の組織文化”づくりを支援します。"
      />

      {/* Mission / Vision */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-surface p-9 lg:p-11">
            <p className="font-display tracking-[0.2em] text-brand-teal text-sm">
              MISSION
            </p>
            <h2 className="mt-4 text-2xl font-700 leading-snug">
              組織に必要な“Difference”を築く
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              似た空間で似た考えのまま働いても、新しいものは生まれません。
              現代のビジネスに必要なのは、異なるアイデア・仕組み・空気——
              すなわち“Difference”。私たちは、多様な人々の調和からそれを生み出す
              第三の組織文化づくりに取り組みます。
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
              国籍・ジェンダー・年代・学歴など、ひとりひとりの違いを“面倒なもの”ではなく
              組織の資産として活かせているか。Lincqordは、CQの知恵によってその課題に答えを見つけ、
              全ての社員が力を発揮できる組織づくりを支援します。
            </p>
          </div>
        </div>
      </section>

      {/* Company profile */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">会社概要</h2>
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
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
