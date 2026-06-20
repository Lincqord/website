const SERVICES = [
  {
    no: "01",
    title: "組織開発コンサルティング",
    body: "現状の組織課題を可視化し、多様性を成果につなげる仕組みづくりを伴走支援。戦略策定から制度・現場の実装までを一貫してサポートします。",
    points: ["組織診断・アセスメント", "DEI戦略の策定", "制度・仕組みの設計"],
  },
  {
    no: "02",
    title: "エグゼクティブコーチング",
    body: "経営層・リーダーの意思決定と対話の質を高めるコーチング。多様なメンバーの力を引き出すリーダーシップへの変革を後押しします。",
    points: ["1on1コーチング", "リーダーシップ開発", "チームコーチング"],
  },
  {
    no: "03",
    title: "研修・ワークショップ",
    body: "CQ（文化知性）を軸にした実践的な研修プログラム。知識で終わらせず、現場の行動と文化が変わる体験設計を提供します。",
    points: ["CQ向上研修", "異文化マネジメント", "管理職・現場向け研修"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display tracking-[0.2em] text-brand-teal text-sm mb-4">
            SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            “違い”をチカラに変える、
            <br className="hidden sm:block" />
            3つのアプローチ
          </h2>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
            診断・変革・定着まで。組織のフェーズや課題に合わせて、最適なサービスを組み合わせて提供します。
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.no}
              className="group relative rounded-2xl border border-border p-8 lg:p-9 hover:border-brand-teal/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-700 text-brand-gradient">
                  {s.no}
                </span>
                <span className="h-px flex-1 bg-border group-hover:bg-brand-teal/30 transition-colors" />
              </div>

              <h3 className="mt-5 text-xl font-700 leading-snug">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{s.body}</p>

              <ul className="mt-6 space-y-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-brand-gradient text-white font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-sm"
          >
            サービスについて相談する
          </a>
        </div>
      </div>
    </section>
  );
}
