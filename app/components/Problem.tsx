const PROBLEMS = [
  {
    title: "多様な人材を活かせていない",
    body: "外国籍・中途・若手など、せっかくの“違い”が組織の中で埋もれ、個の力が成果につながっていない。",
  },
  {
    title: "施策が定着しない",
    body: "ダイバーシティ研修やDEI施策を実施しても、現場の行動や文化が変わらず一過性で終わってしまう。",
  },
  {
    title: "組織の一体感が弱い",
    body: "価値観や背景の違いがすれ違いや対立を生み、チームとしての推進力が発揮できていない。",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display tracking-[0.2em] text-brand-orange text-sm mb-4">
            CHALLENGES
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            こんな組織課題は
            <br className="sm:hidden" />
            ありませんか？
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="bg-surface rounded-2xl border border-border p-8 hover:shadow-md transition-shadow"
            >
              <span className="font-display text-5xl font-700 text-brand-teal/25">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-lg font-700 leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-lg lg:text-xl font-500 leading-relaxed">
          その課題、<span className="text-brand-gradient font-700">CQ（文化知性）</span>
          で解決できます。
        </p>
      </div>
    </section>
  );
}
