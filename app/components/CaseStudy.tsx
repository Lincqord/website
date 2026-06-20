const CASES = [
  {
    tag: "製造業 / 大手メーカー",
    title: "外国籍人材の定着率が向上、現場の協働が加速",
    body: "管理職向けCQ研修と1on1コーチングを組み合わせ、異文化マネジメントの土台を構築。離職の主因だった現場のすれ違いを解消。",
  },
  {
    tag: "サービス業 / リゾート運営",
    title: "多国籍チームのエンゲージメントスコアが改善",
    body: "現場リーダーのCQ向上を起点に、対話の質と相互理解が向上。サービス品質と従業員満足の双方に好影響。",
  },
  {
    tag: "商社 / グローバル展開企業",
    title: "DEI戦略を策定し、全社的な推進体制を確立",
    body: "組織診断から戦略策定、制度設計まで伴走。経営の意思決定とCQ視点が結びつき、施策が現場に定着。",
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-display tracking-[0.2em] text-brand-orange text-sm mb-4">
              CASE STUDY
            </p>
            <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
              成果につながる、変革の実績
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-500 text-brand-teal hover:underline shrink-0"
          >
            事例をもっと見る →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* placeholder visual */}
              <div className="h-40 bg-gradient-to-br from-brand-teal/15 to-brand-orange/15" />
              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-500 text-brand-teal">{c.tag}</span>
                <h3 className="mt-3 text-lg font-700 leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
