const CASES = [
  {
    tag: "製造業 / 少数派の声が届く組織へ",
    title: "多様な声を受容する組織文化へ転換",
    body: "マイノリティリスニングや経営陣との対話を通じ、強い企業文化の副作用を可視化。少数派社員も活躍できる評価制度の改善が継続的に実行されるように",
  },
  {
    tag: "製造業 / 違いを扱う共通言語づくり",
    title: "CQが社内共通言語に、100名以上が習得",
    body: "CQリーダー選抜・ブートキャンプ・サミットを展開。10部署100名以上がCQを理解し、経営トップが全社展開を宣言。浸透度測定まで内部化",
  },
  {
    tag: "インフラ / 変革が定着する土壌づくり",
    title: "ミドル層のリーダーシップが向上、DXが前進",
    body: "現場DXリーダーへのリーダーシップ開発とパーパス議論を実施。「変化へのアレルギー」を解きほぐし、30〜40代ミドル層の主体性を引き出した",
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
            href="/case-study"
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
