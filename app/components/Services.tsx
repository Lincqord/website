const PILLARS = [
  {
    no: "01",
    category: "コンサルティング・組織開発",
    title: "組織の“違い”を、成果の源泉に変える",
    body: "現状の可視化から戦略・仕組みの実装まで伴走。多様性が活きる組織文化を築きます。",
    items: [
      "DE&I戦略の策定・推進",
      "組織文化の診断・改善",
      "経営チームの一枚岩化",
      "女性活躍推進 / ビジョン策定・浸透",
      "グローバル経営・DXカルチャー醸成",
    ],
  },
  {
    no: "02",
    category: "トレーニング・人材開発",
    title: "“違い”を活かすリーダーと人材を育てる",
    body: "CQ（文化知性）を軸に、経営層から現場まで、実務で成果を出す力を開発します。",
    items: [
      "次世代経営層・グローバルリーダー育成",
      "女性リーダー育成",
      "リテラシー / リーダーシップ開発",
      "駐在員のセレクション・能力開発",
      "外国人・日本人社員のCQ力開発",
    ],
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
            2つのソリューション
          </h2>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
            組織のフェーズや課題に合わせて、コンサルティングとトレーニングを組み合わせて提供します。
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.no}
              className="group relative rounded-2xl border border-border p-8 lg:p-10 hover:border-brand-teal/40 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-700 text-brand-gradient">
                  {p.no}
                </span>
                <span className="font-display tracking-wide text-sm text-brand-teal">
                  {p.category}
                </span>
              </div>

              <h3 className="mt-5 text-xl lg:text-2xl font-700 leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>

              <a
                href="/services"
                className="mt-7 inline-flex items-center gap-1 text-sm font-500 text-brand-teal hover:gap-2 transition-all"
              >
                詳しく見る →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block btn-primary font-medium px-8 py-3.5 rounded-full shadow-sm"
          >
            サービスについて相談する
          </a>
        </div>
      </div>
    </section>
  );
}
