import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "私たちについて | Lincqord",
  description:
    "株式会社リンクォード（Lincqord）について。ミッション・ビジョン、Difference（違い）の考え方、社名の由来、会社概要、チーム。CQ（文化知性）を軸に“違い”をチカラにする組織づくりを支援します。",
};

const DIFFERENCE_LAYERS = [
  {
    label: "内向きな側面",
    note: "本人の核となる属性",
    items: ["年齢", "性自認", "国籍", "身体能力", "思考スタイル"],
  },
  {
    label: "外向きの側面",
    note: "人生で得た経験・選択",
    items: ["婚姻関係", "雇用形態", "趣味", "出身地", "学歴", "勤続年数", "信条"],
  },
  {
    label: "組織的な側面",
    note: "所属組織に関わる属性",
    items: ["所属部門", "職種", "事業内容", "業界内ポジション", "経済的地位"],
  },
];

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

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="ABOUT"
        title="私たちについて"
        lead="Lincqordは、CQ（文化知性）の知恵を用いるカルチャーの専門家集団。どちらかが一方に同化するのではなく、それぞれの個性を保ったまま協働できる“第三の組織文化”づくりを支援します。"
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
              同じような空間で、同じように考え、同じように働くだけでは、もう何も生まれません。
              現代のビジネスに必要なのは、異なる発想・異なる仕組み・異なる空気——つまり
              “Difference”。そしてその源泉は、異なる人々の調和です。
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
              外国人社員の個性は面倒なものとして扱われていないか。国籍・ジェンダー・年代・
              学歴といった違いのある社員の声は、十分に生かされているか。Lincqordは、
              CQの知恵でその課題に答えを見つけ、全ての社員が力を発揮できる組織づくりを支援します。
            </p>
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
            違いは幾重もの層で重なり合っています。
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {DIFFERENCE_LAYERS.map((layer) => (
              <div
                key={layer.label}
                className="rounded-2xl border border-border bg-white p-7"
              >
                <h3 className="text-lg font-700">{layer.label}</h3>
                <p className="text-xs text-brand-teal mt-1">{layer.note}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {layer.items.map((it) => (
                    <span
                      key={it}
                      className="text-xs rounded-full bg-surface border border-border px-3 py-1 text-foreground/75"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
            複数色のロゴは、&ldquo;違い：Difference&rdquo;を尊重するLincqordの理念を表しています。
          </p>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

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

      <WaveDivider from="surface" to="white" />

      {/* Team */}
      <section id="team" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-display tracking-[0.2em] text-brand-teal text-sm mb-4">
            TEAM
          </p>
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">チーム</h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            多様なバックグラウンドを持つカルチャーの専門家が集い、CQの知恵で組織変革を支援します。
          </p>

          {/* TODO: 実際のメンバー情報（氏名・役職・経歴・写真）に差し替え */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "石井 由香梨",
                role: "代表取締役",
                bio: "Lincqord創業者。CQ（文化知性）を軸に、多様性を組織のチカラへ変える組織・人材開発をリードする。",
              },
              { name: "Member", role: "コンサルタント", bio: "（プロフィール準備中）" },
              { name: "Member", role: "コーチ / ファシリテーター", bio: "（プロフィール準備中）" },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-teal/15 to-brand-orange/15" />
                <h3 className="mt-5 text-lg font-700">{m.name}</h3>
                <p className="text-sm text-brand-teal">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
