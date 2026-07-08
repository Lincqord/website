const STEPS = [
  {
    no: "STEP 1",
    title: "現状を知る",
    body: "アンケートやインタビュー、アセスメントで、組織と一人ひとりの現在地を可視化。課題の構造を明らかにします。",
  },
  {
    no: "STEP 2",
    title: "対話する",
    body: "経営チームから現場まで、立場や世代を越えて本音で語り合える場をつくり、違いを扱える関係を育てます。",
  },
  {
    no: "STEP 3",
    title: "変える",
    body: "リーダーシップ開発・コーチング・変革の伴走支援で、人と組織の行動が実際に変わるところまで支えます。",
  },
  {
    no: "STEP 4",
    title: "成果につなげる",
    body: "変化を定点観測し、エンゲージメントや登用・定着などの組織指標、そして事業の成果へと結びつけます。",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display tracking-[0.2em] text-brand-teal text-sm mb-4">
            SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            課題起点で伴走する、
            <br className="hidden sm:block" />
            4つのステップ
          </h2>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
            研修ありきではなく、貴社の課題が出発点。現状の把握から成果の実感まで、
            4つのステップでご一緒します。
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.no}
              className="bg-white rounded-2xl border border-border p-8 hover:border-brand-teal/40 hover:shadow-lg transition-all flex flex-col"
            >
              <span className="font-display tracking-widest text-sm text-brand-orange">
                {s.no}
              </span>
              <h3 className="mt-3 text-xl font-700 leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted flex-1">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/services"
            className="inline-block btn-primary text-center font-medium px-8 py-3.5 rounded-full shadow-sm"
          >
            サービスの詳細を見る
          </a>
          <a
            href="#contact"
            className="inline-block btn-outline text-center font-medium px-8 py-3.5 rounded-full bg-white"
          >
            サービスについて相談する
          </a>
        </div>
      </div>
    </section>
  );
}
