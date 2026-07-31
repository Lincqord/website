const CASES = [
  {
    tag: "エネルギー",
    title: "経営チームの一枚岩化",
    body: "管理会計・評価・採用の基準の見直しが進み、複数の新規ビジネスへの挑戦が続いている",
  },
  {
    tag: "インフラ",
    title: "変革が定着する土壌づくり",
    body: "部門間の関係性が少しずつ良くなり、30〜40代ミドル層のリーダーシップが育ってきた。変革が次の段階へ進みつつある",
  },
  {
    tag: "消費財メーカー",
    title: "「組織からの引き算」で進める女性活躍",
    body: "「変わるべきは女性ではなく、組織の側かもしれない」という気づきが管理職に広がり、仕事のアサインや登用基準を見直す動きが生まれた",
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-display tracking-[0.2em] text-brand-orange text-lg mb-4">
              CASE STUDY
            </p>
            <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
              成果につながる、変革の実績
            </h2>
          </div>
          <a href="/case-study"
            className="text-sm font-500 text-brand-teal hover:underline shrink-0"
          >
            事例をもっと見る →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <article key={c.title}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
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
