const STEPS = [
  {
    no: "APPROACH 1",
    title: "自分たちを知る",
    body: "組織文化診断やアンケート、アセスメント（LCP等）で、組織と一人ひとりの現在地を可視化します",
  },
  {
    no: "APPROACH 2",
    title: "他者と対話する",
    body: "対話の技術を学び、座談会やシステムコーチング®で本音を扱える場を実践し、内省まで深めます",
  },
  {
    no: "APPROACH 3",
    title: "個人と組織が変わる",
    body: "能力・意識・文化の3つの次元に働きかけ、人と組織の変化を実際に起こします",
  },
  {
    no: "APPROACH 4",
    title: "成果を産む",
    body: "業務テーマの推進と定点観測で、変化を個人と組織の成果へつなげます",
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
            4つのアプローチ
          </h2>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
            研修ありきではなく、貴社の課題が出発点。現状の把握から成果の実感まで、
            4つのアプローチでご一緒します
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
