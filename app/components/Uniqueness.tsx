const CQ_ELEMENTS = [
  {
    label: "動機",
    title: "違いに向き合う意欲",
    body: "違いを避けずに「向き合ってみよう」と思える心のエネルギー",
  },
  {
    label: "知識",
    title: "違いを知る知識",
    body: "何が・なぜ違うのかを理解し、「文化の違い」として捉え直す土台",
  },
  {
    label: "戦略",
    title: "自分を俯瞰し調整する力",
    body: "自分の当たり前を一歩引いて見直し、その場でやり方を修正する力",
  },
  {
    label: "行動",
    title: "行動を変える力",
    body: "相手や状況に合わせて、伝え方や進め方を柔軟に変えられる力",
  },
];

export default function Uniqueness() {
  return (
    <section id="uniqueness" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: narrative */}
          <div>
            <p className="font-display tracking-[0.2em] text-brand-orange text-lg mb-4">
              WHAT IS CQ
            </p>
            <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
              私たちの強みは、
              <br />
              <span className="text-brand-teal">CQ（文化知性）</span>
            </h2>

            <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
              CQ（Cultural Intelligence／文化知性）とは、文化背景の異なる人々と協働し、
              成果を出す力。グローバル時代のリーダーに求められる、思考と行動のフレームワークです
            </p>
            <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted">
              Lincqordは、このCQを体系的に高めるメソッドで、あらゆる&ldquo;違い&rdquo;を
              &ldquo;対立の火種&rdquo;ではなく&ldquo;成果の源泉&rdquo;へと変えていきます
            </p>

            <a
              href="/uniqueness"
              className="inline-block mt-8 btn-outline font-medium px-7 py-3 rounded-2xl"
            >
              CQについて詳しく知る
            </a>
          </div>

          {/* Right: 4 elements */}
          <div>
            <p className="text-sm font-700 text-foreground/70 mb-5">
              CQを構成する4つの力
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {CQ_ELEMENTS.map((el, i) => (
                <div
                  key={el.label}
                  className="bg-white rounded-2xl border border-border p-6"
                >
                  <span
                    className={`text-xs font-700 tracking-widest ${
                      i % 2 === 0 ? "text-brand-teal" : "text-brand-orange"
                    }`}
                  >
                    {el.label}
                  </span>
                  <h3 className="mt-2 text-lg font-700">{el.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {el.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
