const STEPS = [
  {
    title: "自分たちを知る",
    body: "組織文化診断やアンケート、アセスメント（LCP等）で、組織と一人ひとりの現在地を可視化します",
  },
  {
    title: "他者と対話する",
    body: "対話の技術を学び、座談会やシステムコーチング®で本音を扱える場を実践し、内省まで深めます",
  },
  {
    title: "個人が育つ",
    body: "研修とコーチングで、一人ひとりの能力と意識を磨き、行動の変化につなげます",
  },
  {
    title: "組織が育つ",
    body: "ビジョンと文化に働きかけ、組織の変化を定着させ、成果へつなげます",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display tracking-[0.2em] text-brand-teal text-lg mb-4">
            SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            課題起点で伴走する、4つのアプローチ
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.title}
              className="bg-white rounded-2xl border border-border p-8 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(3,52,55,0.14)] hover:border-brand-teal/25 flex flex-col"
            >
              <h3 className="text-xl font-700 leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted flex-1">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services"
            className="inline-block btn-primary text-center font-medium px-8 py-3.5 rounded-2xl shadow-sm"
          >
            サービスの詳細を見る
          </a>
          <a href="#contact"
            className="inline-block btn-outline text-center font-medium px-8 py-3.5 rounded-2xl bg-white"
          >
            サービスについて相談する
          </a>
        </div>
      </div>
    </section>
  );
}
