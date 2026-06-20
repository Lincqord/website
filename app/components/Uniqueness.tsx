const CQ_ELEMENTS = [
  {
    label: "CQ Drive",
    title: "動機",
    body: "異なる文化や価値観に関わろうとする意欲・関心・自信。",
  },
  {
    label: "CQ Knowledge",
    title: "知識",
    body: "文化による考え方や行動の違いを理解する知識基盤。",
  },
  {
    label: "CQ Strategy",
    title: "戦略",
    body: "状況を観察し、計画し、適応するメタ認知の力。",
  },
  {
    label: "CQ Action",
    title: "行動",
    body: "場面に応じて言動を適切に調整して実践する力。",
  },
];

export default function Uniqueness() {
  return (
    <section id="uniqueness" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: narrative */}
          <div>
            <p className="font-display tracking-[0.2em] text-brand-orange text-sm mb-4">
              UNIQUENESS
            </p>
            <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
              私たちの強みは、
              <br />
              <span className="text-brand-teal">CQ（文化知性）</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted">
              CQ（Cultural Intelligence／文化知性）とは、国籍や世代、価値観などの
              “違い”を超えて協働する力。世界中の研究で、これからの組織に不可欠な
              ケイパビリティとして注目されています。
            </p>
            <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted">
              Lincqordは、このCQを体系的に高めるメソッドで、多様性を
              “対立の火種”ではなく“成果の源泉”へと変えていきます。
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 btn-outline font-medium px-7 py-3 rounded-full"
            >
              CQについて詳しく聞く
            </a>
          </div>

          {/* Right: 4 elements */}
          <div>
            <p className="text-sm font-700 text-foreground/70 mb-5">
              CQを構成する4つの要素
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {CQ_ELEMENTS.map((el, i) => (
                <div
                  key={el.label}
                  className="bg-white rounded-2xl border border-border p-6"
                >
                  <span
                    className={`font-display text-xs tracking-widest ${
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
